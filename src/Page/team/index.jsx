import Header from '../../components/shared/Header';
import Team from '../../components/shared/Team';
import Footer from '../../components/shared/Footer';

const TeamPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
