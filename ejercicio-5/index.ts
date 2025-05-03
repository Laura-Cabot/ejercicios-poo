import * as readlineSync from 'readline-sync';

 export class Libro {
    private isbn: string;
    private titulo: string;
    private autor: string;
    private numeroPaginas: number;
    private estado: boolean; // true = activo, false = eliminado

    constructor(
      isbn: string = "",
      titulo: string = "",
      autor: string = "",
      numeroPaginas: number = 0
  ) {
      this.isbn = isbn;
      this.titulo = titulo;
      this.autor = autor;
      this.numeroPaginas = numeroPaginas;
      this.estado = true;
  }
  
    cargarLibro(): void {
        this.isbn = readlineSync.question("Ingrese el ISBN del libro: ");
        this.titulo = readlineSync.question("Ingrese el título del libro: ");
        this.autor = readlineSync.question("Ingrese el autor del libro: ");
        this.numeroPaginas = parseInt(readlineSync.question("Ingrese el número de páginas: "));
      }
      mostrarInformacion(): void {  
        console.log(`ISBN: ${this.isbn}, Título: ${this.titulo}, Autor: ${this.autor}, Número de páginas: ${this.numeroPaginas}`);
      }
      getISBN(): string {
        return this.isbn;
    }
    
    estaActivo(): boolean {
        return this.estado;
    }
    
    marcarEliminado(): void {
        this.estado = false;
    }
    
    modificarDatos(nuevoTitulo: string, nuevoAutor: string): void {
        this.titulo = nuevoTitulo;
        this.autor = nuevoAutor;
    }
    
}

//const libro1 = new Libro("", "", "", 0);
//const libro2 = new Libro("", "", "", 0);        
//const libro3 = new Libro("", "", "", 0);



//libro1.cargarLibro();
//libro2.cargarLibro();
//libro3.cargarLibro();

// --- Mostrar datos ---

console.log("\nInformación del primer libro:");
//libro1.mostrarInformacion();

console.log("\nInformación del segundo libro:");
//libro2.mostrarInformacion();

console.log("\nInformación del tercer libro:");
//libro3.mostrarInformacion();