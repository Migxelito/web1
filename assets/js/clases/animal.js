export default class Animal{
    constructor(nombre,edad,img,comentarios,sonido) {
       
        let _nombre = nombre;
       
        this.getNombre = () => {
            return _nombre
        };
        
        let _edad = edad;
       
        this.getEdad = () => {
            return _edad
        };
        
        let _img = img;
       
        this.getImg = () => {
            return _img
        };
        
        let _comentarios = comentarios;
       
        this.getComentarios = () => {
            return _comentarios
        };
        
        let _sonido = sonido;
       
        this.getSonido = () => {
            return _sonido
        };
    };

    get Nombre() {
        return this.getNombre();
    };

    get Edad() {
        return this.getEdad();
    };
    
    get Img() {
        return this.getImg();
    };
    
    get Comentarios() {
        return this.getComentarios();
    };
    
    get Sonido() {
        return this.getSonido();
    };
    
}