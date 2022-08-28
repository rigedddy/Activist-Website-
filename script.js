var factList = [
  "The Dead Sea, which is Earth’s lowest natural point of elevation, is found in Palestine.",
  "The conflict is not a religious one, but rather more about land",
  "Despite recent conflicts, Palestine was once characterised by multiculturalism and     tolerance",
  "Issues and divisions began during the British Mandatory period.",
  "The language primarily spoken in Gaza and the West Bank is a dialect of Standard Modern Arabic known as Palestinian Arabic.",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if(myButton){
  myButton.addEventListener("click",displayFact);
}


function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

var proceed = document.getElementById("proceed");
proceed.addEventListener("click", closeOverlay);

function closeOverlay() { document.getElementById("overlay").style.display="none";
}

