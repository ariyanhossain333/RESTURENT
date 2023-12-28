// const searchbox = document.querySelector(".inputbox")
// const searchbutton = document.querySelector(".clickbtn")
// const cards= document.querySelector(".cards")


//  const fetchrecepies = async(quary)=>{
//     const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${quary}
//     `)
//      const responce = await data.json()
//     responce.meals.forEach(meal =>{
//          const recipeDiv= document.createElement("div")
//          recipeDiv.classList.add("recipe")
//          recipeDiv.innerHTML= `<img src="${meal.strMealThumb}" >`
//          cards.appendChild(recipeDiv)
//     })
// }



// searchbutton.addEventListener("click", (e) => {
//     e.preventDefault()
//     // console.log("clicked")

//     fetchrecepies()

// })


const searchbox = document.querySelector(".inputbox")
const searchButton = document.querySelector(".clickbtn")
const mycards = document.querySelector(".cards")


const fetchRecipe = async (quary) => {
    mycards.innerHTML ="<h1>Fetching recipes...</h1>"
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${quary}`)
    const response = await data.json()

  mycards.innerHTML = ""
    response.meals.forEach(meal => {
        const recipeDiv =document.createElement ("div")
        recipeDiv.classList.add("recipe")
        recipeDiv.innerHTML= 
        `<img src = "${meal.strMealThumb}" >
        <h3> ${meal.strMeal} </h3>
        <p> ${meal.strArea} Dish</p>
        <p> ${meal.strCatagory} </p>
                
        `


        mycards.appendChild(recipeDiv)

    })

}



searchButton.addEventListener("click", (e) => {
    e.preventDefault()
    const searchInput = searchbox.value.trim()
    fetchRecipe(searchInput)
    // console.log("licked")
})