let score = 0;
let answer1 = prompt(
  'Question 1: What does HTML stand for? A) Hyper Text Markup Language B) High Tech Modern Language',
);

if (answer1 === 'A' || answer1 === 'a') {
  score++;
} else if (answer1 === 'B' || answer1 === 'b') {
} else {
  alert('Invalid answer for question 1. Please enter A or B.');
}

let answer2 = prompt(
  'Question 2: Which language is used for styling websites? A) JavaScript B) CSS',
);

if (answer2 === 'B' || answer2 === 'b') {
  score++;
} else if (answer2 === 'A' || answer2 === 'a') {
} else {
  alert('Invalid answer for question 2. Please enter A or B.');
}

let answer3 = prompt(
  'Question 3: Which symbol is used for comments in JavaScript? A) // B) **',
);

if (answer3 === 'A' || answer3 === 'a') {
  score++;
} else if (answer3 === 'B' || answer3 === 'b') {
} else {
  alert('Invalid answer for question 3. Please enter A or B.');
}

if (score === 0) {
  alert('You got 0 correct. Keep practicing!');
} else if (score === 3) {
  alert('Perfect! You answered all questions correctly!');
} else {
  alert('Good try! You answered ' + score + ' out of 3 questions correctly.');
}
