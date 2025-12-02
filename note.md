- Nodejs là một môi trường cho phép thực thi mã trên phía server thay vì chỉ phía trình duyệt nó dữ dụng javascript và google V8
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
