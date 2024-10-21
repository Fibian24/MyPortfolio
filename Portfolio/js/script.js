// Select the paragraphs for jokes and quotes
const jokeParagraph = document.querySelector('.accordion-paragraph.joke');
const quoteParagraph = document.querySelector('.accordion-paragraph.motivation');

// Fetch a random programming joke from the API
async function fetchJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const data = await response.json();
    jokeParagraph.innerText = `${data[0].setup} - ${data[0].punchline}`;
  } catch (error) {
    jokeParagraph.innerText = 'Failed to fetch joke. Please try again later.';
  }
}

// Fetch a random motivational quote from the API
async function fetchQuote() {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    quoteParagraph.innerText = `${randomQuote.text} - ${randomQuote.author || 'Unknown'}`;
  } catch (error) {
    quoteParagraph.innerText = 'Failed to fetch quote. Please try again later.';
  }
}

// Add event listeners to the accordion items
const jokeAccordion = document.querySelector('div[data-w-id="e63c5c94-1e29-3d95-32ca-35bd07172590"]');
const quoteAccordion = document.querySelector('div[data-w-id="9238c354-0187-85d8-dd71-2e02334e8d7b"]');

// Fetch a joke when the joke accordion is clicked
jokeAccordion.addEventListener('click', () => {
  fetchJoke(); // Fetch and display the joke
});

// Fetch a quote when the quote accordion is clicked
quoteAccordion.addEventListener('click', () => {
  fetchQuote(); // Fetch and display the quote
});
