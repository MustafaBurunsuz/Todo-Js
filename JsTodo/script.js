// UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll= document.querySelector("#btnDeleteAll");
const taskList = document.querySelector('#task-list');




eventListeners();
function eventListeners(){
    //submit event
form.addEventListener('submit',addNewItem)

//delete an item

taskList.addEventListener('click', deleteItem);

//delete all items
btnDeleteAll.addEventListener('click',deleteallitems);



}


function addNewItem(e){

        if(input.value ===''){
                alert('add new item');

        }
        // create li
        const li = document.createElement('li');
        li.className='list-group-item list-group-item-secondary' ;
        li.appendChild(document.createTextNode(input.value));
        
        // create a
        const a= document.createElement('a');
        a.className='delete-item float-right';
        a.setAttribute('href','#');
        a.innerHTML='<i class="fas fa-times"></i>';

            //add a to li
        li.appendChild(a);
        //add li to ul

        taskList.appendChild(li);

      // clear input
      input.value='';


        console.log(input.value);
    e.preventDefault(); 

}
//delete item
function deleteItem(e) {
if(e.target.className='fas fa-times'){

e.target.parentElement.parentElement.remove();


}
e.preventDefault();

}
function deleteallitems(e){
    taskList.innerHTML='';
    e.preventDefault();
    

}