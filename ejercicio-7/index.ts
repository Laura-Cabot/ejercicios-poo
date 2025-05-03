//Implementar una clase que simule el comportamiento de una dado. La clase debe tener un atributo que almacena el valor actual del dado (un numero entre 1 y 6). A su vez, la clase cuenta con varios metodos:
// Metodo constructor: inicializa el valor del dado entre 1 y 6.
// Metodo que simula el lanzamiento del dado: genera un numero aleatorio entre 1 y 6 y lo asigna al atributo del dado.
// Metodo que devuelve el valor actual del dado.

export class Dado {
    valorActual: number;

    constructor() {
        this.valorActual = this.generarNumeroAleatorio();
    }

    // Método privado para generar un número entre 1 y 6
    private generarNumeroAleatorio(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Método que simula lanzar el dado
    lanzar(): void {
        this.valorActual = this.generarNumeroAleatorio();
    }

    // Método que devuelve el valor actual del dado
    obtenerValor(): number {
        return this.valorActual;
    }
}

// --- Probar la clase ---

const miDado = new Dado();

console.log("Valor inicial del dado:", miDado.obtenerValor());

miDado.lanzar();
console.log("Valor después de lanzar el dado:", miDado.obtenerValor());

miDado.lanzar();
console.log("Nuevo valor después de lanzar nuevamente:", miDado.obtenerValor());
