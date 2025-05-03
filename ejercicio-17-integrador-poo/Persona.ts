export class Persona {
    protected nombre: string;
    protected dni: string;
    protected email: string;
  
    constructor(nombre: string, dni: string, email: string) {
      this.nombre = nombre;
      this.dni = dni;
      this.email = email;
    }
  
    public saludar(): void {
      console.log(`Hola, soy ${this.nombre}`);
    }
  }
  