// CODE EXPLAINED channel

//Select the Elements
const clear = document.querySelector('.clear');
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineTHROUGH";

//Variables
let LIST = [], id;

//Show todays date
const options = {
     weekday: "long",
     month: "short",
     day: "numeric"
};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Add to do function

function addToDo(toDo, id, done, trash) {

     const item = `<li class="item">
                    <i class="fa fa-circle-thin co" job="complete" id="${id}"></i>
                    <p class="text">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                    </li>
                `;

     const position = "beforeend";

     list.innerAdjacentHTML(position, item);
}

// Add an item to the list user the enter key

document.addEventListener("keyup", function(even) {
     if(event.keyCode == 13){
          const toDo = input.value;

          //if the input isn't empty
          if(toDo){
               addToDo(toDo, id, false, false);

               LIST.push({
                    name : toDo,
                    id : id,
                    done : false,
                    trash: false
               });

               id++;
          }
          input.value = "";
     }
     });


