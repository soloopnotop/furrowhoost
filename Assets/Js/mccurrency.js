// currency for premium minecraft plans

function updatePlans(location) {
    const plans = {
      "USD": ["$1.18", "$2.35", "$3.53", "$4.70", "$5.87", "$7.04", "$9.50", "$11.73", "$14.07", "$18.18"],
       "INR": ["₹100", "₹200", "₹300", "₹400", "₹500", "₹600", "₹800", "₹1000", "₹1200", "₹1550"]

    };

    const priceElements = document.querySelectorAll(".price");
    if (plans[location]) {
        priceElements[0].innerHTML = plans[location][0] + "<span>/month</span>";
        priceElements[1].innerHTML = plans[location][1] + "<span>/month</span>";
        priceElements[2].innerHTML = plans[location][2] + "<span>/month</span>";
        priceElements[3].innerHTML = plans[location][3] + "<span>/month</span>";
        priceElements[4].innerHTML = plans[location][4] + "<span>/month</span>";
        priceElements[5].innerHTML = plans[location][5] + "<span>/month</span>";
        priceElements[6].innerHTML = plans[location][6] + "<span>/month</span>";
        priceElements[7].innerHTML = plans[location][7] + "<span>/month</span>";
        priceElements[8].innerHTML = plans[location][8] + "<span>/month</span>";
        priceElements[9].innerHTML = plans[location][9] + "<span>/month</span>";
        
    }
}
document.addEventListener("DOMContentLoaded", function () {
const buttons = document.querySelectorAll(".location-btn");

if (buttons.length > 0) {
buttons[0].classList.add("active"); 
}

buttons.forEach(button => {
button.addEventListener("click", function () {

    buttons.forEach(btn => btn.classList.remove("active"));
    
  
    this.classList.add("active");
});
});
});

