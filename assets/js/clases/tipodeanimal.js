import Animal from "./animal.js";

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    Rugir() {
        console.log("roarr");
    }
}



class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    Aullar() {
        console.log("aufff");
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    Grugnir() {
        console.log("uuahhh");
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    Sisear() {
        console.log("roar");
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    Chillar() {
        console.log("uauaua");
    }
}

export {Leon,Lobo,Oso,Serpiente,Aguila};