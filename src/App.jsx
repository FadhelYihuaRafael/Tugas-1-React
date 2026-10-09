import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Page';
import BooksPage from './Page/books';
import TeamPage from './Page/team';
import ContactPage from './Page/contact';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/book" element={<BooksPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
