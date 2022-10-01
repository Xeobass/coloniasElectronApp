export class Usuario {
    private name:string;
    private pass:string;

    constructor(name:string,pass:string){
        this.name=name;
        this.pass=pass;
    }

    getName():string{return this.name;}
    getPass():string{return this.pass;}
}

