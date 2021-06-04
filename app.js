const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
const addShow = document.querySelector('#addShow');

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (!addShow.childNodes[0]) {
    displayShows();
  } else {
    removeShows(addShow.childNodes[0]);
    displayShows();
  }
});

const displayShows = () => {
  const newShow = document.createElement('li');
  newShow.append(searchInput.value);
  addShow.append(newShow);
};

const removeShows = (shows) => {
  shows.remove();
};

// when new value is appended to addShow, removes the previous elements
