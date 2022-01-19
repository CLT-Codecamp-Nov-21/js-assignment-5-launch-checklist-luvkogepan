
// Write your JavaScript code here!
window.addEventListener("load", function() {
//loads element items, validates using validateInput, shows items using formSubmission
   let list = document.getElementById("faultyItems");
   let pilot = document.querySelector("input[name=pilotName]");
   let copilot = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let form = document.getElementById("launchForm");
   list.style.visibility = "hidden";
 

   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
 let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (json) {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let pickedPlanet = pickPlanet(json);
        console.log(pickedPlanet);
        let name = pickedPlanet.name;
        let diameter = pickedPlanet.diameter;
        let star = pickedPlanet.star;
        let distance = pickedPlanet.distance;
        let moons = pickedPlanet.moons;
        let imageUrl = pickedPlanet.image;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    }); 
 
    //use getElementById and add ids to divs
   //get the DOM not for 'faulty-items' to pass into formSubmission
   //set visiibility of this DOM not to 'hidden'
   //set up submit handler for formSubmission
    form.addEventListener("submit", function(event) {
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    event.preventDefault();
});

});