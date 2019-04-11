function onReady() {

  const toDoList = document.getElementById('toDoList');
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
    console.log(toDo);
    id++;
  }

  function renderTheUI(){
    toDoList.textContent = '';
    console.log('working?');

    toDo.forEach(function(item){
    const NEW_LI = document.createElement('li');
    const CHECKBOX = document.createElement('imput');
    CHECKBOX.type = 'checkbox';

    NEW_LI.textContent = toDo.title;
    NEW_LI.appendChild(CHECKBOX);

    toDoList.appendChild(NEW_LI);
    toDoListHistory.appendChild(NEW_LI);

    console.log(NEW_LI);
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
