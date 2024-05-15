
function validateForm() {
  let isValid = true;

  // Get references to form elements
  // select the input elements from the form and selected the corresponding elements where error messages would be displayed if not filled out
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  // Reset error messages
  //clear any previous error messages displayed to the user before performing new validation checks
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  // Name validation
  //The if statement checks if the name input field is empty after trimming whitespace.
  //If the field is empty, an error message is displayed to the user.
  //The isValid flag is set to false to indicate that the form is not ready for submission.
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Please fill out this field';
    isValid = false;
  }

  // Email validation
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Please fill out this field';
    isValid = false;
  

  // Message validation
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Please fill out this field';
    isValid = false;
  }

  return isValid;
}


}
