/* ===== 🌸 JavaScript for Looping Hearts ===== */
document.addEventListener("DOMContentLoaded", function () {
    // Start infinite heart generation
    setInterval(createHeart, 300);

    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        // Random position along the width
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "0";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000); // Remove after animation ends
    }
});
