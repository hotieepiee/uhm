const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const yeheyText = document.getElementById("yehey-text");

// Disable No button initially
noBtn.disabled = true;

yesBtn.addEventListener("click", () => {
    // Show the "Yeheyyy" text
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
