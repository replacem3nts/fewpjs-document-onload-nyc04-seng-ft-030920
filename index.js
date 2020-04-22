// Your code goes here

const testText = document.querySelector("#text")

document.addEventListener("DOMContentLoaded", function() {
    testText.textContent = "This is really cool!"
})

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );