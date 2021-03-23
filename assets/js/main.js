/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function toggleBurger() {
    var element = document.getElementById("hamburger");
    element.classList.toggle("is-active");

    openNav();

    // var x = document.getElementById("topnav");
    // if (x.className === "topnav") {
    //     x.className += " responsive";
    // } else {
    //     x.className = "topnav";
    // }
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("hamburger").style.display = "none";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("hamburger").style.display = "block";
}

function flip() {
    document.getElementById("flip-box-inner").style.transform = "rotateY(180deg)";
}

function flipBack() {
    document.getElementById("flip-box-inner").style.transform = "rotateY(360deg)";
}