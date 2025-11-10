import DomainError from "./errors/DomainError.js";
import Nota from "./Nota.js";

class MapaCartografico {
  constructor({
    id = null,
    nombre,
    descripcion,
    imagen = null,
    urlImagen = null,
    categoria = null,
    fechaInicio = null,
    fechaFin = null,
    region = null,
    creador = null,
    notas = []
  }) {
    if (!nombre || nombre.trim() === "")
      throw new DomainError("El nombre del mapa es obligatorio.");

    if (fechaInicio && fechaFin && new Date(fechaInicio) > new Date(fechaFin))
      throw new DomainError("La fecha de inicio no puede ser posterior a la fecha de fin.");

    this.id = id;
    this.nombre = nombre.trim();
    this.descripcion = descripcion ? descripcion.trim() : "";
    this.imagen = imagen;
    this.urlImagen = urlImagen;
    this.categoria = categoria;
    this.fechaInicio = fechaInicio ? new Date(fechaInicio) : null;
    this.fechaFin = fechaFin ? new Date(fechaFin) : null;
    this.region = region;
    this.creador = creador;
    this.notas = notas;
  }

  agregarNota(contenido) {
    if (!contenido || contenido.trim() === "")
      throw new DomainError("El contenido de la nota no puede estar vacío.");
    const nota = new Nota({ contenido });
    this.notas.push(nota);
  }

  cambiarCategoria(nuevaCategoria) {
    if (!nuevaCategoria) throw new DomainError("Debe especificarse una categoría válida.");
    this.categoria = nuevaCategoria;
  }

  cambiarRegion(nuevaRegion) {
    if (!nuevaRegion) throw new DomainError("Debe especificarse una región válida.");
    this.region = nuevaRegion;
  }

  asignarCreador(creador) {
    if (!creador) throw new DomainError("Debe asignarse un creador válido.");
    this.creador = creador;
  }

  actualizarDescripcion(nuevaDescripcion) {
    if (!nuevaDescripcion || nuevaDescripcion.trim() === "")
      throw new DomainError("La descripción no puede estar vacía.");
    this.descripcion = nuevaDescripcion.trim();
  }

  cambiarFechas(inicio, fin) {
    if (inicio && fin && new Date(inicio) > new Date(fin))
      throw new DomainError("La fecha de inicio no puede ser posterior a la de fin.");
    this.fechaInicio = inicio;
    this.fechaFin = fin;
  }

  validarIntegridad() {
    if (!this.categoria) throw new DomainError("El mapa debe tener una categoría asignada.");
    if (!this.region) throw new DomainError("El mapa debe tener una región asignada.");
    if (!this.creador) throw new DomainError("El mapa debe tener un creador asignado.");
  }

  toJSON() {
    return {
      id: this.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      imagen: this.imagen,
      urlImagen: this.urlImagen,
      categoria: this.categoria,
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
      region: this.region,
      creador: this.creador,
      notas: this.notas.map(n => n.toJSON()),
    };
  }
}

export default MapaCartografico;
