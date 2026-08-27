# 🛒 Website bán hàng

## 📌 Giới thiệu

Đây là dự án **thiết kế và phát triển website bán hàng trực tuyến**, nhằm xây dựng một hệ thống thương mại điện tử có giao diện trực quan, dễ sử dụng và hỗ trợ các chức năng cơ bản như xem sản phẩm, tìm kiếm, quản lý giỏ hàng và đặt hàng.

Dự án được thực hiện nhằm áp dụng kiến thức về **thiết kế Web, lập trình Web, cơ sở dữ liệu và phát triển giao diện người dùng**.

---

## 🎯 Mục tiêu dự án

* Xây dựng giao diện website bán hàng hiện đại, dễ sử dụng.
* Hiển thị và phân loại sản phẩm rõ ràng.
* Cho phép người dùng tìm kiếm và xem thông tin sản phẩm.
* Xây dựng chức năng giỏ hàng.
* Hỗ trợ quy trình đặt hàng.
* Xây dựng hệ thống quản lý sản phẩm và đơn hàng.
* Thiết kế giao diện tương thích với nhiều kích thước màn hình.

---

## ✨ Chức năng chính

### 👤 Người dùng

* [ ] Đăng ký tài khoản
* [ ] Đăng nhập / đăng xuất
* [ ] Xem danh sách sản phẩm
* [ ] Xem chi tiết sản phẩm
* [ ] Tìm kiếm sản phẩm
* [ ] Lọc sản phẩm theo danh mục
* [ ] Thêm sản phẩm vào giỏ hàng
* [ ] Cập nhật số lượng sản phẩm
* [ ] Xóa sản phẩm khỏi giỏ hàng
* [ ] Đặt hàng
* [ ] Xem lịch sử đơn hàng
* [ ] Quản lý thông tin cá nhân

### 🔐 Quản trị viên

* [ ] Đăng nhập trang quản trị
* [ ] Quản lý sản phẩm
* [ ] Thêm / sửa / xóa sản phẩm
* [ ] Quản lý danh mục
* [ ] Quản lý tài khoản người dùng
* [ ] Quản lý đơn hàng
* [ ] Cập nhật trạng thái đơn hàng
* [ ] Xem thống kê doanh thu

---

## 🖥️ Các trang chính

| Trang             | Mô tả                                    |
| ----------------- | ---------------------------------------- |
| Trang chủ         | Hiển thị sản phẩm nổi bật và danh mục    |
| Sản phẩm          | Danh sách tất cả sản phẩm                |
| Chi tiết sản phẩm | Thông tin, hình ảnh, giá và mô tả        |
| Tìm kiếm          | Tìm sản phẩm theo từ khóa                |
| Giỏ hàng          | Quản lý sản phẩm trước khi đặt hàng      |
| Thanh toán        | Nhập thông tin nhận hàng và xác nhận đơn |
| Đăng nhập         | Đăng nhập tài khoản                      |
| Đăng ký           | Tạo tài khoản mới                        |
| Tài khoản         | Quản lý thông tin cá nhân                |
| Đơn hàng          | Theo dõi lịch sử mua hàng                |
| Quản trị          | Quản lý toàn bộ hệ thống                 |

---

## 🛠️ Công nghệ sử dụng

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap / Tailwind CSS *(nếu sử dụng)*

### Backend

* PHP / Node.js / Java / Python *(chọn công nghệ thực tế của dự án)*

### Database

* MySQL

### Công cụ

* Visual Studio Code
* Git / GitHub
* XAMPP *(nếu sử dụng PHP + MySQL)*

---

## 📂 Cấu trúc thư mục

```text
shopping-website/
│
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── fonts/
│
├── components/
│   ├── header/
│   ├── footer/
│   ├── navbar/
│   └── product-card/
│
├── pages/
│   ├── home/
│   ├── products/
│   ├── product-detail/
│   ├── cart/
│   ├── checkout/
│   ├── login/
│   └── register/
│
├── admin/
│   ├── dashboard/
│   ├── products/
│   ├── orders/
│   ├── users/
│   └── categories/
│
├── database/
│   └── database.sql
│
├── README.md
└── ...
```

---

## 🗄️ Cơ sở dữ liệu

Hệ thống dự kiến sử dụng các bảng chính:

```text
users
  │
  └── orders
        │
        └── order_details
                 │
                 └── products
                       │
                       └── categories
```

### Các bảng chính

| Bảng            | Chức năng                            |
| --------------- | ------------------------------------ |
| `users`         | Lưu thông tin người dùng             |
| `categories`    | Lưu danh mục sản phẩm                |
| `products`      | Lưu thông tin sản phẩm               |
| `orders`        | Lưu thông tin đơn hàng               |
| `order_details` | Lưu chi tiết từng sản phẩm trong đơn |
| `cart`          | Lưu thông tin giỏ hàng               |

---

## 🚀 Cài đặt và chạy dự án

### 1. Clone repository

```bash
git clone <repository-url>
cd shopping-website
```

### 2. Cài đặt các thư viện

```bash
npm install
```

*(Bỏ bước này nếu dự án không sử dụng Node.js/npm.)*

### 3. Cấu hình cơ sở dữ liệu

* Tạo database MySQL.
* Import file:

```text
database/database.sql
```

* Cấu hình thông tin kết nối database trong file cấu hình của dự án.

Ví dụ:

```text
Database: shopping_website
Host: localhost
Username: root
Password: 
Port: 3306
```

### 4. Khởi chạy website

```bash
npm run dev
```

Sau đó truy cập:

```text
http://localhost:3000
```

---

## 👥 Thành viên nhóm

| STT | Họ và tên | Vai trò | Nhiệm vụ chính |
| :---: | :--- | :--- | :--- |
| 1 | **Nguyễn Nhật Bảo Lâm** | Nhóm trưởng (Leader) | Quản lý dự án, Review/Merge PR, Backend & Database |
| 2 | **Mai Huy Phong** | Thành viên (Member) | Thiết kế UI/UX, Responsive CSS Design System |
| 3 | **Lê Nhật Duy** | Thành viên (Member) | Cấu trúc Semantic HTML, Xử lý tương tác JavaScript & DOM |
| 4 | **Vũ Minh Tiến** | Thành viên (Member) | Kiểm thử (Testing), Tối ưu hiệu năng & Tài liệu dự án |

---

## 📸 Demo

### Trang chủ

> Thêm ảnh chụp màn hình trang chủ tại đây.

```text
![Trang chủ](assets/images/home.png)
```

### Trang sản phẩm

```text
![Danh sách sản phẩm](assets/images/products.png)
```

### Giỏ hàng

```text
![Giỏ hàng](assets/images/cart.png)
```

---

## 📋 Tiến độ phát triển

* [x] Phân tích yêu cầu
* [x] Thiết kế giao diện
* [x] Thiết kế cơ sở dữ liệu
* [ ] Xây dựng Frontend
* [ ] Xây dựng Backend
* [ ] Kết nối Database
* [ ] Xây dựng chức năng giỏ hàng
* [ ] Xây dựng chức năng đặt hàng
* [ ] Xây dựng trang quản trị
* [ ] Kiểm thử
* [ ] Hoàn thiện và triển khai

---

## 🔮 Hướng phát triển

Trong tương lai, dự án có thể được mở rộng với:

* Thanh toán trực tuyến.
* Theo dõi trạng thái giao hàng.
* Mã giảm giá và chương trình khuyến mãi.
* Đánh giá và nhận xét sản phẩm.
* Hệ thống yêu thích sản phẩm.
* Thông báo đơn hàng.
* Chat hỗ trợ khách hàng.
* Thống kê doanh thu nâng cao.
* Responsive tối ưu cho điện thoại.
* Tích hợp các dịch vụ vận chuyển.

---

## 📄 License

Dự án được thực hiện với mục đích **học tập và nghiên cứu**.
