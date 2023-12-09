document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.querySelector('.saran form');

    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const country = document.getElementById('country').value;
        const subject = document.getElementById('subject').value;
        const rating = document.querySelector('input[name="rating"]:checked').value;

        // Data yang akan dikirimkan
        const formData = {
            name: name,
            country: country,
            subject: subject,
            rating: rating
        };

        // Endpoint API untuk pengiriman data
        // const apiUrl = 'https://example.com/api/feedback'; // Ganti dengan URL endpoint yang sesuai
        const apiUrl = 'https://be-2-bandung-27-production.up.railway.app/feedback';
        
        // Konfigurasi pengiriman data menggunakan fetch
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle response dari server jika diperlukan
            console.log('Feedback successfully sent:', data);
            // Misalnya, tampilkan pesan sukses kepada pengguna
            alert('Feedback successfully sent!');
        })
        .catch(error => {
            // Tangani kesalahan jika terjadi
            console.error('There was a problem sending the feedback:', error);
            // Misalnya, tampilkan pesan kesalahan kepada pengguna
            alert('There was a problem sending the feedback. Please try again later.');
        });
    });
});
