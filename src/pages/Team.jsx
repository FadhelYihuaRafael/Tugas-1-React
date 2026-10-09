const anggota = [
  {
    id: 1,
    nama: 'Fadhel Yihua',
    jabatan: 'Ketua Tim',
    desc: 'Mengkoordinasikan seluruh proses pengembangan dan memastikan proyek berjalan sesuai rencana.',
    inisial: 'FY',
  },
  {
    id: 2,
    nama: 'Nadia Safitri',
    jabatan: 'Frontend Developer',
    desc: 'Membangun tampilan antarmuka yang responsif dan ramah pengguna menggunakan React JS.',
    inisial: 'NS',
  },
  {
    id: 3,
    nama: 'Rizky Aditya',
    jabatan: 'Backend Developer',
    desc: 'Mengelola logika server, database, dan endpoint API untuk mendukung fitur aplikasi.',
    inisial: 'RA',
  },
];

function Team() {
  return (
    <div className="container py-5" style={{ maxWidth: '780px' }}>
      {/* Judul */}
      <div className="mb-4">
        <h2 className="fw-bold" style={{ color: '#1a1a2e' }}>Tim Pengembang</h2>
        <p className="text-muted small">
          Kenali orang-orang yang membangun FadelStore dari awal.
        </p>
        <hr />
      </div>

      {/* Daftar Anggota — layout horizontal */}
      <div className="d-flex flex-column gap-3">
        {anggota.map((a) => (
          <div key={a.id} className="d-flex align-items-center gap-4 border rounded-3 p-3">
            {/* Avatar inisial */}
            <div
              className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 fw-bold text-white"
              style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#1a1a2e',
                fontSize: '1rem',
              }}
            >
              {a.inisial}
            </div>
            {/* Info */}
            <div>
              <p className="fw-bold mb-0" style={{ color: '#1a1a2e' }}>{a.nama}</p>
              <span
                className="badge mb-1"
                style={{ backgroundColor: '#ffc107', color: '#1a1a2e', fontSize: '0.72rem' }}
              >
                {a.jabatan}
              </span>
              <p className="text-muted small mb-0">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
