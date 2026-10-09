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