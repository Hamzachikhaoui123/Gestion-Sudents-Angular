export class User{
    id:string;
    username:string;
    email:string;
    password:string



    constructor(other?:Partial<User>){
        this.id=other?.id||"";
        this.username=other?.username||"";
        this.email=other?.email||"";
        this.password=other?.password||"";

    }
}
