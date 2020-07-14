const quotes = [
  {
  name: 'Stehpen King',
  quote: 'Get busy living or get buisy dying.'
},
{
  name: "Leo Tolstoy",
  quote: "If you want to be happy, be."
},
{
  name: 'Anon Author 1',
  quote: 'Quote me.'
},
{
  name: 'Anon Author 2',
  quote: 'Practice? We talkin\' bout practice?'

},
{
  name: 'Anon Author 3',
  quote: 'Doller waitin\' on a dime!'
}
];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', generateQuote);

function generateQuote() {
  
  let number = Math.floor(Math.random()*quotes.length);
  
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}















