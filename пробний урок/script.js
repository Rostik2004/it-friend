const nameInput = document.getElementById('name-input');
const addButton = document.getElementById('add-button');
const nameList = document.getElementById('name-list');

addButton.addEventListener('click', () => {
  const name = nameInput.value.trim();

  if (name) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${name}</span><button class="delete-button">X</button>`;
    nameList.appendChild(listItem);
    nameInput.value = '';

    const deleteButton = listItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      listItem.remove();
    });
  }
});
