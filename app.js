function onReady() {

  const toDoList = document.getElementById('toDoList');
  const toDoListHistory = document.getElementById('toDoListHistory');
  let toDo = [];
  let id = 0;

  function createNewToDo(){
    const NEW_TODO_TEXT = document.getElementById('newToDoText');
    if(!NEW_TODO_TEXT.value){
      return;
    }
    toDo.push({
      title: NEW_TODO_TEXT.value,
      complete: false,
      id:id
    });
    NEW_TODO_TEXT.value = '';
    // console.log(toDo);
    id++;
    console.log('testasdfa: ' + toDo[0].title);
    renderTheUI();
  }

  function renderTheUI(){
    toDoList.textContent = '';
    toDoListHistory.textContent = '';

    toDo.forEach(function(item){
      const NEW_LI = document.createElement('li');
      const NEW_LI2 = document.createElement('li');
      const CHECKBOX = document.createElement('input');
      CHECKBOX.type = 'checkbox';
      const delete_button = document.createElement('button');
      delete_button.className += 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent';
      delete_button.textContent = 'Delete';
      delete_button.addEventListener('click', event =>{
        toDo = toDo.filter(function(item){
          return item.id !== item.id;
          // return;
        })
        alert('Item ID: ' + item.id + '     ' + 'toDo ID: ' + toDo[0].id);
        renderTheUI();
      });

      NEW_LI.textContent = item.title;
      NEW_LI2.textContent = item.title;
      NEW_LI.appendChild(CHECKBOX);
      NEW_LI.appendChild(delete_button);

      toDoListHistory.appendChild(NEW_LI2);
      toDoList.appendChild(NEW_LI);
    });
  }
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
    ADD_TODO_FORM.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
    });
    renderTheUI();
  }

  window.onload = function() {
    onReady();
  };
