import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky-top bg-white border-bottom shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light container py-3">
        <NavLink to="/" className="navbar-brand fw-bold text-primary d-flex align-items-center gap-2">
          <span className="fs-4">📚</span>
          <span className="fs-4 text-dark" style={{ letterSpacing: '-0.5px' }}>BookStore</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-medium gap-lg-3">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'text-primary fw-bold' : 'text-secondary'}`
                }
              >
                Beranda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'text-primary fw-bold' : 'text-secondary'}`
                }
              >
                Buku
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'text-primary fw-bold' : 'text-secondary'}`
                }
              >
                Tim
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'text-primary fw-bold' : 'text-secondary'}`
                }
              >
                Kontak
              </NavLink>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <Link to="/login" className="btn btn-outline-primary btn-sm px-3 fw-semibold">
              Masuk
            </Link>
            <Link to="/register" className="btn btn-primary btn-sm px-3 fw-semibold" style={{ backgroundColor: '#1677ff', borderColor: '#1677ff' }}>
              Daftar
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;