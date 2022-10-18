"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
const Libreria_1 = require("./Libreria");
const Libro_1 = require("./Libro");
const Revista_1 = require("./Revista");
let lib1 = new Libro_1.Libro("nombre1", "Juan", 799, 213, "Policial", "resumen...");
let lib2 = new Libro_1.Libro("nombre2", "Pedro", 560, 200, "Drama", "resumen...");
let lib3 = new Libro_1.Libro("nombre3", "Marta", 880, 120, "Romantica", "resumen...");
let lib4 = new Libro_1.Libro("nombre4", "Gonzalo", 643, 320, "Poema", "resumen...");
let lib5 = new Libro_1.Libro("nombre5", "Enzo", 740, 100, "Crimen", "resumen...");
let lib6 = new Libro_1.Libro("nombre6", "María", 912, 100, "Policial", "resumen...");
let lib7 = new Libro_1.Libro("nombre7", "Florencia", 912, 220, "Terror", "resumen...");
let lib8 = new Libro_1.Libro("nombre8", "Paula", 912, 220, "Comedia", "resumen...");
let rev1 = new Revista_1.Revista("Jardineria", "Autor1", 313, 21, 2017);
let rev2 = new Revista_1.Revista("Deportes", "Autor2", 123, 22, 2017);
let rev3 = new Revista_1.Revista("Autos", "Autor2", 313, 1, 2017);
let rev4 = new Revista_1.Revista("Videojuegos", "Autor3", 313, 31, 2018);
let cliente1 = new Cliente_1.Cliente("Ezequiel", "Villalba", 40123912, "Av.Alem 123", ["Juan", "Enzo", "Autor2", "Autor3"], ["Drama", "Crimen", "Policial"], 0.15);
let cliente2 = new Cliente_1.Cliente("Camila", "Vazquez", 31912100, "Olavarria 123", ["Marta", "Gonzalo", "Autor1"], ["Romantica", "Poema"], 0.15);
let cliente3 = new Cliente_1.Cliente("Antonela", "Farias", 42128112, "Rosas 123", ["Florencia", "Enzo", "Juan", "Autor2", "Autor3"], ["Terror", "Crimen", "Policial"], 0.3);
let cliente4 = new Cliente_1.Cliente("Leonardo", "Lopez", 42128112, "Belgrano 123", ["Paula", "Marta", "Gonzalo", "Pedro", "Autor1"], ["Drama", "Comedia", "Romantica"], 0.1);
let cliente5 = new Cliente_1.Cliente("Joaquin", "Echeverri", 44012312, "Santa Cruz 123", ["Autor2", "Autor3", "Paula"], ["Comedia", "Terror"], 0.30);
let libros = [lib1, lib2, lib3, lib4, lib5, lib6, lib7, lib8];
let revistas = [rev1, rev2, rev3, rev4];
let clientes = [cliente1, cliente4, cliente5];
const libreria = new Libreria_1.Libreria(libros, revistas);
console.log("Lista de clientes");
console.log(libreria.getClientes());
libreria.comprarArticulos(cliente1, [lib1, lib5]);
libreria.comprarArticulos(cliente2, [lib3, lib4]);
libreria.comprarArticulos(cliente3, [lib1, lib6, lib7, lib5]);
libreria.comprarArticulos(cliente4, [lib8, rev1]);
libreria.comprarArticulos(cliente5, [rev2, rev4, lib8, lib1]);
console.log("Lista de clientes");
console.log(libreria.getClientes());
console.log("calcular precio");
console.log(libreria.calcularPrecio(lib1, cliente1));
console.log();
console.log(libreria.esUnArticuloYaAdquirido(cliente2, lib1)); //no
libreria.comprarArticulos(cliente2, [lib1]);
console.log(libreria.esUnArticuloYaAdquirido(cliente2, lib1)); //si
console.log();
console.log(libreria.esUnArticuloYaAdquirido(cliente5, rev1)); //no
libreria.comprarArticulos(cliente5, [rev4]);
console.log(libreria.esUnArticuloYaAdquirido(cliente5, rev4)); //si
let cliente6 = new Cliente_1.Cliente("Mauro", "Martinez", 40000102, "Rivadavia 123", ["Autor2", "Autor3", "Paula"], ["Comedia", "Terror"], 0.30);
console.log(libreria.esUnArticuloYaAdquirido(cliente6, lib7)); //no
libreria.comprarArticulos(cliente6, []);
console.log("gustos del cliente normal");
console.log(libreria.esGustoDelCliente(lib3, cliente1.getAutoresFav())); //no
console.log("gustos del cliente exigente");
console.log(libreria.esGustoDelCliente(lib6, cliente1.getAutoresFav(), cliente1.getGenerosFav())); //no autor, si genero -> no
console.log(libreria.esGustoDelCliente(lib5, cliente1.getAutoresFav(), cliente1.getGenerosFav())); //si autor, si genero -> si
