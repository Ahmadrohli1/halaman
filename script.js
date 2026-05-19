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
    if(window.innerWidth < 768 && open) toggle();
}

function post() {
    const text = document.getElementById('txt').value;
    const file = document.getElementById('img').files[0];
    const feed = document.getElementById('feed');
    if(!text && !file) return alert("Isi teks atau pilih foto!");

    const reader = new FileReader();
    reader.onload = function(e) {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<button class="del-btn" onclick="del(this)">Hapus</button>
                         ${file ? `<img src="${e.target.result}">` : ''}
                         <p>${text}</p>`;
        feed.prepend(div);
        document.getElementById('txt').value = '';
    }
    if(file) reader.readAsDataURL(file); else reader.onload({target:{result:''}});
}

function del(btn) {
    if(prompt("Masukkan Kunci Admin:") === "ahmad123") btn.parentElement.remove();
    else alert("Salah!");
}
