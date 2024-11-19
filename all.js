let Banner = document.querySelector('.baner');
let about = document.getElementById('about-us');
let foodItems = document.querySelectorAll('.food .card'); // Select all food items
let contact = document.querySelector('.contacts'); // Correctly select the "contacts" section

function homes() {
    Banner.style.display = "flex"; // Show Banner
    about.style.display = "none"; // Hide About Section
    contact.style.display = "none"; // Hide Contact Section
    foodItems.forEach(item => item.style.display = 'block'); // Show Food Items
}

function abouts() {
    Banner.style.display = "none"; // Hide Banner
    about.style.display = "block"; // Show About Section
    contact.style.display = "none"; // Hide Contact Section
    foodItems.forEach(item => item.style.display = 'none'); // Hide Food Items
}

function menue() {
    Banner.style.display = "none"; // Hide Banner
    about.style.display = "none"; // Hide About Section
    contact.style.display = "none"; // Hide Contact Section
    foodItems.forEach(item => item.style.display = 'block'); // Show Food Items
}

function contacts() {
    Banner.style.display = "none"; // Hide Banner
    about.style.display = "none"; // Hide About Section
    foodItems.forEach(item => item.style.display = 'none'); // Hide Food Items
    contact.style.display = "block"; // Show Contact Section
}
