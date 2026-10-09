import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark mb-2">Hubungi Kami</h2>
          <p className="text-secondary small">
            Punya pertanyaan, kritik, atau saran? Kirimkan pesan Anda melalui formulir di bawah ini.
          </p>
        </div>

        <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border">
          {submitted && (
            <div className="alert alert-success py-2 small mb-4">
              ✅ Pesan Anda berhasil terkirim! Kami akan membalas secepatnya.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label small fw-semibold text-dark">Nama Lengkap</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan nama Anda"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label small fw-semibold text-dark">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="nama@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label small fw-semibold text-dark">Pesan</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Tulis pesan Anda di sini..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 fw-semibold py-2 rounded-3"
              style={{ backgroundColor: '#1677ff', borderColor: '#1677ff' }}
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
