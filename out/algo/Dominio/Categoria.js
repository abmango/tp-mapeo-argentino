export default class Categoria{
    /*
    ===DATA TYPE===
    #descripcion: String
    */
   
    #descripcion

    constructor(descripcion){
        this.#descripcion = descripcion
    }

    get getDescripcion(){
        return this.#descripcion
    }
}