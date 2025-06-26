// Hent "knappen" som skal aktivere noe
const hamburgerIcon = document.querySelector('#hamburgerIcon');
console.log(hamburgerIcon);

hamburgerIcon.addEventListener('click', function () {
  // Hente elementet som skal bli synlig
  const navList = document.querySelector('#navList');
  console.log(navList);

  navList.classList.remove('hidden');
  navList.classList.add('navList');
});

const sunIcon = document.querySelector('#sunIcon');
console.log(sunIcon);

sunIcon.addEventListener('click', function () {
  const body = document.querySelector('body');

  body.classList.remove('light');
  body.classList.add('dark');
});

//let hour = 13;

//if (hour <= 4){
//else if (hour < 10) {
//  console.log("God Morgen");
//}
//else if (hour <18){
//  console.log("God ettermiddag");
//}
//else{
//  console.log("God kveld");
//}

let matButikk = 'Kiwi';

if (matButikk == 'Rema') {
  console.log('Jeg vil ikke på Rema');
} else if (matButikk == 'Coop') {
  console.log('Jeg vil kanskje på coop');
} else if (matButikk == 'Kiwi') {
  console.log("Let's go!");
}

let person1 = "Monica";
let person2 = "Erica";
let person3 = "Rita";

if(person3 || person2 )