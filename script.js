const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateBtn = document.getElementById("calculateBtn");
const bmiValue = document.getElementById("bmiValue");
const bmiStatus = document.getElementById("bmiStatus");
const resultBox = document.getElementById("resultBox");

calculateBtn.addEventListener("click", () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;

  if (!weight || !height || weight <= 0 || height <= 0) {
    alert("Please enter valid values for weight and height.");
    return;
  }

  const bmi = weight / (height * height);
  const roundedBMI = bmi.toFixed(1);

  bmiValue.textContent = roundedBMI;

  let status = "";

  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 24.9) status = "Normal weight";
  else if (bmi < 29.9) status = "Overweight";
  else status = "Obese";

  bmiStatus.textContent = status;
  resultBox.style.display = "block";
});
