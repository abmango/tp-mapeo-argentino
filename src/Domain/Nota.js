import DomainError from "./errors/DomainError.js";

class Nota {
    constructor({ id = null, contenido }) {
        if (!contenido || contenido.trim() === "")
            throw new DomainError("El contenido de la nota es obligatorio.");

        this.id = id;
        this.contenido = contenido.trim();
        this.fechaCreacion = new Date();
    }

    editarContenido(nuevoContenido) {
        if (!nuevoContenido || nuevoContenido.trim() === "")
            throw new DomainError("El contenido de la nota no puede estar vacío.");
        this.contenido = nuevoContenido.trim();
    }

    toJSON() {
        return {
            id: this.id,
            contenido: this.contenido,
            fechaCreacion: this.fechaCreacion,
        };
    }
}

export default Nota;
