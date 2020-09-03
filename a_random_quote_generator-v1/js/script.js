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

//Added an array with five objects containing the quotes and their information.
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

//Used the math.random function and to create a random number generator to represent each object in the array.

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return (
    quotes[randomNumber]
  );
} 

/***
 * `printQuote` function
***/

//Created multiple variables and used conditional statements to make sure the generator met requirements of all quotes.
//The conditional statements ensure that if one quote doesn't have info available, that info will be left out instead of 'undefined'.

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
