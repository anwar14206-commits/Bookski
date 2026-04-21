var addpopupbutton=document.getElementById("add-popup-button")
var overlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popup-box")
var popupcancelbutton=document.getElementById("cancel-button")
addpopupbutton.addEventListener("click",function(event){
    overlay.style.display="block"
    popupbox.style.display="block"
})
popupcancelbutton.addEventListener("click",function(event){
    overlay.style.display="none"
    popupbox.style.display="none"

})
var bookcontainer=document.querySelector(".book-container")
var addbutton=document.getElementById("add-button")
var booktitleinput=document.getElementById("book-title-input")
var authorinput=document.getElementById("author-input")
var descriptioninput=document.getElementById("description-input")
addbutton.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div")
    div.setAttribute("class","container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <p>${descriptioninput.value}</p>
    <h4>-by ${authorinput.value}</h4>
    <button onclick="deletebook(event)">DELETE</button>`
    bookcontainer.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"


})
function deletebook(event){
    event.target.parentElement.remove()
}
