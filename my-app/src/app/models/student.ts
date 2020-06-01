export class Student {

    constructor(_id="", nombres="", apellidos="", edad=0, correo="", direccion="", telefono=0){
        this._id = _id;
        this.nombres=nombres;
        this.apellidos=apellidos;
        this.edad=edad;
        this.correo=correo;
        this.direccion=direccion;
        this.telefono=telefono;
    }

    _id: String;//*
    nombres: string;
    apellidos: string;
    edad: number;
    correo: string;
    direccion: string;
    telefono: number;
}

