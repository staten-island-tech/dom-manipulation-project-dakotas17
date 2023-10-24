const form = document.querySelector("#form");
console.log(form)

const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    //grab the text input
    //grab ALL the h2s
    h2s: document.querySelectorAll("h2"),
}; 
const LastName = {
    form2: document.querySelector("#form2"),
    firstName: document.querySelector(".last-name"),
    h3s: document.querySelectorAll("h3"),
}; 
const Age = {
    form3: document.querySelector("#form3"),
    firstName: document.querySelector(".age"),

    h4s: document.querySelectorAll("h4"),
};


DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach((el)=> el.textContent = DOMSelectors.firstName.value)
});


const card = {
button: document.getElementById("btn"),
text: document.querySelector("#text"),
box: document.getElementById("box"),
points: document.querySelectorAll(".point"), //node list
};

function backgroundandtext(background, text) {
    background.style.backgroundcolor = "pink";
    text.textContent = "big pink box?";
    text.style.fontsize = "40px";
}
card.button.addEventListener("click", function () {
    backgroundandtext(card.box, card.text);
});