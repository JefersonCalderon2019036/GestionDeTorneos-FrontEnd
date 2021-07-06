export class Usuarios {
  constructor(
    public  _id: String,
    public  name: String,
    public  lastname: String,
    public  username: String,
    public  password: String,
    public  email: String,
    public  image: String,
    public  role: String,
    public  ligas: [{type: String}]
  ){}
}
