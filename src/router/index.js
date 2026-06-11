import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilView from '../views/ProfilView.vue'
import K3View from '../views/K3View.vue'
import LaporView from '../views/LaporView.vue'
import MapView from '../views/MapView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/profil',
            name: 'profil',
            component: ProfilView
        },
        {
            path: '/k3',
            name: 'k3',
            component: K3View
        },
        {
            path: '/lapor',
            name: 'lapor',
            component: LaporView
        },
        {
            path: '/fasilitas',
            name: 'fasilitas',
            component: MapView
        }
    ]
})

export default router