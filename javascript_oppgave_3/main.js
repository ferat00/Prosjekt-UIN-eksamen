/**
  Step 1:
   - Forrige knappen er skjult (hidden attr er aktive)
   - Kun steg 1 i nav er grønn (har klassen active)
   - Skjema for navn vises
  Step 2:
   - Forrige knappen er synlig (hidden attr er borte)
   - Kun steg 2 i nav er grønn (har klassen active)
   - Skjema for epost vises
  Step 3:
   - Forrige knappen er synlig
   - Kun steg 3 i nav er grønn (har klassen active)
   - Skjema for alder vises
   - Neste knappen er skjult (hidden attr er aktive)
   - Send knappen er synlig (hidden attr er borte)
  Step 4:
   - Skjema er skjult
   - Kun teksten "Takk ditt skjema er sendt" vises og lages med JavaScript
  Next:
   - Skal endre hvilket step vi er på (hvilket steg som er grønt)
   - Skal trigge validering av skjema
     - Skal vise feilmelding "Feil" hvis validering feiler
     - Skal fjerne feilmelding "Feil" hvis validering passerer etter at vi har hatt en feil (legge til hidden attr)
          - Validering for navn er mellomrom og mer enn 10 bokstaver
          - Validering for e-post er at den må ha en @
          - Validering for alder er over 20
   - Skal lagre det vi skrev i skjema
  Prev:
   - Skal endre hvilket steg vi er på
   - Skal fortsatt vise det vi har skrevet i input
 */

// #### START HER ####
const startHere = "Her kommer din kode";

//Her finner vi sections for del 1, 2 og 3
//vi finner også tall indikatorer for disse delene 1, 2 og 3
const stepOne = document.getElementById("step_one");
const stepTwo = document.getElementById("step_two");
const stepThree = document.getElementById("step_three");
const stepNumber = Array.from(document.querySelectorAll('.step'));

//her finner vi spesifikke html-elementer main og body
//så lager vi en array av error-elementene slik at vi finner alle hver for seg spesifikt
const main = document.querySelector("main");
const body = document.querySelector("body");
const error = Array.from(document.querySelectorAll('.error'));

//her finner vi inputfeltene for å skrive navn, email og alder
const navn = document.querySelector('#name');
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");

//her finner vi knappene next, send og previous
const btndiv = document.getElementById("buttons")
const next = document.getElementById("next");
const sendBtn = document.querySelector("#send");
const previousBtn = document.querySelector("#prev");

//disse varablene lagrer input.valuen til inputfeltene
let holdNavn = "";
let holdEmail = "";
let holdAlder = "";

btndiv.classList.add("justify-right")
const nameF = () => {  
  
  
/* 
koden for denne arrayen som senere blir til en error beskjed ble inspirert av denne videoen:
https://www.youtube.com/watch?v=In0nB0ABaUk
*/
  let messages = []
  
  if (navn.value.includes(" ") && navn.value.length >= 11) {
    next.removeEventListener("click", nameF);
    next.addEventListener("click", emailF);
    stepOne.setAttribute("hidden", true);
    stepTwo.removeAttribute("hidden");
    previousBtn.style.display = "block";
    previousBtn.addEventListener("click", prevF1);
    holdNavn = navn.value;
    stepNumber[0].classList.remove("active");
    stepNumber[1].classList.add("active");
    error[0].setAttribute("hidden", true);
    btndiv.classList.remove("justify-right")
    btndiv.classList.add("space-between")

  } else {
    messages.push ("Feil")
    error[0].removeAttribute("hidden")
    error[0].innerHTML = messages;
    error[0].style.color = "red"
  }
 
}

const emailF = () => {

  if(emailInput.value.includes("@")){
    stepTwo.setAttribute("hidden", true);
    stepThree.removeAttribute("hidden");
    next.setAttribute("hidden", true);
    sendBtn.removeAttribute("hidden");
    holdEmail = emailInput.value;
    previousBtn.removeEventListener("click", prevF1);
    previousBtn.addEventListener("click", prevF2);
    stepNumber[1].classList.remove("active");
    stepNumber[2].classList.add("active");
    error[1].setAttribute("hidden", true);
  }else{
    error[1].innerHTML = "Feil"
    error[1].style.color = "red";
    error[1].removeAttribute("hidden");
  }
}

const alderF = (event) => {
  event.preventDefault();

  if (ageInput.value > 17){
    holdAlder = ageInput.value;
    console.log("submitted name: " + holdNavn);
    console.log("submitted Email: " + holdEmail);
    console.log("submitted age: " + holdAlder);
    main.style.display = "none";
    body.innerHTML = `<h1>Takk ditt skjema er sendt</h1><br>
    `;
  } else {
    error[2].innerHTML = "Feil"
    error[2].style.color = "red";
    error[2].removeAttribute("hidden");
  }
}

const prevF1 = () => {
  previousBtn.style.display = "none";
  stepTwo.setAttribute("hidden", true);
  stepOne.removeAttribute("hidden");
  next.removeEventListener("click", emailF);
  next.addEventListener("click", nameF);
  stepNumber[1].classList.remove("active");
  stepNumber[0].classList.add("active");
  btndiv.classList.remove("space-between")
  btndiv.classList.add("justify-right")
}

const prevF2 = () => {
  previousBtn.removeEventListener("click", prevF2);
  previousBtn.addEventListener("click", prevF1);
  stepThree.setAttribute("hidden", true);
  stepTwo.removeAttribute("hidden");
  sendBtn.setAttribute("hidden", true);
  next.removeAttribute("hidden");
  stepNumber[2].classList.remove("active");
  stepNumber[1].classList.add("active");
}

sendBtn.addEventListener("click", alderF);
next.addEventListener("click", nameF);
