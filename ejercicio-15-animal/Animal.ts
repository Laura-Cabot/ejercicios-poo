// Animal.ts
export class Animal {
    protected tipoAnimal: string;
    protected lugar: string;
    protected cerebro: string;
    protected ojos: number;
    protected pelos: boolean;
    protected patas: number;
  
    constructor(tipoAnimal: string, lugar: string, cerebro: string, ojos: number, pelos: boolean, patas: number) {
      this.tipoAnimal = tipoAnimal;
      this.lugar = lugar;
      this.cerebro = cerebro;
      this.ojos = ojos;
      this.pelos = pelos;
      this.patas = patas;
    }
  
    protected latirCorazon(): string {
      return "El corazón late normalmente";
    }
  
    public getCerebro(): string {
      return this.cerebro;
    }
  
    public getOjos(): number {
      return this.ojos;
    }
  
    public movimiento(): string {
      return "Se está moviendo...";
    }
  }