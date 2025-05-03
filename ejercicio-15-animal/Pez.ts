import { Animal } from "./Animal";

export class Pez extends Animal {
  private escamas: boolean;
  private color: string;
  private velocidadNado: number;

  constructor(color: string, velocidadNado: number) {
    super("Pez", "Agua", "Sí", 2, false, 0);
    this.escamas = true;
    this.color = color;
    this.velocidadNado = velocidadNado;
  }

  public getVelocidad(): number {
    return this.velocidadNado;
  }

  public getColor(): string {
    return this.color;
  }

  public mostrarInfo(): void {
    console.log(`Color: ${this.color}, Velocidad de nado: ${this.velocidadNado} km/h`);
    console.log(this.movimiento());
    console.log(this.latirCorazon());
  }
}