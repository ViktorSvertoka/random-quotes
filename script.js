import quotes from './data.js';

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');
const favoriteBtn = document.getElementById('favorite-btn');

// Збереження поточної цитати та обраних цитат
let currentQuote;
let favorites = loadFavoritesFromLocalStorage();

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
  if (currentQuote.isFavorite) {
    favoriteBtn.textContent = 'Remove from favorites';
  } else {
    favoriteBtn.textContent = 'Add to favorite';
  }
}

// Збереження обраних цитат у `localStorage`
function saveFavoritesToLocalStorage() {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Завантаження обраних цитат із `localStorage`
function loadFavoritesFromLocalStorage() {
  const savedFavorites = localStorage.getItem('favorites');
  if (savedFavorites) {
    const parsedFavorites = JSON.parse(savedFavorites);

    // Синхронізація стану isFavorite
    parsedFavorites.forEach(favorite => {
      const quote = quotes.find(quote => quote.id === favorite.id);
      if (quote) {
        quote.isFavorite = true;
      }
    });

    return parsedFavorites;
  }
  return [];
}

// Додавання або видалення поточної цитати з обраного
function toggleFavorite() {
  if (currentQuote) {
    if (currentQuote.isFavorite) {
      // Якщо вже в обраному, видаляємо
      currentQuote.isFavorite = false;
      const index = favorites.findIndex(quote => quote.id === currentQuote.id);
      if (index !== -1) {
        favorites.splice(index, 1); // Видаляємо з масиву favorites
      }
      alert('Цитату видалено з обраного!');
    } else {
      // Якщо не в обраному, додаємо
      currentQuote.isFavorite = true;
      favorites.push(currentQuote);
      alert('Цитату додано до обраного!');
    }
    console.log('Favorites:', favorites); // Для перевірки в консолі
    saveFavoritesToLocalStorage(); // Зберігаємо у localStorage
    updateFavoriteButton(); // Оновлюємо текст кнопки
  }
}

// Події для кнопок
generateBtn.addEventListener('click', generateRandomQuote);
favoriteBtn.addEventListener('click', toggleFavorite);

// Ініціалізація з першої випадкової цитати
generateRandomQuote();
