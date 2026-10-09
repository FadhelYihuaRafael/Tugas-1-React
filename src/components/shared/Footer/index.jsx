const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 border-top">
      <div className="container text-center">
        <p className="mb-1 fw-semibold">📚 BookStore &copy; {new Date().getFullYear()} - All Rights Reserved</p>
        <p className="text-secondary small mb-0">
          Dibuat dengan React.js &amp; Vite untuk Pertemuan React JS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
