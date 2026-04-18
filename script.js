const images = [
    { name: 'Banga', category: 'village-girl', url: 'https://i.imgur.com/example1.jpg' },
    { name: 'Banga', category: 'mockup', url: 'https://i.imgur.com/example2.jpg' },
    { name: 'Banga', category: 'model', url: 'https://i.imgur.com/example3.jpg' },
    { name: 'Banga', category: 'animal', url: 'https://i.imgur.com/example4.jpg' },
    { name: 'Banga', category: 'nature', url: 'https://i.imgur.com/example5.jpg' },
    { name: 'Banga', category: 'girl', url: 'https://i.imgur.com/example6.jpg' }
];

function renderImages(filter = 'all') {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    
    // ফিল্টার অনুযায়ী ছবি বাছাই করা
    const filtered = filter === 'all' ? images : images.filter(i => i.category === filter);

    filtered.forEach(img => {
        gallery.innerHTML += `
            <div class="card">
                <img src="${img.url}" alt="${img.name}" loading="lazy">
                <h3>${img.name}</h3>
                <a href="${img.url}" download>
                    <button>ডাউনলোড</button>
                </a>
            </div>
        `;
    });
}

// সার্চ লজিক
document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        // কার্ডের ডিসপ্লে স্টাইল পরিবর্তন করা
        card.style.display = title.includes(term) ? 'block' : 'none';
    });
});

// শুরুর দিকে সব ছবি দেখানোর জন্য
renderImages();
