import { LibroRevista } from './LibroRevista';

export class Revista extends LibroRevista {
    private numero: number;
    private anio: number;

    public constructor(nombre: string, autor: string, precio: number, numero: number, anio: number) {
        super(nombre, autor, precio);
        this.numero = numero;
        this.anio = anio;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getAnio(): number {
        return this.anio;
    }

    public setAnio(anio: number): void {
        this.anio = anio;
    }

}