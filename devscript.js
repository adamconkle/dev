document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("iframeOverlay");
    const closeBtn = document.querySelector(".close-btn");

    function openIframe() {
        overlay.classList.add("show");
    }

    function closeIframe(event) {
        // Ensure the event is triggered only when clicking outside the iframe or on the close button
        if (event.target.classList.contains("iframe-overlay") || event.target.classList.contains("close-btn")) {
            overlay.classList.remove("show");
        }
    }

    // Attach event listeners
    overlay.addEventListener("click", closeIframe);
    overlay.addEventListener("touchstart", closeIframe); // Fix for mobile touch

    closeBtn.addEventListener("click", closeIframe);
    closeBtn.addEventListener("touchstart", closeIframe); // Extra fix for mobile
});
