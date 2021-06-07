const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
const addShow = document.querySelector('#addShow');

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (!addShow.childNodes[0]) {
    getShows();
  } else {
    removeShows(addShow.childNodes[0]);
    getShows();
  }
});

const displayShows = (showImage) => {
  console.log("The current show image is", showImage)
  const newShow = document.createElement('li');
  newShow.append(showImage);
  addShow.append(newShow);
};

const removeShows = (shows) => {
  shows.remove();
};

const getShows = async () => {
  try {
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchInput.value}`);

    for(show in response.data){
      const showImageMed = response.data[show].show.image.medium;
      const showName = response.data[show].show.name;
      console.log(`Here is the image for ${showName} ->`, showImageMed)
      displayShows(showImageMed)
    }
  } catch (error) {
    console.log("Something went wrong, here's the error", error);
  }
};
// Display data unique to user input to the page for the user to see
