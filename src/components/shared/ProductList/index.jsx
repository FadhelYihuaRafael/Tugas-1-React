import { useState } from 'react';
import { booksData } from '../../../Utils/books';

const ProductList = () => {
  // State untuk menyimpan daftar buku
  const [booksList, setBooksList] = useState(booksData);

  // State untuk kontrol form tambah buku
  const [showForm, setShowForm] = useState(false);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
    description: '',
    price: '',
    cover: '',
  });

  const [notification, setNotification] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // Fungsi tambah data buku menggunakan hooks
  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) return;

    const createdBook = {
      id: Date.now(),
      title: newBook.title,
      author: newBook.author,
      year: newBook.year || new Date().getFullYear().toString(),
      description: newBook.description || 'Deskripsi buku baru.',
      price: newBook.price ? (newBook.price.startsWith('Rp') ? newBook.price : `Rp ${newBook.price}`) : 'Rp 85.000',
      category: 'General',
      cover: newBook.cover || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
    };

    setBooksList([createdBook, ...booksList]);
    setNewBook({ title: '', author: '', year: '', description: '', price: '', cover: '' });
    setShowForm(false);
    setNotification(`Buku "${createdBook.title}" berhasil ditambahkan!`);
    setTimeout(() => setNotification(''), 3500);
  };

  return (
    <section id="books" className="py-5 bg-light">
      <div className="container">
        {/* Header Section & Action Button */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
          <div>
            <h2 className="fw-bold text-dark mb-1">Daftar Buku Pemrograman</h2>
            <p className="text-secondary small mb-0">
              Menampilkan <span className="badge bg-primary fs-6">{booksList.length}</span> koleksi buku pilihan.
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary fw-semibold px-4 py-2 rounded-3 d-flex align-items-center gap-2 shadow-sm"
            style={{ backgroundColor: '#0d6efd', borderColor: '#0d6efd' }}
          >
            <span>{showForm ? '❌ Batal' : '➕ Tambah Buku Baru'}</span>
          </button>
        </div>

        {/* Notifikasi */}
        {notification && (
          <div className="alert alert-success alert-dismissible fade show mb-4 small fw-semibold" role="alert">
            ✅ {notification}
          </div>
        )}

        {/* Form Tambah Buku */}
        {showForm && (
          <div className="card border-0 shadow-sm p-4 mb-5 rounded-4 bg-white border-start border-4 border-primary">
            <h5 className="fw-bold text-dark mb-3">Form Tambah Buku Baru</h5>
            <form onSubmit={handleAddBook}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Judul Buku *</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Contoh: Belajar Vue.js"
                    value={newBook.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Penulis *</label>
                  <input
                    type="text"
                    name="author"
                    className="form-control"
                    placeholder="Contoh: Andi Prasetyo"
                    value={newBook.author}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label small fw-semibold">Tahun</label>
                  <input
                    type="text"
                    name="year"
                    className="form-control"
                    placeholder="Contoh: 2023"
                    value={newBook.year}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label small fw-semibold">Harga (Rp)</label>
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    placeholder="Contoh: 85.000"
                    value={newBook.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label small fw-semibold">URL Cover (Opsional)</label>
                  <input
                    type="url"
                    name="cover"
                    className="form-control"
                    placeholder="https://..."
                    value={newBook.cover}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-semibold">Deskripsi Singkat</label>
                  <textarea
                    name="description"
                    className="form-control"
                    rows="2"
                    placeholder="Tuliskan deskripsi singkat mengenai buku ini..."
                    value={newBook.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <div className="mt-3 d-flex justify-content-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn btn-light btn-sm px-3"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm px-4 fw-semibold"
                >
                  Simpan Buku
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Layout Grid: 3 Kolom per Baris (col-12 col-md-4) */}
        <div className="row g-4">
          {booksList.map((book) => (
            <div className="col-12 col-md-4" key={book.id}>
              <div className="card h-100 border shadow-sm rounded-3 overflow-hidden bg-white">
                {/* Gambar Buku */}
                <div className="bg-light overflow-hidden" style={{ height: '220px' }}>
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-100 h-100 object-fit-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600';
                    }}
                  />
                </div>

                {/* Konten Card sesuai referensi screenshot */}
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title fw-bold text-dark mb-2" style={{ fontSize: '1.1rem' }}>
                      {book.title}
                    </h5>
                    <p className="text-secondary small mb-1">
                      <span className="fw-semibold">Penulis:</span> {book.author}
                    </p>
                    <p className="text-secondary small mb-2">
                      <span className="fw-semibold">Tahun:</span> {book.year}
                    </p>
                    <p className="text-muted small mb-3" style={{ lineHeight: '1.5', minHeight: '42px' }}>
                      {book.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button className="btn btn-outline-primary btn-sm px-3 rounded-2 fw-medium">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
