//Usando la clase dado del ejercicio 6, simular el comportamiento de un cubilete de 5 dados. Implementar los metodos necesarios para qeu se puedan lanzar todos los dados o algun dado en particular.

import { Dado } from "../ejercicio-7/index";

// Clase Cubilete que contiene 5 dados
export class Cubilete {
    private dados: Dado[]; // Array que guarda los 5 dados

    constructor() {
        // Al crear el cubilete, se inicializan 5 instancias de Dado
        this.dados = [];
        for (let i = 0; i < 5; i++) {
            this.dados.push(new Dado());
        }
    }

    // Método para lanzar todos los dados
    lanzarTodos(): void {
        this.dados.forEach(dado => dado.lanzar());
    }

    // Método para lanzar un dado específico (por índice de 0 a 4)
    lanzarDadoIndividual(indice: number): void {
        if (indice >= 0 && indice < this.dados.length) {
            this.dados[indice].lanzar();
        } else {
            console.log("Índice fuera de rango. Debe estar entre 0 y 4.");
        }
    }

    // Método para obtener los valores actuales de todos los dados
    obtenerValores(): number[] {
        return this.dados.map(dado => dado.obtenerValor());
    }
}

// ======= EJEMPLO DE USO ======= //
const miCubilete = new Cubilete();

console.log("Valores iniciales:");
console.log(miCubilete.obtenerValores());

console.log("Lanzamos todos los dados:");
miCubilete.lanzarTodos();
console.log(miCubilete.obtenerValores());

console.log("Lanzamos solo el dado en la posición 2:");
miCubilete.lanzarDadoIndividual(2);
console.log(miCubilete.obtenerValores());


