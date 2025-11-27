const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menus.classList.add("display");
});

closeBtn.addEventListener("click", () => {
    menus.classList.remove("display");
});

//scroll sticky navbar
window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop>20){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
})

//static counter
const countersEl = document.querySelectorAll(".numbers");
countersEl.forEach((counters) => {
    counters.textContent=0;
    incrementCounters();

    function incrementCounters(){
        let currentNum= +counters.textContent;
        const dataCeil = counters.getAttribute("data-ceil");
        const increment = dataCeil / 25;
        currentNum = Math.ceil(currentNum+increment);
        if(currentNum<dataCeil){
            counters.textContent = currentNum;
            setTimeout(incrementCounters, 50);
        }else{
            counters.textContent=dataCeil
        }
    }
});



function updateSearchForm() {
    const selector = document.getElementById('search-type-selector');
    const selectedType = selector.value;

    const tourInputs = document.getElementById('tour-inputs');
    const hotelInputs = document.getElementById('hotel-inputs');
    const restaurantInputs = document.getElementById('restaurant-inputs');

  
    tourInputs.style.display = 'none';
    hotelInputs.style.display = 'none';
    restaurantInputs.style.display = 'none';

    if (selectedType === 'tour') {
        tourInputs.style.display = 'flex';
    } else if (selectedType === 'hotel') {
        hotelInputs.style.display = 'flex';
    } else if (selectedType === 'restaurant') {
        restaurantInputs.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', updateSearchForm); 
