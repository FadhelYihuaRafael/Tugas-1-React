function Home() {
  const fitur = [
    { icon: '📖', judul: 'Koleksi Lengkap', desc: 'Tersedia ribuan buku dari berbagai genre dan penulis.' },
    { icon: '🚚', judul: 'Kirim ke Rumah', desc: 'Pengiriman ke seluruh Indonesia dengan ongkos terjangkau.' },
    { icon: '💰', judul: 'Harga Terjangkau', desc: 'Dapatkan buku favorit dengan harga terbaik setiap hari.' },
  ];

  return (
    <div>
      {/* Hero */}
      <div style={{ backgroundColor: '#1a1a2e', color: '#fff' }} className="py-5">
        <div className="container text-center py-3">
          <h1 className="fw-bold mb-3" style={{ fontSize: '2.2rem' }}>
            Selamat Datang di <span style={{ color: '#ffc107' }}>FadelStore</span>
          </h1>
          <p className="text-white-50 mb-4" style={{ maxWidth: '480px', margin: '0 auto' }}>
            Temukan buku yang menginspirasi. Belanja mudah, harga terjangkau, pengiriman cepat.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-warning fw-semibold px-4 text-dark">Lihat Buku</button>
            <button className="btn btn-outline-light px-4">Hubungi Kami</button>
          </div>
        </div>
      </div>

      {/* Fitur */}
      <div className="container py-5">
        <h4 className="text-center fw-bold mb-4" style={{ color: '#1a1a2e' }}>
          Kenapa Pilih FadelStore?
        </h4>
        <div className="row g-3">
          {fitur.map((f, i) => (
            <div className="col-md-4" key={i}>
              <div className="border rounded-3 p-4 text-center h-100">
                <div style={{ fontSize: '2rem' }} className="mb-2">{f.icon}</div>
                <h6 className="fw-bold mb-1" style={{ color: '#1a1a2e' }}>{f.judul}</h6>
                <p className="text-muted small mb-0">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
