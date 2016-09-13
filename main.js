$(document).ready( () => {
  let todos = [];
  let itemId = 0;
  //ALL DONE IN es6
  //if user clicks item it gets marked complete or not complete
  //have a visual indicator of complete
  const loadTodos = () => {
    $('#todos').empty();
    for(let todo of todos) {
      let li = `<li data-item-id="${todo.id}">
                <span class="item"> - ${todo.name}</span>
                <button class="delete_user">Delete</button></li>`;
      $('#todos').append(li);
    }
  }


  $('#new').on('click', () => {
    let name = $('#new_item').val();
    let id = ++itemId;
    let complete = false;
    let todo = {name, id, complete}
    todos = [todo, ...todos];
    $('#new_item').val('');
    loadTodos();
  });

  // $(document).on('click', '.item', (e) => {
  //   let id = e.target.id
  //   let item = $(e.target).parent().data('item-id');
    // $(e.target).css({'text-decoration': 'line-through'});
  //   console.log(item);
  // });

  $(document).on('click', '.item', (e) => {
    $(e.target).css({'text-decoration': 'line-through'});
    // let id = e.target.id
    let itemId = $(e.target).parent().data('item-id');
    todos.forEach( todo => {
      if (todo.id === parseInt(itemId)) {
        let todos = { ...todo, complete: !todo.complete }
        console.log(todos);
          if (todo.complete === true) {
            console.log("It was true");
          } else {
            console.log("It was false");
          }
      }
      return todo;
      // $(e.target).css({'text-decoration': 'line-through'});
      console.log(todos);
    });
    loadTodos();
  });
  //BONUS
  //ability to delete todos
  //filter todos by complete / imcomplete / all
  //edit todo name

  loadTodos();
});
