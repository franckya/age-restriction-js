function checkAge() {
  // Get the age from the user
  var age = prompt("Please enter your age:");

  // Check if the age is under 18
  if (age < 18) {
    alert("Sorry, you cannot attend the party.");
  } else {
    alert("Welcome to the party!");
  }
}
