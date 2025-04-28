class Rectangulo {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    public area(): number {
        return this.base * this.altura;
    }

    public perimetro(): number {
        return 2 * (this.base + this.altura);
    }
}
const miRectangulo = new Rectangulo(5, 10);

console.log("Área del rectángulo:", miRectangulo.area());
console.log("Perímetro del rectángulo:", miRectangulo.perimetro());