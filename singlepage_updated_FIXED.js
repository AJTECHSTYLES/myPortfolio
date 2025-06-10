
// Generate floating shapes randomly
const container = document.getElementById("floatingShapes");

function createShape() {
  const shape = document.createElement("div");
  shape.style.left = Math.random() * 100 + "vw";
  shape.style.bottom = "-10px";
  shape.style.width = shape.style.height = `${Math.random() * 6 + 4}px`;
  shape.style.background = `rgba(221, 160, 221, ${Math.random() * 0.3 + 0.2})`;
  shape.style.animationDuration = `${Math.random() * 10 + 5}s`;
  container.appendChild(shape);

  setTimeout(() => {
    shape.remove();
  }, 15000);
}

setInterval(createShape, 300);

// Fade-in project grid when scrolled into view
const projectGrid = document.getElementById("projectCards");

function handleProjectScroll() {
  const rect = projectGrid.getBoundingClientRect();
  const inView = rect.top < window.innerHeight - 100;

  if (inView) {
    projectGrid.classList.add("visible");
    window.removeEventListener("scroll", handleProjectScroll); // only once
  }
}

window.addEventListener("scroll", handleProjectScroll);
handleProjectScroll(); // initial trigger

const toggleBtn = document.getElementById("toggleBtn");
const toggleImg = document.getElementById("toggleImg");
let isFirstState = true;

toggleBtn.addEventListener("click", () => {
  if (isFirstState) {
    toggleImg.src = "unanmed.png";
    window.location.href = "AJ.html";
  } else {
    toggleImg.src = "me1.jpg";
    window.location.href = "single_page_portfolio_firestore_ready.html";
  }
  isFirstState = !isFirstState;
});

// Corrected form submission logic with Firestore
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const submitBtn = this.querySelector('.view-btn');
    const originalText = submitBtn.textContent;

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
        await db.collection("messages").add({
            name,
            phone,
            subject,
            message,
            timestamp: new Date()
        });

        submitBtn.textContent = 'Message Sent!';
        document.getElementById("contactForm").reset();
    } catch (error) {
        console.error("Error sending message:", error);
        submitBtn.textContent = 'Send Failed';
    }

    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});
