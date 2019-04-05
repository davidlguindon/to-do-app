function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

       addToDoForm.addEventListener('submit', (event) => {
         event.preventDefault();
         console.log(this);

         //grabs the value from the... no clue.
         let title = newToDoText.value;

         console.log('Title: ' + title);

         //makes an li
         let newLi = document.createElement('li');
         //make a button
         let deleteButton = document.createElement('button');
         deleteButton.textContent = 'Delete';
         deleteButton.addEventListener('click', function(event){
           console.log(event)
           toDoList.removeChild(this.parentElement);
         })


         newLi.textContent = title;
         newLi.appendChild(deleteButton);
         toDoList.appendChild(newLi);
         console.log(newLi);
         newToDoText.value = '';
       });
};
window.onload = function() {
   onReady();
};
