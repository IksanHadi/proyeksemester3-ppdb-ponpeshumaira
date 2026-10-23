# AGENTS.md — Kontrak Kerja Agen

## Mandat
Bangun dan rawat prototype front-end PPDB Ponpes Humairah sesuai `SOT.md`. SOT adalah sumber kebenaran utama. Jangan memperluas scope tanpa persetujuan dan perubahan SOT.

## Aturan wajib
1. Baca `SOT.md` dan `README.md` sebelum mengubah kode.
2. Pertahankan stack React + Vite + Tailwind CSS.
3. Prioritaskan front-end dan data dummy. Jangan membuat backend Node.js, database, atau integrasi eksternal dalam tahap ini.
4. Jangan mengklaim autentikasi, pembayaran, upload server, atau WhatsApp bekerja sungguhan. Semua simulasi harus diberi label yang jelas.
5. Jangan memasukkan API key, token, kredensial, data santri nyata, atau file rahasia.
6. Pertahankan seluruh 13 modul wajib. Jika refactor, pastikan navigasi dan perilaku modul tetap tersedia.
7. Gunakan komponen reusable, penamaan konsisten, layout responsif, dan aksesibilitas dasar (label input, tombol berlabel, fokus keyboard).
8. Gunakan warna brand putih/biru dengan aksen gradasi kuning. Hindari mengganti identitas visual tanpa persetujuan.
9. Jangan menambahkan dependency baru jika tidak dibutuhkan; jelaskan alasan jika perlu.
10. Perubahan harus minimal, mudah ditinjau, dan tidak menghapus fitur yang sudah ada diam-diam.

## Alur kerja setiap tugas
1. Identifikasi tujuan dan acceptance criteria yang relevan dari SOT.
2. Periksa file yang terdampak sebelum edit.
3. Implementasikan perubahan terkecil yang memenuhi kriteria.
4. Jalankan `npm run build` jika lingkungan memungkinkan.
5. Laporkan file yang berubah, hasil pemeriksaan, keterbatasan, dan langkah menjalankan.
6. Jika requirement ambigu atau bertentangan, tanyakan atau usulkan perubahan SOT; jangan menebak integrasi produksi.

## Definition of Done
- Kriteria tugas terpenuhi dan tidak merusak modul lain.
- Build lolos atau error yang tersisa dijelaskan secara spesifik.
- Tidak ada klaim fitur backend yang belum diimplementasikan.
- README/SOT diperbarui jika perilaku atau batasan produk berubah.
