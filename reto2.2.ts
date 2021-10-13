import { Mobile } from "./reto2.1";

let Nokia3210 = new Mobile('Nokia','Nokia3210','Nokia',6,'negro',false,1,30.99);
let IPhone3G = new Mobile('IPhone','IPhone3G','aple',18,'blanco',false,3,150.99);
let SamsungGalaxy10 = new Mobile('Samsung','Galaxy10','Samsung',32,'negro',true,4,70.99);

let arrayMob = [Nokia3210, IPhone3G, SamsungGalaxy10];

for(let array of arrayMob){
    array.printAll();
}