var form = document.getElementById("main");
form.addEventListener("submit", addtoLocal);

function addtoLocal(e){ 
    e.preventDefault();
    let Name = document.getElementById("username");
    let Email = document.getElementById("mail");
    let PhoneNo = document.getElementById("number")

    let obj = { name:`${Name.value}`, email:`${Email.value}`, phoneno:`${PhoneNo.value}` }
    //localStorage.setItem(obj.email, JSON.stringify(obj))

    axios.post("https://crudcrud.com/api/d15816219ce94d9ca86b351c2e6cc047/AppointmentData",obj)
    .then((res)=>{
       showUseronScreen(res.data) 
})
.catch((err)=>{console.log(err)})


    Name.value=""
    Email.value=""
    PhoneNo.value=""

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/d15816219ce94d9ca86b351c2e6cc047/AppointmentData")
    .then((res)=>{
        for(var i=0; i<res.data.length; i++){
            showUseronScreen(res.data[i]);
        }
    })
    .catch((err)=>{
        console.log(err);
    })
})

     function  showUseronScreen (obj){

        const parentnode = document.getElementById("item");
        parentnode.style.textAlign="center"

     const childHTML = `<li id = "${obj._id}">${obj.name}${obj.email} ${obj.phoneno}
     <button onclick = editUser('${obj._id}') class ='edited' id='edit'>edit</button>
     <button onclick = deleteuser('${obj._id}') class ='deleted' id='delete'>delete</button>
     </li>`
     parentnode.innerHTML += childHTML
 }
 
 function deleteuser(userid)
 {
 
  axios.delete(`https://crudcrud.com/api/d15816219ce94d9ca86b351c2e6cc047/AppointmentData/${userid}`)
  .then((res) => {
      removeitemfromscreen(userid)
 
  })
  .catch(err => console.error(err));
 };
 
 
 
 
 function removeitemfromscreen(userid)
 {
  const parentnode=document.getElementById('item');
  const childnode=document.getElementById(userid);
  if(childnode)
  {
  parentnode.removeChild(childnode);
  }
 
 
 }
 
 function editUser (userid){
     axios.get(`https://crudcrud.com/api/d15816219ce94d9ca86b351c2e6cc047/AppointmentData/${userid}`)
     .then((res) => {
 
         deleteuser(userid)
 
         Name.value = `${res.data.name}`;
         Email.value = `${res.data.email}`;
         PhoneNo.value = `${res.data.phoneno}`
 
     })
     .catch((err)=>console.log(err))
 }



 //----------------------------------------------------------------------------------------------//

// //fetch the unodered list <ul>//
    // var unodlist = document.getElementById("item");
    // //create new list// 
    // var newlist = document.createElement("li");
    // //give the text to the newlist//
    // newlist.textContent += Detail.name + '---' + Detail.email + '---' + Detail.phoneNo

    //  //create a delete btn//
    //  var deleteBtn = document.createElement("button");
    //  deleteBtn.type = "button";
    //  deleteBtn.value = "Delete"
    //  deleteBtn.innerHTML = "Delete"
    //  //deleteBtn.appendChild(document.createTextNode("Delete"))
    //  //apply onclick function to btn//
    //  deleteBtn.onclick = () => {
    //      localStorage.removeItem(Detail.email)
    //      unodlist.removeChild(newlist);

    //  }
    //  //create new Edit button //
    //  var Edit = document.createElement("button");
    //  Edit.type = "button";
    //  Edit.value = "Edit";
    //  Edit.appendChild(document.createTextNode("Edit"));

    //  //apply onclick on Edit button//
    //  Edit.onclick = () => {
    //     localStorage.removeItem(Detail.email);
    //     unodlist.removeChild(newlist);
    //     //onClick on edit it will popup on input boxes//
    //     document.getElementById("name").value = Detail.name;
    //     document.getElementById("email").value = Detail.email;
    //     document.getElementById("number").value = Detail.phoneNo;
    //  }
    //      newlist.appendChild(Edit); 
    //      newlist.appendChild(deleteBtn);
    //      unodlist.appendChild(newlist); 