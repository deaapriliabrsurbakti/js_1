// Latihan 1: Hitung Luas Persegi Panjang
function hitungLuas() {
  const panjang = document.getElementById('panjang').value;
  const lebar = document.getElementById('lebar').value;
  const luas = panjang * lebar;
  document.getElementById('hasilLuas').textContent = `Luas: ${luas}`;
}

// Latihan 2: Cek Nilai
function cekNilai() {
  const nilai = document.getElementById('nilai').value;
  let hasil = "";
  if (nilai >= 75) {
    hasil = "Lulus";
  } else {
    hasil = "Tidak Lulus";
  }
  document.getElementById('hasilNilai').textContent = `Status: ${hasil}`;
}

// Latihan 3: Tampilkan Daftar Belanja dari Array
const daftar = ["Beras", "Minyak", "Telur", "Mie Instan"];
const daftarList = document.getElementById('daftarBelanja');
daftar.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  daftarList.appendChild(li);
});

// Latihan 4: Tampilkan Biodata dari Object
function tampilBiodata() {
  const biodata = {
    nama: "Irwan Tarigan",
    umur: 22,
    hobi: ["Coding", "Membaca", "Futsal"],
    alamat: "Binjai, Sumatera Utara"
  };

  let output = `
    <p>Nama: ${biodata.nama}</p>
    <p>Umur: ${biodata.umur}</p>
    <p>Alamat: ${biodata.alamat}</p>
    <p>Hobi:</p>
    <ul>${biodata.hobi.map(h => `<li>${h}</li>`).join("")}</ul>
  `;

  document.getElementById('biodata').innerHTML = output;
}
