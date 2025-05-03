import { Auto } from "./Auto";
import { AutoCarreras } from "./AutoCarreras";

const autoNormal = new Auto("Toyota", "Corolla");
const autoCarrera = new AutoCarreras("Ferrari", "F1-75", "Scuderia Ferrari");

console.log("--- AUTO NORMAL ---");
autoNormal.acelerar();
autoNormal.mostrarInfo();

console.log("\n--- AUTO DE CARRERA ---");
autoCarrera.acelerar();
autoCarrera.mostrarInfo();