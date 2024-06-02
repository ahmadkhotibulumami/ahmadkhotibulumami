let pensil = 5000;
let buku = 12000; 
let pulpen = 3000;
let penghapus = 2000;
let tipEx = 5000;
let bukuGambar = 7000;

let totalBelanja = 0;
let belanja = [];

while (true) {
    const namaBarang = prompt('Masukkan nama barang yang anda beli (ketik "selesai" jika sudah):');

    if (namaBarang === null || namaBarang.toLowerCase() === 'selesai') {
        break; // Keluar dari loop jika pengguna menekan tombol "Batal" atau memasukkan "selesai"
    }
    
    switch (namaBarang.toLowerCase()) {
        case 'pensil':
            belanja.push(namaBarang);
            totalBelanja += pensil;
            break;
        case 'buku':
            belanja.push(namaBarang);
            totalBelanja += buku;
            break;
        case 'pulpen':
            belanja.push(namaBarang);
            totalBelanja += pulpen;
            break;
        case 'penghapus':
            belanja.push(namaBarang);
            totalBelanja += penghapus;
            break;
        case 'tipex':
            belanja.push(namaBarang);
            totalBelanja += tipEx;
            break;
        case 'bukugambar':
            belanja.push(namaBarang);
            totalBelanja += bukuGambar;
            break;
        default:
            alert('Barang tidak dikenali!');
            break;
    }
    alert(`Total belanja Anda adalah: Rp ${totalBelanja}`);
    }
