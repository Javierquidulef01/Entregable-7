"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
const LibroRevista_1 = require("./LibroRevista");
class Revista extends LibroRevista_1.LibroRevista {
    constructor(nombre, autor, precio, numero, anio) {
        super(nombre, autor, precio);
        this.numero = numero;
        this.anio = anio;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getAnio() {
        return this.anio;
    }
    setAnio(anio) {
        this.anio = anio;
    }
}
exports.Revista = Revista;
