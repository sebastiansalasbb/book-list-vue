<script setup lang="ts">
import { useLibros } from '@/composables/useLibros'
import FormLibros from './FormLibros.vue'

const { anadirLibro } = useLibros()
</script>

<template>
  <div class="py-5 px-3 text-center">
    <h1>Leccion 3 y 4</h1>
    <p>
      Implementar formularios interactivos con v-model. Capturar eventos del usuario para modificar
      el estado de la app.
    </p>
    <FormLibros @agregar-libro="anadirLibro" />
  </div>
  <div class="d-flex justify-content-center">
    <RouterLink to="/">Volver</RouterLink>
  </div>
</template>
