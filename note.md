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

+, Để tạo tiền tố đường dẫn ảo (trong đó đường dẫn thực tế không tồn tại trong hệ thống tệp) cho các tệp được phục vụ bởi express. hàm static, hãy chỉ định đường dẫn gắn kết cho thư mục tĩnh như được hiển thị bên dưới:
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

# Học chuyên sâu + chi tiết

# Chủ đề Routing

# routing nó chính là các điềm cuối nằm sau server /

# GET, PUT, PATCH, DELETE, POST -> các method HTTP của Http và expressjs

+, get -> yêu cầu lấy dữ liệu
+, post -> yêu cầu thêm
+, put -> yêu cầu cập nhật toàn bộ data
+, patch -> yêu cầu cập nhật một phần
+, delete -> yêu cầu xoá dữ liệu
+, all -> dữ để lắng nghe tất cả các phương thức nó bao gồm cả (get, put, post, delete, patch...)

# Nếu muốn cấu hình vào ứng dụng expressjs ta dùng app.use()

+, Ở trong mỗi phương thức định tuyến hay là routing thì nó đều chứa một hàm xử lý

cú pháp. app.method(path, func)
Trong đó:
+, app -> thư viện express
+, method -> các phương thức http (GET, PUT, POST, DELETE, PATCH...)
+, path -> đường dẫn (hay còn gọi là điểm cuối)
+, func -> hàm xử lý được gọi khi khớp đường dẫn

/ -> nó đại diện cho root server. 3000 -> chạy local thì / -> localhost:3000
app.get("/abc", () => {

})

+, ở trong mỗi hàm xử lý nó để nhận vào 3 tham số: req, res, next
=> req -> nó chính là yêu cầu mà người dùng gửi lên
=> res -> nó chính là phản hồi từ phía server nếu có
=> next ...
+, Ở trong path
params: localhost:3000/product/1 -> 1 là prams dùng khi muốn chỉ rõ thông tin mà nó thuộc về
VD: ở DB ta có lưu 1 bài viết có ID = 1. Khi người ta cần truy cập vào bài viết đó ở trên hệ thống
localhost:3000/post/1 -> 1 nó là id bài viết nó thể hiện nội dung của nó thuộc về đang là 1
query: localhost:3000/product?min=30&max=50&size=s -> query thường được dùng khi ta cần lọc dữ liệu và nhận nhiều điều kiện filter

- quy tắc của query là: url?key=value&key=value

params: localhost:3000/post/1 -> params thường dùng để chi rõ tài nguyên đó có tt là gì thường sẽ nhận vào ID

- quy tắc của params là: url/:ten-params

Để lấy được query mà người dùng quyền xuống ta dùng req.query

# Trên URL có 2 cái là query(?) và params(:name)

# Ngoài ra còn có body của request

# để dùng được ta thêm

<!-- app.use(express.json()); -->

# Tìm hiểu về RESTful API

RESTful API là một tiêu chuẩn dùng trong việc thiết kế API cho các ứng dụng web (thiết kế Web services) để tiện cho việc quản lý các resource. Nó chú trọng vào tài nguyên hệ thống (tệp văn bản, ảnh, âm thanh, video, hoặc dữ liệu động…), bao gồm các trạng thái tài nguyên được định dạng và được truyền tải qua HTTP.

REST hoạt động chủ yếu dựa vào giao thức HTTP. Các hoạt động cơ bản nêu trên sẽ sử dụng những phương thức HTTP riêng.

GET (SELECT): Trả về một Resource hoặc một danh sách Resource.
POST (CREATE): Tạo mới một Resource.
PUT (UPDATE): Cập nhật thông tin cho Resource.
DELETE (DELETE): Xoá một Resource.

# Status code

200 OK – Trả về thành công cho những phương thức GET, PUT, PATCH hoặc DELETE.
201 Created – Trả về khi một Resouce vừa được tạo thành công.
204 No Content – Trả về khi Resource xoá thành công.
304 Not Modified – Client có thể sử dụng dữ liệu cache.
400 Bad Request – Request không hợp lệ
401 Unauthorized – Request cần có chưa được xác thực (đăng nhập sai thông tin).
403 Forbidden – bị từ chối không cho phép (không có quyền vào).
404 Not Found – Không tìm thấy resource từ URI
405 Method Not Allowed – Phương thức không cho phép với user hiện tại.
410 Gone – Resource không còn tồn tại, Version cũ đã không còn hỗ trợ.
415 Unsupported Media Type – Không hỗ trợ kiểu Resource này.
422 Unprocessable Entity – Dữ liệu không được xác thực
429 Too Many Requests – Request bị từ chối do bị giới hạn
500 Server error
502 BAD GETWAY

# Đầu status http cần nhớ

200-299 -> Thành công
300-399 -> Chuyển hướng
400-499 -> Phía người dùng
500-599 -> Lỗi phía server

--
HTTP (HyperText Transfer Protocol - Giao thức Truyền tải Siêu văn bản) là giao thức nền tảng cho World Wide Web, quy định cách thức trình duyệt (client) và máy chủ web (server) trao đổi thông tin, cho phép bạn truy cập trang web, hình ảnh, video, tải xuống tệp tin trên Internet. Nó hoạt động theo cơ chế yêu cầu-phản hồi, nơi trình duyệt gửi yêu cầu và máy chủ gửi lại phản hồi, thường dùng chung với TCP/IP và giờ đây là HTTPS để mã hóa dữ liệu.
Đặc điểm và cách hoạt động chính:
Mục đích: Truyền tải dữ liệu siêu văn bản và các tài nguyên khác qua mạng.
Cơ chế Client-Server: Trình duyệt (client) gửi yêu cầu (request) đến máy chủ, máy chủ xử lý và gửi lại phản hồi (response).
Nền tảng: Chạy trên nền tảng TCP/IP, thường sử dụng cổng 80, nhưng giờ đây thường dùng kết hợp với TLS/SSL qua HTTPS (cổng 443) để bảo mật.
Mở rộng: Không chỉ tải văn bản, mà còn xử lý hình ảnh, video, tải lên nội dung (form) và cập nhật trang web.
Phiên bản: Đã phát triển từ HTTP/1.0, HTTP/1.1, đến HTTP/2, mang lại hiệu suất và tính năng tốt hơn.

# Giải thích cấu trúc thư mục

+, routes: Như tên gọi nó sẽ chứa đầy đủ các tuyền đường router của ứng dụng (/dang-nhap), khi client gửi yêu cầu tới, nó sẽ là thằng đứng ra để nhận
+, controllers: thằng bóc tách dữ liệu từ router(từ client gửi xuống query, params, body) + validate nó, sau đó sẽ chuyển cho services xử lý
+, services: nó là thàng xử lý logic và tương tác với csdl dữ liệu, đồng thời phản hồi về dữ liệu cho client
+, public: nó chứa các tài nguyên công khai của ứng dụng (server)
+, utils: là file chưa các hàm dùng chung, hàm dùng nhiều lần trong ứng dụng

# Xử lý biến môi trường với .env

Dotenv là một mô-đun không phụ thuộc vào bất kỳ thư viện nào khác, có chức năng tải các biến môi trường từ một .env tệp tin vào bộ nhớ process.env. Việc lưu trữ cấu hình trong môi trường tách biệt với mã nguồn dựa trên phương pháp luận của Mô hình Ứng dụng Mười Hai Yếu tố (The Twelve-Factor App ).

+, dotenv là thư viện dùng để cấu hình các dữ liệu quan trong, các biến môi trường.
+, để ấy các dữ liệu ra ta cần 2 bước.
+, Bước 1: import "dotenv/config";
+, Bước 2: process.env.TEN_BIEN_MOI_TRUONG dữ liệu bên này mặc định là 1 chuỗi

# Luồng ứng dụng chạy theo chuẩn MVC

# Client (front-end) -> gửi yêu cầu -> server tiếp nhận

# Người dùng gửi YC gì đó.. -> router (đón nhận yêu cầu) -> chuyển controller để validate, đọc req -> servers để xử lý dữ liệu rồi phản hồi về
