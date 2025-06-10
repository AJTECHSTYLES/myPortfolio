
// Create the cursor element
const cursor = document.createElement("div");
cursor.classList.add("holo-cursor");
document.body.appendChild(cursor);

// Track mouse movement
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Click effect
document.addEventListener("mousedown", () => {
  cursor.classList.add("clicked");
});

document.addEventListener("mouseup", () => {
  cursor.classList.remove("clicked");
});
