const searchField= document.getElementById('search-field');
// console.log(searchField);

const searchResult= ()=>{
    const inputValue=searchField.value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
    .then(res=> res.json())
    .then(data=> displayResult(data.data))
}

const displayResult= phones=> {
    phones.forEach(phone => {
        console.log(phone);
        const phoneGrid= document.getElementById('phone-grid');
       const  phoneDiv= document.createElement('div');
       phoneDiv.classList.add('col-lg-4');
       phoneDiv.classList.add('col-md-6');
       phoneDiv.classList.add('col-12');
       phoneDiv.innerHTML=`<div class="card h-100 rounded shadow-lg p-4">
       <img src="${phone.image}" class="w-75 mx-auto card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title">Phone Name</h5>
           <p class="card-text">Phone Brand</p>
           <button>Show Details</button>
       </div>
   </div>`;

   phoneGrid.appendChild(phoneDiv);

    });
}