document.getElementById("bmiForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weightInput").value);
  const height = parseFloat(document.getElementById("heightInput").value);

  const bmi = weight / (height * height);
  document.getElementById("result").innerHTML = `Your BMI: ${bmi.toFixed(2)}`;
});
