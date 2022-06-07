// Start koding lengre ned (ved startHere)

const failColor = "rgb(226, 101, 91)";
const correctColor = "rgb(25, 232, 168)";
const failText = "Feil";
const correctText = "Ny runde";

const wordList = [
  "Huske",
  "Trene",
  "Danse",
  "Hoppe",
  "Sykle",
  "Gå",
  "Rulle",
  "Trille",
  "Kjøre",
  "Løpe",
  "Springe",
  "Hinke",
  "Sparke",
  "Sprinte",
  "Forflytte",
  "Trimme",
  "Løfte",
  "Snurre",
  "Svinge",
  "Svømme",
  "Flyte",
  "Fly",
  "Sveve",
  "Ake",
  "Dra",
];

// #### START HER ####
const startHere = "Her kommer din kode";

const wordList2 = wordList.sort();

let button = document.querySelector('#test');
let spanElements = document.querySelectorAll('span');
let liElements = document.querySelectorAll('li');
let inputElements = document.querySelectorAll('input')
let numbersString = [];
let wordArray = [];

/* 
I denne funksjonen brukes en funksjon som genererer random tall. Den fant vi på:
https://www.w3schools.com/js/js_random.asp
*/
for (let spans of spanElements) {
  let randomIndex = Math.floor(Math.random() * 24);
  spans.innerHTML = wordList2[randomIndex];
}

const buttonFunction = () => {

  let indexArray = [];
  let fourWordArray = [];
  let sortWordArray = [];
  let z = 0;

/* 
koden for childNodes som identifiserer barna til et gitt element fant vi på:
https://www.w3schools.com/jsref/met_node_haschildnodes.asp
dennne blir også brukt senere i funksjonen newGame
*/
  for (let eachLi of liElements) {

    let childNodes = eachLi.childNodes;
    let eachLiSpan = childNodes[1];
    let eachLiInput = childNodes[0];

    let randomIndex = Math.floor(Math.random() * 24);

    fourWordArray.push(eachLiSpan.innerHTML);
  }

  sortWordArray = fourWordArray.sort();

  const [first, second, third, fourth] = sortWordArray;
  const spanArray = Array.from(spanElements);


/* 
koden for å finne indexen i en array mens vi bruker en for-loop fant vi på:
https://stackoverflow.com/questions/34348937/access-to-es6-array-element-index-inside-for-of-loop
*/

  for (let [index, eachInput] of inputElements.entries()) {
    let eachSpanValue = spanArray[index].innerHTML;
    if (eachInput.value != '') {
      if (eachInput.value == 1 && first == eachSpanValue) {
        z++;
      }
      if (eachInput.value == 2 && second == eachSpanValue) {
        z++;
      }
      if (eachInput.value == 3 && third == eachSpanValue) {
        z++;
      }
      if (eachInput.value == 4 && fourth == eachSpanValue) {
        z++;
      }
    }
  }
  if (z !== 4) {
    button.innerHTML = failText;
    button.style.background = failColor;
  } else {
    button.innerHTML = correctText;
    button.style.background = correctColor;
    button.removeEventListener("click", buttonFunction);
    button.addEventListener("click", newgame);
  }
}

const newgame = () => {

  for (let each of liElements) {
    let childNodes = each.childNodes;
    let eachLiSpan = childNodes[1];
    let eachLiInput = childNodes[0];

    eachLiInput.value = "";

    let randomIndex = Math.floor(Math.random() * 24);
    eachLiSpan.innerHTML = wordList2[randomIndex];

  }
  button.innerHTML = "Test";
  button.style.background = "";

  button.removeEventListener("click", newgame);
  button.addEventListener("click", buttonFunction);
}


button.addEventListener("click", buttonFunction);