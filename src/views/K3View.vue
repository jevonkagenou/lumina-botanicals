<template>
  <div class="page k3-page">
    <header class="k3-header">
      <div class="header-overlay"></div>
      <div class="header-content animate-slide-up fade-delay-1">
        <h1 class="text-gradient">Console Matriks Bahaya & Mitigasi (HIRADC)</h1>
        <p>Sistem Pengendalian Klasifikasi Risiko Terpusat PT Lumina Natura Indonesia.</p>
      </div>
    </header>

    <div class="dashboard-container animate-slide-up fade-delay-2">
      <aside class="sidebar-areas">
        <div class="sidebar-header">
          <div class="brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <h3 class="sidebar-title">ZONASI PABRIK</h3>
        </div>

        <nav class="area-nav" ref="areaNavRef">
          <!-- Scroll hint (only visible on mobile via CSS) -->
          <div class="scroll-hint-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Geser untuk melihat zona lain
          </div>

          <!-- Edukasi Tab (Top) -->
          <button :class="['nav-item', 'nav-edukasi', { active: activeTab === 'edukasi' }]" @click="activeTab = 'edukasi'">
            <div class="active-indicator" v-if="activeTab === 'edukasi'"></div>
            <div class="nav-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </div>
            <span class="nav-label">Pusat Edukasi K3</span>
          </button>

          <button v-for="area in k3Data" :key="area.id" :class="['nav-item', { active: activeTab === area.id }]"
            @click="activeTab = area.id">
            <div class="active-indicator" v-if="activeTab === area.id"></div>

            <div class="nav-icon-wrapper">
              <svg v-if="area.id === 'gudang'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              <svg v-if="area.id === 'lab'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 22h6"></path>
                <path d="M10 22V10l-3-3V2h10v5l-3 3v12"></path>
              </svg>
              <svg v-if="area.id === 'produksi'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                </path>
              </svg>
              <svg v-if="area.id === 'ipal'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
              </svg>
            </div>

            <span class="nav-label">{{ area.name }}</span>

            <div class="spacer"></div>

            <div class="status-dot-wrapper" :title="'Risiko: ' + area.tingkatRisiko">
              <span class="status-dot" :class="getRiskClass(area.tingkatRisiko)"></span>
            </div>
          </button>
        </nav>
      </aside>

      <main class="dashboard-main">
        <transition name="fade-slide" mode="out-in">
          <div v-if="activeTab !== 'edukasi'" :key="activeTab" class="bento-container">

            <div class="bento-header animate-slide-up fade-delay-1">
              <div class="bh-info">
                <span class="bh-subtitle">Analisis Zona Kritis</span>
                <h2>{{ currentTabData.lokasi }}</h2>
              </div>
              <div class="bh-score">
                <div class="score-info">
                  <span class="score-label">Risk Index</span>
                  <span class="score-value" :class="getRiskClass(currentTabData.tingkatRisiko) + '-text'">
                    {{ currentTabData.score }}/100
                  </span>
                </div>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" :class="getRiskClass(currentTabData.tingkatRisiko) + '-bg'"
                    :style="{ width: currentTabData.score + '%' }">
                  </div>
                </div>
              </div>
            </div>

            <div class="bento-hazards animate-slide-up fade-delay-2">
              <h3 class="section-title">
                <div class="icon-pulse" :class="'anim-' + getRiskClass(currentTabData.tingkatRisiko)"></div>
                Identifikasi Bahaya Utama
              </h3>
              <div class="hazard-cards-wrapper">
                <div v-for="(item, index) in currentTabData.bahaya" :key="index" class="hazard-card interactive-hover">
                  <div class="hc-top">
                    <span class="category-tag" :class="item.jenis.toLowerCase()">{{ item.jenis }}</span>
                    <div class="hc-icon-bg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path
                          d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z">
                        </path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg></div>
                  </div>
                  <h4 class="hc-source">{{ item.sumber }}</h4>
                  <div class="hc-details">
                    <p><strong>Pemicu:</strong> {{ item.penyebab }}</p>
                    <p class="impact-text"><strong>Dampak:</strong> {{ item.dampak }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bento-mitigation animate-slide-up fade-delay-3">
              <div class="mitigation-box sop-box interactive-hover">
                <div class="box-header">
                  <div class="icon-circle green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg></div>
                  <h3>Instruksi Pencegahan (SOP)</h3>
                </div>
                <ul class="task-list">
                  <li v-for="(cegah, index) in currentTabData.pencegahan" :key="index">
                    <span class="task-dot"></span>
                    {{ cegah }}
                  </li>
                </ul>
              </div>

              <div class="mitigation-box apd-box interactive-hover">
                <div class="box-header">
                  <div class="icon-circle blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                      <line x1="7" y1="7" x2="7.01" y2="7"></line>
                    </svg></div>
                  <h3>Persyaratan APD Wajib</h3>
                </div>
                <div class="apd-tags">
                  <span v-for="(apd, index) in currentTabData.apd" :key="index" class="apd-tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {{ apd }}
                  </span>
                </div>
                <div class="cctv-alert">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <span>Kepatuhan APD diawasi kamera AI 24/7.</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Video Section shown only when activeTab === 'edukasi' -->
          <div v-else key="edukasi" class="bento-container video-container">
            <div class="bento-header animate-slide-up fade-delay-1">
              <div class="bh-info">
                <span class="bh-subtitle">Materi Pelatihan Interaktif</span>
                <h2>Pusat Edukasi & Regulasi K3</h2>
              </div>
            </div>

            <div class="video-grid animate-slide-up fade-delay-2" style="grid-column: span 12; padding-top: 1rem;">
              <div class="video-card interactive-hover">
                <div class="iframe-container">
                  <iframe src="https://www.youtube.com/embed/_X6cCpONibE" title="Edukasi K3" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
                <div class="video-info">
                  <h4>Panduan Keselamatan & Kesehatan Kerja (K3) Industri</h4>
                  <p>Regulasi standar operasional pabrik yang wajib dipahami oleh seluruh staf dan operator.</p>
                </div>
              </div>
              <div class="video-card interactive-hover">
                <div class="iframe-container">
                  <iframe src="https://www.youtube.com/embed/-d_pO4tSOOY" title="Edukasi K3 Evakuasi" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
                <div class="video-info">
                  <h4>Protokol Evakuasi & Penanganan Darurat</h4>
                  <p>Simulasi jalur evakuasi dan penggunaan alat pemadam api ringan di area produksi.</p>
                </div>
              </div>
            </div>
          </div>

        </transition>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('edukasi')

const getRiskClass = (level) => {
  const l = level.toLowerCase()
  if (l.includes('sangat')) return 'sangat-tinggi'
  if (l.includes('tinggi')) return 'tinggi'
  if (l.includes('sedang')) return 'sedang'
  return 'rendah'
}

const k3Data = [
  {
    id: 'gudang',
    name: 'Gudang Bahan Baku',
    lokasi: 'Gudang Bahan Baku (Raw Material)',
    tingkatRisiko: 'Sedang',
    score: 45,
    bahaya: [
      { jenis: 'Fisik', sumber: 'Sistem Rak Stacking Tinggi', penyebab: 'Barang jatuh akibat overloading', dampak: 'Tertimpa beban berat, Kerusakan material' },
      { jenis: 'Fisik', sumber: 'Manuver Kendaraan Forklift', penyebab: 'Blind spot operator, overspeed', dampak: 'Tertabrak, cedera struktural' },
      { jenis: 'Ergonomi', sumber: 'Manual Material Handling', penyebab: 'Postur tubuh membungkuk', dampak: 'Low Back Pain (LBP)' }
    ],
    pencegahan: [
      'Pemberlakuan batas kecepatan maksimal 5 km/jam.',
      'Instalasi kaca cembung di setiap intersek lorong.',
      'SOP pengangkatan manual maksimal 25 kg. Di atas itu wajib APM.',
      'Pengecekan integritas korosi rak secara berkala.'
    ],
    apd: ['Safety Helmet', 'Sepatu Safety', 'High Visibility Vest', 'Sarung Tangan Mekanik']
  },
  {
    id: 'lab',
    name: 'Laboratorium Riset',
    lokasi: 'Laboratorium Riset & QA',
    tingkatRisiko: 'Tinggi',
    score: 75,
    bahaya: [
      { jenis: 'Kimia', sumber: 'Reagen Asam/Basa Kuat', penyebab: 'Tumpahan saat pemindahan bahan', dampak: 'Luka bakar kimia grade berat' },
      { jenis: 'Kimia', sumber: 'Reaksi Gas / Uap Solven', penyebab: 'Fume hood mati saat reaksi', dampak: 'Keracunan akut, iritasi mukosa' },
      { jenis: 'Fisik', sumber: 'Hot Plate & Ovens', penyebab: 'Menyentuh permukaan tanpa sarung tangan', dampak: 'Luka bakar termal derajat 2-3' }
    ],
    pencegahan: [
      'Preparasi kimia wajib dilakukan di Fume Hood berkalibrasi.',
      'MSDS wajib diintegrasikan pada setiap botol reagen.',
      'Emergency Eye Wash & Shower diverifikasi fungsinya mingguan.',
      'Pengelolaan limbah B3 ke pembuangan spesifik terkunci.'
    ],
    apd: ['Jas Lab Tahan Bahan Kimia', 'Goggles Anti-Cipratan', 'Respirator Organik', 'Sarung tangan Nitril']
  },
  {
    id: 'produksi',
    name: 'Ruang Produksi',
    lokasi: 'Ruang Produksi Utama (Mixing Area)',
    tingkatRisiko: 'Tinggi',
    score: 85,
    bahaya: [
      { jenis: 'Fisik', sumber: 'Mixer Homogenizer Industri', penyebab: 'Bypass sensor pintu pengaman (Interlock)', dampak: 'Amputasi ekstremitas, Cedera fatal' },
      { jenis: 'Fisik', sumber: 'Aktivasi Motor Mesin', penyebab: 'Paparan bising kontinu > 85 dBA', dampak: 'Penurunan ambang pendengaran (NIHL)' },
      { jenis: 'Kimia', sumber: 'Penuangan Serbuk', penyebab: 'Exhaust Ventilation undersized', dampak: 'ISPA, deposisi partikulat' }
    ],
    pencegahan: [
      'Penerapan ketat Protokol LOTO (Lock Out Tag Out).',
      'Machine Guarding dilarang dimodifikasi.',
      'Rotasi pekerja (<2 jam parsial di area bising).',
      'Maintaining Positive Air Pressure & HEPA filters cycle.'
    ],
    apd: ['Hairnet & Masker Steril', 'Wearpack Antistatis', 'Earmuff / Earplug', 'Sepatu Boot Sanitasi']
  },
  {
    id: 'ipal',
    name: 'Fasilitas IPAL',
    lokasi: 'Fasilitas IPAL (Pengolahan Limbah)',
    tingkatRisiko: 'Sangat Tinggi',
    score: 98,
    bahaya: [
      { jenis: 'Fisik', sumber: 'Kolam Bak Aerasi', penyebab: 'Lantai tanpa traksi, pagar absen', dampak: 'Tenggelam lumpur aktif' },
      { jenis: 'Kimia', sumber: 'Gas Beracun (H2S)', penyebab: 'Dekomposisi anaerob di Confined Space', dampak: 'Pingsan instan, Asfiksia letal' },
      { jenis: 'Biologis', sumber: 'Bakteri Patogen Lumpur', penyebab: 'Luka terbuka kontak material', dampak: 'Infeksi sepsis, Dermatitis' }
    ],
    pencegahan: [
      'Pemasangan perimeter pagar baja 120 cm berkeliling kolam.',
      'Entry permit ketat untuk Confined Space & Buddy System.',
      'Deployment Gas Detector Portabel sebelum shift.',
      'Imunisasi/Vaksinasi wajib bagi Operator IPAL.'
    ],
    apd: ['Full Face Respirator', 'Heavy Duty PVC Gloves', 'Sepatu Boot Karet', 'Harness / Fall Protection']
  }
]

const currentTabData = computed(() => k3Data.find(area => area.id === activeTab.value))
</script>

<style scoped>
/* --- BASE & ANIMATIONS --- */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

.page {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #0f172a;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideUpFade {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

.animate-slide-up {
  opacity: 0;
  animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.fade-delay-1 {
  animation-delay: 0.1s;
}

.fade-delay-2 {
  animation-delay: 0.2s;
}

.fade-delay-3 {
  animation-delay: 0.3s;
}

.fade-delay-4 {
  animation-delay: 0.4s;
}

/* --- HEADER --- */
.k3-header {
  position: relative;
  background-color: #020617;
  /* Slate 950 */
  border-radius: 20px;
  padding: 6rem 2rem;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 0%, rgba(16, 185, 129, 0.2), transparent 50%),
    radial-gradient(circle at 80% 100%, rgba(15, 118, 110, 0.2), transparent 50%);
  pointer-events: none;
}

.header-content {
  position: relative;
  z-index: 2;
}

.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.header-content p {
  color: #94a3b8;
  font-size: 1.1rem;
}

/* --- DASHBOARD LAYOUT --- */
.dashboard-container {
  display: flex;
  background: #f8fafc;
  /* Latar belakang luar super bersih */
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03), 0 10px 40px rgba(0, 0, 0, 0.04);
  border: 1px solid #e2e8f0;
  overflow: hidden;
  min-height: 800px;
}

/* --- SIDEBAR (MENGKUTI GAMBAR) --- */
.sidebar-areas {
  width: 380px;
  flex-shrink: 0;
  background: #ffffff;
  /* Sisi kiri putih bersih */
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f1f5f9;
  z-index: 10;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 2rem;
  border-bottom: 1px solid #f1f5f9;
}

.brand-icon {
  color: #10b981;
  width: 28px;
  height: 28px;
}

.sidebar-title {
  font-weight: 800;
  font-size: 1.1rem;
  color: #0f172a;
  margin: 0;
  letter-spacing: 0.5px;
}

.area-nav {
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
}

/* Scroll hint badge — hidden on desktop, shown on mobile */
.scroll-hint-badge {
  display: none;
  align-items: center;
  gap: 0.4rem;
  background: #f0fdf4;
  color: var(--primary-dark);
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  padding: 0.45rem 0.85rem;
  font-size: 0.73rem;
  font-weight: 700;
  letter-spacing: 0.3px;
  white-space: nowrap;
  flex-shrink: 0;
  align-self: flex-start;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  background: #fafafa;
  border: 1px solid #f1f5f9;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-item:hover {
  background: #f8fafc;
  transform: translateX(4px);
}

.nav-item.active {
  background: #ffffff;
  box-shadow: 0 10px 30px -5px rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.1);
  transform: translateX(6px);
}

/* Hapus garis hijau kuno, gunakan gaya floating pill sepenuhnya */
.active-indicator {
  display: none;
}

.nav-icon-wrapper {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #f1f5f9;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}

.nav-icon-wrapper svg {
  width: 20px;
  height: 20px;
}

.nav-item.active .nav-icon-wrapper {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #ffffff;
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
  transform: scale(1.1) rotate(5deg);
}

.nav-label {
  flex: 1;
  font-size: 0.95rem;
  line-height: 1.3;
  font-weight: 700;
  color: #475569;
  text-align: left;
  margin-right: auto;
}

.nav-item.active .nav-label {
  color: #0f172a;
  font-weight: 800;
}

.spacer {
  display: none;
}

/* Premium Status Dots */
.status-dot-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 50%;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.sedang {
  background-color: #f59e0b;
  box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.2);
}

.tinggi {
  background-color: #ef4444;
  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.2);
}

@keyframes severePulse {
  0% {
    box-shadow: 0 0 0 0 rgba(185, 28, 28, 0.5);
  }

  70% {
    box-shadow: 0 0 0 8px rgba(185, 28, 28, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(185, 28, 28, 0);
  }
}

.sangat-tinggi {
  background-color: #b91c1c;
  animation: severePulse 1.5s infinite;
}

/* --- MAIN BENTO GRID DASHBOARD --- */
.dashboard-main {
  flex: 1;
  padding: 2rem;
  background: #f8fafc;
  /* Latar abu-abu sangat muda */
  overflow-y: auto;
}

.bento-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

/* 1. Header Banner */
.bento-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
  border: 1px solid #e2e8f0;
}

.bh-subtitle {
  font-size: 0.9rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.bh-info h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0.3rem 0 0;
}

.bh-score {
  width: 200px;
}

.score-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.score-label {
  color: #64748b;
  font-size: 0.9rem;
}

.tinggi-text,
.sangat-tinggi-text {
  color: #ef4444;
}

.sedang-text {
  color: #f59e0b;
}

.progress-bar-bg {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  border-radius: 10px;
  transition: width 1s ease-in-out;
}

.tinggi-bg,
.sangat-tinggi-bg {
  background: #ef4444;
}

.sedang-bg {
  background: #f59e0b;
}

/* Section Titles */
.section-title {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.2rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 1.2rem;
}

.icon-pulse {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

@keyframes pSedang {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(245, 158, 11, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0);
  }
}

@keyframes pTinggi {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(239, 68, 68, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}

@keyframes pSangat {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(185, 28, 28, 0.8);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(185, 28, 28, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(185, 28, 28, 0);
  }
}

.icon-pulse.anim-sedang {
  background: #f59e0b;
  animation: pSedang 2s infinite ease-in-out;
}

.icon-pulse.anim-tinggi {
  background: #ef4444;
  animation: pTinggi 2s infinite ease-in-out;
}

.icon-pulse.anim-sangat-tinggi {
  background: #b91c1c;
  animation: pSangat 1.5s infinite ease-in-out;
}

/* 2. Interactive Hazards */
.hazard-cards-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.2rem;
}

.hazard-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
}

.interactive-hover {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.interactive-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  /* Enhanced shadow */
  border-color: #cbd5e1;
}

.hc-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.hc-icon-bg {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #fee2e2;
  color: #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hc-icon-bg svg {
  width: 20px;
  height: 20px;
}

.category-tag {
  font-size: 0.75rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 6px;
  text-transform: uppercase;
}

.category-tag.kimia {
  background: #e0e7ff;
  color: #4338ca;
}

.category-tag.fisik {
  background: #ffedd5;
  color: #c2410c;
}

.category-tag.ergonomi {
  background: #f3e8ff;
  color: #7e22ce;
}

.category-tag.biologis {
  background: #dcfce7;
  color: #15803d;
}

.hc-source {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 1rem;
  line-height: 1.4;
}

.hc-details p {
  font-size: 0.9rem;
  color: #475569;
  margin: 0 0 0.5rem;
  line-height: 1.5;
}

.hc-details strong {
  color: #334155;
}

.impact-text strong {
  color: #ef4444;
}

/* 3. Mitigations Section */
.bento-mitigation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
}

.mitigation-box {
  background: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
}

.box-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.box-header h3 {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}

.icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle svg {
  width: 20px;
  height: 20px;
}

.icon-circle.green {
  background: #dcfce7;
  color: #10b981;
}

.icon-circle.blue {
  background: #e0f2fe;
  color: #0284c7;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.task-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.5;
}

.task-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  margin-top: 6px;
  flex-shrink: 0;
  box-shadow: 0 0 0 3px #dcfce7;
}

.apd-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.apd-tag {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #334155;
  display: flex;
  align-items: center;
  gap: 8px;
}

.apd-tag svg {
  width: 16px;
  height: 16px;
  color: #10b981;
}

.cctv-alert {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff1f2;
  padding: 12px 16px;
  border-radius: 12px;
  border-left: 4px solid #ef4444;
  color: #be185d;
  font-size: 0.85rem;
  font-weight: 700;
}

.cctv-alert svg {
  width: 20px;
  height: 20px;
  color: #ef4444;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

/* TRANSITIONS */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

/* VIDEO SECTION */
.video-section {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.video-card {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
}

.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  /* 16:9 Aspect Ratio */
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.video-info {
  padding: 1.5rem;
}

.video-info h4 {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 0.5rem;
}

.video-info p {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

/* ==========================================
   RESPONSIVE - K3VIEW
   ========================================== */

/* === Tablet <= 1024px === */
@media (max-width: 1024px) {
  .dashboard-container {
    flex-direction: column;
    min-height: unset;
  }

  .sidebar-areas {
    width: 100%;
    border-right: none;
    border-bottom: 2px solid #e2e8f0;
    flex-shrink: 0;
  }

  /* Show the scroll hint badge */
  .scroll-hint-badge {
    display: flex;
  }

  .area-nav {
    flex-direction: row;
    overflow-x: auto;
    padding: 0.75rem 1rem 1rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    gap: 0.5rem;
    align-items: center;
  }

  .area-nav::-webkit-scrollbar { display: none; }

  /* On horizontal scroll: hide the icon to save space, show only text + dot */
  .nav-icon-wrapper {
    display: none;
  }

  .nav-item {
    min-width: 150px;
    flex-shrink: 0;
    border-radius: 12px;
    padding: 10px 14px;
    gap: 8px;
    background: #ffffff;
    border: 1.5px solid #e2e8f0;
  }

  .nav-item:hover {
    transform: translateY(-2px);
    border-color: #a7f3d0;
    background: #f0fdf4;
  }

  .nav-item.active {
    transform: translateY(-2px);
    background: #ecfdf5;
    border-color: #34d399;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
  }

  .nav-item.active .nav-label {
    color: var(--primary-dark);
  }

  .nav-label {
    font-size: 0.88rem;
    white-space: nowrap;
  }


  .bento-mitigation {
    grid-template-columns: 1fr;
  }

  .bento-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .bh-score {
    width: 100%;
    max-width: 400px;
  }
}

/* === Small tablet / large phone <= 768px === */
@media (max-width: 768px) {
  .k3-header {
    padding: 3.5rem 1.5rem;
    border-radius: 16px;
  }

  .text-gradient {
    font-size: 1.8rem;
    letter-spacing: -0.5px;
  }

  .header-content p {
    font-size: 1rem;
  }

  .dashboard-main {
    padding: 1.25rem 1rem;
  }

  .bento-container {
    gap: 1.25rem;
  }

  .bento-header {
    padding: 1.25rem;
    border-radius: 14px;
  }

  .bh-info h2 {
    font-size: 1.4rem;
    word-break: break-word;
  }

  .hazard-cards-wrapper {
    grid-template-columns: 1fr;
  }

  .hazard-card {
    padding: 1.25rem;
  }

  .nav-item {
    min-width: 170px;
    padding: 10px 12px;
  }

  .nav-label {
    font-size: 0.85rem;
  }

  .nav-icon-wrapper {
    width: 38px;
    height: 38px;
  }

  .video-grid {
    grid-template-columns: 1fr;
  }

  .mitigation-box {
    padding: 1.5rem 1.25rem;
  }
}

/* === Phone <= 480px === */
@media (max-width: 480px) {
  .k3-header {
    padding: 3rem 1.25rem;
    border-radius: 14px;
  }

  .text-gradient {
    font-size: 1.5rem;
  }

  .sidebar-header {
    padding: 1rem 1rem 0.75rem;
  }

  .sidebar-title {
    font-size: 0.9rem;
  }

  .nav-item {
    min-width: 150px;
    padding: 8px 10px;
  }

  .nav-icon-wrapper {
    width: 34px;
    height: 34px;
    flex-shrink: 0;
  }

  .nav-icon-wrapper svg {
    width: 17px;
    height: 17px;
  }

  .dashboard-main {
    padding: 1rem 0.875rem;
  }

  .bento-header {
    padding: 1rem;
  }

  .bh-info h2 {
    font-size: 1.2rem;
  }

  .apd-tags {
    gap: 0.5rem;
  }

  .apd-tag {
    font-size: 0.82rem;
    padding: 6px 10px;
  }

  .task-list li {
    font-size: 0.88rem;
  }
}

/* === Very small phone <= 360px === */
@media (max-width: 360px) {
  .k3-header {
    padding: 2.5rem 1rem;
  }

  .text-gradient {
    font-size: 1.3rem;
  }

  .nav-item {
    min-width: 130px;
  }
}
</style>