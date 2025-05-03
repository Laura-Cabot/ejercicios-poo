//Implementar una clase Decodificador y realcionarla con la clase Televisor del ejercicio 2.

import { Televisor } from '../ejercicio-3/index';

class Decodificador {   
    private marca: string;
    private modelo: string;
    private televisor: Televisor | null; // Relación con la clase Televisor

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.televisor = null; // Inicialmente no hay televisor asociado
    }

    public conectarTelevisor(televisor: Televisor): void {
        this.televisor = televisor;
        console.log(`Decodificador ${this.marca} ${this.modelo} conectado al televisor.`);
    }
}
const tv = new Televisor(false, 1, 10, "Samsung");
const deco = new Decodificador("Flow", "HD");

deco.conectarTelevisor(tv);
tv.encender();
tv.cambiarCanal(5);
tv.subirVolumen();
tv.mutear();
tv.desmutear();
tv.bajarVolumen();
tv.apagar();

