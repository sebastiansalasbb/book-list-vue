<script setup lang="ts">
import Libro from '@/components/Libro.vue'
import Navbar from '@/components/Navbar.vue'
import { useLibros } from '@/composables/useLibros'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const { estado, eliminarLibro } = useLibros()

const route = useRoute()

const filtrarLibro = computed(() => {
  const categoriaQuery = route.query.categoria
  if (!categoriaQuery) {
    return estado.listaDeLibros
  } else {
    const libro = estado.listaDeLibros.filter((libro) => libro.categoria === categoriaQuery)

    return libro
  }
})
</script>

<template>
  <Navbar />

  <div class="container py-5">
    <Libro
      :listaDeLibros="filtrarLibro"
      @eliminar-libro="eliminarLibro"
      :leccion="5"
      :detalle="false"
    />
  </div>
</template>
