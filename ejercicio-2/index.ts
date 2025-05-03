// Plantear una clase Persona, pensar qué atributos y métodos puede tener e implementarla en TypeScript.

export class Persona {
    nombre: string;
    edad: number;
    ciudad: string;
    sexo: string;
    puntaje: number;

    constructor(nombre: string, edad: number, ciudad: string, sexo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
        this.sexo = sexo;
        this.puntaje = 0; 
    }

    saludar(): void {
        console.log(`¡Hola! Mi nombre es ${this.nombre}.`);
    }

    mostrarDetalles(): void {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Ciudad: ${this.ciudad}, Sexo: ${this.sexo}`);
    }

    esMayorDeEdad(): boolean {
        return this.edad >= 18;
    }
}

// Crear instancias de Persona
const persona1 = new Persona("Juan", 30, "Madrid", "Masculino");
const persona2 = new Persona("Maria", 25, "Barcelona", "Femenino");
const persona3 = new Persona("Pedro", 40, "Valencia", "Masculino");
const persona4 = new Persona("Ana", 28, "Sevilla", "Femenino");
const persona5 = new Persona("Luis", 35, "Bilbao", "Masculino");
const persona6 = new Persona("Laura", 22, "Malaga", "Femenino");

// Usar los métodos
persona1.saludar();
persona1.mostrarDetalles();
if (persona1.esMayorDeEdad()) {
    console.log(`${persona1.nombre} es mayor de edad.\n`);
} else {
    console.log(`${persona1.nombre} no es mayor de edad.\n`);
}

persona2.saludar();
persona2.mostrarDetalles();
if (persona2.esMayorDeEdad()) {
    console.log(`${persona2.nombre} es mayor de edad.\n`);
} else {
    console.log(`${persona2.nombre} no es mayor de edad.\n`);
}

persona3.saludar();
persona3.mostrarDetalles();
if (persona3.esMayorDeEdad()) {
    console.log(`${persona3.nombre} es mayor de edad.\n`);
} else {
    console.log(`${persona3.nombre} no es mayor de edad.\n`);
}

persona4.saludar();
persona4.mostrarDetalles();
if (persona4.esMayorDeEdad()) {
    console.log(`${persona4.nombre} es mayor de edad.\n`);
} else {
    console.log(`${persona4.nombre} no es mayor de edad.\n`);
}

persona5.saludar();
persona5.mostrarDetalles();
if (persona5.esMayorDeEdad()) {
    console.log(`${persona5.nombre} es mayor de edad.\n`);
} else {
    console.log(`${persona5.nombre} no es mayor de edad.\n`);
}

persona6.saludar();
persona6.mostrarDetalles();
if (persona6.esMayorDeEdad()) {
    console.log(`${persona6.nombre} es mayor de edad.\n`);
} else {
    console.log(`${persona6.nombre} no es mayor de edad.\n`);
}
