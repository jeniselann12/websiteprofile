// Section Navigation
function showSection(sectionId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Carousel for About Me
let images = document.querySelectorAll(".carousel-img");
let index = 0;

function changeImage() {
    if (images.length > 0) {
        images[index].style.opacity = 0;
        index = (index + 1) % images.length;
        images[index].style.opacity = 1;
    }
}

if (images.length > 0) {
    images[0].style.opacity = 1; // Initial image
    setInterval(changeImage, 3000);
}

// Challenges Functions
function temperatureConverter() {
    let celsius = prompt("Enter temperature in Celsius:");
    if (celsius === null || isNaN(celsius) || celsius === "") {
        alert("Please enter a valid number!");
        return;
    }
    celsius = parseFloat(celsius);
    let fahrenheit = (celsius * 9/5) + 32;
    alert(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
}

function getLongerWord() {
    let word1 = prompt("Enter a word:");
    let word2 = prompt("Enter another word:");
    if (word1 === null || word2 === null || word1 === "" || word2 === "") {
        alert("Please enter valid words!");
        return;
    }
    alert(word1.length > word2.length ? `"${word1}" is longer` : word2.length > word1.length ? `"${word2}" is longer` : `"${word1}" and "${word2}" are equal in length`);
}

function knowMyBirthstone() {
    let month = parseInt(prompt("Enter your birth month (1-12):"));
    if (isNaN(month) || month < 1 || month > 12) {
        alert("Please enter a valid month (1-12)!");
        return;
    }
    const birthstones = ["Garnet", "Amethyst", "Aquamarine", "Diamond", "Emerald", "Pearl", "Ruby", "Peridot", "Sapphire", "Opal", "Topaz", "Turquoise"];
    alert(`Your birthstone is: ${birthstones[month - 1]}`);
}

function basicOperators() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let op = prompt("Choose: +, -, *, /");
    if (isNaN(num1) || isNaN(num2) || num1 === null || num2 === null) {
        alert("Please enter valid numbers!");
        return;
    }
    let result;
    switch (op) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": 
            if (num2 === 0) {
                alert("Division by zero is not allowed!");
                return;
            }
            result = num1 / num2; 
            break;
        default: 
            alert("Invalid operator! Use +, -, *, or /");
            return;
    }
    alert(`Result: ${num1} ${op} ${num2} = ${result.toFixed(2)}`);
}

function computeAcceleration() {
    let v1 = parseFloat(prompt("Enter initial velocity (m/s):"));
    let v2 = parseFloat(prompt("Enter final velocity (m/s):"));
    let time = parseFloat(prompt("Enter time (s):"));
    if (isNaN(v1) || isNaN(v2) || isNaN(time) || v1 === null || v2 === null || time === null) {
        alert("Please enter valid numbers!");
        return;
    }
    if (time === 0) {
        alert("Time cannot be zero!");
        return;
    }
    let acc = (v2 - v1) / time;
    alert(`Acceleration: ${acc.toFixed(2)} m/s²`);
}

// Favorites Gallery
const artworks = [
    "images/art1.jpg",
	"images/art2.jpg",
	"images/art3.jpg",
	"images/art4.jpg",
	"images/art5.jpg",
	"images/art6.jpg",
	"images/art7.jpg",
	"images/art8.jpg",
	"images/art9.jpg",
   
];

let artExhibit = document.getElementById("art-exhibit");
if (artExhibit) {
    artworks.forEach((art, index) => {
        let container = document.createElement("div");
        container.innerHTML = `
            <div class="artwork" style="background-image: url('${art}')">
                <div class="heart1" onclick="toggleLike(this)">❤️</div>
            </div>
            <div class="comments-section">
                <input type="text" class="comment-input" placeholder="Add a comment...">
                <button class="comment-button" onclick="addComment(this)">Post</button>
                <ul class="comments-list"></ul>
            </div>
        `;
        artExhibit.appendChild(container);
    });
}

function toggleLike(element) {
    element.classList.toggle("liked");
}

function addComment(button) {
    let commentInput = button.previousElementSibling;
    let commentText = commentInput.value.trim();
    if (commentText !== "") {
        let commentList = button.nextElementSibling;
        let newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
}