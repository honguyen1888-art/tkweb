/**
 * Frontend Logic & Interactivity
 * Author: Lê Nhật Duy (Frontend Developer)
 * Course: AI Web Development
 */

// Mock Product Dataset for Dynamic Rendering & Filtering
const PRODUCTS = [
  {
    id: 1,
    title: "Laptop Ultra AI Pro 16",
    category: "laptop",
    categoryName: "Laptop",
    price: 24990000,
    originalPrice: 28990000,
    icon: "💻",
    tag: "Hot Deal"
  },
  {
    id: 2,
    title: "SmartPhone Ultra 5G AI",
    category: "phone",
    categoryName: "Điện Thoại",
    price: 18490000,
    originalPrice: 20990000,
    icon: "📱",
    tag: "-12%"
  },
  {
    id: 3,
    title: "Tai Nghe Chống Ồn Wireless Pro",
    category: "audio",
    categoryName: "Tai Nghe",
    price: 3290000,
    originalPrice: 3990000,
    icon: "🎧",
    tag: "Bán Chạy"
  },
  {
    id: 4,
    title: "Smartwatch Fitness Gen 3",
    category: "watch",
    categoryName: "Đồng Hồ",
    price: 4990000,
    originalPrice: 5990000,
    icon: "⌚",
    tag: "Mới"
  },
  {
    id: 5,
    title: "Bàn Phím Cơ Không Dây RGB",
    category: "accessory",
    categoryName: "Phụ Kiện",
    price: 1850000,
    originalPrice: 2200000,
    icon: "⌨️",
    tag: null
  },
  {
    id: 6,
    title: "Chuột Gaming Siêu Nhẹ 8K",
    category: "accessory",
    categoryName: "Phụ Kiện",
    price: 1290000,
    originalPrice: 1590000,
    icon: "🖱️",
    tag: "-18%"
  }
];

// Helper: Format Currency VND
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 [Lê Nhật Duy] Frontend Modules Loaded Successfully');

  // DOM Elements
  const productContainer = document.getElementById('product-grid-container');
  const cartBadge = document.querySelector('.cart-badge');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const categoryPills = document.querySelectorAll('.category-pill');

  // State Management
  let cart = JSON.parse(localStorage.getItem('tkweb_cart')) || [];
  let currentCategory = 'all';

  // 1. Initial Render
  updateCartBadge();
  initTheme();
  renderProducts();

  // 2. Theme Toggle (Dark / Light Mode)
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('tkweb_theme', newTheme);
      themeToggleBtn.innerText = newTheme === 'dark' ? '☀️' : '🌙';
      showToast(`Chuyển sang chế độ ${newTheme === 'dark' ? 'Tối' : 'Sáng'}`);
    });
  }

  function initTheme() {
    const savedTheme = localStorage.getItem('tkweb_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (themeToggleBtn) {
      themeToggleBtn.innerText = savedTheme === 'dark' ? '☀️' : '🌙';
    }
  }

  // 3. Category Filter
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category || 'all';
      renderProducts();
    });
  });

  // 4. Render Product Grid
  function renderProducts() {
    if (!productContainer) return;

    const filtered = currentCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === currentCategory);

    productContainer.innerHTML = filtered.map(item => `
      <article class="product-card" data-id="${item.id}">
        <div class="product-thumb">
          ${item.tag ? `<span class="product-tag">${item.tag}</span>` : ''}
          <span>${item.icon}</span>
        </div>
        <div class="product-body">
          <span class="product-cat">${item.categoryName}</span>
          <h3 class="product-title">${item.title}</h3>
          <div class="product-price-box">
            <span class="current-price">${formatCurrency(item.price)}</span>
            <span class="original-price">${formatCurrency(item.originalPrice)}</span>
          </div>
          <div class="card-actions">
            <button class="btn-card-cart" onclick="handleAddToCart(${item.id})">Thêm vào giỏ</button>
            <button class="btn-card-view" onclick="handleQuickView(${item.id})">Chi tiết</button>
          </div>
        </div>
      </article>
    `).join('');
  }

  // 5. Cart Operations
  window.handleAddToCart = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('tkweb_cart', JSON.stringify(cart));
    updateCartBadge();
    showToast(`Đã thêm "${product.title}" vào giỏ hàng!`);
  };

  window.handleQuickView = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
      showToast(`🔍 ${product.title} - ${formatCurrency(product.price)}`);
    }
  };

  function updateCartBadge() {
    if (cartBadge) {
      const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      cartBadge.innerText = totalItems;
    }
  }

  // 6. Toast Notification Engine
  function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>🔔</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
});
