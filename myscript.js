// JavaScript File
// let/const statements
let age;
// function that alerts a rating depending on user's inputted age
function ageRating() {
  // asigning age variable to the user's input
  age = document.getElementById("ageinput").value
  // if the user's age is less than 13, they are alerted that they may only watch G-rated films
  if (age < 13) {
    alert("If you're only " + age + " years old, then you can only watch G-rated movies.");
  }
  // if the user's age is less than 17, they are alerted that they can watch PG-13 or G movies
  else if (age < 17) {
    alert("If you are " + age + ", you can watch films rated G or PG-13.");
  }
  // if the user's age is less than 150, they are alerted that they can watch any movie
  else if (age < 150) {
    alert("If you are " + age + ", you may see any film you'd like, whether that be R, PG-13, or G.");
  }
  //if the user's age is more than 150, they are alerted that they probably can't watch any movie :(
  else {
   alert("If that's your age, you are probably unable to see any movie...");
  }
}
//event listener that triggers ageRating function when button is pressed
document.getElementById("btn").addEventListener("click", ageRating);
