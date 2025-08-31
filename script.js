function hitungUmur() {
  let tahunLahir = prompt("Masukkan tahun lahirmu (contoh: 2005):");
  let tahunSekarang = new Date().getFullYear();

  if (tahunLahir && !isNaN(tahunLahir)) {
    let umur = tahunSekarang - parseInt(tahunLahir);

    // Simpan ke localStorage
    localStorage.setItem("umurUser", umur);

    // Pindah ke halaman hasil
    window.location.href = "hasil.html";
  }
}
