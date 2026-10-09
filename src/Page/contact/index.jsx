import Header from '../../components/shared/Header';
import Contact from '../../components/shared/Contact';
import Footer from '../../components/shared/Footer';

const ContactPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
