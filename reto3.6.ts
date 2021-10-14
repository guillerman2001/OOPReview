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
        this.totalPrice = this.totalPriceCalculation();
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
    private totalPriceCalculation(){
        let resultado = 0;
        for(let mobile of this.mobiles){
            resultado += mobile.getPrice();
        }
        this.totalPrice = resultado;
        return this.totalPrice;
    }
    printLibrary(){
        console.log(`This are all my mobiles.`);
        for(let mobile of this.mobiles){
            mobile.printAll();
        }
        console.log(`Price overall: ${this.totalPrice}`);
    }
}

let Nokia3210 = new Mobile('Nokia','Nokia3210','Nokia',6,'negro',false,1,30.99);
let IPhone3G = new Mobile('IPhone','IPhone3G','aple',18,'blanco',false,3,150.99);
let SamsungGalaxy10 = new Mobile('Samsung','Galaxy10','Samsung',32,'negro',true,4,70.99);
let LG4K = new Mobile('LG','LG4K','LG',32,'negro',true,3,51.50);

let arrayMobiles = [Nokia3210, IPhone3G, SamsungGalaxy10, LG4K];

let libreria = new MobileLibrary('Guillermo','Madrid',arrayMobiles);
/*console.log(libreria.getName());
console.log(libreria.getMobiles());
console.log(libreria.getLocation());
console.log(libreria.getTotalPrice());*/
libreria.printLibrary();
