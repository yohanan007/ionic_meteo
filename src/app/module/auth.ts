


export class Auth{

    logging: string; 
    mdp: string;

    

    constructor(logging:string, mdp:string){
        this.logging =  logging;
        this.mdp = mdp;
    }

    

    public getLogging(){
        return this.logging;
    }

    public getMdp(){
        return this.mdp;
    }

    public setLogging(logging:string)
    {
        this.logging = logging;
    }

    public setMdp(mdp:string)
    {
        this.mdp = mdp; 
    }

    public toString(){
     return "Classe Module le logging est "  + this.getLogging();
    }

  }