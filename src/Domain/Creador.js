import DomainError from "./errors/DomainError.js";

class Creador {
    constructor({
        id = null,
        username,
        imagenPerfil = null,
        mail,
        x_twitter = null,
        instagram = null,
    }) {
        if (!username || username.trim() === "")
            throw new DomainError("El nombre de usuario es obligatorio.");
        if (!mail || !mail.includes("@"))
            throw new DomainError("El mail del creador no es válido.");

        this.id = id;
        this.username = username.trim();
        this.imagenPerfil = imagenPerfil;
        this.mail = mail.trim();
        this.x_twitter = x_twitter;
        this.instagram = instagram;
    }

    actualizarPerfil({ imagenPerfil, mail, x_twitter, instagram }) {
        if (mail && !mail.includes("@"))
            throw new DomainError("El mail proporcionado no es válido.");
        if (imagenPerfil) this.imagenPerfil = imagenPerfil;
        if (mail) this.mail = mail.trim();
        if (x_twitter) this.x_twitter = x_twitter;
        if (instagram) this.instagram = instagram;
    }

    toJSON() {
        return {
            id: this.id,
            username: this.username,
            imagenPerfil: this.imagenPerfil,
            mail: this.mail,
            x_twitter: this.x_twitter,
            instagram: this.instagram,
        };
    }
}

export default Creador;
