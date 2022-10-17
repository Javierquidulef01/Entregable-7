"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libreria = void 0;
class Libreria {
    constructor(libros, revistas, clientes) {
        this.libros = libros;
        this.revistas = revistas;
        this.clientes = clientes;
    }
    calcularPrecio(articulo, cliente) {
        let descuento = cliente.getDescuento();
        if (descuento == 0.1 || descuento == 0.15 || descuento == 0.3) {
            return articulo.getPrecio() * (1 - cliente.getDescuento());
        }
        return articulo.getPrecio();
    }
    esUnArticuloYaAdquirido(cliente, articulo) {
        if (this.buscarCliente(cliente)) {
            return this.buscarArticulo(cliente.getCompras(), articulo);
        }
        return false;
    }
    buscarCliente(cliente) {
        this.clientes.forEach(clienteExisente => {
            if (cliente.getDni() == clienteExisente.getDni()) {
                return true;
            }
        });
        return false;
    }
    buscarArticulo(comprasCliente, articuloBuscado) {
        comprasCliente.forEach(articuloComprado => {
            let autorEncontrado = articuloComprado.getAutor() == articuloBuscado.getAutor();
            let nombreEncontrado = articuloComprado.getNombre() == articuloBuscado.getNombre();
            if (autorEncontrado && nombreEncontrado) {
                return true;
            }
        });
        return false;
    }
    esGustoDelCliente(libro, autoresFavCliente, generosFavCliente) {
        if (generosFavCliente != undefined) {
            return autoresFavCliente.includes(libro.getAutor()) && generosFavCliente.includes(libro.getGenero());
        }
        return autoresFavCliente.includes(libro.getAutor());
    }
    /*
        public esGustoDelCliente(libro: Libro, autoresFavCliente: string[]): boolean {
            return autoresFavCliente.includes(libro.getAutor());
        }
    
        public esGustoDelCliente(libro: Libro, autoresFavCliente: string[], generosFavCliente: string[]): boolean {
            return autoresFavCliente.includes(libro.getAutor()) && generosFavCliente.includes(libro.getGenero());
        }
    */
    getLibros() {
        return this.libros;
    }
    setLibros(libros) {
        this.libros = libros;
    }
    getRevistas() {
        return this.revistas;
    }
    setRevistas(revistas) {
        this.revistas = revistas;
    }
    getClientes() {
        return this.clientes;
    }
    setClientes(clientes) {
        this.clientes = clientes;
    }
}
exports.Libreria = Libreria;
