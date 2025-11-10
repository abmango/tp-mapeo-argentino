import DomainError from "./errors/DomainError.js";

class Categoria {
    constructor({ id = null, descripcion }) {
        if (!descripcion || descripcion.trim() === "")
            throw new DomainError("La descripción de la categoría es obligatoria.");
        this.id = id;
        this.descripcion = descripcion.trim();
    }

    cambiarDescripcion(nuevaDescripcion) {
        if (!nuevaDescripcion || nuevaDescripcion.trim() === "")
            throw new DomainError("La descripción no puede estar vacía.");
        this.descripcion = nuevaDescripcion.trim();
    }

    toJSON() {
        return {
            id: this.id,
            descripcion: this.descripcion,
        };
    }
}

export default Categoria;
