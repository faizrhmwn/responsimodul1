# Responsi Modul 1 - API Peminjaman Buku

## 1. Deskripsi Singkat
Project ini dibikin buat tugas responsi. Intinya bikin REST API sederhana pakai stack Node.js, Express.js, sama database Supabase. Fokus utamanya buat nyatet data peminjaman buku di perpustakaan. 

Di sini kita bisa nambahin, liat, ngedit, sama hapus (CRUD) data member, buku, dan transaksi pinjamnya. Terus ada juga fitur filter buat nyari status peminjaman (misalnya mau nyari yang statusnya `Dipinjam` doang).

## 2. Struktur Database
Buat nyimpen datanya, ada 3 tabel di Supabase yang udah saling direlasiin:
* **members**: `id` (UUID), `name` (Text), `email` (Text)
* **books**: `id` (UUID), `title` (Text), `author` (Text)
* **loans**: `id` (UUID), `member_id` (Foreign Key ke tabel members), `book_id` (Foreign Key ke tabel books), `borrow_date` (Date), `return_date` (Date), `status` (Text)

## 3. Contoh Request & Response

### Nambah Peminjaman Baru (POST `/api/loans`)
**Kirim Body JSON:**
```json
{
  "member_id": "170c8ab8-d7f8-4f3e-94a6-5c9434c2386b",
  "book_id": "5a8bd922-13e4-431f-94f2-c13a1bb5d7b7",
  "status": "Dipinjam"
}
```
**Hasilnya (201 Created):**
```json
{
  "id": "e2d0fa2b-50ed-497c-9230-8f5275884796",
  "member_id": "170c8ab8-d7f8-4f3e-94a6-5c9434c2386b",
  "book_id": "5a8bd922-13e4-431f-94f2-c13a1bb5d7b7",
  "borrow_date": "2026-10-10",
  "return_date": null,
  "status": "Dipinjam"
}
```

### Cek Data Peminjaman Pakai Filter (GET `/api/loans?status=Dipinjam`)
**Hasilnya (200 OK):**
```json
[
    {
        "id": "e2d0fa2b-50ed-497c-9230-8f5275884796",
        "member_id": "170c8ab8-d7f8-4f3e-94a6-5c9434c2386b",
        "book_id": "5a8bd922-13e4-431f-94f2-c13a1bb5d7b7",
        "borrow_date": "2026-10-10",
        "return_date": null,
        "status": "Dipinjam",
        "members": {
            "name": "Faiz Alif"
        },
        "books": {
            "title": "Aldebaran Bagian 2"
        }
    }
]
```

## 4. Cara Install & Jalanin Lokal
1. Clone repo ini dulu:
   ```bash
   git clone https://github.com/faizrhmwn/responsimodul1
   ```
2. Masuk ke foldernya:
   ```bash
   cd responsimodul1
   ```
3. Install module yang dibutuhin:
   ```bash
   npm install
   ```
4. Bikin file `.env` di luar (sejajar sama package.json), terus isi kuncinya:
   ```env
   SUPABASE_URL=masukin_url_supabase_disini
   SUPABASE_KEY=masukin_anon_key_supabase_disini
   PORT=3000
   ```
5. Jalanin servernya:
   ```bash
   npm run dev
   ```
6. Selesai, API udah nyala dan bisa dites lewat `http://localhost:3000`

## 5. Link Vercel (Live API)
- **Base URL:** `https://responsimodul1-two.vercel.app`
- **Endpoint Loans:** `https://responsimodul1-two.vercel.app/api/loans`
- **Endpoint Books:** `https://responsimodul1-two.vercel.app/api/books`
- **Endpoint Members:** `https://responsimodul1-two.vercel.app/api/members`