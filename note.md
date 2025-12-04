- Nodejs là một môi trường cho phép thực thi mã Javascript trên phía server thay vì chỉ phía trình duyệt nó dữ dụng javascript và google V8
- Npm:
  npm là viết tắt của Node Package Manager, là trình quản lý gói (package manager) mặc định cho môi trường JavaScript Node.js. Nó bao gồm một giao diện dòng lệnh (CLI), một kho lưu trữ trực tuyến khổng lồ (npm registry) chứa hàng triệu gói mã nguồn mở và một trang web để duyệt các gói này. npm giúp các nhà phát triển dễ dàng cài đặt, chia sẻ, quản lý các thư viện và module JavaScript, tiết kiệm thời gian phát triển và tránh phải viết lại các đoạn mã cơ bản.
  Các chức năng chính của npm
  Quản lý thư viện: Cho phép người dùng tạo, cài đặt, cập nhật và quản lý các module JavaScript trong dự án một cách đơn giản.
  Quản lý phiên bản: Hỗ trợ quản lý các phiên bản cụ thể của module, hoặc tự động cập nhật lên phiên bản mới nhất.
  Chia sẻ mã nguồn: Cung cấp một nền tảng để các nhà phát triển chia sẻ và sử dụng các thư viện lập trình của nhau, giúp tăng tốc độ phát triển.
  Xử lý sự phụ thuộc (dependencies): Tự động xử lý các phần phụ thuộc cần thiết để chạy một dự án, đảm bảo các gói được cài đặt đúng cách.

- node -v -> kiểm tra verson của phiên bản nodejs hiện tại trong máy

- npm install express. npm -> kho quản lý gói của node, install (cài đặt), express -> tên thư viện

- node_modules -> nơi chứa các thư viện mà ta đã tải về từ trên npm
- package.json -> chứa các cấu hình chạy, các thư viện đã cài
- package-look.json -> chứa các thư viện được dùng trong các thư viện mình đã cài ở package.json
- "type": "module" -> chỉ định mình dùng module (>= ES6)

- mkdir ten_thu_muc -> giúp tạo ra một thư mục
- cd ten_thu_muc -> giúp di chuyển đến thư mục con nằm bên trong
- ls -> thống kê các file nằm bên trong thư mục
- cd .. -> thoát ra thư mục ngoài
- npm init -> giúp tạo ra file package.json để quản lý các thư viện và các cấu hình

# Express application generator

- Được sử dụng để tạo ra một project gồm đầy đủ thư mục cấu trúc để sẵn sàng phát triển backend ngay với thư viện express
- npx express-generator

- cái scripts nằm trong package.json giúp ta định nghĩa cách thực thi và chỉ định file thực thi
- để chạy gì trong đó em dùng npm run, riêng start thì không cần run
  = npm start -> không cần có run, còn lại sẽ có run

# ROUTER EXPRESS

Định tuyến (router) đề cập đến việc xác định cách ứng dụng (server) phản hồi yêu cầu của máy khách tới một điểm cuối cụ thể, đó là URI (hoặc đường dẫn) và phương thức yêu cầu HTTP cụ thể (GET, POST, PUT, PATCH, DELETE...).

Mỗi tuyến đường có thể có một hoặc nhiều hàm xử lý, được thực thi khi tuyến đường được khớp.

Định nghĩa tuyến đường có cấu trúc như sau:

# Cú pháp:

app.METHOD(PATH, HANDLER)

# Trong đó:

+, app -> ứng dụng express
+, METHOD -> là phương thức yêu cầu HTTP, viết thường (get, post, put, patch, delete).
+, PATH -> là một đường dẫn trên máy chủ.
+, HANDLER là hàm được thực thi khi tuyến đường được khớp.

app.get('/hello', () => {

})

# Tìm hiểu HTTP Method

+, HTTP định nghĩa một tập hợp các phương thức yêu cầu để chỉ ra mục đích của yêu cầu và những gì được mong đợi nếu yêu cầu thành công.
=> Các phương thức HTTP:
+, get: phương thức này thể hiện yêu cầu muốn lấy dữ liệu từ server
+, post: phương thức này thể hiện yêu cầu muốn thêm mới dữ liệu vào server
+, delete: phương thức này thể hiện yêu cầu muốn xoá dữ liệu từ server
+, put: phương thức này yêu cầu cập nhật hoàn toàn dữ liệu cụ thể phía server
+, patch: phương thức này yêu cầu cập nhật một phần dữ liệu phía server

# Serving static files in Express

# Để phục vụ các tệp tĩnh như hình ảnh, tệp CSS và tệp JavaScript, hãy sử dụng express.statichàm trung gian tích hợp trong Express.

Cú pháp

# express.static(root, [options])

+, Đối số này root chỉ định thư mục gốc để phục vụ các tài nguyên tĩnh
+, options là các tuỳ chọn thêm để áp dụng
để cấu hình gì cho app ta dùng

Bây giờ, bạn có thể tải các tập tin có trong thư mục public:
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html

+, Để tạo tiền tố đường dẫn ảo (trong đó đường dẫn thực tế không tồn tại trong hệ thống tệp) cho các tệp được phục vụ bởi express.statichàm, hãy chỉ định đường dẫn gắn kết cho thư mục tĩnh như được hiển thị bên dưới:
app.use('/static', express.static('public'))
Bây giờ, bạn có thể tải các tập tin có trong thư mục public từ tiền tố /static đường dẫn.

http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html

Tuy nhiên, đường dẫn bạn cung cấp cho express.statichàm phụ thuộc vào thư mục nơi bạn khởi chạy node tiến trình. Nếu bạn chạy ứng dụng Express từ một thư mục khác, sẽ an toàn hơn nếu sử dụng đường dẫn tuyệt đối của thư mục bạn muốn phục vụ:

Để khắc phục vấn đề đó dùng:
import path from path -> ES6+

const path = require('path') -> ES5

# app.use('/static', express.static(path.join(\_\_dirname, 'public')))

# \_\_dirname -> thư mục root của project

Trường dùng cái này là khi ta không chạy dự án ở file gốc của nó, hay tức là thư mục chạy file đó vd (app.js)
không nằm cùng cấp với nơi ta đừng hiện
