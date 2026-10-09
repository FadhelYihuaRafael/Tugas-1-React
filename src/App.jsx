import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Home from './pages/Home';
import Book from './pages/Book';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

// Routing menggunakan pola Declarative Mode dari React Router
// Referensi: https://reactrouter.com/start/declarative/routing
//
// Struktur nested routes:
//   / (Layout)          → parent route: menampilkan Navbar + Footer via <Outlet>
//   ├── index           → Home (path: /)
//   ├── book            → Book (path: /book)
//   ├── team            → Team (path: /team)
//   ├── contact         → Contact (path: /contact)
//   ├── login           → Login (path: /login)
//   └── register        → Register (path: /register)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route: Layout membungkus semua halaman */}
        <Route element={<Layout />}>

          {/* index = halaman default saat path "/" */}
          <Route index element={<Home />} />

          {/* Halaman Buku */}
          <Route path="book" element={<Book />} />

          {/* Halaman Tim Pengembang */}
          <Route path="team" element={<Team />} />

          {/* Halaman Kontak */}
          <Route path="contact" element={<Contact />} />

          {/* Halaman Masuk / Login */}
          <Route path="login" element={<Login />} />

          {/* Halaman Daftar / Register */}
          <Route path="register" element={<Register />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
