class Televisor {
    private encendido: boolean;
    private canal: number;
    private volumen: number;
    private marca: string;

constructor (encendido: boolean, canal: number, volumen: number, marca: string) {
    this.encendido = false;    
    this.canal = 1;
    this.volumen = 10;  
    this.marca = marca; 
 }
    public encender(): void {
        this.encendido = true;
        console.log("El televisor está encendido.");
    } 
    public apagar(): void { 
        this.encendido = false;
        console.log("El televisor está apagado.");
    }
    public cambiarCanal(canal: number): void {
        if (this.encendido) {
            this.canal = canal;
            console.log(`Canal cambiado a ${this.canal}.`);
        } else {
            console.log("El televisor está apagado. No se puede cambiar el canal.");
        }
    }  
    public subirVolumen(): void {
        if (this.encendido) {
            this.volumen++;
            console.log(`Volumen aumentado a ${this.volumen}.`);
        } else {
            console.log("El televisor está apagado. No se puede subir el volumen.");
        }
    }
    public bajarVolumen(): void {
        if (this.encendido) {
            this.volumen--;
            console.log(`Volumen disminuido a ${this.volumen}.`);
        } else {
            console.log("El televisor está apagado. No se puede bajar el volumen.");
        }
    }
    public mutear(): void {
        if (this.encendido) {   
            this.volumen = 0;
            console.log("El televisor está en modo mudo.");
        }
        else  {
            console.log("El televisor está apagado. No se puede mutear.");  
        }
    }
    public desmutear(): void {
        if (this.encendido) {
            this.volumen = 10; // Restablecer volumen a un valor predeterminado
            console.log("El televisor ha sido desmuteado.");
        } else {
            console.log("El televisor está apagado. No se puede desmutear.");
        }
    }
    public mostrarDetalles(): void {
        console.log(`Marca: ${this.marca}, Canal: ${this.canal}, Volumen: ${this.volumen}, Encendido: ${this.encendido}`);
}
}
const televisor1 = new Televisor(false, 1, 10, "Samsung");
const televisor2 = new Televisor(false, 1, 10, "LG");           
const televisor3 = new Televisor(false, 1, 10, "Sony");
const televisor4 = new Televisor(false, 1, 10, "Panasonic");