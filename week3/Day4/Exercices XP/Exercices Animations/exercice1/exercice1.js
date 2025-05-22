// Part I: alert "Hello World" after 2 seconds
setTimeout(() => {
    alert("Hello World");
}, 2000);

// Part II: add a paragraph <p>Hello World</p> after 2 seconds
setTimeout(() => {
    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
}, 2000);

// Part III: add a new paragraph every 2 seconds
const container = document.getElementById("container");
let intervalId = setInterval(() => {
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);

    // Clear interval if 5 paragraphs added
    if (container.getElementsByTagName("p").length >= 5) {
        clearInterval(intervalId);
    }
}, 2000);

// Clear interval on button click
document.getElementById("clear").addEventListener("click", () => {
    clearInterval(intervalId);
});
