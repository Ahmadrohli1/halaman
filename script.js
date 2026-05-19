let open = false;

function toggle() {
    const side = document.getElementById("sidebar");
    side.style.left = open ? "-260px" : "0";
    open = !open;
}

function show(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.getElementById('title').innerText = id.toUpperCase();
    if(window.innerWidth < 768 && open) toggle(); // Tutup sidebar otomatis di HP setelah pilih menu
}

// Fitur POST dan DEL sama seperti sebelumnya

