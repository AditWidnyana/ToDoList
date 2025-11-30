// Ambil elemen DOM
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// Event tambah tugas
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const task = input.value.trim();

  // Validasi input tidak boleh kosong
  if (task === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  // Buat item tugas baru
  const li = document.createElement("li");
  li.className = "todo-item";

  li.innerHTML = `
        <span class="text">${task}</span>
        <div>
            <button class="btn btn-complete">Selesai</button>
            <button class="btn btn-delete">Hapus</button>
        </div>
    `;

  // Masukkan ke daftar
  list.appendChild(li);

  // Kosongkan input setelah submit
  input.value = "";
});

// Event Delegation untuk complete & delete
list.addEventListener("click", function (e) {
  const target = e.target;

  // DOM Traversing ke parent .todo-item
  const item = target.closest(".todo-item");

  if (target.classList.contains("btn-complete")) {
    // Toggle class completed
    item.classList.toggle("completed");
  }

  if (target.classList.contains("btn-delete")) {
    item.remove();
  }
});
