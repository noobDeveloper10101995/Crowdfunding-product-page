//Selectors

const navButton = document.querySelector("[data-navBtn]") //hamburger btn
      primaryNavigation = navButton.nextElementSibling;  //
      

console.log(primaryNavigation)
//Events

navButton.addEventListener("click", navButtonToggle)


//Functions

function navButtonToggle(ev){
  navButton.classList.toggle("active")
  primaryNavigation.classList.toggle("expand")
}