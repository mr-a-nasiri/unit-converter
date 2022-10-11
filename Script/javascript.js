// Getting DOM of Bottom Elements
const conversionTitle = document.getElementById("conversion-title");
const conversionOutput = document.getElementById("conversion-output");
// Getting DOM of Radio Buttons
const lengthCheckBox = document.getElementById("length");
const volumeCheckBox = document.getElementById("volume");
const massCheckBox = document.getElementById("mass");
const distanceCheckBox = document.getElementById("distance");
const convertorArea = document.getElementById("convertor-type");
// Get DOM of Input
const inputEl = document.getElementById("input-el");
let inputGatheredData = "";

// Looking for typing in input
inputEl.addEventListener("keyup", function () {
  inputGatheredData = inputEl.value;
  render();
});

// Listening for click on convertor area
function render() {
  // Looking at which checkbox is checked
  // Then changing bottom content for it
  if (lengthCheckBox.checked) {
    let meterToFeet = inputGatheredData * 3.281;
    meterToFeet = Math.round(meterToFeet * 100) / 100;
    let feetToMeter = inputGatheredData / 3.281;
    feetToMeter = Math.round(feetToMeter * 100) / 100;
    conversionTitle.textContent = "Length (Meter/Feet)";
    conversionOutput.innerText = `${inputGatheredData} meters = ${meterToFeet} feet 
    ${inputGatheredData} feet = ${feetToMeter} meters`;
  } else if (volumeCheckBox.checked) {
    let litersToGallons = inputGatheredData * 0.264;
    litersToGallons = Math.round(litersToGallons * 100) / 100;
    let gallonsToLiters = inputGatheredData / 0.264;
    gallonsToLiters = Math.round(gallonsToLiters * 100) / 100;
    conversionTitle.textContent = "Volume (Liters/Gallons)";
    conversionOutput.innerText = `${inputGatheredData} liters = ${litersToGallons} gallons 
    ${inputGatheredData} gallons = ${gallonsToLiters} liters`;
  } else if (massCheckBox.checked) {
    let kilogramsToPounds = inputGatheredData * 2.204;
    kilogramsToPounds = Math.round(kilogramsToPounds * 100) / 100;
    let poundsToKilograms = inputGatheredData / 2.204;
    poundsToKilograms = Math.round(poundsToKilograms * 100) / 100;
    conversionTitle.textContent = "Mass (Kilograms/Pounds)";
    conversionOutput.innerText = `${inputGatheredData} kilograms = ${kilogramsToPounds} pounds 
    ${inputGatheredData} pounds = ${poundsToKilograms} kilograms`;
  } else if (distanceCheckBox.checked) {
    let kilometersToMiles = inputGatheredData * 0.621;
    kilometersToMiles = Math.round(kilometersToMiles * 100) / 100;
    let milesToKilometers = inputGatheredData / 0.621;
    milesToKilometers = Math.round(milesToKilometers * 100) / 100;
    conversionTitle.textContent = "Distance (Kilometers/Miles)";
    conversionOutput.innerText = `${inputGatheredData} kilometers = ${kilometersToMiles} miles 
    ${inputGatheredData} miles = ${milesToKilometers} kilometers`;
  } else {
    // conversionTitle.textContent = "Please Choose a Convertor";
  }
}
