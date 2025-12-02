let S1FPActive = false;
let scrollValue = 0;      // virtual scroll
let maxScroll = 300;      // how far you want to scroll to reveal the next layer

const box = document.querySelector(".box.S1FP");
const titleLayer = document.querySelector(".S1FP-title-layer");

// Detect hover state
box.addEventListener("mouseenter", () => {
    S1FPActive = true;
});

box.addEventListener("mouseleave", () => {
    S1FPActive = false;

    // Reset everything
    scrollValue = 0;
    box.style.transform = "translateY(0)";
    titleLayer.style.transform = "translateY(100vh)";
    titleLayer.style.opacity = 0;
});

// Handle wheel scroll only when hovering
window.addEventListener("wheel", (e) => {
    if (!S1FPActive) return;

    // prevent default scroll
    e.preventDefault();

    // adjust virtual scroll value
    scrollValue += e.deltaY;

    // clamp between 0 and maxScroll
    scrollValue = Math.max(0, Math.min(scrollValue, maxScroll));

    // calculate normalized scroll progress (0 → 1)
    let t = scrollValue / maxScroll;

    // Move the box upward
    box.style.transform = `translateY(${-t * 200}px)`; 

    // Bring the title layer upward into view
    titleLayer.style.transform = `translateY(${100 - t * 100}vh)`;
    titleLayer.style.opacity = t;
}, { passive: false });
