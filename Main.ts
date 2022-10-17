import { Cliente } from "./Cliente";
import { Libreria } from "./Libreria";
import { Libro } from "./Libro";
import { Revista } from "./Revista";

let lib1: Libro = new Libro("nombre1", "Juan", 799, 213, "Policial", "resumen...");
let lib2: Libro = new Libro("nombre2", "Pedro", 560, 200, "Drama", "resumen...");
let lib3: Libro = new Libro("nombre3", "Marta", 880, 120, "Romantica", "resumen...");
let lib4: Libro = new Libro("nombre4", "Gonzalo", 643, 320, "Poema", "resumen...");
let lib5: Libro = new Libro("nombre5", "Enzo", 740, 100, "Crimen", "resumen...");
let lib6: Libro = new Libro("nombre6", "María", 912, 100, "Policial", "resumen...");
let lib7: Libro = new Libro("nombre7", "Florencia", 912, 220, "Terror", "resumen...");
let lib8: Libro = new Libro("nombre8", "Paula", 912, 220, "Comedia", "resumen...");

let rev1: Revista = new Revista("Jardineria","Autor1",313, 21, 2017);
let rev2: Revista = new Revista("Deportes","Autor2",123, 22, 2017);
let rev3: Revista = new Revista("Autos","Autor2",313, 1, 2017);
let rev4: Revista = new Revista("Videojuegos","Autor3",313, 31, 2018);


let cliente1: Cliente = new Cliente("Ezequiel", "Villalba", 40123912, "Av.Alem 123", ["Juan", "Enzo", "Autor2", "Autor3"], ["Drama", "Crimen", "Policial"], [lib1, lib5], 0.15);
let cliente2: Cliente = new Cliente("Camila", "Vazquez", 31912100, "Olavarria 123", ["Marta", "Gonzalo","Autor1"], ["Romantica", "Poema"], [lib3, lib4], 0.15);
let cliente3: Cliente = new Cliente("Antonela", "Farias", 42128112, "Rosas 123", ["Florencia", "Enzo", "Juan","Autor2", "Autor3"], ["Terror", "Crimen", "Policial"], [lib1, lib6, lib7, lib5], 0.3);
let cliente4: Cliente = new Cliente("Leonardo", "Lopez", 42128112, "Belgrano 123", ["Paula", "Marta", "Gonzalo", "Pedro", "Autor1"], ["Drama", "Comedia", "Romantica"], [lib8, rev1], 0.1);
let cliente5: Cliente = new Cliente("Joaquin", "Echeverri", 44012312, "Santa Cruz 123", ["Autor2", "Autor3", "Paula"], ["Comedia", "Terror"], [rev2, rev4, lib8, lib1], 0.30 )

let libros: Libro[] =  [lib1, lib2, lib3, lib4, lib5, lib6, lib7, lib8];
let revistas: Revista[] = [rev1, rev2, rev3, rev4];
let clientes: Cliente[] = [cliente1, cliente4, cliente5];

const libreria: Libreria = new Libreria(libros, revistas, clientes);

console.log(libreria.calcularPrecio(lib1, cliente1));
console.log(libreria.esUnArticuloYaAdquirido(cliente2, lib1)); //no
console.log(libreria.esUnArticuloYaAdquirido(cliente1, lib1)); //si
console.log(libreria.esUnArticuloYaAdquirido(cliente5, rev4)); //si
console.log(libreria.esUnArticuloYaAdquirido(cliente5, rev1)); //no

console.log(libreria.esGustoDelCliente(lib3,cliente1.getAutoresFav())); //no
console.log(libreria.esGustoDelCliente(lib6,cliente1.getAutoresFav(), cliente1.getGenerosFav())); //no autor, si genero -> no
console.log(libreria.esGustoDelCliente(lib5,cliente1.getAutoresFav(), cliente1.getGenerosFav())); //si autor, si genero -> si
