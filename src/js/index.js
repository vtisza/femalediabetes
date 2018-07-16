import {RandomForestClassifier} from './diabetes_model.js';

document.getElementById("predict_button").addEventListener("click", display_predicton);

function predict(features) {
    return new RandomForestClassifier().predict(features);
}

function display_predicton() {
    var features=[document.getElementById("pregnancies").value,
              document.getElementById("bloodpressure").value,
              document.getElementById("bmi").value,
              document.getElementById("age").value];
    
    var prediction=predict(features) == 1 ? "Diabetes alert" : "Possibly no diabetes";

    document.getElementById("results").innerHTML=prediction;
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}