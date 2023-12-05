document.getElementById("countryButton").addEventListener("click", function () {
    var dropdown = document.getElementById("countryDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});

window.addEventListener("click", function (event) {
    var dropdown = document.getElementById("countryDropdown");
    var button = document.getElementById("countryButton");
    if (event.target !== dropdown && event.target !== button) {
        dropdown.style.display = "none";
    }
});
function toggleReadMore() {
    const moreText = document.getElementById("moreText");
    const buttonText = document.querySelector("button");

    if (moreText.style.display === "none" || !moreText.style.display) {
        moreText.style.display = "block";
        buttonText.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        buttonText.textContent = "See More";
    }
}

const hamburgerIcon = document.querySelector('.hamburger-icon');
const mobileMenuList = document.querySelector('.mobile-menu-list');
mobileMenuList.style.display = 'none';
hamburgerIcon.addEventListener('click', () => {
    mobileMenuList.style.display = (mobileMenuList.style.display === 'none') ? 'block' : 'none';
});


