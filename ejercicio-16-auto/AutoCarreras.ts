import { Auto } from "./Auto";

export class AutoCarreras extends Auto {
  private escuderia: string;

  constructor(marca: string, modelo: string, escuderia: string) {
    super(marca, modelo);
    this.escuderia = escuderia;
  }

  // Redefinimos acelerar para que suba más rápido
  public acelerar(): void {
    this.velocidad += 30;
    console.log(` ${this.marca} ${this.modelo} de ${this.escuderia} acelera a ${this.velocidad} km/h rápidamente!`);
  }

  public mostrarInfo(): void {
    console.log(`Auto de carreras: ${this.marca} ${this.modelo} | Escudería: ${this.escuderia} | Velocidad: ${this.velocidad} km/h`);
  }
}