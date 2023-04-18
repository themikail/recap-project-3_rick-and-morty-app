export function createCharacterCard(character) {
  const { image, name, status, type, episode } = character;
  const card = document.createElement("li");
  card.classList.add("card");

  card.innerHTML = `
          <img src="${image}" alt="${name}" class="card__image">
          <div class="card__content">
            <h2 class="card__name">${name}</h2>
            <p class="card__status">${status} - ${type}</p>
            <p class="card__occurrences">Appears in ${episode.length} episodes</p>
          </div>
        `;

  return card;
}
