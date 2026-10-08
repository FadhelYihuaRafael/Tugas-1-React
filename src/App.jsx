import React from 'react';
import './App.css';

// Komponen Header 
function Header() {
  return (
    <div className="bg-white border-bottom sticky-top">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
          
          {/* Bagian Logo Kiri */}
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="#home" className="d-inline-flex align-items-center text-dark text-decoration-none">
              <span 
                className="bg-custom text-white rounded-3 d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: '32px', height: '32px', fontSize: '1rem' }}
              >
                💻
              </span>
              <span className="fs-5 fw-bold">Tech<span className="text-custom">Space</span></span>
            </a>
          </div>

          {/* Menu Navigasi Tengah */}
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-3 link-secondary fw-semibold">Home</a></li>
            <li><a href="#team" className="nav-link px-3 link-secondary fw-semibold">Team</a></li>
            <li><a href="#contact" className="nav-link px-3 link-secondary fw-semibold">Contact</a></li>
          </ul>

          {/* Tombol Kanan */}
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-custom me-2 fw-semibold">Login</button>
            <button type="button" className="btn btn-custom fw-semibold">Sign-up</button>
          </div>

        </header>
      </div>
    </div>
  );
}

// Komponen Home
function Home() {
  return (
    <div id="home">
      {/* Banner / Hero Section */}
      <div className="px-4 py-5 text-center bg-white border-bottom">
        <h1 className="display-5 fw-bold text-dark mb-3">
          Selamat Datang di Website Kami
        </h1>
        <div className="col-lg-7 mx-auto">
          <p className="lead text-muted mb-4">
            Platform modern berbasis React & Bootstrap untuk mengelola informasi tim dan layanan secara responsif, cepat, dan terintegrasi.
          </p>
        </div>
        <div className="container px-4 mt-2">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&q=80"
            className="img-fluid border rounded-3 shadow-sm mb-4"
            alt="Hero Banner Laptop"
            width="750"
            height="460"
            loading="lazy"
          />
        </div>
      </div>

      {/* Keunggulan Layanan */}
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom fw-bold text-center text-dark">Keunggulan Layanan</h2>
        <div className="row g-4 py-4 row-cols-1 row-cols-lg-3">
          <div className="col text-center">
            <div className="card-sederhana p-4 h-100 shadow-sm">
              <div className="fs-1 mb-2 text-custom">
                💡
              </div>
              <h3 className="fs-4 fw-bold text-dark mb-2">Solusi Inovatif</h3>
              <p className="text-muted small mb-0 lh-base">
                Mengintegrasikan teknologi mutakhir untuk menghasilkan platform web cerdas dan relevan dengan tren industri.
              </p>
            </div>
          </div>
          <div className="col text-center">
            <div className="card-sederhana p-4 h-100 shadow-sm">
              <div className="fs-1 mb-2 text-custom">
                🛡️
              </div>
              <h3 className="fs-4 fw-bold text-dark mb-2">Keamanan Terjamin</h3>
              <p className="text-muted small mb-0 lh-base">
                Penerapan standar proteksi sistem berlapis dan enkripsi modern untuk menjaga kerahasiaan seluruh data Anda.
              </p>
            </div>
          </div>
          <div className="col text-center">
            <div className="card-sederhana p-4 h-100 shadow-sm">
              <div className="fs-1 mb-2 text-custom">
                ⚙️
              </div>
              <h3 className="fs-4 fw-bold text-dark mb-2">Arsitektur Skalabel</h3>
              <p className="text-muted small mb-0 lh-base">
                Struktur kode modular dan fleksibel yang mudah dikembangkan seiring bertumbuhnya skala kebutuhan bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Komponen Team
function Team() {
  const members = [
    { id: 1, name: 'Fadhel', role: 'Frontend Developer', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces&q=80' },
    { id: 2, name: 'Nadine', role: 'UI/UX Designer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces&q=80' },
    { id: 3, name: 'Rendy', role: 'Backend Developer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces&q=80' },
  ];

  return (
    <div id="team" className="container my-5 py-4 border-top">
      <h2 className="text-center mb-4 fw-bold text-dark">Tim Kami</h2>
      <div className="row g-4">
        {members.map((m) => (
          <div className="col-md-4" key={m.id}>
            <div className="card-sederhana h-100 shadow-sm text-center p-4">
              <img
                src={m.img}
                className="avatar-bulat mx-auto mb-3"
                alt={m.name}
              />
              <div className="card-body p-0">
                <h5 className="card-title fw-bold text-dark mb-1">{m.name}</h5>
                <p className="card-text text-custom fw-semibold small mb-0">{m.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Komponen Contact
function Contact() {
  return (
    <div id="contact" className="container my-5 py-4 border-top" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4 fw-bold text-dark">Hubungi Kami</h2>
      <form className="card-sederhana p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label fw-bold text-dark small">Nama Lengkap</label>
          <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold text-dark small">Email</label>
          <input type="email" className="form-control" placeholder="nama@email.com" />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold text-dark small">Pesan</label>
          <textarea className="form-control" rows="4" placeholder="Tulis pesan Anda..."></textarea>
        </div>
        <button type="submit" className="btn btn-custom w-100 fw-bold py-2">Kirim Pesan</button>
      </form>
    </div>
  );
}

// Main App Component
export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Team />
      <Contact />
    </div>
  );
}
