
// 1. Start
// 1. Define the function calculate_bmi(weight, height):
//    - Calculate BMI using the formula: bmi = weight / (height * height)
//    - Return the calculated BMI value
// 1. Define the function interpret_bmi(bmi):
//    - If bmi \< 18.5, set interpretation = "Underweight"
//    - Else if bmi \< 25, set interpretation = "Normal weight"
//    - Else if bmi \< 30, set interpretation = "Overweight"
//    - Else, set interpretation = "Obese"
//    - Return the interpretation
// 1. Read the weight from the user and assign it to the variable weight
// 1. Read the height from the user and assign it to the variable height
// 1. Call the calculate_bmi function with arguments weight and height and assign the result to the variable bmi
// 1. Call the interpret_bmi function with argument bmi and assign the result to the variable interpretation
// 1. Print "BMI: " followed by the value of bmi
// 1. Print "Interpretation: " followed by the value of interpretation
// 1. Stop

 

function calculate_bmi(weight, height) {
    var bmi = weight / (height ** 2);
    return bmi;
}

function interpret_bmi(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

var weight = parseFloat(prompt("Enter weight in kilograms: "));
var height = parseFloat(prompt("Enter height in meters: "));

var bmi = calculate_bmi(weight, height);
var interpretation = interpret_bmi(bmi);

console.log("BMI: " + bmi);
console.log("Interpretation: " + interpretation);