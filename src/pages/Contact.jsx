import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });
  const [sukses, setSukses] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSukses(true);
    setForm({ nama: '', email: '', pesan: '' });
    setTimeout(() => setSukses(false), 3500);
  };

  return (
    <div className="container py-5" style={{ maxWidth: '560px' }}>
      {/* Judul */}
      <h2 className="fw-bold mb-1" style={{ color: '#1a1a2e' }}>Hubungi Kami</h2>
      <p className="text-muted small mb-3">
        Ada pertanyaan atau saran? Isi formulir di bawah ini.
      </p>
      <hr className="mb-4" />

      {/* Info Singkat */}
      <div className="mb-4 d-flex flex-column gap-1">
        <small className="text-muted">
          <i className="bi bi-envelope me-2" style={{ color: '#1a1a2e' }}></i>
          fadelstore@email.com
        </small>
        <small className="text-muted">
          <i className="bi bi-telephone me-2" style={{ color: '#1a1a2e' }}></i>
          +62 857-0000-9999
        </small>
        <small className="text-muted">
          <i className="bi bi-geo-alt me-2" style={{ color: '#1a1a2e' }}></i>
          Jl. Raya Bogor No. 10, Jakarta Timur
        </small>
      </div>

      {/* Form */}
      {sukses && (
        <div className="alert alert-success py-2 small">
          ✅ Pesan berhasil dikirim! Kami akan segera membalas.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label small fw-semibold">Nama Lengkap</label>
          <input
            type="text"
            name="nama"
            className="form-control"
            placeholder="Nama kamu"
            value={form.nama}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label small fw-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="email@domain.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="form-label small fw-semibold">Pesan</label>
          <textarea
            name="pesan"
            className="form-control"
            rows="4"
            placeholder="Tulis pesanmu di sini..."
            value={form.pesan}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn w-100 fw-semibold text-white"
          style={{ backgroundColor: '#1a1a2e' }}
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}

export default Contact;
