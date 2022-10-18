"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libreria = void 0;
class Libreria {
    constructor(libros, revistas) {
        this.libros = libros;
        this.revistas = revistas;
        this.clientes = [];
    }
    comprarArticulos(cliente, articulos) {
        let total = 0;
        try {
            if (articulos.length == 0) {
                let mensaje = "EL CLIENTE " + cliente.getNombre() + " " + cliente.getApellido() + " con DNI:" + cliente.getDni() + " NO HA ELEGIDO ARTICULOS PARA COMPRAR.";
                throw new Error(mensaje);
            }
            articulos.forEach(articulo => {
                total += this.calcularPrecio(articulo, cliente);
            });
            cliente.setCompras(articulos);
            this.setClientes(cliente);
            console.log("\nCliente:" + cliente.getNombre() + " " + cliente.getApellido() + "\tDNI:" + cliente.getDni() + "\nCantidad Articulos: " + articulos.length + "\tTotal a Pagar: $" + total + "\n");
        }
        catch (error) {
            console.log(error);
        }
    }
    calcularPrecio(articulo, cliente) {
        let descuento = cliente.getDescuento();
        if (descuento == 0.1 || descuento == 0.15 || descuento == 0.3) {
            return articulo.getPrecio() * (1 - cliente.getDescuento());
        }
        return articulo.getPrecio();
    }
    esUnArticuloYaAdquirido(cliente, articulo) {
        try {
            let esCliente = this.buscarCliente(cliente);
            if (!esCliente) {
                let mensaje = "EL CLIENTE " + cliente.getNombre() + " " + cliente.getApellido() + " con DNI:" + cliente.getDni() + " NO EXISTE EN EL HISTORIAL DE CLIENTES.";
                throw new Error(mensaje);
            }
            else {
                return this.buscarArticulo(cliente.getCompras(), articulo);
            }
        }
        catch (error) {
            console.log(error);
        }
        return false;
    }
    buscarCliente(cliente) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].getDni() == cliente.getDni()) {
                return true;
            }
        }
        return false;
    }
    buscarArticulo(comprasCliente, articuloBuscado) {
        for (let i = 0; i < comprasCliente.length; i++) {
            let autorEncontrado = comprasCliente[i].getAutor() == articuloBuscado.getAutor();
            let nombreEncontrado = comprasCliente[i].getNombre() == articuloBuscado.getNombre();
            if (autorEncontrado && nombreEncontrado) {
                return true;
            }
        }
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
    setClientes(cliente) {
        this.clientes.push(cliente);
    }
}
exports.Libreria = Libreria;
