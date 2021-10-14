import { Mobile } from "./reto2.1";

export class MobileLibrary{
    private name:string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice: number;
    constructor(name:string, location: string, mobiles: Mobile[]){
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }
    //GET
    getName():string{
        return this.name;
    }
    getLocation():string{
        return this.location;
    }
    getMobiles():Mobile[]{
        return this.mobiles;
    }
    getTotalPrice():number{
        return this.totalPrice;
    }
    //SET
    setName(name:string){
        this.name = name;
    }
    setLocation(location:string){
        this.location = location;
    }
    setMobiles(mobiles:Mobile[]){
        this.mobiles = mobiles;
    }
    setTotalPrice(totalPrice:number){
        this.totalPrice = totalPrice;
    }
    //METODOS
    totalPriceCalculation(){
        let resultado = 0;
        for(let mobile of this.mobiles){
            resultado += mobile.getPrice();
        }
        this.totalPrice = resultado;
    }
}