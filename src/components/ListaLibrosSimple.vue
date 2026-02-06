<script setup lang="ts">
import { useLibros } from '@/composables/useLibros'
import Libro from './Libro.vue'

const { estado, eliminarLibro } = useLibros()
</script>

<template>
  <div class="py-5 px-3 text-center">
    <h1>Lección 2</h1>
    <p>Utilizar templates y directivas para representar datos.</p>
    <Libro
      :listaDeLibros="estado.listaDeLibros"
      @eliminar-libro="eliminarLibro"
      :leccion="2"
      :detalle="false"
    />
  </div>
  <div class="d-flex justify-content-center">
    <RouterLink to="/">Volver</RouterLink>
  </div>
</template>
