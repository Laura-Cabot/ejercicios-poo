import { Perro } from "./Perro";
import { Pez } from "./Pez";

const miPerro = new Perro("Toby", "Labrador");
const miPez = new Pez("Naranja", 5);

console.log("--- Información del Perro ---");
miPerro.mostrarInfo();

console.log("\n--- Información del Pez ---");
miPez.mostrarInfo();
