import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

// Fetch characters from a specific page

async function fetchCharacters(page) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await response.json();
  console.log(data);
  const characters = data.results;

  // maxpage update
  maxPage = data.info.pages;

  cardContainer.innerHTML = "";

  characters.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.append(card);
  });

  // pagination update
  pagination.innerHTML = `Page ${page} of ${maxPage}`;
}

// initial fetch
fetchCharacters(page);

// Event listeners for prev and next buttons
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters(page);
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters(page);
  }
});
