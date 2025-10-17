console.log("Script is loaded");

function increment () {
   console.log("The button was clicked")
}

document.getElementById("increment-btn").addEventListener("click", increment);
