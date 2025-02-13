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

        // Responsive font size for hearts
        let size = Math.random() * 10 + 10; // Smaller for mobile
        heart.style.fontSize = size + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
});
