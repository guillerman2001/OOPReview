import { Punto } from './reto4.1';

export class Triangulo{
    private vertice:Punto[];
    constructor(vertice:Punto[]){
        this.vertice = vertice;
    }
    calcularLongitudLados():number[]{
        let arrayLados = [];
        arrayLados.push(this.vertice[0].calcularDistancia(this.vertice[1]));
        arrayLados.push(this.vertice[1].calcularDistancia(this.vertice[2]));
        arrayLados.push(this.vertice[2].calcularDistancia(this.vertice[0]));
        return arrayLados;
    }
}