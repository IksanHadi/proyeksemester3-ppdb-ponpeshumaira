# SOT — Source of Truth
## Sistem Informasi PPDB Ponpes Humairah

**Versi:** 0.1.0 · **Status:** Kontrak rancangan front-end · **Tanggal:** 23 Oktober 2026

Dokumen ini adalah sumber kebenaran utama untuk batasan produk, tujuan, istilah, fitur, dan acceptance criteria. Jika instruksi lain bertentangan, SOT ini menjadi acuan sampai direvisi secara eksplisit.

## 1. Tujuan produk
Menyediakan website PPDB Ponpes Humairah untuk menampilkan informasi penerimaan santri baru dan mensimulasikan alur calon santri serta admin. Pendekatan pengembangan yang direncanakan adalah Rapid Application Development (RAD), dengan iterasi prototipe, umpan balik, dan penyempurnaan bertahap.

## 2. Stack dan batasan tahap
- Front-end: React, Vite, Tailwind CSS.
- Ikon: lucide-react.
- Data: dummy lokal di front-end.
- Backend Node.js, database, autentikasi, penyimpanan dokumen, payment gateway, serta provider WhatsApp **belum dibuat pada tahap ini**.
- UI harus responsif, dapat dijalankan secara lokal, mudah diperluas, dan tidak menampilkan integrasi palsu sebagai layanan nyata.
- Identitas visual: putih sebagai permukaan utama, biru sebagai warna utama/aksi, gradasi kuning sebagai aksen penting.

## 3. Persona dan peran
1. **Calon santri/orang tua:** membaca informasi, mengisi formulir, memilih berkas, melihat instruksi pembayaran, melihat kartu pendaftaran.
2. **Admin PPDB:** melihat dashboard, mencari data pendaftar, mensimulasikan validasi berkas/pembayaran, menyusun pesan WhatsApp, dan melihat laporan.
3. **Pengunjung:** membaca landing page dan informasi program.

## 4. Fitur wajib
| ID | Modul | Perilaku minimum pada tahap UI |
|---|---|---|
| F01 | Navbar | Navigasi ke seluruh modul, responsif di mobile |
| F02 | Landing Page PPDB | Hero, periode, program, CTA pendaftaran |
| F03 | Form Pendaftaran | Field data calon santri dan CTA lanjut |
| F04 | Upload Berkas | Pemilih file lokal dan indikator kelengkapan dummy |
| F05 | Form Pembayaran | Rincian biaya, metode, pemilih bukti pembayaran |
| F06 | Cetak Kartu | Kartu pendaftaran dummy dan aksi print browser |
| F07 | Login Admin | Form email/kata sandi; autentikasi simulasi saja |
| F08 | Dashboard Admin | KPI, tren, status, pendaftar terbaru |
| F09 | Data Pendaftar | Tabel, pencarian, filter status, aksi detail simulasi |
| F10 | Validasi | Tab berkas/pembayaran, aksi setujui/revisi lokal |
| F11 | WhatsApp Gateway | Nomor, template, editor pesan, log dan simulasi pengiriman |
| F12 | Laporan | Rekap KPI, status dan distribusi program |
| F13 | Footer | Identitas, status prototype, tautan informasi |

## 5. Data dummy
Gunakan data contoh yang jelas bukan data pribadi nyata. Nomor pendaftaran seperti `HM-2026-0018`; program: Tahfidz Al-Qur’an, Reguler, Bahasa Arab. Status berkas: Menunggu, Terverifikasi, Perlu revisi. Status pembayaran: Menunggu, Lunas. Nilai dan statistik harus diberi konteks data dummy.

## 6. Prinsip UI/UX
- Tata letak SaaS modern: sidebar, topbar, kartu metrik, tabel, panel, status badge.
- Radius besar, bayangan lembut, ruang putih yang cukup, tipografi mudah dibaca.
- Biru untuk navigasi dan aksi utama; kuning untuk highlight/CTA; hijau/merah hanya untuk status.
- Mobile-first dan tidak ada horizontal overflow pada viewport kecil, kecuali tabel yang memang boleh scroll horizontal.
- Semua kontrol yang tampak interaktif harus memberi respons yang masuk akal atau secara eksplisit ditandai sebagai placeholder.
- Cetak kartu/laporan memakai print browser; tidak menjanjikan PDF server-side.

## 7. Acceptance criteria
- `npm install` dan `npm run dev` dapat dijalankan di Node.js 18+.
- `npm run build` selesai tanpa error.
- Semua 13 modul dapat dibuka melalui navigasi.
- Form, filter, file picker, tab, simulasi validasi, notifikasi, pencarian menu, dan cetak memiliki perilaku front-end.
- UI tidak membuat klaim bahwa data tersimpan permanen atau WhatsApp/pembayaran benar-benar terkirim.
- Tidak ada kredensial rahasia, API key, atau data nyata dalam repository.
- Tidak menambahkan fitur di luar daftar tanpa perubahan SOT.

## 8. Di luar scope
- Endpoint/API Node.js/Express.
- Skema database, migrasi, dan CRUD persisten.
- OTP, session, role-based access control, reset password.
- Penyimpanan file, pemeriksaan MIME server-side, antivirus.
- Transaksi dan rekonsiliasi pembayaran.
- WhatsApp Cloud API / provider gateway yang sebenarnya.
- Deployment, domain, dan observability produksi.

## 9. Rencana RAD
1. **Requirements planning:** setujui SOT, aktor, alur, batasan.
2. **User design:** prototipe visual, tinjau alur dan umpan balik.
3. **Construction:** implementasi iteratif, kemudian backend dan integrasi sesuai prioritas.
4. **Cutover:** uji penerimaan, pelatihan admin, deployment setelah keamanan dan data siap.

## 10. Change control
Setiap perubahan tujuan, stack, modul wajib, atau integrasi harus memperbarui SOT terlebih dahulu. Catat alasan perubahan dan acceptance criteria yang terdampak.
