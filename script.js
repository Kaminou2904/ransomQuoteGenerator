let quotes = document.getElementById('quotes');
let author = document.getElementById('author');
let newQuoteBtn = document.getElementById('newQuoteBtn');
let soundBtn = document.getElementById('soundBtn');
let copyBtn = document.getElementById('copyBtn');
let twitterBtn = document.getElementById('twitterBtn');

function newQuote(){
    newQuoteBtn.innerText = "Loding...";
    newQuoteBtn.style.opacity = "0.5";
    newQuoteBtn.style.cursor = "none";
    fetch("https://api.quotable.io/random").then(response => response.json()).then(result => {
        quotes.innerHTML = `${result.content}`;
        author.innerHTML = `-- ${result.author}`;
        newQuoteBtn.innerText = "New Quote";
        newQuoteBtn.style.opacity = "1";
        newQuoteBtn.style.cursor = "pointer";
    });
};

function audioFunc(){
    let utterance = new SpeechSynthesisUtterance(`${quotes.innerHTML}  by ${author.innerHTML}`);
    speechSynthesis.speak(utterance);
};

function copyFunc(){
    navigator.clipboard.writeText(quotes.innerHTML);
};

function twitterFunc(){
    let twitterUrl = `https://twitter.com/compose/tweet?url=${quotes.innerHTML}`;
    window.open(twitterUrl, "_blank");
};

twitterBtn.addEventListener('click', twitterFunc);
copyBtn.addEventListener('click', copyFunc);
soundBtn.addEventListener('click', audioFunc);
newQuoteBtn.addEventListener('click', newQuote);