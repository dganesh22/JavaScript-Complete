
// to read router query from url
let params = new Proxy(new URLSearchParams(window.location.search),{
    get: (par,prop) => par.get(prop)
})

if(params) {
    console.log(`params `, params.recipeId)
}

let recipesEl = document.getElementById("recipes")
let URL = "https://dummyjson.com"

let getData = async (id) => {
    await fetch(`${URL}/recipes/${id}`)
        .then(res => res.json())
        .then(out => {
            console.log(`recipe =`, out)
            printData(out)
        }).catch(err => console.log(err.message))
}

getData(params.recipeId)

let printData = (data) => {
    recipesEl.innerHTML = `<div class="recipe-card">
            <img src="${data.image}" alt="no pic" />

            <div class="recipe-body">
                <h3> ${data.name} </h3>

                <div className="item"> Servings :  ${ data.servings } </div>
                <div className="item"> CookTime :  ${ data.cookTimeMinutes } min </div>
                <div className="item"> Preparation Time :  ${ data.prepTimeMinutes } min </div>
                <div className="item"> Calories Per serving :  ${ data.caloriesPerServing } calories </div>
                <div className="item"> Difficulty :  ${ data.difficulty } </div>

                <hr/>
                <h3>Ingredients</h3>
                <ol>
                    ${ data.ingredients.map(item => `<li> ${item} </li>`)}
                </ol>

                <hr/>
                <h3>Instructions</h3>
                <ol>
                    ${ data.instructions.map(item => `<li> ${item} </li>`)}
                </ol>
            </div>
        </div>`
}