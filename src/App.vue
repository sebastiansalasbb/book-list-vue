<script setup lang="ts">
import { ref, reactive } from 'vue'
import Libro from './components/Libro.vue'
import FormLibros from './components/FormLibros.vue'
import { useLibros } from './composables/useLibros'
import Navbar from './components/Navbar.vue'

const { estado, eliminarLibro, anadirLibro } = useLibros()
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
