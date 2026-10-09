const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 'Rp 85.000',
    cover: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg',
  },
  {
    id: 2,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: 'Rp 95.000',
    cover: 'https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg',
  },
  {
    id: 3,
    title: 'Deep Work',
    author: 'Cal Newport',
    price: 'Rp 78.000',
    cover: 'https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg',
  },
  {
    id: 4,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    price: 'Rp 72.000',
    cover: 'https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg',
  },
  {
    id: 5,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    price: 'Rp 120.000',
    cover: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
  },
  {
    id: 6,
    title: 'The Lean Startup',
    author: 'Eric Ries',
    price: 'Rp 88.000',
    cover: 'https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg',
  },
];

function Book() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-dark">Koleksi Buku</h1>
        <p className="text-muted">Temukan buku favorit Anda dari koleksi pilihan kami.</p>
      </div>

      <div className="row g-4">
        {books.map((book) => (
          <div className="col-6 col-md-4 col-lg-2" key={book.id}>
            <div className="card h-100 border shadow-sm">
              <img
                src={book.cover}
                className="card-img-top"
                alt={book.title}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body p-3">
                <h6 className="card-title fw-bold mb-1 small">{book.title}</h6>
                <p className="text-muted mb-1" style={{ fontSize: '0.75rem' }}>{book.author}</p>
                <p className="text-primary fw-bold mb-2 small">{book.price}</p>
                <button className="btn btn-primary btn-sm w-100">Beli</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;
