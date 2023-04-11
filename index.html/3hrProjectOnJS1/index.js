let form = document.getElementById("main");

form.addEventListener("submit", click);

function click (e){
    e.preventDefault();

    //in below code pick the data from input box what was user entered;
    var expenseAmmount = e.target.ammount.value;
    var description = e.target.info.value;
    var category = e.target.choice.value;

//in next code grab all the data in one object..the data has user entered in input box;
const obj = {
    expenseAmmount,
    description,
    category
}

//here we put this data inside localStorage;
localStorage.setItem(obj.expenseAmmount, JSON.stringify(obj));

//----------------------------------------------------------------------------------------------------------------------//

//Here call a function for show data on browser screen//
Showonscreen(obj);

}

//create a show on screen function;
 function Showonscreen(obj) {
    //catch the div to show this data on screen;
    var div = document.getElementById("grab")

    //create a list//
    var list = document.createElement("li");

    //in that new list put the obj.wala data;
    list.textContent += obj.expenseAmmount + "   " + obj.description + "   " + obj.category
    list.style.backgroundColor = "lightpink";

//----------------------------------------------------------------------------------------------------------------------//

 //create a delete button;
    var DeleteBtn = document.createElement("button");
    DeleteBtn.textContent = "Delete"
    DeleteBtn.type="delete"
    DeleteBtn.value = "delete"
    //DeleteBtn.style.float = "right"

    //inside the showonscreen function...create a function for delete ..and give property of delete;
    DeleteBtn.onclick=()=>{
        localStorage.removeItem(obj.expenseAmmount)
        div.removeChild(list)
    }

//----------------------------------------------------------------------------------------------------------------------//

// Here create a edit button // 
    var Editbtn = document.createElement("button");
    Editbtn.textContent = "Edit";
    Editbtn.type = "Edit"
    Editbtn.value = "edit"
    Editbtn.onclick=()=>{
        localStorage.removeItem(obj.expenseAmmount)
        div.removeChild(list)

        //this is the second property of edit btn//
        e.target.ammount.value = obj.expenseAmmount
        e.target.info.value = obj.description
        e.target.choice.value = obj.category

    }

    //delete btn put inside the list;
    list.appendChild(DeleteBtn);

    //Edit btn put inside the list;
    list.appendChild(Editbtn);

     //put the list inside div inshort the list push in browser screen
    div.appendChild(list);

}