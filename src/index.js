

// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.


const inputForm = document.querySelector('form');
// created variable named input form and set it = to <form> from dom element
inputForm.addEventListener('submit', event => {

  // added an event listener to the 'submit' submit event of the <input> element. 
  // crea 
  event.preventDefault();
    // if the event does not get explicitly handled, its default action should not be taken as it normally would be.
  const ul = document.querySelector('ul');
    // create and unordered list, and saves it to the vairiable ul
  const li = document.createElement("li");
    // creates a new list element and saves it to the vairiable "li"
  const btn = document.createElement('button');
    //creates an element button and saves it to btn vairiable
  btn.addEventListener('click', handleDeleteLi)
    // adds event listener to the btn vairiable, and pases in the 'click' event. and also handles the callback function handleDelete, to delete the btn once clicked
  btn.textContent = 'x'
    // sets the content of the button as the string x

  li.append(event.target.children[1].value)
  //appends the value of the event object to the li element
  li.appendChild(btn)
  // appends btn vairiable to li element
  ul.appendChild(li);
  // appends list element to the unordered list element
})

function handleDeleteLi (event) {

event.target.parentNode.remove()
// function that removes the li element 
} 





































