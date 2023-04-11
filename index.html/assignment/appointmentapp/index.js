var form = document.getElementById("main");
form.addEventListener("submit", addtoLocal);

function addtoLocal(e){ 
    e.preventDefault();
    var name = e.target.username.value;
    var email = e.target.mail.value;
    var phoneNo = e.target.number.value;

    const Detail = {
        name,
        email,
        phoneNo
    }
    //localStorage.setItem(Detail.email, JSON.stringify(Detail))
    axios.post("https://crudcrud.com/api/2ca5b5fd7dc847c5bb941001c6040046/AppointmentData",Detail)
    .then((response)=>{showUseronScreen(response)})
    .catch((err)=>{console.log(err)})
    //create this name function and give obj wala parameter as value;
     //showUseronScreen(Detail);
}

function  showUseronScreen (Detail){
    //fetch the unodered list <ul>//
    var unodlist = document.getElementById("item");
    //create new list//
    var newlist = document.createElement("li");
    //give the text to the newlist//
    newlist.textContent += Detail.name + '---' + Detail.email + '---' + Detail.phoneNo

     //create a delete btn//
     var deleteBtn = document.createElement("button");
     deleteBtn.type = "button";
     deleteBtn.value = "Delete"
     deleteBtn.innerHTML = "Delete"
     //deleteBtn.appendChild(document.createTextNode("Delete"))
     //apply onclick function to btn//
     deleteBtn.onclick = () => {
         localStorage.removeItem(Detail.email)
         unodlist.removeChild(newlist);
     }
     //create new Edit button //
     var Edit = document.createElement("button");
     Edit.type = "button";
     Edit.value = "Edit";
     Edit.appendChild(document.createTextNode("Edit"));

     //apply onclick on Edit button//
     Edit.onclick = () => {
        localStorage.removeItem(Detail.email);
        unodlist.removeChild(newlist);
        //onClick on edit it will popup on input boxes//
        document.getElementById("name").value = Detail.name;
        document.getElementById("email").value = Detail.email;
        document.getElementById("number").value = Detail.phoneNo;
     }
         newlist.appendChild(Edit); 
         newlist.appendChild(deleteBtn);
         unodlist.appendChild(newlist); 
}