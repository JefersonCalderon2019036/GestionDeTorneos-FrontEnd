export class marcador {
  constructor(
    public jornada: Number,
    public goles1: Number,
    public goles2: Number,
    public nameEquipo1: String,
    public nameEquipo2: String,
    public equipo1: [{type: string}],
    public equipo2: [{type: string}],
    public liga: [{type: string}]
  ){}
}
