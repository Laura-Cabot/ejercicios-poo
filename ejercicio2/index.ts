class Persona {
    nombre: string;
    edad: number;
    ciudad: string;
    sexo: string;
    

    constructor(nombre: string, edad: number, ciudad: string, sexo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
        this.sexo = sexo;
    }

    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Ciudad: ${this.ciudad}, Sexo: ${this.sexo}`);
    }
}
const persona1 = new Persona("Juan", 30, "Madrid", "Masculino");
const persona2 = new Persona("Maria", 25, "Barcelona", "Femenino"); 
const persona3 = new Persona("Pedro", 40, "Valencia", "Masculino");
const persona4 = new Persona("Ana", 28, "Sevilla", "Femenino");     
const persona5 = new Persona("Luis", 35, "Bilbao", "Masculino");
const persona6 = new Persona("Laura", 22, "Malaga", "Femenino");