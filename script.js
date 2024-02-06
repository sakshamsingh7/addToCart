var ta = document.querySelector("table");

//accessing right side buttons
var addbtn = document.querySelector("#add");
var skbtn = document.querySelector("#skip");
//left side total
var totalamt = document.querySelector(".amount");
//accessing  div elemnt value
// var rightname = document.querySelector(".name").innerText;
// var righcost = parseInt(document.querySelector(".cost").innerText, 10);
// Creating array to store all images from the div
var Div = document.getElementsByClassName("pic");
var arrDiv = Array.from(Div);

//

//

var skip=0;
skbtn.addEventListener("click",function(){
   

    arrDiv[skip].style.display = "none";

  // Increment skip to move to the next element
  skip++;

  // If skip exceeds the array length, reset it to 0
  if (skip>= arrDiv.length) {
    skip = 0;
  }

  // Set the display property to "block" for the next element
  arrDiv[skip].style.display = "block";
    
});
          
var count = 0;

///////////

addbtn.addEventListener("click", function () {
  var tr = document.createElement("tr");
  if (count == arrDiv.length) {
    count = 0;
  } else {
    for (var i = 0; i < arrDiv.length; i++) {
      if (count == i) {
        // Set the display property to "block" for the current element
        arrDiv[i].style.display = "block";

        var nameElement = arrDiv[i].querySelector(".name");
      
        var costElement = arrDiv[i].querySelector(".cost");
        //
        //updating total
        //
        var curramt=parseInt(totalamt.innerText, 10)
        totalamt.innerText=curramt+parseInt(costElement.innerText, 10);

        // Check if nameElement and costElement are not null before accessing properties
        if (nameElement && costElement) {
          tr.innerHTML += `
          <td>${i}</td>
          <td>${nameElement.innerText}</td>
          <td>${parseInt(costElement.innerText, 10)}</td>
        `;

          // Append the row to the target element (ta)
          ta.appendChild(tr);
        }
      } else {
        // Set the display property to "none" for other elements
        arrDiv[i].style.display = "none";
      }
      
    }
  }
  count++;
  
  // skip++;
  // if (skip >= arrDiv.length) {
  //   skip = 0;
  // }
});


