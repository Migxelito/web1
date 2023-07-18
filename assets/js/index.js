import {Leon,Lobo,Oso,Serpiente,Aguila} from "./clases/tipodeanimal.js";

let investigados = [];

document.getElementById('btnRegistrar').addEventListener("click", async()=>{
    console.log()
    let selectAnimal = document.getElementById('animal');
    let selectEdad = document.getElementById('edad');
    let comentario = document.getElementById('comentarios');
    
    let previewImagen = document.getElementById('preview');
    let imagenObtenida = previewImagen.style.backgroundImage;
    console.log('imagen preview',imagenObtenida);
    let urlSrc = imagenObtenida.slice(5,imagenObtenida.length-2);
    console.log('url despues del slice',urlSrc);

    let newAnimal;

        if(selectAnimal.value && selectEdad.value && comentario.value){
            if(selectAnimal == "Leon"){
                newAnimal = new Leon (selectAnimal.value,selectEdad.value, urlSrc,comentario.value);
            }
            else if(selectAnimal.value == 'Lobo'){
                newAnimal = new Lobo(selectAnimal.value,selectEdad.value, urlSrc,comentario.value);
            }

            else if(selectAnimal.value == 'Oso'){
                newAnimal = new Oso(selectAnimal.value,selectEdad.value, urlSrc,comentario.value);
            }           

            else if(selectAnimal.value == 'Serpiente'){
                newAnimal = new Serpiente(selectAnimal.value,selectEdad.value, urlSrc,comentario.value);
            }

            else {
                newAnimal = new Aguila (selectAnimal.value,selectEdad.value, urlSrc,comentario.value);
            }

            investigados.push(newAnimal);
            console.log(investigados);
            selectAnimal.selectedIndex= 0;
            selectEdad.selectedIndex=0;
            comentario.selectedIndex=0;
            previewImagen.style.backgroundImage = 'none';
           

            muestrAnimales();
    

        }
        else{
            alert('ingrese todos los datos');
        }

})

const muestrAnimales = ()=>{
    const tablAnimales = document.getElementById('Animales');
    tablAnimales.innerHTML = '';
    investigados.forEach((elemento)=>{
        console.log("elemento:", elemento);
        console.log("elemento.Img:", elemento.Img);
        tablAnimales.innerHTML+=`
        <div class="px-3 pb-2 participante" >
            <div class="card">
                <img src="${elemento.Img} "class="card-img-top" alt="aQUI VA OK" data-toggle="modal" data-target="#exampleModal"/>
                <div class="card" style=" background-color: grey">
                <img class="p-1" height="30rem" src="./assets/imgs/audio.svg"/>
                </div>
            </div>
        </div>
        `;
    });
}