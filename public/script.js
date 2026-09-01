// ================================================================
// 1. FIREBASE KONFIGURASI & INISIALISASI
// ================================================================
const firebaseConfig = {
    apiKey: "AIzaSyDRK86XOhsnM_vLNi7A_A18xVbJf-lI4v0",
    authDomain: "kontrakan-2026.firebaseapp.com",
    projectId: "kontrakan-2026",
    storageBucket: "kontrakan-2026.firebasestorage.app",
    messagingSenderId: "878269423150",
    appId: "1:878269423150:web:585dd45823d44769e7c9bf"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ================================================================
// 2. DATA DEFAULT (PEMASUKAN & PENGELUARAN)
// ================================================================
let EXPENSES = {
    Jan: [
        { desc: 'AIR (14&22 JAN 26)', amount: 400000 },
        { desc: 'KASI MB YUTI', amount: 200000 },
        { desc: 'ANG Januari', amount: 0 },
        { desc: 'MAS FIRMAN', amount: 50000 },
        { desc: 'PIPA DAPUR', amount: 25000 },
        { desc: 'lampu dan tongkat', amount: 125000 },
        { desc: 'pompa pendorong lt 2', amount: 500000 },
    ],
    Feb: [
        { desc: 'AIR (10 FEB 26)', amount: 200000 },
        { desc: 'KASI MB YUTI', amount: 200000 },
        { desc: 'ANG FEBRUARI', amount: 7900000 },
        { desc: 'MAS FIRMAN', amount: 50000 },
    ],
    Mar: [
        { desc: 'AIR (2&24MARET 26)', amount: 400000 },
        { desc: 'KASI MB YUTI', amount: 200000 },
        { desc: 'ANG MARET', amount: 7900000 },
        { desc: 'MAS FIRMAN', amount: 50000 },
        { desc: 'renov', amount: 632000 },
    ],
    Apr: [
        { desc: 'AIR (APRIL 26)', amount: 200000 },
        { desc: 'KASI MB YUTI', amount: 200000 },
        { desc: 'ANG APRIL', amount: 7900000 },
        { desc: 'MAS FIRMAN', amount: 50000 },
        { desc: 'wastafel', amount: 55000 },
    ],
    Mei: [
        { desc: 'AIR (11mei&20mei26)', amount: 400000 },
        { desc: 'KASI MB YUTI', amount: 200000 },
        { desc: 'ANG MEI', amount: 7900000 },
        { desc: 'MAS FIRMAN', amount: 50000 },
        { desc: 'pajak', amount: 630000 },
    ],
    Jun: [
        { desc: 'AIR (juni)', amount: 400000 },
        { desc: 'KASI MB YUTI', amount: 200000 },
        { desc: 'ANG JUNI', amount: 7900000 },
        { desc: 'MAS FIRMAN', amount: 50000 },
    ],
    Jul: [
        { desc: 'AIR (juli)', amount: 400000 },
        { desc: 'KASI MB YUTI', amount: 200000 },
        { desc: 'ANG JULI', amount: 7900000 },
        { desc: 'MAS FIRMAN', amount: 50000 },
        { desc: 'renov 1 kontrakan', amount: 1200000 },
        { desc: 'renov tgl 21', amount: 225000 },
    ],
    Agt: [
        { desc: 'AIR (agustus)', amount: 400000 },
        { desc: 'KASI MB YUTI', amount: 200000 },
        { desc: 'ANG JULI (agustus)', amount: 7900000 },
        { desc: 'MAS FIRMAN', amount: 50000 },
        { desc: '17 agustus RT', amount: 300000 },
    ],
};

let INCOME = {
    Jan: {
        'BU IPAH': 800000,
        'MB YUTI': 1000000,
        'BU YUNI': 800000,
        'BU CITRA': 800000,
        'RAHMAT': 800000,
        'BU SUSANTI': 1300000,
        'PERI PALDI': 400000,
        'ZAKARIA': 800000,
        'Bu Tika': 800000,
        'KHADAR OMAR': 800000,
        'SISA PENCAIRAN': 1061000,
    },
    Feb: {
        'BU IPAH': 800000,
        'MB YUTI': 1000000,
        'BU YUNI': 800000,
        'BU CITRA': 800000,
        'RAHMAT': 800000,
        'BU SUSANTI': 1300000,
        'PERI PALDI': 400000,
        'ZAKARIA': 800000,
        'Bu Tika': 800000,
        'KHADAR OMAR': 800000,
    },
    Mar: {
        'BU IPAH': 800000,
        'MB YUTI': 1000000,
        'BU YUNI': 800000,
        'BU CITRA': 800000,
        'RAHMAT': 800000,
        'BU SUSANTI': 1300000,
        'PERI PALDI': 400000,
        'ZAKARIA': 800000,
        'Bu Tika': 800000,
        'KHADAR OMAR': 0,
    },
    Apr: {
        'BU IPAH': 800000,
        'MB YUTI': 1000000,
        'BU YUNI': 800000,
        'BU CITRA': 800000,
        'RAHMAT': 800000,
        'BU SUSANTI': 1300000,
        'PERI PALDI': 400000,
        'ZAKARIA': 800000,
        'Bu Tika': 800000,
        'SITI NURHALIMAH': 800000,
    },
    Mei: {
        'BU IPAH': 800000,
        'MB YUTI': 1050000,
        'BU YUNI': 800000,
        'BU CITRA': 800000,
        'RAHMAT': 800000,
        'BU SUSANTI': 1350000,
        'PERI PALDI': 450000,
        'ZAKARIA': 800000,
        'Bu Tika': 800000,
        'SITI NURHALIMAH': 800000,
    },
    Jun: {
        'BU IPAH': 850000,
        'MB YUTI': 1000000,
        'BU YUNI': 850000,
        'BU CITRA': 0,
        'RAHMAT': 800000,
        'BU SUSANTI': 1350000,
        'PERI PALDI': 450000,
        'ZAKARIA': 850000,
        'Bu Tika': 850000,
        'SITI NURHALIMAH': 850000,
    },
    Jul: {
        'BU IPAH': 850000,
        'MB YUTI': 1000000,
        'BU YUNI': 850000,
        'RAHMAT': 800000,
        'BU SUSANTI': 1350000,
        'PERI PALDI': 450000,
        'ZAKARIA': 850000,
        'Bu Tika': 900000,
        'SITI NURHALIMAH': 850000,
        'NAIMUL': 850000,
    },
    Agt: {
        'BU IPAH': 850000,
        'MB YUTI': 0,
        'BU YUNI': 0,
        'RAHMAT': 900000,
        'BU SUSANTI': 0,
        'PERI PALDI': 0,
        'ZAKARIA': 0,
        'Bu Tika': 0,
        'SITI NURHALIMAH': 850000,
        'NAIMUL': 850000,
    },
};

// ================================================================
// 3. VARIABEL GLOBAL
// ================================================================
let dataLoaded = false;
let openingBalance = 153584;
let deletedTenants = JSON.parse(localStorage.getItem('deletedTenants') || '[]');
const MONTH_ORDER = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'];

// ================================================================
// 4. FUNGSI UTILITAS
// ================================================================
function fmt(n) {
    if (n === undefined || n === null || isNaN(n)) return 'Rp0';
    return 'Rp' + Math.round(n).toLocaleString('id-ID');
}

function getSortedMonths(months) {
    const list = months ? [...months] : Object.keys(INCOME);
    return list.sort((a, b) => {
        let idxA = MONTH_ORDER.indexOf(a);
        let idxB = MONTH_ORDER.indexOf(b);
        if (idxA === -1) idxA = MONTH_ORDER.findIndex(m => a.toLowerCase().startsWith(m.toLowerCase().slice(0, 3)));
        if (idxB === -1) idxB = MONTH_ORDER.findIndex(m => b.toLowerCase().startsWith(m.toLowerCase().slice(0, 3)));
        if (idxA === -1) idxA = 99;
        if (idxB === -1) idxB = 99;
        return idxA - idxB;
    });
}

function getMonthTotalIncome(month) {
    const data = INCOME[month] || {};
    return Object.values(data).reduce((s, v) => s + (v || 0), 0);
}

function getMonthTotalExpense(month) {
    const data = EXPENSES[month] || [];
    return data.reduce((s, e) => s + (e.amount || 0), 0);
}

function getAllTenants() {
    const set = new Set();
    Object.values(INCOME).forEach(monthData => {
        Object.keys(monthData).forEach(name => {
            if (!deletedTenants.includes(name)) set.add(name);
        });
    });
    return Array.from(set).sort();
}

function saveDeletedTenants() {
    localStorage.setItem('deletedTenants', JSON.stringify(deletedTenants));
}

function formatCurrencyInput(inputEl) {
    if (!inputEl) return;
    let raw = inputEl.value.replace(/[^0-9]/g, '');
    if (raw === '') { inputEl.value = ''; return; }
    const num = parseInt(raw, 10);
    if (isNaN(num)) { inputEl.value = ''; return; }
    inputEl.value = num.toLocaleString('id-ID');
}

// ================================================================
// 5. FUNGSI SAVE & LOAD DATA
// ================================================================
function saveData() {
    localStorage.setItem('kontrakan_income', JSON.stringify(INCOME));
    localStorage.setItem('kontrakan_expenses', JSON.stringify(EXPENSES));
    localStorage.setItem('kontrakan_openingBal', openingBalance);
    localStorage.setItem('deletedTenants', JSON.stringify(deletedTenants));
    db.collection('kontrakan_data').doc('main').set({
        income: INCOME,
        expenses: EXPENSES,
        openingBalance: openingBalance,
        deletedTenants: deletedTenants,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(err => console.error('Gagal simpan ke Firebase:', err));
}

function loadData() {
    return new Promise((resolve) => {
        db.collection('kontrakan_data').doc('main').get()
            .then(doc => {
                if (doc.exists) {
                    const d = doc.data();
                    if (d.income) INCOME = d.income;
                    if (d.expenses) EXPENSES = d.expenses;
                    if (d.deletedTenants) deletedTenants = d.deletedTenants;
                    if (d.openingBalance !== undefined) {
                        openingBalance = d.openingBalance;
                        document.getElementById('openingBal').value = openingBalance;
                    }
                    localStorage.setItem('kontrakan_income', JSON.stringify(INCOME));
                    localStorage.setItem('kontrakan_expenses', JSON.stringify(EXPENSES));
                } else {
                    const savedIncome = localStorage.getItem('kontrakan_income');
                    const savedExpenses = localStorage.getItem('kontrakan_expenses');
                    if (savedIncome) { try { INCOME = JSON.parse(savedIncome); } catch (e) {} }
                    if (savedExpenses) { try { EXPENSES = JSON.parse(savedExpenses); } catch (e) {} }
                }
                dataLoaded = true;
                resolve();
            })
            .catch(err => {
                console.error('Gagal load dari Firebase:', err);
                const savedIncome = localStorage.getItem('kontrakan_income');
                const savedExpenses = localStorage.getItem('kontrakan_expenses');
                if (savedIncome) { try { INCOME = JSON.parse(savedIncome); } catch (e) {} }
                if (savedExpenses) { try { EXPENSES = JSON.parse(savedExpenses); } catch (e) {} }
                dataLoaded = true;
                resolve();
            });
    });
}

// ================================================================
// 6. FUNGSI RENDER (SEMUA PANEL)
// ================================================================
function renderAll() {
    const savedBal = localStorage.getItem('kontrakan_openingBal');
    const bal = savedBal !== null ? parseFloat(savedBal) : (parseFloat(document.getElementById('openingBal').value) || 0);
    openingBalance = bal;
    document.getElementById('openingBal').value = bal;
    renderHeaderStats();
    renderDashboard();
    renderMonthly(document.getElementById('monthFilter').value);
    renderTenants();
    populateMonthFilter();
    populateAllMonthSelects();
    populateTenantSelect();
    renderDeleteTenantList();
    renderExpenseList();
    renderPaymentList();
    populateReportMonth();
    document.getElementById('displayOpeningBal').textContent = fmt(openingBalance);
}

function renderHeaderStats() {
    let totalInc = 0,
        totalExp = 0;
    const months = getSortedMonths();
    months.forEach(m => {
        totalInc += getMonthTotalIncome(m);
        totalExp += getMonthTotalExpense(m);
    });
    const balance = totalInc - totalExp + openingBalance;
    document.getElementById('totalIncome').textContent = fmt(totalInc);
    document.getElementById('totalExpense').textContent = fmt(totalExp);
    const balEl = document.getElementById('totalBalance');
    balEl.textContent = fmt(balance);
    balEl.className = 'value ' + (balance >= 0 ? 'positive' : 'negative');
    document.getElementById('monthCount').textContent = months.length + ' bln';
}

function renderDashboard() {
    let totalInc = 0,
        totalExp = 0;
    const months = getSortedMonths();
    months.forEach(m => {
        totalInc += getMonthTotalIncome(m);
        totalExp += getMonthTotalExpense(m);
    });
    const balance = totalInc - totalExp + openingBalance;
    const avg = months.length ? totalInc / months.length : 0;

    document.getElementById('dashIncome').textContent = fmt(totalInc);
    document.getElementById('dashExpense').textContent = fmt(totalExp);
    document.getElementById('dashBalance').textContent = fmt(balance);
    document.getElementById('dashAvg').textContent = fmt(avg);
    document.getElementById('totalMonths').textContent = months.length;

    const tenants = getAllTenants();
    const active = tenants.filter(name => {
        let count = 0;
        months.forEach(m => { if ((INCOME[m]?.[name] || 0) > 0) count++; });
        return count >= 1;
    });
    document.getElementById('activeTenants').textContent = active.length;

    const tenantTotal = tenants.map(name => {
        let total = 0;
        months.forEach(m => { total += INCOME[m]?.[name] || 0; });
        return { name, total };
    }).sort((a, b) => b.total - a.total).slice(0, 10);

    const topEl = document.getElementById('topTenants');
    if (tenantTotal.length === 0) {
        topEl.innerHTML = '<div class="text-muted">Belum ada data</div>';
    } else {
        topEl.innerHTML = tenantTotal.map((t, i) =>
            `<div class="top-item"><span class="name">${i+1}. ${t.name}</span><span class="amount">${fmt(t.total)}</span></div>`
        ).join('');
    }

    const monthTotals = months.map(m => ({ month: m, total: getMonthTotalIncome(m) }))
        .sort((a, b) => b.total - a.total).slice(0, 6);
    const topMonthsEl = document.getElementById('topMonths');
    if (monthTotals.length === 0) {
        topMonthsEl.innerHTML = '<div class="text-muted">Belum ada data</div>';
    } else {
        topMonthsEl.innerHTML = monthTotals.map((m, i) =>
            `<div class="top-item"><span class="name">${i+1}. ${m.month} 2026</span><span class="amount">${fmt(m.total)}</span></div>`
        ).join('');
    }
    document.getElementById('displayOpeningBal').textContent = fmt(openingBalance);
}

function renderMonthly(filterMonth) {
    const grid = document.getElementById('monthGrid');
    const months = getSortedMonths();
    let filtered = filterMonth && filterMonth !== 'all' ? months.filter(m => m === filterMonth) : months;

    if (filtered.length === 0) {
        grid.innerHTML =
            '<div class="card" style="grid-column:1/-1;text-align:center;padding:40px;color:var(--gray-500);">Tidak ada data untuk bulan ini.</div>';
        return;
    }

    grid.innerHTML = filtered.map(month => {
        const incData = INCOME[month] || {};
        const expData = EXPENSES[month] || [];
        const totalInc = Object.values(incData).reduce((s, v) => s + (v || 0), 0);
        const totalExp = expData.reduce((s, e) => s + (e.amount || 0), 0);
        const balance = totalInc - totalExp;
        const incRows = Object.entries(incData).filter(([_, amt]) => amt > 0);

        return `
                <div class="month-card">
                    <div class="month-head">
                        <h3>${month} 2026</h3>
                        <span class="month-total">${fmt(totalInc)}</span>
                    </div>
                    <div class="month-body">
                        <div class="sub-section">
                            <div class="sub-label"><i class="fas fa-arrow-down" style="color:var(--success);"></i> Pendapatan</div>
                            ${incRows.length ? incRows.map(([name, amt]) =>
                                `<div class="row-item"><span class="desc">${name}</span><span class="amt" style="color:var(--success);">${fmt(amt)}</span></div>`
                            ).join('') : '<div class="text-muted" style="font-size:13px;">Tidak ada pendapatan</div>'}
                            ${incRows.length ? `<div class="total-row"><span>Total Pendapatan</span><span style="color:var(--success);">${fmt(totalInc)}</span></div>` : ''}
                        </div>
                        <div class="sub-section">
                            <div class="sub-label"><i class="fas fa-arrow-up" style="color:var(--danger);"></i> Biaya</div>
                            ${expData.length ? expData.map(e =>
                                `<div class="row-item"><span class="desc">${e.desc}</span><span class="amt" style="color:var(--danger);">${fmt(e.amount)}</span></div>`
                            ).join('') : '<div class="text-muted" style="font-size:13px;">Tidak ada biaya</div>'}
                            ${expData.length ? `<div class="total-row"><span>Total Biaya</span><span style="color:var(--danger);">${fmt(totalExp)}</span></div>` : ''}
                        </div>
                        <div style="margin-top:12px;padding-top:10px;border-top:2px solid var(--gray-300);display:flex;justify-content:space-between;font-weight:700;font-size:15px;">
                            <span>Sisa Bulan Ini</span>
                            <span style="color:${balance >= 0 ? 'var(--success)' : 'var(--danger)'};">${fmt(balance)}</span>
                        </div>
                    </div>
                </div>
            `;
    }).join('');
}

function renderTenants() {
    const grid = document.getElementById('tenantGrid');
    const tenants = getAllTenants();
    document.getElementById('tenantCount').textContent = tenants.length;
    const months = getSortedMonths();

    grid.innerHTML = tenants.map(name => {
        let total = 0;
        const payments = months.map(m => {
            const val = INCOME[m]?.[name] || 0;
            total += val;
            return { month: m, amount: val };
        });
        const activeMonths = payments.filter(p => p.amount > 0).map(p => p.month);
        const lastPaid = activeMonths.length > 0 ? activeMonths[activeMonths.length - 1] : null;
        const isActive = activeMonths.length > 0;

        return `
                <div class="tenant-card">
                    <div class="tenant-name">
                        <span>${name}</span>
                        <span class="status-badge ${isActive ? 'active' : 'inactive'}">${isActive ? 'Aktif' : 'Nonaktif'}</span>
                    </div>
                    <div class="tenant-details">
                        <span><i class="fas fa-coins"></i> Total: ${fmt(total)}</span>
                        <span><i class="fas fa-calendar-check"></i> ${activeMonths.length} bln</span>
                        ${lastPaid ? `<span><i class="fas fa-clock"></i> Akhir: ${lastPaid}</span>` : ''}
                    </div>
                    <div class="tenant-payments">
                        ${months.map(m => {
                            const amt = INCOME[m]?.[name] || 0;
                            let cls = 'zero';
                            if (amt > 0) cls = 'paid';
                            return `<span class="pay-badge ${cls}">${m} ${amt > 0 ? fmt(amt) : '-'}</span>`;
                        }).join('')}
                    </div>
                </div>
            `;
    }).join('');
}

function renderDeleteTenantList() {
    const container = document.getElementById('deleteTenantList');
    const activeTenants = getAllTenants();
    const deletedNames = deletedTenants.filter(name => {
        return Object.values(INCOME).some(monthData => monthData[name] !== undefined);
    });

    if (activeTenants.length === 0 && deletedNames.length === 0) {
        container.innerHTML = '<div class="text-muted" style="padding:20px;text-align:center;">Belum ada data penghuni</div>';
        return;
    }

    let html = '';

    if (activeTenants.length > 0) {
        html +=
            '<div style="margin-bottom:8px;font-size:12px;font-weight:600;color:var(--gray-500);text-transform:uppercase;">Penghuni Aktif</div>';
        html += activeTenants.map(name => {
            let total = 0;
            Object.keys(INCOME).forEach(m => { total += INCOME[m]?.[name] || 0; });
            return `
                    <div class="tenant-manage-item">
                        <div class="tenant-info">
                            <span class="name">${name}</span>
                            <span class="total">Total: ${fmt(total)}</span>
                        </div>
                        <button class="btn btn-sm" style="background:var(--danger);color:white;" onclick="deleteTenant('${name.replace(/'/g, "\\'")}')">
                            <i class="fas fa-trash"></i> Hapus
                        </button>
                    </div>
                `;
        }).join('');
    }

    if (deletedNames.length > 0) {
        html +=
            '<div style="margin-top:16px;margin-bottom:8px;font-size:12px;font-weight:600;color:var(--gray-500);text-transform:uppercase;">Penghuni Dihapus</div>';
        html += deletedNames.map(name => {
            let total = 0;
            Object.keys(INCOME).forEach(m => { total += INCOME[m]?.[name] || 0; });
            return `
                    <div class="tenant-manage-item">
                        <div class="tenant-info">
                            <span class="name" style="color:var(--gray-400);">${name}</span>
                            <span class="total" style="color:var(--gray-400);">Total: ${fmt(total)}</span>
                        </div>
                        <button class="btn btn-sm" style="background:var(--success);color:white;" onclick="restoreTenant('${name.replace(/'/g, "\\'")}')">
                            <i class="fas fa-undo"></i> Kembalikan
                        </button>
                    </div>
                `;
        }).join('');
    }

    container.innerHTML = html;
}

function renderExpenseList() {
    const container = document.getElementById('expenseList');
    const filterMonth = document.getElementById('expFilterMonth')?.value || 'all';
    const months = getSortedMonths(Object.keys(EXPENSES));
    const filtered = filterMonth === 'all' ? months : months.filter(m => m === filterMonth);

    let allExpenses = [];
    filtered.forEach(m => {
        (EXPENSES[m] || []).forEach((e, idx) => {
            allExpenses.push({ month: m, desc: e.desc, amount: e.amount, idx });
        });
    });

    if (allExpenses.length === 0) {
        container.innerHTML = '<div class="text-muted" style="padding:20px;text-align:center;">Tidak ada pengeluaran</div>';
        return;
    }

    container.innerHTML =
        `<div class="table-wrap"><table style="width:100%;border-collapse:collapse;font-size:14px;">
                <thead><tr style="border-bottom:2px solid var(--gray-300);text-align:left;">
                    <th style="padding:8px 4px;">Bulan</th>
                    <th style="padding:8px 4px;">Keterangan</th>
                    <th style="padding:8px 4px;text-align:right;">Jumlah</th>
                    <th style="padding:8px 4px;text-align:center;">Aksi</th>
                </tr></thead>
                <tbody>${allExpenses.map(e => `
                    <tr style="border-bottom:1px solid var(--gray-100);">
                        <td style="padding:8px 4px;font-weight:500;">${e.month}</td>
                        <td style="padding:8px 4px;">${e.desc}</td>
                        <td style="padding:8px 4px;text-align:right;color:var(--danger);font-weight:500;">${fmt(e.amount)}</td>
                        <td style="padding:8px 4px;text-align:center;">
                            <button class="btn btn-sm" style="background:var(--danger);color:white;" onclick="deleteExpense('${e.month}',${e.idx})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `).join('')}</tbody>
            </table></div>`;
}

function renderPaymentList() {
    const container = document.getElementById('paymentList');
    const filterMonth = document.getElementById('payFilterMonth')?.value || 'all';
    const months = getSortedMonths();
    const filtered = filterMonth === 'all' ? months : months.filter(m => m === filterMonth);

    let allPayments = [];
    filtered.forEach(m => {
        Object.entries(INCOME[m] || {}).forEach(([name, amt]) => {
            if (amt > 0) allPayments.push({ month: m, name, amount: amt });
        });
    });

    if (allPayments.length === 0) {
        container.innerHTML = '<div class="text-muted" style="padding:20px;text-align:center;">Tidak ada pembayaran</div>';
        return;
    }

    container.innerHTML =
        `<div class="table-wrap"><table style="width:100%;border-collapse:collapse;font-size:14px;">
                <thead><tr style="border-bottom:2px solid var(--gray-300);text-align:left;">
                    <th style="padding:8px 4px;">Bulan</th>
                    <th style="padding:8px 4px;">Penghuni</th>
                    <th style="padding:8px 4px;text-align:right;">Jumlah Bayar</th>
                    <th style="padding:8px 4px;text-align:center;">Aksi</th>
                </tr></thead>
                <tbody>${allPayments.map(p => `
                    <tr style="border-bottom:1px solid var(--gray-100);">
                        <td style="padding:8px 4px;font-weight:500;">${p.month}</td>
                        <td style="padding:8px 4px;">${p.name}</td>
                        <td style="padding:8px 4px;text-align:right;color:var(--success);font-weight:500;">${fmt(p.amount)}</td>
                        <td style="padding:8px 4px;text-align:center;">
                            <button class="btn btn-sm" style="background:var(--danger);color:white;" onclick="deletePayment('${p.month}','${p.name.replace(/'/g, "\\'")}')">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `).join('')}</tbody>
            </table></div>`;
}

// ================================================================
// 7. FUNGSI POPULATE SELECT
// ================================================================
function populateMonthFilter() {
    const sel = document.getElementById('monthFilter');
    const months = getSortedMonths();
    const currentVal = sel.value;
    sel.innerHTML = '<option value="all">Semua</option>' +
        months.map(m => `<option value="${m}" ${m === currentVal ? 'selected' : ''}>${m} 2026</option>`).join('');
}

function populateAllMonthSelects() {
    const months = getSortedMonths();
    const monthOptions = months.map(m => `<option value="${m}">${m} 2026</option>`).join('');

    ['expMonth', 'payMonth', 'expFilterMonth', 'payFilterMonth'].forEach(id => {
        const sel = document.getElementById(id);
        if (!sel) return;
        const currentVal = sel.value;
        if (id === 'expFilterMonth' || id === 'payFilterMonth') {
            sel.innerHTML = '<option value="all">Semua</option>' + monthOptions;
        } else {
            sel.innerHTML = monthOptions;
        }
        if (currentVal) sel.value = currentVal;
    });
}

function populateTenantSelect() {
    const sel = document.getElementById('payTenant');
    const tenants = getAllTenants();
    sel.innerHTML = tenants.map(t => `<option value="${t}">${t}</option>`).join('');
}

function populateReportMonth() {
    const sel = document.getElementById('reportMonth');
    const months = getSortedMonths();
    sel.innerHTML = '<option value="all">Semua Bulan</option>' +
        months.map(m => `<option value="${m}">${m} 2026</option>`).join('');
}

// ================================================================
// 8. FUNGSI HAPUS / KEMBALIKAN TENANT, EXPENSE, PAYMENT
// ================================================================
function deleteTenant(name) {
    if (!confirm(`Hapus penghuni "${name}"?`)) return;
    if (!deletedTenants.includes(name)) {
        deletedTenants.push(name);
        saveDeletedTenants();
    }
    saveData();
    renderAll();
    renderDeleteTenantList();
    populateTenantSelect();
}

function restoreTenant(name) {
    deletedTenants = deletedTenants.filter(n => n !== name);
    saveDeletedTenants();
    saveData();
    renderAll();
    renderDeleteTenantList();
    populateTenantSelect();
    alert(`Penghuni "${name}" berhasil dikembalikan!`);
}

function deleteExpense(month, idx) {
    if (!confirm('Hapus pengeluaran ini?')) return;
    EXPENSES[month].splice(idx, 1);
    saveData();
    renderAll();
    renderExpenseList();
}

function deletePayment(month, name) {
    if (!confirm(`Hapus pembayaran "${name}" di bulan ${month}?`)) return;
    INCOME[month][name] = 0;
    saveData();
    renderAll();
    renderPaymentList();
}

// ================================================================
// 9. FUNGSI REPORT / PDF
// ================================================================
function renderReportPreview() {
    const container = document.getElementById('reportPreviewContent');
    const filterMonth = document.getElementById('reportMonth')?.value || 'all';
    const months = getSortedMonths();
    const filtered = filterMonth === 'all' ? months : months.filter(m => m === filterMonth);

    let totalInc = 0,
        totalExp = 0;
    filtered.forEach(m => {
        totalInc += getMonthTotalIncome(m);
        totalExp += getMonthTotalExpense(m);
    });
    const balance = totalInc - totalExp + openingBalance;
    const avg = filtered.length ? totalInc / filtered.length : 0;

    let html = `
            <div class="report-summary-box">
                <div class="report-summary-item">
                    <div class="r-label">Total Pendapatan</div>
                    <div class="r-value income">${fmt(totalInc)}</div>
                </div>
                <div class="report-summary-item" style="border-left-color:var(--danger);">
                    <div class="r-label">Total Biaya</div>
                    <div class="r-value expense">${fmt(totalExp)}</div>
                </div>
                <div class="report-summary-item" style="border-left-color:var(--success);">
                    <div class="r-label">Sisa (dengan Saldo Awal)</div>
                    <div class="r-value" style="color:${balance >= 0 ? 'var(--success)' : 'var(--danger)'};">${fmt(balance)}</div>
                </div>
                <div class="report-summary-item" style="border-left-color:var(--gray-400);">
                    <div class="r-label">Rata-rata / Bulan</div>
                    <div class="r-value">${fmt(avg)}</div>
                </div>
            </div>
        `;

    filtered.forEach(month => {
        const incData = INCOME[month] || {};
        const expData = EXPENSES[month] || [];
        const mInc = Object.values(incData).reduce((s, v) => s + (v || 0), 0);
        const mExp = expData.reduce((s, e) => s + (e.amount || 0), 0);
        const mBal = mInc - mExp;
        const incRows = Object.entries(incData).filter(([_, amt]) => amt > 0);

        html += `<div class="report-section">
                <div class="report-month-header">
                    <span>${month} 2026</span>
                    <span>Sisa: ${fmt(mBal)}</span>
                </div>
                <table class="report-table">
                    <thead><tr>
                        <th>Penghuni (Pendapatan)</th>
                        <th class="text-right">Jumlah</th>
                        <th>Keterangan Pengeluaran</th>
                        <th class="text-right">Jumlah</th>
                    </tr></thead>
                    <tbody>`;

        const maxRows = Math.max(incRows.length, expData.length);
        for (let i = 0; i < maxRows; i++) {
            const incName = incRows[i] ? incRows[i][0] : '-';
            const incAmt = incRows[i] ? incRows[i][1] : 0;
            const expDesc = expData[i] ? expData[i].desc : '-';
            const expAmt = expData[i] ? expData[i].amount : 0;
            html += `<tr>
                    <td>${incName}</td>
                    <td class="text-right income">${incAmt > 0 ? fmt(incAmt) : '-'}</td>
                    <td>${expDesc}</td>
                    <td class="text-right expense">${expAmt > 0 ? fmt(expAmt) : '-'}</td>
                </tr>`;
        }

        html += `<tr class="total-row">
                    <td>Total Pendapatan</td>
                    <td class="text-right income">${fmt(mInc)}</td>
                    <td>Total Biaya</td>
                    <td class="text-right expense">${fmt(mExp)}</td>
                </tr></tbody></table></div>`;
    });

    container.innerHTML = html;
}

function generatePDF(type) {
    try {
        const jsPDFConstructor = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
        if (!jsPDFConstructor) {
            alert(
                'Gagal memuat library PDF. Pastikan perangkat Anda terhubung ke internet dan silakan muat ulang halaman.'
                );
            return;
        }

        const doc = new jsPDFConstructor('p', 'mm', 'a4');
        const autoTableFn = (options) => {
            if (typeof doc.autoTable === 'function') {
                return doc.autoTable(options);
            } else if (typeof window.jspdfAutoTable === 'function') {
                return window.jspdfAutoTable(doc, options);
            } else if (typeof autoTable === 'function') {
                return autoTable(doc, options);
            } else {
                throw new Error('Plugin AutoTable tidak ditemukan.');
            }
        };

        const pageWidth = doc.internal.pageSize.getWidth();
        const filterMonth = document.getElementById('reportMonth')?.value || 'all';
        const reportNote = document.getElementById('reportNote')?.value.trim() || '';
        const months = getSortedMonths();
        const filtered = filterMonth === 'all' ? months : months.filter(m => m === filterMonth);
        const now = new Date();
        const dateStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });

        let totalInc = 0,
            totalExp = 0;
        filtered.forEach(m => {
            totalInc += getMonthTotalIncome(m);
            totalExp += getMonthTotalExpense(m);
        });
        const balance = totalInc - totalExp + openingBalance;

        function fmtN(n) { return Math.round(n).toLocaleString('id-ID'); }

        function header(title) {
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.text('KONTRAKAN GUNUNG INDAH', pageWidth / 2, 18, { align: 'center' });
            doc.setFontSize(11);
            doc.setFont('helvetica', 'normal');
            doc.text(title, pageWidth / 2, 25, { align: 'center' });
            doc.setFontSize(9);
            doc.text('Dicetak: ' + dateStr + ' | Saldo Awal: Rp' + fmtN(openingBalance), pageWidth / 2, 31,
                { align: 'center' });
            doc.setDrawColor(26, 42, 108);
            doc.setLineWidth(0.5);
            doc.line(15, 34, pageWidth - 15, 34);
            return 38;
        }

        // ========== BAGIAN SUMMARY YANG DIMODIFIKASI ==========
        if (type === 'summary') {
            let y = header('RINGKASAN KEUANGAN ' + (filterMonth === 'all' ? 'TAHUN 2026' : filterMonth.toUpperCase() + ' 2026'));
            doc.setFontSize(11);
            doc.setFont('helvetica', 'bold');
            doc.text('Ringkasan', 15, y);
            y += 7;

            const sortedMonths = filtered.slice().sort((a, b) => {
                let idxA = MONTH_ORDER.indexOf(a);
                let idxB = MONTH_ORDER.indexOf(b);
                if (idxA === -1) idxA = 99;
                if (idxB === -1) idxB = 99;
                return idxA - idxB;
            });

            let thisMonthIncome = 0;
            let thisMonthExpense = 0;
            let sisaSaldoBulanLalu = openingBalance; // default jika tidak ada bulan sebelumnya

            if (sortedMonths.length > 0) {
                const lastIdx = sortedMonths.length - 1;
                const lastMonth = sortedMonths[lastIdx];
                thisMonthIncome = getMonthTotalIncome(lastMonth);
                thisMonthExpense = getMonthTotalExpense(lastMonth);

                // Hitung sisa saldo bulan lalu: saldo awal + total pendapatan & biaya sebelum bulan terakhir
                let cumulative = openingBalance;
                for (let i = 0; i < lastIdx; i++) {
                    const m = sortedMonths[i];
                    cumulative += getMonthTotalIncome(m) - getMonthTotalExpense(m);
                }
                sisaSaldoBulanLalu = cumulative;
            }

            const summaryData = [
                ['Sisa Saldo Bulan Lalu', 'Rp' + fmtN(sisaSaldoBulanLalu)],
                ['Pendapatan Bulan Ini', 'Rp' + fmtN(thisMonthIncome)],
                ['Biaya Bulan Ini', 'Rp' + fmtN(thisMonthExpense)],
                ['Sisa (Sisa Saldo Bulan Lalu + Pendapatan - Biaya)', 'Rp' + fmtN(balance)],
                ['Rata-rata Pendapatan / Bulan', 'Rp' + fmtN(filtered.length ? totalInc / filtered.length : 0)],
            ];

            autoTableFn({
                startY: y,
                head: [['Keterangan', 'Nilai']],
                body: summaryData,
                theme: 'grid',
                headStyles: { fillColor: [26, 42, 108], fontSize: 10 },
                bodyStyles: { fontSize: 10 },
                columnStyles: { 0: { cellWidth: 100 }, 1: { halign: 'right', cellWidth: 70 } },
                margin: { left: 15, right: 15 },
            });

            // Tambahkan Daftar Belum Membayar
            y = (doc.lastAutoTable ? doc.lastAutoTable.finalY : y + 30) + 10;
            if (y > 240) { doc.addPage(); y = 20; }

            const targetMonth = filterMonth !== 'all' ? filterMonth : (sortedMonths.length > 0 ? sortedMonths[sortedMonths.length - 1] : '');
            let unpaidTenants = [];
            if (targetMonth) {
                const tenants = getAllTenants();
                unpaidTenants = tenants.filter(name => (INCOME[targetMonth]?.[name] || 0) === 0);
            }

            doc.setFontSize(11);
            doc.setFont('helvetica', 'bold');
            doc.text('Daftar Penghuni Belum Membayar (' + (targetMonth ? targetMonth + ' 2026' : '') + ')', 15, y);
            y += 6;

            const unpaidData = unpaidTenants.length > 0
                ? unpaidTenants.map((name, i) => [i + 1, name, 'Belum Bayar'])
                : [[1, 'Semua penghuni sudah membayar', '-']];

            autoTableFn({
                startY: y,
                head: [['No', 'Nama Penghuni', 'Status']],
                body: unpaidData,
                theme: 'grid',
                headStyles: { fillColor: [211, 47, 47], fontSize: 10 },
                bodyStyles: { fontSize: 10 },
                columnStyles: { 0: { cellWidth: 15, halign: 'center' }, 1: { cellWidth: 110 }, 2: { cellWidth: 45, halign: 'center' } },
                margin: { left: 15, right: 15 },
            });

            // Tambahkan Catatan / Keterangan jika ada
            if (reportNote) {
                y = (doc.lastAutoTable ? doc.lastAutoTable.finalY : y + 30) + 8;
                if (y > 250) { doc.addPage(); y = 20; }
                doc.setFontSize(10);
                doc.setFont('helvetica', 'bold');
                doc.text('Keterangan / Catatan:', 15, y);
                y += 5;
                doc.setFont('helvetica', 'normal');
                doc.setFontSize(9);
                const splitNote = doc.splitTextToSize(reportNote, pageWidth - 30);
                doc.text(splitNote, 15, y);
            }
        }
        // ========== AKHIR BAGIAN SUMMARY ==========

        else if (type === 'tenant') {
            let y = header('LAPORAN PER PENGHUNI');
            const tenants = getAllTenants();
            const tenantData = tenants.map(name => {
                let total = 0;
                const perMonth = {};
                filtered.forEach(m => {
                    const val = INCOME[m]?.[name] || 0;
                    total += val;
                    if (val > 0) perMonth[m] = val;
                });
                return { name, total, perMonth, active: total > 0 };
            }).filter(t => t.active).sort((a, b) => b.total - a.total);

            autoTableFn({
                startY: y,
                head: [
                    ['#', 'Nama Penghuni', 'Total', 'Bulan Aktif']
                ],
                body: tenantData.map((t, i) => [
                    i + 1, t.name, 'Rp' + fmtN(t.total),
                    Object.keys(t.perMonth).join(', ')
                ]),
                theme: 'grid',
                headStyles: { fillColor: [26, 42, 108], fontSize: 9 },
                bodyStyles: { fontSize: 9 },
                columnStyles: { 2: { halign: 'right' } },
                margin: { left: 15, right: 15 },
            });
        } else {
            let y = header('LAPORAN KEUANGAN LENGKAP ' + (filterMonth === 'all' ? 'TAHUN 2026' : filterMonth
                .toUpperCase() + ' 2026'));

            doc.setFontSize(11);
            doc.setFont('helvetica', 'bold');
            doc.text('Ringkasan', 15, y);
            y += 7;

            const summaryData = [
                ['Total Pendapatan', 'Rp' + fmtN(totalInc)],
                ['Total Biaya', 'Rp' + fmtN(totalExp)],
                ['Saldo Awal', 'Rp' + fmtN(openingBalance)],
                ['Sisa (Saldo Awal + Pendapatan - Biaya)', 'Rp' + fmtN(balance)],
                ['Rata-rata Pendapatan / Bulan', 'Rp' + fmtN(filtered.length ? totalInc / filtered.length : 0)],
                ['Jumlah Bulan', filtered.length + ' bulan'],
            ];
            autoTableFn({
                startY: y,
                head: [
                    ['Keterangan', 'Nilai']
                ],
                body: summaryData,
                theme: 'grid',
                headStyles: { fillColor: [26, 42, 108], fontSize: 10 },
                bodyStyles: { fontSize: 10 },
                columnStyles: { 0: { cellWidth: 100 }, 1: { halign: 'right', cellWidth: 70 } },
                margin: { left: 15, right: 15 },
            });
            y = (doc.lastAutoTable ? doc.lastAutoTable.finalY : y + 30) + 10;

            filtered.forEach(month => {
                if (y > 250) { doc.addPage();
                    y = 20; }
                const incData = INCOME[month] || {};
                const expData = EXPENSES[month] || [];
                const mInc = Object.values(incData).reduce((s, v) => s + (v || 0), 0);
                const mExp = expData.reduce((s, e) => s + (e.amount || 0), 0);
                const incRows = Object.entries(incData).filter(([_, amt]) => amt > 0);

                doc.setFontSize(11);
                doc.setFont('helvetica', 'bold');
                doc.setFillColor(26, 42, 108);
                doc.setTextColor(255, 255, 255);
                doc.rect(15, y, pageWidth - 30, 7, 'F');
                doc.text(month.toUpperCase() + ' 2026', 18, y + 5);
                doc.text('Sisa: Rp' + fmtN(mInc - mExp), pageWidth - 18, y + 5, { align: 'right' });
                doc.setTextColor(0, 0, 0);
                y += 9;

                const maxRows = Math.max(incRows.length, expData.length);
                const tableData = [];
                for (let i = 0; i < maxRows; i++) {
                    tableData.push([
                        incRows[i] ? incRows[i][0] : '-',
                        incRows[i] && incRows[i][1] > 0 ? 'Rp' + fmtN(incRows[i][1]) : '-',
                        expData[i] ? expData[i].desc : '-',
                        expData[i] && expData[i].amount > 0 ? 'Rp' + fmtN(expData[i].amount) : '-',
                    ]);
                }
                tableData.push(['TOTAL PENDAPATAN', 'Rp' + fmtN(mInc), 'TOTAL BIAYA', 'Rp' + fmtN(mExp)]);

                autoTableFn({
                    startY: y,
                    head: [
                        ['Penghuni (Pendapatan)', 'Jumlah', 'Keterangan Pengeluaran', 'Jumlah']
                    ],
                    body: tableData,
                    theme: 'striped',
                    headStyles: { fillColor: [42, 63, 143], fontSize: 8.5 },
                    bodyStyles: { fontSize: 8.5 },
                    columnStyles: {
                        0: { cellWidth: 50, halign: 'left' },
                        1: { cellWidth: 38, halign: 'right' },
                        2: { cellWidth: 54, halign: 'left' },
                        3: { cellWidth: 38, halign: 'right' },
                    },
                    margin: { left: 15, right: 15 },
                    didParseCell: function(data) {
                        if (data.row.index === tableData.length - 1) {
                            if (data.cell) {
                                data.cell.styles.fontStyle = 'bold';
                                data.cell.styles.fillColor = [241, 245, 249];
                            }
                        }
                    }
                });
                y = (doc.lastAutoTable ? doc.lastAutoTable.finalY : y + 40) + 8;
            });
        }

        const totalPages = doc.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(150);
            doc.text('Kontrakan Gunung Indah 2026 - Halaman ' + i + ' dari ' + totalPages, pageWidth / 2, 290,
                { align: 'center' });
        }

        const filename = type === 'summary' ? 'Ringkasan_Kontrakan_2026.pdf' :
            type === 'tenant' ? 'Laporan_Penghuni_2026.pdf' :
            'Laporan_Lengkap_Kontrakan_2026.pdf';
        doc.save(filename);
    } catch (err) {
        console.error('Error saat membuat PDF:', err);
        alert('Terjadi kesalahan saat membuat file PDF: ' + err.message);
    }
}

// ================================================================
// 10. RESET DATA
// ================================================================
function resetAllData() {
    if (!confirm('SEMUA DATA yang diubah akan dihapus dan kembali ke data awal. Lanjutkan?')) return;
    if (!confirm('Apakah Anda yakin? Tindakan ini tidak dapat dibatalkan.')) return;
    db.collection('kontrakan_data').doc('main').delete().catch(() => {});
    localStorage.removeItem('kontrakan_income');
    localStorage.removeItem('kontrakan_expenses');
    localStorage.removeItem('kontrakan_openingBal');
    localStorage.removeItem('deletedTenants');
    location.reload();
}

// ================================================================
// 11. EVENT LISTENER
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
    // Format currency inputs
    const payInput = document.getElementById('payAmount');
    const expInput = document.getElementById('expAmount');
    if (payInput) {
        payInput.addEventListener('input', function() { formatCurrencyInput(this); });
        payInput.addEventListener('blur', function() { formatCurrencyInput(this); });
    }
    if (expInput) {
        expInput.addEventListener('input', function() { formatCurrencyInput(this); });
        expInput.addEventListener('blur', function() { formatCurrencyInput(this); });
    }

    // Opening balance
    document.getElementById('openingBal').addEventListener('input', function() {
        openingBalance = parseFloat(this.value) || 0;
        localStorage.setItem('kontrakan_openingBal', openingBalance);
        db.collection('kontrakan_data').doc('main').update({
            openingBalance: openingBalance,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }).catch(() => {});
        renderAll();
    });

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const target = this.dataset.tab;
            document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
            document.getElementById('panel-' + target).classList.add('active');
            if (target === 'monthly') renderMonthly(document.getElementById('monthFilter').value);
            if (target === 'tenants') renderTenants();
            if (target === 'dashboard') renderDashboard();
            if (target === 'manage-tenants') { renderDeleteTenantList();
                populateTenantSelect(); }
            if (target === 'expense') renderExpenseList();
            if (target === 'payment') { renderPaymentList();
                populateTenantSelect(); }
            if (target === 'report') { populateReportMonth();
                renderReportPreview(); }
        });
    });

    // Month filter
    document.getElementById('monthFilter').addEventListener('change', function() {
        renderMonthly(this.value);
    });

    // Print monthly
    document.getElementById('printMonthlyBtn').addEventListener('click', function() {
        window.print();
    });

    // Expense filter
    document.getElementById('expFilterMonth').addEventListener('change', renderExpenseList);
    document.getElementById('payFilterMonth').addEventListener('change', renderPaymentList);

    // Report filter
    document.getElementById('reportMonth').addEventListener('change', renderReportPreview);

    // Form add tenant
    document.getElementById('addTenantForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('newTenantName').value.trim().toUpperCase();
        if (!name) return;
        const exists = getAllTenants().includes(name);
        if (exists) {
            alert('Penghuni "' + name + '" sudah ada!');
            return;
        }
        if (deletedTenants.includes(name)) {
            deletedTenants = deletedTenants.filter(n => n !== name);
            saveDeletedTenants();
            document.getElementById('newTenantName').value = '';
            saveData();
            renderAll();
            renderDeleteTenantList();
            populateTenantSelect();
            alert('Penghuni "' + name + '" berhasil dikembalikan!');
            return;
        }
        Object.keys(INCOME).forEach(m => { INCOME[m][name] = 0; });
        document.getElementById('newTenantName').value = '';
        saveData();
        renderAll();
        renderDeleteTenantList();
        populateTenantSelect();
        alert('Penghuni "' + name + '" berhasil ditambahkan!');
    });

    // Form add expense
    document.getElementById('addExpenseForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const month = document.getElementById('expMonth').value;
        const desc = document.getElementById('expDesc').value.trim();
        const rawValue = document.getElementById('expAmount').value.replace(/\./g, '');
        const amount = parseInt(rawValue) || 0;
        if (!month || !desc || amount <= 0) { alert('Mohon lengkapi semua field!'); return; }
        if (!EXPENSES[month]) EXPENSES[month] = [];
        EXPENSES[month].push({ desc, amount });
        document.getElementById('expDesc').value = '';
        document.getElementById('expAmount').value = '';
        saveData();
        renderAll();
        renderExpenseList();
        alert('Pengeluaran berhasil ditambahkan!');
    });

    // Form add payment
    document.getElementById('addPaymentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const month = document.getElementById('payMonth').value;
        const tenant = document.getElementById('payTenant').value;
        const rawValue = document.getElementById('payAmount').value.replace(/\./g, '');
        const amount = parseInt(rawValue) || 0;
        if (!month || !tenant || amount <= 0) { alert('Mohon lengkapi semua field!'); return; }
        INCOME[month][tenant] = (INCOME[month][tenant] || 0) + amount;
        document.getElementById('payAmount').value = '';
        saveData();
        renderAll();
        renderPaymentList();
        alert('Pembayaran berhasil ditambahkan!');
    });
});

// ================================================================
// 12. LOAD DATA & START
// ================================================================
loadData().then(() => {
    renderAll();
    console.log('Aplikasi Kontrakan 2026 siap. Data tersinkronisasi dengan Firebase.');
});

// Realtime sync from Firebase
db.collection('kontrakan_data').doc('main').onSnapshot(doc => {
    if (!dataLoaded) return;
    if (doc.exists) {
        const d = doc.data();
        if (d.income) INCOME = d.income;
        if (d.expenses) EXPENSES = d.expenses;
        if (d.deletedTenants) deletedTenants = d.deletedTenants;
        if (d.openingBalance !== undefined) openingBalance = d.openingBalance;
        renderAll();
    }
});