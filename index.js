// Create a header element
var header = document.createElement("header");
header.textContent = "Tour Planner";

// Append the header to the body
document.body.appendChild(header);

// Create a navigation menu
var navMenu = document.createElement("nav");

// Create and add links to the navigation menu
var homeLink = document.createElement("a");
homeLink.textContent = "Home";
homeLink.href = "#home";
navMenu.appendChild(homeLink);

var destinationsLink = document.createElement("a");
destinationsLink.textContent = "Destinations";
destinationsLink.href = "#destinations";
navMenu.appendChild(destinationsLink);

var aboutLink = document.createElement("a");
aboutLink.textContent = "About Us";
aboutLink.href = "#about";
navMenu.appendChild(aboutLink);

// Append the navigation menu to the body
document.body.appendChild(navMenu);

// Create a section for the home content
var homeSection = document.createElement("section");
homeSection.id = "home";
homeSection.textContent = "Welcome to our Tour Planner website! Plan your dream vacation with us.";

// Append the home section to the body
document.body.appendChild(homeSection);

// Create a section for destinations
var destinationsSection = document.createElement("section");
destinationsSection.id = "destinations";
destinationsSection.textContent = "Explore our exciting destinations and choose your next adventure.";

// Append the destinations section to the body
document.body.appendChild(destinationsSection);

// Create a section for about us content
var aboutSection = document.createElement("section");
aboutSection.id = "about";
aboutSection.textContent = "Learn more about our company and our commitment to providing the best travel experiences.";

// Append the about section to the body
document.body.appendChild(aboutSection);

// Create a footer element
var footer = document.createElement("footer");
footer.textContent = "Copyright © 2023 Tour Planner";

// Append the footer to the body
document.body.appendChild(footer);
