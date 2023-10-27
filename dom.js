const form = document.querySelector("#form");
console.log(form)

const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    //grab the text input
    //grab ALL the h2s
    h2s: document.querySelectorAll("h2"),
    lastName: document.querySelector(".last-name"),
    h3s: document.querySelectorAll("h3"),
    age: document.querySelector(".age"),
    container: document.querySelector(".container"),

};


DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach((el)=> el.textContent = DOMSelectors.firstName.value)

function section(){
    DOMSelectors.container.insertAdjacentHTML("afterbegin", 
    `<div class="section">
    <button class = "remove"></button>
    <h1> ${DOMSelectors.firstName.value}</h1>
    <img src="" alt="">
    <p></p>
</div>`)}
   section()
});




//run function to add card and return values


//function card(DOMSelectors){
    //return DOMSelectors.value;
  //  };
    
    function backgroundandtext(background, text) {
       background.style.backgroundcolor = "pink";
       text.textContent = "big pink box?";
       text.style.fontsize = "40px";}
   //card.button("click", function () {
   //    backgroundandtext(card.box, card.text);
 //});