    // JavaScript- script.js
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});
const favoriteThings = [
    {
        title: "Rice and Stew with fat laps of Chicken",
        description: "Delicous white rice and banga"
    },
    {
        title:  "Reading",
        description: "I love to read my books alot",
    }
];
const cardContainer = document.getElementById("card-container");
favoriteThings.forEach(item =>{
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="c:\Users\hp\Pictures\Screenshot_20241212-063254 (2).png" alt="picture">
        <h3>MY PROFILE</h3>
        <p>This is my profile picture</p>
        <a href="" target= "_blank">Click for more</a>
    `;
    cardContainer.appendChild(card);
});
const contactForm = document.getElementById("contact-form");
const formMsg = document.getElementById("form-msg");
 
contactForm.addEventListener("submit" ,(e) => {
    e.preventDefault();
    const name = document.getElementById("name").Value.trim();
    const email = document.getElementById("email").Value.trim();
    const message = document.getElementById("message").Value.trim();

    if (!name || !email || !message){
        formMsg.textContent = "please fill in all fields men!";
        formMsg.style.color = "red";
        return;
    }

    formMsg.textContent = "Thank's men, ${name}! Your message has been sent men.";
    formMsg.style.color = "green";
    contactForm.reset();
});
