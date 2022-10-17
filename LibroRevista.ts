export abstract class LibroRevista {
    private nombre: string;
    private autor: string;
    private precio: number;

    public constructor(nombre: string, autor: string, precio: number) {
        this.nombre = nombre;
        this.autor = autor;
        this.precio =precio;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }
 
}