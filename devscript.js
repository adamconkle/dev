function openIframe() {
     document.getElementById('iframeOverlay').classList.add('show');
}

function closeIframe(event) {
     if (event.target.classList.contains('iframe-overlay') || event.target.classList.contains('close-btn')) {
         document.getElementById('iframeOverlay').classList.remove('show');
     }
}


// Buy Me A Coffee
<script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="adamcdesigns" data-description="Support me on Buy me a coffee!" data-message="Your support is greatly appreciated!" data-color="#40DCA5" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
