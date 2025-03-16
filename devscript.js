document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("iframeOverlay");
    const openBtn = document.querySelector(".open-btn");
    const closeBtn = document.querySelector(".close-btn");

    function openIframe() {
        overlay.classList.add("show");
        document.body.classList.add('no-scroll'); // Disable page scroll
    }

    function closeIframe(event) {
        // Ensure close action triggers on overlay click or close button click
        if (event.target === overlay || event.target === closeBtn) {
            overlay.classList.remove("show");
            document.body.classList.remove('no-scroll'); // Re-enable page scroll
        }
    }

    // Open button event listeners
    openBtn.addEventListener("click", openIframe);
    openBtn.addEventListener("touchstart", openIframe); // Ensures touch works on mobile

    // Close event listeners
    overlay.addEventListener("click", closeIframe);
    closeBtn.addEventListener("click", closeIframe);
    overlay.addEventListener("touchstart", closeIframe); // Fix for mobile
    closeBtn.addEventListener("touchstart", closeIframe); // Extra fix for mobile
});
