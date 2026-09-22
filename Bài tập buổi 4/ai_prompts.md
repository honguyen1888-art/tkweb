# AI Prompts & Nhật Ký Phát Triển — Tuần 4

File này ghi lại toàn bộ các Prompt đã sử dụng cùng quy trình triển khai 6 bài tập về nhà theo đúng tiêu chuẩn thực hành lớp Tuần 4.

---

## 1. Bài 1: Responsive Typography Scale (`Exercise-01`)
* **Mục tiêu:** Xây dựng hệ thống cỡ chữ `h1`–`p` với CSS Variables, tự động giảm kích thước khi màn hình `< 600px`.
* **Prompt sử dụng:**
  > "Tạo một trang web chuẩn HTML5/CSS3 minh họa Responsive Typography Scale. Định nghĩa hệ thống biến font chữ tại `:root` (--font-h1 đến --font-body), sử dụng đơn vị `rem`. Viết Media Query `@media (max-width: 600px)` để tự động co giảm tỉ lệ cỡ chữ trên điện thoại, đảm bảo cỡ chữ văn bản thông thường (p) đạt tối thiểu 16px để dễ đọc trên thiết bị di động."
* **Kỹ thuật áp dụng:**
  - CSS Variables tại `:root`: `--font-h1`, `--font-h2`, `--font-h3`, `--font-h4`, `--font-body`.
  - `@media (max-width: 600px)` ghi đè lại các biến font size tỉ lệ phù hợp.

---

## 2. Bài 2: Adaptive Card Layout (`Exercise-02`)
* **Mục tiêu:** Bố cục ảnh trái – chữ phải trên Desktop và ảnh trên – chữ dưới trên Mobile bằng Flexbox `flex-direction`.
* **Prompt sử dụng:**
  > "Tạo một thẻ thông tin (Adaptive Card Layout) ứng dụng Flexbox. Trên màn hình Desktop lớn, bố cục hiển thị ngang (ảnh bên trái, chữ bên phải) bằng `flex-direction: row`. Trên màn hình Mobile `< 768px`, chuyển thành bố cục dọc (ảnh bên trên, chữ bên dưới) bằng `flex-direction: column`. Nút bấm có vùng chạm (touch target) tối thiểu 48px và ảnh co giãn tỉ lệ `object-fit: cover`."
* **Kỹ thuật áp dụng:**
  - Flexbox `display: flex; flex-direction: row`.
  - Media Query `@media (max-width: 767px)` chuyển thành `flex-direction: column`.
  - Đảm bảo hình ảnh co giãn `object-fit: cover` không vỡ tỉ lệ và không gây thanh cuộn ngang.

---

## 3. Bài 3: Smart Navigation Bar (`Exercise-03`)
* **Mục tiêu:** Menu thanh ngang đầy đủ trên Desktop, icon Hamburger trên Mobile sử dụng `display: none`.
* **Prompt sử dụng:**
  > "Xây dựng thanh điều hướng thông minh (Smart Navigation Bar) responsive. Mặc định trên Desktop, danh sách menu ngang hiển thị đầy đủ, nút Hamburger icon ẩn bằng `display: none`. Khi màn hình thu nhỏ `< 768px`, menu ngang ẩn đi bằng `display: none`, đồng thời Hamburger icon xuất hiện với `display: flex` (vùng chạm touch target >= 48px). Khi bấm icon thì dropdown menu xổ xuống."
* **Kỹ thuật áp dụng:**
  - Desktop: `.nav-menu { display: flex; }` và `.hamburger-btn { display: none; }`.
  - Mobile (`< 768px`): `.nav-menu { display: none; }` và `.hamburger-btn { display: flex; }`.
  - Toggle class `.active` bằng JavaScript để mở dropdown menu mượt mà.

---

## 4. Bài 4: Dark/Light Mode Theme (`Exercise-04`)
* **Mục tiêu:** 2 bộ biến màu, class `.dark-theme` ghi đè biến, hiệu ứng chuyển màu mượt mà.
* **Prompt sử dụng:**
  > "Tạo giao diện hỗ trợ Dark/Light Mode sử dụng CSS Variables. Tại `:root`, khai báo bảng màu Light Theme (--color-bg, --color-surface, --color-text-primary,...). Tạo class `body.dark-theme` để ghi đè toàn bộ các biến màu sang giao diện nền tối. Thêm thuộc tính `transition: background-color 0.3s ease, color 0.3s ease` để màu chuyển đổi mượt mà. Tạo nút chuyển đổi (Theme Toggle Button) có icon Mặt trăng/Mặt trời."
* **Kỹ thuật áp dụng:**
  - `:root` cho màu sáng, `body.dark-theme` ghi đè các token màu sắc tương ứng.
  - `transition` toàn cục giúp đổi theme êm dịu, không giật màn hình.

---

## 5. Bài 5: Responsive Image Gallery (`Exercise-05`)
* **Mục tiêu:** Bộ sưu tập ảnh tự co giãn số cột bằng `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`.
* **Prompt sử dụng:**
  > "Xây dựng Responsive Image Gallery sử dụng CSS Grid hiện đại mà không cần viết nhiều media queries thủ công. Sử dụng `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` để các cột ảnh tự động xuống dòng và co giãn linh hoạt theo độ rộng màn hình. Mỗi item ảnh có bo góc, đổ bóng, hiệu ứng hover zoom nhẹ và nhãn chú thích bên dưới."
* **Kỹ thuật áp dụng:**
  - `repeat(auto-fit, minmax(250px, 1fr))` tự thích ứng từ 1 cột (Mobile) lên 2 cột, 3 cột, 4 cột tùy độ rộng màn hình.
  - `overflow: hidden` và `object-fit: cover` giúp toàn bộ ảnh cân đối.

---

## 6. Bài 6: Mobile-First Contact Form (`Exercise-06`)
* **Mục tiêu:** Thiết kế theo triết lý Mobile-First: ô nhập 100% trên Mobile, form giới hạn độ rộng và căn giữa trên Desktop.
* **Prompt sử dụng:**
  > "Xây dựng biểu mẫu liên hệ (Contact Form) theo phương pháp Mobile-First. Mặc định CSS viết cho Mobile trước: tất cả các trường input, textarea, select và nút gửi chiếm 100% chiều rộng, chiều cao ô nhập tối thiểu 48px và font chữ tối thiểu 16px (tránh phóng to ngoài ý muốn trên mobile). Dùng `@media (min-width: 768px)` để mở rộng giao diện Desktop: giới hạn max-width 620px, căn giữa màn hình và chia 2 cột cho các trường liên quan."
* **Kỹ thuật áp dụng:**
  - Lối viết Mobile-First (dùng `@media (min-width: 768px)` thay vì `max-width`).
  - Ô nhập 100% trên Mobile, chuyển thành 2 cột với Flexbox trên Desktop.
  - Vùng chạm ngón tay `min-height: 48px` và font-size `1rem` (16px) theo chuẩn Accessibility / W3C.

---

## Checklist Hoàn Thành Tuần 4
- [x] **CSS Variables:** Mọi mã màu và khoảng cách đều dùng `var()` và định nghĩa tại `:root`.
- [x] **Đồng bộ màu sắc:** Thay đổi biến tại `:root`, toàn trang đổi màu đồng bộ.
- [x] **Thẻ Viewport:** 100% các file đều có `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- [x] **Không cuộn ngang:** Toàn bộ bố cục sử dụng `box-sizing: border-box`, `width: 100%`, `overflow-x: hidden`.
- [x] **Kích thước chữ Mobile:** Cỡ chữ nội dung tối thiểu 16px (`1rem`), tiêu đề co giãn hài hòa.
- [x] **Touch Target:** Các nút bấm, ô input, menu hamburger đạt tối thiểu 48px chiều cao, bấm dễ dàng trên thiết bị cảm ứng.
- [x] **Breakpoints chuẩn:** Mobile (375px–600px), Tablet (768px), Desktop (1024px+).
