export default class Creador {
    /*
    ===DATA TYPE===
    #username: String
    #mail: String
    #X_twitter: String
    #imagenPerfil:String
    #instagram: String
    */

    #username
    #mail
    #X_twitter
    #imagenPerfil
    #instagram

    constructor(username, mail, X_twitter, instagram,perfil) {
        this.#username = username
        this.#mail = mail
        this.#X_twitter = X_twitter
        this.#imagenPerfil=perfil
        this.#instagram = instagram
    }

    
    get username() {
        return this.#username
    }

    get mail() {
        return this.#mail
    }

    get x_twitter() {
        return this.#X_twitter
    }

    get instagram() {
        return this.#instagram
    }

    get imagenPerfil(){
        return this.#imagenPerfil
    }

    }

