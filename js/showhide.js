(function(){

let Berry1 = document.getElementById("BerryCatering"); //pull the code from html for the title to a new variable inside of the javascript
let Berry2 = document.getElementById("BerryInfo"); //pull the paragraph text from html to javacript in the new variable
let Berry3 = document.getElementById("job1"); //pull the code from html for the identifier to a new variable declared here in javascript
Berry3.innerHTML = "&#8853; "; //set the default shape of the shape as a plus hence starting unopened
Berry1.addEventListener("click", function(){ //add an event which will happen on click, which will change the other 2 variables for this element
  makeChange(Berry2, Berry3);}, false);

let Uni1 = document.getElementById("UniTemps");  //pull the code from html for the title to a new variable inside of the javascript
let Uni2 = document.getElementById("UniTempsInfo");  //pull the paragraph text from html to javacript in the new variable
let Uni3 = document.getElementById("job2"); //pull the code from html for the identifier to a new variable declared here in javascript
Uni3.innerHTML = "&#8853; "; //set the default shape of the shape as a plus hence starting unopened
Uni1.addEventListener("click", function(){  //add an event which will happen on click, which will change the other 2 variables for this element
  makeChange(Uni2, Uni3);}, false);

let Amber1 = document.getElementById("AmberRooms"); //pull the code from html for the title to a new variable inside of the javascript
let Amber2 = document.getElementById("AmberRoomsInfo");  //pull the paragraph text from html to javacript in the new variable
let Amber3 = document.getElementById("job3"); //pull the code from html for the identifier to a new variable declared here in javascript
Amber3.innerHTML = "&#8853; "; //set the default shape of the shape as a plus hence starting unopened
Amber1.addEventListener("click", function(){  //add an event which will happen on click, which will change the other 2 variables for this element
  makeChange(Amber2, Amber3);}, false);

let toggle = false; // on initial start up the action for toggle will be false, hence leaving it hidden
function makeChange(answer, icon){ //when the function is called it will make changes as necessary,
  if (toggle) {  //if it is currently open then it will close it
    toggle = false; //set it to closed
    answer.classList.remove("show"); //close the list and hide the paragraph again
    icon.innerHTML = "&#8853; "; //change the icon to plus again
  }
  else {
    toggle = true; //change the state of the toggle to closed
    answer.classList.add("show"); //open the list and show the paragraph again
    icon.innerHTML = "&#8854; "; //change the icon to minus
  }
};

})();
