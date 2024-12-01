import quotes from './data.js';

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');
const favoriteBtn = document.getElementById('favorite-btn');
const favoritesList = document.getElementById('favorites-list'); // Список для фаворитів

// Збереження поточної цитати та обраних цитат
let currentQuote;
let favorites = []; // Масив для збереження цитат без використання localStorage

// Генерація випадкової цитати
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  currentQuote = randomQuote; // Зберігаємо поточну цитату
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;

  // Оновлюємо текст кнопки залежно від стану isFavorite
  updateFavoriteButton();
}

// Оновлення тексту кнопки
function updateFavoriteButton() {
  if (currentQuote && currentQuote.isFavorite) {
    favoriteBtn.textContent = 'Remove from favorites';
  } else {
    favoriteBtn.textContent = 'Add to favorite';
  }
}

// Додавання або видалення поточної цитати з обраного
function toggleFavorite() {
  if (currentQuote) {
    const existingFavoriteIndex = favorites.findIndex(
      quote => quote.id === currentQuote.id,
    );

    if (existingFavoriteIndex !== -1) {
      // Якщо цитата вже в обраному, видаляємо її
      favorites.splice(existingFavoriteIndex, 1);
      currentQuote.isFavorite = false;
      alert('Цитату видалено з обраного!');
    } else {
      // Якщо цитата не в обраному, додаємо її
      favorites.push(currentQuote);
      currentQuote.isFavorite = true;
      alert('Цитату додано до обраного!');
    }

    renderFavorites(); // Оновлюємо список карток після зміни
    updateFavoriteButton(); // Оновлюємо текст кнопки
  }
}

// Функція для рендерингу карток цитат в фаворитах
function renderFavorites() {
  favoritesList.innerHTML = ''; // Очищаємо список перед оновленням

  // Рендеримо картки для кожної цитати в фаворитах
  favorites.forEach(favorite => {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
      <p>"${favorite.quote}"</p>
      <p>- ${favorite.author}</p>
    `;
    favoritesList.appendChild(favoriteCard);
  });
}

// Події для кнопок
generateBtn.addEventListener('click', generateRandomQuote);
favoriteBtn.addEventListener('click', toggleFavorite);

// Ініціалізація з першої випадкової цитати
generateRandomQuote();
