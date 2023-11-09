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
    img: document.querySelector(".img"),
    container: document.querySelector(".container"),
button: document.getElementById("btn"),
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
    <h2> ${DOMSelectors.lastName.value}</h2>
    <img src= "${DOMSelectors.img.value}" alt="img" class="img"</h3>
    <p></p>
</div>`)}
   section()
});

//function remove(){
 //   let buttons = document.querySelectorAll("remove");
 //   buttons.forEach((remove));
  //  btn.addEventListener("click", function (remove) {
 //       console.log(remove.target.parentElement);
  //  })
//};

function removecard(){
    document.querySelectorAll(".remove").forEach((button) => {
        button.addEventListener("click", function(event){
            event.preventDefault();
            event.target.parentelement.remove();
        });
    });
}
removecard()
//clear input boxes after submit,, make value nothing

function clearfields() {
DOMSelectors.firstName.value ="";
DOMSelectors.lastName.value ="";
DOMSelectors.img.value ="";

}
clearfields()