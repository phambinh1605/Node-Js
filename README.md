# Đặt lịch khám bệnh - Backend

## Giới Thiệu
Đây là phần backend của trang web "Đặt lịch khám bệnh", được xây dựng bằng **Node.js** với **Express** và kết nối với cơ sở dữ liệu **MySQL** để quản lý thông tin bệnh nhân, bác sĩ, cơ sở y tế và lịch khám.

## Công Nghệ Sử Dụng
- **Node.js**: Môi trường chạy JavaScript phía server.
- **Express**: Framework giúp xây dựng các API và xử lý routing.
- **MySQL**: Cơ sở dữ liệu quan hệ để lưu trữ thông tin.
- **Sequelize**: ORM giúp kết nối và thao tác với cơ sở dữ liệu MySQL.

## Hướng Dẫn Cài Đặt

1. Clone repository về máy:
   ```bash
   git clone https://github.com/username/backend-repo.git

2. Cài đặt các phụ thuộc:
  cd frontend-repo
  npm install

3. Cấu hình môi trường:

  • Sao chép tệp .env.example và tạo tệp .env trong thư mục gốc (cùng cấp với .env.example).

  • Cập nhật các biến môi trường trong tệp .env:

    • DB_USERNAME: Tên người dùng cơ sở dữ liệu (mặc định là root).

    • DB_PASSWORD: Mật khẩu của cơ sở dữ liệu.

    • MAIL_USERNAME: Email của bạn.

    • MAIL_PASSWORD: Mật khẩu ứng dụng email (chứ không phải mật khẩu email chính).

4. Cấu hình cơ sở dữ liệu:

    • Tạo cơ sở dữ liệu MySQL bằng cách chạy tệp database.sql trong MySQL Workbench hoặc PHPMyAdmin. Nó sẽ tự động tạo một schema mới có tên doctorcare trong cơ sở dữ liệu của bạn.

5. Chạy trang web:

  npm start

Server sẽ chạy ở http://localhost:8080.

# Các API Endpoints
• GET /api/doctors: Lấy danh sách bác sĩ.

• POST /api/appointments: Đặt lịch khám với bác sĩ.

• GET /api/appointments: Lấy tất cả lịch khám của bệnh nhân.

• GET /api/patients: Lấy thông tin bệnh nhân.

# Cấu Trúc Thư Mục

• controllers/: Chứa các controller xử lý logic cho các API.

• models/: Các mô hình dữ liệu (ví dụ: User, Doctor, Appointment).

• routes/: Các định tuyến API.

• config/: Cấu hình cơ sở dữ liệu và các thiết lập khác.

# Lỗi Thường Gặp
1. Cơ sở dữ liệu không kết nối:

  • Kiểm tra lại cấu hình MySQL URI và đảm bảo rằng MySQL server đang chạy.

2. API không trả về kết quả:

  • Kiểm tra các endpoint trong routes để đảm bảo chính xác.






