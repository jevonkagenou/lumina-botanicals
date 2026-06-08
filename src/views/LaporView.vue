<template>
  <div class="page lapor-page">

    <header class="lapor-header">
      <div class="header-overlay"></div>
      <div class="header-content animate-slide-up fade-delay-1">
        <h1 class="text-gradient">Portal Transparansi & Investigasi Insiden</h1>
        <p>Laporkan setiap anomali, potensi bahaya (Near-Miss), atau kecelakaan kerja. Data Anda dilindungi secara
          end-to-end oleh enkripsi sistem IT Lumina Botanicals.</p>
      </div>
    </header>

    <div class="lapor-container animate-slide-up fade-delay-2">

      <!-- FORM COLUMN -->
      <div class="form-column">
        <div class="glass-panel">
          <div class="panel-heading">
            <h3 class="panel-title">
              <svg class="heading-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Laporan Elektronik (LMI)
            </h3>
            <span class="secure-badge">
              <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              End-to-End Encrypted
            </span>
          </div>

          <form @submit.prevent="submitLaporan" class="expert-form">

            <div class="form-row">
              <div class="form-group">
                <label>Kategori Insiden</label>
                <select v-model="formData.kategori" required>
                  <option value="" disabled>Pilih Kategori...</option>
                  <option value="Near-Miss">Near Miss (Hampir Celaka)</option>
                  <option value="Minor">Kecelakaan Ringan (First Aid)</option>
                  <option value="Major">Kecelakaan Berat (Medical Treatment)</option>
                  <option value="Lingkungan">Pencemaran Lingkungan / Limbah</option>
                </select>
              </div>

              <div class="form-group">
                <label>Lokasi Kejadian</label>
                <select v-model="formData.lokasi" required>
                  <option value="" disabled>Pilih Area Spesifik...</option>
                  <option value="Gudang Bahan Baku">101 - Gudang Bahan Baku</option>
                  <option value="Laboratorium QA">205 - Laboratorium QA</option>
                  <option value="Ruang Produksi Utama">301 - Ruang Produksi Utama</option>
                  <option value="Fasilitas IPAL">402 - Fasilitas IPAL Bawah Tanah</option>
                  <option value="Karantina">500 - Area Karantina</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label>Kronogi Detail Kejadian</label>
              <textarea v-model="formData.deskripsi" rows="5"
                placeholder="Deskripsikan dengan prinsip 5W+1H. Apa yang terjadi? Siapa yang terlibat? Kapan? Mengapa? (Contoh: Pada pukul 14:00, tercium bau menyengat dari drum etanol di area karantina...)"
                required></textarea>
            </div>

            <div class="form-group file-upload-group">
              <label>Lampiran Bukti / Observasi Fisik (Opsional)</label>
              <div class="drop-zone">
                <svg class="drop-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                <p>Seret file bukti visual ke area ini atau <strong>Pilih File</strong></p>
                <span class="sub-text">Batas Maksimum 5MB (JPG, PNG, PDF)</span>
              </div>
            </div>

            <button type="submit" class="btn-submit" :disabled="isSubmitting">
              <span v-if="!isSubmitting">Kirim ke Departemen Investigasi HSE</span>
              <span v-else class="loader">Mengamankan Payload Data...</span>
            </button>
          </form>

          <transition name="slide-up">
            <div v-if="statusMessage" class="status-alert success">
              <svg class="alert-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              {{ statusMessage }}
            </div>
          </transition>
        </div>
      </div>

      <!-- SIDE COLUMN (TABLE/HISTORY) -->
      <div class="history-column">
        <div class="info-card rules-card">
          <h4>SLA Investigasi (Service Level Agreement)</h4>
          <ul>
            <li><strong>Near-Miss:</strong> Ditanggapi dalam 24 jam.</li>
            <li><strong>Minor:</strong> Tindakan perbaikan dalam 48 jam.</li>
            <li><strong>Major/Lingkungan:</strong> Investigasi langsung (0 jam) dengan pembentukan komite.</li>
          </ul>
        </div>

        <div class="history-panel">
          <div class="panel-header-small">
            <h4>Live: Log Insiden Pabrik</h4>
            <span class="live-dot"></span>
          </div>

          <div class="table-responsive">
            <table class="history-table">
              <thead>
                <tr>
                  <th>Waktu Laporan</th>
                  <th>Area</th>
                  <th>Status Investigasi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="newReport" class="new-entry">
                  <td><span class="time-text">Baru Saja</span></td>
                  <td>
                    <div class="area-chip">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      <span class="truncate">{{ formData.lokasi }}</span>
                    </div>
                  </td>
                  <td><span class="status-badge pending">Validasi</span></td>
                </tr>
                <tr v-for="(log, idx) in dummyLogs" :key="idx" class="interactive-row">
                  <td><span class="time-text">{{ log.waktu }}</span></td>
                  <td>
                    <div class="area-chip">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      <span class="truncate" :title="log.area">{{ log.area }}</span>
                    </div>
                  </td>
                  <td><span class="status-badge" :class="log.statusClass">{{ log.status }}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const formData = reactive({
  kategori: '',
  lokasi: '',
  deskripsi: ''
})

const isSubmitting = ref(false)
const statusMessage = ref('')
const newReport = ref(false)

const dummyLogs = ref([
  { waktu: '1 Jam yang lalu', area: 'Ruang Produksi Utama', status: 'Ditutup', statusClass: 'closed' },
  { waktu: '08 April 2026', area: 'Laboratorium QA', status: 'Investigasi', statusClass: 'progress' },
  { waktu: '05 April 2026', area: 'Gudang Bahan Baku', status: 'Tindakan', statusClass: 'capa' },
  { waktu: '02 April 2026', area: 'Fasilitas IPAL', status: 'Ditutup', statusClass: 'closed' },
  { waktu: '28 Maret 2026', area: 'Area Karantina', status: 'Ditutup', statusClass: 'closed' }
])

const submitLaporan = async () => {
  isSubmitting.value = true

  // Fake Async API Call Payload
  const payloadJSON = JSON.stringify(formData, null, 2)
  console.log("SENDING SECURE PAYLOAD TO HSE DB:", payloadJSON)

  await new Promise(resolve => setTimeout(resolve, 1800))

  isSubmitting.value = false
  statusMessage.value = "Laporan Registrasi #LMI-8891 Berhasil Dikirim. Terima Kasih."
  newReport.value = true

  setTimeout(() => {
    statusMessage.value = ''
    formData.kategori = ''
    formData.lokasi = ''
    formData.deskripsi = ''
    newReport.value = false
  }, 5000)
}
</script>

<style scoped>
/* --- KEYFRAMES & UTILS --- */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

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

.animate-slide-up {
  opacity: 0;
  animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.fade-delay-1 {
  animation-delay: 0.1s;
}

.fade-delay-2 {
  animation-delay: 0.3s;
}

.lapor-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 3rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

/* --- PREMIUM HEADER --- */
.lapor-header {
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
    radial-gradient(circle at 20% 0%, rgba(239, 68, 68, 0.2), transparent 50%),
    radial-gradient(circle at 80% 100%, rgba(220, 38, 38, 0.2), transparent 50%);
  pointer-events: none;
}

.header-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #fca5a5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -1px;
}

.header-content p {
  color: #94a3b8;
  font-size: 1.15rem;
  line-height: 1.6;
}

.lapor-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  align-items: start;
}

/* --- FORM COLUMN --- */
.glass-panel {
  background: white;
  border-radius: var(--border-radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
}

.glass-panel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #ef4444, #f87171, #ef4444);
}

.panel-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 1rem;
}

.panel-heading h3 {
  margin: 0;
  color: #0f172a;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 800;
}

.heading-icon {
  width: 24px;
  height: 24px;
  color: #ef4444;
  /* Merah untuk lapor */
}

.secure-badge {
  background: #fef2f2;
  color: #b91c1c;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  border: 1px solid #fecaca;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.badge-icon {
  width: 14px;
  height: 14px;
}

.expert-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--primary-dark);
}

.form-group select,
.form-group textarea {
  padding: 1rem;
  border-radius: var(--border-radius);
  border: 2px solid #e2e8f0;
  background: #f8fafc;
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--text-main);
  transition: all 0.2s;
  outline: none;
}

.form-group select:focus,
.form-group textarea:focus {
  border-color: #ef4444;
  background: white;
  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.15);
}

.drop-zone {
  border: 2px dashed #cbd5e1;
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.drop-zone:hover {
  background: white;
  border-color: #ef4444;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.drop-icon-svg {
  width: 48px;
  height: 48px;
  display: block;
  margin: 0 auto 1rem;
  color: #ef4444;
}

.drop-zone p {
  margin: 0 0 0.25rem;
  color: #475569;
}

.drop-zone .sub-text {
  font-size: 0.8rem;
  color: #94a3b8;
}

.btn-submit {
  background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
  color: white;
  border: none;
  padding: 1.2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-4px);
  box-shadow: 0 15px 30px rgba(239, 68, 68, 0.5);
  background: linear-gradient(135deg, #f87171 0%, #dc2626 100%);
}

.btn-submit:disabled {
  background: #94a3b8;
  box-shadow: none;
  cursor: not-allowed;
  transform: translateY(0);
}

/* --- SIDE COLUMN --- */
.history-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.rules-card {
  background: white;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: var(--shadow-sm);
  border-left: 4px solid var(--warning);
}

.rules-card h4 {
  margin: 0 0 1rem;
  color: var(--text-main);
  font-size: 1.1rem;
}

.rules-card ul {
  padding-left: 1.2rem;
  margin: 0;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.rules-card li {
  margin-bottom: 0.5rem;
}

.history-panel {
  background: white;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: var(--shadow-sm);
}

.panel-header-small {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.panel-header-small h4 {
  margin: 0;
  color: var(--text-main);
}

.live-dot {
  width: 10px;
  height: 10px;
  background-color: var(--danger);
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}

.table-responsive {
  overflow-x: auto;
}

.history-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  font-size: 0.9rem;
}

.history-table th {
  text-align: left;
  padding: 0.5rem 1rem;
  color: #94a3b8;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #e2e8f0;
}

.history-table td {
  padding: 1rem;
  background: #ffffff;
  color: #1e293b;
  vertical-align: middle;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
}

.history-table td:first-child {
  border-left: 1px solid #f1f5f9;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.history-table td:last-child {
  border-right: 1px solid #f1f5f9;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}

.interactive-row {
  cursor: pointer;
}

.interactive-row:hover td {
  background: #fafafa;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
  border-color: #e2e8f0;
}

.time-text {
  font-weight: 700;
  color: #475569;
}

.area-chip {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  color: #334155;
}

.area-chip svg {
  width: 16px;
  height: 16px;
  color: #94a3b8;
}

.truncate {
  max-width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.new-entry td {
  background: #fef2f2;
  animation: flashHighlight 1s ease-out;
}

@keyframes flashHighlight {
  from {
    background: var(--warning);
  }

  to {
    background: #fef2f2;
  }
}

.status-badge {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  width: 110px;
  padding: 0.35rem 0.6rem;
  border-radius: 50px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.status-badge::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 4px currentColor;
}

.status-badge.closed {
  color: #166534;
  background: #f0fdf4;
  border-color: #bbf7d0;
}
.status-badge.closed::before { background: #22c55e; }

.status-badge.progress {
  color: #b45309;
  background: #fffbeb;
  border-color: #fde68a;
}
.status-badge.progress::before { background: #f59e0b; }

.status-badge.capa {
  color: #4338ca;
  background: #eef2ff;
  border-color: #c7d2fe;
}
.status-badge.capa::before { background: #6366f1; }

.status-badge.pending {
  color: #991b1b;
  background: #fef2f2;
  border-color: #fecaca;
}
.status-badge.pending::before { background: #ef4444; }

.status-alert {
  margin-top: 1.5rem;
  padding: 1.2rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
}

.status-alert.success {
  background: #dcfce7;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* ==========================================
   RESPONSIVE - LAPOR VIEW
   ========================================== */

/* === Tablet <= 900px === */
@media (max-width: 900px) {
  .lapor-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .glass-panel {
    padding: 1.75rem;
  }
}

/* === Small tablet <= 768px === */
@media (max-width: 768px) {
  .lapor-header {
    padding: 3.5rem 1.5rem;
    border-radius: 16px;
  }

  .text-gradient {
    font-size: 2.1rem;
    letter-spacing: -0.5px;
  }

  .header-content p {
    font-size: 1rem;
  }

  .lapor-page {
    gap: 1.5rem;
  }
}

/* === Phone <= 600px === */
@media (max-width: 600px) {
  .lapor-header {
    padding: 3rem 1.25rem;
    border-radius: 14px;
  }

  .text-gradient {
    font-size: 1.75rem;
  }

  .glass-panel {
    padding: 1.25rem;
    border-radius: 14px;
  }

  .panel-heading {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .panel-heading h3 {
    font-size: 1.15rem;
  }

  .secure-badge {
    font-size: 0.78rem;
    padding: 0.3rem 0.75rem;
  }

  .expert-form {
    gap: 1.25rem;
  }

  .drop-zone {
    padding: 1.5rem 1rem;
  }

  .drop-icon-svg {
    width: 38px;
    height: 38px;
  }

  .btn-submit {
    font-size: 0.95rem;
    padding: 1rem;
  }

  /* Table fixes for small screens */
  .history-table {
    font-size: 0.82rem;
  }

  .history-table th {
    padding: 0.4rem 0.6rem;
    font-size: 0.68rem;
  }

  .history-table td {
    padding: 0.7rem 0.6rem;
  }

  .status-badge {
    width: auto;
    min-width: 70px;
    font-size: 0.65rem;
    padding: 0.25rem 0.5rem;
  }

  .truncate {
    max-width: 80px;
  }

  .area-chip svg {
    display: none;
  }

  .history-panel {
    padding: 1.25rem 1rem;
  }

  .rules-card {
    padding: 1.25rem;
  }
}

/* === Very small phone <= 380px === */
@media (max-width: 380px) {
  .text-gradient {
    font-size: 1.5rem;
  }

  .lapor-header {
    padding: 2.5rem 1rem;
  }

  .glass-panel {
    padding: 1rem;
  }

  .truncate {
    max-width: 60px;
  }

  .history-table th,
  .history-table td {
    padding: 0.5rem 0.4rem;
    font-size: 0.75rem;
  }
}
</style>