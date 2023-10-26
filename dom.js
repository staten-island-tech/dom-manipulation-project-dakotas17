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
}

);



//run function to add card and return values

//DOMSelectors.button.addEventListener("click", function(){
//    let input = DOMSelectors.input.value;
 //   DOMSelectors.box.insertAdjacentHTML("afterbegin", {DOMSelectors});
    
//});


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