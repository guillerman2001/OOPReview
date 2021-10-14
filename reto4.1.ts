
export class Punto{
    private x:number;
    private y:number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    //GET
    getX():number{
        return this.x;
    }
    getY():number{
        return this.y
    }
    //SET
    setX(x:number){
        this.x = x;
    }
    setY(y:number){
        this.y = y;
    }
    //METODOS
    toString(){
        return `(${this.x},${this.y})`;
    }
    distanciaAlOrigen():number{
        return (Math.sqrt((this.x**2)+(this.y**2)));
    }
    calcularDistancia(punto2:Punto):number{
        let disX = punto2.getX()-this.x;
        let disY = punto2.getY()-this.y;
        return (Math.sqrt((disX**2)+(disY**2)));
    }
    calcularCuadrante():number{
        if(this.x===0 || this.y===0){
            return 0;
        } else if(this.x>0 && this.y>0){
            return 1;
        } else if(this.x<0 && this.y>0){
            return 2;
        } else if(this.x<0 && this.y<0){
            return 3;
        } else if(this.x>0 && this.y<0){
            return 4;
        }
    }
    calcularMasCercano(puntos:Punto[]):Punto{
        let masCercano = [];
        for(let i=0; i<puntos.length;i++){
            if(i===0){
                masCercano = [puntos[i],this.calcularDistancia(puntos[i])];
            }else{
                if(masCercano[1]>this.calcularDistancia(puntos[i])){
                    masCercano = [puntos[i],this.calcularDistancia(puntos[i])];
                }
            }
        }
        return masCercano[0];
    }
}