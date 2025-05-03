import { Animal } from "./Animal";

export class Perro extends Animal {
  private nombre: string;
  private raza: string;

  constructor(nombre: string, raza: string) {
    super("Mamífero", "Doméstico", "Sí", 2, true, 4);
    this.nombre = nombre;
    this.raza = raza;
  }

  public ladrar(): string {
    return "¡Guau guau!";
  }

  public mostrarInfo(): void {
    console.log(`Nombre: ${this.nombre}, Raza: ${this.raza}, Cerebro: ${this.getCerebro()}, Ojos: ${this.getOjos()}`);
    console.log(this.movimiento());
    console.log(this.latirCorazon());
  }
}