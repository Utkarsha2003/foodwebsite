const imageContainer = document.querySelector(".container");
const darkMode = document.getElementById("moon");
const lightMode = document.getElementById("sun");
const heading = document.querySelector(".heading");
const more = document.querySelector(".more");
let count = 5;
let toggle = true;
let loading;

const toggleDarkMode = () => {
    if (!toggle) {
        document.body.style.backgroundImage =
            "linear-gradient(to right, black 0%, #141414 100%)";
        heading.style.color = "whitesmoke";
        sun.style.color = "whitesmoke";
        more.style.color = "whitesmoke";
        document.getElementById("sun").style.display = "none";
        document.getElementById("moon").style.display = "block";
        toggle = true;
    } else {
        document.body.style.backgroundImage =
            "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
        heading.style.color = "black";
        sun.style.color = "black";
        more.style.color = "black";
        document.getElementById("sun").style.display = "block";
        document.getElementById("moon").style.display = "none";
        toggle = false;
    }
    console.log(toggle);
};

// Add click event listeners outside the function
darkMode.addEventListener("click", toggleDarkMode);
lightMode.addEventListener("click", toggleDarkMode);

const apiKey = "cMWnhivt_5RQHS3o1-101_akg3kjlxkqRlL_Y7n0Lnk";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const fetchPhotos = async () => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Unable to fetch photos");
        }
        const photos = await response.json();
        console.log(photos);
        photos.forEach((photo) => {
            const customHtml = `<div class="image-container">
      <a href="${photo?.links?.html}" target="_blank">
        <img
          class="imgs"
          src="${photo?.urls?.regular}"
          alt="${photo?.description}"
        />
        </a>
        </div>`;
            imageContainer.innerHTML += customHtml;
        });
    } catch (error) {
        console.error("Error fetching photos:", error);
    } finally {
        loading = false;
    }
};

fetchPhotos();

const loadMore = () => {
    more.addEventListener("click", async () => {
        if (!loading) {
            loading = true;
            more.innerHTML = "Loading...";
            count += 5;
            await fetchPhotos();
            loading = false;
            more.innerHTML = "Load More...";
        }
    });
};
loadMore();