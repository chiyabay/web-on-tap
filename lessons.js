window.IT1140_LESSONS = {
  "1": [
    {
      "id": "info-data",
      "title": "1.1.1 Dữ liệu, thông tin và xử lý thông tin",
      "body": "Dữ liệu là các ký hiệu, con số hoặc phép đo thô; thông tin là dữ liệu được đặt vào ngữ cảnh để trả lời câu hỏi có ý nghĩa. Quá trình xử lý thường gồm thu thập, lưu trữ, xử lý và tạo thông tin phục vụ quyết định.",
      "example": "Số 100 chỉ là dữ liệu. Nhiệt độ nước là 100°C là thông tin vì đã có đơn vị và ngữ cảnh.",
      "topicTags": [
        "Dữ liệu",
        "WKID"
      ]
    },
    {
      "id": "wkid",
      "title": "1.1.2 Mô hình tháp WKID",
      "body": "WKID gồm Data → Information → Knowledge → Wisdom. Dữ liệu được tổ chức thành thông tin; phân tích thông tin tạo tri thức; dùng tri thức để lựa chọn hành động phù hợp thể hiện trí tuệ.",
      "example": "Bảng điểm là dữ liệu; điểm trung bình là thông tin; nhận ra học phần nào cần ôn là tri thức; lập kế hoạch ôn hợp lý là trí tuệ.",
      "topicTags": [
        "WKID"
      ]
    },
    {
      "id": "data-sources",
      "title": "1.1.3 Nguồn dữ liệu và số hóa",
      "body": "Dữ liệu có thể đến từ số đo, chữ viết, âm thanh, ảnh và các thông số vật lý. Máy tính lưu dữ liệu dưới dạng nhị phân, nên tín hiệu tự nhiên phải được mã hóa hoặc số hóa theo cách phù hợp.",
      "example": "Nhiệt độ từ cảm biến được lấy mẫu, đổi thành giá trị số rồi mã hóa để lưu trong máy tính.",
      "topicTags": [
        "Dữ liệu"
      ]
    },
    {
      "id": "basic-types",
      "title": "1.2.1 Dữ liệu cơ bản",
      "body": "Slide phân biệt các kiểu dữ liệu cơ bản như số nguyên, số thực và ký tự. Mỗi kiểu có miền giá trị, cách biểu diễn và phép xử lý phù hợp; không nên xem chuỗi ký tự là số chỉ vì nó trông giống chữ số.",
      "example": "25 có thể là số nguyên để tính toán; mã phòng 25 có thể là chuỗi ký tự nếu cần giữ nguyên như định danh.",
      "topicTags": [
        "Dữ liệu",
        "Số nguyên",
        "Số thực",
        "Ký tự"
      ]
    },
    {
      "id": "structured-data",
      "title": "1.2.2 Dữ liệu có cấu trúc",
      "body": "Dữ liệu có cấu trúc ghép nhiều giá trị cơ bản theo một tổ chức, chẳng hạn xâu ký tự, mảng hoặc bản ghi. Cấu trúc giúp lưu và truy cập một nhóm giá trị theo quy tắc.",
      "example": "Một bản ghi sinh viên có thể gồm mã số, họ tên, năm sinh và điểm; mỗi trường có kiểu dữ liệu phù hợp.",
      "topicTags": [
        "Dữ liệu"
      ]
    },
    {
      "id": "units",
      "title": "1.2.3 Đơn vị đo thông tin",
      "body": "Bit là đơn vị nhỏ nhất, có hai trạng thái 0 và 1; một byte gồm 8 bit. Trong quy ước slide, KB, MB, GB, TB tăng theo lũy thừa của 2, thường mỗi bậc bằng 1024 đơn vị.",
      "example": "1 KB = 1024 B; 1 MB = 1024 KB. Tệp 2 MB có 2048 KB theo quy ước này.",
      "topicTags": [
        "Đơn vị"
      ]
    },
    {
      "id": "number-systems",
      "title": "1.2.4 Hệ đếm và giá trị theo vị trí",
      "body": "Hệ cơ số b dùng các ký hiệu từ 0 đến b−1. Giá trị số được tính bằng tổng chữ số nhân với lũy thừa cơ số tương ứng vị trí; máy tính dùng nhị phân, còn cơ số 8 và 16 giúp viết gọn.",
      "example": "Trong 325₁₀, chữ số 3 ở hàng trăm góp 3×10²; trong 101₂, giá trị là 1×2² + 0×2 + 1 = 5.",
      "topicTags": [
        "Hệ cơ số"
      ]
    },
    {
      "id": "base-forms",
      "title": "1.2.5 Hệ thập phân, nhị phân, bát phân và thập lục phân",
      "body": "Thập phân dùng 0–9; nhị phân dùng 0–1; bát phân dùng 0–7; thập lục phân dùng 0–9 và A–F. Vì 8=2³ và 16=2⁴, mỗi chữ số bát phân tương ứng 3 bit và mỗi chữ số hexa tương ứng 4 bit.",
      "example": "1010₂ viết gọn thành A₁₆; nhóm 3 bit 101₂ tương ứng 5₈.",
      "topicTags": [
        "Hệ cơ số"
      ]
    },
    {
      "id": "to-decimal",
      "title": "1.2.6 Đổi từ cơ số bất kỳ sang thập phân",
      "body": "Để đổi sang thập phân, khai triển từng chữ số theo vị trí rồi cộng các tích. Phần sau dấu phân số dùng lũy thừa âm của cơ số.",
      "example": "1101.1₂ = 1×2³ + 1×2² + 0×2 + 1 + 1×2⁻¹ = 13.5₁₀.",
      "topicTags": [
        "Hệ cơ số"
      ]
    },
    {
      "id": "decimal-integer",
      "title": "1.2.7 Đổi phần nguyên thập phân sang cơ số b",
      "body": "Chia liên tiếp phần nguyên cho cơ số b, ghi lại các số dư. Đọc các số dư theo thứ tự ngược lại để thu được biểu diễn ở cơ số mới.",
      "example": "13₁₀ chia 2 cho các số dư 1, 0, 1, 1; đọc ngược được 1101₂.",
      "topicTags": [
        "Hệ cơ số"
      ]
    },
    {
      "id": "decimal-fraction",
      "title": "1.2.8 Đổi phần thập phân sang cơ số b",
      "body": "Nhân liên tiếp phần lẻ với cơ số b. Phần nguyên của mỗi tích lần lượt là các chữ số sau dấu phân số; quá trình có thể dừng khi phần lẻ bằng 0 hoặc đạt độ chính xác yêu cầu.",
      "example": "0.625×2=1.25 ghi 1; lấy 0.25×2=0.5 ghi 0; 0.5×2=1 ghi 1, vậy 0.625₁₀=0.101₂.",
      "topicTags": [
        "Hệ cơ số"
      ]
    },
    {
      "id": "binary-octal-hex",
      "title": "1.2.9 Chuyển đổi nhanh giữa hệ 2, 8 và 16",
      "body": "Đổi nhị phân sang bát phân bằng cách nhóm bit thành cụm 3 từ dấu phân số ra hai phía; đổi sang hexa dùng cụm 4 bit. Có thể thêm số 0 ở đầu hoặc cuối nhóm mà không đổi giá trị.",
      "example": "11110110₂ chia nhóm 4 bit thành 1111 0110, tương ứng F6₁₆.",
      "topicTags": [
        "Hệ cơ số"
      ]
    },
    {
      "id": "unsigned",
      "title": "1.2.10 Số nguyên không dấu",
      "body": "Số nguyên không dấu n bit biểu diễn từ 0 đến 2ⁿ−1, tổng cộng 2ⁿ trạng thái. Khi kết quả vượt miền, phép tính có thể tràn và không còn cho giá trị toán học mong muốn.",
      "example": "8 bit không dấu có miền 0…255; cộng 250+10 vượt 255 nên không thể biểu diễn chính xác trong 8 bit.",
      "topicTags": [
        "Số nguyên"
      ]
    },
    {
      "id": "signed",
      "title": "1.2.11 Số nguyên có dấu và mã bù",
      "body": "Mã bù hai n bit biểu diễn từ −2ⁿ⁻¹ đến 2ⁿ⁻¹−1. Để tạo số âm, viết trị tuyệt đối đủ n bit, đảo bit rồi cộng 1; bù hai cho phép dùng cùng mạch cộng cho số có dấu.",
      "example": "Với 8 bit, 5 là 00000101; đảo bit thành 11111010 rồi cộng 1, được −5 = 11111011.",
      "topicTags": [
        "Số nguyên"
      ]
    },
    {
      "id": "integer-arithmetic",
      "title": "1.2.12 Cộng, trừ số nguyên và tràn số",
      "body": "Phép cộng nhị phân thực hiện từ phải sang trái, mang bit nhớ sang vị trí tiếp theo. Trong mã bù hai, tràn có thể xảy ra khi cộng hai số cùng dấu nhưng kết quả đổi dấu; cần kiểm tra theo miền biểu diễn.",
      "example": "Với số có dấu 8 bit, 120+20 vượt 127 nên xảy ra tràn dù phép cộng nhị phân vẫn tạo ra một mẫu bit.",
      "topicTags": [
        "Số nguyên"
      ]
    },
    {
      "id": "integer-multiply",
      "title": "1.2.13 Nhân và chia số nguyên nhị phân",
      "body": "Nhân nhị phân dùng các tích từng phần tương tự hệ 10; chia nhị phân lặp lại phép so sánh, trừ và dịch. Với số có dấu, xác định dấu và xử lý trị tuyệt đối theo quy ước của phép toán.",
      "example": "1011₂×11₂ tương đương 11×3=33₁₀, tức 100001₂.",
      "topicTags": [
        "Số nguyên"
      ]
    },
    {
      "id": "bit-logic",
      "title": "1.2.14 Các phép logic trên bit",
      "body": "AND, OR, XOR và NOT tác động lên từng cặp bit. AND cho 1 khi cả hai đầu vào là 1; OR cần ít nhất một bit 1; XOR cho 1 khi hai bit khác nhau; NOT đảo bit.",
      "example": "1010 AND 1100 = 1000; các phép logic thường dùng để kiểm tra hoặc đặt cờ bit.",
      "topicTags": [
        "Phép logic"
      ]
    },
    {
      "id": "float-ieee",
      "title": "1.2.15 Biểu diễn số thực theo IEEE 754",
      "body": "Dạng dấu phẩy động IEEE 754 lưu bit dấu, phần số mũ và phần định trị. Dạng 32 bit thường có 1 bit dấu, 8 bit số mũ và 23 bit phần định trị; cách mã hóa ảnh hưởng độ chính xác.",
      "example": "Muốn biểu diễn một số dương, chuẩn hóa nó thành dạng 1.x×2ᵉ, sau đó mã hóa dấu, số mũ lệch và phần định trị.",
      "topicTags": [
        "Số thực"
      ]
    },
    {
      "id": "float-special",
      "title": "1.2.16 Giá trị đặc biệt, phạm vi và độ chính xác",
      "body": "IEEE 754 dành một số mẫu số mũ để biểu diễn số không chuẩn hóa, vô cực và NaN. Số bit hữu hạn khiến nhiều số thập phân không biểu diễn chính xác, đồng thời có giới hạn dưới và trên.",
      "example": "0.1₁₀ có thể được lưu thành một giá trị nhị phân gần đúng; vì vậy phép cộng số thực đôi khi có sai số rất nhỏ.",
      "topicTags": [
        "Số thực"
      ]
    },
    {
      "id": "characters",
      "title": "1.2.17 Biểu diễn ký tự: ASCII và Unicode",
      "body": "Ký tự được ánh xạ thành mã số rồi lưu dưới dạng bit. ASCII chuẩn có 128 mã; Unicode mở rộng khả năng biểu diễn ký tự của nhiều ngôn ngữ và hệ chữ.",
      "example": "Ký tự A có mã ASCII 65; Unicode biểu diễn được ký tự tiếng Việt như ế mà ASCII chuẩn không có.",
      "topicTags": [
        "Ký tự"
      ]
    }
  ],
  "2": [
    {
      "id": "computer-model",
      "title": "2.1.1 Mô hình và chức năng cơ bản của máy tính",
      "body": "Máy tính nhận thông tin vào, xử lý theo chương trình được lưu trữ và đưa thông tin ra. Máy tính có nhiều dạng: máy nhúng, điện thoại, PC, máy chủ và siêu máy tính.",
      "example": "Máy bán hàng nhận mã sản phẩm, tra giá và tính tổng tiền rồi hiển thị kết quả.",
      "topicTags": [
        "Phần cứng"
      ]
    },
    {
      "id": "computer-structure",
      "title": "2.1.2 Cấu trúc hệ thống máy tính",
      "body": "Hệ thống máy tính gồm bộ xử lý, bộ nhớ, hệ thống vào-ra và liên kết hệ thống. Các bộ phận phối hợp để lấy lệnh, dữ liệu, xử lý và trả kết quả.",
      "example": "Khi mở tệp, CPU thực hiện lệnh, bộ nhớ giữ dữ liệu đang dùng, còn bộ điều khiển lưu trữ đọc tệp từ SSD.",
      "topicTags": [
        "Phần cứng",
        "Bus",
        "Bộ nhớ",
        "Vào-ra"
      ]
    },
    {
      "id": "cpu",
      "title": "2.1.3 Bộ xử lý trung tâm CPU",
      "body": "CPU gồm khối điều khiển, ALU và các thanh ghi. CU điều phối chu trình lệnh; ALU thực hiện phép toán; thanh ghi lưu tạm toán hạng và trạng thái gần CPU.",
      "example": "Trong phép cộng, CU giải mã lệnh, ALU cộng hai giá trị trong thanh ghi rồi CPU ghi kết quả.",
      "topicTags": [
        "Phần cứng"
      ]
    },
    {
      "id": "cpu-speed",
      "title": "2.1.4 Tốc độ và hiệu năng bộ xử lý",
      "body": "Tần số xung nhịp cho biết nhịp hoạt động nhưng không quyết định một mình hiệu năng. Số lõi, kiến trúc, bộ nhớ đệm và loại tác vụ cũng ảnh hưởng tốc độ thực tế.",
      "example": "Hai CPU cùng 3 GHz có thể chạy bài toán khác nhau với thời gian khác nhau do kiến trúc và số lõi.",
      "topicTags": [
        "Phần cứng"
      ]
    },
    {
      "id": "memory-hierarchy",
      "title": "2.1.5 Các thành phần bộ nhớ",
      "body": "Bộ nhớ được tổ chức theo cấp: thanh ghi và cache nhanh, nhỏ; bộ nhớ chính lớn hơn; bộ nhớ ngoài giữ dữ liệu lâu dài. Tốc độ, dung lượng và khả năng giữ dữ liệu khi mất điện khác nhau.",
      "example": "CPU thường tìm dữ liệu trong cache trước, rồi RAM; nếu dữ liệu chưa ở RAM, hệ thống mới đọc từ SSD.",
      "topicTags": [
        "Bộ nhớ"
      ]
    },
    {
      "id": "main-memory",
      "title": "2.1.6 Bộ nhớ chính: RAM và ROM",
      "body": "RAM lưu chương trình và dữ liệu đang chạy, đọc ghi nhanh nhưng mất dữ liệu khi tắt nguồn. ROM hoặc bộ nhớ chỉ đọc giữ một số chương trình hệ thống cần thiết qua lần khởi động.",
      "example": "Tắt máy làm mất nội dung RAM chưa lưu, còn tệp đã ghi xuống SSD vẫn còn.",
      "topicTags": [
        "Bộ nhớ"
      ]
    },
    {
      "id": "external-memory",
      "title": "2.1.7 Bộ nhớ ngoài và lưu trữ lâu dài",
      "body": "Bộ nhớ ngoài lưu dữ liệu lâu dài với dung lượng lớn hơn RAM; ví dụ gồm HDD, SSD, USB và đĩa quang. Các thiết bị khác nhau về tốc độ, độ bền và cách truy cập.",
      "example": "Dùng SSD để lưu hệ điều hành và tài liệu; RAM chỉ giữ dữ liệu cần thiết trong lúc chương trình hoạt động.",
      "topicTags": [
        "Bộ nhớ",
        "Tệp"
      ]
    },
    {
      "id": "io",
      "title": "2.1.8 Hệ thống vào-ra",
      "body": "Hệ thống vào-ra trao đổi dữ liệu giữa máy tính và thiết bị bên ngoài. Thiết bị vào chuyển thao tác hoặc tín hiệu thành dữ liệu máy xử lý; thiết bị ra chuyển kết quả thành dạng người dùng nhận biết.",
      "example": "Bàn phím mã hóa phím bấm thành dữ liệu vào; màn hình biến dữ liệu đồ họa thành điểm ảnh.",
      "topicTags": [
        "Vào-ra"
      ]
    },
    {
      "id": "io-module",
      "title": "2.1.9 Thiết bị và mô-đun ghép nối vào-ra",
      "body": "Thiết bị ngoại vi thường có tốc độ và cách biểu diễn khác CPU, nên mô-đun vào-ra quản lý giao tiếp, điều khiển và truyền dữ liệu giữa chúng.",
      "example": "Bộ điều khiển USB nhận yêu cầu từ CPU rồi quản lý truyền dữ liệu tới bàn phím hoặc ổ flash.",
      "topicTags": [
        "Vào-ra"
      ]
    },
    {
      "id": "bus",
      "title": "2.1.10 Liên kết hệ thống và bus",
      "body": "Bus kết nối CPU, bộ nhớ và thiết bị vào-ra. Bus dữ liệu chuyển nội dung; bus địa chỉ chọn nơi đọc ghi; bus điều khiển mang tín hiệu đồng bộ và điều khiển.",
      "example": "CPU đặt địa chỉ ô nhớ trên bus địa chỉ, phát tín hiệu đọc trên bus điều khiển và nhận dữ liệu qua bus dữ liệu.",
      "topicTags": [
        "Bus"
      ]
    },
    {
      "id": "software",
      "title": "2.2.1 Phân loại phần mềm máy tính",
      "body": "Phần mềm là chương trình và dữ liệu hướng dẫn máy tính hoạt động. Phần mềm hệ thống quản lý tài nguyên; phần mềm ứng dụng phục vụ công việc cụ thể; cách phân loại khác xét môi trường và nghiệp vụ.",
      "example": "Hệ điều hành là phần mềm hệ thống; trình duyệt và phần mềm bảng tính là phần mềm ứng dụng.",
      "topicTags": [
        "Phần mềm"
      ]
    },
    {
      "id": "languages",
      "title": "2.2.2 Chương trình và các thế hệ ngôn ngữ",
      "body": "Chương trình là dãy lệnh máy tính thực hiện. Ngôn ngữ máy chạy trực tiếp nhưng khó đọc; hợp ngữ dùng ký hiệu gợi nhớ; ngôn ngữ bậc cao gần cách diễn đạt của con người và cần dịch.",
      "example": "ADD AX, BX dễ đọc hơn mã máy 01D8, nhưng assembler phải chuyển hợp ngữ thành mã máy.",
      "topicTags": [
        "Ngôn ngữ"
      ]
    },
    {
      "id": "os",
      "title": "2.3.1 Hệ điều hành và nhiệm vụ",
      "body": "Hệ điều hành quản lý CPU, bộ nhớ, thiết bị, tệp và tiến trình; đồng thời tạo môi trường để người dùng và ứng dụng tương tác với máy tính.",
      "example": "Khi mở ứng dụng, hệ điều hành nạp chương trình vào RAM, cấp thời gian CPU và cho phép ứng dụng đọc tệp.",
      "topicTags": [
        "Hệ điều hành"
      ]
    },
    {
      "id": "files",
      "title": "2.3.2 Tệp, phần mở rộng và thư mục",
      "body": "Tệp là đơn vị thông tin hệ điều hành quản lý. Tên tệp và phần mở rộng giúp nhận diện; thư mục tổ chức tệp theo cây; đường dẫn đầy đủ xác định vị trí.",
      "example": "Tệp baitap.pdf nằm trong thư mục Hoc; mẫu *.pdf có thể đại diện cho các tệp PDF.",
      "topicTags": [
        "Tệp"
      ]
    },
    {
      "id": "interfaces",
      "title": "2.3.3 CLI, GUI và giao diện tự nhiên",
      "body": "CLI nhận lệnh dạng văn bản; GUI cho thao tác qua cửa sổ, biểu tượng và con trỏ; NUI hướng đến tương tác tự nhiên như giọng nói hoặc cử chỉ. Mỗi kiểu có ưu điểm và giới hạn.",
      "example": "Quản trị viên dùng CLI để chạy lệnh hàng loạt; người dùng mới có thể thích GUI trực quan hơn.",
      "topicTags": [
        "Giao diện",
        "Hệ điều hành"
      ]
    },
    {
      "id": "networks",
      "title": "2.4.1 Mạng máy tính và thiết bị",
      "body": "Mạng kết nối máy tính và thiết bị đầu cuối để trao đổi dữ liệu. Thiết bị mạng như switch, router, access point và modem thực hiện các vai trò khác nhau trong truyền thông.",
      "example": "Router chuyển tiếp lưu lượng giữa mạng gia đình và Internet; access point cung cấp kết nối Wi‑Fi.",
      "topicTags": [
        "Mạng"
      ]
    },
    {
      "id": "media-protocols",
      "title": "2.4.2 Đường truyền và giao thức mạng",
      "body": "Dữ liệu đi qua môi trường có dây hoặc không dây. Giao thức quy định định dạng, thứ tự và cách xử lý thông điệp để các thiết bị khác nhau giao tiếp được.",
      "example": "Wi‑Fi và cáp Ethernet là công nghệ truy nhập khác nhau; cả hai có thể mang gói IP theo các quy tắc mạng.",
      "topicTags": [
        "Mạng"
      ]
    },
    {
      "id": "network-types",
      "title": "2.4.3 Phân loại mạng theo phạm vi và kiến trúc",
      "body": "PAN, LAN, MAN và WAN phân loại mạng theo phạm vi. Mạng client/server có máy chủ cung cấp dịch vụ; mạng ngang hàng phân tán vai trò giữa các máy.",
      "example": "Mạng LAN trong tòa nhà có phạm vi hẹp; WAN liên kết các mạng ở khoảng cách địa lý lớn.",
      "topicTags": [
        "Mạng"
      ]
    }
  ],
  "3": [
    {
      "id": "internet-definition",
      "title": "3.1.1 Internet: mạng của các mạng",
      "body": "Internet là hệ thống mạng toàn cầu kết nối nhiều mạng độc lập bằng bộ giao thức chung. Các thiết bị và công nghệ truy nhập khác nhau vẫn trao đổi dữ liệu nhờ các chuẩn thống nhất.",
      "example": "Điện thoại dùng 5G và laptop dùng Wi‑Fi có thể cùng truy cập một máy chủ web qua Internet.",
      "topicTags": [
        "Internet"
      ]
    },
    {
      "id": "internet-iot",
      "title": "3.1.2 Internet vạn vật trong kết nối Internet",
      "body": "IoT là hệ thống thiết bị vật lý có khả năng thu thập, xử lý và trao đổi dữ liệu qua mạng, thường cần ít can thiệp của con người. Phần này đặt IoT trong bức tranh kết nối Internet.",
      "example": "Đồng hồ thông minh gửi số đo nhịp tim tới điện thoại để người dùng xem xu hướng.",
      "topicTags": [
        "Internet"
      ]
    },
    {
      "id": "internet-history",
      "title": "3.1.3 Lịch sử phát triển Internet",
      "body": "Internet phát triển từ các mạng nghiên cứu đầu tiên, sau đó chuẩn TCP/IP giúp kết nối nhiều mạng. World Wide Web và băng thông rộng đưa Internet tới người dùng phổ thông; di động và mạng xã hội mở rộng cách sử dụng.",
      "example": "Sự chuyển đổi sang TCP/IP năm 1983 là mốc quan trọng để các mạng kết nối theo bộ giao thức chung.",
      "topicTags": [
        "Lịch sử Internet"
      ]
    },
    {
      "id": "internet-architecture",
      "title": "3.1.4 Kiến trúc mạng biên và mạng lõi",
      "body": "Mạng biên gồm thiết bị đầu cuối và các mạng truy nhập gần người dùng; mạng lõi gồm các thiết bị tốc độ cao chuyển tiếp lưu lượng giữa các mạng.",
      "example": "Điện thoại là thiết bị biên; router của nhà mạng thuộc hạ tầng chuyển tiếp sâu hơn trong mạng.",
      "topicTags": [
        "Kiến trúc mạng"
      ]
    },
    {
      "id": "access-ethernet-wifi",
      "title": "3.1.5 Truy nhập qua Ethernet và Wi‑Fi",
      "body": "Ethernet thường dùng cáp trong mạng cục bộ; Wi‑Fi cho phép kết nối LAN không dây. Cả hai là cách đưa thiết bị vào mạng, không phải bản thân toàn bộ Internet.",
      "example": "Laptop kết nối router qua Wi‑Fi, còn máy bàn có thể dùng Ethernet tới cùng router.",
      "topicTags": [
        "Truy nhập Internet"
      ]
    },
    {
      "id": "access-gpon-mobile",
      "title": "3.1.6 GPON và truy nhập di động",
      "body": "GPON dùng hạ tầng cáp quang thụ động để cung cấp kết nối băng rộng. 3G/4G/5G cung cấp truy nhập không dây diện rộng; mỗi công nghệ có đặc điểm về băng thông, vùng phủ và độ trễ.",
      "example": "Nhà dùng GPON cho đường truyền cố định; điện thoại dùng 4G khi đang di chuyển ngoài vùng Wi‑Fi.",
      "topicTags": [
        "Truy nhập Internet"
      ]
    },
    {
      "id": "tcpip",
      "title": "3.1.7 Truyền dữ liệu và bộ giao thức TCP/IP",
      "body": "Dữ liệu được chia thành gói và chuyển qua nhiều mạng. IP định địa chỉ và chuyển tiếp; TCP bổ sung cơ chế kiểm soát thứ tự, lỗi và truyền lại cho luồng tin cậy.",
      "example": "Khi tải một tệp, các gói có thể đi qua nhiều router; TCP giúp phát hiện phần thiếu và yêu cầu gửi lại.",
      "topicTags": [
        "Internet"
      ]
    },
    {
      "id": "ip-address",
      "title": "3.1.8 Giao thức và địa chỉ IP",
      "body": "Địa chỉ IP giúp nhận diện điểm đến để router chuyển gói. Địa chỉ IPv4 và IPv6 có dạng khác nhau; địa chỉ có thể được cấp tĩnh hoặc động tùy mạng.",
      "example": "Router cần địa chỉ IP đích để biết gửi gói tới mạng tiếp theo nào.",
      "topicTags": [
        "Internet",
        "Kiến trúc mạng"
      ]
    },
    {
      "id": "web",
      "title": "3.2.1 World Wide Web và nguyên lý hoạt động",
      "body": "Web là dịch vụ chạy trên Internet, gồm tài nguyên được máy chủ cung cấp và trình duyệt yêu cầu. URL xác định tài nguyên; HTTP/HTTPS trao đổi yêu cầu và phản hồi.",
      "example": "Trình duyệt yêu cầu trang chủ từ máy chủ, nhận HTML, CSS và hình ảnh rồi hiển thị trang.",
      "topicTags": [
        "Web"
      ]
    },
    {
      "id": "email",
      "title": "3.2.2 Thư điện tử: địa chỉ và thành phần",
      "body": "Email gồm người gửi, người nhận, tiêu đề, nội dung và có thể có tệp đính kèm. Hệ thống gồm máy khách, máy chủ gửi/chuyển tiếp và máy chủ nhận.",
      "example": "Ứng dụng email gửi thư tới máy chủ; máy chủ chuyển thư tới hộp thư của người nhận.",
      "topicTags": [
        "Email"
      ]
    },
    {
      "id": "email-protocols",
      "title": "3.2.3 Giao thức và luồng xử lý email",
      "body": "Các giao thức gửi và nhận email có vai trò khác nhau; SMTP thường dùng gửi thư, còn IMAP/POP3 giúp truy cập thư đã nhận. Cấu hình sai có thể khiến gửi được nhưng không nhận được hoặc ngược lại.",
      "example": "Ứng dụng gửi thư qua SMTP nhưng đồng bộ hộp thư đến bằng IMAP.",
      "topicTags": [
        "Email"
      ]
    },
    {
      "id": "dns",
      "title": "3.2.4 DNS và cấu trúc tên miền",
      "body": "DNS phân giải tên miền dễ nhớ thành địa chỉ IP. Tên miền được tổ chức theo cấp; truy vấn có thể đi qua bộ phân giải DNS và các máy chủ có thẩm quyền.",
      "example": "Khi nhập www.example.com, DNS giúp tìm địa chỉ IP để trình duyệt kết nối đúng máy chủ.",
      "topicTags": [
        "DNS"
      ]
    },
    {
      "id": "cloud",
      "title": "3.3.1 Điện toán đám mây và mô hình dịch vụ",
      "body": "Điện toán đám mây cung cấp lưu trữ, máy chủ, nền tảng hoặc phần mềm qua mạng theo nhu cầu. Người dùng truy cập tài nguyên từ xa thay vì tự vận hành mọi phần cứng.",
      "example": "Dịch vụ lưu trữ ảnh trực tuyến cho phép tải ảnh lên, đồng bộ và xem từ nhiều thiết bị.",
      "topicTags": [
        "Cloud"
      ]
    },
    {
      "id": "cloud-tradeoffs",
      "title": "3.3.2 Lợi ích và hạn chế của điện toán đám mây",
      "body": "Cloud giúp co giãn tài nguyên, giảm đầu tư ban đầu và truy cập linh hoạt. Đổi lại, người dùng phụ thuộc kết nối mạng, nhà cung cấp, chi phí định kỳ và cách bảo vệ dữ liệu.",
      "example": "Một lớp học có thể dùng cloud để chia sẻ bài; khi mất Internet, quyền truy cập và đồng bộ bị hạn chế.",
      "topicTags": [
        "Cloud"
      ]
    },
    {
      "id": "security-basics",
      "title": "3.4.1 An toàn thông tin, hacker và lỗ hổng",
      "body": "An toàn thông tin bảo vệ tính bí mật, toàn vẹn và sẵn sàng. Lỗ hổng là điểm yếu có thể bị khai thác; hacker là khái niệm rộng, không phải mọi hoạt động kiểm thử bảo mật đều bất hợp pháp.",
      "example": "Phần mềm chưa cập nhật có thể chứa lỗ hổng mà kẻ tấn công khai thác để đọc dữ liệu trái phép.",
      "topicTags": [
        "An toàn"
      ]
    },
    {
      "id": "attacks-impacts",
      "title": "3.4.2 Các kiểu tấn công và tác động",
      "body": "Tấn công có thể do thám, truy cập trái phép hoặc từ chối dịch vụ. Hậu quả gồm lộ dữ liệu, mất tài sản, gián đoạn tổ chức và thiệt hại kinh tế.",
      "example": "Tấn công từ chối dịch vụ gửi lượng yêu cầu lớn để người dùng hợp pháp không truy cập được dịch vụ.",
      "topicTags": [
        "An toàn"
      ]
    },
    {
      "id": "scams",
      "title": "3.4.3 Lừa đảo trực tuyến và giả mạo",
      "body": "Phishing, website giả, email giả danh, tin nhắn lừa đảo và cuộc gọi video giả thường tạo áp lực để người dùng tiết lộ thông tin hoặc chuyển tiền. Kiểm tra tên miền và xác minh qua kênh khác giúp giảm rủi ro.",
      "example": "Tin nhắn báo khóa tài khoản dẫn tới tên miền gần giống thật; tự mở ứng dụng chính thức để kiểm tra thay vì bấm liên kết.",
      "topicTags": [
        "An toàn",
        "Xác thực"
      ]
    },
    {
      "id": "protection",
      "title": "3.4.4 Biện pháp bảo vệ và an toàn tài khoản",
      "body": "Cập nhật phần mềm, mật khẩu riêng, xác thực đa yếu tố, sao lưu và giới hạn quyền truy cập giúp giảm nguy cơ. Tường lửa lọc lưu lượng nhưng không ngăn được mọi dạng tấn công.",
      "example": "Bật MFA khiến kẻ có mật khẩu bị lộ vẫn cần thêm yếu tố xác thực mới đăng nhập được.",
      "topicTags": [
        "An toàn",
        "Xác thực"
      ]
    },
    {
      "id": "encryption",
      "title": "3.4.5 Mã hóa khóa đối xứng và khóa công khai",
      "body": "Mã hóa biến bản rõ thành bản mã để người không có khóa phù hợp khó đọc. Mã hóa đối xứng dùng chung khóa; hệ khóa công khai dùng cặp khóa có quan hệ toán học cho các mục đích như bí mật hoặc chữ ký.",
      "example": "Hai bên có thể dùng cùng khóa bí mật cho mã hóa đối xứng; người gửi có thể mã hóa bằng khóa công khai của người nhận.",
      "topicTags": [
        "Mã hóa",
        "An toàn"
      ]
    },
    {
      "id": "safe-use",
      "title": "3.4.6 Truy cập web, Wi‑Fi, email và mạng xã hội an toàn",
      "body": "HTTPS bảo vệ kênh truyền nhưng không chứng minh nội dung website là đáng tin. Hãy kiểm tra miền, cảnh báo chứng chỉ, quyền ứng dụng, liên kết email và dấu hiệu tài khoản giả.",
      "example": "Biểu tượng ổ khóa cho biết kết nối được mã hóa, nhưng trang lừa đảo vẫn có thể dùng HTTPS.",
      "topicTags": [
        "An toàn",
        "Xác thực",
        "Email"
      ]
    },
    {
      "id": "ethics",
      "title": "3.5.1 Đạo đức số và trách nhiệm khi dùng mạng",
      "body": "Đạo đức số áp dụng nguyên tắc tôn trọng, trung thực, riêng tư và không gây hại trong môi trường mạng. Nội dung công khai không đồng nghĩa mọi cách sử dụng đều phù hợp.",
      "example": "Xin phép trước khi đăng ảnh có thông tin riêng tư của bạn bè là cách tôn trọng quyền riêng tư.",
      "topicTags": [
        "Đạo đức số"
      ]
    },
    {
      "id": "copyright",
      "title": "3.5.2 Bản quyền và quy định pháp luật",
      "body": "Tác phẩm trên Internet vẫn có thể được bảo hộ bản quyền. Trích dẫn, xin phép và tuân thủ giấy phép sử dụng giúp tránh sao chép hoặc phân phối trái phép.",
      "example": "Dùng ảnh Creative Commons cần kiểm tra điều kiện ghi nguồn và quyền sử dụng thương mại.",
      "topicTags": [
        "Bản quyền",
        "Đạo đức số"
      ]
    }
  ],
  "4": [
    {
      "id": "digital-intro",
      "title": "4.1 Giới thiệu các xu hướng công nghệ",
      "body": "Slide ví von hệ thống số hiện đại cần sức mạnh xử lý, trí tuệ, cảm nhận, dữ liệu và niềm tin. GPU/NPU, AI, IoT, Big Data và Blockchain đảm nhiệm các vai trò bổ trợ nhau.",
      "example": "Hệ thống camera thông minh cần cảm biến, chip xử lý, mô hình AI, dữ liệu và kênh trao đổi đáng tin.",
      "topicTags": [
        "AI",
        "IoT và Edge",
        "Big Data",
        "Blockchain"
      ]
    },
    {
      "id": "processor",
      "title": "4.2.1 Bộ xử lý và CPU",
      "body": "Bộ xử lý nhận dữ liệu, thực hiện phép tính và điều khiển hoạt động hệ thống. CPU đa năng, xử lý tốt luồng điều khiển và tác vụ tuần tự.",
      "example": "CPU điều phối ứng dụng, xử lý lệnh hệ điều hành và giao việc chuyên biệt cho GPU/NPU khi cần.",
      "topicTags": [
        "AI phần cứng"
      ]
    },
    {
      "id": "gpu",
      "title": "4.2.2 GPU và tính toán song song",
      "body": "GPU có nhiều lõi nhỏ để thực hiện nhiều phép tính song song. Ban đầu phục vụ đồ họa, GPU nay tăng tốc các phép toán ma trận trong AI.",
      "example": "Một GPU có thể xử lý nhiều pixel hoặc phép nhân ma trận đồng thời, phù hợp với huấn luyện mô hình.",
      "topicTags": [
        "AI phần cứng"
      ]
    },
    {
      "id": "npu",
      "title": "4.2.3 NPU và xử lý AI chuyên biệt",
      "body": "NPU được tối ưu cho phép toán nơ-ron và suy luận AI, thường có hiệu suất năng lượng cao trên thiết bị. NPU không thay thế CPU trong mọi công việc.",
      "example": "Điện thoại dùng NPU để nhận diện khuôn mặt nhanh và ít tiêu thụ pin hơn khi xử lý trực tiếp.",
      "topicTags": [
        "AI phần cứng"
      ]
    },
    {
      "id": "cpu-gpu-npu",
      "title": "4.2.4 So sánh CPU, GPU và NPU",
      "body": "CPU phù hợp điều khiển chung, GPU phù hợp tính toán song song, NPU chuyên cho tác vụ AI. Hệ thống hiện đại kết hợp chúng để cân bằng tính linh hoạt và hiệu năng.",
      "example": "Một ứng dụng có thể dùng CPU điều phối, GPU huấn luyện mạng và NPU chạy nhận diện trên điện thoại.",
      "topicTags": [
        "AI phần cứng"
      ]
    },
    {
      "id": "ai-ml-dl",
      "title": "4.3.1 AI, học máy và học sâu",
      "body": "AI là lĩnh vực rộng tạo hệ thống có khả năng nhận biết, suy luận hoặc quyết định. Machine Learning học mẫu từ dữ liệu; Deep Learning dùng mạng nơ-ron nhiều tầng.",
      "example": "Nhận dạng ảnh có thể là AI; mô hình học từ nhiều ảnh là ML; mạng nơ-ron sâu là một hướng Deep Learning.",
      "topicTags": [
        "Machine Learning",
        "Deep Learning",
        "AI"
      ]
    },
    {
      "id": "supervised",
      "title": "4.3.2 Học có giám sát",
      "body": "Học có giám sát dùng ví dụ đã gắn nhãn để học ánh xạ từ đầu vào sang kết quả. Bài toán phân loại dự đoán lớp; hồi quy dự đoán giá trị số.",
      "example": "Dữ liệu email được gắn nhãn spam/không spam giúp mô hình học cách phân loại email mới.",
      "topicTags": [
        "Machine Learning"
      ]
    },
    {
      "id": "unsupervised",
      "title": "4.3.3 Học không giám sát",
      "body": "Học không giám sát tìm cấu trúc trong dữ liệu chưa gắn nhãn, chẳng hạn phân cụm các đối tượng giống nhau. Kết quả cần được diễn giải theo mục tiêu thực tế.",
      "example": "Mô hình nhóm khách hàng theo hành vi mua sắm mà không được cho nhãn nhóm từ đầu.",
      "topicTags": [
        "Machine Learning"
      ]
    },
    {
      "id": "reinforcement",
      "title": "4.3.4 Học tăng cường",
      "body": "Học tăng cường cho tác nhân thử hành động trong môi trường, nhận thưởng hoặc phạt rồi cải thiện chính sách. Cần cân bằng khám phá hành động mới và khai thác hành động tốt đã biết.",
      "example": "Robot thử nhiều đường đi; đường tới đích an toàn nhận điểm thưởng cao hơn.",
      "topicTags": [
        "Machine Learning"
      ]
    },
    {
      "id": "neural-deep",
      "title": "4.3.5 Mạng nơ-ron và Deep Learning",
      "body": "Mạng nơ-ron gồm các nút kết nối có trọng số; huấn luyện điều chỉnh trọng số để giảm sai số. Deep Learning dùng nhiều tầng để học biểu diễn phức tạp.",
      "example": "Mạng nhiều tầng có thể học cạnh, hình dạng rồi đặc trưng đối tượng từ ảnh.",
      "topicTags": [
        "Deep Learning",
        "Machine Learning"
      ]
    },
    {
      "id": "genai-llm",
      "title": "4.3.6 AI tạo sinh và mô hình ngôn ngữ lớn",
      "body": "AI tạo sinh tạo nội dung mới dựa trên mẫu đã học. LLM học quan hệ giữa các token để dự đoán chuỗi tiếp theo; câu trả lời trôi chảy không đảm bảo đúng.",
      "example": "LLM có thể soạn bản nháp email, nhưng người dùng vẫn phải kiểm tra ngày, số liệu và nguồn.",
      "topicTags": [
        "AI tạo sinh",
        "LLM"
      ]
    },
    {
      "id": "ai-use-risks",
      "title": "4.3.7 Ứng dụng, ảo giác và đạo đức AI",
      "body": "AI hỗ trợ công việc, học tập và sáng tạo, nhưng có thể sai lệch, bịa thông tin hoặc phản ánh thiên lệch dữ liệu. Cần bảo vệ dữ liệu riêng tư và kiểm tra đầu ra có hệ quả cao.",
      "example": "Nếu AI đưa ra trích dẫn pháp luật, hãy tra cứu văn bản gốc trước khi dùng vì mô hình có thể tạo nguồn không tồn tại.",
      "topicTags": [
        "AI",
        "AI ethics"
      ]
    },
    {
      "id": "iot",
      "title": "4.4.1 IoT và kiến trúc hệ thống",
      "body": "IoT kết nối thiết bị có cảm biến/khả năng xử lý để thu thập và trao đổi dữ liệu. Một kiến trúc cơ bản gồm thiết bị, mạng, lưu trữ/xử lý và ứng dụng.",
      "example": "Cảm biến nhiệt gửi số đo qua Wi‑Fi lên dịch vụ, nơi ứng dụng hiển thị biểu đồ cho người dùng.",
      "topicTags": [
        "IoT",
        "IoT và Edge"
      ]
    },
    {
      "id": "iot-data",
      "title": "4.4.2 Dữ liệu IoT và giới hạn của Cloud",
      "body": "Số lượng thiết bị IoT tạo ra lượng dữ liệu lớn. Gửi toàn bộ dữ liệu lên đám mây có thể gây trễ, tốn băng thông và phụ thuộc kết nối.",
      "example": "Camera phân tích mọi khung hình trên cloud có thể chậm nếu mạng yếu và truyền quá nhiều video.",
      "topicTags": [
        "IoT và Edge"
      ]
    },
    {
      "id": "edge-ai",
      "title": "4.4.3 Edge Computing và Edge AI",
      "body": "Edge xử lý dữ liệu gần nơi phát sinh thay vì gửi hết lên cloud; Edge AI chạy mô hình AI tại thiết bị hoặc gateway. Cách này giảm độ trễ nhưng tài nguyên có thể hạn chế.",
      "example": "Camera chạy nhận diện chuyển động tại chỗ rồi chỉ gửi cảnh báo, thay vì truyền liên tục toàn bộ video.",
      "topicTags": [
        "Edge",
        "IoT và Edge"
      ]
    },
    {
      "id": "bigdata-5v",
      "title": "4.5.1 Big Data và 5V",
      "body": "Big Data thường gắn với khối lượng, tốc độ, sự đa dạng, độ tin cậy và giá trị. Kích thước lớn chỉ là một khía cạnh; chất lượng và mục tiêu phân tích cũng quan trọng.",
      "example": "Dữ liệu xe buýt trực tiếp tăng nhanh theo thời gian, có cả tọa độ và cảm biến nên cần xử lý tốc độ và đa dạng.",
      "topicTags": [
        "Big Data"
      ]
    },
    {
      "id": "data-lifecycle",
      "title": "4.5.2 Vòng đời dữ liệu và Data Lake",
      "body": "Vòng đời dữ liệu gồm thu thập, lưu, làm sạch, xử lý, phân tích, chia sẻ và lưu trữ/xóa. Data Lake giữ dữ liệu thô nhiều định dạng trước khi biến đổi theo nhu cầu.",
      "example": "Tổ chức lưu log, ảnh và bảng trong Data Lake rồi trích xuất tập cần dùng cho phân tích.",
      "topicTags": [
        "Big Data"
      ]
    },
    {
      "id": "hdfs-mapreduce",
      "title": "4.5.3 HDFS và MapReduce",
      "body": "HDFS chia tệp lớn và phân tán các khối dữ liệu trên nhiều máy để tăng khả năng lưu trữ. MapReduce chia phép tính thành bước map và reduce để xử lý song song.",
      "example": "Map có thể đếm từ trong từng phần tệp; Reduce cộng các bộ đếm từ các máy thành tổng.",
      "topicTags": [
        "Big Data"
      ]
    },
    {
      "id": "bigdata-visual",
      "title": "4.5.4 Trực quan hóa, ứng dụng và thách thức dữ liệu lớn",
      "body": "Biểu đồ giúp nhận ra xu hướng nhưng không thay thế việc kiểm tra dữ liệu. Big Data hỗ trợ ứng dụng thực tế và AI, đồng thời đặt ra thách thức về chất lượng, quyền riêng tư và chi phí.",
      "example": "Biểu đồ doanh thu theo tháng làm lộ mùa vụ, nhưng cần xem dữ liệu thiếu trước khi kết luận.",
      "topicTags": [
        "Big Data",
        "AI"
      ]
    },
    {
      "id": "blockchain",
      "title": "4.6.1 Blockchain và cơ chế tạo niềm tin",
      "body": "Blockchain là sổ cái phân tán ghi các giao dịch vào khối liên kết bằng mã băm. Nhiều nút lưu bản sao và dùng quy tắc chung để xác nhận trạng thái.",
      "example": "Nếu nội dung một khối bị sửa, mã băm thay đổi và liên kết với các khối sau không còn khớp.",
      "topicTags": [
        "Blockchain"
      ]
    },
    {
      "id": "consensus",
      "title": "4.6.2 Đồng thuận và đặc điểm chuỗi khối",
      "body": "Cơ chế đồng thuận giúp các nút thống nhất khối hợp lệ. Blockchain có thể minh bạch và khó sửa đổi, nhưng không tự xác thực dữ liệu nhập ban đầu là sự thật.",
      "example": "Nếu nguồn dữ liệu khai sai, các nút vẫn có thể đồng thuận ghi nhận thông tin sai đó.",
      "topicTags": [
        "Blockchain"
      ]
    },
    {
      "id": "contracts-crypto",
      "title": "4.6.3 Hợp đồng thông minh, tiền mã hóa và ứng dụng",
      "body": "Smart contract là chương trình chạy theo điều kiện trên blockchain; tiền mã hóa là một ứng dụng nhưng blockchain còn dùng ngoài tài chính. Chỉ nên chọn blockchain khi tính phân tán và kiểm chứng có giá trị rõ ràng.",
      "example": "Hợp đồng thông minh có thể giải ngân khi đủ chữ ký; lỗi trong mã vẫn có thể gây hậu quả.",
      "topicTags": [
        "Blockchain"
      ]
    }
  ],
  "5": [
    {
      "id": "problem-steps",
      "title": "5.1.1 Quy trình giải bài toán bằng máy tính",
      "body": "Slide nêu các bước: xác định bài toán, chọn phương pháp, xây dựng thuật toán, cài đặt, hiệu chỉnh và thực hiện. Kiểm tra đúng yêu cầu trước khi viết mã giúp tránh sửa sai hướng.",
      "example": "Bài toán tính điểm trung bình cần chốt đầu vào, công thức, cách xử lý dữ liệu thiếu, rồi mới cài đặt và kiểm thử.",
      "topicTags": [
        "Giải quyết bài toán"
      ]
    },
    {
      "id": "problem-spec",
      "title": "5.1.2 Đầu vào, đầu ra và tính khả thi",
      "body": "Mô tả bài toán cần xác định dữ liệu vào, điều kiện/ràng buộc, dữ liệu ra và điều kiện đầu ra. Cũng cần đánh giá thời gian, chi phí và nguồn lực có đủ không.",
      "example": "Tìm ƯSCLN: đầu vào là hai số nguyên dương; đầu ra là số dương lớn nhất cùng chia hết cho cả hai.",
      "topicTags": [
        "Giải quyết bài toán"
      ]
    },
    {
      "id": "method",
      "title": "5.1.3 Lựa chọn và tinh chỉnh phương pháp",
      "body": "Có thể có nhiều cách giải khác nhau, khác về thời gian, bộ nhớ và độ chính xác. Khi xây dựng thuật toán, xác định thao tác, dữ liệu và thứ tự; tinh chỉnh từng bước để đủ chính xác.",
      "example": "Sắp xếp ít phần tử có thể dùng cách đơn giản; dữ liệu lớn cần cân nhắc số phép so sánh và bộ nhớ.",
      "topicTags": [
        "Giải quyết bài toán"
      ]
    },
    {
      "id": "algorithm-definition",
      "title": "5.2.1 Khái niệm và thao tác của thuật toán",
      "body": "Thuật toán là mô tả có cấu trúc các thao tác nhằm giải một bài toán. Mỗi thao tác cần đủ rõ để người hoặc máy thực hiện; trình tự phải tạo ra kết quả theo yêu cầu.",
      "example": "Tìm số lớn nhất: đặt Max bằng phần tử đầu, lần lượt so sánh từng số và cập nhật Max khi gặp số lớn hơn.",
      "topicTags": [
        "Thuật toán",
        "Đặc trưng thuật toán"
      ]
    },
    {
      "id": "algorithm-properties",
      "title": "5.2.2 Các đặc trưng của thuật toán",
      "body": "Slide nhấn mạnh nhập/xuất, tính xác định, hữu hạn, hiệu quả và tổng quát. Thuật toán cần biết dữ liệu cần dùng, bước tiếp theo rõ ràng, dừng sau hữu hạn bước và áp dụng cho cả lớp bài toán.",
      "example": "Vòng lặp tìm kiếm phải tăng chỉ số mỗi lần; nếu không, thuật toán có thể không kết thúc.",
      "topicTags": [
        "Đặc trưng thuật toán",
        "Thuật toán"
      ]
    },
    {
      "id": "representations",
      "title": "5.3.1 Các cách biểu diễn thuật toán",
      "body": "Thuật toán có thể mô tả bằng ngôn ngữ tự nhiên, lưu đồ, mã giả hoặc ngôn ngữ lập trình. Chọn cách phù hợp với người đọc và giai đoạn thiết kế.",
      "example": "Dùng lưu đồ để trao đổi luồng rẽ nhánh; chuyển sang mã giả trước khi viết Python.",
      "topicTags": [
        "Biểu diễn thuật toán"
      ]
    },
    {
      "id": "natural-language",
      "title": "5.3.2 Mô tả bằng ngôn ngữ tự nhiên",
      "body": "Mô tả tự nhiên dễ đọc nhưng có thể mơ hồ. Dùng câu ngắn, thứ tự rõ, chỉ ra điều kiện và thao tác lặp để tránh hai cách hiểu.",
      "example": "Câu “lặp đến khi tìm thấy” cần nói rõ điều kiện dừng khi đã duyệt hết dãy mà không thấy phần tử.",
      "topicTags": [
        "Biểu diễn thuật toán"
      ]
    },
    {
      "id": "flowchart",
      "title": "5.3.3 Lưu đồ và các ký hiệu",
      "body": "Lưu đồ dùng hình bầu dục cho bắt đầu/kết thúc, hình bình hành cho vào-ra, hình chữ nhật cho xử lý và hình thoi cho điều kiện. Mũi tên chỉ luồng; nhánh nên ghi rõ Đúng/Sai.",
      "example": "Trong lưu đồ tìm số lớn nhất, hình thoi kiểm tra x > Max; nhánh Đúng cập nhật Max, nhánh Sai chuyển sang số kế tiếp.",
      "topicTags": [
        "Lưu đồ",
        "Biểu diễn thuật toán"
      ]
    },
    {
      "id": "pseudocode",
      "title": "5.3.4 Mã giả: gán, rẽ nhánh và lặp",
      "body": "Mã giả ghi thao tác gần ngôn ngữ lập trình nhưng không bị ràng buộc cú pháp. Dùng gán, IF/ELSE, vòng lặp, gọi hàm và nhập/xuất để thể hiện logic.",
      "example": "Max ← a1; với i từ 2 đến n: nếu ai > Max thì Max ← ai mô tả cách tìm cực đại.",
      "topicTags": [
        "Mã giả",
        "Biểu diễn thuật toán"
      ]
    },
    {
      "id": "recursion",
      "title": "5.4 Đệ quy và điều kiện dừng",
      "body": "Đệ quy giải bài toán bằng lời gọi lại chính nó trên trường hợp nhỏ hơn. Cần trường hợp cơ sở và bước đệ quy tiến gần cơ sở để tránh gọi vô hạn.",
      "example": "Giai thừa: fact(0)=1; fact(n)=n×fact(n−1) với n>0.",
      "topicTags": [
        "Đệ quy"
      ]
    },
    {
      "id": "arithmetic-algorithms",
      "title": "5.5.1 Thuật toán số học: hoán đổi, số nguyên tố, ƯSCLN",
      "body": "Các thuật toán số học tận dụng tính chất của số. ƯSCLN Euclid lặp phép chia lấy dư; số nguyên tố chỉ có hai ước dương; hoán đổi cần biến tạm hoặc phép gán phù hợp.",
      "example": "Với 48 và 18: 48 mod 18=12, 18 mod 12=6, 12 mod 6=0 nên ƯSCLN là 6.",
      "topicTags": [
        "Số học",
        "ƯSCLN",
        "Ví dụ thuật toán"
      ]
    },
    {
      "id": "sequence-search-sort",
      "title": "5.5.2 Thuật toán trên dãy: min, tổng, tìm kiếm, sắp xếp",
      "body": "Duyệt dãy có thể tính tổng, tìm min/max hoặc tìm phần tử. Sắp xếp đặt phần tử theo thứ tự; luôn xác định điều kiện dừng và cách xử lý khi không tìm thấy.",
      "example": "Tìm tuyến tính kiểm tra từng phần tử; nếu duyệt hết dãy mà không khớp thì trả về không tìm thấy.",
      "topicTags": [
        "Dãy số",
        "Tìm kiếm",
        "Sắp xếp",
        "Ví dụ thuật toán"
      ]
    },
    {
      "id": "classic-examples",
      "title": "5.6 Ví dụ thuật toán: Fibonacci và bài toán kinh điển",
      "body": "Fibonacci và Tháp Hà Nội minh họa cách phân rã bài toán, xác định bước cơ sở và truy vết lời gọi. Ví dụ kinh điển giúp nhìn ra cấu trúc lặp hoặc đệ quy.",
      "example": "Fibonacci có thể tính lặp bằng cách giữ hai giá trị trước, tránh gọi đệ quy lặp lại quá nhiều lần.",
      "topicTags": [
        "Ví dụ thuật toán",
        "Đệ quy"
      ]
    }
  ],
  "6": [
    {
      "id": "program-language",
      "title": "6.1 Chương trình và ngôn ngữ lập trình",
      "body": "Chương trình là dãy lệnh được lưu trong máy tính. Ngôn ngữ lập trình cung cấp ký hiệu và quy tắc để con người mô tả tác vụ máy cần thực hiện.",
      "example": "Một chương trình Python đọc hai số, cộng chúng rồi in tổng.",
      "topicTags": [
        "Python cơ bản",
        "Ngôn ngữ"
      ]
    },
    {
      "id": "machine-assembly-high",
      "title": "6.2 Ngôn ngữ máy, hợp ngữ và ngôn ngữ bậc cao",
      "body": "Ngôn ngữ máy biểu diễn lệnh bằng mã phụ thuộc kiến trúc; hợp ngữ dùng ký hiệu gợi nhớ; ngôn ngữ bậc cao dễ đọc và thường cần dịch trước khi chạy.",
      "example": "ADD AX, BX dễ nhớ hơn chuỗi bit tương ứng; a+b trong Python trừu tượng hơn nữa.",
      "topicTags": [
        "Ngôn ngữ"
      ]
    },
    {
      "id": "python-language",
      "title": "6.3 Python là gì và vì sao dùng Python",
      "body": "Python là ngôn ngữ bậc cao có cú pháp gọn, hệ sinh thái phong phú và dùng trong tự động hóa, dữ liệu, AI. Tốc độ thực thi và quản lý môi trường thư viện vẫn cần cân nhắc.",
      "example": "Python giúp viết nhanh chương trình phân tích CSV, nhưng tác vụ thời gian thực nặng có thể cần tối ưu hoặc thư viện biên dịch.",
      "topicTags": [
        "Python",
        "Python cơ bản"
      ]
    },
    {
      "id": "interpreter-compiler",
      "title": "6.4 Trình thông dịch, trình biên dịch và thực thi",
      "body": "Trình thông dịch đọc và thực hiện chương trình theo từng phần; trình biên dịch dịch toàn bộ sang mã thực thi trước. Cách chạy phụ thuộc ngôn ngữ và môi trường.",
      "example": "Trong chế độ tương tác Python, nhập biểu thức và xem kết quả ngay; script chạy các lệnh đã lưu trong tệp.",
      "topicTags": [
        "Thực thi Python",
        "Thực thi"
      ]
    },
    {
      "id": "errors",
      "title": "6.5 Các loại lỗi trong chương trình",
      "body": "Lỗi cú pháp vi phạm quy tắc viết; lỗi khi chạy xuất hiện lúc chương trình thực thi; lỗi logic vẫn chạy nhưng cho kết quả sai. Phân biệt loại lỗi giúp chọn cách sửa.",
      "example": "Thiếu dấu đóng ngoặc là lỗi cú pháp; chia cho 0 là lỗi lúc chạy; công thức diện tích sai là lỗi logic.",
      "topicTags": [
        "Lỗi",
        "Lỗi và số thực"
      ]
    },
    {
      "id": "install-first-program",
      "title": "6.6 Cài đặt, môi trường và chương trình đầu tiên",
      "body": "Có thể chạy Python trong Shell/REPL để thử nhanh hoặc lưu mã trong script để chạy lại. Editor giúp viết, lưu và tìm lỗi; chương trình đầu tiên thường in một thông điệp.",
      "example": "Lưu print(\"Xin chào\") vào hello.py, rồi chạy tệp để thấy thông điệp xuất hiện.",
      "topicTags": [
        "Thực thi Python",
        "Python"
      ]
    },
    {
      "id": "variables-constants",
      "title": "6.7 Biến, hằng số và định danh",
      "body": "Biến là tên gắn với giá trị; hằng số là tên dùng cho giá trị không dự định thay đổi. Python phân biệt chữ hoa thường; tên không bắt đầu bằng chữ số và không dùng từ khóa.",
      "example": "student_count = 30 là tên biến hợp lệ; 2count bắt đầu bằng số nên không hợp lệ.",
      "topicTags": [
        "Tên và biến",
        "Biến"
      ]
    },
    {
      "id": "assignment-binding",
      "title": "6.8 Phép gán và ràng buộc tên với giá trị",
      "body": "Phép gán gắn tên ở vế trái với giá trị biểu thức ở vế phải. Khi gán lại, tên có thể tham chiếu giá trị mới; đây không phải phương trình đại số.",
      "example": "Sau x=3, rồi x=x+1, giá trị mới của x là 4 vì vế phải được tính trước khi gán.",
      "topicTags": [
        "Tên và biến",
        "Python cơ bản"
      ]
    },
    {
      "id": "expressions-statements",
      "title": "6.9 Biểu thức, câu lệnh và trừu tượng hóa",
      "body": "Biểu thức tạo ra giá trị; câu lệnh thực hiện hành động như gán hoặc in. Biến giúp đặt tên cho kết quả trung gian và diễn đạt công thức phức tạp theo từng bước.",
      "example": "area = width * height vừa tính tích vừa lưu kết quả vào tên area.",
      "topicTags": [
        "Python cơ bản",
        "Toán tử"
      ]
    },
    {
      "id": "numeric-types",
      "title": "6.10 Kiểu số nguyên và số thực",
      "body": "int biểu diễn số nguyên; float biểu diễn số dấu phẩy động gần đúng. Kết hợp các kiểu có thể làm kết quả chuyển thành float; không nên giả định số thực lưu chính xác tuyệt đối.",
      "example": "7 / 2 cho 3.5, còn 7 // 2 cho 3 trong Python.",
      "topicTags": [
        "Kiểu và nhập xuất",
        "Kiểu dữ liệu",
        "Số thực"
      ]
    },
    {
      "id": "float-details",
      "title": "6.11 Tràn, hụt và ký hiệu khoa học",
      "body": "Số dấu phẩy động có miền hữu hạn; số quá lớn có thể tràn, quá nhỏ có thể bị làm tròn thành 0 hoặc mất độ chính xác. Ký hiệu khoa học viết gọn số rất lớn hoặc nhỏ.",
      "example": "3.2e5 biểu diễn 320000.0; phép tính gần 0 có thể chịu sai số biểu diễn.",
      "topicTags": [
        "Lỗi và số thực",
        "Số thực"
      ]
    },
    {
      "id": "operators-precedence",
      "title": "6.12 Toán tử số học và thứ tự thực hiện",
      "body": "Các toán tử có mức ưu tiên: lũy thừa trước nhân/chia, rồi cộng/trừ; ngoặc làm rõ thứ tự. //, % và ** lần lượt là chia lấy phần nguyên, phần dư và lũy thừa.",
      "example": "1 + 2 * 3 bằng 7; (1 + 2) * 3 bằng 9.",
      "topicTags": [
        "Toán tử"
      ]
    },
    {
      "id": "mixed-assignment",
      "title": "6.13 Kết hợp kiểu và toán tử gán kết hợp",
      "body": "Phép gán kết hợp như += cập nhật biến bằng một phép toán. + cộng số nhưng nối chuỗi khi hai toán hạng là chuỗi; kiểu dữ liệu quyết định ý nghĩa.",
      "example": "count += 1 tăng biến; \"hello \" + \"there\" ghép thành một chuỗi.",
      "topicTags": [
        "Toán tử",
        "Kiểu và nhập xuất"
      ]
    },
    {
      "id": "input-output",
      "title": "6.14 Nhập, xuất và chuyển kiểu",
      "body": "input() trả về chuỗi; print() hiển thị dữ liệu. Muốn tính số vừa nhập, chuyển bằng int() hoặc float(); chuyển kiểu có thể báo lỗi khi dữ liệu không phù hợp.",
      "example": "age = int(input(\"Tuổi: \")) chuyển văn bản nhập thành số nguyên trước khi tính.",
      "topicTags": [
        "Kiểu và nhập xuất",
        "Nhập liệu",
        "Nhập xuất"
      ]
    },
    {
      "id": "comments-mnemonic",
      "title": "6.15 Chú thích và tên biến dễ hiểu",
      "body": "Chú thích bắt đầu bằng # giúp giải thích mục đích hoặc quyết định trong mã; tên biến gợi nghĩa giúp người đọc hiểu dữ liệu mà không cần giải mã tên khó nhớ.",
      "example": "Dùng monthly_total rõ hơn x1q3z9; viết chú thích nếu phép tính cần giải thích.",
      "topicTags": [
        "Tên và biến",
        "Python cơ bản"
      ]
    },
    {
      "id": "python-practice",
      "title": "6.16 Đọc biểu thức và tự kiểm tra chương trình",
      "body": "Khi đọc chương trình, lần theo từng phép gán và cập nhật giá trị biến. Thử đầu vào nhỏ, biên và kiểu không hợp lệ để phát hiện lỗi sớm.",
      "example": "Với x=1+2**3/4*5, tính lũy thừa trước, rồi chia/nhân từ trái sang phải, cuối cùng cộng 1.",
      "topicTags": [
        "Toán tử",
        "Thực thi Python"
      ]
    }
  ]
};
