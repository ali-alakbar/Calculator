
// ========================= Start Appearing List Icon When Window Size Decreased =========================
// ===== Calling The List Icon =====
const list = document.querySelector(".list");

// ===== Calling the Bar of Links =====
const navi = document.querySelector(".navi");

list.addEventListener(
    "click",

(eo) => {
    navi.classList.toggle("show");
}

);
// ========================= Start Appearing List Icon When Window Size Decreased =========================


// ========================= Start Arthimitic Operations =========================

// ===== Calling All The Inputs Such As Numbers and Symbols =====
const inputs = document.querySelectorAll("[type=button]");
// ===== Calling The Container of The Inputs =====
const calcContianer = document.querySelector(".calc-contianer");
// ===== Calling Where the Result Will Be Shown =====
const text = document.getElementById("display");

calcContianer.addEventListener("click",

(eo) => {


    switch (eo.target.className) {
      case "forCss element less":
        text.value += "<";
        break;
      case "forCss element zeros":
        text.value += "00";

        break;

      case "num9 forCss element":
        text.value += "9";
        break;

      case "num8 forCss element":
        text.value += "8";

        break;
      case "num7 forCss element":
        text.value += "7";
        break;

      case "num6 forCss element":
        text.value += "6";

        break;
      case "num5 forCss element":
        text.value += "5";

        break;
      case "num4 forCss element":
        text.value += "4";
        break;

      case "num3 forCss element":
        text.value += "3";
        break;

      case "num2 forCss element":
        text.value += "2";
        break;
      case "num1 forCss element":
        text.value += "1";

        break;

      case "num0 element":
        text.value += "0";
        break;
      case "comma element":
        text.value += ".";

        break;
      case "forCss element division":
        text.value += "/";

        break;

      case "sub forCss element":
        text.value += "-";

        break;

      case "multi forCss element":
        text.value += "*";
        break;
      case "add forCss element":
        text.value += "+";

        break;

      default:
    }

}

    
);
// ========================= End Arthimitic Operations =========================














// ====================== Start Scrolling Effect ====================== 

// This section will appear the dissapeared elements once you scrool 

// Call the paragraph
const myDetalis = document.getElementById("myDetalis");

// Call the section as group or array
const section = document.querySelectorAll(".section");

window.addEventListener('scroll',
(e) => {

      if (window.pageYOffset >= 600) {
        myDetalis.classList.add("active");
      }

      section.forEach( (e) => {
              
                if (window.pageYOffset >= 1200) {
                  e.classList.add("active");
                }

      });



}


)
// ====================== End Scrolling Effect ====================== 


