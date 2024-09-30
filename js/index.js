async function getData(){
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const images = await result.json();
    const imagesArr = images.meals.map(elemento => Object.entries(elemento))
    //const imagesArrSlice = imagesArr.slice(0, 2)
    const arrTitles = ["Avocado Toast", "Pancakes", "Waffles", "Sweet Tartal", "Empanadas", "Tiramizuu"]
    console.log("madre")
    console.log(images)
    images.meals.forEach(element => {
        //for(i = 0; i < arrTitles.length; i++){
            if(element.idMeal == "52768" || element.idMeal == "52893" || element.idMeal == "53049"){
                const img = document.createRange().createContextualFragment(`
                    
                    <div class="box">
                        <img src="${element.strMealThumb}">
                        <button class="btn botoncito">${arrTitles[Math.floor(Math.random() * 6)]}</button>
                    </div>
                    
                    `)
                    const card = document.querySelector('.main-row');
                    card.append(img);
            }
            // if(element.idMeal == "53050"){
            //     const img = document.createRange().createContextualFragment(`
                    
            //     <div class="box box-4">
            //         <img src="${element.strMealThumb}">
            //         <h3>order your brunch</h3>
            //        <button class="btn button-2">Casseroles</button>
            //     </div>
                    
            //         `)
            //         const card = document.querySelector('.main-row-2');
            //         card.append(img);
            // }
        //}
    });
}

const btn_validar = document.getElementById('btn-validar')
const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr  = [];
    const messageArr = ["Nombre", "Email", "Mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${messageArr[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email.value)){
        swal({
            title: `El campo ${messageArr[1]} no tiene el formato correcto`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         mensaje.value = "";
    return true;
}

btn_validar.addEventListener("click", validar)
getData()