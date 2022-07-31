const slider = document.querySelector(".content-plan__input-range"),
contentPaveViews = document.querySelector(".content-plan__pageviews>p"),
price = document.querySelectorAll(".price"),
pageViews = ["10K", "50K", "100K", "500K", "1M"],
btnSwitch = document.querySelector("#btn-switch"),
perMonth = [8, 12, 16, 24, 36];


slider.addEventListener("input", function() {

    const sliderValue = parseInt(slider.value)
    this.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${slider.value*25}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`;

    updateData(sliderValue)

});


btnSwitch.addEventListener("click", ()=>{

    updateData(parseInt(slider.value))
})



function updateData(value){

    contentPaveViews.textContent = `${pageViews[value]} PAGEVIEWS`
    if(btnSwitch.checked){

        price[0].textContent = `$${perMonth[value] * 0.75}.00`
        price[1].textContent = `$${perMonth[value] * 0.75}.00`
    }
    else{
        price[0].textContent = `$${perMonth[value]}.00`
        price[1].textContent = `$${perMonth[value]}.00`
    }
    
}