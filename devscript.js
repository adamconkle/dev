        function openIframe() {
            document.getElementById('iframeOverlay').classList.add('show');
        }

        function closeIframe(event) {
            if (event.target.classList.contains('iframe-overlay') || event.target.classList.contains('close-btn')) {
                document.getElementById('iframeOverlay').classList.remove('show');
            }
        }
