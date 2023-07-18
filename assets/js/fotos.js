import infoAnimales from "./consulta.js";



document.getElementById('animal').addEventListener('change', async () => {
    
    let elegido = document.getElementById('animal').value;
    console.log(elegido);
    const {animales} = await infoAnimales;
    console.log(animales);
    const seleccionado  = animales.find((e) => e.name == elegido);
    const imagenAnimal = seleccionado.imagen;
    const urlImgAnimal = `./assets/imgs/${imagenAnimal}`;
    console.log(urlImgAnimal);
    
    document.getElementById("preview").style.backgroundImage = `url(${urlImgAnimal})`;

})
    