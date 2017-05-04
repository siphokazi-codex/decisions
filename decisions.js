//declaring my variables global.
var myIndex = 0;
var minutes = 0;

//declare my buttons from html file
var calculate = document.querySelector(".calculate");
var clear = document.querySelector(".clear");

//declaring my textboxes from html file
var prepare = document.querySelector("#prepare");
var work = document.querySelector("#work");
var job = document.querySelector("#job");
var working = document.querySelector("#working");
var dinner = document.querySelector("#dinner");
var kids = document.querySelector("#kids");
var sleep = document.querySelector("#sleep");
var activity = document.querySelector("#activity");
var hours = document.querySelector("#hours");
var remaining = document.querySelector("#remaining");

//declaring textArea variable
var displayArea = document.querySelector("#displayArea");

//slideshow for my images
function movePictures(){
    var i;
    var x = document.getElementsByClassName("slideShow");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(movePictures, 5000); // Change image every 3 seconds
}
movePictures();

//Function to add my activities
function addActivity () {

    if (prepare.value !=="" || work.value !=="" || job.value !=="" || working.value !=="" || dinner.value !=="" || kids.value !=="" || sleep.value !=="") {
    var  sum = +prepare.value + +work.value + +job.value + +
      working.value + +dinner.value + +kids.value + +sleep.value;
    }
    activity.innerHTML = sum;

    minutes = sum / 60;
}

//Function to clear all text fields.
function clearTextFields() {
  prepare.value = "";
  work.value = "";
  job.value = "";
  working.value = "";
  dinner.value = "";
  kids.value = "";
  sleep.value = "";
  activity.value = "";
  hours.value = "";
  remaining.value = "";
}

//Function to calculate the hours remaining from all activities done
function addHours() {

  //call my activities function
  addActivity();
//  minutes();
  //declaring variables
  var dayHours = 24;
  var remainingHrs = dayHours - minutes;

  //display the outputs on the hours and remaining textboxes
  hours.innerHTML = dayHours;
  remaining.innerHTML = remainingHrs;

  if (sleep.value < 480 ) {
    displayArea.innerHTML = "You need to manage your time effectively.  You need a 8 hour sleep, to get more rest!";
  }
  if (remaining.value <= 0 ) {
    displayArea.innerHTML = "You need to manage your time spent on your activities, plan your day effectively";
  }
}

//Event Listeners for textboxes to add values on change
prepare.addEventListener("change", addActivity);
work.addEventListener("change", addActivity);
job.addEventListener("change", addActivity);
working.addEventListener("change", addActivity);
dinner.addEventListener("change", addActivity);
kids.addEventListener("change", addActivity);
sleep.addEventListener("change", addActivity);
activity.addEventListener("change", addActivity);

//Event Listener for my buttons
calculate.addEventListener("click", addHours);
clear.addEventListener("click", clearTextFields);
