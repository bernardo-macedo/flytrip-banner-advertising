const bgImages = {
  portugal: "./img/portugal.jpg",
  netherlands: "./img/netherlands.jpg",
  france: "./img/france.jpg",
};

const countryCards = document.querySelectorAll(".card");
const header = document.querySelector("header");

countryCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    const country = card.dataset.country;

    header.style.backgroundImage = `url("img/${country}.jpg")`;

    /* Remove active class from all cards */
    countryCards.forEach((c) => {
      c.classList.remove("active");
    });

    /*Add active class to the clicked card*/
    card.classList.add("active");
  });
});
