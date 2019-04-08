export class coordonnee{

    private longitude:number;
    private latitude:number;

    constructor(longitude:number, latitude:number)
    {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public getLatitude():number
    {
        return this.latitude;
    }

    public getLongitude():number
    {
        return this.longitude;
    }

    public setLatitude(latitude:number): void
    {
            this.latitude = latitude;
    }

    public setLongitude(longitude:number): void
    {
        this.longitude = longitude;
    }

    public toString():string
    {
        return 'les cooordonnées entrée sont en longitude : '  + this.longitude + 'en latitude : ' + this.latitude;
    }
}