function submitSignup() {
    // Get the input values
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Save the user data to local storage
    var userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    localStorage.setItem(email, JSON.stringify(userData));
  
    // Display a thank you message
    var messageElement = document.getElementById("signup-message");
    messageElement.innerHTML = "Thank you for registering!";
  }
  