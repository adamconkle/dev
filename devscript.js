document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("iframeOverlay");
    const openBtn = document.querySelector(".open-btn");
    const closeBtn = document.querySelector(".close-btn");

    function openIframe() {
        overlay.classList.add("show");
    }

    function closeIframe(event) {
        // Ensure close action triggers on overlay click or close button click
        if (event.target === overlay || event.target.classList.contains("close-btn")) {
            overlay.classList.remove("show");
        }
    }

    // Open button event listener
    openBtn.addEventListener("click", openIframe);
    openBtn.addEventListener("touchstart", openIframe); // Ensures touch works on mobile

    // Close event listeners
    overlay.addEventListener("click", closeIframe);
    overlay.addEventListener("touchstart", closeIframe); // Fix for mobile

    closeBtn.addEventListener("click", closeIframe);
    closeBtn.addEventListener("touchstart", closeIframe); // Extra fix for mobile
});
