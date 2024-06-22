import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Daftar } from "./pages/daftar/daftar";
import { Minati } from "./pages/minati/minati";
import { Jelajah } from "./pages/jelajah/jelajah";
import { Landing } from "./pages/landing/landing";
import { Home } from "./pages/home/home";
import { HalamanKonser } from "./pages/halamanKonser/halamanKonser";
import { Cariteman } from "./pages/cariTeman/cariTeman";
import Pembayaran from "./pages/pembayaran/pembayaran";
import { HomePenjual } from "./pages/homePenjual/homePenjual";
import { Profile } from "./pages/profile/profile";
import { Keranjang } from "./pages/keranjang/keranjang";
import { Teman } from "./pages/teman/teman";
import { Chat } from "./pages/chat/chat";
import { BuatKonserPenjual } from "./pages/buatKonserPenjual/buatKonserPenjual";
import { LoginPenjual } from "./pages/loginPenjual/loginPenjual";
import { DaftarPenjual } from "./pages/daftarPenjual/daftarPenjual";
import { ProfilePenjual } from "./pages/profilePenjual/profilePenjual";
import { KonserAnda } from "./pages/konserAnda/konserAnda";
import { Notifikasi } from "./pages/notifikasi/notifikasi";
import { Pendapatan } from "./pages/pendapatan/pendapatan";

function App() {
  return (
    <Router>
      <Routes>
          {/* Pembeli */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/minati" element={<Minati />} />
          <Route path="/jelajah" element={<Jelajah />} />
          <Route path="/halamanKonser" element={<HalamanKonser />} />
          <Route path="/cariTeman" element={<Cariteman />} />
          <Route path="/halamanKonser" element={<HalamanKonser />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/teman" element={<Teman />} />
          <Route path="/chat" element={<Chat />} />

          {/* Penjual */}
          <Route path="/loginPenjual" element={<LoginPenjual />} />
          <Route path="/daftarPenjual" element={<DaftarPenjual />} />
          <Route path="/homePenjual" element={<HomePenjual />} />
          <Route path="/buatKonserPenjual" element={<BuatKonserPenjual />} />
          <Route path="/profilePenjual" element={<ProfilePenjual />} />
          <Route path="/konserAnda" element={<KonserAnda />} />
          <Route path="/notifikasi" element={<Notifikasi />} />
          <Route path="/pendapatan" element={<Pendapatan />} />

      </Routes>
    </Router>
  );
}

export default App;
