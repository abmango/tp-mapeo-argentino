export default class Region{
    /*
    ===DATA TYPE===
    #nombre: String
    */

    #nombre 

    constructor(nombre){
        this.#nombre = nombre
    }

    get getNombre(){
        return this.#nombre
    }
}