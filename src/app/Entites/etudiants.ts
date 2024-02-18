import { Classe } from "./Classe";
import { User } from "./user";

export class Etudiants extends User {
    birthDate:number;
    classe:Classe;
    constructor(other:Partial<Etudiants>){
        super();
        this.id=other.id||"";
        this.email=other?.email||"";
        this.password=other?.password||"";
        this.classe=other?.classe||new Classe({});
        this.birthDate=other?.birthDate||0
        
    }
    
}