# Prompt Execution — Eksekusi Proyek Awal

Salin prompt ini ke coding agent yang bekerja pada folder repository:

---

Anda bertindak sebagai senior front-end engineer dan UI implementer. Sebelum melakukan perubahan, baca `AGENTS.md`, `SOT.md`, dan `README.md` secara menyeluruh.

**Tujuan:** audit dan rampungkan prototype UI PPDB Ponpes Humairah yang menggunakan React + Vite + Tailwind CSS dan data dummy. Jangan membuat backend atau menghubungkan API pada tahap ini.

**Instruksi eksekusi:**
1. Audit struktur project, dependency, dan seluruh modul wajib F01–F13 di `SOT.md`.
2. Jalankan instalasi dependency bila diperlukan, lalu jalankan `npm run build`.
3. Perbaiki hanya masalah yang terbukti menghalangi build, navigasi, responsivitas, atau acceptance criteria SOT.
4. Pastikan setiap modul dapat dibuka melalui navigasi: Navbar, Landing Page, Form Pendaftaran, Upload Berkas, Pembayaran, Cetak Kartu, Login Admin, Dashboard Admin, Data Pendaftar, Validasi, WhatsApp Gateway, Laporan, Footer.
5. Pastikan kontrol pencarian, filter, file picker, tab validasi, simulasi pesan, dan aksi print merespons dengan tepat serta tidak mengaku melakukan aksi backend.
6. Pastikan viewport mobile dan desktop layak, kontras teks terbaca, dan label form jelas.
7. Jangan menambahkan autentikasi nyata, API Node.js, database, payment gateway, provider WhatsApp, atau fitur lain di luar scope.
8. Jika ada perubahan requirement, berhenti dan usulkan amendemen pada SOT sebelum mengimplementasikan.
9. Jalankan kembali `npm run build`. Jangan mengklaim lolos bila belum dijalankan.
10. Berikan ringkasan hasil, file yang diubah, hasil build, langkah menjalankan, dan risiko/pekerjaan lanjutan yang masih di luar scope.

**Acceptance criteria:** seluruh fitur F01–F13 tersedia, aplikasi berjalan secara lokal, build berhasil, dan batasan prototype dinyatakan secara eksplisit.

---
