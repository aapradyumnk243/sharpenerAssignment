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
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[3]);
li[4].textContent = "Hello 2";
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';
li[4].style.fontWeight = 'bold';
for(var i=0;i < li.length;i++){
    li[i].style.backgroundColor = '#f4f4f4';

}
