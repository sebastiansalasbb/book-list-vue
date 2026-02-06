<template>
  <nav class="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
    <div class="container">
      <RouterLink class="navbar-brand" to="/leccion5/libros"
        ><i class="bi bi-book-half"></i> BookList</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/leccion5/libros"
              >Home</RouterLink
            >
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorías
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item" to="/leccion5/libros?categoria=Ciencias"
                  >Ciencia</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  class="dropdown-item"
                  to="/leccion5/libros?categoria=Desarrollo personal"
                  >Desarrollo personal</RouterLink
                >
              </li>
              <li></li>
              <li>
                <RouterLink class="dropdown-item" to="/leccion5/libros?categoria=Informática"
                  >Informática
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/">Salir</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
