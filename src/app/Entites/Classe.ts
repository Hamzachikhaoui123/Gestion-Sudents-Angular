import { Etudiants } from "./etudiants";

export class Classe {
    id:string;
    name:string;
    etuidants:Array<Etudiants>

    constructor(other:Partial<Classe>){
        this.id=other?.id||'';
        this.name=other?.name||"";
        this.etuidants=other?.etuidants||[]
    }
}