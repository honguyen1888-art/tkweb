# ⚡ QUY TẮC TỐI ƯU HÓA TOKEN & VẬN HÀNH SUBAGENTS DỰ ÁN TKWEB

## 1. Nguyên Tắc Tiết Kiệm Token (Token Optimization)
- **Đọc file có chọn lọc**: Tuyệt đối không đọc toàn bộ file mã nguồn hàng nghìn dòng vào context. Luôn chỉ định rõ `StartLine` và `EndLine` khi dùng `view_file`.
- **Phân tách ngữ cảnh**: Không nhồi nhét kết quả tìm kiếm dài, log chạy test hoặc báo cáo thô vào cuộc trò chuyện chính. Sử dụng Subagent để xử lý độc lập và chỉ nhận về kết quả tóm tắt cô đọng.
- **Phản hồi súc tích**: Trả lời trực diện vào vấn đề, kèm diff hoặc link file cụ thể, tránh lặp lại nguyên văn nội dung code đã có.

## 2. Phân Công Subagents Chuyên Biệt
- **`web_ui_reviewer` (Model: Flash)**: Chuyên trách rà soát giao diện, CSS layout, Flexbox/Grid, và độ phản hồi Responsive trên các độ phân giải màn hình.
- **`qa_test_runner` (Model: Flash Lite)**: Chuyên trách chạy bộ kiểm thử tĩnh `tests/static-analysis.js`, kiểm tra liên kết nội bộ và lỗi cú pháp.
- **`code_optimizer` (Model: Flash)**: Chuyên trách dọn dẹp hàm dư thừa, tối ưu dung lượng asset và nén mã nguồn.
- **`Main Agent`**: Điều phối, lập kế hoạch và chỉ dùng model mạnh (Pro) khi phải giải quyết bài toán kiến trúc hoặc logic phức tạp.
