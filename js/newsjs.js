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
    fetch(`https://be-2-bandung-27-production.up.railway.app/news/${searchTerm}`) // Ganti URL dengan URL sesuai API yang ingin kamu gunakan
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


function templateNews (item) {
    return` <div class="conteudo">
    <div class="post-info">
        Di Posting Oleh <b>${item.created_by}</b>
    </div>
<img src=${item.image_url}>
<h1> ${item.judul} </h1>
<hr>
<p>${item.deskripsi}</p>
<a href=${item.link_berita} target="_blank" title=${item.judul} rel="bookmark">In Full →</a>
</div>`
} 

function templateInfo (item){
    return `<div class="widget">
    <div>
        <img class="widget-pict" src=${item.image_url} alt="pict" width="100%">
    </div>
    
    <h2>Info</h2>
    <p>${item.judul}</p>
    <a href=${item.link_berita} target="_blank">In Full →</a>
</div>`
}

function getAllNews () {
fetch('https://be-2-bandung-27-production.up.railway.app/news')
.then(item=>item.json())
.then(data=>{
const containerNews=document.getElementById("container-news")
const containerInfo=document.getElementById("container-info")
const newsFilter=data.filter(item=>item.news_type===1)
const infoFilter=data.filter(item=>item.news_type===2)
let infoContent=""
let content=""
newsFilter.map(item=>{
    content+=templateNews(item)
})
infoFilter.map(item=>{
    infoContent+=templateInfo(item)
})
containerInfo.innerHTML=infoContent
containerNews.innerHTML=content
})
}
getAllNews()



       
