import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [sukses, setSukses] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSukses(true);
    setTimeout(() => {
      setSukses(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card border-0 shadow-sm p-4 w-100" style={{ maxWidth: '420px', borderRadius: '12px' }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold" style={{ color: '#1a1a2e' }}>Masuk ke FadelStore</h3>
          <p className="text-muted small">Masukkan email dan password untuk melanjutkan</p>
        </div>

        {sukses && (
          <div className="alert alert-success py-2 small text-center mb-3">
            ✅ Login berhasil! Mengalihkan ke Beranda...
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small fw-semibold">Alamat Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="nama@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <label className="form-label small fw-semibold mb-0">Password</label>
              <a href="#lupa" onClick={(e) => e.preventDefault()} className="small text-decoration-none text-muted">
                Lupa Password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="remember"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />
            <label className="form-check-label small text-muted" htmlFor="remember">
              Ingat saya di perangkat ini
            </label>
          </div>

          <button
            type="submit"
            className="btn w-100 fw-semibold text-white py-2 mb-3"
            style={{ backgroundColor: '#1a1a2e' }}
          >
            Masuk
          </button>
        </form>

        <div className="text-center mt-3 pt-3 border-top">
          <p className="small text-muted mb-0">
            Belum punya akun?{' '}
            <Link to="/register" className="fw-semibold text-decoration-none" style={{ color: '#1a1a2e' }}>
              Daftar Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
