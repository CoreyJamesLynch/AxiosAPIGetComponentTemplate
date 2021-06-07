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

const displayShows = (showImage, showInfo) => {
  const showSource = document.createElement('a');
  showSource.href = showInfo;
  showSource.target = 'blank'
  const newShow = document.createElement('img');
  newShow.src = showImage;
  showSource.append(newShow);
  addShow.append(showSource);
};

const removeShows = () => {
  while (addShow.lastElementChild) {
    addShow.removeChild(addShow.lastElementChild);
  }
};

const getShows = async () => {
  try {
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchInput.value}`);

    for (show in response.data) {
      const showImageMed = response.data[show].show.image.medium;
      const showInfo = response.data[show].show.url;
      displayShows(showImageMed, showInfo);
    }
  } catch (error) {
    console.log("Something went wrong, here's the error", error);
  }
};
// Have each link open in a new tab
