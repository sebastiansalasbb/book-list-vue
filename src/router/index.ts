import Contador from '@/components/Contador.vue'
import FormularioIngresoLibros from '@/components/FormularioIngresoLibros.vue'
import ListaLibrosSimple from '@/components/ListaLibrosSimple.vue'
import DetalleLibro from '@/views/DetalleLibro.vue'
import InicioView from '@/views/InicioView.vue'
import ListaLibros from '@/views/ListaLibros.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: InicioView },

    { path: '/leccion1', component: Contador },
    { path: '/leccion2', component: ListaLibrosSimple },
    { path: '/leccion3y4', component: FormularioIngresoLibros },
    { path: '/leccion5/libros', component: ListaLibros },
    { path: '/leccion5/libros/:titulo', component: DetalleLibro, props: true },
  ],
})

export default router
