// Export the functions
module.exports = {
  validateName,
  validateEmail,
  validateTerms,
  validateResume,
  validateDate,
  validCoverletter,
};

//validate username (Required)
function validateName() {
  const nameField = document.getElementById("name");
  const errorField = document.getElementById("username-error");
  const value = nameField.value.trim();

  if (!value) {
    errorField.innerText = "This field is required!";
    return false;
  }

  errorField.innerText = "";
  return true;
}

// Validate email format & (Required)
function validateEmail() {
  const emailField = document.getElementById("email");
  const errorField = document.getElementById("email-error");
  const value = emailField.value.trim();
  const emailRegex = /^[a-z0-9._%+-]+@cit\.just\.edu\.jo$/i;
  if (!value) {
    errorField.innerText = "This field is required!";
    return false;
  }

  if (!emailRegex.test(value)) {
    errorField.innerText = "Please enter a valid email";
    return false;
  }

  errorField.innerText = "";
  return true;
}

// Validate phone number format (Jordanian numbers)  && (Required)
function validatePhoneNumber() {
  const phoneField = document.getElementById("phone");
  const errorField = document.getElementById("phone-error");
  const value = phoneField.value.trim();
  const phoneRegex = /^962\d{7,9}$/;

  if (!value) {
    errorField.innerText = "This field is required!";
    return false;
  }

  if (!phoneRegex.test(value)) {
    errorField.innerText = "Please enter a valid number starting with 962";
    return false;
  }

  errorField.innerText = "";
  return true;
}

//validate linked-in if empty
function validateLink() {
  const givenLink = document.getElementById("link");
  const errormsg = document.getElementById("link-error");

  if (!givenLink.value.trim()) {
    errormsg.innerText = "This field is required!";
    return false;
  } else {
    errormsg.innerText = "";
    return true;
  }
}

function validatePosition() {
  const selected = document.getElementById("position").value;
  const errormsg = document.getElementById("position-error");
  if (!selected) {
    errormsg.innerText = "Please Select a position!";
    return false;
  } else {
    errormsg.innerText = "";
    return true;
  }
}

function validateExperience() {
  const selectedExperience = document.querySelector(
    'input[name="experience"]:checked'
  );
  const errormsg = document.getElementById("experience-error");
  if (!selectedExperience) {
    errormsg.innerText = "Please select your experience level!";
    return false;
  } else {
    errormsg.innerText = "";
    return true;
  }
}
// Validate if 1 to 5 programming skills are selected
function validateCheckboxes() {
  //array of checked boxes
  const checkboxes = document.querySelectorAll(
    'input[name="ProgrammingSkills"]:checked'
  );
  const errormsg = document.getElementById("select-errormsg");

  if (checkboxes.length < 1 || checkboxes.length > 5) {
    errormsg.innerText = "Please select between 1 and 5 programming languages.";
    return false;
  } else {
    errormsg.innerText = "";
    return true;
  }
}
// Ensure cover letter has at least 20 words
function validCoverletter() {
  const coverletterText = document.getElementById("coverletter");
  const wordcounter = coverletterText.value.trim().split(/\s+/).length;
  const errormsg = document.getElementById("wordcounter-error");

  if (!coverletterText.value.trim()) {
    errormsg.innerText = "This field is required!";
    return false;
  } else errormsg.innerText = "";

  if (wordcounter < 20) {
    errormsg.innerText = "Please enter at least 20 words.";
    return false;
  } else {
    errormsg.innerText = "";
    return true;
  }
}
// Ensure start date is not before today
function validateDate() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to 00:00:00 to compare by date only

  const date = document.getElementById("startdate");
  const selectedDate = new Date(date.value);
  selectedDate.setHours(0, 0, 0, 0); // Reset selected date's time to 00:00:00

  const errormsg = document.getElementById("date-error");

  if (!date.value) {
    errormsg.innerText = "Please select a date!";
    return false;
  } else errormsg.innerText = "";

  if (selectedDate < today) {
    errormsg.innerText = "The start date cannot be in the past!";
    return false;
  } else {
    errormsg.innerText = "";
    return true;
  }
}

function validateResume() {
  const inputResume = document.getElementById("resume").value;
  const errormsg = document.getElementById("resume-error");

  if (!inputResume) {
    errormsg.innerText = "This field is required!";
    return false;
  } else {
    errormsg.innerText = "";
    return true;
  }
}

// Validate terms and conditions checkbox
function validateTerms() {
  const termsCheckbox = document.getElementById("terms");
  const errormsg = document.getElementById("terms-error");
  if (!termsCheckbox.checked) {
    errormsg.innerText = "You must agree to the terms and conditions.";
    return false;
  } else {
    errormsg.innerText = "";
    return true;
  }
}

function validateForm(event) {
  event.preventDefault(); // Prevent form submission before validation

  //validate each field
  const isValidName = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhoneNumber();
  const LinkIsValid = validateLink();
  const positionIsValid = validatePosition();
  const ExperienceIsValid = validateExperience();
  const isCheckboxesValid = validateCheckboxes();
  const isTermsValid = validateTerms();
  const isDateValid = validateDate();
  const ResumeIsValid = validateResume();
  const isCoverletterValid = validCoverletter();

  // If all validations pass, allow form submission
  const form = document.getElementById("job-application-form");
  if (
    isValidName &&
    isEmailValid &&
    isPhoneValid &&
    LinkIsValid &&
    positionIsValid &&
    ExperienceIsValid &&
    isCheckboxesValid &&
    isTermsValid &&
    isDateValid &&
    ResumeIsValid &&
    isCoverletterValid
  ) {
    console.log("form is valid");
    form.submit();
  } else console.log("form is not valid");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("job-application-form");
  // Attach the form validation to the submit button
  form.addEventListener("submit", validateForm);
});
