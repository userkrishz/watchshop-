document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      const container = document.getElementById("navbar-container");
      if (container) {
        container.innerHTML = data;

        // Auto-detect current page and set active class
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const links = container.querySelectorAll(".nav-links a");
        
        links.forEach((link) => {
          if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });

        // Sync cart count badge if cart.js exists
        if (typeof updateCartBadge === "function") {
          updateCartBadge();
        }
      }
    })
    .catch((err) => console.error("Error loading navbar:", err));
});