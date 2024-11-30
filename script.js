import quotes from './data';

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
}

generateBtn.addEventListener('click', generateRandomQuote);

generateRandomQuote();
