function submitForm(event) {
  event.preventDefault();
  alert("Form submitted successfully!");

  const mandatoryFields = [
    "firstName",
    "lastName",
    "dob",
    "gender",
    "caste",
    "email",
    "phoneNumber",
    "qualification",
    "passingYear",
    "department",
    "jobLocation",
    "documentUpload",
    "agreeTerms",
  ];
  for (const field of mandatoryFields) {
    const value = document.getElementById(field).value.trim();
    if (!value) {
      document.getElementById("errorMessage").innerHTML =
        "Please fill out all mandatory fields.";
      return;
    }
  }
  const form = document.getElementById("form");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const tel = document.getElementById("tel");
  const qualification = document.getElementById("form");
  const passingYear = document.getElementById("passingYear");
  const percentage = document.getElementById("percentage");
}

// const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const email1 = document.getElementById("email").value.trim();
// if (!email.test(email1)) {
//   document.getElementById("errorMessage").innerHTML =
//     "Please enter a valid email address.";
//   return;
// }

// const phone = /^\d{10}$/;
// const phoneNumber = document.getElementById("phoneNumber").value.trim();
// if (!phone.test(phoneNumber)) {
//   document.getElementById("errorMessage").innerHTML =
//     "Please enter a valid phone number.";
//   return;
// }
// const year = /^\d{4}$/;
// const yearOfPassing = document.getElementById("passingYear").value.trim();
// if (!year.test(yearOfPassing)) {
//   document.getElementById("errorMessage").innerHTML =
//     "Please enter a valid year.";
//   return;
// }
// var div = document.getElementById("scstDetails");
// var display = 0;
// function show() {
//   if (scstdetails == 1) {
//     div.style.display = "block";
//     display = 0;
//   } else {
//     div.style.display = "none";
//     display = 1;
//   }
// }
