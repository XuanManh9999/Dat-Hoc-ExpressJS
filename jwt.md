<!-- JWT được sử dụng cực kì rộng dãi trong việc bảo mật xác thực và phân quyền trong thế giới lập trình web/app -> lập trình phần mềm -->
# Xác thực là gì? -> Xác minh xem người dùng đó có là người dùng trong hệ thống của mình hay không.
# Phân quyền là gì? -> Xác minh xem nguòi dùng đó có thể làm gì trong hệ thống của mình.
# Xác thực sẽ đứng trước phân quyền
JSON Web Token (JWT) là một tiêu chuẩn mở (RFC 7519) dùng để truyền tải thông tin an toàn giữa các bên (thường là client và server) dưới dạng một chuỗi JSON được ký điện tử. JWT thường dùng để xác thực và ủy quyền, cho phép máy chủ kiểm tra tính hợp lệ của người dùng mà không cần lưu trữ trạng thái phiên (stateless). 
# Cấu trúc của JWT
Một chuỗi JWT gồm 3 phần được phân cách bởi dấu chấm (.):
Header: Chứa thông tin về loại token (JWT) và thuật toán mã hóa (ví dụ: HMAC SHA256 hoặc RSA). -> thuật toán để mã hoá
Payload: Chứa các thông tin (claims) như thông tin người dùng (user ID, username) và quyền hạn. -> data của người dùng
Signature: Chữ ký dùng để xác minh tính toàn vẹn của dữ liệu, được tạo bằng cách mã hóa header và payload với một khóa bí mật.  -> chữ kí bí mật (nhờ nó mà token an toàn) nếu bị lộ Signature thì token có tể bị làm giả nên cái này thường dùng để lưu trong JWT
-- Token JWT
-- header.payload.signature (định dạng)
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJIVVlMUSIsInVzZXJfaWQiOjQ2NCwicm9sZSI6MSwiY2hhdF9pZCI6ODY4Mjk0NTU0LCJlbWFpbCI6IkhVWUxRQENHVlRFTEVDT00uVk4iLCJleHAiOjE3Njk2OTg5OTcsInR5cGVfdG9rZW4iOiJhcyJ9.n-1ESBKmFQCYOJddoWM0xvYrYR-O0AexRdqdVAsgt-M


Cách hoạt động
Đăng nhập: Người dùng gửi thông tin đăng nhập. Server xác thực và tạo một JWT. -> OK 
Truyền tải: Server gửi JWT về lại client. Client lưu trữ token này (thường ở localStorage hoặc cookie).
Xác thực: Trong các yêu cầu tiếp theo, client gửi kèm JWT (thông qua Authorization: Bearer <token>). Server kiểm tra signature của JWT để xác thực mà không cần tra cứu cơ sở dữ liệu. 
Ưu điểm
Nhỏ gọn (Compact): Dễ dàng truyền tải qua URL, POST parameter hoặc HTTP header.
Không trạng thái (Stateless): Server không cần lưu phiên làm việc (session) trong DB, giúp giảm tải và dễ mở rộng.
An toàn: Được ký điện tử, ngăn chặn việc giả mạo dữ liệu. 
Nhược điểm
Không thể thu hồi: Một khi được cấp, JWT có hiệu lực cho đến khi hết hạn. Nếu bị đánh cắp, kẻ gian có thể sử dụng.
Kích thước: Nếu chứa quá nhiều thông tin, token sẽ lớn. 
Ứng dụng phổ biến
Xác thực người dùng (Authentication).
Trao đổi thông tin an toàn giữa các dịch vụ.
Phân quyền người dùng (Authorization). 


-- Đạt học
-- Tạo token khi nào? Tạo token khi mà xác định được người dùng đó là người dùng trong hệ thống của mình (đăng nhập thành công)

// md
Front-end -> md -> Backend -> CSDL

login -> token -> giao diện (lưu lại).

VD: Lấy tất cả lịch sử mua hàng của người dùng.

Luồng: Lấy token đã lưu gửi về cho server để server check rồi có quyết định phản hồi thông tin đó không?


