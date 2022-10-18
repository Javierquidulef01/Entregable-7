import { LibroRevista } from "./LibroRevista";

export class Cliente {
    private nombre: string;
    private apellido: string;
    private dni: number;
    private direccion: string;
    private autoresFav: string[];
    private generosFav: string[];
    private compras: LibroRevista[];
    private descuento: number;


    public constructor(nombre: string, apellido: string, dni: number, direccion: string, 
        autoresFav: string[], generosFav: string[], descuento: number, compras?: LibroRevista[]) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.direccion = direccion;
        this.autoresFav = autoresFav;
        this.generosFav = generosFav;
        if (descuento > 0) {
            this.descuento = descuento;
        } else {
            this.descuento = 0;
        }
        if (compras == undefined) {
            this.compras = []
        } else {
            this.compras = compras;
        }
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getDni(): number {
        return this.dni;
    }

    public setDni(dni: number): void {
        this.dni = dni;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getAutoresFav(): string[] {
        return this.autoresFav;
    }

    public setAutoresFav(autoresFav: string[]): void {
        this.autoresFav = autoresFav;
    }

    public getGenerosFav(): string[] {
        return this.generosFav;
    }

    public setGenerosFav(generosFav: string[]): void {
        this.generosFav = generosFav;
    }

    public getCompras(): LibroRevista[] {
        return this.compras;
    }

    public setCompras(compras: LibroRevista[]): void {
        compras.forEach(articulo => {
            this.compras.push(articulo);
        });
    }

    public getDescuento(): number {
        return this.descuento;
    }

    public setDescuento(descuento: number): void {
        if (descuento < 0) {
            this.descuento = 0;
        }
        this.descuento = descuento;
    }

}