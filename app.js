var list=document.getElementById("list");


function addtodo(){
    var todoitem=document.getElementById("todo-item");
    var li=document.createElement('li')
    li.setAttribute("class","hey")
    var liText=document.createTextNode(todoitem.value)

    li.appendChild(liText)

var delBtn=document.createElement("button")
var delText=document.createTextNode("DELETE")
delBtn.setAttribute("class","btn")
delBtn.setAttribute("onclick","deleteItem(this)")
delBtn.appendChild(delText)

var editBtn=document.createElement("button")
var editText=document.createTextNode("EDIT")
editBtn.setAttribute("class","btnn")
editBtn.setAttribute("onclick","editItem(this)")
editBtn.appendChild(editText)


li.appendChild(delBtn)
li.appendChild(editBtn)


    list.appendChild(li)

     todoitem.value="";
    console.log(li)
}
function deleteItem(e){
    e.parentNode.remove()
}
function editItem(e){
    var val=prompt("enter updated value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=val;
}


function deleteAll(){
    list.innerHTML=""
}
