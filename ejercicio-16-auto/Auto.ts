export class Auto {
    protected marca: string;
    protected modelo: string;
    protected velocidad: number;
  
    constructor(marca: string, modelo: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.velocidad = 0;
    }
  
    public acelerar(): void {
      this.velocidad += 10;
      console.log(`${this.marca} ${this.modelo} acelera a ${this.velocidad} km/h.`);
    }
  
    public mostrarInfo(): void {
      console.log(`Auto: ${this.marca} ${this.modelo} | Velocidad: ${this.velocidad} km/h`);
    }
  }