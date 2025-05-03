//Usando la clase Persona y la clase Cubilete, implementar un juego de generala. Esta Generala solo va a considerar puntos por obtener las sigueintes marcas:
//Escalera 20p, full 30p, poker 40p y generala 50p.
//En cada juego, cada jugador tiene 3 tiros y gana el jugador quea tenga mas puntos. En caso de que los tres tiros ningun jugador haya hecho una marca se declara un empate. Implementar un metodo de desempate a su eleccion. 
//En caso de ser necesario, modificar la clase persona para agregarle mas atributos.

import { Persona } from "../ejercicio2/index";  
import { Dado } from "../ejercicio-7/index";
import { Cubilete } from "../ejercicio-12/index";

// Agregamos el atributo "puntaje" a Persona si no lo tenías aún
// class Persona (recordá tenerlo con puntaje: number)

// Función que evalúa la jugada según las reglas
function evaluarJugada(valores: number[]): number {
    const cuenta: { [key: number]: number } = {};
    for (let v of valores) {
        cuenta[v] = (cuenta[v] || 0) + 1;
    }

    const cantidades = Object.values(cuenta).sort((a, b) => b - a).join(',');

    valores.sort((a, b) => a - b);
    const escalera1 = [1, 2, 3, 4, 5].toString();
    const escalera2 = [2, 3, 4, 5, 6].toString();

    if (valores.toString() === escalera1 || valores.toString() === escalera2) return 20;
    if (cantidades === "3,2") return 30;
    if (cantidades === "4,1") return 40;
    if (cantidades === "5") return 50;

    return 0;
}

// Función principal que ejecuta el juego
function jugarGenerala(): void {
    const cubilete = new Cubilete();

    const jugador1 = new Persona("Laura", 30, "Mar del Plata", "F");
    const jugador2 = new Persona("Carlos", 28, "Tandil", "M");

    [jugador1, jugador2].forEach(jugador => {
        for (let i = 0; i < 3; i++) {
            cubilete.lanzarTodos();
            const valores = cubilete.obtenerValores();
            console.log(`${jugador.nombre} tirada ${i + 1}: [${valores}]`);

            const puntos = evaluarJugada(valores);
            if (puntos > 0) {
                jugador.puntaje = puntos;
                console.log(`🎉 ${jugador.nombre} hizo una jugada y sumó ${puntos} puntos.`);
                break;
            }
        }
        if (jugador.puntaje === 0) {
            console.log(`😞 ${jugador.nombre} no logró ninguna jugada.`);
        }
    });

    if (jugador1.puntaje > jugador2.puntaje) {
        console.log(`🏆 Gana ${jugador1.nombre} con ${jugador1.puntaje} puntos.`);
    } else if (jugador2.puntaje > jugador1.puntaje) {
        console.log(`🏆 Gana ${jugador2.nombre} con ${jugador2.puntaje} puntos.`);
    } else if (jugador1.puntaje === 0 && jugador2.puntaje === 0) {
        console.log("😐 Empate: ningún jugador logró una jugada.");
    } else {
        console.log("⚔️ Empate en puntos. Se lanza un dado para desempatar...");

        const dado = new Dado();
        const desempate1 = dado.lanzar();
        const desempate2 = dado.lanzar();

        console.log(`${jugador1.nombre} sacó ${desempate1}, ${jugador2.nombre} sacó ${desempate2}`);

        if (desempate1 > desempate2) {
            console.log(`🎯 Desempate ganado por ${jugador1.nombre}`);
        } else if (desempate2 > desempate1) {
            console.log(`🎯 Desempate ganado por ${jugador2.nombre}`);
        } else {
            console.log("🔁 Empate total. ¡Impresionante!");
        }
    }
}

// Ejecutar el juego
jugarGenerala();