/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "Life is like a box of chocolates. You never know what you're gonna get.",
    author: "Tom Hanks",
    year: "1994",
    citation: "Forrest Gump"
  },
  {
    quote: "Seize the day, boys. Make your lives extraordinary.",
    author: "Robin Williams",
    citation: "Dead Poets Society"
  },
  {
    quote: "Keep your friends close, but your enemies closer.",
    author: "Al Pacino",
    year: "1974",
  },
  {
    quote: "With great power comes great responsibility.",
    author: "Cliff Robertson",
    year: "2002",
    citation: "Spider-Man"
  },
  {
    quote: "I don't have friends. I got family",
    author: "Vin Diesel",
    year: "2015",
    citation: "Furious 7"
  }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return (
    quotes[randomNumber]
  );
} 

/***
 * `printQuote` function
***/

function printQuote() {
  let chosenQuote = getRandomQuote();
  let quoteText = 
    '<p class="quote">' + chosenQuote.quote + '</p>';
      quoteText += '<p class="source"> ' + chosenQuote.author + ' ';
      if (chosenQuote.citation) {
        quoteText += '<span class="citation"> ' + chosenQuote.citation + '</span>';
      }
      if (chosenQuote.year) {
        quoteText += '<span class="year"> ' + chosenQuote.year + '</span>';
      }
    '</p>';
 document.getElementById('quote-box').innerHTML = quoteText;
    };

     
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
