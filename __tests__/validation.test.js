const {
  validateName,
  validateEmail,
  validateTerms,
  validateResume,
  validateDate,
  validCoverletter,
} = require("../form");

beforeEach(() => {
  document.body.innerHTML = `
    <form id="form">
      <input id="name" type="text" />
      <div id="username-error"></div>
      
      <input id="email" type="text" />
      <div id="email-error"></div> 

      <input type="checkbox" id="terms" />
      <div id="terms-error"></div>
    
          <input id="resume" type="text" />
      <div id="resume-error"></div>

      <input id="startdate" type="date" />
      <div id="date-error"></div>

      <textarea id="coverletter"></textarea>
      <div id="wordcounter-error"></div>
      </form>
  `;
});

test("validateName should return true if name is valid", () => {
  document.getElementById("name").value = "Salsabeel Musa";
  expect(validateName()).toBe(true);
});

test("validateName should return false if name is empty", () => {
  document.getElementById("name").value = "";
  expect(validateName()).toBe(false);
});

test("validateEmail should return true for valid email format", () => {
  document.getElementById("email").value = "srmusa21@cit.just.edu.jo";
  expect(validateEmail()).toBe(true);
});

test("validateEmail should return false for empty email", () => {
  document.getElementById("email").value = "";
  expect(validateEmail()).toBe(false);
});

test("validateEmail should return false for invalid email format", () => {
  document.getElementById("email").value = "salsabeel@gmail.com";
  expect(validateEmail()).toBe(false);
});

test("validateTerms should return false if checkbox is unchecked", () => {
  document.getElementById("terms").checked = false;
  expect(validateTerms()).toBe(false);
});

test("validateTerms should return true if checkbox is checked", () => {
  document.getElementById("terms").checked = true;
  expect(validateTerms()).toBe(true);
});
// Test for validateResume
test("validateResume should return false if resume field is empty", () => {
  document.getElementById("resume").value = "";
  expect(validateResume()).toBe(false);
  expect(document.getElementById("resume-error").innerText).toBe(
    "This field is required!"
  );
});

// Test for validateDate
test("validateDate should return false if the selected date is in the past", () => {
  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 1); // Yesterday
  document.getElementById("startdate").value = pastDate
    .toISOString()
    .split("T")[0];
  expect(validateDate()).toBe(false);
});

// Test for validCoverletter
test("validCoverletter should return false if cover letter has less than 20 words", () => {
  document.getElementById("coverletter").value = "Too short";
  expect(validCoverletter()).toBe(false);
});
