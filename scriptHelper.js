// Write your helper functions here!
try {
    require('isomorphic-fetch');
} catch (e) {

}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
  document.getElementById("missionTarget").innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
}
//validates input data
function validateInput(testInput) {
   if (testInput ==="") {
       return "Empty";
   } else if (!isNaN(testInput)) {
       return "Is a Number";
   } else if (typeof testInput ==='string') {
       return "Not a Number";
   }
};
//submits form using document and passing in list items and adding template literal and showing list on page
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let status = document.getElementById("launchStatus");
    let pilotCheck = false;
    let copilotCheck = false;
    let fuelCheck = false;
    let cargoCheck = false;
    
   /*let emptyCheck = [pilot, copilot, fuelLevel, cargoMass];
    for (let i=0; i<emptyCheck.length; i++) {
        if (validateInput(emptyCheck[i].value) === "Empty") {
            alert("All fields are required");
            event.preventDefault();
            break;
        }
    }*/
//git issue
    if (validateInput(pilot.value) === "Not a Number") {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`;
        pilotCheck = true;
    } else {
        alert("Input valid pilot name.");
    }
    
    if (validateInput(copilot.value) === "Not a Number") {
        document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot.value} is ready for launch`;
        copilotCheck = true;
    } else {
        alert("Input valid copilot name.");
    }
    
    if (validateInput(fuelLevel.value) === "Is a Number") {
        if (fuelLevel.value < 10000) {
            alert("Fuel is too low");
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
        } if (fuelLevel.value >= 10000) {
            fuelCheck = true;
        }
    } //else {
       // alert("Input valid fuel level.");
    //}
    
    if (validateInput(cargoMass.value) === "Is a Number") {
        if (cargoMass.value < 10000 && cargoMass.value >=0) {
            cargoCheck = true;
        } if (cargoMass.value >= 10000) {
            alert("Cargo is too heavy");
            document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`;
        } 
    } //else {
      //  alert("Input valid cargo mass.");
    //}
    
    
    let itemCheck = [pilotCheck, copilotCheck, fuelCheck, cargoCheck];
    let result = itemCheck.every(function (e) {
            return e === true;
        });
        console.log(itemCheck);
    if (result===true) {
        status.innerHTML = `Shuttle is Ready for Launch`;
        status.style.color = "rgb(65, 159, 106)";
    } else {
        status.innerHTML = `Shuttle Not Ready for Launch`;
        status.style.color = "rgb(199, 37, 78)";
    }

   


   //final task: set visibility of list to 'visible'
   list.style.visibility = "visible";
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();});

    return planetsReturned;
}

function pickPlanet(planets) {
    //planets is an array of planets. pick random planet
    return Math.floor(Math.random()*planets.length);
}

try {
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
} catch (e) {

}