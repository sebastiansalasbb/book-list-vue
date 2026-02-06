<script setup lang="ts">
import { reactive, ref } from 'vue'

const estado = reactive({
  titulo: '',
  autor: '',
  categoria: '',
  descripcion: '',
  portadaUrl: '',
})

const mostrarToast = ref(false)

const emits = defineEmits(['agregar-libro'])

const agregarLibro = () => {
  const nuevoLibro = { ...estado }

  emits('agregar-libro', { ...nuevoLibro })

  estado.titulo = ''
  estado.autor = ''
  estado.categoria = ''
  estado.descripcion = ''
  estado.portadaUrl = ''

  mostrarToast.value = true

  setTimeout(() => {
    mostrarToast.value = false
  }, 1500)
}
</script>

<template>
  <div class="container">
    <h2>Añadir Libro</h2>
    <form
      @submit.prevent="agregarLibro"
      @keyup.enter.prevent="agregarLibro"
      class="border shadow p-4"
    >
      <div class="mb-3">
        <label for="titulo" class="form-label">Título</label>
        <input type="text" class="form-control" id="titulo" v-model="estado.titulo" />
      </div>
      <div class="mb-3">
        <label for="url" class="form-label">Imagen URL</label>
        <input type="text" class="form-control" id="url" v-model="estado.portadaUrl" />
      </div>
      <div class="mb-3">
        <label for="Autor" class="form-label">Autor</label>
        <input type="text" class="form-control" id="Autor" v-model="estado.autor" />
      </div>

      <label for="select" class="form-label">Categoría</label>
      <select
        class="form-select mb-3"
        aria-label="Default select example"
        id="select"
        v-model="estado.categoria"
      >
        <option value="Ciencias">Ciencias</option>
        <option value="Desarrollo personal">Desarrollo personal</option>
        <option value="Informática">Informática</option>
      </select>

      <div class="mb-3">
        <label for="descripcion" class="form-label">Descripción</label>
        <textarea
          class="form-control"
          id="descripcion"
          rows="3"
          v-model="estado.descripcion"
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Registrar</button>
    </form>
  </div>

  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div
      id="liveToast"
      :class="['toast', 'fade', mostrarToast === true ? 'show' : 'hide']"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <i class="bi bi-check-circle-fill text-success me-1"></i>
        <strong class="me-auto">Exito</strong>
        <small>1 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">Libro añadido exitosamente!!!</div>
    </div>
  </div>
</template>

<style scoped>
form {
  width: 100%;
  max-width: 700px;
  margin-inline: auto;
}
</style>
