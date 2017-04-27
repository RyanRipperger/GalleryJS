var chico = [
  { description: "Bidwell Park",
    picture: "https://s-media-cache-ak0.pinimg.com/736x/ed/8c/9d/ed8c9d06c598f8e60c0edb2fe0a1a83e.jpg",
    from: "pinterest.com"
  },
  { description: "Phantom Fall",
    picture: "https://www.backpacker.com/.image/c_fit%2Ccs_srgb%2Ch_406%2Cq_50%2Cw_620/MTQ0OTE0MDQzNjc3NjQ4NjEz/ravine-falls.jpg",
    from: "backpacker.com"
  },
  { desription: "Flumes",
    picture: "http://static.panoramio.com/photos/large/37573219.jpg",
    from: "panoramio.com"
  },
  { description: "Willow Lake",
    picture: "http://chicohomesearch.net/files/2007/11/resize.jpeg",
    from: "chicohomesearch.net"
  },
  { description: "Campus",
    picture: "http://www.csuchico.edu/maps/images/maps-tours-photos/mapstours-tours.jpg",
    from: "csuchico.edu"
  },
  { description: "Big Chico Creek",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Big_Chico_Creek_in_Upper_Bidwell_Park.jpg/1200px-Big_Chico_Creek_in_Upper_Bidwell_Park.jpg",
    from: "wikipedia.org"
  }
];
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
