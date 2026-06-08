<template>
  <div class="page profile-page">
    <!-- PROFILE HEADER (Luxury Styling) -->
    <header class="profile-header">
      <div class="header-overlay"></div>
      <div class="header-content animate-slide-up fade-delay-1">
        <h1 class="text-gradient">Company Profile & Legal Compliance</h1>
        <p>Integritas, inovasi alam, dan rancang bangun keselamatan industrial dalam satu atap.</p>
      </div>
    </header>

    <!-- ABOUT SECTION -->
    <section class="content-section about-section animate-slide-up fade-delay-2">
      <div class="about-grid">
        <div class="about-text">
          <h2 class="section-title">PT Lumina Natura Indonesia</h2>
          <div class="title-line"></div>
          <p>
            Berdiri sejak tahun 2022, <strong>PT Lumina Natura Indonesia</strong> telah mengukuhkan diri sebagai pionir manufaktur kosmetik organik berbasis teknologi hijau di Asia Tenggara. Berdedikasi penuh untuk menghadirkan formulasi perawatan kulit (*skincare*) yang merevitalisasi tingkat selular, sekaligus menjaga pelestarian ekosistem.
          </p>
          <p>
            Beroperasi di atas fasilitas seluas 5 Hektar di Kawasan Industri Hijau, *plant* kami didesain dengan standarisasi <em>Clean Room Class 100k</em>. Kami menyatukan rekayasa otomatisasi dispensing dengan kearifan botani loka. Faktor esensial kami: penerapan Sistem Manajemen Kesehatan dan Keselamatan Kerja (SMK3) secara absolut tanpa kompromi.
          </p>
        </div>
        
        <div class="about-stats">
          <div class="bg-card glass-card">
            <h3>Visi Korporat</h3>
            <p>"Menjadi suksesor kecantikan organik global yang memegang teguh *Zero Carbon Emission* dan *100% Occupational Safety Rate*."</p>
          </div>
          <div class="bg-card glass-card">
            <h3>Misi Strategis</h3>
            <ul class="mission-list">
              <li>
                <svg class="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Ekstraksi bahan alam bersertifikasi Fair-Trade.
              </li>
              <li>
                <svg class="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Protokol manufaktur berstandar CPKB Tertinggi.
              </li>
              <li>
                <svg class="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Pendekatan K3 *Predictive-Preventive*.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- TIMELINE SECTION -->
    <section class="content-section timeline-section animate-slide-up fade-delay-3">
      <h2 class="section-title text-center">Rekam Jejak Operasional & Sertifikasi</h2>
      <div class="center-line"></div>
      
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="year">2022</span>
            <h4>Pendirian Fasilitas *Eco-Factory*</h4>
            <p>Fase rancang bangun dengan blueprint K3 terintegrasi, mencakup pembangunan *underground waste management* kelas satu dan instalasi peredam seismik pada silo bahan baku berat.</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="year">2023</span>
            <h4>Akreditasi CPKB Tahap 1 BPOM</h4>
            <p>Perolehan sertifikasi bergengsi Cara Pembuatan Kosmetik yang Baik (CPKB). Membentuk satgas independen HSE (Health, Safety, Environment) yang bertanggung jawab langsung pada dewan direksi.</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="year">2024</span>
            <h4>Penghargaan Bendera Emas SMK3</h4>
            <p>Sukses melewati audit matriks ketat dari konsultan eksternal Kemenaker RI dengan skor 98.5%. Memecahkan rekor fasilitas kosmetik dengan status *Zero Fatality/Lost Time Injury*.</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="year">2026</span>
            <h4>Implementasi LMI *Digital Tracking*</h4>
            <p>Otomasi penuh keselamatan kerja. Mewajibkan penelusuran digital (*digital heartbeat*) untuk semua laporan anomali, kontrol insiden terpusat, dan evaluasi emisi *real-time*.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- LEGAL ACCORDION SECTION (Upgraded Animation & Layout) -->
    <section class="content-section legal-section animate-slide-up fade-delay-4">
      <div class="legal-header-box">
        <h2 class="section-title">Dokumen Landasan Hukum</h2>
        <p class="text-muted">Kepatuhan tak bersyarat terhadap instrumen perundang-undangan Republik Indonesia dan Organisasi Perburuhan Internasional (ILO).</p>
      </div>

      <div class="accordion">
        
        <!-- Accordion 1 -->
        <div class="accordion-item" :class="{ 'active': activeAccordion === 1 }">
          <button class="accordion-header" @click="toggleAccordion(1)" :aria-expanded="activeAccordion === 1">
            <div class="header-left">
              <span class="chapter-number">01</span>
              <h4>Undang-Undang No. 1 Tahun 1970</h4>
            </div>
            <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          <div class="accordion-collapse">
            <div class="accordion-body">
              <div class="body-content">
                <p>Menjadi instrumen fundamental (Keselamatan Kerja), mewajibkan PT Lumina Natura Indonesia menyediakan proteksi absolut atas setiap jiwa yang menginjakkan kaki di fasilitas ini.</p>
                <div class="legal-grid">
                  <div class="legal-clause">
                    <span class="clause-badge">Pasal 3</span>
                    <p>Integrasi syarat keselamatan kerja pada tahapan perencanaan dan instalasi mesin manufaktur putaran tinggi (Mixer Homogenizer).</p>
                  </div>
                  <div class="legal-clause">
                    <span class="clause-badge">Pasal 9 & 14</span>
                    <p>Pemberian Alat Pelindung Diri (APD) tak berbayar sesuai zonasi hazard dan mewajibkan induksi K3 spesifik biokimia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Accordion 2 -->
        <div class="accordion-item" :class="{ 'active': activeAccordion === 2 }">
          <button class="accordion-header" @click="toggleAccordion(2)" :aria-expanded="activeAccordion === 2">
            <div class="header-left">
              <span class="chapter-number">02</span>
              <h4>PP No. 50 Tahun 2012 (SMK3)</h4>
            </div>
            <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          <div class="accordion-collapse">
            <div class="accordion-body">
              <div class="body-content">
                <p>Menginstruksikan pendirian sistem manajemen mandiri yang menyatu dengan tulang punggung operasional korporat secara komprehensif.</p>
                <p>Prosedur di PT Lumina Natura digodok mengikuti siklus tertutup <strong>PDCA (Plan, Do, Check, Action)</strong>. Mengingat klasifikasi pabrik yang mengolah zat kimia terkonsentrasi tinggi, standarisasi diterapkan di batas ambang *Advanced Level* (166 kriteria audit).</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Accordion 3 -->
        <div class="accordion-item" :class="{ 'active': activeAccordion === 3 }">
          <button class="accordion-header" @click="toggleAccordion(3)" :aria-expanded="activeAccordion === 3">
            <div class="header-left">
              <span class="chapter-number">03</span>
              <h4>Tata Cara CPKB - BPOM RI</h4>
            </div>
            <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          <div class="accordion-collapse">
            <div class="accordion-body">
              <div class="body-content">
                <p>Regulasi Cara Pembuatan Kosmetik yang Baik (CPKB) guna mempertahankan jaminan mutu, sanitasi, dan sterilisasi produk akhir organik.</p>
                <ul class="styled-list">
                  <li><strong>Higiene Personalia:</strong> Rutinitas wajib sanitasi di de-dusting chamber, kelengkapan *shoe-cover*, masker N95 ganda, pelindung kepala (*hairnet*), dilarang membawa perhiasan ke zona isolasi.</li>
                  <li><strong>Rancang Bangun:</strong> Eliminasi sudut mati; area pertemuan dinding dan lantai menggunakan konstruksi lengkung (conus epoksi) anti lengket debu.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Accordion 4 -->
        <div class="accordion-item" :class="{ 'active': activeAccordion === 4 }">
          <button class="accordion-header" @click="toggleAccordion(4)" :aria-expanded="activeAccordion === 4">
            <div class="header-left">
              <span class="chapter-number">04</span>
              <h4>Permenaker No. 5 Tahun 2018</h4>
            </div>
            <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          <div class="accordion-collapse">
            <div class="accordion-body">
              <div class="body-content">
                <p>Dokumen batas toleransi Nilai Ambang Batas (NAB) terkait paparan iklim kerja, kebisingan, dan bahaya senyawa kimia.</p>
                <div class="legal-grid">
                  <div class="legal-clause">
                    <span class="clause-badge">Inspeksi Kebisingan</span>
                    <p>Enklosur akustik kelas industri pada fasilitas Boiler & Kompresor, mereduksi paparan operasional konstan hingga level aman di bawah 80 dBA.</p>
                  </div>
                  <div class="legal-clause">
                    <span class="clause-badge">Atmosfer Oksidator</span>
                    <p>Kalibrasi harian konsentrasi polutan mikroskopis udara (Ethanol, Metanol). Pengujian kapabilitas velositas vakum udara (*fume hood/LEV*).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeAccordion = ref(1)

const toggleAccordion = (id) => {
  if (activeAccordion.value === id) {
    activeAccordion.value = null
  } else {
    activeAccordion.value = id
  }
}
</script>

<style scoped>
/* --- KEYFRAMES --- */
@keyframes slideUpFade {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-slide-up {
  opacity: 0;
  animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.fade-delay-1 { animation-delay: 0.1s; }
.fade-delay-2 { animation-delay: 0.2s; }
.fade-delay-3 { animation-delay: 0.3s; }
.fade-delay-4 { animation-delay: 0.4s; }

.profile-page {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding-bottom: 2rem;
}

/* --- HERO HEADER --- */
.profile-header {
  position: relative;
  background-color: #020617; /* Slate 950 */
  border-radius: 20px;
  padding: 6rem 2rem;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.header-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
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
  background: linear-gradient(135deg, #ffffff 0%, #a7f3d0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  letter-spacing: -1px;
  font-weight: 800;
}

.header-content p {
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
}

/* --- SECTION TYPOGRAPHY --- */
.section-title {
  font-size: 2.2rem;
  color: #0f172a;
  margin-bottom: 0.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.title-line {
  width: 50px;
  height: 4px;
  background: var(--primary-light);
  border-radius: 2px;
  margin-bottom: 1.5rem;
}

.text-center { text-align: center; }
.center-line {
  width: 50px;
  height: 4px;
  background: var(--primary-light);
  border-radius: 2px;
  margin: 0.5rem auto 3rem;
}

/* --- ABOUT SECTION --- */
.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text p {
  font-size: 1.15rem;
  color: #475569;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.bg-card {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  margin-bottom: 1.5rem;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.bg-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: #cbd5e1;
}

.bg-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0; width: 4px;
  background: var(--primary-light);
}

.bg-card h3 {
  color: #0f172a;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.bg-card p {
  color: #64748b;
  font-style: italic;
  font-size: 1.05rem;
}

.mission-list {
  padding: 0;
  color: #475569;
  margin: 0;
  list-style: none;
}

.mission-list li {
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  line-height: 1.5;
}

.list-icon {
  width: 20px;
  height: 20px;
  color: var(--primary-light);
  flex-shrink: 0;
  margin-top: 2px;
}

/* --- LUXURY TIMELINE --- */
.timeline-section {
  background: #f8fafc;
  padding: 5rem 3rem;
  border-radius: 24px;
}

.timeline {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0; bottom: 0; left: 24px;
  width: 2px;
  background: linear-gradient(to bottom, #d1d5db 0%, #10b981 50%, #d1d5db 100%);
}

.timeline-item {
  position: relative;
  padding-left: 70px;
  margin-bottom: 4rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: 17px;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  border: 3px solid var(--primary-light);
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
  z-index: 2;
}

.timeline-item:hover .timeline-marker {
  background: var(--primary-light);
  box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.3);
}

.timeline-content {
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.02);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.timeline-content:hover {
  transform: translateX(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: #cbd5e1;
}

.year {
  display: inline-block;
  color: var(--primary-light);
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.timeline-content h4 {
  margin: 0 0 0.8rem;
  color: #0f172a;
  font-size: 1.4rem;
}

.timeline-content p {
  color: #64748b;
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
}

/* --- UPGRADED LEGAL ACCORDION (CSS Grid Animation) --- */
.legal-header-box {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.text-muted { color: #64748b; font-size: 1.1rem; }

.accordion {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.accordion-item {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.accordion-item:hover {
  border-color: #cbd5e1;
}

.accordion-item.active {
  border-color: var(--primary-light);
  box-shadow: 0 15px 35px rgba(16, 185, 129, 0.1);
}

.accordion-header {
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  font-family: inherit;
  transition: background 0.3s;
}

.accordion-item.active .accordion-header {
  background: rgba(16, 185, 129, 0.03);
  border-bottom: 1px solid #f1f5f9;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.chapter-number {
  font-size: 1.2rem;
  font-weight: 900;
  color: #cbd5e1;
  transition: color 0.3s;
}

.accordion-item.active .chapter-number {
  color: var(--primary-light);
}

.accordion-header h4 {
  margin: 0;
  font-size: 1.2rem;
  color: #1e293b;
  font-weight: 700;
  text-align: left;
}

.chevron-icon {
  width: 24px;
  height: 24px;
  color: #94a3b8;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s;
}

.accordion-item.active .chevron-icon {
  transform: rotate(180deg);
  color: var(--primary-light);
}

/* The magic CSS Grid animation for Accordion */
.accordion-collapse {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.accordion-item.active .accordion-collapse {
  grid-template-rows: 1fr;
}

.accordion-body {
  overflow: hidden;
}

.body-content {
  padding: 2rem;
  color: #475569;
  font-size: 1.05rem;
  line-height: 1.7;
}

.body-content p {
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.styled-list {
  padding-left: 1.5rem;
  margin: 0;
}

.styled-list li {
  margin-bottom: 0.8rem;
}

.legal-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.legal-clause {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.legal-clause p {
  margin-bottom: 0;
  font-size: 0.95rem;
}

.clause-badge {
  display: inline-block;
  background: #e2e8f0;
  color: #334155;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

/* --- RESPONSIVE --- */
@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 2rem; }
  .text-gradient { font-size: 2.5rem; }
  .profile-header { padding: 4rem 1.5rem; }
  .timeline-section { padding: 3rem 1.5rem; }
  .accordion-header { padding: 1.2rem 1.5rem; }
  .header-left { gap: 1rem; }
  .legal-grid { grid-template-columns: 1fr; }
  .section-title { font-size: 1.8rem; }
}

@media (max-width: 600px) {
  .profile-header { padding: 3rem 1.25rem; border-radius: 14px; }
  .text-gradient { font-size: 2rem; letter-spacing: -0.5px; }
  .header-content p { font-size: 1rem; }
  .timeline-item { padding-left: 52px; margin-bottom: 2rem; }
  .timeline-content { padding: 1.5rem; }
  .timeline-content h4 { font-size: 1.2rem; }
  .profile-page { gap: 3rem; }
  .timeline-section { padding: 2.5rem 1rem; }
  .about-text p { font-size: 1rem; }
  .bg-card { padding: 1.5rem; }
  .accordion-header { padding: 1rem 1.25rem; }
  .accordion-header h4 { font-size: 1.05rem; }
  .chapter-number { font-size: 1rem; }
  .body-content { padding: 1.25rem; font-size: 0.95rem; }
}
</style>