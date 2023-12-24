// function myFunction() {
//     // Get the value of the input field with id="numb"
//     let x = document.getElementById("numb").value;
//     // If x is Not a Number or less than one or greater than 10
//     let text;
//     if (isNaN(x) || x < 1 || x > 10) {
//       text = "Input not valid";
//     } else {
//       text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
//

// document.getElementById("Btn").addEventListener("click", displayDate);

//   document.getElementById("demo").innerHTML = Date();
// }

// document.getElementById("Btn").addEventListener ("click", function()
// {
//   alert ("Hello world")
// })
var x = document.getElementById("Btn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);


function myFunction() {
    document.getElementById("demo").innerHTML += "Moused over!<br>";
  }
  
  function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>";
  }
  
  function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Moused out!<br>";
  }