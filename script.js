import quotes from './data.js';

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');
const favoriteBtn = document.getElementById('favorite-btn');
const iconBlack = document.querySelector('.quotes_icon-black');
const iconYellow = document.querySelector('.quotes_icon-yellow');
const favoritesList = document.getElementById('favorites-list');

let currentQuote;
let favorites = [];

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  currentQuote = randomQuote;

  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;

  updateFavoriteButton();
  showFavoriteButton();
}

function updateFavoriteButton() {
  if (currentQuote && currentQuote.isFavorite) {
    iconBlack.classList.add('hide');
    iconYellow.classList.remove('hide');
  } else {
    iconBlack.classList.remove('hide');
    iconYellow.classList.add('hide');
  }
}

function showFavoriteButton() {
  favoriteBtn.classList.remove('hide');
}

function toggleFavorite() {
  if (currentQuote) {
    const existingFavoriteIndex = favorites.findIndex(
      quote => quote.id === currentQuote.id,
    );

    if (existingFavoriteIndex !== -1) {
      favorites.splice(existingFavoriteIndex, 1);
      currentQuote.isFavorite = false;
      alert('Цитату видалено з обраного!');
    } else {
      favorites.push(currentQuote);
      currentQuote.isFavorite = true;
      alert('Цитату додано до обраного!');
    }

    renderFavorites();
    updateFavoriteButton();
  }
}

function renderFavorites() {
  favoritesList.innerHTML = '';

  favorites.forEach(favorite => {
    const favoriteCard = document.createElement('li');
    favoriteCard.classList.add('favorites_card');
    favoriteCard.innerHTML = `
      <p class="favorites_slogan">"${favorite.quote}"</p>
      <p class="favorites_desc">${favorite.author}</p>
    `;
    favoritesList.appendChild(favoriteCard);
  });
}

generateBtn.addEventListener('click', generateRandomQuote);
favoriteBtn.addEventListener('click', toggleFavorite);

favoriteBtn.classList.add('hide');

// generateRandomQuote();
