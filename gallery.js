var chico = ["Bidwell Park", "Phantom Falls", "Flumes", "Willow Lake", "Campus", "Big Chico Creek"];
var current = 0;
function shuffleGallery()
{
  var randomValue = chico[Math.floor(Math.random()*chico.length)];

  while (randomValue == current) {
    var randomValue = chico[Math.floor(Math.random()*chico.length)];
  }
  current = randomValue;

  //Prints the value of RandomValue
  console.log(randomValue);
}
