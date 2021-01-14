let addButton = document.getElementById('addButton');
let inputField = document.getElementById('inputField');
let toDOContainer = document.getElementById('toDoContainer');
addButton.addEventListener('click',function(){
  let notes = document.createElement('p');
  let del = document.createElement('button');
  notes.classList.add('notes');
  del.classList.add('del');
  del.innerHTML ='<i class="far fa-trash-alt"></i>';
  if(inputField.value){
    notes.innerText = inputField.value;
    toDoContainer.appendChild(notes);
    toDoContainer.appendChild(del);
    inputField.value="";
  }
 del.addEventListener('click', function(){
   toDoContainer.removeChild(notes);
   toDoContainer.removeChild(del);
 })
})  