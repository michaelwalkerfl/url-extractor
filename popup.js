document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({ action: "getUrls" }, function(response) {
        document.getElementById('urls').value = response.urls.join('\n');
    });

    document.getElementById('copy').addEventListener('click', function() {
        document.getElementById('urls').select();
        document.execCommand('copy');

        // Show the "URLs Copied" message
        document.getElementById('copied-msg').style.display = 'block';

        // Hide the message after a short delay
        setTimeout(function() {
            document.getElementById('copied-msg').style.display = 'none';
        }, 2000);
    });
});