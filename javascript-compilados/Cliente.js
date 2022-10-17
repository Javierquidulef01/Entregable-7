"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nombre, apellido, dni, direccion, autoresFav, generosFav, compras, descuento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.direccion = direccion;
        this.autoresFav = autoresFav;
        this.generosFav = generosFav;
        this.compras = compras;
        this.descuento = descuento;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getDni() {
        return this.dni;
    }
    setDni(dni) {
        this.dni = dni;
    }
    getDireccion() {
        return this.direccion;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
    getAutoresFav() {
        return this.autoresFav;
    }
    setAutoresFav(autoresFav) {
        this.autoresFav = autoresFav;
    }
    getGenerosFav() {
        return this.generosFav;
    }
    setGenerosFav(generosFav) {
        this.generosFav = generosFav;
    }
    getCompras() {
        return this.compras;
    }
    setCompras(compras) {
        this.compras = compras;
    }
    getDescuento() {
        return this.descuento;
    }
    setDescuento(descuento) {
        this.descuento = descuento;
    }
}
exports.Cliente = Cliente;
