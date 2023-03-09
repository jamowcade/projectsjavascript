const url = "https://www.themealdb.com/api/json/v1/1/random.php";
const url2 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const url3 = "https://www.themealdb.com/api/json/v1/1/search.php?s="

getRandomMeal()
async function getRandomMeal(){
   const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
   const respData = await  resp.json();
   const randomMeal = respData.meals[0]

   console.log(randomMeal);
}


function getMealById(){
    fech(url2)
}

function getMealBySearch(){
    fech(url3) 
}
