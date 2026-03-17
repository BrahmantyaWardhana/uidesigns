import {
  barChart,
  donutChart,
  heatMap,
  icon,
  lineChart,
  metricCard,
  panelHeader,
  progressBar,
  statusBadge,
  toolbarSearch,
  topbar,
} from './components'

const users = [
  {
    name: 'Budi Santoso',
    email: 'budi.s@email.com',
    location: 'Jakarta',
    gender: 'Pria',
    status: 'Aktif',
    purchase: 'Rp 12.500.000',
    orders: '12 transaksi',
    completion: 85,
  },
  {
    name: 'Siti Aminah',
    email: 'siti.a@email.com',
    location: 'Surabaya',
    gender: 'Wanita',
    status: 'Aktif',
    purchase: 'Rp 8.200.000',
    orders: '8 transaksi',
    completion: 92,
  },
  {
    name: 'Andi Wijaya',
    email: 'andi.w@email.com',
    location: 'Bandung',
    gender: 'Pria',
    status: 'Tidak Aktif',
    purchase: 'Rp 3.100.000',
    orders: '3 transaksi',
    completion: 45,
  },
  {
    name: 'Dewi Lestari',
    email: 'dewi.l@email.com',
    location: 'Medan',
    gender: 'Wanita',
    status: 'Aktif',
    purchase: 'Rp 15.800.000',
    orders: '15 transaksi',
    completion: 78,
  },
  {
    name: 'Eko Prasetyo',
    email: 'eko.p@email.com',
    location: 'Yogyakarta',
    gender: 'Pria',
    status: 'Aktif',
    purchase: 'Rp 6.400.000',
    orders: '6 transaksi',
    completion: 60,
  },
]

const SALES_FILTER_OPTIONS = {
  category: ['Pengembangan', 'Desain', 'Bisnis', 'Pemasaran', 'Data Sains'],
  timeRange: ['7 Hari Terakhir', '30 Hari Terakhir', '90 Hari Terakhir', 'Tahun Ini'],
  location: ['Indonesia', 'Singapura', 'Malaysia', 'Filipina', 'Vietnam'],
}

const ENGAGEMENT_FILTER_OPTIONS = {
  category: ['UI/UX', 'Pemrograman', 'Bisnis', 'Data', 'Pemasaran'],
}

const HEADER_FILTER_OPTIONS = ['7 Hari Terakhir', '30 Hari Terakhir', '90 Hari Terakhir', 'Tahun Ini']

function segmented(labels) {
  return `
    <div class="segmented">
      ${labels
        .map((label, index) => `<button class="${index === 0 ? 'segment-active' : ''}">${label}</button>`)
        .join('')}
    </div>
  `
}

function salesFilterDropdown(key, label, iconName, state) {
  const selected = state.salesFilters[key]
  const selectionMeta =
    selected.length === 0 ? '' : selected.length === 1 ? selected[0] : `${selected.length} dipilih`
  const open = state.openSalesDropdown === key

  return `
    <div class="filter-dropdown ${open ? 'filter-dropdown-open' : ''}">
      <button class="toolbar-chip sales-dropdown-trigger" data-sales-dropdown="${key}">
        <span class="sales-dropdown-label">
          <span class="button-icon">${icon(iconName)}</span>
          <span>${label}</span>
        </span>
        <span class="sales-dropdown-meta">
          ${selectionMeta ? `<span class="sales-dropdown-badge">${selectionMeta}</span>` : ''}
          <span class="toolbar-chevron">${icon('chevron')}</span>
        </span>
      </button>
      ${
        open
          ? `
            <div class="filter-dropdown-menu">
              ${SALES_FILTER_OPTIONS[key]
                .map((option) => {
                  const active = selected.includes(option)
                  return `
                    <button
                      class="filter-option ${active ? 'filter-option-active' : ''}"
                      data-sales-option="${key}"
                      data-sales-value="${option}"
                    >
                      <span class="filter-option-check">${active ? '✓' : ''}</span>
                      <span>${option}</span>
                    </button>
                  `
                })
                .join('')}
            </div>
          `
          : ''
      }
    </div>
  `
}

function engagementFilterDropdown(key, label, state) {
  const selected = state.engagementFilters[key]
  const selectionMeta =
    selected.length === 0 ? '' : selected.length === 1 ? selected[0] : `${selected.length} dipilih`
  const open = state.openEngagementDropdown === key

  return `
    <div class="filter-dropdown ${open ? 'filter-dropdown-open' : ''}">
      <button class="toolbar-chip sales-dropdown-trigger" data-engagement-dropdown="${key}">
        <span class="sales-dropdown-label">
          <span>${label}</span>
        </span>
        <span class="sales-dropdown-meta">
          ${selectionMeta ? `<span class="sales-dropdown-badge">${selectionMeta}</span>` : ''}
          <span class="toolbar-chevron">${icon('chevron')}</span>
        </span>
      </button>
      ${
        open
          ? `
            <div class="filter-dropdown-menu">
              ${ENGAGEMENT_FILTER_OPTIONS[key]
                .map((option) => {
                  const active = selected.includes(option)
                  return `
                    <button
                      class="filter-option ${active ? 'filter-option-active' : ''}"
                      data-engagement-option="${key}"
                      data-engagement-value="${option}"
                    >
                      <span class="filter-option-check">${active ? '✓' : ''}</span>
                      <span>${option}</span>
                    </button>
                  `
                })
                .join('')}
            </div>
          `
          : ''
      }
    </div>
  `
}

function headerFilterDropdown(key, state) {
  const selected = state.headerFilters[key]
  const open = state.openHeaderDropdown === key

  return `
    <div class="filter-dropdown ${open ? 'filter-dropdown-open' : ''}">
      <button class="toolbar-chip sales-dropdown-trigger" data-header-dropdown="${key}">
        <span class="sales-dropdown-label">
          <span class="button-icon">${icon('calendar')}</span>
          <span>Rentang Waktu</span>
        </span>
        <span class="sales-dropdown-meta">
          <span class="sales-dropdown-badge">${selected}</span>
          <span class="toolbar-chevron">${icon('chevron')}</span>
        </span>
      </button>
      ${
        open
          ? `
            <div class="filter-dropdown-menu">
              ${HEADER_FILTER_OPTIONS
                .map((option) => {
                  const active = selected === option
                  return `
                    <button
                      class="filter-option ${active ? 'filter-option-active' : ''}"
                      data-header-option="${key}"
                      data-header-value="${option}"
                    >
                      <span class="filter-option-check">${active ? '✓' : ''}</span>
                      <span>${option}</span>
                    </button>
                  `
                })
                .join('')}
            </div>
          `
          : ''
      }
    </div>
  `
}

export function renderOverview(state) {
  const metrics = [
    { label: 'Total Pendapatan', value: 'Rp 35,4M', change: '+12,5%', iconName: 'wallet' },
    { label: 'Total Transaksi', value: '12.540', change: '+5,2%', iconName: 'card' },
    { label: 'Tingkat Konversi', value: '3,21%', change: '-0,4%', tone: 'down', iconName: 'activity' },
    { label: 'Rata-rata Pesanan', value: 'Rp 2,8JT', change: '+2,1%', iconName: 'sales' },
    { label: 'Siswa Aktif', value: '45.200', change: '+8,9%', iconName: 'users' },
    { label: 'Waktu Penyelesaian', value: '14 Hari', change: '-1,5%', tone: 'down', iconName: 'clock' },
  ]

  return `
    ${topbar({
      title: 'Ringkasan Dasbor',
      leftExtras: headerFilterDropdown('overview', state),
      rightExtras: '',
    })}
    <section class="screen-content">
      <div class="metrics-grid metrics-grid-six">${metrics.map(metricCard).join('')}</div>
      <div class="content-grid content-grid-featured">
        <article class="panel span-two">
          ${panelHeader('Tren Pendapatan & Transaksi', 'Statistik mingguan periode saat ini', '<button class="ghost-button">Ekspor Laporan</button>')}
          ${lineChart({
            values: [4000, 2900, 2000, 2800, 1900, 2300, 3500],
            labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4', 'Minggu 5', 'Minggu 6', 'Minggu 7'],
            yLabels: ['4000', '3000', '2000', '1000', '0'],
          })}
        </article>
        <article class="panel">
          ${panelHeader('Kursus Terpopuler', 'Berdasarkan total volume penjualan')}
          <div class="popular-list">
            ${[
              ['Dasar Pemrograman Python', '1240 Unit Terjual', 'Rp 558.0M', '#3182f6'],
              ['Desain UI/UX Modern', '980 Unit Terjual', 'Rp 441.0M', '#2ea99b'],
              ['Manajemen Bisnis Digital', '850 Unit Terjual', 'Rp 382.5M', '#294a5d'],
              ['Pemasaran Media Sosial', '720 Unit Terjual', 'Rp 324.0M', '#e5bc58'],
            ]
              .map(
                ([title, sub, value, color]) => `
                  <div class="popular-item">
                    <span class="popular-strip" style="background:${color}"></span>
                    <div>
                      <strong>${title}</strong>
                      <span>${sub}</span>
                    </div>
                    <strong>${value}</strong>
                  </div>
                `,
              )
              .join('')}
          </div>
          <button class="link-button">Lihat Semua Kursus</button>
        </article>
      </div>
      <div class="content-grid content-grid-three">
        <article class="panel">
          ${panelHeader('Corong Konversi (Funnel)', 'Perjalanan pengguna dari kunjungan hingga pembelian')}
          <div class="stack-list">
            ${[
              ['Kunjungan Situs', '120,450', '100%', 100],
              ['Akun Gratis', '45,200', '37%', 37],
              ['Mendaftar Kursus', '12,500', '10%', 10],
              ['Pembeli Berbayar', '4,120', '3.2%', 3.2],
            ]
              .map(
                ([label, value, share, width]) => `
                  <div class="stack-item">
                    <div class="stack-meta">
                      <strong>${label}</strong>
                      <span>${value} <small>(${share})</small></span>
                    </div>
                    <div class="progress-track"><span class="progress-fill" style="width:${width}%"></span></div>
                  </div>
                `,
              )
              .join('')}
          </div>
        </article>
        <article class="panel">
          ${panelHeader('Retensi Kohort', 'Persentase pengguna kembali setelah periode tertentu')}
          <table class="simple-table">
            <thead><tr><th>Bulan Masuk</th><th>H+7</th><th>H+30</th><th>H+90</th></tr></thead>
            <tbody>
              <tr><td>Januari</td><td>84%</td><td>62%</td><td>45%</td></tr>
              <tr><td>Februari</td><td>81%</td><td>58%</td><td>42%</td></tr>
              <tr><td>Maret</td><td>86%</td><td>65%</td><td>48%</td></tr>
              <tr><td>April</td><td>79%</td><td>55%</td><td>-</td></tr>
            </tbody>
          </table>
        </article>
        <article class="panel panel-with-footer-action">
          ${panelHeader('Aktivitas Terbaru', 'Kejadian transaksi dan platform terkini')}
          <div class="activity-list">
            ${[
              ['Andi Saputra', 'Membeli Kursus React JS', '+Rp 450.000', '2 menit yang lalu', 'blue'],
              ['Siti Aminah', 'Menyelesaikan Modul Desain', 'Selesai', '15 menit yang lalu', 'green'],
              ['Budi Hartono', 'Mendaftar Akun Baru', 'Baru', '1 jam yang lalu', 'blue'],
              ['Dewi Lestari', 'Pengembalian Dana (Refund)', '-Rp 200.000', '3 jam yang lalu', 'red'],
            ]
              .map(
                ([name, text, note, time, tone]) => `
                  <div class="activity-item">
                    <span class="activity-dot tone-${tone}">${icon(tone === 'red' ? 'refund' : 'card')}</span>
                    <div class="activity-copy">
                      <div class="activity-head"><strong>${name}</strong><span>${time}</span></div>
                      <p>${text}</p>
                      <small class="${tone === 'red' ? 'negative-text' : ''}">${note}</small>
                    </div>
                  </div>
                `,
              )
              .join('')}
          </div>
          <button class="ghost-button block-button">Lihat Log Lengkap</button>
        </article>
      </div>
    </section>
  `
}

export function renderSales(state) {
  const metrics = [
    { label: 'TOTAL PENDAPATAN', value: 'Rp 8,4M', change: '+12.5%', iconName: 'wallet' },
    { label: 'PERTUMBUHAN', value: '18.2%', change: '+4.3%', iconName: 'activity' },
    { label: 'LTV KOHORT', value: 'Rp 4,5jt', change: '-2.1%', tone: 'down', iconName: 'users' },
    { label: 'TINGKAT REFUND', value: '1.24%', change: '-0.1%', tone: 'down', iconName: 'filter' },
  ]

  return `
    ${topbar({
      title: 'Kinerja Penjualan',
      leftExtras: headerFilterDropdown('sales', state),
      rightExtras: '',
    })}
    <section class="screen-content">
      <div class="toolbar-row panel">
        <div class="toolbar-row-left">
          ${salesFilterDropdown('category', 'Kategori Produk', 'book', state)}
          ${salesFilterDropdown('location', 'Lokasi', 'globe', state)}
        </div>
        <button class="primary-button inline-primary" data-sales-reset="true">Reset</button>
      </div>
      <div class="metrics-grid">${metrics.map(metricCard).join('')}</div>
      <article class="panel">
        ${panelHeader('Tren Pendapatan Bulanan', 'Analisis performa keuangan harian selama November 2024', segmented(['Pendapatan', 'Langganan']))}
        ${lineChart({
          values: [46, 52, 49, 61, 55, 72, 84],
          labels: ['01 Nov', '05 Nov', '10 Nov', '15 Nov', '20 Nov', '25 Nov', '30 Nov'],
          yLabels: ['Rp 100jt', 'Rp 75jt', 'Rp 50jt', 'Rp 25jt', 'Rp 0jt'],
        })}
      </article>
      <div class="content-grid content-grid-sales">
        <article class="panel">
          ${panelHeader('Performa Kursus Terbaik', '', '<button class="link-button small-link">Lihat Semua</button>')}
          <table class="simple-table course-table">
            <thead><tr><th>NAMA KURSUS</th><th>TERJUAL</th><th>KONVERSI</th><th>PENDAPATAN</th><th>STATUS</th></tr></thead>
            <tbody>
              <tr><td>Masterclass React Modern</td><td>450</td><td>4.2%</td><td>Rp 1.2M</td><td>${statusBadge('Populer', 'blue')}</td></tr>
              <tr><td>UI/UX Design Essentials</td><td>380</td><td>3.8%</td><td>Rp 950jt</td><td>${statusBadge('Stabil')}</td></tr>
              <tr><td>Python untuk Data Science</td><td>310</td><td>5.1%</td><td>Rp 880jt</td><td>${statusBadge('Meningkat')}</td></tr>
              <tr><td>Strategi Digital Marketing</td><td>280</td><td>2.9%</td><td>Rp 620jt</td><td>${statusBadge('Stabil')}</td></tr>
              <tr><td>Dasar Pemrograman Go</td><td>190</td><td>3.1%</td><td>Rp 410jt</td><td>${statusBadge('Baru')}</td></tr>
            </tbody>
          </table>
        </article>
        <article class="panel">
          ${panelHeader('Pendapatan per Kategori', 'Distribusi kursus berdasarkan bidang')}
          ${donutChart()}
        </article>
      </div>
    </section>
  `
}

export function renderTransactions(state) {
  const metrics = [
    { label: 'TOTAL TRANSAKSI', value: '14,280', change: '+8.2%', iconName: 'transactions' },
    { label: 'TINGKAT REFUND', value: '0.82%', change: '-0.1%', tone: 'down', iconName: 'transactions' },
    { label: 'RATA-RATA TRANSAKSI', value: 'Rp 412.000', change: '+4.5%', iconName: 'transactions' },
    { label: 'TOLAK BAYAR', value: '4', change: '+2', tone: 'down', iconName: 'transactions' },
  ]

  return `
    ${topbar({
      title: 'Riwayat Transaksi',
      leftExtras: headerFilterDropdown('transactions', state),
      rightExtras: '',
    })}
    <section class="screen-content">
      <div class="metrics-grid">${metrics.map(metricCard).join('')}</div>
      <div class="content-grid content-grid-transactions">
        <article class="panel">
          ${panelHeader('Tren Volume Transaksi', 'Data transaksi harian seminggu terakhir', '<span class="chart-legend"><span class="legend-dot" style="background:#3182f6"></span>Berhasil</span>')}
          ${barChart(['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'], [410, 370, 510, 435, 620, 580, 485])}
        </article>
        <div class="stack-panels">
          <article class="panel">
            ${panelHeader('Filter Lanjutan')}
            <div class="filter-stack">
              <label>KATEGORI PRODUK</label>
              <input class="form-input" />
              <label>METODE PEMBAYARAN</label>
              <div class="split-buttons">
                <button class="toolbar-chip center-chip"><span class="button-icon">${icon('card')}</span>Kartu</button>
                <button class="toolbar-chip center-chip"><span class="button-icon">${icon('wallet')}</span>E-Wallet</button>
              </div>
              <button class="primary-button">Terapkan Filter</button>
            </div>
          </article>
          <article class="panel panel-alert">
            ${panelHeader('SOROTAN ANOMALI', '', '<span class="button-icon alert-icon">' + icon('info') + '</span>')}
            <p class="alert-copy">Terdeteksi lonjakan transaksi sebesar <strong>15%</strong> pada kategori <strong>Pemrograman</strong> dalam 2 jam terakhir dari wilayah tertentu.</p>
            <div class="alert-strip"><span>Potensi Refund:</span><strong>+2.4%</strong></div>
            <button class="ghost-button block-button">Tinjau Detail</button>
          </article>
        </div>
      </div>
      <article class="panel">
        ${panelHeader('Ledger Transaksi Terbaru', 'Menampilkan 5 transaksi terakhir', '<button class="link-button small-link">Lihat Semua</button>')}
        <table class="simple-table transaction-table">
          <thead><tr><th>ID TRANSAKSI</th><th>TANGGAL</th><th>NAMA PENGGUNA</th><th>KURSUS / PRODUK</th><th>JUMLAH (IDR)</th><th>METODE</th><th>STATUS</th></tr></thead>
          <tbody>
            <tr><td>TX-9021</td><td>24 Mei 2024</td><td>Budi Santoso</td><td>Mastering React JS</td><td>Rp 450.000</td><td>Stripe</td><td>${statusBadge('Berhasil')}</td></tr>
            <tr><td>TX-9022</td><td>24 Mei 2024</td><td>Siti Aminah</td><td>UI/UX Design Fundamentale</td><td>Rp 320.000</td><td>PayPal</td><td>${statusBadge('Berhasil')}</td></tr>
            <tr><td>TX-9023</td><td>23 Mei 2024</td><td>Andi Wijaya</td><td>Python untuk Data Science</td><td>Rp 550.000</td><td>Apple Pay</td><td>${statusBadge('Refund', 'red')}</td></tr>
            <tr><td>TX-9024</td><td>23 Mei 2024</td><td>Lestari Putri</td><td>Business English Pro</td><td>Rp 275.000</td><td>Stripe</td><td>${statusBadge('Menunggu')}</td></tr>
            <tr><td>TX-9025</td><td>22 Mei 2024</td><td>Rian Hidayat</td><td>Manajemen Proyek Agile</td><td>Rp 410.000</td><td>Credit Card</td><td>${statusBadge('Berhasil')}</td></tr>
          </tbody>
        </table>
      </article>
    </section>
  `
}

export function renderEngagement(state) {
  const metrics = [
    { label: 'TINGKAT PENYELESAIAN', value: '68.4%', change: '+2.5%', iconName: 'book' },
    { label: 'WAKTU PENYELESAIAN', value: '14 Hari', change: '-1 Hari', tone: 'down', iconName: 'clock' },
    { label: 'SESI PER PELAJAR', value: '12.4', change: '+0.8', iconName: 'activity' },
    { label: 'DURASI BELAJAR', value: '18 Min', change: '-2 Min', tone: 'down', iconName: 'info' },
  ]

  return `
    ${topbar({
      title: 'Analisis Keterlibatan Pelajar',
      leftExtras: headerFilterDropdown('engagement', state),
      rightExtras: '',
    })}
    <section class="screen-content">
      <div class="toolbar-row panel">
        <div class="toolbar-row-left">
          <span class="filter-inline"><span class="button-icon">${icon('filter')}</span>Filter:</span>
          ${engagementFilterDropdown('category', 'Kategori Kursus', state)}
        </div>
        <button class="primary-button inline-primary" data-engagement-reset="true">Reset</button>
      </div>
      <div class="metrics-grid">${metrics.map(metricCard).join('')}</div>
      <div class="content-grid content-grid-engagement">
        <article class="panel">
          ${panelHeader('Corong Penurunan Pelajar per Pelajaran', 'Persentase pelajar yang melanjutkan ke tahap berikutnya')}
          ${lineChart({
            values: [100, 92, 85, 78, 69, 64, 61],
            labels: ['Bab 1', 'Bab 2', 'Bab 3', 'Bab 4', 'Bab 5', 'Bab 6', 'Selesai'],
            yLabels: ['100%', '75%', '50%', '25%', '0%'],
          })}
        </article>
        <article class="panel">
          ${panelHeader('Waktu Akses Terpopuler', 'Intensitas aktivitas pelajar (24 jam)')}
          ${heatMap()}
        </article>
      </div>
      <div class="content-grid content-grid-two">
        <article class="panel">
          ${panelHeader('Pelajaran Perlu Perhatian', 'Pelajaran dengan tingkat berhenti tertinggi', statusBadge('Butuh Perbaikan', 'red'))}
          <table class="simple-table at-risk-table">
            <thead><tr><th>Judul Pelajaran</th><th>Tingkat Berhenti</th><th>Alasan Utama</th></tr></thead>
            <tbody>
              <tr><td>Dasar Pemrograman Python</td><td class="negative-text">32%</td><td>Kuis Terlalu Sulit</td></tr>
              <tr><td>Arsitektur Cloud Lanjutan</td><td class="negative-text">28%</td><td>Video Terlalu Panjang</td></tr>
              <tr><td>Manajemen Proyek Agile</td><td class="negative-text">25%</td><td>Materi Kurang Jelas</td></tr>
              <tr><td>Desain UI Modern</td><td class="negative-text">22%</td><td>Butuh Contoh Praktis</td></tr>
            </tbody>
          </table>
        </article>
        <article class="panel">
          ${panelHeader('Analisis Kohort Pendaftaran', 'Retensi pelajar berdasarkan bulan pendaftaran', '<button class="link-button small-link">Unduh Detail</button>')}
          <table class="simple-table cohort-table">
            <thead><tr><th>Bulan Pendaftaran</th><th>Jumlah Pelajar</th><th>Tingkat Retensi</th></tr></thead>
            <tbody>
              <tr><td>Januari 2024</td><td>1.200</td><td>85%</td></tr>
              <tr><td>Februari 2024</td><td>1.450</td><td>82%</td></tr>
              <tr><td>Maret 2024</td><td>1.100</td><td>88%</td></tr>
              <tr><td>April 2024</td><td>1.600</td><td>79%</td></tr>
              <tr><td>Mei 2024</td><td>1.300</td><td>84%</td></tr>
            </tbody>
          </table>
        </article>
      </div>
    </section>
  `
}

export function renderUsers(state) {
  const metrics = [
    { label: 'Total Pengguna', value: '120.450', change: '+12%', iconName: 'users' },
    { label: 'Pengguna Baru (Bulan Ini)', value: '4.520', change: '+5.4%', iconName: 'users' },
    { label: 'Pengguna Berbayar', value: '18.230', change: '+8.1%', iconName: 'arrowUp' },
    { label: 'Pengguna Tidak Aktif', value: '2.105', change: '-2.4%', tone: 'down', iconName: 'arrowDown' },
  ]

  return `
    ${topbar({
      title: 'Daftar Pengguna & Segmen',
      leftExtras: headerFilterDropdown('users', state),
      rightExtras: '',
    })}
    <section class="screen-content">
      <div class="metrics-grid">${metrics.map(metricCard).join('')}</div>
      <article class="panel">
        <div class="table-toolbar">
          ${toolbarSearch('Cari nama atau email...')}
          <div class="table-toolbar-actions">
            <button class="ghost-button inline-button"><span class="button-icon">${icon('filter')}</span>Filter</button>
            <button class="ghost-button inline-button"><span class="button-icon">${icon('download')}</span>Ekspor CSV</button>
          </div>
        </div>
        <table class="simple-table users-table">
          <thead><tr><th>Nama & Kontak</th><th>Lokasi</th><th>Gender</th><th>Status</th><th>Pembelian</th><th>Tingkat Penyelesaian</th><th></th></tr></thead>
          <tbody>
            ${users
              .map(
                (user, index) => `
                  <tr class="${index === 0 ? 'clickable-row' : ''}" ${index === 0 ? 'data-screen="user-detail"' : ''}>
                    <td>
                      <div class="user-cell">
                        <strong>${user.name}</strong>
                        <span><span class="inline-icon">${icon('mail')}</span>${user.email}</span>
                      </div>
                    </td>
                    <td><span class="location-inline"><span class="inline-icon">${icon('location')}</span>${user.location}</span></td>
                    <td>${user.gender}</td>
                    <td>${user.status === 'Tidak Aktif' ? statusBadge(user.status) : user.status}</td>
                    <td><div class="purchase-cell"><strong>${user.purchase}</strong><span>${user.orders}</span></div></td>
                    <td>${progressBar(user.completion, true)}</td>
                    <td><button class="more-button" aria-label="more">${icon('more')}</button></td>
                  </tr>
                `,
              )
              .join('')}
          </tbody>
        </table>
        <div class="table-footer">
          <span>Menampilkan 1 - 5 dari 120.450 pengguna</span>
          <div class="pagination"><button>‹</button><button class="page-active">1</button><button>2</button><button>3</button><button>›</button></div>
        </div>
      </article>
    </section>
  `
}

export function renderUserDetail(state) {
  return `
    ${topbar({
      title: 'Detail Profil Pengguna',
      leftExtras: headerFilterDropdown('userDetail', state) + segmented(['Exec', 'Product', 'Instructor']),
      rightExtras: '',
    })}
    <section class="screen-content">
      <div class="detail-grid">
        <article class="panel profile-card">
          <div class="profile-top"><span class="profile-avatar">${icon('user')}</span><div><h2>Budi Santoso</h2>${statusBadge('Premium')}</div></div>
          <div class="profile-meta">
            <p><span class="inline-icon">${icon('mail')}</span>budi.santoso@email.com</p>
            <p><span class="inline-icon">${icon('location')}</span>Jakarta, Indonesia</p>
            <p><span class="inline-icon">${icon('calendar')}</span>Bergabung: 12 Januari 2023</p>
          </div>
          <div class="profile-columns"><div><span>KANAL AKUISISI:</span><strong>IKLAN FACEBOOK</strong></div></div>
          <div class="profile-actions">
            <button class="primary-button">Tambah Catatan Internal</button>
            <div class="split-buttons">
              <button class="ghost-button inline-button"><span class="button-icon">${icon('flag')}</span>Tandai Akun</button>
              <button class="ghost-button inline-button"><span class="button-icon">${icon('download')}</span>Unduh Laporan</button>
            </div>
          </div>
        </article>
        <article class="panel"><div class="detail-stat"><span class="metric-icon">${icon('activity')}</span><div><span class="metric-label">LTV (NILAI SEUMUR HIDUP)</span><strong>Rp 12.450.000</strong></div></div></article>
        <article class="panel"><div class="detail-stat"><span class="metric-icon tone-green">${icon('wallet')}</span><div><span class="metric-label">TOTAL PEMBELIAN</span><strong>8</strong></div></div></article>
        <article class="panel"><div class="detail-stat"><span class="metric-icon tone-purple">${icon('book')}</span><div><span class="metric-label">PENYELESAIAN KURSUS</span><strong>72%</strong></div></div></article>
        <article class="panel"><div class="detail-stat"><span class="metric-icon tone-orange">${icon('clock')}</span><div><span class="metric-label">RATA-RATA DURASI SESI</span><strong>45 Menit</strong></div></div></article>
      </div>
      <div class="content-grid content-grid-two">
        <article class="panel">
          ${panelHeader('Linimasa Aktivitas Belajar', 'Aktivitas interaksi terakhir pada platform')}
          <div class="timeline">
            ${[
              ['Memulai Modul React Hooks', 'Menyelesaikan video tutorial UseEffect dan UseState.', '10:45 AM', 'green', 'book'],
              ['Lulus Kuis Dasar JavaScript', 'Mendapatkan skor 95% pada kuis pengulangan dan logika.', 'Kemarin', 'orange', 'sales'],
              ['Pembelian Kursus: Data Science', 'Transaksi TXN-9021 dikonfirmasi dan akses dibuka.', '3 Hari Lalu', 'blue', 'wallet'],
              ['Sertifikat Diterbitkan', 'Selamat! Sertifikat Dasar Akuntansi telah dapat diunduh.', '1 Bulan Lalu', 'purple', 'activity'],
            ]
              .map(
                ([title, desc, time, tone, iconName]) => `
                  <div class="timeline-item">
                    <span class="timeline-dot tone-${tone}">${icon(iconName)}</span>
                    <div class="timeline-copy">
                      <div class="timeline-head"><strong>${title}</strong><span>${time}</span></div>
                      <p>${desc}</p>
                    </div>
                  </div>
                `,
              )
              .join('')}
          </div>
        </article>
        <article class="panel">
          ${panelHeader('Detail Engagement per Kursus', 'Status kemajuan kursus yang sedang diikuti')}
          <div class="course-progress-list">
            <div class="course-progress-item"><div><strong>Pemrograman Web Fullstack</strong><span>Terakhir diakses: 2 hari yang lalu</span></div><div class="course-progress-meta">${statusBadge('Aktif')}${progressBar(85)}</div></div>
            <div class="course-progress-item"><div><strong>Strategi Pemasaran Digital</strong><span>Terakhir diakses: Sekarang</span></div><div class="course-progress-meta">${statusBadge('Aktif')}${progressBar(40)}</div></div>
            <div class="course-progress-item"><div><strong>Dasar-Dasar Akuntansi</strong><span>Terakhir diakses: 1 bulan yang lalu</span></div><div class="course-progress-meta">${statusBadge('Selesai', 'blue')}${progressBar(100)}</div></div>
          </div>
        </article>
      </div>
      <article class="panel">
        ${panelHeader('Riwayat Transaksi', 'Semua pembelian yang pernah dilakukan oleh pengguna ini', '<button class="link-button small-link">Lihat Semua</button>')}
        <table class="simple-table transaction-table">
          <thead><tr><th>ID TRANSAKSI</th><th>TANGGAL</th><th>NAMA PRODUK</th><th>JUMLAH</th><th>METODE</th><th>STATUS</th></tr></thead>
          <tbody>
            <tr><td class="link-cell">TXN-9021</td><td>15 Okt 2023</td><td>Data Science Dasar</td><td>Rp 850.000</td><td>Gopay</td><td>${statusBadge('Berhasil')}</td></tr>
            <tr><td class="link-cell">TXN-8842</td><td>02 Sep 2023</td><td>UX Design Mastery</td><td>Rp 1.200.000</td><td>Kartu Kredit</td><td>${statusBadge('Berhasil')}</td></tr>
            <tr><td class="link-cell">TXN-7651</td><td>20 Agu 2023</td><td>Bisnis Digital 101</td><td>Rp 450.000</td><td>Transfer Bank</td><td>${statusBadge('Berhasil')}</td></tr>
            <tr><td class="link-cell">TXN-6540</td><td>10 Jul 2023</td><td>Python Lanjutan</td><td>Rp 950.000</td><td>OVO</td><td>${statusBadge('Berhasil')}</td></tr>
            <tr><td class="link-cell">TXN-5432</td><td>05 Jun 2023</td><td>Analisis Pasar</td><td>Rp 600.000</td><td>Gopay</td><td>${statusBadge('Berhasil')}</td></tr>
          </tbody>
        </table>
      </article>
      <article class="panel admin-note">
        <div class="admin-note-copy"><span class="button-icon">${icon('info')}</span><div><h3>Wawasan Admin</h3><p>Pengguna ini menunjukkan loyalitas tinggi dengan rata-rata belanja di atas Rp 1.000.000 per kuartal. Pertimbangkan untuk memberikan akses kursus 'Beta' eksklusif untuk menjaga tingkat keterlibatan.</p></div></div>
      </article>
    </section>
  `
}
