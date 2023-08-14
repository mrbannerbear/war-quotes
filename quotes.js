let button = document.getElementById('btn');
let quote = document.getElementById('quote');
let speaker = document.getElementById('speaker');



const quotes = [
    {quote: '"The true soldier fights not because he hates what is in front of him, but because he loves what is behind him."' ,
    person: 'G.K. Chesterton'},
    {quote: '"There is no flag large enough to cover the shame of killing innocent people."' ,
    person: 'Howard Zinn'},
    {quote: '"Sometimes you have to pick the gun up to put the Gun down."' ,
    person: 'Malcolm X'},
    {quote: '“It\'s hard to lead a cavalry charge if you think you look funny on a horse.”' ,
    person: 'Adlai E. Stevenson'},

]

document.getElementById('btn').addEventListener('click',  function() {
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[random].quote;
    document.getElementById('speaker').innerText = quotes[random].person;

})
