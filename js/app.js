//////// Kanye Rest API ////////

// const loadKanye= ()=>{
//     fetch('https://api.kanye.rest/')
//     .then(res=> res.json())
//     .then(data=> showKanye(data));
// }
// loadKanye();

// const showKanye= quote=>{
//     console.log(quote.quote)
//     const quotePlace=document.getElementById('quote');
//     quotePlace.innerText= quote.quote;
// }


//////// Random User API ////////

// const loadUser= ()=>{
//     fetch('https://randomuser.me/api/')
//     .then(res=> res.json())
//     .then(data=> showUser(data.results[0]));
// }
// loadUser();

// const showUser= user=>{
//     console.log(user.name)
//     // console.log(user.results[0].picture.large)

//     const userDiv= document.getElementById('user');

//     const cardDiv= document.createElement('div');
//     cardDiv.classList.add('card');
//     cardDiv.classList.add('text-center')
//     cardDiv.innerHTML =`<img class="w-50 mx-auto rounded-circle" src="${user.picture.large}" class="card-img-top" alt="...">
//     <div class="card-body">
//     <h5 class="card-title">Name: ${user.name.title} ${user.name.first} ${user.name.last}</h5>
//     </div>`;

//     userDiv.appendChild(cardDiv);
    
// }


//////// Country API ////////


// const loadCountry= ()=>{
//     fetch('https://restcountries.com/v2/all')
//     .then(res=> res.json())
//     .then(data=> showCountry(data))
// }
// loadCountry();

// const showCountry= countries=>{
//     const countryDiv= document.getElementById('showcountry');
//     countries.forEach(country => {
//         console.log(country)
//         const newDiv= document.createElement('div');
//         newDiv.classList.add('col-lg-3')
//         newDiv.classList.add('border');
//         newDiv.classList.add('border-2');
//         newDiv.classList.add('border-primary');
//         newDiv.classList.add('rounded');
//         newDiv.classList.add('p-5');
//         newDiv.classList.add('mx-auto');
//         newDiv.innerHTML=`<img class="w-50" src="${country.flag}"> <h3>${country.name}</h3>`
//         ;
//         countryDiv.appendChild(newDiv);
//     });
// }


//////// The Meal DB API ////////

const loadFood= ()=>{
    const search = document.getElementById('search-field');
    const searchText= search.value;
    // console.log(searchText);
    const link = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(link)
    .then(res=> res.json())
    .then(data=> displayFood(data.meals));
    search.value= '';
    const mealsDiv= document.getElementById('meals-container');
    mealsDiv.innerHTML='';

}


const displayFood= foods=>{
    const mealsDiv= document.getElementById('meals-container');
foods.forEach(food => {
    console.log(food);
    const containerDiv= document.createElement('div');
    containerDiv.classList.add('col-lg-3');
    containerDiv.classList.add('col-md-4');
    containerDiv.classList.add('col-6');
    const cardDiv= document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.classList.add('cursor-pointer');
    cardDiv.innerHTML=`
    <img onclick="loadDetail(${food.idMeal})" src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${food.strMeal}</h5>
          <p class="card-text">${food.strInstructions.slice(0,100)}</p>
        </div>
    `;
    containerDiv.appendChild(cardDiv);
    mealsDiv.appendChild(containerDiv);
});
}

const loadDetail= (mealId)=>{
const url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
fetch(url)
.then(res=> res.json())
.then(data=> displayDetail(data.meals[0]));
}

const displayDetail= selectFood=>{
    const mealDetail= document.getElementById('meals-detail');
    mealDetail.innerHTML= `<img src="${selectFood.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${selectFood.strMeal}</h5>
      <p class="card-text">${selectFood.strInstructions.slice(0,200)}</p>
      <a href="${selectFood.strYoutube}" class="btn btn-primary">Watch In Youtube</a>
    </div>`

}

