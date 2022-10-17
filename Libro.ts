import { LibroRevista } from "./LibroRevista";

export class Libro extends LibroRevista {
    private cantPaginas: number;
    private genero: string;
    private resumen: string;

    public constructor(nombre: string, autor: string, precio: number, cantPaginas: number, genero: string, resumen: string) {
        super(nombre, autor, precio);
        this. cantPaginas = cantPaginas;
        this.genero = genero;
        this.resumen = resumen;
    }
  
    public getCantPaginas(): number {
        return this.cantPaginas;
    }

    public setCantPaginas(cantPaginas: number): void {
        this.cantPaginas = cantPaginas;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public getResumen(): string {
        return this.resumen;
    }

    public setResumen(resumen: string): void {
        this.resumen = resumen;
    }

}