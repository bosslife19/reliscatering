
  

function navSlide (){
    var navMenu = document.querySelector(".nav-menu");
    console.log(navMenu);
    var toggleButton = document.querySelector(".togglers");
    console.log(toggleButton);
    var menu = document.querySelectorAll(".nav-menu li");
    console.log(menu);
    
    
    toggleButton.addEventListener("click", function(){
        navMenu.classList.toggle("active");
        toggleButton.classList.toggle("transform");
    });
    
}
navSlide();
const menu = () => {
  var item = document.getElementById("menus");
  console.log(item);
  var navMenu = document.querySelector(".nav-menu");
  console.log(navMenu);
  var toggleButton = document.querySelector(".togglers");
  item.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    toggleButton.classList.toggle("transform");
  });
}
menu();



