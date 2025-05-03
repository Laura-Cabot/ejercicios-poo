//Usando la clase del ejercicio 5,simular el funcionamiento de un sistema para gestionar una coleccion de libros, permitiendo realizar las siguientes operaciones: alta baja modificacion y consulta.
//La clase Gestor de libros deber permitir realziar las siguientes operaciones:  //Insertar un libro: agregar un libro a la coleccion.
//Consultar un libro: buscar un libro  y mostrar sus datos.
//Modificar un libro: modificar los datos de un libro existente.
//Eliminar un libro: realizar una baja logica, es decir, el libro no se borra definitivamente, sino que se marca como eliminado.
//Antes de realizar cada operacion, se debe verificar que el libro existe en la coleccion. El estado de cada libro debe formar parte de la clase Libro.

import {Libro} from "../ejercicio-5/index";

import * as readlineSync from "readline-sync";


// Clase GestorDeLibros definida dentro del mismo archivo
class GestorDeLibros {
    private coleccion: Libro[];

    constructor() {
        this.coleccion = [];
    }

    insertar(libro: Libro): void {
        const existe = this.buscarLibro(libro.getISBN());
        if (existe) {
            console.log("❌ El libro ya existe.");
        } else {
            this.coleccion.push(libro);
            console.log("✅ Libro agregado correctamente.");
        }
    }

    consultar(isbn: string): void {
        const libro = this.buscarLibro(isbn);
        if (libro) {
            libro.mostrarInformacion();
        } else {
            console.log("❌ Libro no encontrado.");
        }
    }

    modificar(isbn: string, nuevoTitulo: string, nuevoAutor: string): void {
        const libro = this.buscarLibro(isbn);
        if (libro && libro.estaActivo()) {
            libro.modificarDatos(nuevoTitulo, nuevoAutor);
            console.log("✏️ Libro modificado.");
        } else {
            console.log("❌ No se puede modificar. Libro no encontrado o eliminado.");
        }
    }

    eliminar(isbn: string): void {
        const libro = this.buscarLibro(isbn);
        if (libro && libro.estaActivo()) {
            libro.marcarEliminado();
            console.log("🗑️ Libro marcado como eliminado.");
        } else {
            console.log("❌ No se puede eliminar. Libro no encontrado o ya eliminado.");
        }
    }

    mostrarTodos(): void {
        if (this.coleccion.length === 0) {
            console.log("📚 No hay libros en la colección.");
        } else {
            console.log("\n📖 Lista de libros en la colección:");
            this.coleccion.forEach((libro, index) => {
                console.log(`\nLibro ${index + 1}:`);
                libro.mostrarInformacion();
            });
        }
    }

    private buscarLibro(isbn: string): Libro | undefined {
        return this.coleccion.find(libro => libro.getISBN() === isbn);
    }
}

// Instancia del gestor
const gestor = new GestorDeLibros();

function mostrarMenu(): void {
    console.log("\n--- MENÚ DE GESTIÓN DE LIBROS ---");
    console.log("1. Agregar libro");
    console.log("2. Consultar libro");
    console.log("3. Modificar libro");
    console.log("4. Eliminar libro (baja lógica)");
    console.log("5. Mostrar todos los libros");
    console.log("6. Salir");
}

let opcion: number;
do {
    mostrarMenu();
    opcion = parseInt(readlineSync.question("Ingrese una opcion: "));

    switch (opcion) {
        case 1:
            const nuevoLibro = new Libro();
            nuevoLibro.cargarLibro();
            gestor.insertar(nuevoLibro);
            break;

        case 2:
            const isbnConsulta = readlineSync.question("Ingrese el ISBN del libro a consultar: ");
            gestor.consultar(isbnConsulta);
            break;

        case 3:
            const isbnModificar = readlineSync.question("Ingrese el ISBN del libro a modificar: ");
            const nuevoTitulo = readlineSync.question("Nuevo título: ");
            const nuevoAutor = readlineSync.question("Nuevo autor: ");
            gestor.modificar(isbnModificar, nuevoTitulo, nuevoAutor);
            break;

        case 4:
            const isbnEliminar = readlineSync.question("Ingrese el ISBN del libro a eliminar: ");
            gestor.eliminar(isbnEliminar);
            break;

        case 5:
            gestor.mostrarTodos();
            break;

        case 6:
            console.log("👋 ¡Saliendo del sistema!");
            break;

        default:
            console.log("❌ Opción inválida.");
            break;
    }
} while (opcion !== 6);

