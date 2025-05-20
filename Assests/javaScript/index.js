let cookies = 0;
let cookiesPerNigger = 1;
let upgradeCost = 10;

const cookieButton = document.getElementById("cookie");
const counterDisplay = document.getElementById("counter");
const upgradeButton = document.getElementById("upgrade");
const upgradeCostDisplay = document.getElementById("upgrade-cost");

// Cookie click event
cookieButton.addEventListener("click", () => {
    cookies += cookiesPerNigger;
    counterDisplay.textContent = cookies;
});

// Upgrade click event
upgradeButton.addEventListener("click", () => {
    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        cookiesPerNigger *= 2;
        upgradeCost = Math.floor(upgradeCost * 2.5);

        // Update displays
        counterDisplay.textContent = cookies;
        upgradeCostDisplay.textContent = upgradeCost;
    }
});
