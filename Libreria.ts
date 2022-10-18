import { Cliente } from "./Cliente";
import { Libro } from "./Libro";
import { LibroRevista } from './LibroRevista';
import { Revista } from "./Revista";

export class Libreria {
    private libros: Libro[];
    private revistas: Revista[];
    private clientes: Cliente[];

    public constructor(libros: Libro[], revistas: Revista[]) {
        this.libros = libros;
        this.revistas = revistas;
        this.clientes = [];
    }

    public comprarArticulos(cliente: Cliente, articulos: LibroRevista[]): void {
        let total:number = 0;
        try {
            if (articulos.length == 0) {
                let mensaje: string = "EL CLIENTE " + cliente.getNombre() + " " + cliente.getApellido() + " con DNI:" + cliente.getDni() + " NO HA ELEGIDO ARTICULOS PARA COMPRAR.";
                throw new Error(mensaje);
            } 

            articulos.forEach(articulo => {
                total += this.calcularPrecio(articulo, cliente);
            });

            cliente.setCompras(articulos);
            this.setClientes(cliente);
            console.log("\nCliente:" + cliente.getNombre() + " " + cliente.getApellido()+ "\tDNI:" + cliente.getDni() + "\nCantidad Articulos: " + articulos.length + "\tTotal a Pagar: $" + total + "\n");
        } catch (error) {
            console.log(error);
        }
      
    }

    public calcularPrecio(articulo: LibroRevista, cliente: Cliente): number {
        let descuento: number = cliente.getDescuento();
        if (descuento == 0.1 || descuento == 0.15 || descuento == 0.3) {
            return articulo.getPrecio() * (1 - cliente.getDescuento());
        }
        return articulo.getPrecio();
    }

    public esUnArticuloYaAdquirido(cliente: Cliente, articulo: LibroRevista): boolean {
        try {
            let esCliente: boolean = this.buscarCliente(cliente);
            if (!esCliente) {
                let mensaje: string = "EL CLIENTE " + cliente.getNombre() + " " + cliente.getApellido() + " con DNI:" + cliente.getDni() + " NO EXISTE EN EL HISTORIAL DE CLIENTES.";
                throw new Error(mensaje);
            } else {
                return this.buscarArticulo(cliente.getCompras(), articulo);
            }
        } catch (error) {
            console.log(error);
        }
        return false;
    }

    private buscarCliente(cliente: Cliente): boolean {
        for (let i = 0; i < this.clientes.length; i++) {
            if(this.clientes[i].getDni() == cliente.getDni()) {
                return true
            }         
        }
        return false;
    }

    private buscarArticulo(comprasCliente: LibroRevista[], articuloBuscado: LibroRevista): boolean {
        for (let i = 0; i < comprasCliente.length; i++) {
            let autorEncontrado: boolean = comprasCliente[i].getAutor() == articuloBuscado.getAutor();
            let nombreEncontrado: boolean = comprasCliente[i].getNombre() == articuloBuscado.getNombre();
            if (autorEncontrado && nombreEncontrado) {
                return true
            }
        }
        return false;
    }

    public esGustoDelCliente(libro: Libro, autoresFavCliente: string[], generosFavCliente?: string[]): boolean {
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

    public getLibros(): Libro[] {
        return this.libros;
    }

    public setLibros(libros: Libro[]): void {
        this.libros = libros;
    }

    public getRevistas(): Revista[] {
        return this.revistas;
    }

    public setRevistas(revistas: Revista[]): void {
        this.revistas = revistas;
    }

    public getClientes(): Cliente[] {
        return this.clientes;
    }

    private setClientes(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

}