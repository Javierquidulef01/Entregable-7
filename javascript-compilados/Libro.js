"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
const LibroRevista_1 = require("./LibroRevista");
class Libro extends LibroRevista_1.LibroRevista {
    constructor(nombre, autor, precio, cantPaginas, genero, resumen) {
        super(nombre, autor, precio);
        this.cantPaginas = cantPaginas;
        this.genero = genero;
        this.resumen = resumen;
    }
    getCantPaginas() {
        return this.cantPaginas;
    }
    setCantPaginas(cantPaginas) {
        this.cantPaginas = cantPaginas;
    }
    getGenero() {
        return this.genero;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    getResumen() {
        return this.resumen;
    }
    setResumen(resumen) {
        this.resumen = resumen;
    }
}
exports.Libro = Libro;
