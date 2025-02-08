const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const yeheyText = document.getElementById("yehey-text");

// Disable No button initially
noBtn.disabled = true;

yesBtn.addEventListener("click", () => {
    // Show the "Yeheyyy" text in a customizable position
    yeheyText.style.left = "50%";  // Change this for position
    yeheyText.style.top = "80%";   // Change this for position
    yeheyText.style.fontSize = "30px"; // Customize font size
    yeheyText.style.color = "blue"; // Customize text color
    yeheyText.style.transform = "translate(-50%, -50%)";
    yeheyText.style.display = "block";

    // Create lots of hearts floating from the bottom
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}
