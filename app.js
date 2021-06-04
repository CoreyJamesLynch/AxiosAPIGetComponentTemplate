const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
const addShow = document.querySelector('#addShow')

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const newShow = document.createElement('li')
  newShow.append(searchInput.value)
  addShow.append(newShow)
  console.log(searchInput.value);
});

// append input values as LI elements by adding blank UL to HTML