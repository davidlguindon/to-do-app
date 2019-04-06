function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

       addToDoForm.addEventListener('submit', (event) => {
         event.preventDefault();

         //grabs the value from the dom, assigns it a js variable.
         let title = newToDoText.value;

         console.log('Title: ' + title);

         //makes an li
         let newLi = document.createElement('li');

         //make a button
         let addDeleteButton = document.createElement('button');
         addDeleteButton.textContent = 'Delete';
         addDeleteButton.className += 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent';
         addDeleteButton.addEventListener('click', function(event){
           console.log(event)
           toDoList.removeChild(this.parentElement);
         })

     if(newToDoText.value !== ''){
         newLi.textContent = title + ' ';
         newLi.className += 'listWithButton';
         newLi.appendChild(addDeleteButton);
         toDoList.appendChild(newLi);
         newToDoText.value = '';
       };
       });

       // <!-- Deletable Chip -->
       // <span class="mdl-chip mdl-chip--deletable">
       //     <span class="mdl-chip__text">Deletable Chip</span>
       //     <button type="button" class="mdl-chip__action"><i class="material-icons">cancel</i></button>
       // </span>

      // document.getElementsByClassName('list');
};
window.onload = function() {
   onReady();
};
