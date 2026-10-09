const teamMembers = [
  {
    id: 1,
    name: 'Fadhel Yihua',
    role: 'Lead Developer & Creator',
    bio: 'Mengkoordinasikan pengembangan platform dan arsitektur sistem.',
    initials: 'FY',
  },
  {
    id: 2,
    name: 'Nadia Safitri',
    role: 'UI/UX & Frontend Specialist',
    bio: 'Mendesain antarmuka pengguna yang responsif, modern, dan intuitif.',
    initials: 'NS',
  },
  {
    id: 3,
    name: 'Rizky Aditya',
    role: 'Backend & Data Engineer',
    bio: 'Mengelola integrasi data, API endpoint, serta performa aplikasi.',
    initials: 'RA',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-5 bg-white">
      <div className="container" style={{ maxWidth: '840px' }}>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark mb-2">Tim Pengembang</h2>
          <p className="text-secondary">
            Mengenal orang-orang di balik pembuatan dan pengembangan platform ini.
          </p>
        </div>

        <div className="d-flex flex-column gap-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="p-3 border rounded-3 bg-light d-flex align-items-center gap-4 shadow-sm"
            >
              <div
                className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: '56px', height: '56px', fontSize: '1.2rem' }}
              >
                {member.initials}
              </div>
              <div>
                <h6 className="fw-bold text-dark mb-1">{member.name}</h6>
                <span className="badge bg-primary-subtle text-primary mb-2 fw-semibold">
                  {member.role}
                </span>
                <p className="text-secondary small mb-0">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
