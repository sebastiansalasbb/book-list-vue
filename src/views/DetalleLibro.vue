<script setup lang="ts">
import Libro from '@/components/Libro.vue'
import Navbar from '@/components/Navbar.vue'
import { useLibros } from '@/composables/useLibros'
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  titulo: {
    type: String,
  },
})

const { estado, eliminarLibro } = useLibros()

const filtrarLibro = computed(() => {
  const libro = estado.listaDeLibros.filter((libro) => libro.titulo === props.titulo)

  return libro[0]
})
</script>

<template>
  <Navbar />

  <div class="container d-flex flex-column align-items-center py-5">
    <img :src="filtrarLibro?.portadaUrl" alt="" class="" />
    <table class="table mt-5">
      <tbody>
        <tr>
          <th scope="row">titulo</th>
          <td>{{ filtrarLibro?.titulo }}</td>
        </tr>
        <tr>
          <th scope="row">autor</th>
          <td>{{ filtrarLibro?.autor }}</td>
        </tr>
        <tr>
          <th scope="row">formato</th>
          <td>{{ filtrarLibro?.formato }}</td>
        </tr>
        <tr>
          <th scope="row">editorial</th>
          <td>{{ filtrarLibro?.editorial }}</td>
        </tr>
        <tr>
          <th scope="row">año</th>
          <td>{{ filtrarLibro?.anio }}</td>
        </tr>
        <tr>
          <th scope="row">idioma</th>
          <td>{{ filtrarLibro?.idioma }}</td>
        </tr>
        <tr>
          <th scope="row">paginas</th>
          <td>{{ filtrarLibro?.paginas }}</td>
        </tr>
        <tr>
          <th scope="row">encuadernacion</th>
          <td>{{ filtrarLibro?.encuadernacion }}</td>
        </tr>
        <tr>
          <th scope="row">dimensiones</th>
          <td>{{ filtrarLibro?.dimensiones }}</td>
        </tr>
        <tr>
          <th scope="row">isbn13</th>
          <td>{{ filtrarLibro?.isbn13 }}</td>
        </tr>
        <tr>
          <th scope="row">categoria</th>
          <td>{{ filtrarLibro?.categoria }}</td>
        </tr>
      </tbody>
    </table>
    <div class="alert alert-light" role="alert">
      {{ filtrarLibro?.descripcion }}
    </div>
  </div>

  <div class="d-flex justify-content-center">
    <RouterLink to="/leccion5/libros">Volver</RouterLink>
  </div>
</template>
