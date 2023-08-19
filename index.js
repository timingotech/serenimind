document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            const post = event.target.closest(".blog-post");
            post.classList.toggle("expanded");
            event.preventDefault();
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            const post = event.target.closest(".blog-post");
            const expandedContent = post.querySelector(".expanded-content");
            const readMoreText = post.querySelector(".read-more");
            
            if (expandedContent.style.display === "none" || expandedContent.style.display === "") {
                expandedContent.style.display = "block";
                readMoreText.textContent = "Read less";
            } else {
                expandedContent.style.display = "none";
                readMoreText.textContent = "Read more";
            }
            
            event.preventDefault();
        });
    });
});
// Add this code to your index.js script or an external JS file

const hamburger = document.querySelector('.hamburger-menu');
const navigationBar = document.querySelector('.navigation-bar');

hamburger.addEventListener('click', () => {
    navigationBar.classList.toggle('active');
});
