# Bài tập Buổi 4: Design System & Responsive Web Design

Thư mục này tổng hợp toàn bộ các hoạt động từ **Buổi 3**, tích hợp đầy đủ 4 hoạt động thực hành trên lớp và 6 bài tập về nhà tự rèn luyện của **Buổi 4**.

---

## 4 Hoạt động thực hành Buổi 4 (Tại lớp):

1. **HĐ 1 — 30 phút: Bảng mã màu thông minh**
   - Định nghĩa các biến CSS (`CSS Variables`) tại `:root` cho: `--color-primary`, `--color-secondary`, 3 mức xám (`--color-gray-dark`, `--color-gray-medium`, `--color-gray-light`), nền (`--color-bg`, `--color-surface`).
   - Tích hợp công cụ chỉnh màu trực tiếp (Live Theme Customizer) ngay trên giao diện web.
2. **HĐ 2 — 60 phút: Responsive Portfolio**
   - Bố cục 2 cột Desktop (`260px 1fr`) tự động chuyển thành 1 cột trên Mobile `< 768px` bằng Media Queries.
3. **HĐ 3 — 30 phút: Breakpoint Challenge: Khu vực "Dịch vụ"**
   - CSS Grid 4 cột Desktop (>1024px) → 2 cột Tablet (768px–1024px) → 1 cột Mobile (<768px).
4. **HĐ 4 — 30 phút: Design System Refactoring**
   - Trích xuất toàn bộ mã màu và khoảng cách (hệ số 8px: `--space-1` đến `--space-5`) thành CSS Variables.

---

## Bài Tập Về Nhà — 6 Bài Tự Rèn Luyện (Lưu tại các thư mục riêng):

- [x] **[Exercise-01](./Exercise-01/index.html) - Responsive Typography Scale:** Hệ thống cỡ chữ `h1`–`p` bằng CSS Variables, tự động thu nhỏ khi màn hình `< 600px`, font chữ Mobile tối thiểu 16px.
- [x] **[Exercise-02](./Exercise-02/index.html) - Adaptive Card Layout:** Bố cục ảnh trái – chữ phải trên Desktop (`flex-direction: row`) và ảnh trên – chữ dưới trên Mobile (`flex-direction: column`).
- [x] **[Exercise-03](./Exercise-03/index.html) - Smart Navigation Bar:** Menu ngang đầy đủ trên Desktop, Hamburger icon trên Mobile bằng `display: none` / `display: flex`, vùng chạm >= 48px.
- [x] **[Exercise-04](./Exercise-04/index.html) - Dark/Light Mode Theme:** 2 bộ biến màu, class `.dark-theme` ghi đè biến, hiệu ứng chuyển màu mượt mà với `transition: 0.3s ease`.
- [x] **[Exercise-05](./Exercise-05/index.html) - Responsive Image Gallery:** Sử dụng `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` tự động co giãn cột theo màn hình.
- [x] **[Exercise-06](./Exercise-06/index.html) - Mobile-First Contact Form:** Ô nhập 100% trên Mobile, form giới hạn `max-width: 620px` và căn giữa trên Desktop (`min-width: 768px`).
- [x] **[ai_prompts.md](./ai_prompts.md):** Ghi lại toàn bộ Prompt đã sử dụng cho cả 6 bài tập.

---

## Checklist Hoàn Thành Tuần 4
- [x] **CSS Variables:** Mọi mã màu và khoảng cách đều dùng `var()` và định nghĩa tại `:root`.
- [x] **Đồng bộ màu sắc:** Thay đổi biến tại `:root`, toàn trang đổi màu đồng bộ.
- [x] **Thẻ Viewport:** 100% các file đều có `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- [x] **Không xuất hiện thanh cuộn ngang:** Tất cả các trang đều vừa vặn chiều rộng màn hình.
- [x] **Font chữ & Touch Target:** Font chữ đọc được tối thiểu 16px trên mobile, vùng chạm tối thiểu 48px.
