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
LastName.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(LastName.lastName.value);
    LastName.h3s.forEach((el)=> el.textContent = LastName.last.value)
});
Age.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(Age.Age.value);
    Age.h4s.forEach((el)=> el.textContent = Age.Age.value)
});