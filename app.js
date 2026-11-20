(() => {
  const STORAGE_KEY = "pinkbyte-it1140-v1";
  const CHAPTER_QUESTION_COUNT = 10;
  const MISTAKE_QUESTION_COUNT = 10;
  const MIDTERM_QUESTION_COUNT = 12;
  const MAX_ATTEMPTS = 250;
  const LEVEL_ORDER = ["easy", "core", "apply", "trap"];
  const LEVEL_LABELS = {
    easy: "Nền tảng",
    core: "Thông hiểu",
    apply: "Vận dụng",
    trap: "Bẫy chi tiết",
  };
  const LETTERS = ["A", "B", "C", "D"];
  const app = document.getElementById("app");

  let state = readState();
  let nameDialogOpen = !state.userName;
  let screen = "home";
  let session = null;
  let currentResult = null;
  let resultOrigin = "live";
  let lessonSession = null;
  let historyFilter = "all";
  let chatOpen = false;
  let toastTimer = null;

  function readState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return {
        history: Array.isArray(saved.history) ? saved.history : [],
        lastSets: saved.lastSets && typeof saved.lastSets === "object" ? saved.lastSets : {},
        chatMessages: Array.isArray(saved.chatMessages) ? saved.chatMessages : [],
        userName: typeof saved.userName === "string" ? saved.userName : "",
        theme: saved.theme === "kuromi" ? "kuromi" : "doraemon",
        learningProgress: saved.learningProgress && typeof saved.learningProgress === "object" ? saved.learningProgress : {},
      };
    } catch {
      return { history: [], lastSets: {}, chatMessages: [], userName: "", theme: "doraemon", learningProgress: {} };
    }
  }

  function saveState() {
    try {
      state.history = state.history.slice(0, MAX_ATTEMPTS);
      state.chatMessages = (state.chatMessages || []).slice(-40);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      showToast("Trình duyệt chưa cho phép lưu lịch sử trên thiết bị này.");
    }
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[char]);
  }

  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function chapterById(id) {
    return window.CHAPTERS.find((chapter) => chapter.id === Number(id));
  }

  function getAttemptsFor(chapterId) {
    return state.history.filter((attempt) => Number(attempt.chapterId) === Number(chapterId) && attempt.mode !== "midterm");
  }

  function getMistakesFor(chapterId) {
    return state.history.flatMap((attempt) => (attempt.questions || [])
      .filter((question) => Number(question.chapterId || attempt.chapterId) === Number(chapterId)
        && question.selectedIndex !== question.answerIndex)
      .map((question) => ({ ...question, chapterId: Number(question.chapterId || attempt.chapterId) })));
  }

  function attemptTotal(attempt) {
    return Number(attempt.totalCount || attempt.questions?.length || CHAPTER_QUESTION_COUNT);
  }

  function attemptLabel(attempt) {
    if (attempt.mode === "midterm" || Number(attempt.chapterId) === 0) return "Ôn thi giữa kỳ";
    if (attempt.mode === "lesson") return attempt.lessonTitle || "Bài giảng · " + (chapterById(attempt.chapterId)?.title || "Chương học");
    return chapterById(attempt.chapterId)?.title || "Lượt ôn tập";
  }

  function attemptMatchesFilter(attempt, filter) {
    if (filter === "all") return true;
    if (filter === "midterm") return attempt.mode === "midterm" || Number(attempt.chapterId) === 0;
    const id = Number(filter);
    return Number(attempt.chapterId) === id
      || (attempt.questions || []).some((question) => Number(question.chapterId) === id);
  }

  function formatDate(value, withTime = true) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Vừa xong";
    return new Intl.DateTimeFormat("vi-VN", withTime
      ? { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }
      : { day: "numeric", month: "long", year: "numeric" }).format(date);
  }

  function formatDuration(seconds = 0) {
    const safeSeconds = Math.max(0, Math.floor(seconds));
    const mins = Math.floor(safeSeconds / 60);
    const secs = safeSeconds % 60;
    return mins ? `${mins} phút ${String(secs).padStart(2, "0")} giây` : `${secs} giây`;
  }

  function averageScore(attempts) {
    if (!attempts.length) return 0;
    const answered = attempts.reduce((sum, attempt) => sum + Number(attempt.correctCount || 0), 0);
    const total = attempts.reduce((sum, attempt) => sum + attemptTotal(attempt), 0);
    return total ? Math.round(answered / total * 100) : 0;
  }

  function setNavActive() {
    document.querySelectorAll(".topnav .nav-link").forEach((button) => {
      const isActive = (screen === "history" && button.dataset.action === "history")
        || ((screen === "home" || screen === "quiz" || screen === "result" || screen === "lesson-list" || screen === "lesson") && button.dataset.action === "home");
      button.classList.toggle("active", isActive);
    });
  }

  function render() {
    applyTheme();
    updateProfile();
    setNavActive();
    if (screen === "home") app.innerHTML = renderHome();
    if (screen === "quiz") app.innerHTML = renderQuiz();
    if (screen === "result") app.innerHTML = renderResult();
    if (screen === "history") app.innerHTML = renderHistory();
    if (screen === "lesson-list") app.innerHTML = renderLessons();
    if (screen === "lesson") app.innerHTML = renderLesson();
    renderChatWidget();
    renderNameDialog();
  }

  function applyTheme() {
    const theme = state.theme === "kuromi" ? "kuromi" : "doraemon";
    state.theme = theme;
    document.body.dataset.theme = theme;
    const image = document.querySelector(".doraemon-backdrop img");
    const asset = theme === "kuromi" ? "assets/kuromi-wallpaper.svg" : "assets/doraemon-wallpaper.svg";
    if (image && !image.getAttribute("src")?.endsWith(asset)) image.setAttribute("src", asset);
    document.querySelectorAll(".theme-option").forEach((button) => {
      const active = button.dataset.themeChoice === theme;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function updateProfile() {
    const avatar = document.querySelector(".avatar-button");
    if (!avatar) return;
    const firstCharacter = Array.from(state.userName.trim())[0] || "?";
    avatar.textContent = firstCharacter.toLocaleUpperCase("vi-VN");
    avatar.title = state.userName ? `Đổi tên · ${state.userName}` : "Nhập tên";
    avatar.setAttribute("aria-label", state.userName ? "Đổi tên hiển thị" : "Nhập tên hiển thị");
  }

  function renderHome() {
    const completedChapters = new Set(state.history.flatMap((attempt) => attempt.chapterId
      ? [Number(attempt.chapterId)]
      : (attempt.questions || []).map((question) => Number(question.chapterId)).filter(Boolean))).size;
    const avg = averageScore(state.history);
    const recent = state.history[0];
    const cards = window.CHAPTERS.map((chapter) => {
      const attempts = getAttemptsFor(chapter.id);
      const best = attempts.reduce((score, attempt) => Math.max(score, Number(attempt.correctCount || 0)), 0);
      const mistakes = getMistakesFor(chapter.id).length;
      const chapterLessons = window.IT1140_LESSONS?.[chapter.id] || [];
      const doneLessons = chapterLessons.filter((_, index) => state.learningProgress[chapter.id + "-" + index]?.completed).length;
      const cardTopic = escapeHtml(chapter.topic);
      return `
        <article class="chapter-card" style="--chapter-accent:${chapter.color};--chapter-soft:${chapter.soft}">
          <div class="chapter-card-top">
            <span class="chapter-number">CHƯƠNG ${String(chapter.id).padStart(2, "0")}</span>
            <span class="chapter-illustration" aria-hidden="true">${chapter.icon}</span>
          </div>
          <h3>${escapeHtml(chapter.title)}</h3>
          <p class="chapter-topic">${cardTopic}</p>
          <div class="chapter-card-bottom">
            <div class="chapter-stats">
              <span><strong>${attempts.length ? `${attempts.length} lượt` : "Chưa có lượt"}</strong> đã hoàn thành</span>
              <span><strong>${chapter.questions.length} câu</strong> trong ngân hàng</span>
              <span><strong>${doneLessons}/${chapterLessons.length} phần</strong> đã học</span>
              ${attempts.length ? `<span><strong>${best}/${attemptTotal(attempts[0])}</strong> điểm cao nhất</span>` : ""}
            </div>
            <div class="chapter-card-actions">
              <button class="teach-button" data-action="teach" data-id="${chapter.id}">Giảng dạy <span>✦</span></button>
              <button class="start-button" data-action="start" data-id="${chapter.id}">Luyện chương <span>↗</span></button>
              <button class="mistake-button" data-action="mistakes" data-id="${chapter.id}" title="Làm 10 câu từ nội dung đã sai">Ôn lỗi sai <span>${mistakes}</span></button>
            </div>
          </div>
        </article>`;
    }).join("");

    const progressWidth = Math.round((completedChapters / window.CHAPTERS.length) * 100);
    return `
      <section class="welcome-row">
        <div class="welcome-copy">
          <div class="eyebrow"><span class="eyebrow-mark">✿</span> GÓC HỌC TẬP CỦA BẠN</div>
          <h1 class="page-title">Học chắc từng ý,<br /><em>thi vững từng chương.</em></h1>
          <p class="page-subtitle">Chào ${escapeHtml(state.userName || "bạn")}! Mỗi chương có ngân hàng 200 câu. Luyện đề ngẫu nhiên, ôn lại lỗi sai, hoặc thử đề giữa kỳ tổng hợp 6 chương.</p>
          <div class="hero-decoration" aria-hidden="true"><span>✦</span><span>✿</span><span>✧</span></div>
          <span class="hero-spark" aria-hidden="true">✦</span>
        </div>
        <aside class="study-card">
          <div class="study-card-head"><span>HÀNH TRÌNH ÔN TẬP</span><span aria-hidden="true">♡</span></div>
          <div class="study-metric"><strong>${completedChapters}<small style="font-size:22px;color:#b5a1ae">/6</small></strong><span>chương đã luyện</span></div>
          <div class="mini-progress"><span style="width:${progressWidth}%"></span></div>
          <div class="study-card-foot"><span>${state.history.length} lượt đã làm</span><strong>${state.history.length ? `TB ${avg}%` : "Cùng bắt đầu nhé"}</strong></div>
        </aside>
      </section>

      <section class="midterm-card" aria-label="Ôn thi giữa kỳ">
        <div class="midterm-orbit" aria-hidden="true"><span>✦</span><span>✿</span><span>✧</span></div>
        <div class="midterm-copy"><span class="midterm-kicker">TỔNG HỢP 6 CHƯƠNG</span><h2>Ôn thi giữa kỳ</h2><p>12 câu được chọn ngẫu nhiên từ ngân hàng 1.200 câu, mỗi chương góp 2 câu.</p></div>
        <button class="primary-button midterm-button" data-action="midterm">Bắt đầu đề giữa kỳ <span>→</span></button>
      </section>

      <section aria-labelledby="chapter-heading">
        <div class="section-heading">
          <div><h2 id="chapter-heading">Sáu chương học</h2><p>1.200 câu trong ngân hàng · 10 câu mỗi lượt · có mục ôn lỗi sai riêng</p></div>
          <button class="quiet-link" data-action="history">Xem lịch sử <span>→</span></button>
        </div>
        <div class="chapter-grid">${cards}</div>
      </section>

      <div class="home-note"><span class="note-icon" aria-hidden="true">✧</span><span><strong>Yên tâm nhé, lịch sử đã có chỗ nhớ.</strong> Kết quả và giải thích của từng câu được lưu trên trình duyệt này để bạn xem lại bất cứ lúc nào.${recent ? ` Lượt gần nhất: ${escapeHtml(attemptLabel(recent))}, ${recent.correctCount}/${attemptTotal(recent)}.` : ""}</span></div>`;
  }

  function chooseQuestions(chapter, count, previousIds = [], storeKey = null) {
    const previousFamilies = new Set(chapter.questions.filter((question) => previousIds.includes(question.id)).map((question) => question.familyId));
    let candidates = chapter.questions.filter((question) => !previousIds.includes(question.id) && !previousFamilies.has(question.familyId));
    if (candidates.length < count) candidates = chapter.questions.filter((question) => !previousIds.includes(question.id));
    if (candidates.length < count) candidates = [...chapter.questions];

    const selected = [];
    const selectedFamilies = new Set();
    const takeUnique = (pool, limit) => {
      for (const question of shuffle(pool)) {
        if (selected.length >= count || limit <= 0) break;
        if (selectedFamilies.has(question.familyId)) continue;
        selected.push(question);
        selectedFamilies.add(question.familyId);
        limit -= 1;
      }
    };
    if (count === 2) {
      takeUnique(candidates.filter((question) => question.level === "easy" || question.level === "core"), 1);
      takeUnique(candidates.filter((question) => question.level === "apply" || question.level === "trap"), 1);
    } else {
      for (const level of LEVEL_ORDER) takeUnique(candidates.filter((question) => question.level === level), 2);
    }
    takeUnique(candidates, count - selected.length);
    if (selected.length < count) {
      const selectedIds = new Set(selected.map((question) => question.id));
      selected.push(...shuffle(candidates.filter((question) => !selectedIds.has(question.id))).slice(0, count - selected.length));
    }

    const sorted = selected.slice(0, count).sort((a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level));
    if (storeKey) {
      state.lastSets[storeKey] = sorted.map((question) => question.id);
      saveState();
    }
    return sorted;
  }

  function formatQuestions(chapter, selected) {
    return selected.map((question) => {
      const choices = shuffle(question.options.map((text, sourceIndex) => ({ text, sourceIndex })));
      return {
        id: question.id,
        familyId: question.familyId || question.id,
        topic: question.topic || "Kiến thức chương",
        chapterId: chapter.id,
        chapterShort: chapter.short,
        level: question.level,
        prompt: question.prompt,
        choices: choices.map((choice) => choice.text),
        answerIndex: choices.findIndex((choice) => choice.sourceIndex === question.answer),
        explanation: question.explanation,
      };
    });
  }

  function buildQuiz(chapter) {
    const previousIds = Array.isArray(state.lastSets[chapter.id]) ? state.lastSets[chapter.id] : [];
    return formatQuestions(chapter, chooseQuestions(chapter, CHAPTER_QUESTION_COUNT, previousIds, chapter.id));
  }

  function buildMistakeQuiz(chapter) {
    const mistakes = getMistakesFor(chapter.id);
    const bank = chapter.questions;
    if (!mistakes.length) {
      const previousIds = Array.isArray(state.lastSets[`mistakes-${chapter.id}`]) ? state.lastSets[`mistakes-${chapter.id}`] : [];
      return { questions: formatQuestions(chapter, chooseQuestions(chapter, MISTAKE_QUESTION_COUNT, previousIds, `mistakes-${chapter.id}`)), notice: "Chưa có câu sai được lưu ở chương này, nên lượt này chọn 10 câu ngẫu nhiên để bạn khởi động." };
    }

    const errors = [];
    const seenErrors = new Set();
    for (const mistake of mistakes) {
      let source = bank.find((question) => question.id === mistake.id)
        || bank.find((question) => question.familyId === mistake.familyId)
        || bank.find((question) => question.prompt === mistake.prompt);
      if (!source && mistake.familyId) source = bank.find((question) => question.familyId === mistake.familyId);
      const familyId = source?.familyId || mistake.familyId || source?.id;
      if (!familyId || seenErrors.has(familyId)) continue;
      errors.push({ source, familyId, topic: source?.topic || mistake.topic });
      seenErrors.add(familyId);
    }

    const selected = [];
    const selectedFamilies = new Set();
    const addFrom = (pool) => {
      for (const question of shuffle(pool)) {
        if (selected.length >= MISTAKE_QUESTION_COUNT) break;
        if (selectedFamilies.has(question.familyId)) continue;
        selected.push(question);
        selectedFamilies.add(question.familyId);
      }
    };
    for (const error of errors) {
      const similar = bank.filter((question) => question.familyId === error.familyId && question.id !== error.source?.id);
      addFrom(similar);
    }
    const errorTopics = new Set(errors.map((error) => error.topic).filter(Boolean));
    addFrom(bank.filter((question) => errorTopics.has(question.topic)));
    addFrom(bank);
    if (selected.length < MISTAKE_QUESTION_COUNT) {
      selected.push(...shuffle(bank).slice(0, MISTAKE_QUESTION_COUNT - selected.length));
    }
    return { questions: formatQuestions(chapter, selected.slice(0, MISTAKE_QUESTION_COUNT)), notice: "Câu hỏi ưu tiên các chủ đề và dạng tương tự những câu bạn từng làm sai." };
  }

  function buildMidtermQuiz() {
    const previousIds = Array.isArray(state.lastSets.midterm) ? state.lastSets.midterm : [];
    const questions = window.CHAPTERS.flatMap((chapter) => {
      const chapterPrevious = previousIds.filter((id) => chapter.questions.some((question) => question.id === id));
      return formatQuestions(chapter, chooseQuestions(chapter, MIDTERM_QUESTION_COUNT / window.CHAPTERS.length, chapterPrevious));
    });
    const mixed = shuffle(questions);
    state.lastSets.midterm = mixed.map((question) => question.id);
    saveState();
    return mixed;
  }

  function openQuiz({ chapterId, mode, questions, notice = "" }) {
    session = { chapterId, mode, questions, notice, answers: {}, index: 0, startedAt: Date.now() };
    currentResult = null;
    resultOrigin = "live";
    screen = "quiz";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startQuiz(chapterId) {
    const chapter = chapterById(chapterId);
    if (!chapter) return;
    openQuiz({ chapterId: chapter.id, mode: "chapter", questions: buildQuiz(chapter) });
  }

  function startMistakeQuiz(chapterId) {
    const chapter = chapterById(chapterId);
    if (!chapter) return;
    const built = buildMistakeQuiz(chapter);
    openQuiz({ chapterId: chapter.id, mode: "mistakes", questions: built.questions, notice: built.notice });
  }

  function startMidtermQuiz() {
    openQuiz({ chapterId: 0, mode: "midterm", questions: buildMidtermQuiz() });
  }


  function startTeaching(chapterId) {
    const chapter = chapterById(chapterId);
    if (!chapter || !window.IT1140_LESSONS?.[chapter.id]) return;
    lessonSession = null;
    window.currentTeachingChapter = chapter.id;
    screen = "lesson-list";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startLesson(chapterId, lessonIndex) {
    const chapter = chapterById(chapterId);
    const lesson = window.IT1140_LESSONS?.[Number(chapterId)]?.[Number(lessonIndex)];
    if (!chapter || !lesson) return;
    window.currentTeachingChapter = chapter.id;
    lessonSession = { chapterId: chapter.id, lessonIndex: Number(lessonIndex), testing: false, answers: {}, submitted: false, startedAt: Date.now() };
    screen = "lesson";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderLessons() {
    const selectedChapter = chapterById(Number(window.currentTeachingChapter));
    if (!selectedChapter) return renderHome();
    const lessons = window.IT1140_LESSONS?.[selectedChapter.id] || [];
    const completed = lessons.filter((_, index) => state.learningProgress[selectedChapter.id + "-" + index]?.completed).length;
    const cards = lessons.map((lesson, index) => {
      const progress = state.learningProgress[selectedChapter.id + "-" + index];
      const status = progress?.completed ? "Đã kiểm tra · cao nhất " + progress.bestScore + "/3" : "Bài giảng + ví dụ + 3 câu hỏi";
      const buttonLabel = progress?.completed ? "Học lại" : "Vào học";
      return '<article class="lesson-card ' + (progress?.completed ? "completed" : "") + '">' +
        '<div class="lesson-card-index">PHẦN ' + String(index + 1).padStart(2, "0") + '</div>' +
        '<h3>' + escapeHtml(lesson.title) + '</h3>' +
        '<p>' + escapeHtml(lesson.body.split("\n")[0]) + '</p>' +
        '<div class="lesson-card-foot"><span>' + status + '</span><button class="primary-button compact" data-action="open-lesson" data-id="' + selectedChapter.id + '" data-index="' + index + '">' + buttonLabel + ' <span>→</span></button></div>' +
      '</article>';
    }).join("");
    return '<div class="view-top"><button class="back-button" data-action="home" aria-label="Quay lại">←</button><div><div class="view-kicker">GIẢNG DẠY · IT1140</div><h1 class="view-headline">' + escapeHtml(selectedChapter.title) + '</h1></div></div>' +
      '<section class="lesson-overview"><div><span class="eyebrow"><span class="eyebrow-mark">✿</span> HỌC THEO TỪNG PHẦN</span><h2>' + completed + '/' + lessons.length + ' phần đã hoàn thành</h2><p>Mỗi phần gồm bài giảng ngắn, ví dụ minh họa và bài kiểm tra 3 câu. Tiến độ cùng điểm cao nhất được lưu trên thiết bị này.</p></div><span class="lesson-overview-icon">' + selectedChapter.icon + '</span></section>' +
      '<section class="lesson-grid">' + cards + '</section>';
  }

  function renderLesson() {
    const chapter = chapterById(lessonSession?.chapterId);
    const lesson = window.IT1140_LESSONS?.[lessonSession?.chapterId]?.[lessonSession?.lessonIndex];
    if (!chapter || !lesson) return renderHome();
    const number = lessonSession.lessonIndex + 1;
    const key = chapter.id + "-" + lessonSession.lessonIndex;
    const questions = lesson.checks.map((question, index) => {
      const selected = lessonSession.answers[index];
      const options = question.choices.map((choice, choiceIndex) => {
        const isSelected = selected === choiceIndex;
        const isCorrect = lessonSession.submitted && choiceIndex === question.answer;
        const isWrong = lessonSession.submitted && isSelected && !isCorrect;
        const classes = "lesson-option" + (isSelected ? " selected" : "") + (isCorrect ? " correct" : "") + (isWrong ? " incorrect" : "");
        return '<button class="' + classes + '" data-action="lesson-answer" data-index="' + index + '" data-choice="' + choiceIndex + '" ' + (lessonSession.submitted ? "disabled" : "") + '><span>' + String.fromCharCode(65 + choiceIndex) + '</span>' + escapeHtml(choice) + '</button>';
      }).join("");
      let answerPanel = "";
      if (lessonSession.submitted) {
        const answerText = String.fromCharCode(65 + question.answer) + " · " + escapeHtml(question.choices[question.answer]);
        answerPanel = '<div class="lesson-explanation"><strong>' + (selected === question.answer ? "✓ Chính xác" : "Đáp án: " + answerText) + '</strong><p>' + escapeHtml(question.explanation) + '</p></div>';
      }
      return '<article class="lesson-question"><span class="lesson-question-number">CÂU ' + String(index + 1).padStart(2, "0") + '</span><h3>' + escapeHtml(question.prompt) + '</h3><div class="lesson-options">' + options + '</div>' + answerPanel + '</article>';
    }).join("");
    const done = state.learningProgress[key]?.completed;
    const progress = state.learningProgress[key];
    let endActions = "";
    if (lessonSession.submitted) {
      const note = done ? " · Đã lưu, điểm cao nhất " + progress.bestScore + "/3" : " · Đã lưu vào lịch sử làm bài";
      endActions = '<div class="lesson-finish"><div><strong>' + lessonSession.result + '/3 câu đúng</strong><span>' + note + '</span></div><button class="primary-button" data-action="lesson-next">Phần tiếp theo <span>→</span></button><button class="secondary-button" data-action="lesson-list">Danh sách phần</button></div>';
    } else if (lessonSession.testing) {
      endActions = '<div class="lesson-test-actions"><button class="primary-button" data-action="lesson-submit">Nộp bài kiểm tra <span>✓</span></button></div>';
    } else {
      endActions = '<button class="primary-button lesson-start-test" data-action="lesson-start">Bắt đầu kiểm tra 3 câu <span>→</span></button>';
    }
    const studyAction = lessonSession.testing ? "" : '<div class="lesson-test-intro"><p>Đọc xong phần này? Làm 3 câu hỏi ngắn để tự kiểm tra và xem giải thích ngay sau khi nộp.</p>' + endActions + '</div>';
    const testSection = lessonSession.testing ? '<section class="lesson-check"><div class="lesson-check-heading"><div><span class="lesson-label">KIỂM TRA NHANH</span><h2>3 câu củng cố kiến thức</h2></div><span class="lesson-check-count">3 câu</span></div>' + questions + endActions + '</section>' : "";
    return '<div class="view-top"><button class="back-button" data-action="lesson-list" aria-label="Quay lại danh sách phần">←</button><div><div class="view-kicker">CHƯƠNG ' + String(chapter.id).padStart(2, "0") + ' · PHẦN ' + String(number).padStart(2, "0") + '</div><h1 class="view-headline">' + escapeHtml(lesson.title) + '</h1></div></div>' +
      '<article class="lesson-page"><div class="lesson-reading"><span class="lesson-label">BÀI GIẢNG</span><div class="lesson-body">' + escapeHtml(lesson.body).replace(/\n/g, "<br />") + '</div></div>' +
      '<section class="lesson-example"><span class="lesson-label">VÍ DỤ MINH HỌA</span><p>' + escapeHtml(lesson.example) + '</p></section>' + studyAction + testSection + '</article>';
  }

  function submitLessonCheck() {
    if (!lessonSession || lessonSession.submitted) return;
    const chapter = chapterById(lessonSession.chapterId);
    const lesson = window.IT1140_LESSONS[lessonSession.chapterId][lessonSession.lessonIndex];
    const questions = lesson.checks.map((item, index) => ({
      id: "lesson-" + lessonSession.chapterId + "-" + lessonSession.lessonIndex + "-" + index,
      chapterId: lessonSession.chapterId,
      level: "core",
      prompt: item.prompt,
      choices: item.choices,
      answerIndex: item.answer,
      selectedIndex: Object.prototype.hasOwnProperty.call(lessonSession.answers, index) ? lessonSession.answers[index] : null,
      explanation: item.explanation,
    }));
    const correctCount = questions.filter((question) => question.selectedIndex === question.answerIndex).length;
    const key = chapter.id + "-" + lessonSession.lessonIndex;
    const previous = state.learningProgress[key] || {};
    const completedAt = new Date().toISOString();
    const lessonTitle = chapter.title + " · " + lesson.title;
    state.learningProgress[key] = { completed: true, bestScore: Math.max(Number(previous.bestScore || 0), correctCount), attempts: Number(previous.attempts || 0) + 1, completedAt };
    state.history.unshift({
      id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : "lesson-" + Date.now(),
      chapterId: chapter.id,
      lessonIndex: lessonSession.lessonIndex,
      lessonTitle,
      mode: "lesson",
      totalCount: questions.length,
      completedAt,
      durationSeconds: Math.round((Date.now() - lessonSession.startedAt) / 1000),
      correctCount,
      questions,
    });
    lessonSession.result = correctCount;
    lessonSession.submitted = true;
    saveState();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function advanceLesson() {
    if (!lessonSession) return;
    const chapterId = lessonSession.chapterId;
    const nextIndex = lessonSession.lessonIndex + 1;
    const lessons = window.IT1140_LESSONS?.[chapterId] || [];
    if (nextIndex < lessons.length) startLesson(chapterId, nextIndex);
    else {
      lessonSession = null;
      window.currentTeachingChapter = chapterId;
      screen = "lesson-list";
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function renderQuiz() {
    const chapter = chapterById(session.chapterId);
    const total = session.questions.length;
    const index = session.index;
    const question = session.questions[index];
    const selected = session.answers[index];
    const answered = Object.keys(session.answers).length;
    const progress = Math.round(((index + 1) / total) * 100);
    const options = question.choices.map((option, optionIndex) => `
      <button class="option-button ${selected === optionIndex ? "selected" : ""}" data-action="answer" data-index="${optionIndex}" aria-pressed="${selected === optionIndex}">
        <span class="option-key">${LETTERS[optionIndex]}</span><span class="option-text">${escapeHtml(option)}</span>
      </button>`).join("");
    const map = session.questions.map((_, questionIndex) => {
      const isAnswered = Object.prototype.hasOwnProperty.call(session.answers, questionIndex);
      return `<button class="map-button ${questionIndex === index ? "current" : ""} ${isAnswered ? "answered" : ""}" data-action="jump" data-index="${questionIndex}" aria-label="Đến câu ${questionIndex + 1}${isAnswered ? ", đã trả lời" : ", chưa trả lời"}">${questionIndex + 1}</button>`;
    }).join("");

    const nextAction = index === total - 1
      ? `<button class="primary-button compact" data-action="submit">Nộp bài <span>✓</span></button>`
      : `<button class="primary-button compact" data-action="next">Câu tiếp <span>→</span></button>`;
    const sessionTitle = session.mode === "midterm" ? "Ôn thi giữa kỳ" : chapter?.title || "Ôn lỗi sai";
    const sessionKicker = session.mode === "midterm"
      ? "ĐỀ GIỮA KỲ · TỔNG HỢP 6 CHƯƠNG"
      : session.mode === "mistakes"
        ? `ÔN LỖI SAI · CHƯƠNG ${String(chapter.id).padStart(2, "0")}`
        : `CHƯƠNG ${String(chapter.id).padStart(2, "0")} · ${escapeHtml(chapter.short)}`;

    return `
      <div class="view-top">
        <button class="back-button" data-action="home" aria-label="Về tổng quan">←</button>
        <div><div class="view-kicker">${sessionKicker}</div><h1 class="view-headline">${escapeHtml(sessionTitle)}</h1></div>
      </div>
      <div class="quiz-layout">
        <section class="quiz-main">
          <div class="quiz-progress-row"><span class="quiz-progress-label">Tiến độ <strong>${index + 1}<span style="color:#b1a4b2"> / ${total}</span></strong></span><span class="quiz-progress-label">${answered} / ${total} câu đã chọn</span></div>
          <div class="quiz-progress-track"><span style="width:${progress}%"></span></div>
          ${session.notice ? `<p class="session-notice">${escapeHtml(session.notice)}</p>` : ""}
          <div class="question-meta"><span class="question-index">CÂU <strong>${String(index + 1).padStart(2, "0")}</strong></span><span class="question-meta-right">${session.mode === "midterm" ? `<span class="chapter-tag">Chương ${question.chapterId} · ${escapeHtml(question.chapterShort)}</span>` : ""}<span class="level-badge level-${question.level}">${LEVEL_LABELS[question.level]}</span></span></div>
          <h2 class="question-title">${escapeHtml(question.prompt)}</h2>
          <p class="question-hint">Chọn một đáp án phù hợp nhất.</p>
          <div class="options-list">${options}</div>
          <div class="quiz-footer">
            <span class="answer-count">Đã trả lời <strong>${answered} / ${total} câu</strong></span>
            <div class="quiz-actions">
              <button class="secondary-button" data-action="prev" ${index === 0 ? "disabled" : ""}><span>←</span> Câu trước</button>
              ${nextAction}
            </div>
          </div>
        </section>
        <aside class="quiz-aside">
          <h2 class="aside-title">Mục lục câu hỏi <span>Chạm để di chuyển</span></h2>
          <div class="question-map">${map}</div>
          <div class="map-legend"><span class="legend-key"><i class="legend-dot"></i> Đã chọn</span><span class="legend-key"><i class="legend-dot legend-dot-empty"></i> Còn trống</span></div>
          <div class="aside-divider"></div>
          <div class="aside-tip"><span class="aside-tip-icon">✦</span><span><strong>Mẹo nhỏ</strong><br />Các câu được sắp từ nền tảng đến vận dụng. Bạn có thể quay lại đổi lựa chọn trước khi nộp bài.</span></div>
        </aside>
      </div>`;
  }

  function submitQuiz() {
    const total = session.questions.length;
    const unanswered = total - Object.keys(session.answers).length;
    if (unanswered > 0 && !window.confirm(`Bạn còn ${unanswered} câu chưa trả lời. Vẫn nộp bài chứ?`)) return;

    const questions = session.questions.map((question, index) => ({
      ...question,
      chapterId: question.chapterId || session.chapterId,
      selectedIndex: Object.prototype.hasOwnProperty.call(session.answers, index) ? session.answers[index] : null,
    }));
    const correctCount = questions.filter((question) => question.selectedIndex === question.answerIndex).length;
    const attempt = {
      id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `attempt-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      chapterId: session.chapterId,
      mode: session.mode,
      totalCount: total,
      completedAt: new Date().toISOString(),
      durationSeconds: Math.round((Date.now() - session.startedAt) / 1000),
      correctCount,
      questions,
    };
    state.history.unshift(attempt);
    saveState();
    currentResult = attempt;
    resultOrigin = "live";
    session = null;
    screen = "result";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderResult() {
    const attempt = currentResult;
    if (!attempt) return renderHome();
    const chapter = chapterById(attempt.chapterId);
    const total = attemptTotal(attempt);
    const title = attemptLabel(attempt);
    const percent = Math.round(attempt.correctCount / total * 100);
    const incorrectCount = total - attempt.correctCount;
    const feedback = percent === 100 ? "Tuyệt vời! Bạn nắm rất chắc phần kiến thức này." : percent >= 70 ? "Làm tốt lắm! Xem lại vài ý nhỏ để nhớ lâu hơn nhé." : "Một lượt luyện tập hữu ích. Cùng xem lại lời giải rồi thử lại nhé.";
    const review = attempt.questions.map((question, index) => {
      const isCorrect = question.selectedIndex === question.answerIndex;
      const chosen = question.selectedIndex === null ? "Bỏ trống" : question.choices[question.selectedIndex];
      const correct = question.choices[question.answerIndex];
      const levelClass = `level-${question.level}`;
      return `
        <article class="review-card ${isCorrect ? "correct" : "incorrect"}">
          <div class="review-top"><div class="review-top-left"><span class="review-number">CÂU ${String(index + 1).padStart(2, "0")}</span><span class="level-badge ${levelClass}">${LEVEL_LABELS[question.level]}</span></div><span class="review-result">${isCorrect ? "✓ Đúng" : "↺ Xem lại"}</span></div>
          <h3 class="review-question">${question.chapterId && (attempt.mode === "midterm" || Number(attempt.chapterId) === 0) ? `<span class="chapter-tag">Chương ${question.chapterId} · ${escapeHtml(question.chapterShort || chapterById(question.chapterId)?.short || "")}</span> ` : ""}${escapeHtml(question.prompt)}</h3>
          <div class="review-answers"><span class="your-answer">Bạn chọn: <strong class="${isCorrect ? "" : ""}">${escapeHtml(chosen)}</strong></span><span>Đáp án đúng: <strong>${escapeHtml(correct)}</strong></span></div>
          <div class="explanation"><span class="explanation-icon">✧</span><span>${escapeHtml(question.explanation)}</span></div>
        </article>`;
    }).join("");

    const dateLabel = formatDate(attempt.completedAt);
    const sourceLabel = resultOrigin === "history" ? `LỊCH SỬ · ${dateLabel}` : "LƯỢT ÔN TẬP VỪA HOÀN THÀNH";
    const retryButton = attempt.mode === "lesson"
      ? '<button class="primary-button compact" data-action="lesson-retry" data-id="' + attempt.chapterId + '" data-index="' + attempt.lessonIndex + '">Học lại phần này <span>↻</span></button>'
      : attempt.mode === "midterm" || Number(attempt.chapterId) === 0
      ? `<button class="primary-button compact" data-action="midterm">Làm đề giữa kỳ mới <span>↻</span></button>`
      : attempt.mode === "mistakes"
        ? `<button class="primary-button compact" data-action="mistakes" data-id="${attempt.chapterId}">Ôn lỗi sai tiếp <span>↻</span></button>`
        : `<button class="primary-button compact" data-action="start" data-id="${attempt.chapterId}">Làm lượt mới <span>↻</span></button>`;
    return `
      <div class="view-top">
        <button class="back-button" data-action="${resultOrigin === "history" ? "history" : "home"}" aria-label="Quay lại">←</button>
        <div><div class="view-kicker">${sourceLabel}</div><h1 class="view-headline">${escapeHtml(title)}</h1></div>
      </div>
      <section class="result-hero">
        <div class="result-summary">
          <div class="result-copy"><div class="eyebrow"><span class="eyebrow-mark">${percent >= 70 ? "✿" : "✧"}</span> KẾT QUẢ CỦA BẠN</div><h1>${attempt.correctCount}/${total} câu đúng</h1><p>${feedback}</p></div>
          <div class="result-badge"><strong>${percent}%</strong><span>điểm số</span></div>
        </div>
        <div class="result-stats">
          <div class="result-stat"><span class="stat-icon">✓</span><div class="result-stat-copy"><span>Trả lời đúng</span><strong>${attempt.correctCount} câu</strong></div></div>
          <div class="result-stat"><span class="stat-icon">◷</span><div class="result-stat-copy"><span>Thời gian làm</span><strong>${escapeHtml(formatDuration(attempt.durationSeconds))}</strong></div></div>
        </div>
      </section>
      <div class="review-heading"><div><h2>Giải thích từng câu</h2><p>${incorrectCount ? `${incorrectCount} câu cần xem lại · ` : "Đã trả lời đúng cả lượt · "}Lời giải giúp bạn ghi nhớ trọng tâm.</p></div><button class="quiet-link" data-action="history">Lịch sử <span>→</span></button></div>
      <section class="review-list">${review}</section>
      <div class="result-bottom"><div class="left-actions"><button class="secondary-button" data-action="home">← Tổng quan</button><button class="secondary-button" data-action="history">◷ Lịch sử</button>${chapter ? `<button class="secondary-button" data-action="mistakes" data-id="${chapter.id}">Ôn lỗi sai</button>` : ""}</div><div class="right-actions">${retryButton}</div></div>`;
  }

  function renderHistory() {
    const allAttempts = [...state.history].sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
    const attempts = allAttempts.filter((attempt) => attemptMatchesFilter(attempt, historyFilter));
    const best = allAttempts.reduce((score, attempt) => Math.max(score, Math.round(Number(attempt.correctCount || 0) / attemptTotal(attempt) * 100)), 0);
    const filters = [
      `<button class="filter-chip ${historyFilter === "all" ? "active" : ""}" data-action="filter" data-id="all">Tất cả</button>`,
      `<button class="filter-chip ${historyFilter === "midterm" ? "active" : ""}" data-action="filter" data-id="midterm">Giữa kỳ</button>`,
      ...window.CHAPTERS.map((chapter) => `<button class="filter-chip ${Number(historyFilter) === chapter.id ? "active" : ""}" data-action="filter" data-id="${chapter.id}">Ch${chapter.id} · ${escapeHtml(chapter.short)}</button>`),
    ].join("");

    const rows = attempts.map((attempt) => {
      const chapter = chapterById(attempt.chapterId);
      const score = Number(attempt.correctCount || 0);
      const total = attemptTotal(attempt);
      const percent = Math.round(score / total * 100);
      const label = attemptLabel(attempt);
      return `
        <article class="history-row">
          <div class="history-chapter"><span class="history-icon" style="background:${chapter?.soft || "#f1e8ff"};color:${chapter?.color || "#9a79c7"}">${chapter?.icon || "✦"}</span><div><strong>${escapeHtml(label)}</strong><small>${attempt.mode === "lesson" ? "Giảng dạy · " + escapeHtml(attempt.lessonTitle || "") : attempt.mode === "mistakes" ? "Ôn lỗi sai" : attempt.mode === "midterm" ? "Tổng hợp 6 chương" : "Luyện chương"} · ${escapeHtml(formatDate(attempt.completedAt))}</small></div></div>
          <div class="history-meta"><span>Điểm số</span><strong>${score}/${total} · ${percent}%</strong></div>
          <div class="history-meta"><span>Thời gian</span><strong>${escapeHtml(formatDuration(attempt.durationSeconds))}</strong></div>
          <span class="score-pill ${percent < 50 ? "low" : ""}">${percent >= 70 ? "✿" : "✧"} ${score}/${total} · ${percent}%</span>
          <button class="history-review-button" data-action="review" data-id="${escapeHtml(attempt.id)}">Xem lời giải</button>
        </article>`;
    }).join("");

    const filterTitle = historyFilter === "all" ? "Các lượt gần đây" : historyFilter === "midterm" ? "Các lượt ôn thi giữa kỳ" : `Chương ${historyFilter} · ${escapeHtml(chapterById(historyFilter)?.title || "")}`;

    return `
      <section class="history-title-row">
        <div><div class="eyebrow"><span class="eyebrow-mark">◷</span> NHẬT KÝ HỌC TẬP</div><h1 class="page-title">Lịch sử <em>làm bài.</em></h1><p class="page-subtitle">Mỗi lượt được lưu kèm điểm số, thời gian và lời giải từng câu.</p></div>
        <div class="history-summary-strip"><div class="history-summary-item"><span>Tổng lượt</span><strong>${allAttempts.length}</strong></div><div class="history-summary-item"><span>Điểm trung bình</span><strong>${allAttempts.length ? `${averageScore(allAttempts)}%` : "—"}</strong></div><div class="history-summary-item"><span>Điểm cao nhất</span><strong>${allAttempts.length ? `${best}%` : "—"}</strong></div></div>
      </section>
      <div class="history-filters" aria-label="Lọc lịch sử theo chương">${filters}</div>
      <section class="history-panel">
        <div class="history-panel-heading"><h2>${filterTitle}</h2><span>${attempts.length} ${attempts.length === 1 ? "lượt" : "lượt"}</span></div>
        ${attempts.length ? `<div class="history-list">${rows}</div>` : `
          <div class="empty-state"><span class="empty-icon">✿</span><h2>Chưa có lượt làm bài</h2><p>Chọn một chương hoặc đề giữa kỳ. Sau khi nộp bài, kết quả và giải thích sẽ xuất hiện ở đây.</p><button class="primary-button compact" data-action="home">Chọn chế độ ôn <span>→</span></button></div>`}
      </section>
      <div class="home-note"><span class="note-icon" aria-hidden="true">⌂</span><span>Lịch sử được lưu cục bộ trên trình duyệt này. Nếu xóa dữ liệu trang web hoặc đổi thiết bị/trình duyệt, lịch sử sẽ không tự đồng bộ.</span></div>`;
  }

  function normalizeText(value) {
    return String(value || "").toLowerCase().replace(/đ/g, "d").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function renderChatWidget() {
    const root = document.getElementById("chat-root");
    if (!root) return;
    const messages = state.chatMessages.length ? state.chatMessages : [{
      role: "assistant",
      text: "Chào bạn! Mình có thể giải thích câu đang làm hoặc tra cứu nội dung trong ngân hàng IT1140. Hãy hỏi một khái niệm cụ thể nhé.",
    }];
    root.innerHTML = `
      <aside class="chat-panel" aria-label="Trợ giảng IT1140" ${chatOpen ? "" : "hidden"}>
        <div class="chat-header">
          <div class="chat-header-copy"><span class="chat-avatar" aria-hidden="true">✿</span><div><strong>Trợ giảng IT1140</strong><small>Hỏi đáp · giải thích theo ngân hàng đề</small></div></div>
          <button class="chat-close" type="button" data-action="close-chat" aria-label="Đóng hộp hỏi đáp">×</button>
        </div>
        <div class="chat-messages" id="chat-messages" aria-live="polite">${messages.map((message) => `<div class="chat-message ${message.role === "user" ? "user" : "assistant"}">${escapeHtml(message.text)}</div>`).join("")}</div>
        <div class="chat-suggestions" aria-label="Câu hỏi gợi ý">
          <button class="chat-suggestion" data-action="chat-suggestion" data-prompt="Giải thích câu này">Giải thích câu này</button>
          <button class="chat-suggestion" data-action="chat-suggestion" data-prompt="Ôn hệ cơ số">Ôn hệ cơ số</button>
          <button class="chat-suggestion" data-action="chat-suggestion" data-prompt="input() trả về kiểu gì?">Python input()</button>
        </div>
        <form class="chat-form" id="chat-form"><input class="chat-input" id="chat-input" type="text" maxlength="800" autocomplete="off" placeholder="Bạn đang thắc mắc điều gì?" aria-label="Nhập câu hỏi" /><button class="chat-send" type="submit" aria-label="Gửi câu hỏi">↑</button></form>
        <div class="chat-footnote">Câu trả lời được tra cứu cục bộ từ nội dung ôn tập IT1140.</div>
      </aside>
      <button class="chat-launcher" type="button" data-action="toggle-chat" aria-expanded="${chatOpen}"><span class="chat-launcher-icon" aria-hidden="true">💬</span><span>${chatOpen ? "Đóng trợ giảng" : "Hỏi trợ giảng"}</span></button>`;
    if (chatOpen) {
      const box = document.getElementById("chat-messages");
      if (box) box.scrollTop = box.scrollHeight;
    }
  }

  function tutorReply(rawQuestion) {
    const normalized = normalizeText(rawQuestion);
    const asksCurrent = /(cau nay|cau tren|cau dang lam|cau hien tai|dap an cau nay)/.test(normalized);
    if (asksCurrent && session) {
      const question = session.questions[session.index];
      const chapter = chapterById(question.chapterId);
      return `Câu ${session.index + 1}${chapter ? ` · Chương ${chapter.id}: ${chapter.short}` : ""}\n\nĐáp án đúng: ${question.choices[question.answerIndex]}\n\nGiải thích: ${question.explanation}\n\nGợi ý: hãy xác định từ khóa trong đề rồi đối chiếu từng lựa chọn với quy tắc này.`;
    }

    const stopWords = new Set(["va", "la", "gi", "the", "nao", "trong", "cua", "mot", "cho", "voi", "tai", "sao", "nhu", "duoc", "hay", "giup", "minh", "ban", "toi", "ve", "tu", "den", "co", "khong", "neu", "thi", "khi", "cau", "giai", "thich", "hoi", "dap", "on", "tap"]);
    const tokens = [...new Set((normalized.match(/[a-z0-9_]+/g) || []).filter((token) => token.length > 1 && !stopWords.has(token)))];
    const hits = new Map();
    for (const chapter of window.CHAPTERS) {
      for (const question of chapter.questions) {
        const prompt = normalizeText(question.prompt);
        const explanation = normalizeText(question.explanation);
        const topic = normalizeText(question.topic || "");
        const context = normalizeText(`${chapter.short} ${chapter.title}`);
        let score = tokens.reduce((sum, token) => sum + (prompt.includes(token) ? 3 : 0) + (topic.includes(token) ? 3 : 0) + (explanation.includes(token) ? 1 : 0) + (context.includes(token) ? 1 : 0), 0);
        if (normalized.length > 4 && (prompt.includes(normalized) || explanation.includes(normalized))) score += 7;
        const key = `${chapter.id}:${question.familyId || question.id}`;
        if (score && (!hits.has(key) || hits.get(key).score < score)) hits.set(key, { score, chapter, question });
      }
    }
    const results = [...hits.values()].sort((a, b) => b.score - a.score).slice(0, 3);
    if (!results.length || results[0].score < 2) {
      return "Mình chưa tìm thấy nội dung khớp đủ rõ trong ngân hàng. Bạn thử hỏi bằng từ khóa cụ thể như WKID, bù hai, IEEE 754, TCP/IP, DNS, IoT, Big Data, đệ quy hoặc input() nhé.";
    }
    const best = results[0];
    let reply = `Chương ${best.chapter.id} · ${best.chapter.short} — ${best.question.topic || "trọng tâm chương"}\n\n${best.question.explanation}\n\nĐáp án trong câu tương tự: ${best.question.options[best.question.answer]}`;
    if (results[1] && results[1].score >= best.score * .62 && results[1].question.familyId !== best.question.familyId) {
      reply += `\n\nLiên hệ thêm (${results[1].question.topic || results[1].chapter.short}): ${results[1].question.explanation}`;
    }
    return reply;
  }

  function sendChatMessage(value) {
    const question = String(value || "").trim();
    if (!question) return;
    state.chatMessages.push({ role: "user", text: question });
    state.chatMessages.push({ role: "assistant", text: tutorReply(question) });
    saveState();
    chatOpen = true;
    renderChatWidget();
    document.getElementById("chat-input")?.focus();
  }

  function renderNameDialog() {
    const root = document.getElementById("name-entry-root");
    if (!root) return;
    if (!nameDialogOpen) {
      root.innerHTML = "";
      return;
    }
    const hasName = Boolean(state.userName);
    root.innerHTML = `
      <div class="name-overlay">
        <section class="name-dialog" role="dialog" aria-modal="true" aria-labelledby="name-dialog-title">
          <span class="name-dialog-mark" aria-hidden="true">✿</span>
          <div class="eyebrow"><span class="eyebrow-mark">${hasName ? "✎" : "♡"}</span> HUST · IT1140</div>
          <h2 id="name-dialog-title">${hasName ? "Đổi tên hiển thị" : "Chào mừng bạn!"}</h2>
          <p>${hasName ? "Tên này sẽ được dùng để chào bạn trong góc học tập." : "Cho mình biết tên bạn để bắt đầu ôn tập nhé. Mình sẽ ghi nhớ trên trình duyệt này."}</p>
          <form id="name-form" class="name-form">
            <label for="name-input">Tên của bạn</label>
            <input id="name-input" name="name" type="text" maxlength="40" autocomplete="given-name" placeholder="Ví dụ: Minh Anh" value="${escapeHtml(state.userName)}" required />
            <div class="name-actions"><button class="primary-button" type="submit">${hasName ? "Lưu tên" : "Vào học"} <span>→</span></button>${hasName ? `<button class="secondary-button" type="button" data-action="cancel-name">Để sau</button>` : ""}</div>
          </form>
        </section>
      </div>`;
    document.getElementById("name-input")?.focus();
  }

  function showToast(message) {
    document.querySelector(".toast")?.remove();
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>✓</span>${escapeHtml(message)}`;
    document.body.appendChild(toast);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.remove(), 3200);
  }

  function navigate(action) {
    if (action === "home") {
      screen = "home";
      session = null;
      currentResult = null;
    } else if (action === "history") {
      screen = "history";
      session = null;
    }
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;

    if (action === "toggle-chat") {
      chatOpen = !chatOpen;
      renderChatWidget();
      if (chatOpen) document.getElementById("chat-input")?.focus();
      return;
    }
    if (action === "close-chat") {
      chatOpen = false;
      renderChatWidget();
      document.querySelector(".chat-launcher")?.focus();
      return;
    }
    if (action === "chat-suggestion") {
      sendChatMessage(button.dataset.prompt);
      return;
    }
    if (action === "theme") {
      state.theme = button.dataset.themeChoice === "kuromi" ? "kuromi" : "doraemon";
      saveState();
      applyTheme();
      return;
    }
    if (action === "edit-name") {
      nameDialogOpen = true;
      renderNameDialog();
      return;
    }
    if (action === "cancel-name") {
      if (state.userName) {
        nameDialogOpen = false;
        renderNameDialog();
      }
      return;
    }

    if (action === "teach") { startTeaching(button.dataset.id); return; }
    if (action === "open-lesson") { startLesson(button.dataset.id, button.dataset.index); return; }
    if (action === "lesson-list") {
      window.currentTeachingChapter = lessonSession?.chapterId || Number(window.currentTeachingChapter);
      lessonSession = null; screen = "lesson-list"; render(); window.scrollTo({ top: 0, behavior: "smooth" }); return;
    }
    if (action === "lesson-start") { if (lessonSession) { lessonSession.testing = true; render(); window.scrollTo({ top: 0, behavior: "smooth" }); } return; }
    if (action === "lesson-answer") { if (lessonSession && !lessonSession.submitted) { lessonSession.answers[Number(button.dataset.index)] = Number(button.dataset.choice); render(); } return; }
    if (action === "lesson-submit") { submitLessonCheck(); return; }
    if (action === "lesson-next") { advanceLesson(); return; }
    if (action === "lesson-retry") { startLesson(button.dataset.id, button.dataset.index); lessonSession.testing = true; render(); return; }
    if (action === "home" || action === "history") {
      navigate(action);
      return;
    }
    if (action === "start") {
      startQuiz(button.dataset.id);
      return;
    }
    if (action === "mistakes") {
      startMistakeQuiz(button.dataset.id);
      return;
    }
    if (action === "midterm") {
      startMidtermQuiz();
      return;
    }
    if (action === "filter") {
      historyFilter = button.dataset.id === "all" || button.dataset.id === "midterm" ? button.dataset.id : Number(button.dataset.id);
      render();
      return;
    }
    if (action === "review") {
      currentResult = state.history.find((attempt) => attempt.id === button.dataset.id) || null;
      if (currentResult) {
        resultOrigin = "history";
        screen = "result";
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    if (screen !== "quiz" || !session) return;
    if (action === "answer") {
      session.answers[session.index] = Number(button.dataset.index);
      render();
    } else if (action === "jump") {
      session.index = Number(button.dataset.index);
      render();
    } else if (action === "prev") {
      session.index = Math.max(0, session.index - 1);
      render();
    } else if (action === "next") {
      session.index = Math.min(session.questions.length - 1, session.index + 1);
      render();
    } else if (action === "submit") {
      submitQuiz();
    }
  });

  document.addEventListener("submit", (event) => {
    if (event.target.id === "name-form") {
      event.preventDefault();
      const input = document.getElementById("name-input");
      const value = String(input?.value || "").trim().replace(/\s+/g, " ").slice(0, 40);
      if (!value) {
        input?.focus();
        return;
      }
      state.userName = value;
      nameDialogOpen = false;
      saveState();
      render();
      return;
    }
    if (event.target.id !== "chat-form") return;
    event.preventDefault();
    const input = document.getElementById("chat-input");
    const value = input?.value || "";
    sendChatMessage(value);
  });

  document.addEventListener("keydown", (event) => {
    if (screen !== "quiz" || !session || event.altKey || event.ctrlKey || event.metaKey) return;
    const activeTag = document.activeElement?.tagName;
    if (["INPUT", "TEXTAREA", "SELECT"].includes(activeTag)) return;
    if (event.key === "ArrowRight") session.index = Math.min(session.questions.length - 1, session.index + 1);
    else if (event.key === "ArrowLeft") session.index = Math.max(0, session.index - 1);
    else if (/^[1-4]$/.test(event.key)) session.answers[session.index] = Number(event.key) - 1;
    else return;
    render();
  });

  render();
})();
