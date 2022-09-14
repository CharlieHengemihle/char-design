/* Imports */

/* DOM Elements */
const headSelect = document.getElementById('head-select');
const middleSelect = document.getElementById('middle-select');
const pantsSelect = document.getElementById('pants-select');
const headImage = document.getElementById('head-image');
const middleImage = document.getElementById('middle-image');
const pantsImage = document.getElementById('pants-image');
const phraseInput = document.getElementById('phrase-input');
const addButton = document.getElementById('add-button');
const phraseList = document.getElementById('phrase-list');

/* State */
const character = {
    head: 'bird',
    middle: 'dress',
    pants: 'white',
    phrases: [],
};

headSelect.addEventListener('change', () => {
    character.head = headSelect.value;
    displayCharacter();
});

middleSelect.addEventListener('change', () => {
    character.middle = middleSelect.value;
    displayCharacter();
    // > set the character middle from the value of the middle <select>
    // > redisplay the character
});

pantsSelect.addEventListener('change', () => {
    character.pants = pantsSelect.value;
    displayCharacter();
    // > set the character head from the value of the head <select>
    // > redisplay the character
});

function displayCharacter() {
    headImage.src = 'assets/character/' + character.head + '-head.png';
    middleImage.src = 'assets/character/' + character.middle + '-middle.png';
    pantsImage.src = 'assets/character/' + character.pants + '-pants.png';
    // > set the middle and pants images .src property based on the character middle and pants properties
}

function displayPhrases() {
    // clear the list
    phraseList.innerHTML = '';

    for (const phrase of character.phrases) {
        const li = document.createElement('li');
        li.textContent = phrase;
        phraseList.append(li);
        // > create an <li> element
        // > set the text of the li to the phrase
        // > append the <li> to the phrases list
    }
}

addButton.addEventListener('click', () => {
    const phrase = phraseInput.value;
    character.phrases.push(phrase);
    displayCharacter();
    // > Get the phrase from the value of the phrase input
    // > Use ".push" to add the phrase to the end of the character phrases array
    // > Re-display the phrases

    // reset the input
    phraseInput.value = '';
});

displayCharacter();
displayPhrases();
