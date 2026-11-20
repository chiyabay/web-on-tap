window.IT1140_LESSONS = {
  "1": [
    {
      "title": "Dữ liệu, thông tin và mô hình WKID",
      "body": "Dữ liệu là các ký hiệu hoặc sự kiện thô. Khi dữ liệu được đặt trong ngữ cảnh, nó trở thành thông tin có ý nghĩa. Kết hợp thông tin với kinh nghiệm tạo nên tri thức; dùng tri thức để lựa chọn hành động phù hợp là trí tuệ.\n\nWKID gồm Data → Information → Knowledge → Wisdom. Máy tính lưu trữ và xử lý dữ liệu; ý nghĩa thường phụ thuộc cách con người diễn giải dữ liệu đó.",
      "example": "Ví dụ: “28” là dữ liệu. “Nhiệt độ phòng là 28°C” là thông tin. Biết nhiệt độ cao làm máy chủ quá nóng là tri thức. Quyết định bật điều hòa để bảo vệ máy chủ là trí tuệ.",
      "checks": [
        {
          "prompt": "Một cảm biến ghi lại giá trị “85” nhưng chưa biết đó là gì. Đây gần nhất với khái niệm nào?",
          "choices": [
            "Dữ liệu",
            "Thông tin",
            "Tri thức",
            "Trí tuệ"
          ],
          "answer": 0,
          "explanation": "Một con số chưa có ngữ cảnh là dữ liệu thô."
        },
        {
          "prompt": "Thứ tự WKID đúng là gì?",
          "choices": [
            "Data → Information → Knowledge → Wisdom",
            "Information → Data → Wisdom → Knowledge",
            "Data → Knowledge → Information → Wisdom",
            "Wisdom → Knowledge → Information → Data"
          ],
          "answer": 0,
          "explanation": "Dữ liệu được xử lý thành thông tin, tích lũy thành tri thức và hỗ trợ quyết định khôn ngoan."
        },
        {
          "prompt": "Dữ liệu “85% pin” được dùng để quyết định cắm sạc trước buổi học. Quyết định đó thể hiện tầng nào?",
          "choices": [
            "Dữ liệu",
            "Thông tin",
            "Tri thức",
            "Trí tuệ"
          ],
          "answer": 3,
          "explanation": "Lựa chọn hành động phù hợp dựa trên thông tin và tri thức thể hiện Wisdom."
        }
      ]
    },
    {
      "title": "Hệ cơ số và phép đổi cơ số",
      "body": "Hệ cơ số b dùng các chữ số từ 0 đến b−1. Giá trị một số được tính bằng tổng chữ số nhân với lũy thừa cơ số theo vị trí. Máy tính dùng nhị phân (cơ số 2); bát phân (8) và thập lục phân (16) giúp viết gọn số nhị phân.\n\nĐổi từ hệ b sang thập phân: khai triển theo lũy thừa. Đổi phần nguyên thập phân sang hệ b: chia liên tiếp cho b và đọc số dư từ dưới lên. Với phần lẻ, nhân liên tiếp với b.",
      "example": "11010₂ = 1×2⁴ + 1×2³ + 0×2² + 1×2¹ + 0 = 26₁₀. Nhóm nhị phân theo 4 bit để đổi sang hex: 1010₂ = A₁₆.",
      "checks": [
        {
          "prompt": "101101₂ bằng bao nhiêu ở hệ thập phân?",
          "choices": [
            "45",
            "43",
            "53",
            "46"
          ],
          "answer": 0,
          "explanation": "32 + 8 + 4 + 1 = 45."
        },
        {
          "prompt": "Một chữ số hệ 16 tương ứng với bao nhiêu bit?",
          "choices": [
            "4",
            "3",
            "8",
            "16"
          ],
          "answer": 0,
          "explanation": "16 = 2⁴ nên mỗi chữ số hex tương ứng một nhóm 4 bit."
        },
        {
          "prompt": "0,5₁₀ được biểu diễn thế nào ở hệ nhị phân?",
          "choices": [
            "0,1₂",
            "0,01₂",
            "0,11₂",
            "1,0₂"
          ],
          "answer": 0,
          "explanation": "0,5 × 2 = 1,0 nên chữ số nhị phân đầu tiên sau dấu phẩy là 1."
        }
      ]
    },
    {
      "title": "Bit, byte và biểu diễn số nguyên",
      "body": "Bit là đơn vị nhỏ nhất, có giá trị 0 hoặc 1; 1 byte thường gồm 8 bit. n bit có 2ⁿ mẫu bit. Số không dấu n bit biểu diễn từ 0 đến 2ⁿ−1. Mã bù hai n bit biểu diễn số có dấu từ −2ⁿ⁻¹ đến 2ⁿ⁻¹−1.\n\nMuốn tạo biểu diễn bù hai của số âm: viết trị tuyệt đối ở dạng nhị phân đủ n bit, đảo tất cả bit rồi cộng 1. Luôn kiểm tra số có nằm trong miền biểu diễn hay không.",
      "example": "Với 8 bit, số không dấu có miền 0…255. Số có dấu bù hai có miền −128…127. Để biểu diễn −5: 00000101 → đảo thành 11111010 → cộng 1 thành 11111011.",
      "checks": [
        {
          "prompt": "Số không dấu 10 bit có giá trị lớn nhất là bao nhiêu?",
          "choices": [
            "1023",
            "1024",
            "511",
            "2047"
          ],
          "answer": 0,
          "explanation": "Giá trị lớn nhất là 2¹⁰−1 = 1023."
        },
        {
          "prompt": "Miền số có dấu bù hai 8 bit là gì?",
          "choices": [
            "−128 đến 127",
            "−127 đến 128",
            "0 đến 255",
            "−255 đến 255"
          ],
          "answer": 0,
          "explanation": "Công thức là −2⁷ đến 2⁷−1."
        },
        {
          "prompt": "Biểu diễn −3 bằng bù hai 8 bit là gì?",
          "choices": [
            "11111101",
            "11111100",
            "10000011",
            "00000011"
          ],
          "answer": 0,
          "explanation": "3 là 00000011; đảo bit được 11111100, cộng 1 thành 11111101."
        }
      ]
    }
  ],
  "2": [
    {
      "title": "Kiến trúc và chu trình xử lý của CPU",
      "body": "CPU thực thi lệnh chương trình. Các thành phần thường được giới thiệu gồm bộ điều khiển (điều phối), ALU (phép toán số học và logic), các thanh ghi (lưu dữ liệu/trạng thái tốc độ cao) và xung nhịp.\n\nMột chu trình lệnh khái quát gồm lấy lệnh, giải mã, thực thi và ghi kết quả. Tốc độ CPU không chỉ do xung nhịp quyết định; kiến trúc, số lõi, bộ nhớ đệm và loại tác vụ cũng ảnh hưởng.",
      "example": "Khi cộng hai số: CPU lấy lệnh cộng từ bộ nhớ, giải mã toán hạng, ALU cộng các giá trị đang ở thanh ghi, rồi ghi kết quả về thanh ghi hoặc bộ nhớ.",
      "checks": [
        {
          "prompt": "Bộ phận nào trực tiếp thực hiện phép cộng số nguyên trong CPU?",
          "choices": [
            "ALU",
            "Bộ điều khiển",
            "SSD",
            "RAM"
          ],
          "answer": 0,
          "explanation": "ALU thực hiện phép toán số học và logic."
        },
        {
          "prompt": "Trình tự chu trình lệnh hợp lý nhất là gì?",
          "choices": [
            "Lấy lệnh → giải mã → thực thi → ghi kết quả",
            "Giải mã → ghi kết quả → lấy lệnh → thực thi",
            "Thực thi → lấy lệnh → giải mã → xóa",
            "Lấy dữ liệu → tắt CPU → ghi lệnh"
          ],
          "answer": 0,
          "explanation": "CPU cần lấy và hiểu lệnh trước khi thực hiện, sau đó ghi kết quả."
        },
        {
          "prompt": "Hai CPU cùng xung nhịp GHz nhưng hiệu năng luôn bằng nhau. Nhận định này đúng hay sai?",
          "choices": [
            "Sai, còn nhiều yếu tố kiến trúc và tác vụ",
            "Đúng, GHz quyết định toàn bộ hiệu năng",
            "Đúng nếu cùng hãng",
            "Sai vì GHz chỉ đo dung lượng RAM"
          ],
          "answer": 0,
          "explanation": "Xung nhịp là một yếu tố; kiến trúc, lõi, cache và workload cũng quan trọng."
        }
      ]
    },
    {
      "title": "Bộ nhớ, lưu trữ và hệ điều hành",
      "body": "Thanh ghi và cache nằm gần CPU, nhanh nhưng dung lượng nhỏ. RAM lưu chương trình/dữ liệu đang chạy và thường mất nội dung khi mất điện. SSD/HDD là lưu trữ lâu dài, dung lượng lớn hơn nhưng chậm hơn RAM.\n\nHệ điều hành quản lý tiến trình, bộ nhớ, thiết bị vào/ra, tệp và quyền truy cập; nó cung cấp giao diện/dịch vụ để ứng dụng sử dụng phần cứng. Đóng ứng dụng không đồng nghĩa xóa tệp đã lưu.",
      "example": "Mở trình duyệt: hệ điều hành nạp mã và dữ liệu cần dùng từ SSD vào RAM, cấp thời gian CPU cho tiến trình, rồi gửi yêu cầu hiển thị đến thiết bị.",
      "checks": [
        {
          "prompt": "Dữ liệu trong RAM thông thường sẽ thế nào khi tắt nguồn?",
          "choices": [
            "Bị mất nếu chưa lưu ra bộ nhớ lâu dài",
            "Tự chuyển toàn bộ vào CPU",
            "Được giữ vĩnh viễn",
            "Biến thành bộ nhớ chỉ đọc"
          ],
          "answer": 0,
          "explanation": "RAM là bộ nhớ khả biến; cần lưu ra SSD/HDD để giữ lâu dài."
        },
        {
          "prompt": "Vai trò phù hợp nhất của hệ điều hành là gì?",
          "choices": [
            "Quản lý tài nguyên và cung cấp dịch vụ cho ứng dụng",
            "Chỉ dùng để soạn văn bản",
            "Thay thế hoàn toàn CPU",
            "Chỉ lưu ảnh"
          ],
          "answer": 0,
          "explanation": "Hệ điều hành điều phối tài nguyên phần cứng và cung cấp môi trường cho ứng dụng."
        },
        {
          "prompt": "Một tệp đã lưu trên SSD nhưng ứng dụng bị đóng. Tệp đó có bị xóa mặc định không?",
          "choices": [
            "Không, đóng ứng dụng không tự xóa tệp",
            "Có, vì RAM bị xóa",
            "Có, vì hệ điều hành xóa mọi tệp",
            "Không, vì tệp chuyển vào cache CPU"
          ],
          "answer": 0,
          "explanation": "Tệp đã lưu trên bộ nhớ không khả biến vẫn còn sau khi đóng ứng dụng."
        }
      ]
    },
    {
      "title": "Mạng máy tính và trao đổi dữ liệu",
      "body": "Mạng máy tính kết nối các thiết bị để chia sẻ dữ liệu và tài nguyên. Mạng LAN thường giới hạn trong khu vực nhỏ; WAN kết nối phạm vi rộng. Dữ liệu được chia thành gói, mang thông tin địa chỉ và được chuyển qua các thiết bị mạng.\n\nGiao thức quy định cách các thiết bị trao đổi. Địa chỉ MAC gắn với giao diện mạng ở tầng liên kết; địa chỉ IP dùng định vị/định tuyến giữa các mạng. Router chuyển tiếp gói giữa các mạng.",
      "example": "Máy tính trong lớp gửi yêu cầu đến máy chủ ngoài trường: gói đi qua Wi‑Fi/router của lớp, mạng của trường và nhiều router trung gian trước khi đến đích.",
      "checks": [
        {
          "prompt": "Thiết bị nào thường chuyển tiếp gói giữa các mạng khác nhau?",
          "choices": [
            "Router",
            "Bàn phím",
            "RAM",
            "Máy in"
          ],
          "answer": 0,
          "explanation": "Router chuyển tiếp lưu lượng giữa các mạng dựa trên địa chỉ IP."
        },
        {
          "prompt": "LAN thường chỉ mạng nào?",
          "choices": [
            "Mạng phạm vi nhỏ như phòng, tòa nhà hoặc cơ sở",
            "Mạng toàn cầu duy nhất",
            "Một thiết bị không kết nối",
            "Mạng chỉ dùng vệ tinh"
          ],
          "answer": 0,
          "explanation": "LAN là mạng cục bộ, thường giới hạn ở khu vực nhỏ."
        },
        {
          "prompt": "Địa chỉ IP và MAC có thể xem là hoàn toàn giống nhau. Đúng hay sai?",
          "choices": [
            "Sai, chúng phục vụ vai trò ở các lớp mạng khác nhau",
            "Đúng, chỉ khác cách viết",
            "Đúng khi dùng Wi‑Fi",
            "Sai vì MAC là địa chỉ email"
          ],
          "answer": 0,
          "explanation": "IP phục vụ định vị/định tuyến; MAC định danh giao diện trong liên kết cục bộ."
        }
      ]
    }
  ],
  "3": [
    {
      "title": "Internet, TCP/IP và địa chỉ",
      "body": "Internet là mạng của các mạng dùng bộ giao thức TCP/IP để trao đổi dữ liệu. IP đảm nhiệm địa chỉ và chuyển gói qua các mạng; TCP cung cấp luồng tin cậy, có kiểm soát thứ tự và truyền lại khi cần. UDP nhẹ hơn, không đảm bảo giao nhận như TCP.\n\nTên miền dễ nhớ hơn địa chỉ IP. DNS phân giải tên miền thành địa chỉ IP. URL chỉ tài nguyên và có thể gồm giao thức, tên miền, đường dẫn và tham số.",
      "example": "Khi mở https://example.edu/course: DNS tìm địa chỉ IP của tên miền; trình duyệt kết nối máy chủ qua TCP, sau đó trao đổi dữ liệu HTTPS.",
      "checks": [
        {
          "prompt": "Dịch vụ nào phân giải tên miền thành địa chỉ IP?",
          "choices": [
            "DNS",
            "DHCP",
            "HTML",
            "GPU"
          ],
          "answer": 0,
          "explanation": "DNS ánh xạ tên miền sang địa chỉ IP."
        },
        {
          "prompt": "Đặc điểm nổi bật nào phù hợp với TCP?",
          "choices": [
            "Có cơ chế đảm bảo truyền tin cậy và đúng thứ tự",
            "Không bao giờ chia dữ liệu thành gói",
            "Chỉ dùng để mã hóa ảnh",
            "Là tên miền"
          ],
          "answer": 0,
          "explanation": "TCP quản lý kết nối, thứ tự và truyền lại để tăng độ tin cậy."
        },
        {
          "prompt": "URL và địa chỉ IP là cùng một khái niệm. Đúng hay sai?",
          "choices": [
            "Sai, URL định vị tài nguyên còn IP định danh/định vị máy trong mạng",
            "Đúng trong mọi trường hợp",
            "Đúng khi dùng HTTPS",
            "Sai vì URL chỉ là mật khẩu"
          ],
          "answer": 0,
          "explanation": "URL có cấu trúc rộng hơn, thường chứa scheme, tên miền, đường dẫn; IP là địa chỉ mạng."
        }
      ]
    },
    {
      "title": "Dịch vụ Internet và Web",
      "body": "Internet hỗ trợ nhiều dịch vụ: Web, thư điện tử, truyền tệp, gọi thoại/video và lưu trữ đám mây. Web là một dịch vụ chạy trên Internet, dùng trình duyệt và máy chủ web trao đổi tài nguyên.\n\nHTTP là giao thức trao đổi yêu cầu/phản hồi trên Web; HTTPS bổ sung bảo vệ bằng TLS để mã hóa và xác thực kết nối. HTML mô tả cấu trúc nội dung, CSS định dạng giao diện, JavaScript tạo tương tác.",
      "example": "Trình duyệt gửi HTTP GET đến máy chủ để lấy trang. Với HTTPS, dữ liệu trên đường truyền được mã hóa, nhưng điều đó không tự chứng minh nội dung trang là đáng tin.",
      "checks": [
        {
          "prompt": "Phát biểu nào mô tả chính xác quan hệ giữa Web và Internet?",
          "choices": [
            "Web là một dịch vụ hoạt động trên Internet",
            "Internet là một ứng dụng của Web",
            "Hai khái niệm luôn đồng nghĩa",
            "Web chỉ hoạt động khi không có mạng"
          ],
          "answer": 0,
          "explanation": "Internet là hạ tầng mạng toàn cầu; Web là một trong các dịch vụ trên đó."
        },
        {
          "prompt": "HTTPS cung cấp lợi ích quan trọng nào cho kết nối?",
          "choices": [
            "Mã hóa và xác thực kết nối qua TLS",
            "Đảm bảo mọi thông tin trang web đều đúng",
            "Ẩn danh tuyệt đối người dùng",
            "Tăng dung lượng RAM"
          ],
          "answer": 0,
          "explanation": "HTTPS bảo vệ kênh truyền; không đảm bảo nội dung website trung thực."
        },
        {
          "prompt": "Trong một trang web, CSS chủ yếu làm nhiệm vụ gì?",
          "choices": [
            "Định dạng cách nội dung hiển thị",
            "Phân giải DNS",
            "Định tuyến gói IP",
            "Lưu dữ liệu trong CPU"
          ],
          "answer": 0,
          "explanation": "CSS điều khiển trình bày như màu sắc, bố cục và kiểu chữ."
        }
      ]
    },
    {
      "title": "An toàn thông tin và đạo đức số",
      "body": "An toàn thông tin hướng đến tính bí mật, toàn vẹn và sẵn sàng. Rủi ro thường gặp gồm lừa đảo giả mạo, mã độc, mật khẩu yếu, rò rỉ dữ liệu và khai thác lỗ hổng.\n\nDùng mật khẩu dài, riêng cho từng dịch vụ; bật xác thực đa yếu tố; cập nhật phần mềm; sao lưu; kiểm tra kỹ tên miền và người gửi. Tôn trọng quyền riêng tư, bản quyền và xin phép trước khi chia sẻ dữ liệu cá nhân.",
      "example": "Email thúc giục “đăng nhập trong 10 phút để tránh khóa tài khoản” dẫn đến tên miền lạ. Không bấm liên kết; tự gõ địa chỉ trang chính thức hoặc liên hệ tổ chức qua kênh đã biết.",
      "checks": [
        {
          "prompt": "Email giả mạo trang đăng nhập để lấy mật khẩu thường là hình thức nào?",
          "choices": [
            "Phishing",
            "Nén dữ liệu",
            "Sao lưu",
            "Định tuyến"
          ],
          "answer": 0,
          "explanation": "Phishing dùng thông điệp giả để dụ người dùng tiết lộ thông tin."
        },
        {
          "prompt": "Bật xác thực đa yếu tố giúp gì?",
          "choices": [
            "Thêm bước xác minh ngoài mật khẩu",
            "Làm mật khẩu không còn cần thiết trong mọi tình huống",
            "Bảo đảm không thể bị lừa",
            "Tự động xóa mã độc"
          ],
          "answer": 0,
          "explanation": "MFA thêm lớp xác minh, giảm nguy cơ khi mật khẩu bị lộ."
        },
        {
          "prompt": "Chia sẻ ảnh bạn bè có thông tin cá nhân mà chưa hỏi ý kiến luôn vô hại. Đúng hay sai?",
          "choices": [
            "Sai, cần tôn trọng quyền riêng tư và xin phép phù hợp",
            "Đúng nếu ảnh chụp bằng điện thoại",
            "Đúng khi tài khoản ở chế độ riêng tư",
            "Sai chỉ khi có bản quyền"
          ],
          "answer": 0,
          "explanation": "Thông tin và hình ảnh cá nhân cần được chia sẻ có trách nhiệm, có sự đồng ý phù hợp."
        }
      ]
    }
  ],
  "4": [
    {
      "title": "AI, học máy và GPU/NPU",
      "body": "Trí tuệ nhân tạo (AI) là lĩnh vực tạo hệ thống thực hiện nhiệm vụ thường cần năng lực trí tuệ của con người. Học máy là nhóm phương pháp cho phép mô hình học mẫu từ dữ liệu. Mô hình tạo sinh có thể tạo văn bản, ảnh hoặc mã, nhưng vẫn có thể bịa hoặc sai.\n\nGPU có nhiều đơn vị xử lý song song, hữu ích cho đồ họa và phép toán tensor. NPU được tối ưu cho các tác vụ mạng nơ-ron/AI. Không bộ xử lý nào tự đảm bảo kết quả đúng; cần dữ liệu và kiểm chứng.",
      "example": "GPU có thể tăng tốc huấn luyện mô hình bằng xử lý nhiều phép nhân ma trận song song. Khi AI trả lời một dữ kiện quan trọng, hãy kiểm tra nguồn độc lập thay vì coi câu trả lời là bằng chứng.",
      "checks": [
        {
          "prompt": "Học máy thường học mẫu chủ yếu từ đâu?",
          "choices": [
            "Dữ liệu",
            "Tên tệp",
            "Dây mạng",
            "Độ phân giải màn hình"
          ],
          "answer": 0,
          "explanation": "Mô hình học máy điều chỉnh dựa trên dữ liệu và mục tiêu huấn luyện."
        },
        {
          "prompt": "Lợi thế phổ biến của GPU trong tác vụ AI là gì?",
          "choices": [
            "Xử lý nhiều phép toán song song",
            "Thay thế hoàn toàn bộ nhớ lưu trữ",
            "Bảo đảm mô hình không sai",
            "Chỉ chạy trình duyệt"
          ],
          "answer": 0,
          "explanation": "Nhiều lõi xử lý giúp GPU tăng tốc phép toán song song như ma trận."
        },
        {
          "prompt": "Mô hình AI tạo sinh luôn đưa ra câu trả lời chính xác vì được huấn luyện trên nhiều dữ liệu. Đúng hay sai?",
          "choices": [
            "Sai, vẫn có thể tạo thông tin sai và cần kiểm chứng",
            "Đúng, dữ liệu lớn loại bỏ mọi lỗi",
            "Đúng nếu câu trả lời dài",
            "Sai vì AI không dùng dữ liệu"
          ],
          "answer": 0,
          "explanation": "Mô hình tạo sinh có thể tạo nội dung nghe hợp lý nhưng không đúng."
        }
      ]
    },
    {
      "title": "IoT và dữ liệu lớn",
      "body": "Internet vạn vật (IoT) gồm thiết bị có cảm biến/khả năng xử lý, kết nối mạng và trao đổi dữ liệu. Hệ thống IoT cần quan tâm nguồn điện, độ trễ, bảo mật thiết bị, cập nhật và quyền riêng tư.\n\nBig Data mô tả dữ liệu có quy mô, tốc độ hoặc độ đa dạng lớn khiến phương pháp xử lý truyền thống khó đáp ứng. Phân tích dữ liệu cần quy trình thu thập, làm sạch, lưu trữ, xử lý và diễn giải; dữ liệu nhiều không đồng nghĩa kết luận chính xác.",
      "example": "Cảm biến độ ẩm gửi số đo lên nền tảng IoT. Hệ thống phân tích chuỗi số đo để tưới cây khi đất khô; nếu cảm biến lệch hoặc mất kết nối, cần phát hiện và xử lý thay vì tự tin vào số đo.",
      "checks": [
        {
          "prompt": "Yếu tố nào thường là thành phần của hệ thống IoT?",
          "choices": [
            "Cảm biến và kết nối mạng",
            "Chỉ một tệp văn bản không xử lý",
            "CPU không cần đầu vào",
            "Màn hình rời không có mạng"
          ],
          "answer": 0,
          "explanation": "IoT kết nối thiết bị có cảm nhận/xử lý với mạng và dịch vụ."
        },
        {
          "prompt": "“Big Data” chỉ có nghĩa là tệp dữ liệu chiếm nhiều GB. Đúng hay sai?",
          "choices": [
            "Sai, còn xét tốc độ, sự đa dạng và khả năng xử lý",
            "Đúng, chỉ dung lượng quyết định",
            "Đúng nếu dữ liệu nằm trên đám mây",
            "Sai vì dữ liệu lớn không có dung lượng"
          ],
          "answer": 0,
          "explanation": "Khái niệm thường xem xét volume, velocity, variety và các đặc tính liên quan."
        },
        {
          "prompt": "Trước khi phân tích, bước nào giúp tránh kết luận từ dữ liệu lỗi?",
          "choices": [
            "Kiểm tra và làm sạch dữ liệu",
            "Tăng độ sáng màn hình",
            "Đổi tên mọi cột thành số",
            "Bỏ qua dữ liệu thiếu mà không xem xét"
          ],
          "answer": 0,
          "explanation": "Kiểm tra chất lượng và làm sạch giúp hạn chế lỗi, sai lệch trong phân tích."
        }
      ]
    },
    {
      "title": "Blockchain, điện toán đám mây và đánh giá công nghệ",
      "body": "Blockchain là sổ cái phân tán gồm các khối liên kết bằng mã băm. Cơ chế đồng thuận giúp các nút thống nhất trạng thái; dữ liệu đã ghi khó sửa kín đáo, nhưng blockchain không tự bảo đảm dữ liệu đầu vào là đúng.\n\nĐiện toán đám mây cung cấp tài nguyên tính toán/lưu trữ qua mạng theo nhu cầu. Khi đánh giá công nghệ, cân nhắc lợi ích, chi phí, độ tin cậy, bảo mật, quyền riêng tư, năng lượng và tác động xã hội; chọn giải pháp theo bài toán thực tế.",
      "example": "Một hệ thống truy xuất nguồn gốc có thể ghi các lần chuyển giao lên blockchain. Nếu người nhập khai sai nơi sản xuất ngay từ đầu, sổ cái vẫn có thể lưu vết sai đó một cách bền vững.",
      "checks": [
        {
          "prompt": "Blockchain thường liên kết các khối bằng cấu trúc nào?",
          "choices": [
            "Mã băm",
            "Tên người dùng",
            "Màu sắc giao diện",
            "Tần số CPU"
          ],
          "answer": 0,
          "explanation": "Mỗi khối tham chiếu mã băm của khối trước, giúp phát hiện thay đổi."
        },
        {
          "prompt": "Blockchain bảo đảm dữ liệu ban đầu được nhập là sự thật. Đúng hay sai?",
          "choices": [
            "Sai, nó không tự xác minh tính đúng của dữ liệu đầu vào",
            "Đúng vì dữ liệu phân tán",
            "Đúng khi có nhiều nút",
            "Sai vì blockchain không lưu dữ liệu"
          ],
          "answer": 0,
          "explanation": "Tính khó sửa sau khi ghi không chứng minh dữ liệu đầu vào đúng."
        },
        {
          "prompt": "Điện toán đám mây thường cung cấp tài nguyên gì qua mạng?",
          "choices": [
            "Tính toán và lưu trữ theo nhu cầu",
            "Chỉ kết nối Bluetooth",
            "Chỉ bàn phím và màn hình",
            "Mã nguồn của mọi ứng dụng"
          ],
          "answer": 0,
          "explanation": "Cloud cung cấp các dịch vụ như máy chủ, lưu trữ, cơ sở dữ liệu qua mạng."
        }
      ]
    }
  ],
  "5": [
    {
      "title": "Mô tả bài toán và thiết kế thuật toán",
      "body": "Bài toán cần xác định rõ dữ liệu vào (input), kết quả cần tạo (output), điều kiện/ràng buộc và các trường hợp biên. Thuật toán là dãy bước hữu hạn, rõ ràng, có thể thực hiện để giải bài toán.\n\nMột lời giải tốt cần đúng, kết thúc, và phù hợp giới hạn thời gian/bộ nhớ. Trước khi viết mã, hãy thử bằng ví dụ nhỏ, trường hợp biên, dữ liệu rỗng hoặc giá trị cực trị.",
      "example": "Bài toán tìm số lớn nhất: input là dãy n số với n≥1; output là một giá trị lớn nhất. Khởi tạo max bằng phần tử đầu, duyệt các phần tử còn lại và cập nhật khi gặp số lớn hơn.",
      "checks": [
        {
          "prompt": "Thuật toán tìm cực đại của dãy cần ít nhất điều kiện nào?",
          "choices": [
            "Dãy không rỗng hoặc xử lý riêng trường hợp rỗng",
            "Tất cả số phải dương",
            "Dãy phải được sắp xếp giảm dần",
            "Phải có đúng 10 phần tử"
          ],
          "answer": 0,
          "explanation": "Nếu dãy rỗng thì không có phần tử đầu để khởi tạo max; cần nêu điều kiện hoặc xử lý riêng."
        },
        {
          "prompt": "Đặc trưng nào yêu cầu thuật toán cuối cùng phải dừng?",
          "choices": [
            "Tính hữu hạn",
            "Tính ngẫu nhiên",
            "Tính đồ họa",
            "Tính phân tán"
          ],
          "answer": 0,
          "explanation": "Thuật toán phải kết thúc sau hữu hạn bước."
        },
        {
          "prompt": "Nếu đề bài không nói rõ có thể có phần tử trùng, nên làm gì?",
          "choices": [
            "Làm rõ yêu cầu hoặc xác định kết quả vẫn đúng khi có trùng",
            "Tự bỏ mọi phần tử trùng",
            "Giả sử mảng luôn rỗng",
            "Chỉ viết mã mà không kiểm tra"
          ],
          "answer": 0,
          "explanation": "Ràng buộc và trường hợp biên cần được xác định để thuật toán đáp ứng đúng bài toán."
        }
      ]
    },
    {
      "title": "Lưu đồ và mã giả",
      "body": "Lưu đồ biểu diễn thuật toán bằng ký hiệu chuẩn: hình bầu dục cho bắt đầu/kết thúc, hình bình hành cho nhập/xuất, hình chữ nhật cho xử lý, hình thoi cho điều kiện/rẽ nhánh. Mũi tên chỉ luồng thực hiện.\n\nMã giả mô tả bước giải gần với ngôn ngữ tự nhiên có cấu trúc, không phụ thuộc cú pháp một ngôn ngữ lập trình. Cả hai giúp kiểm tra logic trước khi cài đặt.",
      "example": "Mã giả tính tổng n số: NHẬP n; S ← 0; lặp i từ 1 đến n: NHẬP x; S ← S+x; XUẤT S. Khởi tạo S=0 trước vòng lặp để phép cộng có điểm bắt đầu đúng.",
      "checks": [
        {
          "prompt": "Trong lưu đồ, ký hiệu hình thoi thường thể hiện điều gì?",
          "choices": [
            "Điều kiện hoặc quyết định",
            "Nhập/xuất",
            "Bắt đầu/kết thúc",
            "Phép gán"
          ],
          "answer": 0,
          "explanation": "Hình thoi thường là nút rẽ nhánh theo điều kiện."
        },
        {
          "prompt": "Mã giả có bắt buộc dùng đúng cú pháp Python không?",
          "choices": [
            "Không, mã giả độc lập ngôn ngữ",
            "Có, luôn phải chạy được như Python",
            "Có, nếu có vòng lặp",
            "Không, vì mã giả chỉ là sơ đồ"
          ],
          "answer": 0,
          "explanation": "Mã giả diễn đạt logic, không nhất thiết tuân theo cú pháp ngôn ngữ cụ thể."
        },
        {
          "prompt": "Trong thuật toán cộng n số, nếu S chưa được gán 0 trước khi cộng thì rủi ro gì?",
          "choices": [
            "Giá trị khởi đầu không xác định làm tổng sai",
            "Chương trình luôn chạy nhanh hơn",
            "Dãy tự sắp xếp",
            "Không thể nhập số"
          ],
          "answer": 0,
          "explanation": "Biến tích lũy phải được khởi tạo trước khi sử dụng."
        }
      ]
    },
    {
      "title": "Vòng lặp, truy vết và đệ quy",
      "body": "Vòng lặp lặp lại một khối lệnh khi số lần hoặc điều kiện được xác định. Truy vết từng bước với bảng giá trị biến giúp tìm lỗi và hiểu thuật toán.\n\nĐệ quy là cách hàm gọi lại chính nó để giải bài toán bằng các bài toán con nhỏ hơn. Cần có trường hợp cơ sở để dừng và bước đệ quy tiến gần trường hợp đó; thiếu một trong hai có thể gây gọi vô hạn.",
      "example": "Giai thừa: fact(0)=1 là cơ sở; fact(n)=n×fact(n−1) với n>0. Với fact(3): 3×fact(2)=3×2×fact(1)=3×2×1=6.",
      "checks": [
        {
          "prompt": "Thành phần nào ngăn hàm đệ quy gọi vô hạn?",
          "choices": [
            "Trường hợp cơ sở",
            "Tên hàm dài",
            "Biến toàn cục",
            "Lệnh in"
          ],
          "answer": 0,
          "explanation": "Trường hợp cơ sở trả về mà không gọi tiếp."
        },
        {
          "prompt": "Nếu fact(n)=n×fact(n−1) nhưng không định nghĩa fact(0), vấn đề chính là gì?",
          "choices": [
            "Không có điểm dừng rõ ràng",
            "Thuật toán tự trở thành vòng lặp for",
            "Kết quả luôn bằng 0",
            "n sẽ tự giảm về số âm rồi dừng"
          ],
          "answer": 0,
          "explanation": "Lời gọi không có cơ sở có thể tiếp tục đến lỗi tràn ngăn xếp."
        },
        {
          "prompt": "Truy vết thuật toán chủ yếu giúp gì?",
          "choices": [
            "Theo dõi giá trị biến để kiểm tra luồng logic",
            "Tăng dung lượng ổ cứng",
            "Mã hóa chương trình",
            "Sắp xếp mọi dữ liệu tự động"
          ],
          "answer": 0,
          "explanation": "Truy vết làm lộ bước cập nhật sai hoặc điều kiện dừng sai."
        }
      ]
    }
  ],
  "6": [
    {
      "title": "Python, biến và kiểu dữ liệu cơ bản",
      "body": "Python là ngôn ngữ lập trình bậc cao, cú pháp gọn và được dùng trong tự động hóa, phân tích dữ liệu, AI và giáo dục. Chương trình được thực thi bởi trình thông dịch Python.\n\nBiến là tên tham chiếu đến giá trị. Các kiểu cơ bản gồm int (số nguyên), float (số thực), str (chuỗi), bool (đúng/sai). Python phân biệt chữ hoa/chữ thường; tên biến không được bắt đầu bằng chữ số và nên có ý nghĩa.",
      "example": "age = 19 tạo biến age chứa số nguyên. name = \"An\" chứa chuỗi. is_student = True chứa giá trị luận lý. Gán age = 20 làm tên age tham chiếu đến giá trị mới.",
      "checks": [
        {
          "prompt": "Kiểu dữ liệu nào phù hợp nhất với giá trị True?",
          "choices": [
            "bool",
            "str",
            "float",
            "int"
          ],
          "answer": 0,
          "explanation": "True và False là hai giá trị kiểu bool."
        },
        {
          "prompt": "Trong Python, age và Age có luôn là cùng một tên biến không?",
          "choices": [
            "Không, Python phân biệt chữ hoa/chữ thường",
            "Có, tên biến không phân biệt hoa thường",
            "Chỉ khác nhau trong Windows",
            "Có nếu cùng kiểu dữ liệu"
          ],
          "answer": 0,
          "explanation": "Python phân biệt định danh theo chữ hoa/chữ thường."
        },
        {
          "prompt": "Tên biến nào hợp lệ theo quy tắc cơ bản của Python?",
          "choices": [
            "so_luong2",
            "2soLuong",
            "so-luong",
            "class"
          ],
          "answer": 0,
          "explanation": "Tên có thể gồm chữ, số, dấu gạch dưới nhưng không bắt đầu bằng số; không dùng từ khóa."
        }
      ]
    },
    {
      "title": "Biểu thức, toán tử và ép kiểu",
      "body": "Biểu thức kết hợp giá trị, biến và toán tử để tạo kết quả. Toán tử số học gồm +, -, *, /, //, %, **. Trong Python, / cho kết quả chia thực; // chia lấy phần nguyên theo hướng xuống; % lấy phần dư; ** lũy thừa.\n\nThứ tự ưu tiên toán tử ảnh hưởng kết quả; dùng ngoặc để làm rõ. Chuyển kiểu tường minh bằng int(), float(), str(); việc ép kiểu có thể làm mất phần thập phân hoặc phát sinh lỗi nếu chuỗi không hợp lệ.",
      "example": "17 // 5 bằng 3; 17 % 5 bằng 2; 2 ** 3 bằng 8. int(3.9) cho 3 nên đã bỏ phần thập phân, không làm tròn thành 4.",
      "checks": [
        {
          "prompt": "Kết quả của 17 // 5 trong Python là gì?",
          "choices": [
            "3",
            "3.4",
            "2",
            "4"
          ],
          "answer": 0,
          "explanation": "Toán tử // chia lấy phần nguyên theo quy tắc làm tròn xuống."
        },
        {
          "prompt": "Biểu thức 2 ** 3 có kết quả nào?",
          "choices": [
            "8",
            "6",
            "9",
            "5"
          ],
          "answer": 0,
          "explanation": "** là toán tử lũy thừa: 2³ = 8."
        },
        {
          "prompt": "int(3.9) trong Python thông thường trả về gì?",
          "choices": [
            "3",
            "4",
            "3.9",
            "Lỗi mọi trường hợp"
          ],
          "answer": 0,
          "explanation": "Chuyển float dương sang int bỏ phần thập phân, không làm tròn gần nhất."
        }
      ]
    },
    {
      "title": "Nhập, xuất và xử lý dữ liệu",
      "body": "print() hiển thị dữ liệu ra màn hình. input() đọc một dòng từ người dùng và trả về chuỗi, kể cả khi người dùng gõ các chữ số. Muốn tính toán số học cần chuyển chuỗi bằng int() hoặc float().\n\nKhi kết hợp nhập liệu, chuyển kiểu và tính toán, nên kiểm tra dữ liệu phù hợp. f-string giúp chèn giá trị vào chuỗi hiển thị. Thông báo lỗi nên chỉ ra dữ liệu mong đợi.",
      "example": "a = int(input(\"Nhập a: \")) đọc chuỗi rồi chuyển sang số nguyên. print(f\"Tổng = {a + b}\") hiển thị kết quả. Nếu nhập “hai” thì int() không chuyển được và phát sinh ValueError.",
      "checks": [
        {
          "prompt": "Giá trị trả về trực tiếp từ input() có kiểu gì?",
          "choices": [
            "str",
            "int",
            "float",
            "bool"
          ],
          "answer": 0,
          "explanation": "input() trả về chuỗi; cần chuyển kiểu nếu muốn tính toán số."
        },
        {
          "prompt": "Muốn đọc một số thực như 2.75 nên dùng cách nào?",
          "choices": [
            "float(input(...))",
            "str(input(...))",
            "bool(input(...))",
            "print(input(...))"
          ],
          "answer": 0,
          "explanation": "float() chuyển chuỗi số thập phân thành giá trị float."
        },
        {
          "prompt": "Người dùng nhập “12” cho input(); biểu thức input() + input() có thể tạo ra “1212”. Vì sao?",
          "choices": [
            "Vì hai giá trị là chuỗi nên + nối chuỗi",
            "Vì Python tự nhân đôi số",
            "Vì input() trả về bool",
            "Vì print() đổi thứ tự"
          ],
          "answer": 0,
          "explanation": "input() trả về str; toán tử + trên chuỗi thực hiện nối chuỗi."
        }
      ]
    }
  ]
};
