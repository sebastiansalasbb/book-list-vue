<script setup lang="ts">
import type { Libro } from '@/types/libro'

const props = defineProps<{
  listaDeLibros: Libro[]
  leccion: number
  detalle: boolean
}>()

const emit = defineEmits<{
  (e: 'eliminar-libro', payload: { tituloPorBorrar: string }): void
}>()

const eliminarLibro = (tituloPorBorrar: string) => {
  emit('eliminar-libro', { tituloPorBorrar })
}
</script>

<template>
  <p v-if="listaDeLibros.length === 0">No hay libros disponibles</p>
  <ul v-else class="d-flex justify-content-center flex-wrap gap-4 list-unstyled">
    <li class="" v-for="(item, index) in listaDeLibros" :key="index">
      <div class="card" style="width: 12rem">
        <img :src="item.portadaUrl" class="card-img-top" alt="..." />

        <div class="card-body">
          <h6 class="card-title" style="height: 50px">{{ item.titulo }}</h6>
          <p class="card-text text-muted">
            {{ item.autor }}
          </p>
          <div class="d-flex flex-column gap-2 align-items-center">
            <button @click="eliminarLibro(item.titulo)" type="button" class="btn btn-danger w-100">
              Eliminar
            </button>

            <RouterLink
              v-if="leccion === 5"
              class="btn btn-primary w-100"
              :to="`/leccion5/libros/${item.titulo}`"
              >Ver Detalles</RouterLink
            >
          </div>

          <div v-if="detalle === true" class="accordion mt-3" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Detalles
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  {{ item.descripcion }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
img {
  width: 100px;
  height: 150px;
  object-fit: cover;
  margin-inline: auto;
}

.card-text {
  font-size: 14px;
}
</style>
