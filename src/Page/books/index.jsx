import Header from '../../components/shared/Header';
import ProductList from '../../components/shared/ProductList';
import Footer from '../../components/shared/Footer';

const BooksPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default BooksPage;
