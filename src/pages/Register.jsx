import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    password: '',
    konfirmasiPassword: '',
    setuju: false,
  });
  const [error, setError] = useState('');
  const [sukses, setSukses] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.konfirmasiPassword) {
      setError('Konfirmasi password tidak cocok!');
      return;
    }
    if (!form.setuju) {
      setError('Anda harus menyetujui Syarat & Ketentuan.');
      return;
    }

    setSukses(true);
    setTimeout(() => {
      setSukses(false);
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '85vh' }}>
      <div className="card border-0 shadow-sm p-4 w-100" style={{ maxWidth: '460px', borderRadius: '12px' }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold" style={{ color: '#1a1a2e' }}>Buat Akun Baru</h3>
          <p className="text-muted small">Bergabung bersama FadelStore untuk kemudahan berbelanja buku</p>
        </div>

        {error && (
          <div className="alert alert-danger py-2 small text-center mb-3">
            ⚠️ {error}
          </div>
        )}

        {sukses && (
          <div className="alert alert-success py-2 small text-center mb-3">
            ✅ Pendaftaran berhasil! Mengalihkan ke halaman Masuk...
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small fw-semibold">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              className="form-control"
              placeholder="Nama lengkap kamu"
              value={form.nama}
              onChange={handleChange}
              required
            />
          </div>

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
            <label className="form-label small fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Minimal 6 karakter"
              value={form.password}
              onChange={handleChange}
              minLength={6}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-semibold">Konfirmasi Password</label>
            <input
              type="password"
              name="konfirmasiPassword"
              className="form-control"
              placeholder="Ulangi password"
              value={form.konfirmasiPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="setuju"
              name="setuju"
              checked={form.setuju}
              onChange={handleChange}
              required
            />
            <label className="form-check-label small text-muted" htmlFor="setuju">
              Saya menyetujui <a href="#syarat" onClick={(e) => e.preventDefault()} className="text-decoration-none">Syarat & Ketentuan</a> yang berlaku.
            </label>
          </div>

          <button
            type="submit"
            className="btn w-100 fw-semibold text-dark py-2 mb-3"
            style={{ backgroundColor: '#ffc107' }}
          >
            Daftar Akun
          </button>
        </form>

        <div className="text-center mt-3 pt-3 border-top">
          <p className="small text-muted mb-0">
            Sudah punya akun?{' '}
            <Link to="/login" className="fw-semibold text-decoration-none" style={{ color: '#1a1a2e' }}>
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
