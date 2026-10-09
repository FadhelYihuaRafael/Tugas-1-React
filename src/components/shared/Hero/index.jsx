import heroImg from '../../../assets/hero.png';

const Hero = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div className="p-4 p-md-5 rounded-4 border shadow-sm bg-white">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h1 className="fw-bold display-5 text-dark mb-3" style={{ letterSpacing: '-0.5px' }}>
                Find Your Next Favorite Book
              </h1>
              <p className="text-secondary mb-4 fs-6 style-paragraph" style={{ lineHeight: '1.6' }}>
                Discover stories that inspire, knowledge that grows, and adventures waiting between the pages. Explore our collection of books, find your next great read, and let every page take you somewhere new.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#books" className="btn btn-primary px-4 py-2 fw-semibold rounded-3" style={{ backgroundColor: '#1677ff', borderColor: '#1677ff' }}>
                  Browse Books
                </a>
                <a href="#about" className="btn btn-outline-secondary px-4 py-2 fw-semibold rounded-3">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="overflow-hidden rounded-3 shadow-sm">
                <img
                  src={heroImg}
                  alt="Open book"
                  className="img-fluid w-100"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
