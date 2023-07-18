let infoAnimales = (async ()=>{
    try {
          const res  =  await fetch("animales.json");
          const data =  await res.json();
          console.log('archivo apiFalsa ',data);
          return data;


    } catch (error) {
        console.log(error);
    }

})();



export default infoAnimales;
