let counter = 0;

const cookieButton = document.getElementById("cookie");
const counterDisplay = document.getElementById("counter");

cookieButton.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
});
