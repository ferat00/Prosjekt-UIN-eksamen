const startHere = "Her kommer din kode";

// Her finner vi add knappen som let addBtn (add button)
let addBtn = document.querySelector('#add');

// Her finner vi sort knappen som let sortBtn (sort button)
let sortBtn = document.querySelector('#sort');


// en funksjon som kjører når add knappen trykkes på
const addFunc = () => {

  //her finner vi li elementene med let liElements
  let liElements = document.querySelectorAll('li');

  //for of loop som kjører gjennom og identifiserer alle li elementene hver for seg som eachLi
  for (let eachLi of liElements){
    //hver gang loopen kjører genereres et tilfeldig helt tall mellom 0 og 9
    let randomNmbr = Math.floor(Math.random() * 10);

    //hver gang loopen kjører blir det tilfeldig genererte tallet satt inn 
    //i et Li element til alle holder hvert sitt tall
    eachLi.innerHTML = randomNmbr;
  }
}

//en funksjon som kjører når sort button trykkes på
const sortFunc = () => {
  //her finner vi li elementene med let liElements
  let liElements = document.querySelectorAll('li');
  
  //tom let vi kaller sortnumbers og gjør til en string. for bruk senere
  let sortNumbers = "";
  //tom let som vi kaller numbersArray og gjør den til en array. for bruk senere
  let numbersArray;
  
  //en for of loop som kjører gjennom og identifiserer alle li elementene hver for seg som eachLi
  for (let eachLi of liElements){
    //loopen tar alle tallene vi finner i li elementene (lagt dit med add button) 
    //og samler dem inn i sortNumbers stringen vi lagde
    sortNumbers += eachLi.innerHTML;

    //hvert enkelt tall vi tar blir splittet inn i et separat element i
    //arrayen numbersArray vi lagde. og så sorterer tallene i stigende rekkefølge sort() 
    numbersArray = sortNumbers.split("").sort();
  }
  
  //lager en let x som vi gir verdien 0. for bruk senere.
  let x = 0;

  //en ny for loop som kjører gjennom alle li elementene en etter en
  for (let eachLi of liElements){
    //her defineres sortSend som numbersArray[x]. Siden x = 0 tar den det første tallet i numbersArray
    let sortSend = numbersArray[x];

    //her tar det første li elementet imot det første tallet i rekkefølgen.
    eachLi.innerHTML = sortSend;

    //hver gang loopen kjører øker x med 1 slik at vi går gjennom hele arrayen og setter inn
    //alle tallene i riktig rekkefølge sortert i numbersArray og sort() funksjonen
    x++;
  }
}

//eventlistener som gjør at addFun kjøres når add knappen trykkes
addBtn.addEventListener("click", addFunc);

//eventlistener som gjør at sortFunc kjører når sort button klikkes
sortBtn.addEventListener("click", sortFunc);