const body = document.querySelector("body");
const mode = document.querySelector(".mode");
const switchMode = document.querySelector(".switch-mode");

mode.addEventListener("click", () => {
    if(body.getAttribute("data-mode")=== "light") {
        body.setAttribute("data-mode", "dark");
        switchMode.setAttribute("style", "transform: translateX(70px)");
    }
    else {
        body.setAttribute("data-mode", "light");
        switchMode.setAttribute("style", "transform: translateX(0px)");
    }
});