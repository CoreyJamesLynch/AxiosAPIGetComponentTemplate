const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(searchInput.value);
});
