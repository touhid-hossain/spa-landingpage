// Initiating Nav_menu
const navBtn = document.getElementById("nav_btn")
const navMenu = document.querySelector(".navbar");

// Making_function
 function menuOpen (e) {
    navMenu.classList.toggle("navbar_menu-active")
    navBtn.classList.toggle("navbar_burger-button_active")
    console.log(e);
}

// Run the function
navBtn.addEventListener('click', menuOpen);


// Email Validation
function emailValidate() {
    var inputText = document.getElementsByTagName("input")[0].value;
    var fetch = /\S+@\S+\.\S+/.test(inputText);
  
    if (fetch) {
      document.getElementById("validationText").style.visibility = "hidden";
      document.getElementById("email").style.border = '2px solid transparent';
    } else {
      document.getElementById("validationText").style.visibility = "visible";
      document.getElementById("email").style.border =
        "2px solid hsl(0, 94%, 66%)";
    }
  }



  const links = document.querySelectorAll(".header ul a");

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }
  
  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
  
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }
