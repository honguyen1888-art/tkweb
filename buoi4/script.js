// Xử lý chuyển đổi giao diện Sáng / Tối (Light / Dark Mode)
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Hàm đọc theme đã lưu
    function getStoredTheme() {
        try {
            return localStorage.getItem('theme');
        } catch (e) {
            return null;
        }
    }

    // Hàm lưu theme vào localStorage
    function setStoredTheme(theme) {
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            // Trường hợp bảo mật trình duyệt chặn localStorage
        }
    }

    // Kiểm tra cấu hình theme ban đầu
    const savedTheme = getStoredTheme();
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.documentElement.classList.remove('dark-mode');
    }

    // Lắng nghe sự kiện click vào nút
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            document.documentElement.classList.toggle('dark-mode', isDark);
            setStoredTheme(isDark ? 'dark' : 'light');
        });
    }
});

