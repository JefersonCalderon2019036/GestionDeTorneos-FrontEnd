export class teams {
    constructor(
       public  _id: string, 
       public name:String,
       public logo:String,
       public country: String,
       public golesFavor:Number,
       public golesContra:Number,
       public golesDiferencia:Number,
       public partidos:Number,
       public puntos:Number,
    ){}
}