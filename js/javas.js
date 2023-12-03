let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik 
}

// Example: Display an alert when the page loads
window.onload = function () {
    alert('Welcome to SearchNews.com!');
  };

  // Example: Toggle a class on the menu items when clicked
  document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu ul li');

    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener('click', function () {
        menuItems.forEach(function (item) {
          item.classList.remove('active');
        });

        this.classList.add('active');
      });
    });
  });

  // Add this to your js file
  document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const blogPosts = document.querySelectorAll(".conteudo");
    const searchResultMessage = document.getElementById("searchResultMessage");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        performSearch();
    });

    function performSearch() {
        const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
        let foundResults = false; // Flag to check if any results are found

        blogPosts.forEach(function (post) {
            const postContent = post.textContent.toLowerCase();
            const postTitle = post.querySelector("h1").textContent.toLowerCase();

            if (postContent.includes(searchTerm) || postTitle.includes(searchTerm)) {
                post.style.display = "block";
                foundResults = true; // Set the flag to true if at least one result is found
            } else {
                post.style.display = "none";
            }
        });

        // Show or hide the search result message
        if (foundResults) {
            searchResultMessage.style.display = "none";
        } else {
            searchResultMessage.style.display = "block";
            searchResultMessage.textContent = "News not found for the search term: " + searchTerm;
        }
    }
});