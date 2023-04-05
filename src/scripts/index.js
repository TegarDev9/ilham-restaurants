import 'regenerator-runtime'; 
import '../styles/main.css';
import'../styles/card.css';
import'../styles/Responsifbilitas.css';
import data_restoran from '../DATA.json';


console.log(data_restoran);


function fetresto(data_restoran){
    let restoorantdata = '';


data_restoran.restaurants.forEach((restoran, a)=>{
    restoorantdata += `
    <div tabindex="0" class="cards">
    <img class="image" alt="${restoran.name}" src="${restoran.pictureId}"/>
    <span tabindex="0" class="card-rating">
    <i title="ratings" class="rating"></i>
    <span>${restoran.rating}</span>
    </span>
    <p tabindex="0" class="title">${restoran.name} - ${restoran.city}</p>
    <p tabindex="0" class="deskcription">${restoran.description}</p>
    </div>
    </div>

    `;
});
 document.getElementById('restaurant-list').innerHTML =  restoorantdata;
}

fetresto(data_restoran);
