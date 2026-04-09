// Change background pattern based on screen size
if (window.innerWidth < 600) {
  document.getElementById("background-pattern").src =
    "./assets/images/background-pattern-mobile.svg";
} else {
  document.getElementById("background-pattern").src =
    "./assets/images/background-pattern-desktop.svg";
}

// FAQ Accordion functionality
const faqItems = document.querySelectorAll("article");

faqItems.forEach((article) => {
  const button = article.querySelector("button").querySelector("img");
  button.src = "./assets/images/icon-plus.svg";

  article.addEventListener("click", () => {
    faqItems.forEach((faqItem) => {
      if (faqItem !== article) {
        const otherContent = faqItem.querySelector("p");
        document.querySelectorAll("article button").forEach((btn) => {
          btn.setAttribute("aria-expanded", "false");
        });
        otherContent.classList.add("hidden");
        otherContent.setAttribute("aria-hidden", "true");
        const otherButton = faqItem
          .querySelector("button")
          .querySelector("img");
        otherButton.src = "./assets/images/icon-plus.svg";
      }
    });

    const content = article.querySelector("p");
    content.classList.toggle("hidden");
    document.querySelectorAll("article button").forEach((btn) => {
      if (btn.contains(button)) {
        btn.setAttribute(
          "aria-expanded",
          !content.classList.contains("hidden"),
        );
      }
    });

    content.setAttribute("aria-hidden", content.classList.contains("hidden"));
    if (content.classList.contains("hidden")) {
      button.src = "./assets/images/icon-plus.svg";
    } else {
      button.src = "./assets/images/icon-minus.svg";
    }
  });
});
