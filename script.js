const row = document.querySelector('.row')
const input = document.querySelector('#input')
const box = document.querySelector('.box')
const logo = document.querySelector('.logo')
const btnSearch = document.querySelector('#searchBtn')
console.log(123123123)
const handleGetCocktails = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v2/1/popular.php`)
        .then(res => res.json())
        .then(data => {
            data.drinks.forEach(cocktails => {
                row.innerHTML += `
                <div class="col-4">
                    <div class="card">
                        <img src="${cocktails.strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p>${cocktails.strDrink}</p>
                    <p>${cocktails.strAlcoholic} </p>
                    </div>
                </div>
            </div>
        `
            })

        })
}

handleGetCocktails()

btnSearch.addEventListener('click', () => {
    console.log(123123);
    row.classList.add('hidden');
    const value = input.value;

    if (value !== '') {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
            .then(res => res.json())
            .then(data => {
                const cocktail = data.drinks[0]
                box.innerHTML = `
                    <div class="col-6">
                    <h1>Cocktail information</h1>
                        <div class="rounded">
                            <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h3>${cocktail.strDrink}</h3>
                                <h5>${cocktail.strInstructions}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 ingredients"> 
                        <div class="col-6">
                            <img src="https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient1}.png" alt="">
                            <p>${cocktail.strIngredient1}</p>
                        </div>
                            <div class="col-6">
                            <img src="https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient2}.png" alt="">
                            <p>${cocktail.strIngredient2}</p>
                        </div>                  
                        <div class="col-6">
                            <img src="https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient3}.png" alt="">
                            <p>${cocktail.strIngredient3}</p>
                        </div>                  
                        <div class="col-6">
                            <img src="https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient4}.png" alt="">
                            <p>${cocktail.strIngredient4}</p>
                        </div>
                    </div>
                `
            })
    } else {
        box.innerHTML = ''
    }
});

// Для проверяющего:когда нажимаешь на лого будут выведены все коктели
logo.addEventListener('click' ,() => {
    console.log(123123)
    row.classList.remove('hidden')
})


input.addEventListener('keypress',()=>{
    if(event.key==='Enter'){
        event.preventDefault()
        btnSearch.click()
    }
})