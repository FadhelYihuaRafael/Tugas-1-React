import Header from '../components/shared/Header';
import Hero from '../components/shared/Hero';
import ProductList from '../components/shared/ProductList';
import Team from '../components/shared/Team';
import Contact from '../components/shared/Contact';
import Footer from '../components/shared/Footer';

const HomePage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Hero />
        <ProductList />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
