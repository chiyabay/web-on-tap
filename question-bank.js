(() => {
  const item = (id, level, topic, prompt, options, explanation) => ({
    id, level, topic, prompt, options, answer: 0, explanation,
  });

  const additions = {
    1: [
      item("c1-x01", "easy", "WKID", "Kết luận nào phân biệt tri thức với trí tuệ trong mô hình WKID?", ["Tri thức rút ra quy luật; trí tuệ dùng tri thức để quyết định", "Tri thức là dữ liệu thô; trí tuệ là bit", "Hai tầng luôn đồng nghĩa", "Trí tuệ xuất hiện trước thông tin"], "Knowledge tổng hợp/phân tích thông tin để tìm quy luật; Wisdom dùng tri thức để dự báo, đánh giá và lựa chọn."),
      item("c1-x02", "easy", "Dữ liệu", "Số đo áp suất, âm thanh và ảnh đều có thể trở thành dữ liệu máy tính sau khi…", ["Được biểu diễn/số hóa thành dạng máy xử lý", "Được đổi tên thành tệp .txt", "Được in ra giấy", "Được gửi qua email"], "Máy tính lưu và xử lý dữ liệu ở dạng nhị phân; tín hiệu tự nhiên cần qua bước số hóa."),
      item("c1-x03", "easy", "Dữ liệu", "Mảng, xâu ký tự và bản ghi thuộc nhóm nào?", ["Dữ liệu có cấu trúc", "Tín hiệu tự nhiên chưa số hóa", "Đơn vị đo thông tin", "Bộ mã ký tự"], "Các kiểu dữ liệu có cấu trúc ghép các dữ liệu cơ bản theo một cách tổ chức nhất định."),
      item("c1-x04", "easy", "Đơn vị", "Theo quy ước của tài liệu, 1 GB bằng bao nhiêu MB?", ["1024 MB", "1000 MB", "128 MB", "8 MB"], "Tài liệu dùng đơn vị nhị phân: mỗi bậc KB, MB, GB, TB tăng theo hệ số 2¹⁰."),
      item("c1-x05", "core", "Hệ cơ số", "Một hệ đếm cơ số b hợp lệ phải có điều kiện nào?", ["b là số nguyên và b ≥ 2", "b là số thực bất kỳ", "b phải bằng 10", "b phải là lũy thừa của 10"], "Cơ số là số lượng chữ số của hệ đếm; hệ vị trí thông thường cần cơ số nguyên từ 2 trở lên."),
      item("c1-x06", "core", "Hệ cơ số", "Trong số 101,01₂, chữ số 1 ở vị trí bên trái dấu phẩy nhất có trọng số nào?", ["2²", "2¹", "2⁰", "2⁻¹"], "Các vị trí được tính theo lũy thừa của cơ số; trong 101,01₂, chữ số ngoài cùng bên trái nằm ở hàng 2²."),
      item("c1-x07", "core", "Hệ cơ số", "Chữ số 8 có hợp lệ trong hệ cơ số 8 không?", ["Không, vì chữ số lớn nhất là 7", "Có, vì hệ 8 có tám chữ số từ 0 đến 8", "Có, nhưng chỉ ở phần lẻ", "Chỉ hợp lệ khi viết hoa"], "Hệ cơ số b dùng chữ số từ 0 đến b−1; hệ 8 chỉ có 0,1,2,3,4,5,6,7."),
      item("c1-x08", "apply", "Hệ cơ số", "Khi đổi phần nguyên thập phân sang cơ số b, cần đọc các số dư theo thứ tự nào?", ["Ngược từ số dư cuối về số dư đầu", "Theo thứ tự số dư đầu đến cuối", "Cộng tất cả số dư", "Đọc các thương từ cuối về đầu"], "Đổi phần nguyên bằng phép chia liên tiếp cho b; chữ số kết quả được đọc ngược thứ tự các số dư."),
      item("c1-x09", "apply", "Hệ cơ số", "Khi đổi phần lẻ thập phân sang cơ số b, thao tác lặp chủ yếu là gì?", ["Nhân phần lẻ với b và ghi phần nguyên", "Chia phần lẻ cho b và ghi thương", "Đảo bit toàn bộ số", "Cộng cơ số vào phần lẻ"], "Đổi phần thập phân bằng cách nhân phần lẻ với cơ số, lấy phần nguyên lần lượt làm các chữ số sau dấu phẩy."),
      item("c1-x10", "apply", "Hệ cơ số", "Số 235,64₈ được quy đổi sang thập phân bằng cách nào?", ["2×8² + 3×8¹ + 5×8⁰ + 6×8⁻¹ + 4×8⁻²", "2×10² + 3×10¹ + 5×10⁰", "2×8⁰ + 3×8¹ + 5×8²", "235 + 64"], "Mỗi chữ số nhân với cơ số lũy thừa theo vị trí; vị trí bên phải dấu phẩy dùng số mũ âm."),
      item("c1-x11", "core", "Số nguyên", "Số bù hai của một mẫu n bit có thể tìm nhanh bằng thao tác nào?", ["Đảo tất cả bit rồi cộng 1", "Chỉ đảo bit dấu", "Cộng 1 vào mẫu gốc", "Bỏ bit cao nhất"], "Bù hai bằng bù một cộng 1; bù một là đảo toàn bộ bit."),
      item("c1-x12", "core", "Số nguyên", "Với số nguyên có dấu bù hai 8 bit, phép cộng hai số dương lớn có thể tràn khi nào?", ["Kết quả toán học vượt 127", "Kết quả bằng 0", "Có carry-out bất kỳ", "Hai toán hạng khác dấu"], "Miền số có dấu 8 bit là −128 đến 127. Tổng vượt miền này có thể tạo overflow."),
      item("c1-x13", "apply", "Số nguyên", "Với phép cộng số có dấu, dấu hiệu tràn điển hình là gì?", ["Hai toán hạng cùng dấu nhưng kết quả trái dấu", "Hai toán hạng trái dấu", "Bit thấp nhất bằng 1", "Carry-out luôn bằng 0"], "Overflow trong bù hai xảy ra khi cộng hai số cùng dấu mà dấu kết quả khác dấu hai toán hạng."),
      item("c1-x14", "apply", "Số nguyên", "Trong phép trừ số có dấu X−Y, cách thực hiện tương đương nào đúng?", ["Cộng X với số bù hai của Y", "Lấy bù một của X rồi cộng Y", "Đảo thứ tự thành Y−X", "Cộng X và Y không đổi dấu"], "X−Y = X + (−Y); số âm của Y được biểu diễn bằng bù hai."),
      item("c1-x15", "core", "Phép logic", "Kết quả của phép AND theo từng bit chỉ bằng 1 khi nào?", ["Cả hai bit đều là 1", "Ít nhất một bit là 1", "Hai bit khác nhau", "Bit thứ nhất là 0"], "AND cho 1 chỉ với cặp 1 AND 1; các cặp còn lại cho 0."),
      item("c1-x16", "core", "Phép logic", "Phép XOR cho kết quả 1 trong trường hợp nào?", ["Hai bit khác nhau", "Hai bit đều là 0", "Hai bit đều là 1", "Bit cao nhất là 1"], "XOR (exclusive OR) bằng 1 khi hai bit đầu vào khác nhau."),
      item("c1-x17", "apply", "Phép logic", "Dùng mặt nạ AND với bit 0 tại vị trí cần xóa thường cho kết quả nào ở vị trí đó?", ["Bit kết quả bằng 0", "Bit kết quả luôn bằng 1", "Bit không đổi bất kể đầu vào", "Phát sinh carry"], "AND với 0 luôn cho 0, vì vậy mặt nạ AND có thể xóa các bit được chọn."),
      item("c1-x18", "core", "Số thực", "Trong IEEE 754 dạng đơn, bias của trường số mũ là bao nhiêu?", ["127", "23", "32", "1023"], "Dạng IEEE 754 32 bit dùng bias 127; dạng kép 64 bit dùng bias 1023."),
      item("c1-x19", "core", "Số thực", "Với số chuẩn hóa IEEE 754 nhị phân, phần định trị thường có dạng nào?", ["1.m với bit 1 được ngầm định", "0.m với bit dấu bị lặp", "m×10ⁿ", "Chỉ gồm phần nguyên"], "Bài giảng nêu định trị chuẩn hóa M = 1.m; bit 1 đầu không cần lưu tường minh."),
      item("c1-x20", "apply", "Số thực", "Trong IEEE 754, exponent toàn 1 và fraction bằng 0 biểu diễn gì?", ["Vô cực dương hoặc âm tùy bit dấu", "NaN", "Số 0", "Số nguyên không dấu"], "Exponent toàn 1 và fraction 0 biểu diễn ±∞; fraction khác 0 biểu diễn NaN."),
      item("c1-x21", "core", "Ký tự", "Bộ mã ASCII ban đầu dùng 7 bit tạo ra bao nhiêu mã có thể có?", ["128", "64", "127", "256"], "7 bit tạo 2⁷ = 128 tổ hợp; bản mở rộng 8 bit có thể có 256 tổ hợp."),
      item("c1-x22", "core", "Ký tự", "Vì sao các bộ mã ký tự cần thống nhất?", ["Để cùng chuỗi bit được diễn giải thành cùng ký tự", "Để tăng tốc xung CPU", "Để thay thế bộ nhớ ngoài", "Để tự động sửa lỗi ngữ nghĩa"], "Bộ mã quy định ánh xạ giữa giá trị nhị phân và ký tự, giúp các hệ thống trao đổi văn bản nhất quán."),
      item("c1-x23", "trap", "Số thực", "Một số thực gần đúng trong máy tính có thể gây khác biệt nào khi so sánh?", ["Sai số làm tròn khiến kết quả không đúng tuyệt đối như số thực toán học", "Mọi phép toán luôn chính xác vô hạn", "Số thực luôn trở thành ký tự", "Bit dấu bị bỏ hoàn toàn"], "Số bit hữu hạn không biểu diễn chính xác mọi phân số; phép tính dấu phẩy động có thể có sai số làm tròn."),
      item("c1-x24", "trap", "Đơn vị", "Phát biểu nào đúng về bit và byte?", ["Bit là đơn vị nhỏ nhất; 1 byte gồm 8 bit", "1 bit gồm 8 byte", "Byte chỉ nhận 0 hoặc 1", "Bit và byte luôn đồng nghĩa"], "Bit là chữ số nhị phân đơn lẻ; byte là nhóm 8 bit."),
    ],
    2: [
      item("c2-x01", "easy", "Phần cứng", "Chu trình thực hiện chương trình của máy tính chủ yếu là gì?", ["Lặp lấy lệnh, giải mã và thực hiện lệnh", "Chỉ nhập dữ liệu một lần", "Chỉ khởi động lại CPU", "Đổi mọi lệnh thành tệp ảnh"], "Chương trình gồm các lệnh lưu trong bộ nhớ; CPU lặp lại chu trình để thực hiện chúng."),
      item("c2-x02", "core", "Phần cứng", "MIPS được dùng trong bài giảng để mô tả gần đúng điều gì?", ["Số triệu lệnh thực hiện trong một giây", "Dung lượng RAM tính theo bit", "Số cổng của switch", "Tốc độ mạng không dây"], "MIPS là Millions of Instructions Per Second; tốc độ thực tế còn phụ thuộc các thành phần khác."),
      item("c2-x03", "core", "Phần cứng", "Tại sao chỉ nhìn thông số CPU chưa đủ để đánh giá hiệu năng toàn hệ thống?", ["Hiệu năng còn phụ thuộc bộ nhớ và các thành phần còn lại", "CPU không thực hiện lệnh", "RAM luôn nhanh hơn CPU", "Hệ điều hành không dùng tài nguyên"], "Tài liệu lưu ý tốc độ CPU khó đánh giá riêng vì còn phụ thuộc tốc độ các thành phần khác."),
      item("c2-x04", "easy", "Bộ nhớ", "Bộ nhớ chính được tổ chức thành các ngăn nhớ như thế nào?", ["Mỗi ngăn có địa chỉ", "Chỉ được đặt tên bằng phần mở rộng", "Không có khả năng đọc", "Chỉ lưu âm thanh"], "Bộ nhớ chính có các ngăn nhớ được đánh địa chỉ để CPU truy cập."),
      item("c2-x05", "core", "Bộ nhớ", "Phương tiện nào là bộ nhớ từ?", ["Ổ đĩa cứng từ tính", "CD-ROM", "Thẻ nhớ flash", "RAM"], "Bài giảng phân nhóm bộ nhớ ngoài thành từ (đĩa cứng), quang (CD/DVD) và bán dẫn (flash/SSD)."),
      item("c2-x06", "core", "Bộ nhớ", "Đĩa CD/DVD được xếp vào nhóm lưu trữ nào?", ["Bộ nhớ quang", "Bộ nhớ từ", "Bộ nhớ đệm", "Bộ nhớ thanh ghi"], "CD và DVD là các phương tiện lưu trữ quang."),
      item("c2-x07", "apply", "Vào-ra", "Mô-đun ghép nối vào-ra có ích vì sao?", ["Làm trung gian kết nối CPU/hệ thống với thiết bị ngoại vi", "Tăng dung lượng ổ cứng", "Thay thế chương trình ứng dụng", "Mã hóa địa chỉ IP"], "Thiết bị vào-ra thường trao đổi với hệ thống qua mô-đun ghép nối và các cổng I/O."),
      item("c2-x08", "core", "Bus", "Bus dữ liệu chủ yếu mang loại thông tin nào?", ["Dữ liệu đang được truyền giữa các thành phần", "Địa chỉ vị trí cần truy cập", "Tín hiệu điều khiển", "Tên người dùng"], "Bus dữ liệu chuyển nội dung; bus địa chỉ chọn vị trí, bus điều khiển mang tín hiệu điều khiển."),
      item("c2-x09", "easy", "Phần mềm", "Phần mềm ứng dụng khác phần mềm hệ thống ở điểm nào?", ["Ứng dụng phục vụ nhu cầu cụ thể của người dùng", "Ứng dụng luôn điều khiển nguồn điện", "Phần mềm hệ thống chỉ là tài liệu", "Hai khái niệm giống hệt nhau"], "Phần mềm hệ thống quản lý máy và tạo môi trường; phần mềm ứng dụng phục vụ các công việc như soạn thảo, tính toán."),
      item("c2-x10", "core", "Ngôn ngữ", "Ngôn ngữ máy có đặc điểm nào?", ["Máy tính thực hiện trực tiếp; lệnh thường biểu diễn bằng mã nhị phân", "Gần văn nói và không phụ thuộc máy", "Chỉ dùng trong web", "Luôn là mã giả"], "Ngôn ngữ máy là dạng lệnh mà máy tính hiểu và thực hiện trực tiếp."),
      item("c2-x11", "core", "Ngôn ngữ", "Hợp ngữ cải thiện việc lập trình bằng cách nào?", ["Dùng từ gợi nhớ thay cho mã nhị phân", "Dùng hình ảnh thay cho lệnh", "Bỏ mọi quy tắc cú pháp", "Không cần chuyển sang mã máy"], "Hợp ngữ dùng từ viết tắt gợi nhớ, nhưng vẫn cần assembler dịch thành mã máy."),
      item("c2-x12", "easy", "Hệ điều hành", "Hệ điều hành quản lý việc cấp phát tài nguyên nào?", ["CPU, bộ nhớ và thiết bị", "Chỉ màu giao diện", "Chỉ địa chỉ website", "Chỉ nội dung email"], "Một nhiệm vụ quan trọng của OS là điều phối và cấp phát tài nguyên máy tính."),
      item("c2-x13", "core", "Tệp", "Trong tên đầy đủ của tệp Windows, thành phần nào có thể chỉ ổ đĩa?", ["Ký tự ổ như C: ở đầu đường dẫn", "Dấu `?`", "Tên giao thức TCP", "Tên bus"], "Đường dẫn có thể bắt đầu bằng ký tự ổ đĩa theo sau dấu hai chấm, rồi liệt kê các thư mục."),
      item("c2-x14", "core", "Giao diện", "Người dùng nhập lệnh văn bản tại dấu nhắc để điều khiển máy. Đây là giao diện nào?", ["CLI", "GUI", "NUI", "GPU"], "CLI nhận lệnh văn bản; GUI dùng cửa sổ và biểu tượng; NUI dùng tương tác tự nhiên."),
      item("c2-x15", "apply", "Mạng", "Thiết bị nào thường kết nối các mạng khác nhau và chuyển gói tin giữa chúng?", ["Bộ định tuyến (router)", "Hub", "Bàn phím", "ROM"], "Router định tuyến lưu lượng giữa các mạng; switch thường chuyển tiếp trong LAN."),
      item("c2-x16", "core", "Mạng", "Tường lửa trong hệ thống mạng thường giúp làm gì?", ["Kiểm soát lưu lượng và chặn kết nối trái phép theo quy tắc", "Đổi mọi tín hiệu thành ánh sáng", "Cấp thêm RAM", "Thay thế bộ định tuyến trong mọi trường hợp"], "Firewall kiểm soát dữ liệu giữa các mạng và áp dụng các quy tắc cho phép/chặn truy cập."),
      item("c2-x17", "apply", "Mạng", "Thiết bị tích hợp thường dùng để kết nối Internet cho mạng nhỏ tại nhà là gì?", ["Modem/router gia đình", "Bộ nhớ cache", "Máy quét", "ALU"], "Modem là thiết bị kết nối Internet cho LAN nhỏ và nhiều thiết bị gia đình còn tích hợp Wi‑Fi/router."),
      item("c2-x18", "core", "Mạng", "Cáp quang truyền tín hiệu chủ yếu bằng cách nào?", ["Ánh sáng", "Từ trường trên đĩa", "Âm thanh", "Dòng lệnh văn bản"], "Cáp quang mang tín hiệu ánh sáng và thường có tốc độ/băng thông cao."),
      item("c2-x19", "easy", "Mạng", "Trạm BTS trong mạng di động có vai trò nào?", ["Thu phát sóng để thiết bị di động kết nối mạng", "Lưu tập tin của Windows", "Thực hiện phép toán ALU", "Chuyển địa chỉ DNS thành chữ"], "BTS là trạm thu phát sóng di động, hỗ trợ kết nối như 3G/4G/5G."),
      item("c2-x20", "core", "Mạng", "Giao thức mạng giúp các thiết bị khác hãng giao tiếp vì sao?", ["Chúng tuân theo quy tắc trao đổi chung", "Chúng phải dùng cùng vỏ máy", "Chúng có cùng địa chỉ vật lý", "Chúng không cần định dạng dữ liệu"], "Giao thức quy định cách trao đổi để phần cứng/phần mềm khác nhau có thể tương tác."),
      item("c2-x21", "core", "Mạng", "MAN thường có phạm vi xấp xỉ nào theo phân loại trong tài liệu?", ["Một đô thị, rộng hơn LAN nhưng nhỏ hơn WAN", "Vài mét quanh một người", "Toàn cầu", "Chỉ một thiết bị"], "MAN kết nối nhiều LAN trong một vùng đô thị; WAN trải rộng hơn nhiều."),
      item("c2-x22", "apply", "Mạng", "Trong mạng ngang hàng P2P, các máy tính thường…", ["Có thể vừa cung cấp vừa sử dụng tài nguyên", "Chỉ một máy làm server duy nhất", "Không thể chia sẻ tệp", "Chỉ kết nối qua cáp quang"], "P2P phân tán vai trò; mỗi peer có thể vừa là bên cung cấp vừa là bên nhận tài nguyên."),
      item("c2-x23", "trap", "Mạng", "Hub và switch khác nhau chủ yếu thế nào?", ["Hub phát dữ liệu ra nhiều cổng; switch chuyển tiếp tới cổng phù hợp", "Hub định tuyến giữa Internet còn switch lưu tệp", "Switch chỉ dùng cho Wi‑Fi", "Không có khác biệt"], "Hub thường gửi dữ liệu tới mọi thiết bị còn lại; switch chọn cổng đích để giảm lưu lượng không cần thiết."),
      item("c2-x24", "trap", "Bộ nhớ", "Bộ nhớ ngoài có thể được truy cập trong hệ thống dưới dạng gì?", ["Thiết bị vào-ra", "Thanh ghi ALU", "Bus điều khiển duy nhất", "Ngôn ngữ máy"], "Bộ nhớ ngoài kết nối với hệ thống dưới dạng thiết bị vào-ra và phục vụ lưu trữ lâu dài."),
    ],
    3: [
      item("c3-x01", "easy", "Lịch sử Internet", "ARPANET bắt đầu như dự án kết nối máy tính của cơ quan nào?", ["ARPA thuộc Bộ Quốc phòng Hoa Kỳ", "HUST", "Liên minh Bưu chính", "Tổ chức W3C"], "Bài giảng nêu ARPA khởi động dự án vào năm 1969 để kết nối các máy tính nghiên cứu."),
      item("c3-x02", "core", "Lịch sử Internet", "Mốc nào trong bài giảng gắn với việc ARPANET chuyển sang TCP/IP?", ["Năm 1983", "Năm 1969", "Năm 1995", "Năm 2010"], "Năm 1983 ARPANET chuyển sang bộ giao thức TCP/IP; đây là mốc quan trọng của Internet."),
      item("c3-x03", "core", "Kiến trúc mạng", "Mạng biên Internet gồm thành phần nào?", ["Thiết bị đầu cuối và mạng truy nhập", "Chỉ các bộ định tuyến đường trục", "Chỉ trung tâm dữ liệu", "Chỉ tên miền cấp cao"], "Mạng biên chứa thiết bị đầu cuối và mạng truy nhập kết nối chúng vào Internet."),
      item("c3-x04", "core", "Kiến trúc mạng", "Mạng lõi Internet thường gồm gì?", ["Các thiết bị mạng hiệu năng cao do ISP vận hành", "Bàn phím và màn hình người dùng", "Chỉ máy in gia đình", "Các tệp trên laptop"], "Mạng lõi gồm thiết bị hiệu năng cao và các mạng trục do ISP xây dựng/vận hành."),
      item("c3-x05", "core", "Truy nhập Internet", "GPON là công nghệ truy nhập dựa trên phương tiện nào?", ["Mạng cáp quang thụ động", "Bluetooth cá nhân", "Đĩa quang", "Cáp đồng trục nối tiếp"], "GPON là Gigabit Passive Optical Network, dùng cáp quang và thường chia sẻ đường truyền cho nhiều thuê bao."),
      item("c3-x06", "apply", "Truy nhập Internet", "Mạng Wi‑Fi trong gia đình thường thuộc loại mạng nào?", ["LAN không dây", "WAN vệ tinh", "PAN có dây", "Mạng lõi ISP"], "Wi‑Fi là công nghệ kết nối không dây thường dùng cho LAN gia đình/cơ quan."),
      item("c3-x07", "core", "Web", "Trong trao đổi web, trình duyệt thường làm gì?", ["Gửi yêu cầu tới máy chủ web và hiển thị nội dung trả về", "Cấp địa chỉ IP công cộng cho ISP", "Thay thế DNS", "Lưu trữ mọi trang của Internet"], "Trình duyệt gửi yêu cầu HTTP/HTTPS tới máy chủ web, nhận tài nguyên rồi trình bày cho người dùng."),
      item("c3-x08", "core", "Email", "Trong email, CC khác BCC ở điểm nào?", ["Người nhận CC thường thấy nhau; BCC ẩn địa chỉ người nhận BCC", "CC gửi thư, BCC phân giải DNS", "BCC luôn là người gửi", "CC mã hóa bằng khóa riêng"], "Carbon Copy hiển thị các người nhận sao; Blind CC che địa chỉ BCC khỏi những người nhận khác."),
      item("c3-x09", "core", "Email", "Giao thức nào thường được dùng để tải/đồng bộ thư về ứng dụng email?", ["POP3 hoặc IMAP4", "SMTP בלבד", "HTML", "IPSec"], "POP3 và IMAP4 phục vụ nhận/tải thư; SMTP chủ yếu dùng gửi thư."),
      item("c3-x10", "core", "DNS", "Tên miền mail.google.com có các cấp được đọc thế nào từ phải sang trái?", [".com là cấp một, google cấp hai, mail là tên miền con", "mail là cấp một, com là tên miền con", "Các phần không có thứ bậc", "google là địa chỉ IP"], "Tên miền phân cấp; phần cuối thường là tên miền cấp một, phần kế tiếp là cấp hai, các tiền tố có thể là tên miền con."),
      item("c3-x11", "apply", "Cloud", "Máy ảo, mạng và lưu trữ được cấp theo yêu cầu là ví dụ gần với mô hình nào?", ["IaaS", "SaaS", "HTML", "MFA"], "IaaS cung cấp hạ tầng tính toán như máy chủ ảo, lưu trữ và mạng."),
      item("c3-x12", "apply", "Cloud", "Một ứng dụng hoàn chỉnh được dùng qua trình duyệt mà không quản lý máy chủ thường gần với mô hình nào?", ["SaaS", "IaaS", "GPON", "CLI"], "SaaS cung cấp phần mềm sẵn dùng qua mạng; người dùng không trực tiếp quản lý hạ tầng bên dưới."),
      item("c3-x13", "trap", "Cloud", "Mô hình PaaS cung cấp điều gì cho nhà phát triển?", ["Nền tảng/môi trường để phát triển và chạy ứng dụng", "Chỉ cáp mạng", "Một cặp khóa công khai", "Một thiết bị nhập"], "PaaS cung cấp nền tảng ứng dụng, runtime và công cụ phát triển trên hạ tầng cloud."),
      item("c3-x14", "core", "An toàn", "Lỗ hổng bảo mật là gì?", ["Điểm yếu hệ thống có thể bị lợi dụng", "Một loại giao thức gửi thư", "Tệp đã sao lưu", "Một địa chỉ IP riêng"], "Lỗ hổng là điểm yếu trong hệ thống mà kẻ tấn công có thể khai thác."),
      item("c3-x15", "apply", "An toàn", "Hành vi thu thập thông tin mục tiêu trước khi xâm nhập thường thuộc loại nào?", ["Tấn công do thám", "Tấn công từ chối dịch vụ", "Sao lưu dữ liệu", "Xác thực sinh trắc"], "Do thám thu thập thông tin về mục tiêu và thường chưa gây tác hại trực tiếp như hành vi xâm nhập."),
      item("c3-x16", "apply", "An toàn", "Kẻ tấn công chiếm quyền tài khoản để đọc dữ liệu riêng tư đang vi phạm trực tiếp mục tiêu nào của CIA?", ["Tính bí mật", "Tính sẵn sàng", "Tính tiện dụng", "Tính tương thích"], "Đọc thông tin trái phép làm mất tính bí mật; nếu sửa dữ liệu có thể ảnh hưởng thêm tới toàn vẹn."),
      item("c3-x17", "core", "An toàn", "Một cuộc gọi video ngắn, hình ảnh mờ, giọng không khớp và yêu cầu chuyển tiền gấp gợi ý điều gì?", ["Có thể là giả mạo deepfake; cần xác minh qua kênh khác", "Chắc chắn là người thân", "HTTPS đang hết hạn", "DNS bị lỗi"], "Bài giảng liệt kê video ngắn, hình mờ, âm thanh lệch và tài khoản nhận tiền bất thường là dấu hiệu cần kiểm chứng."),
      item("c3-x18", "core", "Mã hóa", "Mật mã khóa công khai dùng cặp khóa nào?", ["Khóa công khai và khóa riêng", "Hai khóa đều công khai", "Chỉ một mật khẩu dùng chung", "Địa chỉ IP và DNS"], "Kryptography bất đối xứng dùng public key và private key với vai trò tách biệt."),
      item("c3-x19", "apply", "Xác thực", "Mật khẩu là ví dụ của yếu tố xác thực nào?", ["Yếu tố tri thức", "Yếu tố sinh trắc", "Yếu tố vị trí", "Yếu tố mạng"], "Mật khẩu là thứ người dùng biết, thuộc yếu tố tri thức; thiết bị là yếu tố sở hữu."),
      item("c3-x20", "core", "Xác thực", "OTP có đặc điểm nào?", ["Chỉ dùng cho một lần xác thực", "Luôn dùng vĩnh viễn", "Là địa chỉ IP", "Không thay đổi theo thời gian hay sự kiện"], "One-Time Password chỉ dùng một lần và có thể thay đổi theo thời gian hoặc sự kiện."),
      item("c3-x21", "apply", "An toàn", "Mạng Wi‑Fi công cộng mở không cần mật khẩu có rủi ro gì?", ["Có thể bị nghe lén/giả mạo; tránh thao tác nhạy cảm và ưu tiên HTTPS", "Luôn an toàn nhất", "Tự động bật MFA", "Ngăn website giả mạo"], "Wi‑Fi mở hoặc cấu hình yếu làm tăng rủi ro; cần tránh đăng nhập nhạy cảm và xác minh website."),
      item("c3-x22", "core", "An toàn", "Trong các chuẩn Wi‑Fi, nhóm nào được tài liệu khuyến nghị là an toàn hơn WEP?", ["WPA/WPA2/WPA3", "Open và WEP", "HTTP và HTML", "SMTP và POP3"], "Bài giảng khuyến nghị dùng WPA/WPA2/WPA3; WEP đã yếu và mạng mở không cần mật khẩu không an toàn."),
      item("c3-x23", "trap", "Đạo đức số", "Đạo đức số bao gồm nguyên tắc nào?", ["Tôn trọng, trách nhiệm và công bằng khi tương tác trực tuyến", "Chỉ tuân thủ tốc độ mạng", "Chỉ ẩn danh mọi nội dung", "Chỉ dùng tên giả"], "Đạo đức số hướng tới hành vi có trách nhiệm, tôn trọng người khác và công bằng trên môi trường mạng."),
      item("c3-x24", "trap", "Bản quyền", "Một ảnh được đăng công khai trên Internet có đồng nghĩa được tự do dùng lại không?", ["Không; vẫn cần xem quyền tác giả/giấy phép và xin phép khi cần", "Có, công khai tức mất bản quyền", "Có, chỉ cần đổi tên tệp", "Không, vì ảnh không phải tác phẩm"], "Tác phẩm trên Internet vẫn được bảo hộ; cần tôn trọng quyền tác giả và điều kiện giấy phép."),
    ],
    4: [
      item("c4-x01", "core", "AI phần cứng", "GPU thường có nhiều lõi nhỏ để phục vụ kiểu tính toán nào?", ["Nhiều phép tính song song", "Một luồng điều khiển duy nhất", "Lưu trữ lâu dài", "Phân giải tên miền"], "Kiến trúc nhiều lõi nhỏ của GPU thích hợp cho khối lượng lớn phép tính song song."),
      item("c4-x02", "core", "AI phần cứng", "Vì sao NPU có thể tiết kiệm năng lượng khi chạy AI trên điện thoại?", ["Nó được tối ưu cho phép toán AI chuyên biệt", "Nó thay toàn bộ pin", "Nó lưu mô hình trên màn hình", "Nó dùng giao thức DNS"], "NPU chuyên xử lý các phép toán mạng nơ-ron/suy luận nên thường hiệu quả năng lượng hơn xử lý chung."),
      item("c4-x03", "core", "Machine Learning", "Mạng nơ-ron nhân tạo gồm các phần tử tính toán nối theo cấu trúc nào?", ["Các nút/nơ-ron kết nối thành lớp", "Các thư mục nối thành đường dẫn", "Các gói tin nối bằng SMTP", "Các bit dấu nối thành byte"], "Mạng nơ-ron dùng các nút xử lý và truyền tín hiệu qua nhiều lớp để học mẫu phức tạp."),
      item("c4-x04", "apply", "Machine Learning", "Mô hình nhận ảnh đã gắn nhãn chó/mèo để học cách phân loại ảnh mới thuộc kiểu học nào?", ["Học có giám sát", "Học không giám sát", "Học tăng cường", "Học không cần dữ liệu"], "Nhãn cho biết đáp án mẫu; mô hình học mối quan hệ đầu vào-kết quả trong supervised learning."),
      item("c4-x05", "apply", "Machine Learning", "Một hệ thống nhóm khách hàng theo hành vi dù chưa có nhãn nhóm từ trước thuộc kiểu học nào?", ["Học không giám sát", "Học có giám sát", "Học tăng cường", "Học mã máy"], "Unsupervised learning tìm nhóm/cấu trúc tiềm ẩn trong dữ liệu chưa có nhãn."),
      item("c4-x06", "apply", "Machine Learning", "Robot thử nhiều đường đi, nhận thưởng khi tới đích và phạt khi va chạm đang dùng cách học nào?", ["Học tăng cường", "Học có giám sát", "Học không giám sát", "Học chuyển kiểu"], "Học tăng cường dựa trên tương tác với môi trường và tín hiệu thưởng/phạt."),
      item("c4-x07", "core", "Deep Learning", "Deep Learning cần nhiều lớp nơ-ron chủ yếu để học điều gì?", ["Đặc trưng phức tạp từ dữ liệu", "Tên tệp theo thứ tự", "Địa chỉ IP", "Các quy tắc cú pháp Python"], "Mạng nhiều lớp có thể tự học các biểu diễn/đặc trưng phức tạp từ lượng dữ liệu lớn."),
      item("c4-x08", "apply", "AI tạo sinh", "Prompt trong AI tạo sinh là gì?", ["Yêu cầu/đầu vào người dùng dùng để định hướng nội dung tạo ra", "Mã băm blockchain", "Bản ghi đầu ra của HDFS", "Tên một loại GPU"], "Prompt là chỉ dẫn đầu vào giúp mô hình tạo văn bản, ảnh hoặc nội dung khác theo yêu cầu."),
      item("c4-x09", "core", "LLM", "Kết quả LLM phụ thuộc đáng kể vào yếu tố nào?", ["Câu hỏi, prompt và ngữ cảnh", "Chỉ màu vỏ thiết bị", "Chỉ số cổng USB", "Tên thư mục"], "LLM dự đoán chuỗi từ tiếp theo; ngữ cảnh/prompt ảnh hưởng mạnh đến kết quả."),
      item("c4-x10", "trap", "AI", "Vì sao không nên xem câu trả lời AI là sự thật tuyệt đối?", ["Mô hình có thể tạo thông tin không chính xác hoặc bịa đặt", "AI luôn trích dẫn mọi nguồn", "AI không tạo được văn bản", "AI chỉ chạy khi không có dữ liệu"], "Hallucination xảy ra khi AI tạo câu trả lời trôi chảy nhưng sai/không có thật; cần kiểm chứng."),
      item("c4-x11", "core", "AI ethics", "Nếu dữ liệu quá khứ thiên lệch, hệ thống AI có thể…", ["Tạo ra kết quả thiên lệch tương tự", "Tự động trở nên công bằng", "Xóa toàn bộ dữ liệu", "Chuyển thành NPU"], "Mô hình học từ dữ liệu; thiên kiến trong dữ liệu có thể phản ánh vào kết quả."),
      item("c4-x12", "apply", "AI ethics", "Nguyên tắc nào yêu cầu con người chịu trách nhiệm về hệ thống AI được dùng?", ["Trách nhiệm", "Velocity", "Consensus", "Variety"], "Đạo đức AI gồm công bằng, minh bạch, quyền riêng tư và trách nhiệm; AI hỗ trợ chứ không thay người chịu trách nhiệm."),
      item("c4-x13", "core", "IoT", "Thứ tự luồng dữ liệu IoT đơn giản thường là gì?", ["Cảm biến → kết nối → lưu trữ/xử lý → ứng dụng", "Ứng dụng → bàn phím → màn hình → bus", "Hash → SMTP → GPU → dữ liệu", "Cơ sở dữ liệu → xóa → cảm biến"], "Thiết bị/cảm biến thu thập, mạng kết nối truyền dữ liệu, cloud/edge xử lý và ứng dụng hiển thị/điều khiển."),
      item("c4-x14", "apply", "Edge", "Tại sao xử lý camera giao thông gần thiết bị giảm độ trễ?", ["Không phải gửi toàn bộ video lên hệ thống xa rồi chờ kết quả", "Vì dữ liệu không cần xử lý", "Vì camera bỏ cảm biến", "Vì mạng Internet bị thay bằng ASCII"], "Edge đặt xử lý gần nguồn dữ liệu để giảm thời gian truyền đi-về, phù hợp phản hồi thời gian thực."),
      item("c4-x15", "core", "Big Data", "Dữ liệu được tạo và xử lý rất nhanh theo thời gian thực thuộc V nào?", ["Velocity", "Volume", "Variety", "Veracity"], "Velocity là tốc độ tạo/thu thập/xử lý; Volume là khối lượng."),
      item("c4-x16", "core", "Big Data", "Vòng đời dữ liệu thường bắt đầu bằng bước nào?", ["Thu thập dữ liệu", "Trực quan hóa ngay lập tức", "Xóa dữ liệu trước khi nhận", "Phát hành token"], "Vòng đời dữ liệu gồm thu thập, lưu trữ, xử lý, sử dụng/chia sẻ và lưu trữ lâu dài/xóa."),
      item("c4-x17", "core", "Big Data", "HDFS phân tán dữ liệu bằng cách nào?", ["Chia dữ liệu và lưu trên nhiều máy", "Lưu tất cả trên một ổ USB", "Mã hóa thành ký tự ASCII", "Chuyển dữ liệu thành đồ thị ảnh"], "HDFS chia dữ liệu thành phần nhỏ lưu ở nhiều máy, hỗ trợ dung lượng lớn và chịu lỗi."),
      item("c4-x18", "apply", "Big Data", "MapReduce phù hợp khi cần…", ["Chia xử lý thành phần song song trên nhiều máy rồi tổng hợp", "Chỉ nhập một dòng lệnh", "Mã hóa thư điện tử", "Hiển thị con trỏ chuột"], "MapReduce tách công việc, phân tán xử lý rồi gộp kết quả."),
      item("c4-x19", "core", "Big Data", "Trực quan hóa dữ liệu giúp người dùng điều gì?", ["Hiểu nhanh mẫu và xu hướng qua biểu đồ/hình ảnh", "Mã hóa dữ liệu bằng khóa công khai", "Thay thế mọi phép phân tích", "Chặn lỗi mạng"], "Biểu đồ và hình ảnh hỗ trợ con người hiểu dữ liệu và ra quyết định."),
      item("c4-x20", "trap", "Big Data", "Vì sao dữ liệu nhiều hơn chưa chắc làm AI tốt hơn?", ["Dữ liệu có thể nhiễu/sai và cần làm sạch, bảo vệ quyền riêng tư", "Vì AI không dùng dữ liệu", "Vì Big Data chỉ là hình ảnh", "Vì dữ liệu lớn luôn bị xóa"], "Chất lượng/độ tin cậy rất quan trọng; dữ liệu sai, thiếu hoặc thiên lệch có thể làm kết quả kém."),
      item("c4-x21", "core", "Blockchain", "Blockchain tạo bản ghi phân tán nhằm giảm phụ thuộc vào điều gì?", ["Một cơ quan trung tâm duy nhất", "Mã băm", "Mạng máy tính", "Các nút xác minh"], "Nhiều nút chia sẻ sổ cái; đồng thuận thay vai trò của một quản lý trung tâm duy nhất."),
      item("c4-x22", "core", "Blockchain", "PoW và PoS là ví dụ của thành phần nào?", ["Cơ chế đồng thuận", "Ngôn ngữ lập trình", "Loại GPU", "Chuẩn Wi‑Fi"], "Proof of Work và Proof of Stake là các phương pháp để mạng thống nhất khối/giao dịch hợp lệ."),
      item("c4-x23", "apply", "Blockchain", "Một hồ sơ cấp bằng cần nhiều đơn vị có thể kiểm chứng lịch sử khó sửa. Đặc trưng blockchain nào hữu ích?", ["Minh bạch và bất biến", "Tốc độ không giới hạn", "Dữ liệu chỉ tồn tại một máy", "Không cần xác minh"], "Blockchain có thể giúp các bên cùng xác minh lịch sử; dữ liệu đã ghi khó sửa nhưng không phải không thể trong mọi hoàn cảnh."),
      item("c4-x24", "trap", "Blockchain", "Khác biệt khái quát giữa coin và token trong bài giảng là gì?", ["Coin thường có blockchain riêng; token phát hành trên blockchain có sẵn", "Token luôn không dùng blockchain", "Coin chỉ là hợp đồng giấy", "Hai khái niệm không liên quan tài sản số"], "Coin như Bitcoin dùng blockchain riêng; token thường được phát hành trên một blockchain có sẵn thông qua smart contract."),
    ],
    5: [
      item("c5-x01", "core", "Giải quyết bài toán", "Khi chọn phương pháp giải, thường cần cân nhắc gì?", ["Thời gian, bộ nhớ, độ chính xác và nguồn lực", "Chỉ màu của sơ đồ", "Chỉ tên biến", "Chỉ tốc độ mạng xã hội"], "Có nhiều phương pháp và chúng khác nhau về thời gian, dung lượng lưu trữ, độ chính xác và chi phí."),
      item("c5-x02", "core", "Giải quyết bài toán", "Phương pháp trực tiếp phù hợp nhất khi nào?", ["Bài toán quen thuộc có công thức/thủ tục lời giải đã biết", "Không biết đầu vào", "Không có phép toán nào", "Chỉ khi muốn thử ngẫu nhiên"], "Lời giải trực tiếp áp dụng công thức hoặc thủ tục đã biết cho bài toán thông dụng."),
      item("c5-x03", "apply", "Giải quyết bài toán", "Phương pháp chia đôi nghiệm lặp dần là ví dụ của hướng nào?", ["Tính gần đúng bằng công thức lặp", "Vét cạn mọi chuỗi bit", "Mã hóa dữ liệu", "Giao diện lưu đồ"], "Lặp có thể cải thiện độ chính xác gần đúng theo từng bước, ví dụ phương pháp chia đôi tìm nghiệm."),
      item("c5-x04", "easy", "Thuật toán", "Đầu ra của bài toán ƯSCLN cần thỏa mãn điều kiện nào?", ["Là ước số chung lớn nhất của hai số đầu vào", "Là tích của hai số", "Luôn lớn hơn cả hai số", "Là số ngẫu nhiên"], "Đặc tả đầu ra gồm giá trị và điều kiện đúng của giá trị; ở đây kết quả phải là ƯSCLN."),
      item("c5-x05", "core", "Thuật toán", "Vì sao thứ tự thao tác trong thuật toán quan trọng?", ["Cùng thao tác nhưng thứ tự khác có thể cho trạng thái/kết quả khác", "Thứ tự luôn không ảnh hưởng", "Chỉ ảnh hưởng màu lưu đồ", "Máy tính bỏ qua thứ tự"], "Thứ tự điều khiển quy định cách trạng thái thay đổi; sắp xếp sai thao tác có thể làm sai kết quả."),
      item("c5-x06", "core", "Thuật toán", "Khi đánh giá thuật toán hiệu quả, thường quan tâm đến gì?", ["Số thao tác cơ bản và nhu cầu bộ nhớ", "Số lượng câu chữ trong đề", "Kích thước màn hình", "Tên ngôn ngữ tự nhiên"], "Độ phức tạp xét thời gian thực hiện và tài nguyên/bộ nhớ cần dùng."),
      item("c5-x07", "easy", "Lưu đồ", "Khối bắt đầu/kết thúc trong lưu đồ thường được vẽ dạng nào?", ["Hình bầu dục/khối giới hạn", "Hình thoi", "Hình bình hành", "Đường gấp khúc"], "Khối giới hạn đánh dấu điểm bắt đầu và kết thúc của thuật toán."),
      item("c5-x08", "core", "Lưu đồ", "Khối gọi chương trình con thường được nhận diện bằng đặc điểm nào?", ["Hình chữ nhật có hai cạnh kép", "Hình tròn tô kín", "Hình bình hành có hai mũi tên", "Hình thoi không có điều kiện"], "Lưu đồ dùng hình chữ nhật cạnh kép để biểu diễn lời gọi chương trình con đã biết."),
      item("c5-x09", "apply", "Mã giả", "Trong mã giả, `if điều_kiện then ... else ...` thể hiện cấu trúc nào?", ["Lựa chọn/rẽ nhánh", "Lặp vô điều kiện", "Gán giá trị", "Kết thúc chương trình"], "Cấu trúc if/else chọn một nhánh tùy điều kiện đúng hay sai."),
      item("c5-x10", "core", "Mã giả", "Trong cấu trúc `repeat ... until điều_kiện`, điều kiện dừng được kiểm tra thế nào?", ["Lặp cho tới khi điều kiện đúng", "Lặp khi điều kiện sai mãi mãi", "Không kiểm tra điều kiện", "Chỉ chạy nếu dữ liệu rỗng"], "Repeat-until thường chạy thân trước rồi kiểm tra để dừng khi điều kiện until đúng."),
      item("c5-x11", "core", "Mã giả", "Lệnh `for i từ 1 đến N` phù hợp nhất với kiểu lặp nào?", ["Lặp theo số lần/miền giá trị xác định", "Rẽ nhánh hai hướng", "Gọi lại hàm", "Thoát khỏi chương trình"], "Vòng for tiện khi số bước hoặc miền biến đếm đã xác định."),
      item("c5-x12", "trap", "Mã giả", "Vì sao tài liệu khuyến cáo không nên lạm dụng `goto`?", ["Luồng nhảy tùy ý làm thuật toán khó đọc và kiểm soát", "Nó không thể nhảy", "Nó luôn chạy chậm hơn mọi vòng lặp", "Nó chỉ dùng cho dữ liệu số thực"], "Nhảy không điều kiện làm luồng điều khiển rối, gây khó kiểm tra tính đúng và khả năng kết thúc."),
      item("c5-x13", "core", "Hàm", "Một hàm trả kết quả cho nơi gọi bằng cơ chế nào?", ["Lệnh return", "Lệnh input", "Lệnh goto bắt buộc", "Lệnh comment"], "Hàm có thể nhận tham số, thực hiện thao tác và dùng return để trả giá trị."),
      item("c5-x14", "apply", "Dãy số", "Muốn tính tổng dãy N số bằng vòng lặp, giá trị khởi tạo thường dùng cho biến tổng là gì?", ["0", "1", "N", "Phần tử cuối"], "Phép cộng có phần tử trung hòa là 0; khởi tạo S=0 rồi cộng từng phần tử."),
      item("c5-x15", "apply", "Dãy số", "Khi tìm phần tử nhỏ nhất trong dãy, biến Min ban đầu nên được gán bằng gì?", ["Phần tử đầu tiên", "0 trong mọi trường hợp", "N", "Phần tử lớn nhất mặc định"], "Khởi tạo bằng phần tử đầu đảm bảo đúng cả khi dãy toàn số dương hoặc toàn số âm."),
      item("c5-x16", "apply", "Số học", "Để kiểm tra P có phải số nguyên tố, ta cần kiểm tra tính chất nào?", ["Không có ước dương nào ngoài 1 và chính P", "P phải là số chẵn", "P phải chia hết cho 10", "P phải lớn hơn mọi số trong dãy"], "Số nguyên tố lớn hơn 1 chỉ có hai ước dương là 1 và chính nó."),
      item("c5-x17", "apply", "ƯSCLN", "Trong thuật toán Euclid, khi số dư r khác 0 thì cập nhật nào được thực hiện?", ["a←b và b←r", "a←r và b←a+b", "a←a−b và b giữ nguyên", "Dừng ngay và trả r"], "Euclid lặp thay cặp (a,b) bằng (b, a mod b); dừng khi số dư bằng 0."),
      item("c5-x18", "core", "Tìm kiếm", "Tìm tuyến tính có thể dừng sớm trong trường hợp nào?", ["Khi đã tìm thấy phần tử cần tìm", "Chỉ sau khi sắp xếp lại dãy", "Khi biến đếm bằng 0", "Trước khi xét phần tử đầu tiên"], "Tìm tuần tự có thể kết thúc ngay khi phát hiện phần tử khớp; nếu hết dãy mới kết luận không có."),
      item("c5-x19", "apply", "Sắp xếp", "Trong một lượt sắp xếp kiểu so sánh cặp, điều kiện đổi chỗ để tăng dần là gì?", ["Phần tử trước lớn hơn phần tử sau", "Phần tử trước nhỏ hơn phần tử sau", "Hai phần tử cùng dấu", "Mọi cặp đều đổi"], "Đổi chỗ khi cặp đang xét ngược thứ tự tăng dần."),
      item("c5-x20", "core", "Tìm kiếm", "Quay lui khác vét cạn đơn giản ở điểm nhấn nào?", ["Khi một nhánh thất bại, quay về trạng thái trước để thử lựa chọn khác", "Chỉ liệt kê một khả năng", "Không dùng điều kiện", "Luôn chọn giá trị lớn nhất"], "Backtracking tổ chức quá trình thử và quay về khi nhánh hiện tại không thể dẫn tới lời giải."),
      item("c5-x21", "core", "Thuật toán", "Thuật toán RSA gắn với ứng dụng nào trong bảng ví dụ?", ["Mã hóa và an toàn thông tin", "Vẽ lưu đồ", "Sắp xếp ảnh", "Dựng video"], "RSA là thuật toán mật mã khóa công khai được dùng trong an toàn thông tin."),
      item("c5-x22", "core", "Thuật toán", "Dijkstra thường dùng để giải bài toán nào trên đồ thị?", ["Tìm đường đi ngắn nhất", "Tìm luồng cực đại", "Sắp xếp theo heap", "Mã hóa đối xứng"], "Dijkstra là thuật toán tìm đường đi ngắn nhất từ một đỉnh nguồn trong điều kiện phù hợp."),
      item("c5-x23", "core", "Thuật toán", "Kruskal thường được dùng để xây dựng cấu trúc nào?", ["Cây khung tối thiểu của đồ thị có trọng số", "Cây thư mục Windows", "Bảng mã ASCII", "Giao thức gửi email"], "Kruskal chọn cạnh theo trọng số để tạo cây khung tối thiểu trong đồ thị liên thông có trọng số."),
      item("c5-x24", "trap", "Thuật toán", "Thuật toán có nhiều thao tác hơn nhưng dùng ít bộ nhớ hơn có thể được xem xét thế nào?", ["Đánh đổi thời gian và bộ nhớ tùy yêu cầu bài toán", "Luôn kém hơn trong mọi trường hợp", "Luôn tốt hơn mà không cần cân nhắc", "Không phải thuật toán"], "Lựa chọn phương pháp phụ thuộc mục tiêu; thời gian và bộ nhớ có thể đánh đổi."),
    ],
    6: [
      item("c6-x01", "easy", "Python", "Python được mô tả là ngôn ngữ đa mục đích và hướng đối tượng. Điều này có nghĩa gì?", ["Có thể dùng cho nhiều lĩnh vực và dữ liệu được tổ chức qua đối tượng/lớp", "Chỉ chạy trên một bộ vi xử lý", "Chỉ dùng cho bảng tính", "Không hỗ trợ thư viện"], "Python là ngôn ngữ đa mục đích, hướng đối tượng và có hệ sinh thái thư viện rộng."),
      item("c6-x02", "core", "Ngôn ngữ", "Tính khả chuyển của ngôn ngữ bậc cao nghĩa là gì?", ["Có thể chạy trên nhiều loại máy với ít hoặc không cần sửa đổi", "Luôn chạy nhanh hơn mã máy", "Không cần thông dịch/biên dịch", "Chỉ chạy được trên điện thoại"], "Ngôn ngữ bậc cao ít phụ thuộc kiến trúc và thường có thể chạy nhiều nền tảng sau khi dịch phù hợp."),
      item("c6-x03", "core", "Thực thi", "Trình biên dịch thường làm gì trước khi chương trình bắt đầu chạy?", ["Dịch toàn bộ chương trình sang dạng thấp hơn", "Thực thi từng dòng đồng thời dịch", "Xóa mã nguồn", "Chuyển chương trình thành hình ảnh"], "Compiler đọc/dịch toàn bộ chương trình trước khi chạy; interpreter xử lý từng phần rồi thực thi."),
      item("c6-x04", "core", "Lỗi", "Mã `hi`5` có thể bị xem là lỗi loại nào vì không theo cấu trúc cú pháp hợp lệ?", ["Lỗi cú pháp", "Lỗi mạng", "Lỗi bộ nhớ ngoài", "Lỗi bản quyền"], "Syntax mô tả hình thức hợp lệ của câu lệnh; lỗi cú pháp thường được phát hiện khi phân tích mã."),
      item("c6-x05", "easy", "Tên biến", "Tên biến nào bắt đầu hợp lệ bằng dấu gạch dưới?", ["_speed", "2speed", "speed-name", "for"], "Định danh có thể bắt đầu bằng chữ cái hoặc gạch dưới; không được bắt đầu bằng số hay trùng từ khóa."),
      item("c6-x06", "core", "Tên biến", "Vì sao không được đặt tên biến là `class` hoặc `for`?", ["Đó là từ khóa có ý nghĩa đặc biệt trong Python", "Tên quá ngắn", "Tên không có chữ số", "Python cấm mọi tên tiếng Anh"], "Từ khóa dành riêng dùng cho cấu trúc ngôn ngữ và không thể làm định danh người dùng."),
      item("c6-x07", "core", "Biến", "Tên hằng thường được viết toàn chữ hoa để làm gì?", ["Quy ước giúp phân biệt giá trị dự định không đổi", "Python bắt buộc viết hoa hằng", "Làm biến không chiếm bộ nhớ", "Đổi kiểu dữ liệu sang int"], "Python không có cú pháp hằng bắt buộc; chữ hoa là quy ước để người đọc nhận ra giá trị dự định cố định."),
      item("c6-x08", "apply", "Biến", "Sau lệnh `x = 5`, rồi `x = x + 2`, giá trị gắn với x là bao nhiêu?", ["7", "5", "2", "10"], "Python tính vế phải với giá trị hiện tại của x rồi gán kết quả mới, nên x trở thành 7."),
      item("c6-x09", "core", "Toán tử", "Toán tử `//` trong Python thường biểu diễn phép nào?", ["Chia lấy phần nguyên/floor division", "Chia thực", "Lũy thừa", "Chia lấy dư"], "`//` là phép chia lấy phần nguyên theo quy tắc floor; `%` mới là phép chia lấy dư."),
      item("c6-x10", "core", "Toán tử", "Toán tử `*=` tương đương phép gán nào?", ["x *= y tương đương x = x * y", "x *= y tương đương x = x + y", "x *= y so sánh x với y", "x *= y đổi x thành chuỗi"], "Toán tử gán kết hợp cập nhật biến bằng phép toán tương ứng."),
      item("c6-x11", "apply", "Toán tử", "Giá trị của `17 // 5` là bao nhiêu?", ["3", "3.4", "2", "5"], "Phép chia lấy phần nguyên của 17 cho 5 cho 3; phần dư là 2."),
      item("c6-x12", "apply", "Toán tử", "Giá trị của `17 % 5` là bao nhiêu?", ["2", "3", "3.4", "5"], "17 chia 5 được thương nguyên 3 dư 2, nên 17 % 5 = 2."),
      item("c6-x13", "core", "Số thực", "Ký hiệu `1.23456e+2` tương đương số nào?", ["123.456", "12.3456", "0.0123456", "123456"], "e+2 nhân giá trị trước e với 10²: 1.23456 × 100 = 123.456."),
      item("c6-x14", "core", "Số thực", "Số thực quá nhỏ gần 0 gây underflow có thể được Python biểu diễn gần như thế nào?", ["0", "Vô cực dương", "Một chuỗi", "Một địa chỉ IP"], "Underflow xảy ra khi số thực quá nhỏ để biểu diễn; giá trị có thể bị xấp xỉ thành 0."),
      item("c6-x15", "core", "Kiểu dữ liệu", "Giá trị `-14` trong Python thuộc kiểu số nào?", ["int", "str", "list", "bool"], "Số nguyên không có phần thập phân là int; số có phần thập phân là float."),
      item("c6-x16", "apply", "Kiểu dữ liệu", "Vì sao `'hello' + 1` gây lỗi kiểu?", ["Không thể nối chuỗi trực tiếp với số nguyên bằng toán tử +", "Dấu + chỉ dùng với số thực", "Chuỗi không có giá trị", "1 là từ khóa"], "`+` nối chuỗi với chuỗi hoặc cộng số; cần đổi kiểu rõ ràng khi trộn str và int."),
      item("c6-x17", "apply", "Kiểu dữ liệu", "Muốn nối số 5 vào cuối chuỗi `'score='`, có thể làm gì?", ["Dùng `'score=' + str(5)`", "Dùng `'score=' + 5`", "Dùng `int('score=')`", "Dùng `type('score=') + 5`"], "Chuyển số thành chuỗi bằng str() rồi nối hai chuỗi."),
      item("c6-x18", "core", "Nhập liệu", "Muốn cộng 1 vào số người dùng nhập bằng input(), cần bước gì?", ["Chuyển chuỗi nhập sang int hoặc float trước", "Không cần vì input trả int", "Chuyển thành comment", "Đổi thành tên biến viết hoa"], "input() luôn trả chuỗi; cần int() hoặc float() nếu muốn tính toán số."),
      item("c6-x19", "core", "Nhập xuất", "`print('Hello, World!')` thường dùng để làm gì?", ["In chuỗi ra màn hình", "Nhập chuỗi từ người dùng", "Tạo biến hằng", "Dịch chương trình"], "print() xuất nội dung ra màn hình; input() mới đọc dữ liệu người dùng."),
      item("c6-x20", "core", "Lỗi", "Lỗi ngữ nghĩa/logic thường được nhận ra bằng cách nào?", ["Chạy với dữ liệu thử và so kết quả với ý định", "Chỉ kiểm tra tên tệp", "Đổi màu giao diện", "Tắt interpreter"], "Mã có thể hợp cú pháp nhưng cài đặt sai ý tưởng; cần chạy và kiểm tra đầu ra với dữ liệu thử."),
      item("c6-x21", "easy", "Python", "Một lợi thế của Python được nêu trong tài liệu là gì?", ["Cú pháp tương đối dễ học và thư viện phong phú", "Luôn chạy nhanh hơn mọi ngôn ngữ biên dịch", "Không dùng bộ nhớ", "Chỉ có một thư viện"], "Python dễ tiếp cận và có nhiều thư viện/framework cho dữ liệu, web, học máy và các lĩnh vực khác."),
      item("c6-x22", "trap", "Python", "Một hạn chế thường gặp của Python so với một số ngôn ngữ biên dịch là gì?", ["Tốc độ thực thi có thể chậm hơn", "Không thể xử lý số", "Không có kiểu dữ liệu", "Chỉ chạy trong trình duyệt"], "Do đặc điểm thông dịch và kiểu động, Python có thể chậm hơn/ tốn bộ nhớ hơn một số ngôn ngữ biên dịch."),
      item("c6-x23", "apply", "Thực thi", "Chế độ tương tác Python phù hợp khi nào?", ["Thử biểu thức nhỏ và xem kết quả ngay", "Biên dịch firmware sản xuất hàng loạt", "Lưu mọi tệp vào cloud", "Tạo địa chỉ IP"], "REPL cho phép nhập lệnh từng dòng và xem kết quả tức thì, hữu ích khi thử ý tưởng."),
      item("c6-x24", "trap", "Toán tử", "Vì sao dùng ngoặc trong biểu thức dài là thực hành tốt?", ["Làm rõ thứ tự tính toán cho người đọc và tránh nhầm ưu tiên", "Bắt buộc mọi phép cộng phải có ngoặc", "Tự đổi float thành int", "Xóa toán tử không cần thiết"], "Ngoặc luôn được ưu tiên và giúp diễn đạt ý định rõ ràng; biểu thức dài cũng có thể chia thành nhiều bước."),
    ],
  };

  const extraAdditions = {
    1: [
      item("c1-d01", "easy", "Dữ liệu và thông tin", "Một cảm biến ghi lại giá trị 25 nhưng không ghi tên đại lượng hay đơn vị. Cách diễn giải nào đúng?", ["Đây là dữ liệu thô, cần ngữ cảnh để trở thành thông tin","Đây chắc chắn là nhiệt độ 25°C","Đây đã là tri thức","Đây là dữ liệu có cấu trúc"], "Giá trị 25 đứng riêng chưa cho biết đại lượng hay đơn vị. Ngữ cảnh và cách tổ chức làm dữ liệu trở nên có ý nghĩa."),
      item("c1-d02", "core", "Nguồn dữ liệu", "Ảnh, âm thanh và số đo cảm biến muốn được máy tính xử lý cần được làm gì?", ["Lấy mẫu hoặc số hóa rồi mã hóa thành biểu diễn số","Chỉ đổi tên tệp","Gắn trực tiếp vào CPU dưới dạng chữ","Xóa phần tín hiệu không nhìn thấy"], "Tín hiệu tự nhiên cần được số hóa, lấy mẫu và mã hóa thành dãy giá trị mà máy tính có thể lưu trữ, xử lý."),
      item("c1-d03", "easy", "Dữ liệu cơ bản", "Giá trị −12 phù hợp nhất với kiểu dữ liệu cơ bản nào?", ["Số nguyên","Số thực","Ký tự","Bản ghi"], "−12 không có phần thập phân và là giá trị số nguyên có dấu."),
      item("c1-d04", "easy", "Dữ liệu cơ bản", "Giá trị 2,75 phù hợp nhất với kiểu dữ liệu cơ bản nào?", ["Số thực","Số nguyên","Ký tự","Mảng"], "2,75 có phần thập phân nên được biểu diễn bằng kiểu số thực."),
      item("c1-d05", "easy", "Dữ liệu cơ bản", "Ký hiệu đơn lẻ như A phù hợp nhất với kiểu dữ liệu cơ bản nào?", ["Ký tự","Số nguyên","Số thực","Mảng"], "Kiểu ký tự dùng để biểu diễn một ký hiệu đơn lẻ; cách mã hóa ký tự thành bit được học ở phần ASCII và Unicode."),
      item("c1-d06", "core", "Dữ liệu có cấu trúc", "Một bản ghi sinh viên gồm mã số, họ tên và điểm là ví dụ về gì?", ["Dữ liệu có cấu trúc gồm nhiều trường","Một bit","Một số thực đơn lẻ","Tín hiệu chưa số hóa"], "Bản ghi tổ chức nhiều trường dữ liệu có tên và kiểu phù hợp, nên thuộc dữ liệu có cấu trúc."),
      item("c1-d07", "core", "WKID", "Trong WKID, phân tích nhiều kết quả để rút ra quy luật thuộc tầng nào?", ["Tri thức","Dữ liệu","Thông tin","Trí tuệ"], "Tri thức hình thành khi thông tin được phân tích để nhận ra quy luật. Trí tuệ là dùng hiểu biết đó để lựa chọn hành động.")
    ],
    2: [
      item("c2-d01", "core", "Vào-ra", "Mô-đun vào-ra giúp xử lý sự khác nhau giữa CPU và thiết bị ngoại vi như thế nào?", ["Làm trung gian điều khiển và thích nghi giao tiếp/trao đổi dữ liệu","Thay thế toàn bộ RAM","Biến mọi thiết bị thành CPU","Chỉ lưu tệp lâu dài"], "Mô-đun vào-ra làm trung gian vì thiết bị ngoại vi khác CPU về tốc độ, định dạng dữ liệu và cách điều khiển."),
      item("c2-d02", "easy", "Phần mềm", "Phần mềm nào là phần mềm hệ thống?", ["Hệ điều hành quản lý tài nguyên máy tính","Trình soạn thảo văn bản phục vụ người dùng","Ứng dụng chỉnh sửa ảnh","Trò chơi điện tử"], "Phần mềm hệ thống vận hành máy và quản lý tài nguyên; ứng dụng hỗ trợ trực tiếp một nhu cầu của người dùng."),
      item("c2-d03", "core", "Phần mềm", "Trình điều khiển thiết bị (driver) thường thuộc nhóm nào?", ["Phần mềm hệ thống","Phần mềm trình chiếu","Dữ liệu người dùng","Thiết bị nhập"], "Driver phối hợp hệ điều hành với phần cứng, nên thường được xếp vào phần mềm hệ thống."),
    item("c2-d04", "core", "Hệ điều hành", "Khi nhiều chương trình cùng chạy, hệ điều hành cần làm gì để chia sẻ bộ xử lý?", ["Lập lịch sử dụng CPU và quản lý cấp phát tài nguyên","Biến mọi chương trình thành thiết bị nhập","Xóa các tiến trình đang chờ","Thay thế bộ nhớ ngoài"], "Hệ điều hành quản lý tiến trình và phân chia thời gian CPU, bộ nhớ cùng các tài nguyên khác cho chương trình.")
    ],
    3: [
      item("c3-d01", "core", "Lịch sử Internet", "Việc nhiều mạng độc lập cùng dùng TCP/IP có ý nghĩa gì đối với sự hình thành Internet?", ["Cho phép các mạng khác nhau liên thông theo bộ giao thức chung","Biến mọi máy thành cùng một thiết bị","Loại bỏ hoàn toàn các bộ định tuyến","Chỉ cho phép nối máy tính cùng hãng"], "Bộ giao thức chung cho phép các mạng do tổ chức khác nhau vận hành trao đổi dữ liệu, tạo nên mạng của các mạng."),
      item("c3-d02", "core", "Kiến trúc mạng", "Trong kiến trúc Internet, mạng lõi chủ yếu làm nhiệm vụ gì?", ["Chuyển tiếp lưu lượng giữa các mạng qua các tuyến tốc độ cao","Cung cấp màn hình cho người dùng","Lưu mọi trang web trên một máy chủ duy nhất","Thay thế thiết bị đầu cuối"], "Mạng lõi gồm các tuyến và thiết bị chuyển tiếp dung lượng cao, liên kết nhiều mạng biên."),
      item("c3-d03", "core", "Truy nhập Internet", "GPON truyền dữ liệu đến thuê bao chủ yếu qua môi trường nào?", ["Sợi quang thụ động","Cáp đồng trục truyền hình","Bluetooth","Hồng ngoại"], "GPON là công nghệ mạng quang thụ động, dùng sợi quang và các bộ chia quang thụ động."),
      item("c3-d04", "core", "Đạo đức số", "Khi chia sẻ bài viết của người khác, hành vi nào thể hiện trách nhiệm số?", ["Kiểm tra nguồn và ghi nhận tác giả khi trích dẫn","Xóa tên tác giả để bài viết gọn hơn","Chia sẻ ngay nội dung gây sốc","Đăng thông tin riêng tư để tăng tương tác"], "Đạo đức số gồm tôn trọng người khác, kiểm chứng thông tin và ghi nhận nguồn/tác giả khi sử dụng nội dung."),
      item("c3-d05", "apply", "Đạo đức số", "Một nhóm chat đăng ảnh bạn học để chế giễu khi chưa được đồng ý. Cách xử lý phù hợp nhất là gì?", ["Gỡ nội dung và tôn trọng quyền riêng tư của bạn","Chuyển ảnh sang nhóm khác","Thêm chú thích hài hước","Lưu ảnh để dùng về sau"], "Trách nhiệm số bao gồm không xâm phạm quyền riêng tư, không quấy rối và gỡ nội dung gây hại."),
      item("c3-d06", "core", "Bản quyền", "Khi dùng một ảnh có giấy phép Creative Commons yêu cầu ghi công, cần làm gì?", ["Ghi tên tác giả và nguồn theo điều kiện giấy phép","Cắt bỏ watermark rồi đăng lại","Mặc định xem ảnh là thuộc phạm vi công cộng","Chỉ ghi nguồn nếu chủ sở hữu nhắc"], "Giấy phép Creative Commons có các điều kiện sử dụng cụ thể; nếu yêu cầu ghi công thì cần nêu tác giả và nguồn."),
    item("c3-d07", "core", "DNS", "DNS cache trong máy chủ trung gian có tác dụng chính nào?", ["Lưu tạm kết quả phân giải tên miền để giảm truy vấn lặp","Mã hóa nội dung email","Thay thế giao thức IP","Cấp mật khẩu cho người dùng"], "DNS cache lưu tạm các kết quả phân giải còn hiệu lực, giúp giảm độ trễ và số truy vấn đến các máy chủ DNS phía trên.")
    ],
    6: [
      item("c6-d01", "core", "Ngôn ngữ", "Vì sao chương trình viết bằng ngôn ngữ bậc cao thường dễ chuyển sang máy khác hơn mã máy?", ["Nó ít phụ thuộc trực tiếp vào tập lệnh của một bộ xử lý cụ thể","Nó không cần dịch hay thông dịch","Nó chỉ dùng các bit 0 và 1","Nó luôn chạy nhanh hơn mã máy"], "Ngôn ngữ bậc cao trừu tượng khỏi chi tiết phần cứng; chương trình vẫn cần trình biên dịch hoặc thông dịch phù hợp trên nền tảng đích.")
    ]
  };

  const additionalQuestionSets = {
    1: [
      item("c1-d08", "apply", "Hệ cơ số", "Đổi 19₁₀ sang nhị phân bằng cách chia liên tiếp cho 2. Kết quả là gì?", ["10011₂","10101₂","11001₂","11100₂"], "Các số dư khi chia 19 liên tiếp cho 2 đọc từ dưới lên tạo thành 10011₂."),
      item("c1-d09", "apply", "Hệ cơ số", "Đổi 25₁₀ sang hệ bát phân. Kết quả đúng là gì?", ["31₈","25₈","32₈","41₈"], "25 chia 8 được 3 dư 1; đọc số dư ngược lại được 31₈."),
      item("c1-d10", "apply", "Hệ cơ số", "Biểu diễn 0,375₁₀ dưới dạng nhị phân hữu hạn là gì?", ["0,011₂","0,101₂","0,110₂","0,111₂"], "Nhân phần lẻ lần lượt với 2: 0,375×2=0,75 ghi 0; 0,75×2=1,5 ghi 1; 0,5×2=1 ghi 1. Kết quả là 0,011₂."),
      item("c1-d11", "apply", "Số nguyên", "Tích nhị phân 101₂ × 11₂ bằng bao nhiêu?", ["1111₂","1011₂","1101₂","10001₂"], "101₂ là 5 và 11₂ là 3; tích 15₁₀ tương ứng 1111₂."),
      item("c1-d12", "apply", "Số nguyên", "Thương nhị phân 11000₂ ÷ 100₂ bằng bao nhiêu?", ["110₂","100₂","101₂","111₂"], "11000₂ là 24 và 100₂ là 4; 24÷4=6, tức 110₂."),
      item("c1-d13", "core", "Số nguyên", "Dịch trái một bit một số nguyên nhị phân không dấu (bỏ qua tràn) tương ứng với phép toán nào?", ["Nhân với 2","Chia cho 2 có lấy phần dư","Cộng 1","Đảo tất cả các bit"], "Dịch trái một vị trí làm trọng số mỗi bit tăng gấp đôi, tương ứng nhân giá trị với 2 nếu không xảy ra tràn.")
    ],
    2: [
      item("c2-d05", "apply", "Phần cứng", "Hai CPU có cùng số lõi nhưng tần số xung nhịp khác nhau. Có thể chỉ dựa vào tần số để kết luận CPU nào luôn nhanh hơn không?", ["Không, còn phụ thuộc kiến trúc, bộ nhớ đệm và loại công việc","Có, tần số cao hơn luôn nhanh hơn ở mọi chương trình","Có, vì số lõi không ảnh hưởng hiệu năng","Không, vì tần số không liên quan hiệu năng"], "Tần số là một yếu tố; hiệu năng còn phụ thuộc kiến trúc, số lệnh mỗi chu kỳ, cache, bộ nhớ và đặc điểm chương trình."),
      item("c2-d06", "core", "Mạng", "Giao thức mạng quan trọng nhất ở điểm nào?", ["Quy định cách thiết bị trao đổi để các bên hiểu cùng một định dạng và trình tự","Tăng dung lượng ổ cứng","Thay thế địa chỉ thiết bị","Chỉ mã hóa tên tệp"], "Giao thức thống nhất quy tắc định dạng, truyền và nhận dữ liệu để thiết bị khác nhau giao tiếp được.")
    ],
    3: [
      item("c3-d08", "core", "IoT", "Đặc điểm nào mô tả đúng Internet vạn vật (IoT)?", ["Thiết bị có cảm biến/khả năng kết nối thu thập và trao đổi dữ liệu qua mạng","Chỉ máy tính để bàn truy cập trang web","Một phần mềm chỉ chạy ngoại tuyến","Mạng chỉ nối các máy chủ trung tâm"], "IoT kết nối các vật thể/thiết bị có khả năng thu thập, trao đổi dữ liệu và có thể thực hiện hành động tự động."),
      item("c3-d09", "core", "IoT", "Luồng IoT đơn giản nào hợp lý nhất?", ["Cảm biến/thiết bị → kết nối mạng → xử lý dữ liệu → ứng dụng hoặc hành động","Ứng dụng → máy in → cảm biến → xóa dữ liệu","Bàn phím → màn hình → ổ cứng → Internet","Máy chủ → cảm biến → bộ nhớ ROM → bàn phím"], "Thiết bị thu dữ liệu, truyền qua mạng đến nơi xử lý, rồi kết quả được dùng trong ứng dụng hoặc điều khiển thiết bị."),
      item("c3-d10", "apply", "IoT", "Trong hệ thống tưới cây tự động, bộ phận nào thực hiện hành động sau khi bộ điều khiển nhận số đo độ ẩm thấp?", ["Bộ chấp hành mở van nước","DNS đổi tên miền","Bộ định tuyến cấp IP công cộng","Trình duyệt tải trang web"], "Bộ chấp hành (actuator) biến lệnh điều khiển thành hành động vật lý, chẳng hạn mở van."),
      item("c3-d11", "core", "Truy nhập Internet", "Ethernet trong mạng gia đình thường kết nối thiết bị bằng gì?", ["Cáp mạng có dây","Sóng vô tuyến Bluetooth","Sợi quang thụ động đến từng thiết bị","Tín hiệu GPS"], "Ethernet là công nghệ mạng có dây phổ biến, thường dùng cáp xoắn đôi để nối thiết bị với switch hoặc router."),
      item("c3-d12", "core", "Truy nhập Internet", "Thiết bị điện thoại thường truy nhập mạng di động 4G/5G qua thành phần nào?", ["Trạm gốc di động (BTS/cell site)","Máy chủ DNS gốc trực tiếp","Bộ chia quang thụ động GPON trong nhà","Hub Ethernet"], "Mạng di động kết nối thiết bị đầu cuối với trạm gốc; các trạm gốc liên thông qua mạng truy nhập và mạng lõi."),
      item("c3-d13", "core", "Internet", "Trong bộ giao thức TCP/IP, TCP và IP đảm nhiệm vai trò nào theo cách hiểu khái quát?", ["TCP hỗ trợ truyền tin tin cậy; IP định địa chỉ và chuyển gói tin giữa các mạng","TCP cấp tên miền; IP mã hóa mật khẩu","TCP hiển thị trang web; IP gửi email","Cả hai chỉ dùng để kết nối Wi‑Fi"], "TCP xử lý truyền dữ liệu đầu cuối có kiểm soát; IP đưa gói tin đến mạng/địa chỉ đích."),
      item("c3-d14", "core", "Internet", "Địa chỉ IP cần thiết chủ yếu để làm gì khi gửi gói tin?", ["Xác định địa chỉ mạng/thiết bị đích để định tuyến","Mã hóa nội dung trang web","Đổi tên miền thành tên người dùng","Xác định loại trình duyệt"], "Địa chỉ IP cung cấp thông tin nguồn/đích ở tầng mạng để bộ định tuyến chuyển tiếp gói tin."),
      item("c3-d15", "core", "Bản quyền", "Một tác phẩm được đăng công khai trên mạng có thể được sao chép, sửa và dùng thương mại tự do không?", ["Không mặc nhiên; cần xem quyền tác giả và giấy phép sử dụng","Có, vì mọi nội dung trên Internet đều thuộc phạm vi công cộng","Có, nếu tải được về máy","Chỉ cần xóa tên tác giả"], "Việc công khai không làm mất bản quyền. Cần xin phép hoặc tuân theo giấy phép/ngoại lệ pháp luật áp dụng.")
    ],
    4: [
      item("c4-d01", "core", "AI phần cứng", "CPU thường phù hợp nhất với vai trò nào trong hệ thống?", ["Điều khiển và xử lý đa dạng tác vụ tuần tự/điều phối chung","Chỉ thực hiện phép nhân ma trận cho đồ họa","Chỉ chạy mô hình nơ-ron","Chỉ lưu trữ khối dữ liệu"], "CPU là bộ xử lý đa dụng, điều khiển và thực thi nhiều loại lệnh; GPU/NPU tăng tốc các nhóm tác vụ chuyên biệt hơn."),
      item("c4-d02", "apply", "AI phần cứng", "Tần số CPU cao hơn thường cho biết điều gì nhưng chưa đủ để kết luận điều gì?", ["Nhiều chu kỳ hơn mỗi giây, nhưng chưa đủ để khẳng định mọi chương trình chạy nhanh hơn","CPU có bộ nhớ lớn hơn và luôn xử lý nhanh hơn","CPU có nhiều lõi hơn","CPU có thể thay GPU trong mọi phép tính"], "Tần số biểu thị số chu kỳ mỗi giây; hiệu năng còn phụ thuộc kiến trúc, cache, số lõi và loại tác vụ."),
      item("c4-d03", "core", "AI phần cứng", "NPU được tối ưu đặc biệt để làm gì?", ["Tăng tốc phép toán thường gặp trong mạng nơ-ron với hiệu quả năng lượng","Thay thế mọi chức năng của hệ điều hành","Lưu dữ liệu người dùng lâu dài","Định tuyến gói tin Internet"], "NPU tăng tốc suy luận AI, đặc biệt các phép toán tensor/ma trận của mạng nơ-ron, thường tiết kiệm năng lượng trên thiết bị."),
      item("c4-d04", "apply", "AI phần cứng", "Vì sao hệ thống có thể phối hợp CPU, GPU và NPU thay vì chỉ dùng một loại?", ["Mỗi bộ xử lý có thế mạnh khác nhau cho điều khiển, tính toán song song và tác vụ AI","Ba bộ xử lý thực hiện hoàn toàn cùng một vai trò","NPU chỉ dùng để tăng dung lượng RAM","GPU luôn thay CPU điều khiển toàn bộ máy"], "CPU điều phối tác vụ chung; GPU xử lý song song rộng; NPU tối ưu một số phép tính AI. Phối hợp giúp tăng hiệu năng và hiệu quả."),
      item("c4-d05", "core", "Machine Learning", "Một tập ảnh được gắn nhãn “mèo” hoặc “chó” trước khi huấn luyện thuộc kiểu học nào?", ["Học có giám sát","Học không giám sát","Học tăng cường","Lập trình theo luật cố định"], "Học có giám sát dùng dữ liệu huấn luyện có nhãn để học ánh xạ từ đầu vào đến kết quả mong muốn."),
      item("c4-d06", "core", "Machine Learning", "Thuật toán tự nhóm khách hàng theo hành vi khi chưa có nhãn nhóm từ trước là ví dụ nào?", ["Học không giám sát","Học có giám sát","Học tăng cường","Dịch mã"], "Học không giám sát tìm cấu trúc hoặc nhóm trong dữ liệu chưa có nhãn đầu ra."),
      item("c4-d07", "apply", "IoT và Edge", "Vì sao một thiết bị IoT có thể xử lý sơ bộ dữ liệu ngay gần cảm biến?", ["Giảm độ trễ và lượng dữ liệu phải gửi lên cloud","Tăng số bước truyền qua Internet","Bắt buộc phải lưu mọi dữ liệu thô trên thiết bị","Thay thế hoàn toàn cảm biến"], "Xử lý gần nguồn dữ liệu có thể giảm độ trễ, lưu lượng truyền và phụ thuộc vào kết nối cloud."),
      item("c4-d08", "core", "Big Data", "Sau khi dữ liệu được thu thập, bước nào giúp xử lý bản ghi lỗi hoặc thiếu trước khi phân tích?", ["Làm sạch và tiền xử lý dữ liệu","Tạo hợp đồng thông minh","Đổi dữ liệu thành địa chỉ IP","Bỏ qua kiểm tra chất lượng"], "Trong vòng đời dữ liệu, làm sạch/tiền xử lý giúp giảm lỗi và chuẩn hóa dữ liệu trước phân tích."),
      item("c4-d09", "core", "Big Data", "Một biểu đồ được chọn phù hợp với loại dữ liệu giúp ích gì?", ["Làm xu hướng, so sánh hoặc ngoại lệ dễ nhận ra hơn","Tự động chứng minh dữ liệu không thiên lệch","Thay thế việc kiểm tra nguồn dữ liệu","Đảm bảo mọi kết luận đều đúng"], "Trực quan hóa hỗ trợ con người nhận ra xu hướng, phân bố và điểm bất thường, nhưng không tự đảm bảo kết luận chính xác.")
    ]
  };

  const questionTopicOverrides = {
    "1": {
      "c1-01": "Dữ liệu và thông tin",
      "c1-19": "Dữ liệu và thông tin",
      "c1-02": "WKID",
      "c1-x01": "WKID",
      "c1-06": "Nguồn dữ liệu",
      "c1-x02": "Nguồn dữ liệu",
      "c1-27": "Dữ liệu có cấu trúc",
      "c1-x03": "Dữ liệu có cấu trúc",
      "c1-03": "Hệ cơ số",
      "c1-08": "Số nguyên",
      "c1-09": "Hệ cơ số",
      "c1-10": "Hệ cơ số",
      "c1-11": "Số nguyên",
      "c1-14": "Số nguyên",
      "c1-15": "Số nguyên",
      "c1-16": "Số thực",
      "c1-17": "Số thực",
      "c1-18": "Hệ cơ số",
      "c1-20": "Số nguyên",
      "c1-22": "Hệ cơ số",
      "c1-23": "Ký tự",
      "c1-26": "Ký tự",
      "c1-28": "Số nguyên",
      "c1-29": "Số nguyên",
      "c1-32": "Số nguyên",
      "c1-33": "Số thực",
      "c1-34": "Số thực",
      "c1-x23": "Số thực"
    },
    "2": {
      "c2-01": "Phần cứng",
      "c2-02": "Phần cứng",
      "c2-03": "Bộ nhớ",
      "c2-04": "Phần mềm",
      "c2-05": "Vào-ra",
      "c2-09": "Mạng",
      "c2-13": "Mạng",
      "c2-14": "Hệ điều hành",
      "c2-15": "Vào-ra",
      "c2-19": "Bộ nhớ",
      "c2-20": "Mạng",
      "c2-21": "Giao diện",
      "c2-23": "Bộ nhớ",
      "c2-24": "Tệp",
      "c2-25": "Phần cứng",
      "c2-26": "Vào-ra",
      "c2-29": "Tệp",
      "c2-30": "Tệp",
      "c2-32": "Mạng",
      "c2-33": "Bus",
      "c2-34": "Giao diện"
    },
    "3": {
      "c3-06": "An toàn",
      "c3-12": "Mã hóa",
      "c3-13": "An toàn",
      "c3-15": "Mã hóa",
      "c3-20": "An toàn",
      "c3-22": "An toàn",
      "c3-23": "Đạo đức số",
      "c3-28": "An toàn"
    },
    "4": {
      "c4-07": "AI tạo sinh",
      "c4-08": "LLM",
      "c4-18": "Big Data",
      "c4-27": "Big Data"
    },
    "5": {
      "c5-05": "Biểu diễn thuật toán",
      "c5-13": "ƯSCLN",
      "c5-26": "Biểu diễn thuật toán",
      "c5-27": "Giải quyết bài toán",
      "c5-31": "Dãy số",
      "c5-33": "Mã giả",
      "c5-34": "Ví dụ thuật toán",
      "c5-x04": "ƯSCLN",
      "c5-x05": "Đặc trưng thuật toán",
      "c5-x06": "Đặc trưng thuật toán",
      "c5-x13": "Hàm",
      "c5-x21": "Thuật toán ứng dụng",
      "c5-x22": "Thuật toán ứng dụng",
      "c5-x23": "Thuật toán ứng dụng",
      "c5-x24": "Thuật toán ứng dụng"
    },
    "6": {
      "c6-01": "Python cơ bản",
      "c6-11": "Kiểu dữ liệu",
      "c6-14": "Toán tử",
      "c6-20": "Toán tử",
      "c6-21": "Nhập liệu",
      "c6-22": "Toán tử",
      "c6-25": "Ngôn ngữ",
      "c6-34": "Toán tử"
    }
  };

  const topicMatchers = {
    1: [[/WKID|tri thức|trí tuệ|thông tin|dữ liệu thô/i, "WKID"], [/byte|bit|KB|MB|GB|đơn vị/i, "Đơn vị"], [/ASCII|ký tự|mã ký tự/i, "Ký tự"], [/IEEE|số thực|dấu phẩy|exponent|fraction|float/i, "Số thực"], [/bù hai|bù một|số nguyên|overflow|tràn/i, "Số nguyên"], [/AND|XOR|OR|logic|mặt nạ/i, "Phép logic"], [/hệ cơ số|nhị phân|hexa|hex|bát phân|thập phân/i, "Hệ cơ số"]],
    2: [[/bus|địa chỉ|điều khiển|dữ liệu/i, "Bus"], [/RAM|ROM|cache|bộ nhớ|SSD|ổ đĩa/i, "Bộ nhớ"], [/mạng|router|switch|hub|LAN|WAN|P2P|BTS|cáp|modem|Internet|Wi-?Fi/i, "Mạng"], [/tệp|thư mục|file|wildcard|đường dẫn|Windows/i, "Tệp"], [/ngôn ngữ|hợp ngữ|mã máy/i, "Ngôn ngữ"], [/vào-ra|thiết bị|máy quét/i, "Vào-ra"], [/hệ điều hành|Windows|CLI|GUI|NUI/i, "Hệ điều hành"], [/phần mềm|chương trình/i, "Phần mềm"], [/CPU|ALU|CU|MIPS|chu trình|máy tính/i, "Phần cứng"]],
    3: [[/ARPANET|1983|lịch sử/i, "Lịch sử Internet"], [/cloud|đám mây|IaaS|PaaS|SaaS/i, "Cloud"], [/email|SMTP|POP3|IMAP|BCC|CC/i, "Email"], [/DNS|tên miền/i, "DNS"], [/HTML|HTTP|HTTPS|trình duyệt|web/i, "Web"], [/mã hóa|khóa công khai|khóa riêng|OTP|xác thực|MFA|sinh trắc/i, "Xác thực"], [/bản quyền|đạo đức|tác phẩm/i, "Đạo đức số"], [/Wi-?Fi|GPON|3G|4G|5G|mạng lõi|mạng biên/i, "Truy nhập Internet"], [/Internet|gói tin|TCP\/IP|IP |địa chỉ IP/i, "Internet"], [/an toàn|tấn công|phishing|DoS|lỗ hổng|firewall|tường lửa|deepfake|mã độc/i, "An toàn"]],
    4: [[/GPU|NPU|CPU|phần cứng/i, "AI phần cứng"], [/học|nơ-ron|supervised|unsupervised|reinforcement|Deep Learning/i, "Machine Learning"], [/IoT|edge|biên|cảm biến/i, "IoT và Edge"], [/Big Data|5V|HDFS|MapReduce|Volume|Velocity|Veracity|Value|Data Lake/i, "Big Data"], [/blockchain|hash|PoW|PoS|coin|token|smart contract|đồng thuận/i, "Blockchain"], [/AI|LLM|hallucination|prompt|thiên lệch|đạo đức/i, "AI"]],
    5: [[/lưu đồ|hình thoi|hình bình hành|mã giả|flowchart/i, "Biểu diễn thuật toán"], [/đệ quy|giai thừa|Hà Nội|Fibonacci|stack/i, "Đệ quy"], [/Dijkstra|Kruskal|RSA|thuật toán nổi tiếng/i, "Thuật toán ứng dụng"], [/tìm|sắp xếp|dãy|Max|Min|tổng|ƯSCLN|nguyên tố/i, "Ví dụ thuật toán"], [/tính hữu hạn|xác định|hiệu quả|tổng quát|đặc trưng/i, "Đặc trưng thuật toán"], [/đầu vào|đầu ra|xác định bài toán|phương pháp|bài toán/i, "Giải quyết bài toán"]],
    6: [[/compiler|interpreter|biên dịch|thông dịch|REPL|shell/i, "Thực thi Python"], [/tên biến|định danh|keyword|từ khóa|hằng số/i, "Tên và biến"], [/input|print|chuỗi|str|int\(|float\(|kiểu dữ liệu/i, "Kiểu và nhập xuất"], [/toán tử|phép chia|lũy thừa|ưu tiên|%|\*\*/i, "Toán tử"], [/lỗi|cú pháp|ngữ nghĩa|overflow|underflow/i, "Lỗi và số thực"], [/Python|ngôn ngữ|thư viện|đa mục đích/i, "Python cơ bản"]],
  };

  function classify(chapterId, question) {
    const override = questionTopicOverrides[chapterId]?.[question.id];
    if (override) return override;
    if (question.topic) return question.topic;
    const haystack = `${question.prompt} ${question.explanation}`;
    const match = topicMatchers[chapterId].find(([pattern]) => pattern.test(haystack));
    return match?.[1] || "Kiến thức chương";
  }

  function promptForm(question, chapterId, form) {
    if (form === 0) return question.prompt;
    if (form === 1) return `Chọn phương án đúng nhất cho nội dung ${classify(chapterId, question)}: ${question.prompt}`;
    if (form === 2) return `Dạng kiểm tra chi tiết · ${question.prompt}`;
    return `Tự kiểm tra ${classify(chapterId, question)}: ${question.prompt}`;
  }

  for (const chapter of window.CHAPTERS) {
    const authored = [...chapter.questions, ...(additions[chapter.id] || []), ...(extraAdditions[chapter.id] || []), ...(additionalQuestionSets[chapter.id] || [])];
    const families = authored.map((question) => ({
      ...question,
      topic: classify(chapter.id, question),
      familyId: question.id,
      sourceChapterId: chapter.id,
    }));
    const bank = [];
    for (let form = 0; form < 3 && bank.length < 200; form += 1) {
      for (const question of families) {
        if (bank.length >= 200) break;
        bank.push({
          ...question,
          id: form === 0 ? question.id : `${question.id}-v${form + 1}`,
          prompt: promptForm(question, chapter.id, form),
          variant: form,
        });
      }
    }
    let nextForm = 4;
    let extraIndex = 0;
    while (bank.length < 200) {
      const question = families[extraIndex % families.length];
      const form = nextForm;
      bank.push({
        ...question,
        id: `${question.id}-v${form}`,
        prompt: `Chọn đáp án chính xác nhất · ${question.prompt}`,
        variant: form,
      });
      extraIndex += 1;
    }
    chapter.questions = bank;
    chapter.questionFamilies = families;
    chapter.coverage = [...new Set(families.map((question) => question.topic))];
  }

  const allChapterQuestions = window.CHAPTERS.flatMap((chapter) => chapter.questions);
  window.MIDTERM_QUESTION_BANK = allChapterQuestions.map((question) => ({ ...question }));
})();
