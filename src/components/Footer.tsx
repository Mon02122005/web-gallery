const Footer = () => {
  return (
    <footer className="mt-auto bg-[#1c140d] py-16 px-6 lg:px-20 text-white">
      <div className="mx-auto max-w-[1440px]">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl font-bold">Mari ciptakan sesuatu yang indah</h2>
            <p className="text-[#9c7349]">
              Tersedia untuk proyek lepas dan tugas editorial di seluruh dunia.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <button className="h-14 rounded-xl bg-primary px-10 text-base font-bold text-white shadow-xl shadow-primary/20 hover:scale-105 transition-transform hover:shadow-primary/30">
              Hubungi Saya
            </button>
            
            <div className="flex items-center gap-4 px-4">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="text-sm font-medium">Berbasis di Reykjavik, Islandia</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50 uppercase tracking-widest">
            © 2024 Galeri Foto. Seluruh Hak Cipta Dilindungi.
          </p>
          
          <div className="flex gap-8">
            {['Privasi', 'Ketentuan', 'Peta Situs'].map((item) => (
              <a
                key={item}
                className="text-xs text-white/50 uppercase tracking-widest hover:text-primary transition-colors"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>GaleriFotoPribadi.id • +62 812-3456-789</p>
          <p>Dibuat dengan ❤️ menggunakan React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;