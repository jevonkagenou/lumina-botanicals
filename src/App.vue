<template>
  <div class="app-container">
    <nav class="navbar" :class="{ 'scrolled': isScrolled }">
      <div class="nav-brand">
        <svg class="logo-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
        </svg>
        <div class="brand-text">
          <span class="brand-name">Lumina Botanicals</span>
          <span class="brand-sub">Safety & Compliance</span>
        </div>
      </div>
      <div class="nav-links">
        <router-link to="/" exact-active-class="active">Beranda</router-link>
        <router-link to="/profil" active-class="active">Profil Perusahaan</router-link>
        <router-link to="/k3" active-class="active">Regulasi K3</router-link>
        <router-link to="/map" active-class="active">Fasilitas & Organisasi</router-link>
        <router-link to="/lapor" active-class="active" class="btn-lapor">
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          Lapor Insiden
        </router-link>
      </div>
    </nav>

    <main class="content-wrapper">
      <router-view v-slot="{ Component, route }">
        <transition name="page-fade" mode="out-in">
          <div :key="route.path" class="page-container">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-brand">
          <h4>
            <svg class="logo-svg-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
            </svg>
            Lumina Botanicals
          </h4>
          <p>Memadukan kekuatan alam dan standar K3 tertinggi (CPKB) dalam setiap tahapan produksi kosmetik organik kami.</p>
        </div>
        <div class="footer-links">
          <h5>Tautan Cepat</h5>
          <router-link to="/">Beranda Utama</router-link>
          <router-link to="/profil">Sejarah & Legalitas</router-link>
          <router-link to="/k3">Matriks Mitigasi</router-link>
        </div>
        <div class="footer-contact">
          <h5>Pusat Bantuan HSE</h5>
          <p><span class="contact-label">Emergency</span> (021) 555-0100</p>
          <p><span class="contact-label">Email</span> hse-support@luminabotanicals.com</p>
          <p><span class="contact-label">HQ</span> Kawasan Industri Hijau Kav. 42, Jakarta</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} PT Lumina Natura Indonesia. Mematuhi Standar Mutu BPOM & SMK3 Nasional.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* =========================================================================
   GLOBAL CSS VARIABLES (Lumina Botanicals Emerald Theme)
   ========================================================================= */
:root {
  /* Core Colors */
  --primary: #047857; /* Emerald 700 */
  --primary-light: #10b981; /* Emerald 500 */
  --primary-dark: #064e3b; /* Emerald 900 */
  --secondary: #0f766e; /* Teal 700 */
  
  /* Backgrounds & Surfaces */
  --bg-app: #f8fafc;
  --bg-surface: #ffffff;
  --bg-surface-glass: rgba(255, 255, 255, 0.85);
  
  /* Text */
  --text-main: #1e293b;
  --text-muted: #64748b;
  --text-inverse: #ffffff;
  
  /* UI Elements */
  --border-radius: 12px;
  --border-radius-lg: 20px;
  --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
  
  /* Status Colors */
  --danger: #ef4444;
  --danger-bg: #fef2f2;
  --warning: #f59e0b;
  --success: #10b981;
}

/* Base Body Styles */
body {
  margin: 0;
  background-color: var(--bg-app);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: var(--text-main);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* =========================================================================
   LAYOUT SHELL
   ========================================================================= */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  flex: 1;
  padding: 3rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.page-container {
  width: 100%;
  animation: contentFade 0.4s ease-out;
}

@keyframes contentFade {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* =========================================================================
   NAVBAR (GLASSMORPHISM)
   ========================================================================= */
.navbar {
  background: var(--bg-surface-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}

.navbar.scrolled {
  padding: 0.8rem 2rem;
  box-shadow: var(--shadow-sm);
  background: rgba(255, 255, 255, 0.95);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-svg {
  width: 32px;
  height: 32px;
  color: var(--primary);
}

.logo-svg-small {
  width: 24px;
  height: 24px;
  color: var(--primary-light);
}

.icon-sm {
  width: 16px;
  height: 16px;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-name {
  font-weight: 800;
  font-size: 1.3rem;
  color: var(--primary-dark);
  letter-spacing: -0.5px;
}

.brand-sub {
  font-size: 0.8rem;
  color: var(--primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-links a {
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-muted);
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  transition: all 0.2s ease;
}

.nav-links a:hover {
  background: #f1f5f9;
  color: var(--text-main);
}

.nav-links a.active {
  background: var(--primary-light);
  color: var(--text-inverse);
  box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
}

.nav-links a.btn-lapor {
  background: var(--danger-bg);
  color: var(--danger);
  border: 1px solid #fecaca;
  margin-left: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.nav-links a.btn-lapor:hover,
.nav-links a.btn-lapor.active {
  background: var(--danger);
  color: white;
  border-color: var(--danger);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
}

/* =========================================================================
   FOOTER
   ========================================================================= */
.app-footer {
  background: #0f172a;
  color: #cbd5e1;
  padding: 4rem 2rem 2rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand h4 {
  color: white;
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-brand p {
  color: #94a3b8;
  max-width: 400px;
}

.footer-links h5,
.footer-contact h5 {
  color: white;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.footer-links a {
  display: block;
  color: #94a3b8;
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--primary-light);
}

.footer-contact p {
  margin: 0 0 0.75rem;
  font-size: 0.95rem;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.contact-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--primary-light);
  font-weight: bold;
  width: 80px;
}

.footer-bottom {
  max-width: 1280px;
  margin: 0 auto;
  border-top: 1px solid #1e293b;
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  color: #64748b;
}

/* =========================================================================
   GLOBAL PAGE TRANSITIONS
   ========================================================================= */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

/* =========================================================================
   RESPONSIVE DESIGN
   ========================================================================= */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem;
  }
  
  .nav-links {
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .nav-links a.btn-lapor {
    margin-left: 0;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>