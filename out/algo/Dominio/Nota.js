export default class Nota{
    /*
    ===DATA TYPE===
    #contenido: String
    */

    #contenido

    constructor(contenido){
        this.#contenido = contenido
    }

    get contenido(){
        return this.#contenido
    }
}