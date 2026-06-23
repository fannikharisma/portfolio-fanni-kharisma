import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // useLocation akan mendeteksi setiap kali URL/path berubah (misal dari '/' ke '/about')
  const { pathname } = useLocation();

  useEffect(() => {
    // Memaksa window untuk langsung lompat ke koordinat paling atas
    window.scrollTo(0, 0);
  }, [pathname]); // useEffect ini akan berjalan ulang SETIAP kali pathname berubah

  return null; // Komponen ini tidak merender elemen visual apapun
}
