# PPDB Ponpes Humairah — Front-end prototype

Prototype UI/UX untuk **Sistem Informasi Penerimaan Siswa/Santri Baru (PPDB)** Ponpes Humairah. Dibangun dengan React + Vite + Tailwind CSS, menggunakan data dummy dan interaksi lokal.

## Isi fitur
1. Navbar / sidebar responsif
2. Landing Page PPDB
3. Form Pendaftaran
4. Upload Berkas
5. Form Pembayaran
6. Cetak Kartu Pendaftaran
7. Login Admin
8. Dashboard Admin
9. Tabel Data Pendaftar
10. Validasi Berkas & Pembayaran
11. Modul WhatsApp Gateway (simulasi)
12. Laporan Rekapitulasi
13. Footer

## Menjalankan lokal
Persyaratan: Node.js 18+ dan npm.

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite (biasanya `http://localhost:5173`).

Untuk memeriksa build:
```bash
npm run build
npm run preview
```

## Catatan scope
- Ini **front-end saja**. Tidak ada backend Node.js, database, autentikasi nyata, unggah file ke server, payment gateway, atau pengiriman WhatsApp nyata.
- Form dan tombol tertentu menampilkan simulasi lokal / alert agar alur prototipe bisa dicoba.
- Semua angka, pengguna, tanggal, status, dan transaksi merupakan data dummy.
- Integrasi backend direncanakan setelah kontrak SOT dan UI disetujui.
