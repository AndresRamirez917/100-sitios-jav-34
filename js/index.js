async function getData(){
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const images = await result.json();
    const imagesArr = images.meals.map(elemento => Object.entries(elemento))
    const imagesArrSlice = imagesArr.slice(0, 2)
    const arrTitles = ["Avocado Toast", "Pancakes", "Waffles"]
    console.log("madre")
    console.log(images)
    images.meals.forEach(element => {
        //for(i = 0; i < imagesArrSlice.length; i++){
            if(element.idMeal == "52768" || element.idMeal == "52893" || element.idMeal == "53049"){
                const img = document.createRange().createContextualFragment(`
                    
                    <div class="box">
                        <img src="${element.strMealThumb}">
                        <button class="btn botoncito">${arrTitles[1]}</button>
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

getData()