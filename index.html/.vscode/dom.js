// EXAMINE THE DOCUMENT OBJEST//

// aderTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = "solid 3px #000";
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1])
// items[1].textContent= 'Hello 2';
// item[1].style.fontweight= 'bold';//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent="Hello";con
// // console.log(document.forms[0]);
// //console.log(document.links);
// console.log(document.images);


// GETELEMENTEDBYID //
// console.log(document.getElementById('header-title'));
// var headertitle=  document.getElementById('header-title');
// var header=  document.getElementById('main-header');
// console.log(headertitle);
// headertitle.textContent="Hello";
// headertitle.innerText= "Goodbye";
// console.log(headertitle.textContent);
// console.log(headertitle.innerText);

// GETELEMENTBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[3]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// items[4].style.backgroundColor = 'yellow';
// for(var i=0;i < items.length;i++){
//     items[i].style.backgroundColor = '#f4f4f4';

// }
//GETELEMENTBYTAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[3]);
// li[4].textContent = "Hello 2";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// li[4].style.fontWeight = 'bold';
// for(var i=0;i < li.length;i++){
//     li[i].style.backgroundColor = '#f4f4f4';

// }

//QUERYSELECTOR//
// var Header = document.querySelector('#main-header');
// Header.style.borderButton = 'solid 4px #ccc';

// var input = document.querySelector("input");
// input.value ="Hello World ";

// var submit = document.querySelector('input[type = "submit"]');
// submit.value ="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = "red";

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = "blue";

// var seconditem = document.querySelector(".list-group-item:nth-child(2)");
// seconditem.style.color = "coral";

// var thirditem = document.querySelector(".list-group-item:nth-child(3)");
// thirditem.style.color = "coral";


//QUERYSELECTORALL//
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Hello";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for(var i=0;i< odd.length; i++){
//     odd[i].style.backgroundColor='#ffffff';
//     even[i].style.backgroundColor='green';
// }



//TRANSVERSING THE DOM//
//var itemList = document.querySelector('#items');
//PARENTNODE
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);
//PARENTELEMENT
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

//CHILDNODES
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //FIRSTCHILD
// console.log(itemList.firstChild);
// //FIRSTELEMENTCHILD
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="Hello 1";



// //LASTCHILD
// console.log(itemList.lastChild);
// //LASTELEMENTCHILD
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="Hello 4";

// //NEXTSIBLING
// console.log(itemList.nextSibling);
// //NEXTSIBLING
// console.log(itemList.nextElementSibling);

//PREVIOUssibling
// console.log(itemList.previousSibling);
// //PREVIOUSELEMENTSIBLINGS
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="green";


//CREATEELEMENT

// create a div 
//var newDiv = document.createElement("div");

//Add class
//newDiv.className= "Hello";

//Add id
//newDiv.id = "hello1"

//Add attr
//newDiv.setAttribute('title',"Hello Div");

// create text node
//var newDivtext = document.createTextNode("Hello world");

//Add text to div
//newDiv.appendChild(newDivtext);

//var container = document.querySelector("header .container");
//var h1 = document.querySelector("header h1")

//console.log(newDiv);

//newDiv.style.fontSize="30px";

//container.insertBefore(newDiv,h1);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
 e.preventDefault();

 //console.log(1);


// Get input value
var newItem = document.getElementById('item').value;

// Create new li element
var li = document.createElement('li');
// Add class
li.className = 'list-group-item';
// Add text node with input value
li.appendChild(document.createTextNode(newItem));
//console.log(li);
// Create del button element
var deleteBtn = document.createElement('button');

// Add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

// Append text node
deleteBtn.appendChild(document.createTextNode('X'));

// Append button to li
li.appendChild(deleteBtn);

// Append li to list
itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

