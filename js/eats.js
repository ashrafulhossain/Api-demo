const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => totalMeal(data.meals))
}
const totalMeal = meals => {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal);
        const divCard = document.createElement('div');
        divCard.classList.add('col');
        divCard.innerHTML = `
        <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
        </div>
    </div>     
        
        `;
        foodContainer.appendChild(divCard);
    })

}
const foodSearch = () => {
    const foodFields = document.getElementById('food-field');
    const foodText = foodFields.value;
    loadMeals(foodText);
    foodFields.value = ``;

}

loadMeals();
