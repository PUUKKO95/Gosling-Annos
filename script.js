let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

let gifImage = document.getElementById("gif"); // Change to "gif" to match HTML
let staticImage = document.getElementById("static"); // Change to "static" to match HTML

console.log(saveEl);

function increment() {
    count += 1;
    countEl.textContent = count;
    // Play GIF by displaying it and hiding the static image
    gifImage.style.display = "block";
    staticImage.style.display = "none";

    // Reset back to static image after the GIF's duration
    setTimeout(() => {
        gifImage.style.display = "none";
        staticImage.style.display = "block";
    }, 2200); // Change 2000 to the duration of the GIF in milliseconds
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(count);
    count = 0;
    countEl.textContent = count;
}