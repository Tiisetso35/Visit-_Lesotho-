document.addEventListener("DOMContentLoaded", function() {
    // Form Validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name) {
                alert("Please enter your name.");
                event.preventDefault();
                return;
            }

            if (!email || !validateEmail(email)) {
                alert("Please enter a valid email address.");
                event.preventDefault();
                return;
            }

            if (!message) {
                alert("Please enter your message.");
                event.preventDefault();
                return;
            }
        });
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    // Toggle Product Details
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const details = this.nextElementSibling;
            details.style.display = (details.style.display === "block") ? "none" : "block";
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Filter Products by Category
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category) {
        const allProducts = document.querySelectorAll('.product');
        allProducts.forEach(product => {
            if (!product.classList.contains(category)) {
                product.style.display = 'none'; // Hide products that don't match the category
            }
        });
    }
});
