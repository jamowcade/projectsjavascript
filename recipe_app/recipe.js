const url = "https://www.themealdb.com/api/json/v1/1/random.php";
const url2 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const url3 = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const mealsEl = document.getElementById("meals");
const favoriteContainer = document.getElementById("fav-meals");
const mealPopup = document.getElementById("meal-popup");
const mealInfoEl = document.getElementById("meal-info");
const popupCloseBtn = document.getElementById("close-popup");
getRandomMeal()

async function getRandomMeal(){
   const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
   const respData = await  resp.json();
   const randomMeal = respData.meals[0]
   addMeal(randomMeal, true);
   console.log(randomMeal);
}


function getMealById(){
    fech(url2)
}

function getMealBySearch(){
    fech(url3) 
}

function addMeal(mealData, random = false) {
    console.log(mealData);

    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = `
        <div class="meal-header">
            ${
                random
                    ? `
            <span class="random"> Random Recipe </span>`
                    : ""
            }
            <img
                src="${mealData.strMealThumb}"
                alt="${mealData.strMeal}"
            />
        </div>
        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    `;

    mealsEl.appendChild(meal)
    const btn =  meal.querySelector('.meal-body .fav-btn')
    btn.addEventListener('click', ()=>{
        btn.classList.toggle('active');
    })

    
}
