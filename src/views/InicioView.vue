<template>
  <div class="container py-5 px-3 border">
    <h1 class="text-center">Bienvenido al Sistema</h1>
    <p class="text-center text-muted">
      Aquí encontrarás cada una de las lecciones del proyecto de módulo.
    </p>

    <div class="container-lecciones">
      <div class="lecciones">
        <h2 class>Lección 1</h2>
        <p class>Implementar un contador básico con datos reactivos</p>
        <RouterLink to="/leccion1">Ver</RouterLink>
      </div>
      <div class="lecciones">
        <h2>Lección 2</h2>
        <p>Crear un componente Libro.vue para mostrar datos de un libro</p>
        <RouterLink to="/leccion2">Ver</RouterLink>
      </div>
      <div class="lecciones">
        <h2>Lección 3 y 4</h2>
        <p>Implementar formularios interactivos con v-model.</p>
        <RouterLink to="/leccion3y4">Ver</RouterLink>
      </div>
      <div class="lecciones">
        <h2>Lección 5</h2>
        <p>Implementar navegación entre vistas con Vue Router.</p>
        <RouterLink to="/leccion5/libros">Ver</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-lecciones {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.lecciones {
  width: 100%;
  max-width: 480px;
  padding: 1rem;
  background-color: #182b3a;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: aliceblue;
}

a {
  color: greenyellow;
}

p {
  opacity: 0.8;
}
</style>
