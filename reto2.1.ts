export class Mobile{
    private name: string;
    private model: string;
    private trademark: string;
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;
    constructor(name: string, model: string, trademark: string, sdSize: number, color: string, is5G: boolean, cameraNumber: number, price: number){
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    //GET
    getName():string{
        return this.name;
    }
    getModel():string{
        return this.model;
    }
    getTrademark():string{
        return this.trademark;
    }
    getSdSize():number{
        return this.sdSize;
    }
    getColor():string{
        return this.color;
    }
    getIs5G():boolean{
        return this.is5G;
    }
    getCameraNumber():number{
        return this.cameraNumber;
    }
    getPrice():number{
        return this.price;
    }
    //SET
    setName(name:string){
        this.name = name
    }
    setModel(model:string){
        this.model = model;
    }
    setTrademark(trademark:string){
        this.trademark = trademark;
    }
    setSdSize(sdSize:number){
        this.sdSize = sdSize;
    }
    setColor(color:string){
        this.color = color;
    }
    setIs5G(is5G:boolean){
        this.is5G = is5G;
    }
    setCameraNumber(cameraNumber:number){
        this.cameraNumber = cameraNumber;
    }
    setPrice(price:number){
        this.price = price;
    }
    printAll(){
        console.log(`
        The characteristics of the mobile ${this.name} are:
            Name: ${this.name}
            Model: ${this.model}
            Trademark: ${this.trademark}
            SD Size (GB): ${this.sdSize}
            Color: ${this.color}
            Is 5g?: ${this.is5G}
            Number of Cameras: ${this.cameraNumber}
        `);
    }
}


