document.getElementById("yes-button").addEventListener("click", function () {
    document.getElementById("celebration-container").style.display = "block";

    for (let i = 0; i < 50; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}
