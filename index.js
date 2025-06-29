// remove the <main> element with id="main"
const main = document.getElementById('main'); //get the main element
main.remove(); // remove it from the DOM

// create a new <h1> element
const newHeader = document.createElement('h1');

// set its id to "victory"
newHeader.id = 'victory';

// set its text to "YOUR-NAME is the champion" using either .textContent or .innerHTML
newHeader.textContent= 'Beatrice is the champion';

// assign the new <h1> element to a variable named newHeader
document.body.appendChild(newHeader);
