<template>
  <div class="page map-page">
    <header class="map-header animate-slide-up">
      <div class="header-overlay"></div>
      <div class="header-content">
        <h1 class="text-gradient">Console Pemantauan Area & Organisasi</h1>
        <p>Sistem Pengendalian Sentral & Pemantauan Organisasi PT Lumina Natura Indonesia.</p>
      </div>
    </header>

    <div class="view-toggle animate-slide-up fade-delay-1">
      <button :class="{ active: activeView === 'map' }" @click="activeView = 'map'">
        Denah Fasilitas
      </button>
      <button :class="{ active: activeView === 'org' }" @click="activeView = 'org'">
        Struktur Organisasi
      </button>
    </div>

    <div class="map-layout-grid">
      <div class="map-container-wrapper animate-slide-up fade-delay-2">
      <transition name="fade-slide" mode="out-in">
        <div v-if="activeView === 'map'" key="map" class="map-view-wrapper">




      <!-- SVG Map -->
      <div class="svg-container" @mousemove="updateTooltipPos">
        <svg viewBox="0 0 1400 700" class="lumina-map">
          <!-- Background Ground -->
          <rect x="0" y="0" width="1400" height="700" fill="#f8fafc" />

          <!-- Zone Backdrops -->
          <!-- Zone A -->
          <rect x="180" y="80" width="450" height="420" class="zone-backdrop" />
          <text x="405" y="100" class="zone-title">ZONE A</text>
          <text x="405" y="115" class="zone-subtitle">(OFFICE & ADMINISTRATION)</text>

          <!-- Zone B -->
          <rect x="650" y="80" width="400" height="420" class="zone-backdrop" />
          <text x="850" y="100" class="zone-title">ZONE B</text>
          <text x="850" y="115" class="zone-subtitle">(PRODUCTION & MANUFACTURING)</text>

          <!-- Zone C -->
          <rect x="1070" y="80" width="100" height="150" class="zone-backdrop" />
          <text x="1120" y="100" class="zone-title">ZONE C</text>
          <text x="1120" y="115" class="zone-subtitle">(EXTERNAL)</text>

          <!-- Assembly Point -->
          <rect x="1190" y="80" width="180" height="180" class="assembly-backdrop" />
          <g class="assembly-icon">
            <path d="M1250 140 l20 -20 l40 0 l20 20 l-20 20 l-40 0 z" fill="#10b981" opacity="0.2" />
            <text x="1280" y="150" class="assembly-text" font-size="14" font-weight="bold">EMERGENCY</text>
            <text x="1280" y="170" class="assembly-text" font-size="14" font-weight="bold">ASSEMBLY POINT</text>
            <text x="1280" y="190" class="assembly-text" font-size="12">(TITIK KUMPUL)</text>
          </g>

          <!-- Parking Area -->
          <rect x="1070" y="300" width="300" height="200" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2" />
          <text x="1220" y="400" class="parking-text" font-weight="bold" fill="#64748b">PARKING AREA</text>
          <!-- Parking lines -->
          <line x1="1070" y1="330" x2="1120" y2="330" stroke="#fff" stroke-width="2" />
          <line x1="1070" y1="360" x2="1120" y2="360" stroke="#fff" stroke-width="2" />
          <line x1="1070" y1="390" x2="1120" y2="390" stroke="#fff" stroke-width="2" />

          <!-- Buildings Outline -->
          <path d="M 190 130 L 620 130 L 620 490 L 190 490 Z" class="building-wall" />
          <path d="M 660 130 L 1040 130 L 1040 490 L 660 490 Z" class="building-wall" />

          <!-- Rooms Zone A -->
          <!-- Director 1 -->
          <g class="room" @mouseenter="setHover('Director Office', 'Zone A', 'Ruangan Direksi')"
            @mouseleave="clearHover">
            <rect x="200" y="140" width="120" height="90" />
            <text x="260" y="180">DIRECTOR'S</text>
            <text x="260" y="195">OFFICE</text>
          </g>
          <!-- Meeting Room -->
          <g class="room" @mouseenter="setHover('Meeting Room', 'Zone A', 'Ruang Rapat Utama')"
            @mouseleave="clearHover">
            <rect x="330" y="140" width="130" height="90" />
            <text x="395" y="180">MEETING</text>
            <text x="395" y="195">ROOM</text>
          </g>
          <!-- Restrooms -->
          <g class="room" @mouseenter="setHover('Restrooms', 'Zone A', 'Fasilitas Toilet')" @mouseleave="clearHover">
            <rect x="470" y="140" width="140" height="90" />
            <line x1="516" y1="140" x2="516" y2="230" class="divider" />
            <line x1="563" y1="140" x2="563" y2="230" class="divider" />
            <text x="540" y="190" font-size="10">WC</text>
          </g>
          <!-- Entry / Reception -->
          <g class="room" @mouseenter="setHover('Entry / Reception', 'Zone A', 'Area Resepsionis dan Akses Utama')"
            @mouseleave="clearHover">
            <rect x="200" y="240" width="100" height="110" />
            <text x="250" y="290">ENTRY /</text>
            <text x="250" y="305">RECEPTION</text>
          </g>
          <!-- Director 2 -->
          <g class="room" @mouseenter="setHover('Director Office', 'Zone A', 'Ruangan Direksi Kedua')"
            @mouseleave="clearHover">
            <rect x="200" y="360" width="100" height="120" />
            <text x="250" y="410">DIRECTOR'S</text>
            <text x="250" y="425">OFFICE</text>
          </g>
          <!-- Open Plan Office -->
          <g class="room" @mouseenter="setHover('Open Plan Office', 'Zone A', 'Area Kerja Staf Administrasi')"
            @mouseleave="clearHover">
            <rect x="310" y="240" width="180" height="240" />
            <!-- Desk lines -->
            <rect x="340" y="300" width="40" height="120" class="desk" />
            <rect x="420" y="300" width="40" height="120" class="desk" />
            <text x="400" y="270">OPEN PLAN</text>
            <text x="400" y="285">OFFICE</text>
          </g>
          <!-- Canteen -->
          <g class="room" @mouseenter="setHover('Canteen', 'Zone A', 'Kantin Karyawan')" @mouseleave="clearHover">
            <rect x="500" y="240" width="110" height="140" />
            <text x="555" y="310">CANTEEN</text>
          </g>
          <g class="room" @mouseenter="setHover('Restrooms', 'Zone A', 'Toilet Area Bawah')" @mouseleave="clearHover">
            <rect x="500" y="390" width="110" height="90" />
            <text x="555" y="440">RESTROOMS</text>
          </g>

          <!-- Rooms Zone B -->
          <!-- Raw Material Storage -->
          <g class="room" @mouseenter="setHover('Raw Material Storage', 'Zone B', 'Gudang Bahan Baku (Risiko Sedang)')"
            @mouseleave="clearHover">
            <rect x="670" y="140" width="150" height="100" />
            <text x="745" y="180">RAW MATERIAL</text>
            <text x="745" y="195">STORAGE</text>
            <text x="745" y="215" font-size="10">(BAHAN BAKU)</text>
          </g>
          <!-- Research & Mixing Lab -->
          <g class="room" @mouseenter="setHover('Research & Mixing Lab', 'Zone B', 'Laboratorium R&D (Risiko Tinggi)')"
            @mouseleave="clearHover">
            <rect x="830" y="140" width="200" height="100" />
            <text x="930" y="180">RESEARCH & MIXING LAB</text>
            <text x="930" y="200" font-size="10">(R&D)</text>
          </g>
          <!-- Main Production Hall -->
          <g class="room"
            @mouseenter="setHover('Main Production Hall', 'Zone B', 'Ruang Produksi Utama (Risiko Tinggi)')"
            @mouseleave="clearHover">
            <rect x="670" y="250" width="260" height="230" />
            <rect x="690" y="300" width="40" height="100" class="desk machine" />
            <rect x="760" y="340" width="60" height="80" class="desk machine" />
            <!-- Machine Guards -->
            <rect x="685" y="295" width="50" height="110" class="machine-guard" />
            <rect x="755" y="335" width="70" height="90" class="machine-guard" />
            <text x="710" y="420" class="guard-text">machine guards</text>
            <text x="800" y="290" font-size="14">MAIN PRODUCTION HALL</text>
          </g>
          <!-- Finished Goods Storage -->
          <g class="room" @mouseenter="setHover('Finished Goods Storage', 'Zone B', 'Penyimpanan Produk Jadi')"
            @mouseleave="clearHover">
            <rect x="940" y="250" width="90" height="230" />
            <text x="985" y="340">FINISHED</text>
            <text x="985" y="355">GOODS</text>
            <text x="985" y="370">STORAGE</text>
            <text x="985" y="390" font-size="9">(Produk Jadi)</text>
          </g>

          <!-- Rooms Zone C -->
          <g class="room"
            @mouseenter="setHover('IPAL', 'Zone C', 'Instalasi Pengolahan Air Limbah (Risiko Sangat Tinggi)')"
            @mouseleave="clearHover">
            <rect x="1080" y="130" width="70" height="100" />
            <text x="1115" y="170">IPAL</text>
            <rect x="1090" y="180" width="50" height="40" fill="#bae6fd" stroke="#0ea5e9" stroke-width="1" />
          </g>
          <g class="room" @mouseenter="setHover('Loading Dock', 'Zone C', 'Area Bongkar Muat')"
            @mouseleave="clearHover">
            <rect x="1050" y="260" width="100" height="50" fill="#f8fafc" stroke="#cbd5e1" stroke-dasharray="4" />
            <text x="1100" y="280" font-size="10">LOADING</text>
            <text x="1100" y="295" font-size="10">DOCK</text>
          </g>

          <!-- Security Posts -->
          <g class="room" @mouseenter="setHover('Security Post 1', 'External', 'Pos Keamanan')"
            @mouseleave="clearHover">
            <rect x="120" y="220" width="40" height="40" />
            <text x="140" y="280" font-size="10">SECURITY</text>
          </g>
          <g class="room" @mouseenter="setHover('Security Post 2', 'External', 'Pos Keamanan')"
            @mouseleave="clearHover">
            <rect x="60" y="220" width="40" height="40" />
            <text x="80" y="280" font-size="10">POST</text>
          </g>

          <!-- Perimeter Fence -->
          <path d="M 40 180 L 110 180 M 40 320 L 40 550 L 1050 550" fill="none" stroke="#64748b" stroke-width="3" />

          <!-- Evacuation Arrows (Animated) -->
          <g class="evacuation-routes">
            <!-- From Director 1 -->
            <path
              d="M 260 230 L 260 250 L 230 250 L 230 280 L 180 280 L 180 430 L 100 430 L 100 520 L 1000 520 L 1000 240 L 1280 240 L 1280 220"
              class="evac-line" />

            <!-- From Main Corridor Zone A -->
            <path d="M 280 250 L 610 250 L 610 240 L 1280 240" class="evac-line" />
            <path d="M 395 230 L 395 250" class="evac-line" />
            <path d="M 540 230 L 540 250" class="evac-line" />
            <path d="M 400 240 L 400 220 L 440 220" class="evac-line" />
            <path d="M 550 430 L 480 430 L 480 250" class="evac-line" />

            <!-- Zone B Routes -->
            <path d="M 745 240 L 745 260 L 1020 260 L 1020 240" class="evac-line" />
            <path d="M 930 240 L 930 260" class="evac-line" />
            <path d="M 800 250 L 800 220" class="evac-line" />

            <!-- Arrow Heads -->
            <!-- End Arrow at Assembly -->
            <polygon points="1280,210 1275,220 1285,220" fill="#10b981" />
            <!-- Intermediate arrows -->
            <polygon points="1000,520 990,515 990,525" fill="#10b981" />
            <polygon points="630,240 620,235 620,245" fill="#10b981" />
            <polygon points="1040,240 1030,235 1030,245" fill="#10b981" />
          </g>

          <!-- Safety Icons -->
          <g class="safety-icons">
            <defs>
              <g id="icon-apar">
                <rect x="0" y="0" width="16" height="16" fill="#ef4444" rx="2" />
                <path d="M7 4h2v1H7zM6 6h4v7H6zM8 7a1 1 0 100 2 1 1 0 000-2z" fill="#ffffff" />
              </g>
              <g id="icon-firstaid">
                <rect x="0" y="0" width="16" height="16" fill="#10b981" rx="2" />
                <path d="M12 7h-3V4H7v3H4v2h3v3h2V9h3V7z" fill="#ffffff" />
              </g>
              <g id="icon-exit">
                <rect x="0" y="0" width="16" height="16" fill="#10b981" rx="2" />
                <path d="M8 4l4 4m0 0l-4 4m4-4H3" stroke="#ffffff" stroke-width="1.5" fill="none" />
              </g>
              <g id="icon-warning">
                <path d="M8 2l7 12H1L8 2z" fill="#f59e0b" stroke="#ffffff" stroke-width="1" stroke-linejoin="round" />
                <line x1="8" y1="6" x2="8" y2="10" stroke="#ffffff" stroke-width="1.5" />
                <circle cx="8" cy="12" r="1" fill="#ffffff" />
              </g>
              <g id="icon-nosmoking">
                <circle cx="8" cy="8" r="7" fill="#ffffff" stroke="#ef4444" stroke-width="2" />
                <line x1="3" y1="3" x2="13" y2="13" stroke="#ef4444" stroke-width="2" />
                <rect x="4" y="7.5" width="8" height="1" fill="#333" />
              </g>
              <g id="icon-ppe">
                <circle cx="8" cy="8" r="7" fill="#3b82f6" />
                <path d="M4 9h8c0-3-1.5-4-4-4s-4 1-4 4z" fill="#ffffff" />
              </g>
            </defs>

            <!-- Zone A (Office) -->
            <use href="#icon-apar" x="210" y="150" />
            <use href="#icon-exit" x="230" y="150" />

            <use href="#icon-apar" x="210" y="320" />
            <use href="#icon-firstaid" x="230" y="320" />

            <use href="#icon-apar" x="270" y="450" />
            <use href="#icon-apar" x="430" y="150" />

            <use href="#icon-apar" x="320" y="450" />
            <use href="#icon-exit" x="460" y="450" />
            <use href="#icon-apar" x="580" y="350" />

            <!-- Zone B (Production) -->
            <use href="#icon-apar" x="680" y="150" />
            <use href="#icon-nosmoking" x="680" y="170" />

            <use href="#icon-apar" x="1000" y="150" />
            <use href="#icon-firstaid" x="1000" y="170" />

            <use href="#icon-apar" x="680" y="450" />
            <use href="#icon-warning" x="710" y="270" />
            <use href="#icon-warning" x="780" y="310" />
            <use href="#icon-exit" x="900" y="450" />
            <use href="#icon-ppe" x="680" y="260" />

            <use href="#icon-apar" x="1000" y="450" />

            <!-- Zone C -->
            <use href="#icon-warning" x="1130" y="200" />
          </g>

        </svg>
        </div>
        
        <!-- Legend Panel -->
        <div class="legend-panel">
          <span class="legend-title">Legend:</span>
          <div class="legend-grid">
            <div class="legend-item">
              <div class="legend-icon fire-ext">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4h10v2H7zM5 8h14v14H5zM12 10a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <span>Fire Extinguisher</span>
            </div>
            <div class="legend-item">
              <div class="legend-icon first-aid">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
              </div>
              <span>First Aid</span>
            </div>
            <div class="legend-item">
              <div class="legend-icon emergency-exit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <span>Emergency Exit</span>
            </div>
            <div class="legend-item">
              <div class="legend-icon warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <span>Warning</span>
            </div>
            <div class="legend-item">
              <div class="legend-icon no-smoking">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                </svg>
              </div>
              <span>No Smoking</span>
            </div>
            <div class="legend-item">
              <div class="legend-icon ppe">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5a6 6 0 0 0-6 6v2h12v-2a6 6 0 0 0-6-6z" />
                  <rect x="5" y="13" width="14" height="2" />
                </svg>
              </div>
              <span>PPE Required</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- ORG CHART -->
      <div v-else key="org" class="org-view-wrapper">
         <div class="org-tree">
            <!-- RUPS -->
            <div class="org-level">
              <div class="org-node l1 interactive-hover" @mouseenter="setHover('RUPS', 'Tingkat Tertinggi', 'Rapat Umum Pemegang Saham')" @mouseleave="clearHover" @mousemove="updateTooltipPos">RUPS</div>
            </div>
            <div class="connector-v"></div>
            
            <!-- Komisaris -->
            <div class="org-level">
              <div class="org-node l2 interactive-hover" @mouseenter="setHover('Dewan Komisaris', 'Tingkat 2', 'Komisaris Utama & Komisaris')" @mouseleave="clearHover" @mousemove="updateTooltipPos">Dewan Komisaris</div>
            </div>
            <div class="connector-v"></div>
            
            <!-- CEO -->
            <div class="org-level">
              <div class="org-node l3 interactive-hover" @mouseenter="setHover('Direktur Utama (CEO)', 'Tingkat 3', 'Pimpinan Eksekutif Tertinggi')" @mouseleave="clearHover" @mousemove="updateTooltipPos">Direktur Utama (CEO)</div>
            </div>
            
            <!-- Fork line -->
            <div class="fork-wrapper">
               <div class="connector-v"></div>
               <div class="connector-h-fork"></div>
            </div>

            <!-- Branches -->
            <div class="org-branches">
               <div class="director-branch" v-for="(branch, i) in orgData" :key="i">
                 <div class="connector-v short"></div>
                 <div class="org-node l4 interactive-hover" @mouseenter="setHover(branch.director.name, branch.director.level, branch.director.desc)" @mouseleave="clearHover" @mousemove="updateTooltipPos">{{ branch.director.name }}</div>
                 
                 <div class="sub-fork-wrapper" v-if="branch.subs.length > 1">
                   <div class="connector-v short"></div>
                   <div class="connector-h-fork small"></div>
                 </div>
                 <div class="connector-v short" v-else></div>

                 <div class="sub-branches">
                    <div class="sub-branch" v-for="(sub, j) in branch.subs" :key="j">
                       <div class="connector-v short" v-if="branch.subs.length > 1"></div>
                       
                       <div class="org-node l5 interactive-hover" @mouseenter="setHover(sub.manager.name, sub.manager.level, sub.manager.desc)" @mouseleave="clearHover" @mousemove="updateTooltipPos">{{ sub.manager.name }}</div>
                       <div class="connector-v short"></div>
                       <div class="org-node l6 interactive-hover" @mouseenter="setHover(sub.spv.name, sub.spv.level, sub.spv.desc)" @mouseleave="clearHover" @mousemove="updateTooltipPos">{{ sub.spv.name }}</div>
                       <div class="connector-v short"></div>
                       <div class="org-node l7 interactive-hover" @mouseenter="setHover(sub.staff.name, sub.staff.level, sub.staff.desc)" @mouseleave="clearHover" @mousemove="updateTooltipPos">{{ sub.staff.name }}</div>
                       <div class="connector-v short"></div>
                       <div class="org-node l8 interactive-hover" @mouseenter="setHover(sub.karyawan.name, sub.karyawan.level, sub.karyawan.desc)" @mouseleave="clearHover" @mousemove="updateTooltipPos">{{ sub.karyawan.name }}</div>
                    </div>
                 </div>
               </div>
            </div>
         </div>
      </div>
      
      </transition>
    </div>

    <!-- Info Panel Interaktif -->
    <div class="interactive-info-panel" v-if="selectedInfo">
      <div class="panel-header">
        <div class="panel-icon" :class="selectedInfo.type">
          <svg v-if="selectedInfo.type === 'org'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        </div>
        <div class="panel-title">
          <h3>{{ selectedInfo.title }}</h3>
          <span class="panel-subtitle">{{ selectedInfo.subtitle }}</span>
        </div>
      </div>
      <div class="panel-content">
        <p class="panel-desc">{{ selectedInfo.desc }}</p>
        
        <div class="hazard-section" v-if="selectedInfo.type === 'map' && selectedInfo.hazards && selectedInfo.hazards.length">
          <h4><span class="pulse-dot"></span> Jenis Bahaya (K3)</h4>
          <div class="hazard-grid">
            <div class="hazard-item" v-for="(h, idx) in selectedInfo.hazards" :key="idx">
              <span class="hazard-type" :class="h.type.toLowerCase()">{{ h.type }}</span>
              <div class="hazard-text">
                <strong>{{ h.name }}</strong>
                <span>{{ h.detail }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="org-section" v-if="selectedInfo.type === 'org'">
          <h4><span class="pulse-dot blue"></span> Fungsi & Aktivitas Utama</h4>
          <ul class="task-list">
            <li v-for="(t, idx) in selectedInfo.tasks" :key="idx">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>{{ t }}</span>
            </li>
          </ul>
        </div>
        </div>
      </div>
    
    <div class="interactive-info-panel placeholder" v-else>
      <div class="placeholder-content">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <p>Arahkan kursor atau klik pada area denah / posisi organisasi untuk melihat detail informasi dan fungsi K3.</p>
      </div>
    </div>

    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const activeView = ref('map')
const hoveredRoom = ref(null)
const tooltipEl = ref(null)
const tooltipX = ref(0)
const tooltipY = ref(0)
const selectedInfo = ref(null)

const mapHazardsDb = {
  'Raw Material Storage': [
    { type: 'Fisik', name: 'Sistem Rak Stacking Tinggi', detail: 'Barang jatuh akibat overloading (Risiko Tertimpa)' },
    { type: 'Fisik', name: 'Manuver Kendaraan Forklift', detail: 'Blind spot operator (Risiko Tertabrak)' },
    { type: 'Ergonomi', name: 'Manual Material Handling', detail: 'Postur tubuh membungkuk (Risiko Low Back Pain)' }
  ],
  'Main Production Hall': [
    { type: 'Fisik', name: 'Mixer Homogenizer Industri', detail: 'Mesin berputar kecepatan tinggi (Risiko Amputasi)' },
    { type: 'Fisik', name: 'Aktivasi Motor Mesin', detail: 'Paparan bising kontinu > 85 dBA (Risiko Gangguan Pendengaran)' },
    { type: 'Kimia', name: 'Penuangan Serbuk', detail: 'Paparan debu partikulat (Risiko ISPA)' }
  ],
  'Research & Mixing Lab': [
    { type: 'Kimia', name: 'Reagen Asam/Basa Kuat', detail: 'Tumpahan saat pemindahan bahan (Luka bakar kimia)' },
    { type: 'Kimia', name: 'Reaksi Gas / Uap Solven', detail: 'Fume hood mati (Risiko Keracunan)' },
    { type: 'Fisik', name: 'Hot Plate & Ovens', detail: 'Permukaan panas (Luka bakar termal)' }
  ],
  'IPAL': [
    { type: 'Fisik', name: 'Kolam Bak Aerasi', detail: 'Lantai licin (Risiko Tenggelam lumpur aktif)' },
    { type: 'Kimia', name: 'Gas Beracun (H2S)', detail: 'Dekomposisi anaerob (Risiko Asfiksia letal)' },
    { type: 'Biologis', name: 'Bakteri Patogen Lumpur', detail: 'Kontak material (Risiko Infeksi sepsis)' }
  ]
}

const orgTasksDb = {
  'Dir. Keuangan (CFO)': ['Merencanakan strategi keuangan jangka panjang.', 'Mengawasi arus kas dan likuiditas perusahaan.', 'Memastikan kepatuhan pajak dan audit.'],
  'Dir. Operasional (COO)': ['Mengoptimalkan efisiensi rantai pasok pabrik.', 'Memastikan target produksi harian tercapai.', 'Mengontrol standar K3 di seluruh area fasilitas.'],
  'Dir. Pemasaran (CMO)': ['Merancang kampanye produk Lumina.', 'Membangun relasi dengan distributor global.', 'Analisis tren pasar produk botani.'],
  'Dir. SDM & Umum (CHRO)': ['Mengelola kesejahteraan dan fasilitas karyawan.', 'Strategi rekrutmen talenta terbaik.', 'Menyelenggarakan pelatihan K3 berkelanjutan.'],
  'Dir. Teknologi (CTO)': ['Pemeliharaan server dan jaringan CCTV AI.', 'Inovasi otomatisasi mesin produksi.', 'Cybersecurity data resep rahasia perusahaan.'],
  'Manajer Operasional': ['Supervisi manajer lini produksi.', 'Monitoring kualitas barang jadi.', 'Penjadwalan shift operator alat berat.'],
  'Spv. Operasional': ['Briefing K3 harian sebelum shift dimulai.', 'Inspeksi mesin mixer dan sensor interlock.', 'Laporan harian output mesin.'],
  'Staff Operasional': ['Quality Control sampel produk.', 'Pengecekan logistik bahan baku.', 'Pengisian formulir LOTO pada mesin rusak.']
}

// Default helper to generate placeholder tasks if missing
const generateOrgTasks = (level, desc) => {
  return [
    `Fokus pada ${desc.toLowerCase()}.`,
    `Berkoordinasi di tingkat ${level}.`,
    'Memastikan SOP berjalan dengan baik.'
  ]
}

const GAP = 12 // Fixed gap between cursor and tooltip (px)

const orgData = [
  {
    director: { name: 'Dir. Keuangan (CFO)', level: 'Level 4', desc: 'Mengelola keuangan & anggaran' },
    subs: [
      {
        manager: { name: 'Manajer Keuangan', level: 'Level 5', desc: 'Operasional keuangan harian' },
        spv: { name: 'Spv. Keuangan', level: 'Level 6', desc: 'Pengawasan staf keuangan' },
        staff: { name: 'Staff Keuangan', level: 'Level 7', desc: 'Administrasi keuangan' },
        karyawan: { name: 'Karyawan Pelaksana', level: 'Level 8', desc: 'Pelaksanaan tugas dasar' }
      }
    ]
  },
  {
    director: { name: 'Dir. Operasional (COO)', level: 'Level 4', desc: 'Memimpin kegiatan operasional pabrik' },
    subs: [
      {
        manager: { name: 'Manajer Operasional', level: 'Level 5', desc: 'Mengelola produksi & logistik' },
        spv: { name: 'Spv. Operasional', level: 'Level 6', desc: 'Pengawasan lini produksi' },
        staff: { name: 'Staff Operasional', level: 'Level 7', desc: 'Quality control & logistik' },
        karyawan: { name: 'Karyawan Pelaksana', level: 'Level 8', desc: 'Operator pabrik & lapangan' }
      }
    ]
  },
  {
    director: { name: 'Dir. Pemasaran (CMO)', level: 'Level 4', desc: 'Strategi marketing & sales' },
    subs: [
      {
        manager: { name: 'Manajer Pemasaran', level: 'Level 5', desc: 'Strategi promosi' },
        spv: { name: 'Spv. Pemasaran', level: 'Level 6', desc: 'Pengawasan tim sales' },
        staff: { name: 'Staff Pemasaran', level: 'Level 7', desc: 'Sales & digital marketing' },
        karyawan: { name: 'Karyawan Pelaksana', level: 'Level 8', desc: 'Distribusi & event' }
      }
    ]
  },
  {
    director: { name: 'Dir. SDM & Umum (CHRO)', level: 'Level 4', desc: 'Mengelola Human Resources' },
    subs: [
      {
        manager: { name: 'Manajer SDM', level: 'Level 5', desc: 'Rekrutmen & pelatihan' },
        spv: { name: 'Spv. SDM', level: 'Level 6', desc: 'Pengawasan staf HR' },
        staff: { name: 'Staff SDM', level: 'Level 7', desc: 'Administrasi HR' },
        karyawan: { name: 'Karyawan Pelaksana', level: 'Level 8', desc: 'Dukungan staf HR' }
      },
      {
        manager: { name: 'Manajer Umum', level: 'Level 5', desc: 'Fasilitas & umum' },
        spv: { name: 'Spv. Umum', level: 'Level 6', desc: 'Pengawasan fasilitas' },
        staff: { name: 'Staff Umum', level: 'Level 7', desc: 'Administrasi GA' },
        karyawan: { name: 'Karyawan Pelaksana', level: 'Level 8', desc: 'Security, OB, Driver' }
      }
    ]
  },
  {
    director: { name: 'Dir. Teknologi (CTO)', level: 'Level 4', desc: 'Infrastruktur IT & Sistem' },
    subs: [
      {
        manager: { name: 'Manajer TI', level: 'Level 5', desc: 'Pengembangan sistem' },
        spv: { name: 'Spv. TI', level: 'Level 6', desc: 'Pengawasan teknis IT' },
        staff: { name: 'Staff TI', level: 'Level 7', desc: 'Programmer & Network' },
        karyawan: { name: 'Karyawan Pelaksana', level: 'Level 8', desc: 'IT Support / Helpdesk' }
      }
    ]
  }
]

const setHover = (name, zone, desc) => {
  hoveredRoom.value = { name, zone, desc }
  
  const isOrg = zone.includes('Tingkat') || zone.includes('Level') || zone.includes('Eksekutif') || zone.includes('Pemegang')
  
  if (isOrg) {
    selectedInfo.value = {
      type: 'org',
      title: name,
      subtitle: zone,
      desc: desc,
      tasks: orgTasksDb[name] || generateOrgTasks(zone, desc)
    }
  } else {
    selectedInfo.value = {
      type: 'map',
      title: name,
      subtitle: zone,
      desc: desc,
      hazards: mapHazardsDb[name] || []
    }
  }
}

const clearHover = () => {
  hoveredRoom.value = null
}

const updateTooltipPos = (e) => {
  if (!hoveredRoom.value) return

  nextTick(() => {
    const el = tooltipEl.value
    const tw = el ? el.offsetWidth : 220
    const th = el ? el.offsetHeight : 100

    let x = e.clientX - (tw / 2)
    let y = e.clientY + GAP

    // Safety: don't overflow right edge
    if (x + tw > window.innerWidth - 8) {
      x = window.innerWidth - tw - 8
    }

    // Safety: don't overflow left edge
    if (x < 8) {
      x = 8
    }

    // If tooltip would overflow the bottom edge, flip to above cursor
    if (y + th > window.innerHeight - 8) {
      y = e.clientY - th - GAP
    }

    // Safety: never go off-screen top
    if (y < 8) {
      y = 8
    }

    tooltipX.value = x
    tooltipY.value = y
  })
}
</script>

<style scoped>
.map-page {
  /* Inherits padding from .page in App.vue */
}

.map-header {
  position: relative;
  background-color: #020617;
  /* Slate 950 */
  border-radius: 20px;
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin-bottom: 0.5rem;
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
  color: #10b981;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.map-header p {
  color: #94a3b8;
  font-size: 1.1rem;
}

.map-layout-grid {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  width: 100%;
}

.map-container-wrapper {
  flex: 1;
  min-width: 0;
  position: relative;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.legend-panel {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f8fafc;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  margin-top: 1.5rem;
}

.legend-title {
  font-weight: 800;
  color: #0f172a;
  font-size: 0.95rem;
  white-space: nowrap;
}

.legend-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  flex: 1;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: #475569;
  font-weight: 700;
}

.legend-icon {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.legend-icon svg {
  width: 16px;
  height: 16px;
}

.fire-ext {
  background: #ef4444;
}

.first-aid {
  background: #10b981;
}

.emergency-exit {
  background: #10b981;
}

.warning {
  background: #f59e0b;
}

.no-smoking {
  background: #ef4444;
}

.ppe {
  background: #3b82f6;
}

.svg-container {
  width: 100%;
  overflow-x: auto;
  cursor: crosshair;
}

.lumina-map {
  width: 100%;
  height: auto;
  display: block;
}

/* Base Shapes */
.zone-backdrop {
  fill: #e0f2fe;
  /* Light blue representing the zones */
  stroke: #bae6fd;
  stroke-width: 2px;
  rx: 10px;
}

.assembly-backdrop {
  fill: #dcfce7;
  /* Light green */
  stroke: #86efac;
  stroke-dasharray: 6 4;
  stroke-width: 2px;
  rx: 10px;
}

.zone-title {
  font-weight: 800;
  font-size: 16px;
  fill: #0369a1;
  text-anchor: middle;
}

.zone-subtitle {
  font-size: 12px;
  fill: #0284c7;
  text-anchor: middle;
}

.building-wall {
  fill: none;
  stroke: #0f172a;
  stroke-width: 4px;
  stroke-linejoin: round;
}

/* Interactive Rooms */
.room {
  cursor: pointer;
  transition: all 0.3s ease;
}

.room rect {
  fill: #ffffff;
  stroke: #64748b;
  stroke-width: 2px;
  transition: all 0.3s ease;
}

.room text {
  fill: #1e293b;
  font-weight: 700;
  font-size: 12px;
  text-anchor: middle;
  pointer-events: none;
  transition: all 0.3s ease;
}

.divider {
  stroke: #94a3b8;
  stroke-width: 1px;
}

.desk {
  fill: #f1f5f9 !important;
  stroke: #cbd5e1 !important;
  stroke-width: 1px !important;
}

.machine {
  fill: #f8fafc !important;
  stroke: #94a3b8 !important;
}

.machine-guard {
  fill: none !important;
  stroke: #ef4444 !important;
  stroke-width: 2px !important;
  stroke-dasharray: 4 4;
}

.guard-text {
  fill: #ef4444 !important;
  font-size: 10px !important;
  font-style: italic;
}

/* Hover Effects */
.room:hover rect {
  fill: #ecfdf5;
  stroke: #10b981;
  stroke-width: 3px;
  filter: drop-shadow(0 10px 15px rgba(16, 185, 129, 0.2));
}

.room:hover text {
  fill: #065f46;
}

/* Evacuation Lines Animation */
.evac-line {
  fill: none;
  stroke: #10b981;
  stroke-width: 3px;
  stroke-dasharray: 10 6;
  animation: flow 1.5s linear infinite;
  opacity: 0.8;
}

@keyframes flow {
  from {
    stroke-dashoffset: 16;
  }

  to {
    stroke-dashoffset: 0;
  }
}

/* Floating Tooltip */
.map-tooltip {
  position: fixed;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border: 1px solid #e2e8f0;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  pointer-events: none;
  z-index: 9999;
  min-width: 200px;
  max-width: 300px;
}

.map-tooltip h4 {
  margin: 0 0 0.2rem;
  color: #0f172a;
  font-weight: 800;
  font-size: 1.1rem;
}

.room-zone {
  display: inline-block;
  background: #e0f2fe;
  color: #0284c7;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.map-tooltip p {
  margin: 0;
  color: #475569;
  font-size: 0.9rem;
}

/* Animations */
.animate-slide-up {
  opacity: 0;
  animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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

.fade-delay-2 {
  animation-delay: 0.2s;
}

.view-toggle {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.view-toggle button {
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  border: 1px solid #cbd5e1;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  color: #64748b;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  display: flex;
  align-items: center;
}

.view-toggle button:hover {
  background: white;
  color: #047857;
  border-color: #047857;
}

.view-toggle button.active {
  background: #10b981; /* Primary Green */
  color: white;
  border-color: #10b981;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.interactive-info-panel {
  box-sizing: border-box;
  width: 380px;
  height: 620px;
  flex-shrink: 0;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 2rem;
}

.interactive-info-panel.placeholder {
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  text-align: center;
  background: #f8fafc;
  border: 2px dashed #cbd5e1;
  color: #64748b;
}

.placeholder-content svg {
  width: 48px;
  height: 48px;
  color: #94a3b8;
  margin-bottom: 1rem;
}

.placeholder-content p {
  font-size: 1.05rem;
  line-height: 1.5;
  margin: 0;
}

.panel-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.panel-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.panel-icon.map { background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%); }
.panel-icon.org { background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); }

.panel-icon svg { width: 24px; height: 24px; }

.panel-title h3 {
  margin: 0 0 0.2rem;
  font-size: 1.3rem;
  font-weight: 800;
  color: #0f172a;
}

.panel-subtitle {
  font-size: 0.85rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.panel-content {
  padding: 2rem;
}

.panel-desc {
  font-size: 1.05rem;
  color: #334155;
  margin: 0 0 1.5rem;
  line-height: 1.6;
}

.hazard-section h4, .org-section h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 1rem;
}

.pulse-dot {
  width: 10px;
  height: 10px;
  background: #ef4444;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.2);
}
.pulse-dot.blue {
  background: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.hazard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.hazard-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
}

.hazard-type {
  font-size: 0.75rem;
  font-weight: 800;
  padding: 4px 8px;
  border-radius: 6px;
  text-transform: uppercase;
}
.hazard-type.fisik { background: #fee2e2; color: #b91c1c; }
.hazard-type.kimia { background: #fef3c7; color: #b45309; }
.hazard-type.ergonomi { background: #e0e7ff; color: #4338ca; }
.hazard-type.biologis { background: #dcfce7; color: #15803d; }

.hazard-text strong {
  display: block;
  font-size: 0.95rem;
  color: #1e293b;
  margin-bottom: 0.3rem;
}
.hazard-text span {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.4;
  display: block;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.task-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  font-size: 0.95rem;
  color: #475569;
  background: #f8fafc;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
  flex-shrink: 0;
}

.task-list li svg {
  width: 18px;
  height: 18px;
  color: #10b981;
  flex-shrink: 0;
  margin-top: 2px;
}

.map-view-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.org-view-wrapper {
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  background: #f8fafc;
}

.org-tree {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', sans-serif;
}

.org-level {
  display: flex;
  justify-content: center;
}

.org-node {
  padding: 4px 6px;
  border-radius: 6px;
  font-size: 0.65rem;
  font-weight: 700;
  color: white;
  text-align: center;
  min-width: 85px;
  max-width: 100px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  white-space: pre-wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  line-height: 1.15;
}

.org-node:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.15);
}

/* Colors matching Lumina theme */
.l1 { background: #0f172a; } /* Slate 900 */
.l2 { background: #1e293b; } /* Slate 800 */
.l3 { background: #047857; } /* Emerald 700 */
.l4 { background: #0f766e; } /* Teal 700 */
.l5 { background: #0284c7; } /* Sky 600 */
.l6 { background: #64748b; } /* Slate 500 */
.l7 { background: #f59e0b; } /* Amber 500 */
.l8 { background: #10b981; } /* Emerald 500 */

/* Connectors */
.connector-v {
  width: 2px;
  height: 16px;
  background: #94a3b8;
  margin: 0 auto;
}

.connector-v.short {
  height: 10px;
}

.fork-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.connector-h-fork {
  width: 82.5%;
  height: 2px;
  background: #94a3b8;
}

.org-branches {
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: -2px; /* Pull up to touch the horizontal line */
}

.director-branch {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.sub-fork-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.sub-fork-wrapper .connector-h-fork.small {
  width: 55%;
}

.sub-branches {
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: -2px;
}

.sub-branch {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* FADE-SLIDE TRANSITION */
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

/* =========================================================================
   RESPONSIVE DESIGN - MAP VIEW
   ========================================================================= */

/* === Tablet <= 1024px === */
@media (max-width: 1024px) {
  .map-header {
    padding: 3.5rem 1.5rem;
    border-radius: 16px;
  }

  .text-gradient {
    font-size: 2rem;
  }

  .map-container-wrapper {
    min-height: 380px;
    padding: 0.75rem;
  }

  .map-view-wrapper {
    flex-direction: column;
  }
}

/* === Small Tablet / Large Phone <= 768px === */
@media (max-width: 768px) {
  .map-header {
    padding: 3rem 1.5rem;
    border-radius: 14px;
  }

  .text-gradient {
    font-size: 1.75rem;
    letter-spacing: -0.5px;
  }

  .map-header p {
    font-size: 1rem;
  }

  .view-toggle {
    gap: 0.75rem;
    padding: 0 0.25rem;
  }

  .view-toggle button {
    flex: 1;
    padding: 0.6rem 1rem;
    font-size: 0.88rem;
    justify-content: center;
  }

  /* SVG map: let user scroll horizontally */
  .svg-container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    cursor: default;
  }

  .lumina-map {
    min-width: 680px;
    width: auto;
    max-width: none;
  }

  /* Legend: compact grid */
  .legend-panel {
    flex-direction: column;
    align-items: flex-start;
  }

  .legend-grid {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.6rem;
  }

  .legend-item {
    font-size: 0.8rem;
    gap: 0.5rem;
  }

  /* Org chart: horizontal scroll container */
  .org-view-wrapper {
    overflow-x: auto;
    overflow-y: visible;
    -webkit-overflow-scrolling: touch;
    padding: 1rem 0.5rem;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 500px;
  }

  .org-tree {
    transform: scale(0.82);
    transform-origin: top left;
    white-space: nowrap;
  }
}

/* === Phone <= 480px === */
@media (max-width: 480px) {
  .map-header {
    padding: 2.75rem 1.25rem;
    border-radius: 12px;
  }

  .text-gradient {
    font-size: 1.45rem;
  }

  .map-container-wrapper {
    padding: 0.5rem;
    border-radius: 14px;
  }

  .legend-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .legend-item {
    font-size: 0.75rem;
  }

  .legend-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .org-view-wrapper {
    min-height: 400px;
    padding: 0.75rem 0;
  }

  .org-tree {
    transform: scale(0.65);
    transform-origin: top left;
  }

  .map-tooltip {
    font-size: 0.82rem;
    padding: 0.7rem 1rem;
    min-width: 150px;
    max-width: 220px;
  }

  .map-tooltip h4 {
    font-size: 0.95rem;
  }
}

/* === Very small phone <= 360px === */
@media (max-width: 360px) {
  .text-gradient {
    font-size: 1.25rem;
  }

  .view-toggle button {
    font-size: 0.82rem;
    padding: 0.5rem 0.75rem;
  }

  .legend-grid {
    grid-template-columns: 1fr 1fr;
  }

  .org-tree {
    transform: scale(0.55);
    transform-origin: top left;
  }
}
</style>

