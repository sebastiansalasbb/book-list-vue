export interface Libro {
  titulo: string
  autor: string
  descripcion: string
  formato: string
  editorial: string
  anio: number
  idioma: string
  paginas: number
  encuadernacion: string
  dimensiones: string
  isbn13: string
  categoria: string
  portadaUrl: string
  coleccion?: string
  edicion?: string
  peso?: number
}
