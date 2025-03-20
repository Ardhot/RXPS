document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.rxps-server.com/status") // Ganti dengan API status server RXPS
        .then(response => response.json())
        .then(data => {
            let statusText = data.online ? "Online ✅" : "Offline ❌";
            document.getElementById("server-status").textContent = statusText;
        })
        .catch(() => {
            document.getElementById("server-status").textContent = "Unknown ❓";
        });
});
