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
  newShow.append(getShows(searchInput.value));
  addShow.append(newShow);
};

const removeShows = (shows) => {
  shows.remove();
};

const getShows = async (show) => {
  try {
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${show}`);
    console.log('Success, here is your request', response);
  } catch (error) {
    console.log("Something went wrong, here's the error", error);
  }
};
// use input value to query api
