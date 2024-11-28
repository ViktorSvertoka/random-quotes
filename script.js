const quotes = [
  'Innovation distinguishes between a leader and a follower. - Steve Jobs',
  'Stay hungry, stay foolish. - Steve Jobs',
  'The people who are crazy enough to think they can change the world are the ones who do. - Steve Jobs',
  'Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. - Steve Jobs',
  'Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. - Steve Jobs',
  'Creativity is just connecting things. - Steve Jobs',
  'Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs',
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomQuote);

generateRandomQuote();
