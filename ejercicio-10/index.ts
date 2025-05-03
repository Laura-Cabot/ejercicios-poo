//Usando la clase Automotor del ejercicio 1, implementar la clase Registro Automotor, con metodos para:
//Agregar un auto.
//Buscar un auto por patente.
//Eliminar o actualizar autos existentes.

import { Auto } from '../ejercicio-1/index';

 class RegistroAutomotor {
    private autos: Auto[] = [];


       // Agregar un auto al registro
        public agregarAuto(auto: Auto): void {
            this.autos.push(auto);
            console.log(`Auto agregado con patente: ${auto.patente}`);
        }
    
        // Buscar un auto por su patente
        public buscarAuto(patente: string): Auto | null {
            const auto = this.autos.find(a => a.patente === patente);
            if (auto) {
                return auto;
            } else {
                console.log(`Auto con patente ${patente} no encontrado.`);
                return null;
            }
        }
    
        // Eliminar un auto por su patente
        public eliminarAuto(patente: string): void {
            const index = this.autos.findIndex(a => a.patente === patente);
            if (index !== -1) {
                this.autos.splice(index, 1);
                console.log(`Auto con patente ${patente} eliminado.`);
            } else {
                console.log(`No se encontró un auto con esa patente.`);
            }
        }
    
        // Actualizar auto (reemplazarlo por uno nuevo con misma patente)
        public actualizarAuto(patente: string, nuevoAuto: Auto): void {
            const index = this.autos.findIndex(a => a.patente === patente);
            if (index !== -1) {
                this.autos[index] = nuevoAuto;
                console.log(`Auto con patente ${patente} actualizado.`);
            } else {
                console.log(`No se encontró un auto con esa patente.`);
            }
        }
    
        // Mostrar todos los autos
        public mostrarAutos(): void {
            this.autos.forEach(auto => auto.mostrarDetalles());
        }
    }
    const registro = new RegistroAutomotor();

const auto1 = new Auto("Toyota", "Corolla", 2020, "Rojo", "ABC123");
const auto2 = new Auto("Honda", "Civic", 2021, "Azul", "DEF456");

registro.agregarAuto(auto1);
registro.agregarAuto(auto2);

registro.mostrarAutos();

const encontrado = registro.buscarAuto("ABC123");
if (encontrado) encontrado.mostrarDetalles();

const nuevoAuto = new Auto("Toyota", "Yaris", 2022, "Negro", "ABC123");
registro.actualizarAuto("ABC123", nuevoAuto);

registro.eliminarAuto("DEF456");

registro.mostrarAutos();
