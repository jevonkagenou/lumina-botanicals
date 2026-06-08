<template>
  <div class="home-page">
    <!-- PREMIUM HERO SECTION -->
    <section class="hero-section">
      <!-- Animated UI Background Elements -->
      <div class="hero-bg-glow"></div>
      <div class="hero-grid-pattern"></div>
      
      <div class="hero-content">
        <div class="badge-pill animate-fade-in fade-delay-1">
          <svg class="h-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Sertifikasi CPKB & ISO 45001 Terakreditasi
        </div>
        
        <h1 class="hero-title animate-slide-up fade-delay-2">
          <span class="text-white">Ekstraksi Botani Modern.</span><br>
          <span class="text-gradient-gold">Keamanan Tanpa Kompromi.</span>
        </h1>
        
        <p class="hero-description animate-slide-up fade-delay-3">
          PT Lumina Natura Indonesia mempelopori sintesis rekayasa organik mutakhir berpadu dengan arsitektur Keselamatan dan Kesehatan Kerja (K3) kelas enterprise. Perlindungan absolut bagi aset terpenting kami: Manusia.
        </p>
        
        <div class="hero-actions animate-slide-up fade-delay-4">
          <router-link to="/k3" class="btn btn-glow">Akses Matriks Analitik K3</router-link>
          <router-link to="/profil" class="btn btn-outline-premium">
            Tinjau Regulasi Pabrik
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- METRICS SECTION (Luxury Corporate Style) -->
    <section class="stats-section">
      <div class="stat-card">
        <div class="stat-number">10+</div>
        <div class="stat-label">Tahun Operasional</div>
        <div class="stat-desc">Reputasi tak terbantahkan.</div>
      </div>
      <div class="stat-card highlight-metric">
        <div class="metric-glow"></div>
        <div class="stat-number text-emerald">3.5M</div>
        <div class="stat-label">Jam Indeks Keamanan</div>
        <div class="stat-desc">Zero Fatality Record (2022-2026).</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">500+</div>
        <div class="stat-label">Pakar Teknikal</div>
        <div class="stat-desc">Tersertifikasi BNSP & Kemenaker.</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">100%</div>
        <div class="stat-label">Indeks Integritas</div>
        <div class="stat-desc">Kepatuhan total CPKB tahap lanjut.</div>
      </div>
    </section>

    <!-- KEY PILLARS SECTION -->
    <section class="pillars-section">
      <div class="section-header">
        <h2>Infrastruktur K3 Papan Atas</h2>
        <div class="header-line"></div>
        <p>Arsitektur keamanan yang dirancang dengan metode <i>Predictive-Preventive</i>, melampaui batas standar industri manufaktur konvensional.</p>
      </div>

      <div class="pillars-grid">
        <!-- Pillar 1 -->
        <div class="pillar-card">
          <div class="pillar-icon-wrapper">
            <svg class="pillar-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <h3>Sistem Otomasi HVAC</h3>
          <p>Sensor pneumatik pada fasilitas laboratorium mempertahankan tekanan positif berkelanjutan dan filtrasi HEPA kelas 100k untuk sterilisasi absolut.</p>
        </div>
        
        <!-- Pillar 2 -->
        <div class="pillar-card">
          <div class="pillar-icon-wrapper">
            <svg class="pillar-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3>Proteksi Biomekanik</h3>
          <p>Standardisasi APD berspesifikasi militer pada wilayah tinggi hazard, ditopang oleh evaluasi postur ergonomi menggunakan pemodelan AI.</p>
        </div>

        <!-- Pillar 3 -->
        <div class="pillar-card">
          <div class="pillar-icon-wrapper">
            <svg class="pillar-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2V22"></path>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <h3>Zero-Toxic Emisi</h3>
          <p>Instalasi Pengolahan Air Limbah terpadu menetralisir residu sulfat melalui fiksasi seluler sebelum memulangkannya ke ekosistem.</p>
        </div>
      </div>
    </section>

    <!-- PREMIUM CTA -->
    <section class="bottom-cta-premium">
      <div class="cta-overlay"></div>
      <div class="cta-content">
        <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <h2>Protokol Insiden Kritis</h2>
        <p>Setiap deviasi operasional adalah prioritas. Salurkan temuan teknis (Near-Miss) Anda melalui jalur transmisi terenkripsi kami.</p>
        <router-link to="/lapor" class="btn btn-danger-glow">Inisiasi Laporan Sistem</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding-bottom: 3rem;
}

/* --- ANIMATION KEYFRAMES --- */
@keyframes slideUpFade {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slowPan {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-slide-up {
  opacity: 0;
  animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

.fade-delay-1 { animation-delay: 0.1s; }
.fade-delay-2 { animation-delay: 0.3s; }
.fade-delay-3 { animation-delay: 0.5s; }
.fade-delay-4 { animation-delay: 0.7s; }

/* --- PREMIUM HERO SECTION --- */
.hero-section {
  position: relative;
  background-color: #020617; /* Slate 950 */
  border-radius: 24px;
  padding: 8rem 4rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  min-height: 400px;
}

.hero-bg-glow {
  position: absolute;
  top: -50%; left: -20%; width: 140%; height: 200%;
  background: radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 60%);
  pointer-events: none;
  z-index: 1;
}

.hero-grid-pattern {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: 2;
  opacity: 0.5;
}

.hero-content {
  position: relative;
  max-width: 900px;
  z-index: 3;
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(16, 185, 129, 0.1);
  color: #34d399; /* Emerald 400 */
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1px solid rgba(16, 185, 129, 0.2);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.h-icon { width: 14px; height: 14px; }

.hero-title {
  font-size: 4.5rem;
  margin: 0 0 1.5rem;
  line-height: 1.05;
  letter-spacing: -1.5px;
  font-weight: 800;
}

.text-white { color: #f8fafc; }

.text-gradient-gold {
  background: linear-gradient(135deg, #34d399 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  color: #94a3b8; /* Slate 400 */
  margin-bottom: 3.5rem;
  line-height: 1.7;
  max-width: 85%;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
}

.btn {
  padding: 1.1rem 2.2rem;
  border-radius: 8px; /* More corporate sharp edges instead of pills */
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-glow {
  background: #10b981;
  color: #ffffff;
  position: relative;
  border: 1px solid #10b981;
}

.btn-glow::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.btn-glow:hover {
  transform: translateY(-2px);
  background: #059669;
}

.btn-glow:hover::after { opacity: 1; }

.btn-outline-premium {
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
}

.btn-outline-premium:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
}

.arrow-icon { width: 18px; height: 18px; transition: transform 0.3s ease; }
.btn-outline-premium:hover .arrow-icon { transform: translateX(5px); }

/* --- LUXURY METRICS --- */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-top: -3rem;
  padding: 0 2rem;
}

.stat-card {
  background: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  text-align: left;
  border: 1px solid #e2e8f0;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.stat-card.highlight-metric {
  background: #020617;
  border-color: #1e293b;
  transform: translateY(-15px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
}

.stat-card.highlight-metric:hover {
  transform: translateY(-20px);
}

.metric-glow {
  position: absolute;
  top: -50%; right: -50%; width: 200%; height: 200%;
  background: radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
}

.text-emerald { color: #34d399; }

.stat-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: #475569;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.highlight-metric .stat-label { color: #f8fafc; }

.stat-desc {
  font-size: 0.9rem;
  color: #94a3b8;
}

/* --- SUPREME PILLARS --- */
.pillars-section {
  padding: 2rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #0f172a;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.header-line {
  width: 60px;
  height: 4px;
  background: #10b981;
  margin: 0 auto 1.5rem;
  border-radius: 2px;
}

.section-header p {
  font-size: 1.15rem;
  color: #475569;
  max-width: 700px;
  margin: 0 auto;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.pillar-card {
  background: #ffffff;
  padding: 3rem 2.5rem;
  border-radius: 16px;
  border: 1px solid #f1f5f9;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.pillar-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 0%; height: 3px;
  background: linear-gradient(90deg, #10b981, #059669);
  transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 16px 0 0 0;
}

.pillar-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.08);
  border-color: #cbd5e1;
}

.pillar-card:hover::before { width: 100%; border-radius: 16px 16px 0 0; }

.pillar-icon-wrapper {
  background: #f8fafc;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.pillar-svg {
  width: 28px;
  height: 28px;
  color: #10b981;
}

.pillar-card:hover .pillar-icon-wrapper {
  background: #10b981;
  border-color: #10b981;
}

.pillar-card:hover .pillar-svg { color: #ffffff; }

.pillar-card h3 {
  font-size: 1.3rem;
  color: #0f172a;
  margin-bottom: 1rem;
  font-weight: 700;
}

.pillar-card p {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.7;
}

/* --- HIGH END CTA --- */
.bottom-cta-premium {
  background: #020617;
  border-radius: 24px;
  padding: 6rem 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #1e293b;
}

.cta-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.15), transparent 70%);
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 650px;
  margin: 0 auto;
}

.alert-icon {
  width: 48px;
  height: 48px;
  color: #ef4444; /* Red 500 */
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.5));
}

.cta-content h2 {
  font-size: 2.5rem;
  color: #f8fafc;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.cta-content p {
  color: #94a3b8;
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.btn-danger-glow {
  background: #ef4444;
  color: #ffffff;
  border: none;
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
}

.btn-danger-glow:hover {
  background: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(239, 68, 68, 0.6);
}

/* --- RESPONSIVE --- */
@media (max-width: 1024px) {
  .hero-title { font-size: 3rem; }
  .pillars-grid { grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  .stat-card.highlight-metric { transform: translateY(0); }
  .stat-card.highlight-metric:hover { transform: translateY(-5px); }
  .stats-section { margin-top: 2rem; padding: 0; }
  .hero-section { padding: 5rem 3rem; }
}

@media (max-width: 768px) {
  .home-page { gap: 3rem; }
  .hero-section { padding: 4rem 1.5rem; border-radius: 16px; min-height: unset; }
  .hero-title { font-size: 2.2rem; letter-spacing: -0.5px; margin-bottom: 1rem; }
  .hero-description { font-size: 1rem; max-width: 100%; margin-bottom: 2.5rem; }
  .hero-actions { flex-direction: column; gap: 1rem; }
  .btn { width: 100%; justify-content: center; padding: 0.9rem 1.5rem; }
  .stats-section { grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 0; padding: 0; }
  .stat-number { font-size: 2.5rem; }
  .stat-card { padding: 1.5rem; }
  .pillars-grid { grid-template-columns: 1fr; gap: 1.25rem; }
  .pillar-card { padding: 2rem 1.5rem; }
  .section-header h2 { font-size: 1.8rem; }
  .section-header { margin-bottom: 2.5rem; }
  .bottom-cta-premium { padding: 4rem 1.5rem; border-radius: 16px; }
  .cta-content h2 { font-size: 1.8rem; }
  .cta-content p { font-size: 1rem; }
  .badge-pill { font-size: 0.75rem; padding: 0.45rem 0.9rem; }
}

@media (max-width: 480px) {
  .hero-section { padding: 3rem 1.25rem; }
  .hero-title { font-size: 1.9rem; }
  .stats-section { grid-template-columns: 1fr; }
  .stat-card.highlight-metric { transform: translateY(0); }
}
</style>