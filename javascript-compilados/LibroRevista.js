"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroRevista = void 0;
class LibroRevista {
    constructor(nombre, autor, precio) {
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    getPrecio() {
        return this.precio;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
}
exports.LibroRevista = LibroRevista;
