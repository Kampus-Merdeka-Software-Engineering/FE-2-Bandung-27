// File: script.js
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
        let foundResults = false;
    // Simulasi API call (contoh dengan fetch)
    fetch(`https://api.example.com/news?search=${searchTerm}`) // Ganti URL dengan URL sesuai API yang ingin kamu gunakan
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Lakukan sesuatu dengan data yang diperoleh dari API
        // Misalnya, tampilkan hasil pencarian di halaman web
        blogPosts.forEach(function (post) {
            const postContent = post.textContent.toLowerCase();
            const postTitle = post.querySelector("h1").textContent.toLowerCase();

            if (postContent.includes(searchTerm) || postTitle.includes(searchTerm)) {
                post.style.display = "block";
                foundResults = true;
            } else {
                post.style.display = "none";
            }
        });

        if (foundResults) {
            searchResultMessage.style.display = "none";
        } else {
            searchResultMessage.style.display = "block";
            searchResultMessage.textContent = "News not found for the search term: " + searchTerm;
        }
    })
    .catch(error => {
        // Tangani kesalahan jika ada
        console.error('There was a problem fetching the data:', error);
    });
}
});

       
