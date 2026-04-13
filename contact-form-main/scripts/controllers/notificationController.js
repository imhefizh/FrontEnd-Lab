// notification closing behavior
document
  .getElementById("notification")
  .addEventListener("click", function (el) {
    // hide the notification and make it unclickable
    el.target.classList.add("hide-notification");
    el.target.classList.add("unclickable");

    // set aria-hidden to true for accessibility
    el.target.ariaHidden = "true";
  });
