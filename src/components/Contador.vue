<script setup lang="ts">
import { ref } from 'vue'

const contador = ref(0)
const nombreUsuario = ref('sebastian')

const incrementarContador = () => {
  contador.value++
}
</script>

<template>
  <div class="container py-5 px-3 text-center">
    <h1>Leccion 1</h1>
    <p>Implementar un contador básico con datos reactivos</p>

    <div class="mt-5 border p-3">
      <h5>
        Usuario: <span class="text-muted">{{ nombreUsuario }}</span>
      </h5>
      <h5>
        Contador: <span class="text-muted">{{ contador }}</span>
      </h5>
      <button @click="incrementarContador" type="button" class="btn btn-primary mt-3 w-100">
        Incrementar
      </button>
    </div>
  </div>

  <div class="d-flex justify-content-center">
    <RouterLink to="/">Volver</RouterLink>
  </div>
</template>

<style scoped>
button {
  max-width: 300px;
}
</style>
