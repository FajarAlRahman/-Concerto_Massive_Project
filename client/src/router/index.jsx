import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout/app-layout";
import AuthLayout from "../layout/auth-layout"; 
import { Landing } from "../pages/landing/landing";
import { Login } from "../pages/login/login";
import { Home } from "../pages/home/home";
import { Jelajah } from "../pages/jelajah/jelajah";
import { Daftar } from "../pages/daftar/daftar";
import { Cariteman } from "../pages/cariTeman/cariTeman";
import { Minati } from "../pages/minati/minati";
import { HalamanKonser } from "../pages/halamanKonser/halamanKonser";
import Pembayaran from "../pages/pembayaran/pembayaran";




const AppRouter = () => {
  return (
    <Routes>
      {/* Routes with AuthLayout */}
      <Route path="/" element={<AuthLayout><Landing /></AuthLayout>} />
      <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
      <Route path="/daftar" element={<AuthLayout><Daftar /></AuthLayout>} />
      <Route path="/minati" element={<AuthLayout><Minati /></AuthLayout>} />


      {/* Routes with AppLayout */}
      <Route path="/home" element={<AppLayout><Home /></AppLayout>} />
      <Route path="/jelajah" element={<AppLayout><Jelajah /></AppLayout>} />
      <Route path="/cariTeman" element={<AppLayout><Cariteman /></AppLayout>} />
      <Route path="/halamanKonser" element={<AppLayout><HalamanKonser /></AppLayout>} />
      <Route path="/pembayaran" element={<AppLayout><Pembayaran /></AppLayout>} />
    </Routes>
  );
};

export default AppRouter;
