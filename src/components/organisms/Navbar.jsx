import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: '#1a1a2e' }}>
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand fw-bold text-white text-decoration-none">
          📚 FadelStore
        </NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {[
              { to: '/', label: 'Beranda', end: true },
              { to: '/book', label: 'Buku' },
              { to: '/team', label: 'Tim' },
              { to: '/contact', label: 'Kontak' },
            ].map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    'nav-link fw-semibold ' + (isActive ? 'text-warning' : 'text-white-50')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="d-flex gap-2">
            <Link to="/login" className="btn btn-outline-light btn-sm px-3">
              Masuk
            </Link>
            <Link to="/register" className="btn btn-warning btn-sm px-3 fw-semibold text-dark">
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
