
let URL = "https://dummyjson.com"
// print data 
let recipesEl = document.getElementById("recipes")

// input
let inputEl = document.getElementById("recipe")

// button
let btnEl = document.getElementById("searchBtn")

let isSearch = false

// initial data 
let getData = async () => {
    await fetch(`${URL}/recipes?limit=10&skip=0`)
        .then(res => res.json())
        .then(out => {
            console.log(`out =`, out) // server output
            printData(out.recipes)
        }).catch(err => console.log(err.message))
}

getData()



let printData = (data) => {
        data.forEach(item => {
            recipesEl.innerHTML += ` <a class="card-link" href="details.html?recipeId=${item.id}">
                     <div class="card"> 
                        <img src="${item.image}" class="image" alt="no pic" />
                        <div class="card-body">
                            <h4> ${item.name} </h4>
                        </div>
                        </div> 
                    </a>`
        });
    }




// search handler
btnEl.addEventListener("click", async (e) => {
    console.log(`btn clicked`)
    let inp = inputEl.value

   await  fetch(`${URL}/recipes/search?q=${inp}`)
    .then(res => res.json())
    .then(out => {
        console.log(`search data = `, out)
        if(out.recipes.length > 0) {
            recipesEl.innerHTML = " ";
            printData(out.recipes)
        }
    }).catch(err => console.log(err.message))
})

