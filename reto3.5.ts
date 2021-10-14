import { Mobile } from "./reto2.1";
import { MobileLibrary } from "./reto3.1";

let Nokia3210 = new Mobile('Nokia','Nokia3210','Nokia',6,'negro',false,1,30.99);
let IPhone3G = new Mobile('IPhone','IPhone3G','aple',18,'blanco',false,3,150.99);
let SamsungGalaxy10 = new Mobile('Samsung','Galaxy10','Samsung',32,'negro',true,4,70.99);
let LG4K = new Mobile('LG','LG4K','LG',32,'negro',true,3,51.50);

let arrayMobiles = [Nokia3210, IPhone3G, SamsungGalaxy10, LG4K];

let libreria = new MobileLibrary('Guillermo','Madrid',arrayMobiles);
console.log(libreria.getName());
console.log(libreria.getMobiles());
console.log(libreria.getLocation());
console.log(libreria.getTotalPrice());
libreria.totalPriceCalculation();
console.log(libreria.getTotalPrice());
