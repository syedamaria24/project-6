//   CHAPTER NO # 31 - 34  //

// Q # 1:
var currentDateTime = new Date();
console.log("Current Date and Time: " + currentDateTime);

// Q # 2:
var currentDate = new Date();

var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var currentMonth = monthNames[currentDate.getMonth()];

alert("The current month is: " + currentMonth);

// Q # 3:
var currentDate = new Date();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = dayNames[currentDate.getDay()];

alert("Today is: " + currentDay);

// Q # 4:
var currentDate = new Date();
var currentDay = currentDate.getDay();
if (currentDay === 0 || currentDay === 6) {
    alert("It’s Fun day!");
} 
else {
    alert("It's a regular day.");
}

// Q # 5:
var currentDate = new Date();
var dayOfMonth = currentDate.getDate();
if (dayOfMonth < 16) {
    alert("First fifteen days of the month");
} 
else {
    alert("Last days of the month");
}

// Q # 6:
var currentDate = new Date();
var minutesSince1970 = Math.floor(currentDate.getTime() / (1000 * 60));

console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970);

// Q # 7:
var currentDate = new Date();
var currentHour = currentDate.getHours();
if (currentHour < 12) {
    alert("It's AM");
} 
else {
    alert("It's PM");
}

// Q # 8:
var laterDate = new Date(2020, 11, 31);

alert("The last day of the last month of 2020 is: " + laterDate);

// Q # 9:
var ramadanStartDate = new Date(2015, 5, 18);
var currentDate = new Date();

var timeDifference = currentDate - ramadanStartDate;
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

console.log("Number of days passed since 1st Ramadan (June 18, 2015): " + daysPassed);

// Q # 10:
var referenceDate = new Date(2023, 0, 1);
var startOf2015 = new Date(2015, 0, 1); 

var timeDifference = referenceDate - startOf2015;
var secondsElapsed = Math.floor(timeDifference / 1000);

console.log("Seconds that elapsed between the reference date and the beginning of 2015: " + secondsElapsed);

// Q # 11:
var currentDate = new Date();

var currentHours = currentDate.getHours();
// console.log("Current Hours: " + currentHours); 
currentDate.setHours(currentHours + 1);

console.log("Updated Date and Time (1 hour ahead): " + currentDate);

// Q # 12:
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);

alert("The date 100 years back is: " + currentDate.toDateString());

// Q # 13:
var age = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

console.log("Your birth year is: " + birthYear);

// Q # 14:
function generateBill() {
    
    let customerName = prompt("Please enter your name:");
    let currentMonth = new Date().toLocaleString('default', { month: 'long' });

    let numberOfUnits = parseFloat(prompt("Enter the number of units consumed:"));
    let chargesPerUnit = parseFloat(prompt("Enter the charges per unit:"));
    
    // Define late payment surcharge
    const latePaymentSurcharge = 100; // Example late payment surcharge

    // Calculate net amount payable
    let netAmountPayable = numberOfUnits * chargesPerUnit;

    // Calculate gross amount payable after due date
    let grossAmountPayable = netAmountPayable + latePaymentSurcharge;

    // Round off amounts to 2 decimal places
    netAmountPayable = Math.round(netAmountPayable * 100) / 100;
    grossAmountPayable = Math.round(grossAmountPayable * 100) / 100;

    // Display the bill
    document.write("<h2>K-Electric Bill</h2>");
    document.write("Customer Name: " + customerName + "<br>");
    document.write("Current Month: " + currentMonth + "<br>");
    document.write("Number of Units: " + numberOfUnits + "<br>");
    document.write("Charges per Unit: " + chargesPerUnit + "<br>");
    document.write("Net Amount Payable (within Due Date): " + netAmountPayable + " PKR<br>");
    document.write("Late Payment Surcharge: " + latePaymentSurcharge + " PKR<br>");
    document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable + " PKR<br>" + "<br>");
}
generateBill();

                      // // // // // // // // //

//  CHAPTER NO # 35 - 38 //

// Q # 1:
function displayCurrentDateTime() {
    var currentDate = new Date();
    document.write("Current Date and Time: " + currentDate);
}
displayCurrentDateTime();

// Q # 2:
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;

    alert("Hello, " + fullName + "! Welcome!");
}

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
greetUser(firstName, lastName);

// Q # 3:
function addNumbers(num1, num2) {
    return num1 + num2;
}
var number1 = parseFloat(prompt("Enter the first number:"));
var number2 = parseFloat(prompt("Enter the second number:"));

var sum = addNumbers(number1, number2);

alert("The sum of the two numbers is: " + sum);

// Q # 4:
function calculate(num1, num2, operator) {
    let result;
    if (operator === '+') {
        result = num1 + num2;
    } 
    else if (operator === '-') {
        result = num1 - num2;
    } 
    else if (operator === '*') {
        result = num1 * num2;
    } 
    else if (operator === '/') {
        result = num1 / num2;
    } 
    else if (operator === '%') {
        result = num1 % num2;
    } 
    else {
        result = "Invalid operator";
    }
    document.write("Result: " + result);

    return result;
}
var number1 = parseFloat(prompt("Enter the first number:"));
var number2 = parseFloat(prompt("Enter the second number:"));
var operator = prompt("Enter an operator (+, -, *, /, %):");

calculate(number1, number2, operator);

// Q # 5:
function square(number) {
    return number * number;
}
var num = parseFloat(prompt("Enter a number to square:"));
var result = square(num);

alert("The square of " + num + " is: " + result);

// Q # 6:
function factorial(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    
    if (num === 0) {
        return 1;
    }
    
    var result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
var number = parseInt(prompt("Enter a non-negative integer:"));
var result = factorial(number);

console.log("The factorial of " + number + " is: " + result);

// Q # 7:
function displayCounting(start, end) {
   var counting = "";
    for (let i = start; i <= end; i++) {
        counting += i + " ";
    }

    document.write("Counting from " + start + " to " + end + ":<br>" + counting);
}
var startNumber = parseInt(prompt("Enter the start number:"));
var endNumber = parseInt(prompt("Enter the end number:"));

displayCounting(startNumber, endNumber);

// Q # 8:
function calculateHypotenuse() {
    var base = parseFloat(prompt("Enter the length of the base:"));
    var perpendicular = parseFloat(prompt("Enter the length of the perpendicular:"));

    function calculateSquare(number) {
        return number * number;
    }
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);

    var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

    console.log("The hypotenuse of the triangle is: " + hypotenuse.toFixed(2));
}
calculateHypotenuse();

// Q # 9:
function calculateArea(width, height) {
    return width * height; 
}

// Case 1: Arguments as values
var areaWithValues = calculateArea(5, 10);
console.log("Area of the rectangle (using values): " + areaWithValues);

// Case 2: Arguments as variables
var rectangleWidth = 7;
var rectangleHeight = 12;
var areaWithVariables = calculateArea(rectangleWidth, rectangleHeight); 
console.log("Area of the rectangle (using variables): " + areaWithVariables);

// Q # 10:
function isPalindrome(str) {
    var normalizedStr = str.replace(/\s+/g, '').toLowerCase();
    
    var reversedStr = normalizedStr.split('').reverse().join('');
    
    return normalizedStr === reversedStr;
}

// Example usage:
var inputString = prompt("Enter a word or phrase to check if it's a palindrome:");
if (isPalindrome(inputString)) {
    alert(inputString + " is a palindrome.");
} 
else {
    alert(inputString + " is not a palindrome.");
}

// Q # 11:
function capitalizeWords(str) {
    var words = str.split(' ');
    var capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word;
    });
    return capitalizedWords.join(' ');
}
var inputString = 'the quick brown fox';
var outputString = capitalizeWords(inputString);
console.log(outputString);

// Q # 12:
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
var inputString = 'Web Development Tutorial';
var longestWord = findLongestWord(inputString);
console.log("The longest word is: " + longestWord);

// Q # 13:
function capitalizeWords(str) {
    var words = str.split(' ');

   var capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word; 
    });

    return capitalizedWords.join(' ');
}
var inputString = 'the quick brown fox';
var outputString = capitalizeWords(inputString);
console.log(outputString);

// Q # 14:
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
}

function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " + area.toFixed(2));
}
var radius = 5;
calcCircumference(radius);
calcArea(radius); 

      // // // // XXX XXXXXXXXXXXXX XXX // // // // /

