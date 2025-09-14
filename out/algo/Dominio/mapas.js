/*import creador from "./Creador.js";
import region from "./Region.js";
import categoria from "./Categoria.js";*/


export default class Mapas {
    /*
    ===DATA TYPE===
    
    #nombre: String
    #descripcion: String
    #categoria: Categoria
    #fechaHostorica: DateTime
    #region: Region
    #creador: Creador
    #listaNotas: list<Notas>
    #urlImagen: String
    */

    #nombre
    #descripcion
    #categoria
    #fechaInicio
    #fechaFin
    #region
    #creador
    #listaNotas
    #urlImagen

    constructor(nombre, descripcion, categoria, fechaInicio, fechaFin, region, creador, imagenURL) {
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#categoria = categoria;
        this.#fechaInicio = fechaHistorica;
        this.#fechaFin = fechaFin;
        this.#region = region;
        this.#creador = creador;
        this.#listaNotas = []
        this.#urlImagen = imagenURL
    }

    get nombre() {
        return this.#nombre;
    }

    get descripcion() {
        return this.#descripcion;
    }

    get categoria() {
        return this.#categoria;
    }

    get fechaInicio() {
        return this.#fechaInicio;
    }
    
    get fechaFin() {   
        return this.#fechaFin; 
    }  

    get region() {
        return this.#region;
    }

    get creador() {
        return this.#creador;
    }

    get listaNotas() {
        return this.#listaNotas;
    }

    get urlImagen() {
        return this.#urlImagen;
    }

    agregarNota(nota) {
        this.#listaNotas.push(nota)
    }

}