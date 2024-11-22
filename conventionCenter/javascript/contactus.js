function validateNumber(str) {
  return /^([0-9]+-)*([0-9]+)$/.test(str);
}

function validasi(event) {
  // Mencegah form disubmit
  event.preventDefault();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("checkboxError").textContent = "";

  var isValid = true;
  // Validasi Panjang Karakter
  var fullname = document.getElementById("name").value;

  if (fullname === "") {
    isValid = false;
    document.getElementById("nameError").textContent = "A name is required";
  }

  // Validasi Email
  var email = document.getElementById("email").value;
  if (email.length < 1) {
    isValid = false;
    document.getElementById("emailError").textContent =
      "An email address is required";
  } else if (!email.endsWith("@gmail.com")) {
    isValid = false;
    document.getElementById("emailError").textContent =
      "Please enter a valid email address";
  }

  var phone = document.getElementById("phone").value;
  if (!validateNumber(phone)) {
    isValid = false;
    document.getElementById("phoneError").textContent =
      "A phone number must be number between (0-9)";
  } else if (phone.length < 11) {
    isValid = false;
    document.getElementById("phoneError").textContent =
      "A phone number must be valid";
  }

  var message = document.getElementById("message").value;
  if (message.length < 1) {
    isValid = false;
    document.getElementById("messageError").textContent =
      "A message is required";
  }

  // Validasi Send Copy (checkbox)
  var agree = document.getElementById("email-checkbox").checked;
  var agreee = document.getElementById("phone-checkbox").checked;
  if (!agree && !agreee) {
    isValid = false;
    document.getElementById("checkboxError").textContent =
      "Please at least check one of the checkbox";
  }

  if (isValid) {
    alert("Form Submited!");
    document.getElementById("form").submit();
  }
}
