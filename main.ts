import { Triangulo } from './reto4.2';
import { Punto } from "./reto4.1";

let punto1 = new Punto(4,5);
console.log(punto1.toString());
console.log(punto1.distanciaAlOrigen());
console.log(punto1.calcularDistancia(new Punto(7,3)));
console.log(punto1.calcularCuadrante());
console.log(punto1.calcularMasCercano([new Punto(0,0),new Punto(1,0),new Punto(2,3),new Punto(-5,-6)]));

let triangulo1 = new Triangulo([new Punto(4,0),new Punto(0,4),new Punto(0,0)]);
console.log(triangulo1.calcularLongitudLados());