

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * Hide the option for buy, sell and rent list
 */


 $(document).ready(function(){

        $(".hide-on-page-load").hide();
        $(".hide-on-page-load2").hide();

        $(".sell-buy-rent").click(function(){
            $(".status").hide();
            $(".hide-on-page-load2").hide();
            $(".hide-on-page-load").show()
     });

        $(".close").click(function(){
            $(".hide-on-page-load").hide();
            $(".hide-on-page-load2").hide();
            $(".status").show()
       });

        $("#login").click(function(){
            $(".status").hide();
            $(".hide-on-page-load2").show();
            $(".hide-on-page-load").hide()
     });

       $(".close2").click(function(){
            $(".hide-on-page-load").hide();
            $(".hide-on-page-load2").hide();
            $(".status").show()
       });
        console.log("I am working")

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
});

// code for login

function onBlurOnFocus(input, targeElement) {
  input.onfocus = (e) => {
    e.target.previousElementSibling.classList.toggle("text-primary");
    targeElement && targeElement.classList.toggle("text-primary");
  };
  input.onblur = (e) => {
    e.target.previousElementSibling.classList.toggle("text-primary");
    targeElement && targeElement.classList.toggle("text-primary");
  };
}

const email = document.querySelector("input[type=email]");
  // Example starter JavaScript for disabling form submissions if there are invalid fields
      (function () {
        "use strict";

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll(".needs-validation");

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach(function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
              }

              form.classList.add("was-validated");
            },
            false
          );
        });
      })();