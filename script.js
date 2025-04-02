// Selecting elements
const button = document.getElementById("clickMe");
const input = document.getElementById("inputField");
const output = document.getElementById("output");

// Event Listener for Button Click
button.addEventListener("click", () => {
    output.textContent = "Button was clicked!";
});

// Event Listener for Input Field
input.addEventListener("input", (event) => {
    output.textContent = `You typed: ${event.target.value}`;
});

// Event Delegation Example
document.body.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        console.log("A button was clicked!", event.target);
    }
});

// Custom Event Example
const customEvent = new Event("customEvent");
document.addEventListener("customEvent", () => {
    console.log("Custom event triggered!");
});
document.dispatchEvent(customEvent);
