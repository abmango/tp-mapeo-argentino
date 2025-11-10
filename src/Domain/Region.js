import DomainError from "./errors/DomainError.js";

class Region {
    constructor({ id = null, nombre }) {
        if (!nombre || nombre.trim() === "")
            throw new DomainError("El nombre de la región es obligatorio.");
        this.id = id;
        this.nombre = nombre.trim();
    }

    cambiarNombre(nuevoNombre) {
        if (!nuevoNombre || nuevoNombre.trim() === "")
            throw new DomainError("El nombre de la región no puede estar vacío.");
        this.nombre = nuevoNombre.trim();
    }

    toJSON() {
        return {
            id: this.id,
            nombre: this.nombre,
        };
    }
}

export default Region;
