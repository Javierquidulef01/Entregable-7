import { Cliente } from "./Cliente";
import { Libro } from "./Libro";
import { LibroRevista } from "./LibroRevista";
import { Revista } from "./Revista";

export class Libreria {
    private libros: Libro[];
    private revistas: Revista[];
    private clientes: Cliente[];

    public constructor(libros: Libro[], revistas: Revista[], clientes: Cliente[]) {
        this.libros = libros;
        this.revistas = revistas;
        this.clientes = clientes;
    }

    public calcularPrecio(articulo: LibroRevista, cliente: Cliente): number {
        let descuento: number = cliente.getDescuento();
        if (descuento == 0.1 || descuento == 0.15 || descuento == 0.3) {
            return articulo.getPrecio() * (1 - cliente.getDescuento());
        }
        return articulo.getPrecio();
    }

    public esUnArticuloYaAdquirido(cliente: Cliente, articulo: LibroRevista): boolean {
        if (this.buscarCliente(cliente)) {
            return this.buscarArticulo(cliente.getCompras(), articulo);
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

    public setClientes(clientes: Cliente[]): void {
        this.clientes = clientes;
    }

}