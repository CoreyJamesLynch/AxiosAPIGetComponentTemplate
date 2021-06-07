const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
const addShow = document.querySelector('#addShow');

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (!addShow.childNodes[0]) {
    getShows();
  } else {
    removeShows();
    getShows();
  }
});

const displayShows = (showImage) => {
  const newShow = document.createElement('img');
  newShow.src = showImage;
  addShow.append(newShow);
};

const removeShows = () => {
  while(addShow.lastElementChild){
    addShow.removeChild(addShow.lastElementChild)
  }
};

const getShows = async () => {
  try {
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchInput.value}`);

    for (show in response.data) {
      const showImageMed = response.data[show].show.image.medium;
      if (showImageMed) displayShows(showImageMed);
    }
  } catch (error) {
    console.log("Something went wrong, here's the error", error);
  }
};
// Remove posters from previous searches on each new search.
