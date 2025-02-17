// transition.js
document.addEventListener("DOMContentLoaded", function() {
    // Efek fade-in saat halaman dimuat
    document.body.classList.remove("fade-out");

    // Efek fade-out saat link di-klik
    document.querySelectorAll("a.link").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const href = this.getAttribute("href");

            document.body.classList.add("fade-out");

            setTimeout(function() {
                window.location.href = href;
            }, 500); // Sesuaikan dengan durasi transisi
        });
    });
});
