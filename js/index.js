async function getData(){
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const images = await result.json();
    const imagesArr = images.meals.map(elemento => Object.entries(elemento))
    //const imagesArrSlice = imagesArr.slice(0, 2)
    const arrTitles = ["Pancakes", "Waffles", "Sweet Tartal"]
    console.log("madre")
    console.log(images)
    images.meals.forEach(element => {
        //for(i = 0; i < arrTitles.length; i++){
            if(element.idMeal == "52768" || element.idMeal == "52893" || element.idMeal == "53049"){
                const img = document.createRange().createContextualFragment(`
                    
                    <div class="box">
                        <img src="${element.strMealThumb}">
                        <button class="btn botoncito">${arrTitles[element.idMeal == "52768" ? 0 :  element.idMeal == "52893"  ? 2 : 1]}</button>
                    </div>
                    
                    `)
                    const card = document.querySelector('.main-row');
                    card.append(img);
            }
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

const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

btn_validar.addEventListener("click", validar)
getData()