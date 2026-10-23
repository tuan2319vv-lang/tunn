(function () {
  'use strict';

  /* ============ 1. CSS ============ */
  const CSS = `
    :root{--bg:#090d18;--panel:#11182a;--panel2:#151e33;--line:#26324c;--text:#f5f7ff;--muted:#94a0bd;--purple:#8457ff;--cyan:#30d8f2;--green:#43d6a0;--red:#ff6d86}
    *{box-sizing:border-box}body{margin:0;background:radial-gradient(ellipse at top,#172044 0,#090d18 52%);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}button,input,select,textarea{font:inherit}button{cursor:pointer}.app{max-width:520px;min-height:100dvh;margin:auto;padding:18px 16px 100px}.top{display:flex;align-items:center;gap:12px;margin:7px 0 20px}.logo{width:48px;height:48px;flex:none;border-radius:16px;display:grid;place-items:center;font-size:24px;font-weight:900;background:linear-gradient(135deg,var(--purple),var(--cyan));box-shadow:0 8px 25px #6946ff45}.brand{font-weight:900;letter-spacing:.5px;font-size:16px}.sub{color:var(--muted);font-size:10px;letter-spacing:1.5px;margin-top:4px}.pill{margin-left:auto;border:1px solid #2c765f;background:#12392f;color:#80f0c7;border-radius:30px;padding:6px 9px;font-size:10px}.hero{border:1px solid #3b3c77;border-radius:22px;padding:20px;background:linear-gradient(130deg,#2a1858,#142c51 75%,#102b3b);position:relative;overflow:hidden}.hero:after{content:"";position:absolute;width:150px;height:150px;right:-50px;top:-55px;border-radius:50%;background:#9274ff25}.eyebrow{font-size:12px;color:#c6c3ff}.balance{font-size:30px;font-weight:900;margin:9px 0 17px}.actions{display:flex;gap:9px;flex-wrap:wrap}.btn{border:0;border-radius:12px;padding:12px 14px;background:linear-gradient(100deg,var(--purple),#5c70ff);color:#fff;font-weight:800;font-size:13px}.btn.secondary{background:#28344e;border:1px solid #3a4969}.btn.ghost{background:transparent;border:1px solid var(--line);color:#dbe1f6}.btn.danger{background:#552338;border:1px solid #85334e}.section-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:26px 0 13px}.section-head h2,.page-title{font-size:17px;margin:0}.muted{color:var(--muted)}.tiny{font-size:11px}.search{display:flex;gap:8px;margin:0 0 13px}.search input,.field,input,select,textarea{width:100%;min-width:0;padding:12px;border:1px solid var(--line);border-radius:12px;background:#0d1322;color:var(--text);outline:none}.search input:focus,input:focus,select:focus,textarea:focus{border-color:var(--purple)}.chips{display:flex;gap:8px;overflow:auto;padding-bottom:4px}.chip{white-space:nowrap;border:1px solid var(--line);background:#10182a;color:#b9c3dc;border-radius:30px;padding:8px 12px;font-size:12px}.chip.active{background:#332363;border-color:#7655e7;color:#fff}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:11px}.product{border:1px solid var(--line);border-radius:17px;background:linear-gradient(160deg,#151d31,#0f1524);padding:13px;min-width:0}.product-art{height:86px;border-radius:12px;background:linear-gradient(135deg,#24204d,#12354a);display:grid;place-items:center;font-size:35px;margin-bottom:12px}.product h3{font-size:13px;line-height:1.35;margin:0 0 6px}.product .desc{font-size:11px;color:var(--muted);line-height:1.5;min-height:31px}.price{font-size:15px;font-weight:900;margin:10px 0}.product .btn{width:100%;padding:10px 7px;font-size:12px}.panel{padding:16px;background:var(--panel);border:1px solid var(--line);border-radius:17px;margin-top:13px}.row{display:flex;align-items:center;justify-content:space-between;gap:10px}.row+.row{margin-top:12px}.page{display:none}.page.show{display:block}.field-label{display:block;font-size:12px;color:#b9c3dc;margin:13px 0 7px}.notice{font-size:12px;color:#c6baff;line-height:1.5;margin-top:12px}.empty{text-align:center;padding:28px 12px;color:var(--muted);font-size:13px}.order{padding:12px 0;border-bottom:1px solid var(--line)}.order:last-child{border-bottom:0}.status{font-size:10px;padding:5px 8px;border-radius:20px;background:#2b2949;color:#c9bdff}.nav{position:fixed;z-index:5;bottom:0;left:50%;transform:translateX(-50%);width:min(520px,100%);padding:10px 9px calc(10px + env(safe-area-inset-bottom));display:flex;justify-content:space-around;background:#0b1120ed;backdrop-filter:blur(18px);border-top:1px solid #28324a}.nav button{flex:1;background:none;border:0;color:#8d9ab8;font-size:10px;padding:5px 2px}.nav button span{display:block;font-size:19px;margin-bottom:4px}.nav button.active{color:#b6a0ff}.modal-backdrop{position:fixed;inset:0;z-index:10;background:#000b;display:none;align-items:flex-end;justify-content:center}.modal-backdrop.show{display:flex}.modal{width:min(520px,100%);max-height:85dvh;overflow:auto;background:#11182a;border:1px solid var(--line);border-radius:23px 23px 0 0;padding:20px 17px calc(24px + env(safe-area-inset-bottom))}.modal h2{font-size:18px;margin:0 0 12px}.close-row{display:flex;justify-content:space-between;align-items:center}.close{border:0;background:#26324b;color:white;border-radius:10px;padding:8px 11px}.toast{position:fixed;z-index:20;left:50%;bottom:92px;transform:translateX(-50%);background:#242d43;border:1px solid #475777;color:#fff;padding:11px 15px;border-radius:12px;max-width:90%;font-size:12px;display:none}.toast.show{display:block}.footer-note{font-size:10px;line-height:1.5;color:#74819e;text-align:center;margin:24px 0 5px}@media(min-width:440px){.product-art{height:105px}}
  `;

  /* ============ 2. HTML ============ */
  const HTML = `
    <div class="app">
      <header class="top">
        <div class="logo">N</div>
        <div><div class="brand">NDUY PRIME STORE</div><div class="sub">DIGITAL STORE · MINI APP DEMO</div></div>
        <div class="pill">● DEMO</div>
      </header>

      <main>
        <section id="home" class="page show">
          <div class="hero">
            <div class="eyebrow">SỐ DƯ TÀI KHOẢN DEMO</div>
            <div class="balance" id="balance">0đ</div>
            <div class="actions">
              <button class="btn" onclick="navigate('deposit')">＋ Nạp tiền</button>
              <button class="btn secondary" onclick="navigate('orders')">▤ Đơn hàng</button>
            </div>
          </div>
          <div class="section-head"><h2>✦ Danh mục sản phẩm</h2><span class="tiny muted" id="productCount">6 sản phẩm</span></div>
          <div class="search"><input id="search" placeholder="Tìm sản phẩm..." oninput="renderProducts()"><button class="btn secondary" onclick="document.getElementById('search').value='';renderProducts()">Xóa</button></div>
          <div class="chips" id="chips"></div>
          <div class="grid" id="products"></div>
          <div class="panel"><div class="row"><div><b>🎧 Cần hỗ trợ?</b><div class="muted tiny" style="margin-top:5px">Liên hệ quản trị viên của cửa hàng</div></div><button class="btn ghost" onclick="toast('Bản demo chưa cấu hình liên hệ hỗ trợ.')">Hỗ trợ</button></div></div>
          <div class="footer-note">Giao diện minh họa độc lập. Không phải source gốc của bot Telegram.</div>
        </section>

        <section id="deposit" class="page">
          <div class="section-head"><h2 class="page-title">Nạp tiền</h2><button class="btn ghost" onclick="navigate('home')">Quay lại</button></div>
          <div class="panel">
            <div class="muted tiny">Số dư hiện tại</div><div class="balance" id="depositBalance" style="font-size:25px;margin:8px 0">0đ</div>
            <label class="field-label" for="amount">Số tiền muốn nạp (VNĐ)</label>
            <input id="amount" type="number" min="1000" step="1000" placeholder="Ví dụ: 50000">
            <label class="field-label" for="method">Phương thức thanh toán</label>
            <select id="method"><option value="bank">Chuyển khoản ngân hàng (demo)</option><option value="manual">Xác nhận thủ công (demo)</option></select>
            <button class="btn" style="width:100%;margin-top:14px" onclick="createDeposit()">Tạo yêu cầu nạp tiền</button>
            <div class="notice">Demo chỉ tạo yêu cầu giả lập. Không thực hiện giao dịch và không tự cộng số dư thật.</div>
          </div>
          <div class="panel"><h3 style="margin:0 0 10px;font-size:14px">Yêu cầu gần đây</h3><div id="depositHistory" class="empty">Chưa có yêu cầu nạp tiền.</div></div>
        </section>

        <section id="orders" class="page">
          <div class="section-head"><h2 class="page-title">Đơn hàng của tôi</h2><button class="btn ghost" onclick="navigate('home')">Mua hàng</button></div>
          <div class="panel" id="orderList"><div class="empty">Bạn chưa có đơn hàng.</div></div>
        </section>

        <section id="profile" class="page">
          <div class="section-head"><h2 class="page-title">Hồ sơ</h2></div>
          <div class="panel">
            <div class="row"><div class="logo">👤</div><div style="flex:1"><b>Khách demo</b><div class="muted tiny" style="margin-top:5px">Chưa kết nối tài khoản Telegram</div></div><span class="status">GUEST</span></div>
            <div class="row" style="margin-top:20px"><span class="muted">Số dư demo</span><b id="profileBalance">0đ</b></div>
            <div class="row"><span class="muted">Số đơn hàng</span><b id="profileOrders">0</b></div>
            <div class="row"><span class="muted">Mã khách</span><b>DEMO-0001</b></div>
          </div>
          <div class="panel">
            <button class="btn ghost" style="width:100%;margin-bottom:9px" onclick="navigate('orders')">Lịch sử đơn hàng</button>
            <button class="btn ghost" style="width:100%;margin-bottom:9px" onclick="navigate('deposit')">Lịch sử nạp tiền</button>
            <button class="btn danger" style="width:100%" onclick="resetDemo()">Đặt lại dữ liệu demo</button>
          </div>
          <div class="notice">Thông tin hồ sơ và số dư trên trang này chỉ được lưu trong trình duyệt hiện tại.</div>
        </section>
      </main>
    </div>

    <nav class="nav">
      <button data-page="home" class="active" onclick="navigate('home')"><span>⌂</span>Trang chủ</button>
      <button data-page="orders" onclick="navigate('orders')"><span>▤</span>Đơn hàng</button>
      <button data-page="deposit" onclick="navigate('deposit')"><span>＋</span>Nạp tiền</button>
      <button data-page="profile" onclick="navigate('profile')"><span>♙</span>Hồ sơ</button>
    </nav>

    <div class="modal-backdrop" id="modal" onclick="if(event.target===this)closeModal()">
      <div class="modal">
        <div class="close-row"><h2 id="modalTitle">Chi tiết sản phẩm</h2><button class="close" onclick="closeModal()">Đóng ✕</button></div>
        <div id="modalBody"></div>
      </div>
    </div>
    <div class="toast" id="toast"></div>
  `;

  /* ============ 3. LOGIC ============ */
  const catalog = [
    {id:'key',name:'Key Game',category:'Key Game',icon:'🔑',price:50000,desc:'Mã kích hoạt sản phẩm kỹ thuật số (demo).'},
    {id:'account',name:'Tài khoản Game',category:'Tài khoản',icon:'🎮',price:100000,desc:'Danh mục tài khoản mẫu, chưa có hàng thật.'},
    {id:'service',name:'Dịch vụ Game',category:'Dịch vụ',icon:'⚡',price:30000,desc:'Dịch vụ hỗ trợ theo danh mục cửa hàng.'},
    {id:'member',name:'Gói thành viên',category:'Gói thành viên',icon:'💎',price:150000,desc:'Gói thành viên minh họa giao diện.'},
    {id:'support',name:'Gói hỗ trợ',category:'Dịch vụ',icon:'🛠️',price:20000,desc:'Gói hỗ trợ demo, chưa kết nối backend.'},
    {id:'gift',name:'Thẻ quà tặng',category:'Key Game',icon:'🎁',price:25000,desc:'Sản phẩm mẫu để thử chức năng đặt hàng.'}
  ];
  let category = 'Tất cả', orders = [], deposits = [];
  const fmt = n => new Intl.NumberFormat('vi-VN').format(n) + 'đ';

  function toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg; el.classList.add('show');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  function navigate(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('show'));
    document.getElementById(page).classList.add('show');
    document.querySelectorAll('.nav button').forEach(b => b.classList.toggle('active', b.dataset.page === page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderAll();
  }

  function renderChips() {
    const cats = ['Tất cả', ...new Set(catalog.map(p => p.category))];
    document.getElementById('chips').innerHTML = cats.map(c =>
      `<button class="chip ${c === category ? 'active' : ''}" onclick="setCategory('${c.replace(/'/g, "\\'")}')">${c}</button>`
    ).join('');
  }

  function setCategory(c) { category = c; renderProducts(); renderChips(); }

  function renderProducts() {
    const q = document.getElementById('search').value.toLowerCase().trim();
    const list = catalog.filter(p =>
      (category === 'Tất cả' || p.category === category) &&
      (p.name + ' ' + p.desc + ' ' + p.category).toLowerCase().includes(q)
    );
    document.getElementById('productCount').textContent = list.length + ' sản phẩm';
    document.getElementById('products').innerHTML = list.length
      ? list.map(p => `<article class="product"><div class="product-art">${p.icon}</div><h3>${p.name}</h3><div class="desc">${p.desc}</div><div class="price">${fmt(p.price)}</div><button class="btn" onclick="openProduct('${p.id}')">Xem chi tiết</button></article>`).join('')
      : '<div class="empty" style="grid-column:1/-1">Không tìm thấy sản phẩm.</div>';
  }

  function openProduct(id) {
    const p = catalog.find(x => x.id === id);
    document.getElementById('modalTitle').textContent = p.name;
    document.getElementById('modalBody').innerHTML =
      `<div class="product-art" style="height:120px;font-size:48px">${p.icon}</div>` +
      `<p class="muted" style="line-height:1.6">${p.desc}</p>` +
      `<div class="row"><span class="muted">Giá demo</span><b style="font-size:20px">${fmt(p.price)}</b></div>` +
      `<label class="field-label">Số lượng</label><input id="qty" type="number" min="1" max="99" value="1">` +
      `<button class="btn" style="width:100%;margin-top:14px" onclick="placeOrder('${p.id}')">Tạo đơn hàng demo</button>` +
      `<div class="notice">Không có giao dịch thật hoặc giao hàng tự động trong bản demo.</div>`;
    document.getElementById('modal').classList.add('show');
  }

  function closeModal() { document.getElementById('modal').classList.remove('show'); }

  function placeOrder(id) {
    const p = catalog.find(x => x.id === id);
    const qty = Math.max(1, Math.min(99, Number(document.getElementById('qty').value) || 1));
    orders.unshift({
      id: 'DEMO-' + String(Date.now()).slice(-7),
      name: p.name, qty, total: p.price * qty,
      status: 'Chờ xử lý (demo)',
      date: new Date().toLocaleString('vi-VN')
    });
    closeModal(); renderAll();
    toast('Đã tạo đơn hàng demo. Chưa thanh toán.');
    navigate('orders');
  }

  function createDeposit() {
    const amount = Number(document.getElementById('amount').value);
    if (!Number.isFinite(amount) || amount < 1000) { toast('Nhập số tiền tối thiểu 1.000đ.'); return; }
    deposits.unshift({
      id: 'NAP-' + String(Date.now()).slice(-6),
      amount,
      method: document.getElementById('method').value === 'bank' ? 'Chuyển khoản (demo)' : 'Thủ công (demo)',
      status: 'Chờ xác nhận (demo)',
      date: new Date().toLocaleString('vi-VN')
    });
    document.getElementById('amount').value = '';
    renderAll();
    toast('Đã tạo yêu cầu demo; chưa có thanh toán thật.');
  }

  function renderOrders() {
    const el = document.getElementById('orderList');
    el.innerHTML = orders.length
      ? orders.map(o => `<div class="order"><div class="row"><b>${o.name} × ${o.qty}</b><span class="status">${o.status}</span></div><div class="row tiny muted" style="margin-top:7px"><span>${o.id} · ${o.date}</span><b>${fmt(o.total)}</b></div></div>`).join('')
      : '<div class="empty">Bạn chưa có đơn hàng.</div>';
    document.getElementById('profileOrders').textContent = orders.length;
  }

  function renderDeposits() {
    document.getElementById('depositHistory').innerHTML = deposits.length
      ? deposits.map(d => `<div class="order"><div class="row"><b>${fmt(d.amount)}</b><span class="status">${d.status}</span></div><div class="tiny muted" style="margin-top:7px">${d.id} · ${d.method} · ${d.date}</div></div>`).join('')
      : '<div class="empty">Chưa có yêu cầu nạp tiền.</div>';
  }

  function renderAll() {
    document.getElementById('balance').textContent = '0đ';
    document.getElementById('depositBalance').textContent = '0đ';
    document.getElementById('profileBalance').textContent = '0đ';
    renderOrders(); renderDeposits();
  }

  function resetDemo() {
    if (confirm('Xóa toàn bộ đơn hàng và yêu cầu demo?')) {
      orders = []; deposits = []; renderAll();
      toast('Đã đặt lại dữ liệu demo.');
    }
  }

  /* ============ 4. INIT ============ */
  function ensureMeta() {
    let vp = document.querySelector('meta[name="viewport"]');
    if (!vp) {
      vp = document.createElement('meta');
      vp.name = 'viewport';
      document.head.appendChild(vp);
    }
    if (!vp.content.includes('viewport-fit=cover')) {
      vp.content = (vp.content || 'width=device-width, initial-scale=1') + ', viewport-fit=cover';
    }
    if (!document.querySelector('meta[name="theme-color"]')) {
      const tc = document.createElement('meta');
      tc.name = 'theme-color';
      tc.content = '#090d18';
      document.head.appendChild(tc);
    }
  }

  function init() {
    ensureMeta();
    if (!document.getElementById('nduy-style')) {
      const style = document.createElement('style');
      style.id = 'nduy-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }
    let root = document.getElementById('nduy-root');
    if (!root) {
      root = document.createElement('div');
      root.id = 'nduy-root';
      document.body.appendChild(root);
    }
    root.innerHTML = HTML;
    window.navigate = navigate;
    window.setCategory = setCategory;
    window.renderProducts = renderProducts;
    window.openProduct = openProduct;
    window.closeModal = closeModal;
    window.placeOrder = placeOrder;
    window.createDeposit = createDeposit;
    window.resetDemo = resetDemo;
    window.toast = toast;
    renderChips();
    renderProducts();
    renderAll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
