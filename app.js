/**
 * Casper Smoke Shop - Complete Interactive Client Application & Logic Engine
 */
document.addEventListener('DOMContentLoaded', function () {

  // ==========================================
  // 1. PRODUCT DATASET FOR SEARCH & DYNAMIC VIEWS
  // ==========================================
  const productCatalog = [
    { id: 'p1', title: 'Casper Purple Rush Vapor Kit', category: 'Vape Kits', price: 49.99, image: 'casper-mascot-logo.png', rating: 5.0, tag: 'BESTSELLER', flavors: ['Purple Rush', 'Lime Chill', 'Blue Ice'], nics: ['50mg', '20mg', '0mg'], desc: 'The flagship Casper Smoke Shop pod kit with dual mesh coils and custom neon RGB airflow indicator.' },
    { id: 'p2', title: 'Casper Elite Lime Green Glass Water Pipe', category: 'Glass', price: 89.99, image: 'casper-mascot-logo.png', rating: 4.9, tag: 'PREMIUM GLASS', flavors: ['Neon Lime', 'Deep Purple', 'Clear Glass'], nics: ['N/A'], desc: 'Hand-blown thick borosilicate glass beaker pipe with ice pinch and purple accents.' },
    { id: 'p3', title: 'Casper Rush Disposable 10,000 Puffs', category: 'Disposable Vapes', price: 19.99, image: 'casper-mascot-logo.png', rating: 4.8, tag: '20% OFF', flavors: ['Grape Rush', 'Watermelon Ice', 'Spearmint'], nics: ['50mg', '20mg'], desc: 'High capacity disposable vape featuring 10,000 puffs, rechargeable Type-C battery, and digital juice display.' },
    { id: 'p4', title: 'Casper Sub-Ohm E-Liquid - Purple Rush (100ml)', category: 'E-Liquids', price: 16.99, image: 'casper-mascot-logo.png', rating: 5.0, tag: 'POPULAR', flavors: ['Purple Rush', 'Lime Zest', 'Strawberry Ice'], nics: ['6mg', '3mg', '0mg'], desc: 'Premium 70VG/30PG freebase e-juice crafted for huge clouds and intense flavor.' },
    { id: 'p5', title: 'Casper Wax & Concentrate Vaporizer Rig', category: 'Concentrates', price: 69.99, image: 'casper-mascot-logo.png', rating: 4.9, tag: 'HOT DEAL', flavors: ['Matte Black', 'Neon Green'], nics: ['N/A'], desc: 'Precision temperature e-rig for concentrates with quartz bucket atomizer and water filtration.' },
    { id: 'p6', title: 'Casper 4-Piece Aircraft Aluminum Grinder', category: 'Accessories', price: 24.99, image: 'casper-mascot-logo.png', rating: 4.9, tag: 'MUST HAVE', flavors: ['Black & Purple', 'Lime Green'], nics: ['N/A'], desc: 'Ultra-sharp diamond teeth grinder with pollen screen and magnetic top lid.' }
  ];

  // ==========================================
  // 2. MODAL CONTROLLER FRAMEWORK
  // ==========================================
  function createModalContainer() {
    let backdrop = document.getElementById('casper-modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'casper-modal-backdrop';
      backdrop.className = 'casper-modal-backdrop';
      backdrop.innerHTML = `<div class="casper-modal" id="casper-modal-box"></div>`;
      document.body.appendChild(backdrop);

      backdrop.addEventListener('click', function (e) {
        if (e.target === backdrop) closeModal();
      });
    }
    return backdrop;
  }

  function openModal(htmlContent) {
    const backdrop = createModalContainer();
    const box = document.getElementById('casper-modal-box');
    box.innerHTML = `
      <button class="casper-modal-close" id="casper-modal-close-btn" aria-label="Close modal">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12M6 6l12 12"></path></svg>
      </button>
      ${htmlContent}
    `;

    backdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('casper-modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
  }

  function closeModal() {
    const backdrop = document.getElementById('casper-modal-backdrop');
    if (backdrop) {
      backdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  window.closeCasperModal = closeModal;

  // ==========================================
  // 3. AGE GATE OVERLAY (21+)
  // ==========================================
  (function initAgeGate() {
    const ageGate = document.getElementById('casper-age-gate');
    const yesBtn = document.getElementById('casper-age-yes');
    const noBtn = document.getElementById('casper-age-no');

    function isLoggedIn() {
      try {
        return !!localStorage.getItem('casper_logged_user');
      } catch (e) {
        return false;
      }
    }

    function hideGate() {
      if (!ageGate) return;
      ageGate.style.opacity = '0';
      ageGate.style.transition = 'opacity 0.3s ease';
      setTimeout(() => {
        ageGate.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    }

    function showGate() {
      if (!ageGate || isLoggedIn()) return;
      ageGate.style.display = 'flex';
      ageGate.style.opacity = '1';
      document.body.style.overflow = 'hidden';
    }

    // Requirement: every fresh website open/page load asks logged-out visitors again.
    // No localStorage/cookie is used for age verification.
    if (isLoggedIn()) hideGate();
    else showGate();

    if (yesBtn) {
      yesBtn.addEventListener('click', function () {
        hideGate();
        showToast('Age verified! Welcome to Casper Smoke Shop.', 'success');
      });
    }

    if (noBtn) {
      noBtn.addEventListener('click', function () {
        window.location.href = 'https://www.google.com';
      });
    }

    window.showCasperAgeGate = showGate;
    window.hideCasperAgeGate = hideGate;
  })();

  // ==========================================
  // 4. THEME TOGGLE SYSTEM
  // ==========================================
  const themeToggles = document.querySelectorAll('#cc-theme-toggle, .cc-theme-toggle');

  function getSavedTheme() {
    try {
      const saved = localStorage.getItem('casper-theme-pref');
      return saved === 'light' ? 'light' : 'dark';
    } catch (e) {
      return 'dark';
    }
  }

  function setTheme(theme, persist = true) {
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    const root = document.documentElement;

    // Use an explicit attribute for BOTH themes. This avoids relying on the
    // absence of an attribute and makes the theme state reliable after reload.
    root.setAttribute('data-casper-theme', nextTheme);
    root.classList.toggle('casper-light-theme', nextTheme === 'light');
    root.classList.toggle('casper-dark-theme', nextTheme === 'dark');
    document.body.classList.toggle('casper-light-theme', nextTheme === 'light');
    document.body.classList.toggle('casper-dark-theme', nextTheme === 'dark');

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', nextTheme === 'light' ? '#f5f6f8' : '#0a0a0c');

    themeToggles.forEach(btn => {
      btn.setAttribute('aria-pressed', nextTheme === 'light' ? 'true' : 'false');
      btn.setAttribute('aria-label', nextTheme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
      btn.dataset.theme = nextTheme;
    });

    if (persist) {
      try { localStorage.setItem('casper-theme-pref', nextTheme); } catch (e) {}
    }
  }

  // Apply the saved theme immediately.
  setTheme(getSavedTheme(), false);

  // Delegated handler also catches the toggle if another script replaces the header.
  document.addEventListener('click', function (e) {
    const toggle = e.target.closest('#cc-theme-toggle, .cc-theme-toggle');
    if (!toggle) return;
    e.preventDefault();
    e.stopPropagation();
    const current = document.documentElement.getAttribute('data-casper-theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    setTheme(next, true);
    showToast(`Switched to ${next.toUpperCase()} theme`, 'info');
  }, true);

  // ==========================================
  // 5. DRAWER MANAGEMENT (Mobile Menu & Cart)
  // ==========================================
  const mnavDrawer = document.getElementById('cc-mnav');
  const mnavOpenBtn = document.getElementById('cc-mnav-open');
  const mnavCloseBtn = document.getElementById('cc-mnav-close');

  const cartDrawer = document.getElementById('cc-cart-drawer');
  const cartOpenBtn = document.getElementById('cc-cart-open');
  const cartCloseBtn = document.getElementById('cc-cart-close');
  const backdrop = document.getElementById('cc-drawer-backdrop');

  function openDrawer(drawer, openBtn) {
    closeAllDrawers();
    if (drawer) {
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
    }
    if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
    if (backdrop) {
      backdrop.removeAttribute('hidden');
      backdrop.classList.add('is-open');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeAllDrawers() {
    [mnavDrawer, cartDrawer].forEach(d => {
      if (d) {
        d.classList.remove('is-open');
        d.setAttribute('aria-hidden', 'true');
      }
    });
    [mnavOpenBtn, cartOpenBtn].forEach(b => {
      if (b) b.setAttribute('aria-expanded', 'false');
    });
    if (backdrop) {
      backdrop.setAttribute('hidden', '');
      backdrop.classList.remove('is-open');
    }
    document.body.style.overflow = '';
  }

  if (mnavOpenBtn) mnavOpenBtn.addEventListener('click', () => openDrawer(mnavDrawer, mnavOpenBtn));
  if (mnavCloseBtn) mnavCloseBtn.addEventListener('click', closeAllDrawers);
  if (cartOpenBtn) cartOpenBtn.addEventListener('click', () => openDrawer(cartDrawer, cartOpenBtn));
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeAllDrawers);
  if (backdrop) backdrop.addEventListener('click', closeAllDrawers);

  // ==========================================
  // 6. CART ENGINE & UI RENDERER
  // ==========================================
  let cart = [];
  let appliedDiscount = 0; // percentage e.g. 0.20 for CASPER20

  function loadCart() {
    try {
      const saved = localStorage.getItem('casper_cart_items');
      cart = saved ? JSON.parse(saved) : [];
    } catch (e) { cart = []; }
  }

  function saveCart() {
    try { localStorage.setItem('casper_cart_items', JSON.stringify(cart)); } catch (e) {}
    renderCartUI();
  }

  function getCartItemCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function getCartSubtotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  function renderCartUI() {
    const badges = document.querySelectorAll('.cc-cart__badge');
    const totalCount = getCartItemCount();
    badges.forEach(badge => { badge.textContent = totalCount; });

    if (cartOpenBtn) cartOpenBtn.setAttribute('aria-label', `Cart, ${totalCount} items`);

    if (!cartDrawer) return;
    const body = cartDrawer.querySelector('.cc-drawer__body');
    if (!body) return;

    if (cart.length === 0) {
      body.className = 'cc-drawer__body';
      body.style.justifyContent = 'center';
      body.innerHTML = `
        <svg width="44" height="44" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6.4 8.2h11.2l1.05 12.1a1.9 1.9 0 0 1-1.9 2.1H7.25a1.9 1.9 0 0 1-1.9-2.1z"></path>
          <path d="M8.8 10.6V6.9a3.2 3.2 0 0 1 6.4 0v3.7"></path>
        </svg>
        <p>Your cart is empty.</p>
        <button class="cc-btn cc-btn--green" type="button" onclick="window.closeDrawers && window.closeDrawers()">SHOP DEALS NOW <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15m-6-6 6 6-6 6"></path></svg></button>
      `;
    } else {
      const subtotal = getCartSubtotal();
      const freeShippingThreshold = CASPER_FREE_SHIPPING_THRESHOLD;
      const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);
      
      let html = '';
      if (amountNeeded > 0) {
        const percent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
        html += `
          <div style="width:100%;margin-bottom:12px;background:rgba(255,255,255,0.05);padding:10px 12px;border-radius:6px;border:1px solid var(--casper-line);text-align:left;">
            <div style="font-size:12px;color:var(--casper-ink-soft);margin-bottom:6px;">Add <strong style="color:var(--casper-green-ink);">$${amountNeeded.toFixed(2)}</strong> more for <strong>FREE IN-STATE SHIPPING!</strong></div>
            <div style="width:100%;height:6px;background:var(--casper-line);border-radius:3px;overflow:hidden;">
              <div style="width:${percent}%;height:100%;background:var(--casper-green-ink);transition:width 0.3s ease;"></div>
            </div>
          </div>
        `;
      } else {
        html += `
          <div style="width:100%;margin-bottom:12px;background:rgba(0,255,135,0.1);padding:10px 12px;border-radius:6px;border:1px solid var(--casper-green-dim);text-align:center;font-size:12px;color:var(--casper-green-ink);font-weight:600;">
            🎉 You unlocked FREE IN-STATE SHIPPING!
          </div>
        `;
      }

      html += `<div class="cc-cart-items-list">`;
      cart.forEach((item, index) => {
        html += `
          <div class="cc-cart-item">
            <img class="cc-cart-item__img" src="${item.image || 'casper-mascot-logo.png'}" alt="${item.title}">
            <div class="cc-cart-item__info">
              <h4 class="cc-cart-item__title">${item.title}</h4>
              ${item.flavor ? `<div style="font-size:11px;color:var(--casper-ink-faint);">${item.flavor} • ${item.nic || ''}</div>` : ''}
              <div class="cc-cart-item__price">$${(item.price * item.quantity).toFixed(2)}</div>
              <div class="cc-cart-item__qty">
                <button type="button" class="cc-cart-qty-btn" data-action="minus" data-index="${index}">-</button>
                <span style="font-size:13px;font-weight:600;min-width:18px;text-align:center;">${item.quantity}</span>
                <button type="button" class="cc-cart-qty-btn" data-action="plus" data-index="${index}">+</button>
              </div>
            </div>
            <button type="button" class="cc-cart-remove-btn" data-action="remove" data-index="${index}" title="Remove item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        `;
      });
      html += `</div>`;

      html += `
        <div class="cc-cart-foot">
          <div class="cc-cart-subtotal">
            <span>Subtotal:</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <button type="button" id="cc-checkout-trigger" class="cc-cart-checkout-btn">PROCEED TO CHECKOUT 🛒</button>
        </div>
      `;

      body.className = 'cc-drawer__body cc-drawer__body--active';
      body.style.justifyContent = 'flex-start';
      body.innerHTML = html;

      body.querySelectorAll('.cc-cart-qty-btn, .cc-cart-remove-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          const idx = parseInt(this.getAttribute('data-index'), 10);
          const action = this.getAttribute('data-action');
          if (isNaN(idx) || !cart[idx]) return;

          if (action === 'plus') cart[idx].quantity += 1;
          else if (action === 'minus') {
            cart[idx].quantity -= 1;
            if (cart[idx].quantity <= 0) cart.splice(idx, 1);
          } else if (action === 'remove') cart.splice(idx, 1);
          saveCart();
        });
      });

      const checkoutBtn = document.getElementById('cc-checkout-trigger');
      if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function () {
          closeAllDrawers();
          openCheckoutModal();
        });
      }
    }
  }

  window.closeDrawers = closeAllDrawers;
  loadCart();
  renderCartUI();

  // ==========================================
  // 7. USER ACCOUNT SYSTEM & MODAL
  // ==========================================
  function getUserSession() {
    try {
      const u = localStorage.getItem('casper_logged_user');
      return u ? JSON.parse(u) : null;
    } catch (e) { return null; }
  }

  function updateUserAccountUI() {
    const user = getUserSession();
    const acctBtns = document.querySelectorAll('.cc-acct, a[href*="account"]');
    acctBtns.forEach(btn => {
      const txtStrong = btn.querySelector('strong');
      const txtSpan = btn.querySelector('span:not(.cc-acct__ic)');
      if (user) {
        if (txtStrong) txtStrong.textContent = 'Hi, ' + user.name.split(' ')[0];
        if (txtSpan) txtSpan.textContent = 'Dashboard';
      } else {
        if (txtStrong) txtStrong.textContent = 'Account';
        if (txtSpan) txtSpan.textContent = 'Sign In';
      }
    });
  }

  function openAccountModal() {
    const user = getUserSession();
    if (user) {
      openModal(`
        <h2 class="casper-modal__title">👤 Welcome, ${user.name}!</h2>
        <p class="casper-modal__sub">Manage your orders, saved addresses, and Casper VIP status.</p>
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--casper-line);padding:18px;border-radius:8px;margin-bottom:20px;text-align:left;">
          <div style="font-size:14px;margin-bottom:8px;"><strong>Email:</strong> ${user.email}</div>
          <div style="font-size:14px;margin-bottom:8px;"><strong>Member Status:</strong> <span style="color:var(--casper-green-ink);font-weight:bold;">21+ Verified Casper VIP ⭐</span></div>
          <div style="font-size:14px;"><strong>Reward Points:</strong> 450 Points ($4.50 reward)</div>
        </div>
        <button id="casper-logout-btn" class="casper-btn-primary" style="background:#ff4d4d;color:#fff;">Sign Out</button>
      `);
      document.getElementById('casper-logout-btn').addEventListener('click', function () {
        localStorage.removeItem('casper_logged_user');
        updateUserAccountUI();
        closeModal();
        if (window.showCasperAgeGate) window.showCasperAgeGate();
        showToast('Signed out successfully. Please confirm you are 21+ to continue.', 'info');
      });
    } else {
      openModal(`
        <h2 class="casper-modal__title">🔐 Casper Account Sign In</h2>
        <p class="casper-modal__sub">Sign in to your Casper Smoke Shop account or create a new account to unlock 20% OFF.</p>
        <div class="casper-modal-tabs">
          <button class="casper-modal-tab is-active" id="tab-login">Sign In</button>
          <button class="casper-modal-tab" id="tab-register">Create Account</button>
        </div>
        <form id="casper-account-form">
          <div class="casper-form-group" id="group-name" style="display:none;">
            <label>Full Name</label>
            <input type="text" class="casper-form-input" id="acct-name" placeholder="John Doe">
          </div>
          <div class="casper-form-group">
            <label>Email Address</label>
            <input type="email" class="casper-form-input" id="acct-email" placeholder="you@example.com" required>
          </div>
          <div class="casper-form-group">
            <label>Password</label>
            <input type="password" class="casper-form-input" id="acct-password" placeholder="••••••••" required>
          </div>
          <button type="submit" class="casper-btn-primary" id="acct-submit-btn">SIGN IN</button>
        </form>
      `);

      let mode = 'login';
      const tabLogin = document.getElementById('tab-login');
      const tabReg = document.getElementById('tab-register');
      const groupName = document.getElementById('group-name');
      const submitBtn = document.getElementById('acct-submit-btn');

      tabLogin.addEventListener('click', () => {
        mode = 'login';
        tabLogin.classList.add('is-active');
        tabReg.classList.remove('is-active');
        groupName.style.display = 'none';
        submitBtn.textContent = 'SIGN IN';
      });

      tabReg.addEventListener('click', () => {
        mode = 'register';
        tabReg.classList.add('is-active');
        tabLogin.classList.remove('is-active');
        groupName.style.display = 'block';
        submitBtn.textContent = 'CREATE ACCOUNT & UNLOCK 20% OFF';
      });

      document.getElementById('casper-account-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('acct-email').value;
        const name = mode === 'register' ? document.getElementById('acct-name').value || email.split('@')[0] : email.split('@')[0];

        const session = { name: name, email: email, date: new Date().toISOString() };
        localStorage.setItem('casper_logged_user', JSON.stringify(session));
        updateUserAccountUI();
        closeModal();
        showToast(`Welcome ${name}! You are signed in.`, 'success');
      });
    }
  }

  updateUserAccountUI();

  document.addEventListener('click', function (e) {
    const acctTarget = e.target.closest('.cc-acct, a[href*="account"]');
    if (acctTarget) {
      e.preventDefault();
      openAccountModal();
    }
  });

  // ==========================================
  // 8. PRODUCT QUICK VIEW MODAL
  // ==========================================
  function openQuickViewModal(prod) {
    let selectedFlavor = prod.flavors ? prod.flavors[0] : '';
    let selectedNic = prod.nics ? prod.nics[0] : '';

    openModal(`
      <div class="casper-qv-grid">
        <img class="casper-qv-img" src="${prod.image}" alt="${prod.title}">
        <div style="text-align:left;">
          <span class="casper-qv-badge">${prod.tag || prod.category}</span>
          <h2 style="font-size:20px;font-weight:700;margin:4px 0 10px;line-height:1.3;">${prod.title}</h2>
          <div style="font-size:13px;color:var(--casper-green-ink);font-weight:bold;margin-bottom:8px;">★ ${prod.rating || '5.0'} (120+ Adult Reviews)</div>
          <div class="casper-qv-price">$${prod.price.toFixed(2)}</div>
          <p style="font-size:13px;color:var(--casper-ink-soft);margin-bottom:16px;line-height:1.5;">${prod.desc}</p>
          
          ${prod.flavors && prod.flavors.length > 0 && prod.flavors[0] !== 'N/A' ? `
            <div style="font-size:12px;font-weight:bold;margin-bottom:6px;text-transform:uppercase;">Select Flavor:</div>
            <div class="casper-qv-options" id="qv-flavors">
              ${prod.flavors.map((f, i) => `<button type="button" class="casper-option-chip ${i === 0 ? 'is-selected' : ''}" data-val="${f}">${f}</button>`).join('')}
            </div>
          ` : ''}

          ${prod.nics && prod.nics.length > 0 && prod.nics[0] !== 'N/A' ? `
            <div style="font-size:12px;font-weight:bold;margin-bottom:6px;text-transform:uppercase;">Nicotine Strength:</div>
            <div class="casper-qv-options" id="qv-nics">
              ${prod.nics.map((n, i) => `<button type="button" class="casper-option-chip ${i === 0 ? 'is-selected' : ''}" data-val="${n}">${n}</button>`).join('')}
            </div>
          ` : ''}

          <button type="button" id="qv-add-cart-btn" class="casper-btn-primary" style="margin-top:14px;">ADD TO CART — $${prod.price.toFixed(2)}</button>
        </div>
      </div>
    `);

    // Wire option chips
    const flavorBox = document.getElementById('qv-flavors');
    if (flavorBox) {
      flavorBox.querySelectorAll('.casper-option-chip').forEach(chip => {
        chip.addEventListener('click', function () {
          flavorBox.querySelectorAll('.casper-option-chip').forEach(c => c.classList.remove('is-selected'));
          this.classList.add('is-selected');
          selectedFlavor = this.getAttribute('data-val');
        });
      });
    }

    const nicBox = document.getElementById('qv-nics');
    if (nicBox) {
      nicBox.querySelectorAll('.casper-option-chip').forEach(chip => {
        chip.addEventListener('click', function () {
          nicBox.querySelectorAll('.casper-option-chip').forEach(c => c.classList.remove('is-selected'));
          this.classList.add('is-selected');
          selectedNic = this.getAttribute('data-val');
        });
      });
    }

    document.getElementById('qv-add-cart-btn').addEventListener('click', function () {
      const existing = cart.find(i => i.title === prod.title && i.flavor === selectedFlavor && i.nic === selectedNic);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({
          id: 'prod_' + Date.now(),
          title: prod.title,
          price: prod.price,
          image: prod.image,
          flavor: selectedFlavor,
          nic: selectedNic,
          quantity: 1
        });
      }
      saveCart();
      closeModal();
      showToast(`Added "${prod.title}" to cart!`, 'success');
      openDrawer(cartDrawer, cartOpenBtn);
    });
  }

  // Intercept click on product cards to open Quick View
  document.addEventListener('click', function (e) {
    const card = e.target.closest('.cc-card, article');
    if (!card) return;

    const isDirectAddBtn = e.target.closest('.cc-card__btn');
    const titleEl = card.querySelector('.cc-card__title, h3, h4');
    const priceEl = card.querySelector('.cc-card__price, strong');
    const imgEl = card.querySelector('img');

    if (titleEl && !isDirectAddBtn) {
      const titleText = titleEl.textContent.trim();
      const matched = productCatalog.find(p => p.title.toLowerCase() === titleText.toLowerCase()) || {
        id: 'p_custom_' + Date.now(),
        title: titleText,
        price: priceEl ? parseFloat(priceEl.textContent.replace(/[^0-9.]/g, '')) || 19.99 : 19.99,
        image: imgEl ? imgEl.src : 'casper-mascot-logo.png',
        rating: 5.0,
        tag: 'CASPER EXCLUSIVE',
        flavors: ['Purple Rush', 'Lime Chill'],
        nics: ['50mg', '20mg'],
        desc: 'Premium authentic Casper Smoke Shop product. 21+ adult enjoyment with lab-tested purity.'
      };
      openQuickViewModal(matched);
    }
  });


  // ==========================================
  // 9. CASPER MEMBERSHIP + STORE LOCATOR
  // ==========================================
  const CASPER_FREE_SHIPPING_THRESHOLD = 200;
  const CASPER_OUT_OF_STATE_SHIPPING_FEE = 14.99; // Change this one value if the business uses another fee.

  function openMembershipModal() {
    const user = getUserSession();
    const requested = localStorage.getItem('casper_membership_requested') === '1';

    if (requested) {
      openModal(`
        <div class="casper-membership-modal">
          <div class="casper-membership-hero">
            <span class="casper-membership-star">★</span>
            <div>
              <span class="casper-modal-eyebrow">CASPER VIP MEMBERSHIP</span>
              <h2 class="casper-modal__title">REQUEST ALREADY RECEIVED</h2>
            </div>
          </div>
          <p class="casper-modal__sub">Your membership request is saved on this device. We’ll use the contact details you submitted for follow-up.</p>
          <div class="casper-membership-benefits">
            <div><strong>$15 OFF</strong><span>on a qualifying $200+ opening order</span></div>
            <div><strong>VIP DEALS</strong><span>Member-only promotions and offers</span></div>
            <div><strong>EARLY ACCESS</strong><span>Get access to selected new deals first</span></div>
          </div>
          <button type="button" class="casper-btn-primary" onclick="window.closeCasperModal()">DONE</button>
        </div>
      `);
      return;
    }

    openModal(`
      <div class="casper-membership-modal">
        <div class="casper-membership-hero">
          <span class="casper-membership-star">★</span>
          <div>
            <span class="casper-modal-eyebrow">CASPER VIP MEMBERSHIP</span>
            <h2 class="casper-modal__title">JOIN THE CASPER CLUB</h2>
          </div>
        </div>
        <p class="casper-modal__sub">Request to join the membership and receive member benefits.</p>

        <div class="casper-membership-benefits">
          <div><strong>$15 OFF</strong><span>when your qualifying opening order is $200+</span></div>
          <div><strong>VIP DEALS</strong><span>Member-only promotions and offers</span></div>
          <div><strong>EARLY ACCESS</strong><span>Selected new arrivals and special deals</span></div>
        </div>

        <form id="casper-membership-form" class="casper-membership-form">
          <div class="casper-form-group">
            <label>Full Name</label>
            <input type="text" class="casper-form-input" id="membership-name" value="${user ? user.name : ''}" placeholder="Your name" required>
          </div>
          <div class="casper-form-group">
            <label>Email Address</label>
            <input type="email" class="casper-form-input" id="membership-email" value="${user ? user.email : ''}" placeholder="you@example.com" required>
          </div>
          <div class="casper-form-group">
            <label>ZIP Code</label>
            <input type="text" class="casper-form-input" id="membership-zip" placeholder="90001" inputmode="numeric" maxlength="10" required>
          </div>
          <button type="submit" class="casper-btn-primary">REQUEST TO JOIN</button>
        </form>
      </div>
    `);

    const form = document.getElementById('casper-membership-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const request = {
          name: document.getElementById('membership-name').value.trim(),
          email: document.getElementById('membership-email').value.trim(),
          zip: document.getElementById('membership-zip').value.trim(),
          requestedAt: new Date().toISOString()
        };
        localStorage.setItem('casper_membership_requested', '1');
        localStorage.setItem('casper_membership_request', JSON.stringify(request));
        closeModal();
        showToast('Membership request received! Welcome to Casper VIP.', 'success');
      });
    }
  }

  function loadLeafletAssets() {
    return new Promise((resolve, reject) => {
      if (window.L) return resolve(window.L);

      const existingCss = document.querySelector('link[data-casper-leaflet]');
      if (!existingCss) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.dataset.casperLeaflet = '1';
        document.head.appendChild(link);
      }

      const existingScript = document.querySelector('script[data-casper-leaflet]');
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(window.L), { once: true });
        existingScript.addEventListener('error', reject, { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.async = true;
      script.dataset.casperLeaflet = '1';
      script.onload = () => window.L ? resolve(window.L) : reject(new Error('Leaflet failed to load'));
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function geocodeZip(zip) {
    const url = 'https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=us&postalcode=' + encodeURIComponent(zip);
    const response = await fetch(url, {
      headers: { 'Accept': 'application/json' }
    });
    if (!response.ok) throw new Error('ZIP lookup failed');
    const data = await response.json();
    if (!data.length) throw new Error('ZIP code not found');
    return {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon),
      display: data[0].display_name || zip
    };
  }

  async function findNearbyShops(lat, lon) {
    const query = `
      [out:json][timeout:20];
      (
        node(around:12000,${lat},${lon})["shop"="tobacco"];
        way(around:12000,${lat},${lon})["shop"="tobacco"];
        relation(around:12000,${lat},${lon})["shop"="tobacco"];
        node(around:12000,${lat},${lon})["shop"="vape"];
        way(around:12000,${lat},${lon})["shop"="vape"];
        relation(around:12000,${lat},${lon})["shop"="vape"];
      );
      out center tags;
    `;
    const endpoint = 'https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(query);
    const response = await fetch(endpoint, { headers: { 'Accept': 'application/json' } });
    if (!response.ok) throw new Error('Shop search failed');
    const data = await response.json();

    return (data.elements || []).map((item, index) => {
      const itemLat = item.lat ?? item.center?.lat;
      const itemLon = item.lon ?? item.center?.lon;
      const tags = item.tags || {};
      return {
        id: String(item.id || index),
        lat: Number(itemLat),
        lon: Number(itemLon),
        name: tags.name || tags.brand || 'Nearby Smoke Shop',
        address: [tags['addr:housenumber'], tags['addr:street'], tags['addr:city'], tags['addr:state'], tags['addr:postcode']].filter(Boolean).join(', ') || 'Address not listed',
        phone: tags.phone || '',
        website: tags.website || ''
      };
    }).filter(s => Number.isFinite(s.lat) && Number.isFinite(s.lon));
  }

  function openNearestShopModal() {
    openModal(`
      <div class="casper-shop-locator">
        <div class="casper-locator-head">
          <div>
            <span class="casper-modal-eyebrow">STORE LOCATOR</span>
            <h2 class="casper-modal__title">FIND A NEAREST SHOP</h2>
            <p class="casper-modal__sub">Enter your US ZIP code to find the nearest Casper Smoke Shop.</p>
          </div>
        </div>

        <form id="casper-shop-search-form" class="casper-shop-search-form">
          <input id="casper-shop-zip" class="casper-form-input" type="text"
                 inputmode="numeric" maxlength="10" placeholder="Enter ZIP code "
                 aria-label="ZIP code" required>
          <button class="casper-btn-primary" type="submit">FIND SHOP</button>
        </form>

        <div id="casper-shop-status" class="casper-shop-status" aria-live="polite">
          Enter your ZIP code to find a Casper Smoke Shop.
        </div>

        <div class="casper-shop-locator__layout">
          <div id="casper-shop-map" class="casper-shop-map" aria-label="Casper Smoke Shop map">
            <div class="casper-map-placeholder">Enter ZIP code 32726 to view the Casper Smoke Shop location.</div>
          </div>

          <div id="casper-shop-results" class="casper-shop-results">
            <div class="casper-shop-empty">The Casper Smoke Shop location will appear here.</div>
          </div>
        </div>
      </div>
    `);

    const form = document.getElementById('casper-shop-search-form');
    const status = document.getElementById('casper-shop-status');
    const results = document.getElementById('casper-shop-results');
    const mapEl = document.getElementById('casper-shop-map');

    // Official Casper Smoke Shop location requested for ZIP 32726.
    // Keep this local so the locator does NOT accidentally return unrelated
    // smoke/vape shops from OpenStreetMap/Overpass.
    const CASPER_STORE = {
      name: 'Casper Smoke Shop',
      address: '2105 E Orange Ave, Eustis, FL 32726, United States',
      zip: '32726',
      logo: 'casper-mascot-logo.png',
      mapQuery: '2105 E Orange Ave, Eustis, FL 32726, United States'
    };

    function renderCasperStore(store) {
      const q = encodeURIComponent(store.mapQuery);

      mapEl.innerHTML = `
        <div class="casper-store-map-wrap">
          <iframe
            title="${escapeHtml(store.name)} location map"
            class="casper-google-map-frame"
            src="https://www.google.com/maps?q=${q}&output=embed"
            loading="eager"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen>
          </iframe>

          <div class="casper-map-store-card">
            <img src="${escapeHtml(store.logo)}" alt="Casper Smoke Shop logo"
                 onerror="this.style.display='none'">
            <div>
              <strong>${escapeHtml(store.name)}</strong>
              <span>${escapeHtml(store.address)}</span>
              <a target="_blank" rel="noopener noreferrer"
                 href="https://www.google.com/maps/search/?api=1&query=${q}">
                 OPEN IN GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>
      `;

      results.innerHTML = `
        <article class="casper-shop-result casper-shop-result--featured is-selected">
          <div class="casper-shop-result__number">✓</div>
          <div class="casper-shop-result__body">
            <div class="casper-shop-result__brand">
              <img src="${escapeHtml(store.logo)}" alt="Casper Smoke Shop logo"
                   onerror="this.style.display='none'">
              <strong>${escapeHtml(store.name)}</strong>
            </div>
            <span>${escapeHtml(store.address)}</span>
            <span>ZIP: ${escapeHtml(store.zip)}</span>
            <button type="button" class="casper-shop-select">SELECT THIS SHOP</button>
          </div>
        </article>
      `;

      status.innerHTML = `<strong>Casper Smoke Shop found.</strong> Showing the exact store location for ZIP ${escapeHtml(store.zip)}.`;

      const selectBtn = results.querySelector('.casper-shop-select');
      if (selectBtn) {
        selectBtn.addEventListener('click', function () {
          localStorage.setItem('casper_selected_shop', JSON.stringify(store));
          closeModal();
          showToast(`${store.name} selected as your preferred shop.`, 'success');
          updateSelectedShopButton(store.name);
        });
      }
    }

    function showUnsupportedZipPopup(zip) {
      status.textContent = '';
      results.innerHTML = `
        <div class="casper-shop-empty">
          <strong>Casper Smoke Shop is not available for ZIP ${escapeHtml(zip)}</strong>
          <p>We currently have a Casper Smoke Shop location configured for ZIP 32726.</p>
          <p>Would you like to request a Casper Smoke Shop near your location?</p>
          <div class="casper-shop-request-actions">
            <a class="casper-shop-google" target="_blank" rel="noopener noreferrer"
               href="mailto:info@caspersmokeshop.com?subject=${encodeURIComponent('Request a Casper Smoke Shop near ZIP ' + zip)}">
              REQUEST A STORE
            </a>
          </div>
        </div>
      `;

      mapEl.innerHTML = `
        <div class="casper-map-placeholder casper-map-placeholder--message">
          <div class="casper-map-message-icon">⌖</div>
          <strong>No Casper Smoke Shop at this ZIP</strong>
          <span>ZIP ${escapeHtml(zip)} is not currently configured.</span>
        </div>
      `;

      openModal(`
        <div class="casper-shop-popup casper-shop-popup--official">
          <div class="casper-shop-popup__icon">⌖</div>
          <span class="casper-modal-eyebrow">STORE LOCATOR</span>
          <h2 class="casper-modal__title">NO CASPER SHOP NEARBY</h2>
          <p class="casper-shop-popup__lead">
            We’re sorry, but we don’t currently have a Casper Smoke Shop location near ZIP
            <strong>${escapeHtml(zip)}</strong>.
          </p>

          <div class="casper-shop-popup__notice">
            <strong>Looking for a Casper Smoke Shop in your area?</strong>
            <span>
              Request a store near your location, or contact our team to learn more about
              business and franchise opportunities.
            </span>
          </div>

          <div class="casper-shop-popup__actions">
            <a class="casper-btn-primary" target="_blank" rel="noopener noreferrer"
               href="mailto:info@caspersmokeshop.com?subject=${encodeURIComponent('Request a Casper Smoke Shop near ZIP ' + zip)}">
              REQUEST A STORE
            </a>
            <a class="casper-shop-popup__secondary" target="_blank" rel="noopener noreferrer"
               href="mailto:info@caspersmokeshop.com?subject=${encodeURIComponent('Casper Smoke Shop Business / Franchise Inquiry')}">
              BUSINESS &amp; FRANCHISE INQUIRY
            </a>
          </div>

          <button type="button" class="casper-shop-popup__close" id="casper-shop-popup-close">CLOSE</button>
        </div>
      `);
      const closeBtn = document.getElementById('casper-shop-popup-close');
      if (closeBtn) closeBtn.addEventListener('click', closeModal);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const zip = document.getElementById('casper-shop-zip').value.trim();

      if (!/^\d{5}(?:-\d{4})?$/.test(zip)) {
        status.textContent = 'Please enter a valid 5-digit US ZIP code.';
        return;
      }

      // Current configured Casper location:
      // 32726 -> 2105 E Orange Ave, Eustis, FL 32726, United States
      if (zip === '32726' || zip === '32726-0000') {
        renderCasperStore(CASPER_STORE);
        return;
      }

      // IMPORTANT: Do not return unrelated shops for other ZIP codes.
      showUnsupportedZipPopup(zip);
    });
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, function (char) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char];
    });
  }

  function updateSelectedShopButton(name) {
    const buttons = document.querySelectorAll('#casper-find-shop-btn, #casper-find-shop-main-btn, #casper-find-shop-mobile-btn');
    buttons.forEach(btn => {
      if (btn) btn.textContent = '✓ ' + (name ? name.slice(0, 28) : 'SHOP SELECTED');
    });
  }

  // Feature buttons.
  document.addEventListener('click', function (e) {
    if (e.target.closest('#casper-membership-btn, #casper-membership-main-btn, #casper-membership-mobile-btn')) {
      e.preventDefault();
      closeAllDrawers();
      openMembershipModal();
    }
    if (e.target.closest('#casper-find-shop-btn, #casper-find-shop-main-btn, #casper-find-shop-mobile-btn')) {
      e.preventDefault();
      closeAllDrawers();
      openNearestShopModal();
    }
  });

  try {
    const savedShop = JSON.parse(localStorage.getItem('casper_selected_shop') || 'null');
    if (savedShop?.name) updateSelectedShopButton(savedShop.name);
  } catch (e) {}

  // ==========================================
  // 9. MULTI-STEP CHECKOUT MODAL
  // ==========================================
  function openCheckoutModal() {
    const subtotal = getCartSubtotal();
    if (subtotal <= 0) {
      showToast('Your cart is empty.', 'info');
      return;
    }

    const discountAmount = subtotal * appliedDiscount;
    const shippingState = (localStorage.getItem('casper_shipping_state') || 'in-state').toLowerCase();
    const isInState = shippingState === 'in-state';
    const isFreeShipping = isInState && subtotal >= CASPER_FREE_SHIPPING_THRESHOLD;
    const shippingFee = isFreeShipping ? 0 : (isInState ? 9.99 : CASPER_OUT_OF_STATE_SHIPPING_FEE);
    const tax = (subtotal - discountAmount) * 0.08;
    const finalTotal = (subtotal - discountAmount) + shippingFee + tax;

    openModal(`
      <h2 class="casper-modal__title">🛍️ Secure Express Checkout</h2>
      <p class="casper-modal__sub">Fast 21+ Age Verified Shipping • Discreet Plain Packaging</p>

      <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:20px;text-align:left;">
        <form id="casper-checkout-form">
          <div class="casper-form-group">
            <label>Full Shipping Name</label>
            <input type="text" class="casper-form-input" id="chk-name" placeholder="John Doe" required>
          </div>
          <div class="casper-form-group">
            <label>Email Address for Tracking</label>
            <input type="email" class="casper-form-input" id="chk-email" placeholder="john@example.com" required>
          </div>
          <div class="casper-form-group">
            <label>Street Address (Discreet Delivery)</label>
            <input type="text" class="casper-form-input" id="chk-address" placeholder="123 Main St, Apt 4B" required>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div class="casper-form-group">
              <label>City</label>
              <input type="text" class="casper-form-input" id="chk-city" placeholder="Los Angeles" required>
            </div>
            <div class="casper-form-group">
              <label>ZIP Code</label>
              <input type="text" class="casper-form-input" id="chk-zip" placeholder="90001" required>
            </div>
          </div>
          <div class="casper-form-group">
            <label>Shipping Area</label>
            <select class="casper-form-select" id="chk-shipping-area">
              <option value="in-state" ${isInState ? 'selected' : ''}>In-State — Free over $200</option>
              <option value="out-of-state" ${!isInState ? 'selected' : ''}>Out of State — Additional shipping applies</option>
            </select>
            <small class="casper-shipping-note">In-state orders of $200+ qualify for free shipping. Out-of-state orders use the additional shipping charge shown below.</small>
          </div>

          <div class="casper-form-group">
            <label>Promo / Discount Code</label>
            <div style="display:flex;gap:8px;">
              <input type="text" class="casper-form-input" id="chk-promo-input" placeholder="CASPER20" value="${appliedDiscount > 0 ? 'CASPER20' : ''}">
              <button type="button" id="chk-apply-promo" style="padding:0 16px;background:var(--casper-line);color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:bold;">APPLY</button>
            </div>
          </div>
          <button type="submit" class="casper-btn-primary" style="margin-top:10px;">PLACE ORDER — $${finalTotal.toFixed(2)}</button>
        </form>

        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--casper-line);padding:18px;border-radius:10px;height:fit-content;">
          <h3 style="font-size:14px;font-weight:700;margin-bottom:12px;text-transform:uppercase;">Order Summary</h3>
          ${cart.map(i => `<div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span>${i.quantity}x ${i.title}</span><strong>$${(i.price * i.quantity).toFixed(2)}</strong></div>`).join('')}
          <hr style="border:0;border-top:1px solid var(--casper-line);margin:12px 0;">
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;"><span>Subtotal:</span><span>$${subtotal.toFixed(2)}</span></div>
          ${appliedDiscount > 0 ? `<div style="display:flex;justify-content:space-between;font-size:13px;color:var(--casper-green-ink);margin-bottom:4px;"><span>Discount (20% OFF):</span><span>-$${discountAmount.toFixed(2)}</span></div>` : ''}
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;"><span>Shipping:</span><span>${isFreeShipping ? '<strong style="color:var(--casper-green-ink);">FREE</strong>' : '$' + shippingFee.toFixed(2)}</span></div>
          <div class="casper-checkout-shipping-note">${isInState ? (isFreeShipping ? 'In-state free shipping unlocked at $200+.' : 'In-state: spend $' + Math.max(0, CASPER_FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2) + ' more to unlock free shipping.') : 'Out of state: additional shipping charge applies.'}</div>
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:8px;"><span>Estimated Tax:</span><span>$${tax.toFixed(2)}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:16px;font-weight:800;color:var(--casper-green-ink);border-top:1px dashed var(--casper-line);padding-top:8px;"><span>Total:</span><span>$${finalTotal.toFixed(2)}</span></div>
        </div>
      </div>
    `);

    const shippingArea = document.getElementById('chk-shipping-area');
    if (shippingArea) {
      shippingArea.addEventListener('change', function () {
        localStorage.setItem('casper_shipping_state', this.value);
        openCheckoutModal();
      });
    }

    document.getElementById('chk-apply-promo').addEventListener('click', function () {
      const code = document.getElementById('chk-promo-input').value.trim().toUpperCase();
      if (code === 'CASPER20') {
        appliedDiscount = 0.20;
        showToast('20% Discount Code CASPER20 Applied!', 'success');
        openCheckoutModal();
      } else if (code) {
        showToast('Invalid promo code. Try CASPER20', 'info');
      }
    });

    document.getElementById('casper-checkout-form').addEventListener('submit', function (e) {
      e.preventDefault();
      const orderNum = 'CSP-' + Math.floor(100000 + Math.random() * 900000);
      const name = document.getElementById('chk-name').value;
      const email = document.getElementById('chk-email').value;

      cart = [];
      saveCart();
      closeModal();

      openModal(`
        <div style="text-align:center;padding:10px;">
          <div style="font-size:48px;margin-bottom:10px;">🎉</div>
          <h2 class="casper-modal__title" style="justify-content:center;">Order Confirmed!</h2>
          <p class="casper-modal__sub">Thank you, <strong>${name}</strong>! Your order <strong>#${orderNum}</strong> has been placed.</p>
          <div style="background:rgba(0,255,135,0.1);border:1px solid var(--casper-green-dim);padding:16px;border-radius:8px;font-size:13px;color:var(--casper-green-ink);margin-bottom:20px;">
            📦 A confirmation email & tracking details have been sent to <strong>${email}</strong>. Estimated Delivery: 2-3 Business Days in discreet packaging.
          </div>
          <button type="button" class="casper-btn-primary" onclick="window.closeCasperModal()">CONTINUE SHOPPING</button>
        </div>
      `);
      showToast(`Order #${orderNum} placed successfully!`, 'success');
    });
  }

  // ==========================================
  // 10. SEARCH AUTOCOMPLETE SYSTEM
  // ==========================================
  const searchInputs = document.querySelectorAll('.cc-hsearch input, .cc-mnav__search input');
  searchInputs.forEach(input => {
    const parentForm = input.closest('form');
    if (!parentForm) return;
    parentForm.style.position = 'relative';

    let dropdown = parentForm.querySelector('#casper-search-results');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.id = 'casper-search-results';
      parentForm.appendChild(dropdown);
    }

    input.addEventListener('input', function () {
      const q = this.value.trim().toLowerCase();
      if (q.length < 2) {
        dropdown.style.display = 'none';
        return;
      }

      const matches = productCatalog.filter(p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
      if (matches.length === 0) {
        dropdown.innerHTML = `<div style="padding:12px;font-size:13px;color:var(--casper-ink-soft);">No products found for "${q}"</div>`;
      } else {
        dropdown.innerHTML = matches.map(m => `
          <div class="casper-search-item" data-id="${m.id}">
            <img src="${m.image}" alt="${m.title}">
            <div class="casper-search-item-info">
              <div class="casper-search-item-title">${m.title}</div>
              <div class="casper-search-item-price">$${m.price.toFixed(2)}</div>
            </div>
          </div>
        `).join('');

        dropdown.querySelectorAll('.casper-search-item').forEach(item => {
          item.addEventListener('click', function () {
            const pid = this.getAttribute('data-id');
            const target = productCatalog.find(p => p.id === pid);
            if (target) {
              dropdown.style.display = 'none';
              openQuickViewModal(target);
            }
          });
        });
      }
      dropdown.style.display = 'block';
    });

    document.addEventListener('click', function (e) {
      if (!parentForm.contains(e.target)) dropdown.style.display = 'none';
    });
  });

  // ==========================================
  // 11. CATEGORY FILTERING & NAVIGATION
  // ==========================================
  document.addEventListener('click', function (e) {
    const navLink = e.target.closest('.cc-nav a, .cc-mnav__group a, .cc-footer__col a');
    if (!navLink) return;

    const categoryText = navLink.textContent.trim();
    if (categoryText && !navLink.getAttribute('href').startsWith('http') && navLink.getAttribute('href') !== '/') {
      e.preventDefault();
      closeAllDrawers();

      const matchedProducts = productCatalog.filter(p => p.category.toLowerCase().includes(categoryText.toLowerCase()) || categoryText.toUpperCase() === 'SHOP ALL' || categoryText.toUpperCase() === 'DEALS');
      
      showToast(`Showing category: ${categoryText}`, 'info');

      // Scroll smoothly to main product section
      const mainSec = document.querySelector('main, section');
      if (mainSec) mainSec.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // ==========================================
  // 12. SUPPORT, CONTACT US, TRACK ORDER, FAQ MODALS
  // ==========================================
  document.addEventListener('click', function (e) {
    const contactBtn = e.target.closest('.cc-footer__contact-btn, a[href*="contact"], a[href*="Contact"]');
    if (contactBtn) {
      e.preventDefault();
      openModal(`
        <h2 class="casper-modal__title">✉️ Contact Casper Smoke Shop</h2>
        <p class="casper-modal__sub">Have a question about an order or product? Our support team is available 24/7.</p>
        <form id="casper-contact-form">
          <div class="casper-form-group">
            <label>Your Name</label>
            <input type="text" class="casper-form-input" placeholder="John Doe" required>
          </div>
          <div class="casper-form-group">
            <label>Your Email</label>
            <input type="email" class="casper-form-input" placeholder="john@example.com" required>
          </div>
          <div class="casper-form-group">
            <label>Message</label>
            <textarea class="casper-form-textarea" placeholder="How can we help you today?" required></textarea>
          </div>
          <button type="submit" class="casper-btn-primary">SEND MESSAGE</button>
        </form>
      `);
      document.getElementById('casper-contact-form').addEventListener('submit', function (evt) {
        evt.preventDefault();
        closeModal();
        showToast('Thank you! Your message has been sent to support.', 'success');
      });
    }

    const trackBtn = e.target.closest('a[href*="Track"], a[href*="track"]');
    if (trackBtn) {
      e.preventDefault();
      openModal(`
        <h2 class="casper-modal__title">📦 Track Your Order</h2>
        <p class="casper-modal__sub">Enter your Order # and Email address to view real-time shipment status.</p>
        <form id="casper-track-form">
          <div class="casper-form-group">
            <label>Order Number</label>
            <input type="text" class="casper-form-input" placeholder="CSP-89421" required>
          </div>
          <div class="casper-form-group">
            <label>Email Address</label>
            <input type="email" class="casper-form-input" placeholder="you@example.com" required>
          </div>
          <button type="submit" class="casper-btn-primary">TRACK SHIPMENT</button>
        </form>
      `);
      document.getElementById('casper-track-form').addEventListener('submit', function (evt) {
        evt.preventDefault();
        closeModal();
        openModal(`
          <h2 class="casper-modal__title">🚚 Shipment Status: In Transit</h2>
          <p class="casper-modal__sub">Tracking # <strong>9400 1000 0000 0000 0000 00</strong> (USPS Priority Mail)</p>
          <div style="background:rgba(255,255,255,0.03);border:1px solid var(--casper-line);padding:16px;border-radius:8px;font-size:13px;text-align:left;">
            <div style="color:var(--casper-green-ink);font-weight:bold;margin-bottom:6px;">● Out for Delivery Today</div>
            <div style="color:var(--casper-ink-soft);">Package is arriving in a plain, discrete box with no external branding.</div>
          </div>
        `);
      });
    }

    const faqBtn = e.target.closest('a[href*="FAQ"], a[href*="faq"]');
    if (faqBtn) {
      e.preventDefault();
      openModal(`
        <h2 class="casper-modal__title">❓ Frequently Asked Questions</h2>
        <p class="casper-modal__sub">Everything you need to know about shopping with Casper Smoke Shop.</p>
        
        <div class="casper-faq-item">
          <button class="casper-faq-question">What age do I need to be to order? <span>+</span></button>
          <div class="casper-faq-answer">All customers must be 21 years of age or older. We verify age during checkout in compliance with federal laws.</div>
        </div>
        <div class="casper-faq-item">
          <button class="casper-faq-question">Is packaging discreet? <span>+</span></button>
          <div class="casper-faq-answer">Yes! All orders ship in plain brown or white boxes with no smoke shop branding on the outside label for complete privacy.</div>
        </div>
        <div class="casper-faq-item">
          <button class="casper-faq-question">How do I get Free Shipping? <span>+</span></button>
          <div class="casper-faq-answer">Orders $49 and above automatically qualify for FREE standard shipping across the United States.</div>
        </div>
      `);
      document.querySelectorAll('.casper-faq-question').forEach(q => {
        q.addEventListener('click', function () {
          const item = this.closest('.casper-faq-item');
          item.classList.toggle('is-open');
        });
      });
    }

    const wholesaleBtn = e.target.closest('a[href*="distributor"], a[href*="Wholesale"]');
    if (wholesaleBtn) {
      e.preventDefault();
      openModal(`
        <h2 class="casper-modal__title">🤝 Wholesale & B2B Application</h2>
        <p class="casper-modal__sub">Partner with Casper Group for factory-direct wholesale pricing on premium vapes & glass.</p>
        <form id="casper-b2b-form">
          <div class="casper-form-group">
            <label>Business Name</label>
            <input type="text" class="casper-form-input" placeholder="Smoke Shop LLC" required>
          </div>
          <div class="casper-form-group">
            <label>Resale Tax ID / License #</label>
            <input type="text" class="casper-form-input" placeholder="TAX-8941209" required>
          </div>
          <div class="casper-form-group">
            <label>Contact Email</label>
            <input type="email" class="casper-form-input" placeholder="orders@yourshop.com" required>
          </div>
          <button type="submit" class="casper-btn-primary">SUBMIT WHOLESALE APPLICATION</button>
        </form>
      `);
      document.getElementById('casper-b2b-form').addEventListener('submit', function (evt) {
        evt.preventDefault();
        closeModal();
        showToast('Wholesale application received! Our sales team will reach out in 24h.', 'success');
      });
    }
  });

  // Topbar Coupon Click-to-Copy
  document.addEventListener('click', function (e) {
    if (e.target.textContent.includes('CASPER20')) {
      try {
        navigator.clipboard.writeText('CASPER20');
        showToast('Coupon code CASPER20 copied to clipboard!', 'success');
      } catch (err) {}
    }
  });

  // ==========================================
  // 13. TOAST NOTIFICATION ENGINE
  // ==========================================
  function showToast(message, type = 'info') {
    let container = document.getElementById('casper-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'casper-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `casper-toast casper-toast--${type}`;

    let icon = `<svg class="casper-toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>`;
    if (type === 'info') {
      icon = `<svg class="casper-toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg>`;
    }

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'casperToastOut 0.3s ease forwards';
      setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 300);
    }, 3200);
  }

  window.showToast = showToast;
});