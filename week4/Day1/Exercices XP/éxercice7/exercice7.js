// JavaScript
(function(username) {
    const navbar = document.getElementById("navbar");
    const div = document.createElement("div");
    div.innerHTML = `
        <span>Bienvenue, ${username}</span>
        <img src="https://i.pravatar.cc/40" alt="Profile" style="border-radius:50%; margin-left:10px;">
    `;
    div.style.display = "flex";
    div.style.alignItems = "center";
    navbar.appendChild(div);
})("John");
