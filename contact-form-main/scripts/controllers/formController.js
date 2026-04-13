import { validateForm } from "../models/formValidation.js";
import { announceToScreenReader } from "./screenReaderController.js";

// form submission behavior
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const inputs = new FormData(event.target);

  // reset the error messages
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => {
    message.classList.add("hidden");
    message.ariaHidden = "true";
  });

  // reset the error states of the fields
  const errorFields = document.querySelectorAll(".error");
  errorFields.forEach((field) => {
    field.ariaInvalid = "false";
    field.classList.remove("error");
  });

  // validate the form fields
  const errors = validateForm(inputs);
  if (errors.length > 0) {
    // add error class to invalid fields and show error messages
    errors.forEach((field) => {
      const input = document.getElementById(field);
      if (!["query-type", "consent"].includes(input.id))
        input.classList.add("error");
      input.nextElementSibling.classList.remove("hidden");
      announceToScreenReader(input.nextElementSibling.textContent);
      input.nextElementSibling.ariaHidden = "false";
      input.ariaInvalid = "true";
    });
  } else {
    // reset the form fields
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.value = "";
      input.checked = false;
    });

    // show the notification if the form is valid
    const notification = document.getElementById("notification");
    notification.classList.remove("hide-notification");
    notification.classList.remove("unclickable");
    notification.ariaHidden = "false";
  }
});

// show the help text for query type when the field is focused for the first time. Assuming the user was tabbing to it.
document
  .getElementById("general-enquiry")
  .addEventListener("focus", function () {
    const hasShown = sessionStorage.getItem("hasShownHelpText");
    if (hasShown) return;
    const helpText = document.getElementById("query-type-help");
    helpText.classList.remove("hidden");
    announceToScreenReader(helpText.textContent);
    sessionStorage.setItem("hasShownHelpText", "true");
  });
sessionStorage.removeItem("hasShownHelpText");

document
  .getElementById("general-enquiry")
  .addEventListener("blur", function () {
    const helpText = document.getElementById("query-type-help");
    helpText.classList.add("hidden");
  });
