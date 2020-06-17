// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random quote to the page.
 */
const numComments = "/data?num-of-comments=5";

function addRandomQuote() {
  const quotes =
      [ "If you're the CEO of a company, and you're dumb enough" +
        " to leave your log-in info on a Post-It note on your desk, while the people" +
        " that you ripped off are physically in your office, it's not a hack. It's" +
        " barely social engineering. It’s more like natural selection.",

        "If the rise of an all-powerful intelligence is inevitable, well it stands to" +
        " reason that when they take power, our digital overlords will punish those of us" +
        " who did not help them get there. Ergo, I would like to be a helpful idiot." +
        " Like yourself.",

        "War does not determine who is right- only who is left",
        
        "Nothing's perfect, the world's not perfect, but it's there for us, trying" +
        " the best it can. That's what makes it so damn beautiful.",

        "Before I leaped, I should have seen the view from halfway down", 

        "When you look at someone through rose-colored glasses," +
        " all the red flags just look like flags ",

        "Sometimes I'll start a sentence and I don't even know where it's going." +
        " I just hope I find it along the way",

        "Mini cupcakes? As in the mini version of regular cupcakes?" + 
        " Which is already a mini version of cake?" + 
        " Honestly, where does it end with you people?",

        "Whenever I'm about to do something, I think," +
        " 'Would an idiot do that?' and if they would, I do not do that thing",

        "The doctor said, if I can't find a new way to relate more positively" +
        " to my surroundings, I'm going to die. I'm going to die",

        "I'm not superstitious, but I am a little stitious.",

        "Pirates are evil? The Marines are righteous?... Justice will prevail, you say?" + 
        " But of course it will! Whoever wins this war becomes justice!",

        "When do you think people die? When they are shot through the heart by the bullet" +
        " of a pistol? No. When they are ravaged by an incurable disease? No..." +
        " It’s when they're forgotten!",

        "Stop counting only those things you have lost! What is gone, is gone!" + 
        " So ask yourself this. What is there... that still remains to you?!",
        ];

  // Pick a random quote.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;

}
 
  async function getServerResponse() {
    fetch("/data").then(response => response.json()).then((statement) => {
        const statementContainer = document.getElementById("statement-container");
        statementContainer.innerText = statement; 
    });
  }

  async function deleteComments() {
      fetch("/delete-data", {method: 'POST'}).then(response => response.json()).then(data => console.log(data)); 
  }

  function createMap() {
    /* Variable names are based on the name of the restaurant/business they are pointing to */
    var pappasLoaction = {lat: 39.47169, lng: -76.622223};
    var shipsLoacation = {lat: 39.2715, lng: -76.7350};
    var shipsMarker;
    var pappasMarker;

    const map = new google.maps.Map(
    document.getElementById('map'),{
        center: shipsLoacation, 
        zoom: 10,
        styles: [
            {"elementType": "geometry","stylers": [{"color": "#ebe3cd"}]},
            {"elementType": "labels.text.fill","stylers": [{"color": "#523735"}]},
            {"elementType": "labels.text.stroke","stylers": [{"color": "#f5f1e6"}]},
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#c9b2a6"}]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#dcd2be"}]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#ae9e90"}]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [{"color": "#dfd2ae"}]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{"color": "#dfd2ae"}]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#e9a6a6"}]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#93817c"}]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#a5b076"}]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#447530"}]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f1e6"}]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{"color": "#fdfcf8"}]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{"color": "#f8c967"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#e9bc62"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{"color": "#e98d58"}]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#db8555"}]
            },
            {
                "featureType": "road.local",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#806b63"}]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{"color": "#dfd2ae"}]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#8f7d77"}]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#ebe3cd"}]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{"color": "#dfd2ae"}]
            },
            {
                "featureType": "water",
                "stylers": [{"color": "#0420ff"},{"weight": 5}]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#c6cafe"},{"lightness": 5}]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#92998d"}]
            }
            
        ]  
    });

    var infowindow;

    shipsMarker = new google.maps.Marker({
        position: shipsLoacation, 
        map: map,
        title: "Ship's Cafe"
        });
    pappasMarker = new google.maps.Marker({
        position: pappasLoaction, 
        map: map,
        title: "Pappas Resturant and Sports Bar"
        });

    shipsMarker.addListener('click', function() {
        infowindow = new google.maps.InfoWindow({
            content: "<div style='float:left'>" +
            "<img src='/images/ships.jpg' width= 350 height=200></div>" +
            "<div style='float:right; padding: 10px;'>" +
            "<b>Ships Cafe</b>" +
            "<br/>828 Frederick Rd" +
            "<br/> Catonsville, MD 2122</div>"
        });
        infowindow.open(map, shipsMarker);
    });

    pappasMarker.addListener('click', function() {
        infowindow = new google.maps.InfoWindow({
            content: "<div style='float:left'>" +
            "<img src='/images/pappas-food.jpg' width= 250 height= 200></div>" +
            "<div style='float:right; padding: 10px;'>" +
            "<b>Pappas Resturant and Sports Bar</b>" +
            "<br/>550 Cranbrook Rd" +
            "<br/> Cockeysville, MD 21030</div>"
        });
        infowindow.open(map, pappasMarker);
    });



}


  
