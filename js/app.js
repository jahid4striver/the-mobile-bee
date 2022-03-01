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
        // console.log(phone);
        const phoneGrid= document.getElementById('phone-grid');
       const  phoneDiv= document.createElement('div');
       phoneDiv.classList.add('col-lg-4');
       phoneDiv.classList.add('col-md-6');
       phoneDiv.classList.add('col-12');
       phoneDiv.innerHTML=`<div class="card h-100 rounded shadow-lg p-4">
       <img src="${phone.image}" class="w-75 mx-auto card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title">${phone.phone_name}</h5>
           <p class="card-text">${phone.brand}</p>
           <button onclick="phoneDetails('${phone.slug}')" class="btn btn-success"><a href="#phone-details" class="text-white text-decoration-none">Show Details</a></button>
       </div>
   </div>`;
   phoneGrid.appendChild(phoneDiv);
    });
};


const phoneDetails= (phoneSlug)=>{

    const url=(`https://openapi.programming-hero.com/api/phone/${phoneSlug}`);
    fetch(url)
    .then(res=> res.json())
    .then(data=> showDetails(data.data));
}

const showDetails= (phone)=>{
    console.log(phone);
const detailsDiv= document.getElementById('phone-details');

    const  div= document.createElement('div');
    div.classList.add('col-12');
    div.classList.add('col-lg-6');
    div.classList.add('col-md-6');
    div.classList.add('mx-auto');
    div.innerHTML=`<div class="card h-100 rounded shadow-lg p-4">
    <img src="${phone.image}" class="w-100 mx-auto card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Name: ${phone.name}</h5>
        <p class="card-text">Brand: ${phone.brand}</p>
        <p class="card-text">Release Date: ${phone.releaseDate}</p>
        <h5 class="card-title">Main Features:</h5>
        <p class="card-text">Chipset: ${phone.mainFeatures.chipSet}</p>
        <p class="card-text">Display Size: ${phone.mainFeatures.displaySize}</p>
        <p class="card-text">Memory: ${phone.mainFeatures.memory}</p>
        <p class="card-text">Sensors: ${phone.mainFeatures.sensors[0]} ${phone.mainFeatures.sensors[1]}, ${phone.mainFeatures.sensors[2]}, ${phone.mainFeatures.sensors[3]}, ${phone.mainFeatures.sensors[4]}, ${phone.mainFeatures.sensors[5]}, ${phone.mainFeatures.sensors[6]} </p>
        <h5 class="card-title">Others Features:</h5>
        <p class="card-text">Bluetooth: ${phone.others.Bluetooth}</p>
        <p class="card-text">GPS: ${phone.others.GPS}</p>
        <p class="card-text">NFC: ${phone.others.NFC}</p>        
        <p class="card-text">Radio: ${phone.others.Radio}</p>
        <p class="card-text">USB: ${phone.others.USB}</p>
        <p class="card-text">WLAN: ${phone.others.WLAN}</p>
    </div>
</div>`;

detailsDiv.appendChild(div);
}

// ${phone.sensors[1]}, ${phone.sensors[2]}, ${phone.sensors[3]}, ${phone.sensors[4]}, ${phone.sensors[5]}

