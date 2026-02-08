const ContactFooter = () => {
  return (
    <footer className="bg-[#1c140d] py-12 px-6 lg:px-20 text-white">
      <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-white/50 uppercase tracking-widest">
        <div className="flex items-center gap-3 opacity-100">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined text-sm">filter_hdr</span>
          </div>
          <span className="text-sm font-bold tracking-tight text-white">
            The Gallery
          </span>
        </div>
        
        <p>© 2024 The Gallery Photography. Seluruh Hak Cipta Dilindungi.</p>
        
        <div className="flex gap-8">
          <a className="hover:text-primary transition-colors" href="#">
            Privasi
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Ketentuan
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;