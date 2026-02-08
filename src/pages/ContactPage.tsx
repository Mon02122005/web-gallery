import React, { useState } from 'react';
import Layout from '../components/Layout';

interface ContactPageProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  onCloseMobileMenu: () => void;
}

const ContactPage: React.FC<ContactPageProps> = (props) => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const socialLinks = [
    { id: '1', name: 'Instagram', icon: 'camera', url: '#' },
    { id: '2', name: 'Twitter/X', icon: 'brand_awareness', url: '#' },
    { id: '3', name: 'Behance', icon: 'palette', url: '#' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulasi API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulasi delay
      
      // Di sini biasanya ada API call
      // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ nama: '', email: '', pesan: '' });
      
      // Reset success message setelah 3 detik
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout {...props} currentPage="contact">
      <main className="flex flex-1 items-center justify-center px-6 py-16 lg:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                Hubungi Saya
              </span>
              <h1 className="font-serif text-5xl font-bold leading-tight text-[#1c140d] dark:text-white md:text-6xl">
                Mari Berbincang.
              </h1>
              <p className="text-lg leading-relaxed text-[#4a3a2a] dark:text-[#d1c2b5]">
                Punya ide atau proyek menarik? Saya siap membantu mewujudkan visi visual Anda. 
                Kirimkan pesan dan mari kita mulai.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#9c7349]">Email</span>
                  <a 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    href="mailto:halo@thegallery.id"
                  >
                    halo@thegallery.id
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#9c7349]">Lokasi</span>
                  <span className="text-lg font-medium">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-4 pt-8 border-t border-[#f4ede7] dark:border-[#3d2e1f]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9c7349]">
                Media Sosial
              </span>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    className="group flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-[#2a1f15] border border-[#e8dbce] dark:border-[#3d2e1f] text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                    href={link.url}
                    aria-label={link.name}
                  >
                    <span className="material-symbols-outlined">{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-3xl bg-white dark:bg-[#1a120b] p-8 lg:p-10 shadow-2xl shadow-[#1c140d]/5 border border-[#f4ede7] dark:border-[#3d2e1f]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label 
                  className="text-sm font-bold text-[#4a3a2a] dark:text-[#d1c2b5]" 
                  htmlFor="nama"
                >
                  Nama
                </label>
                <input
                  className="w-full rounded-xl border border-[#e8dbce] dark:border-[#3d2e1f] dark:bg-[#221910] focus:border-primary focus:ring-primary py-3 px-4 text-base transition-all"
                  id="nama"
                  name="nama"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={formData.nama}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label 
                  className="text-sm font-bold text-[#4a3a2a] dark:text-[#d1c2b5]" 
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full rounded-xl border border-[#e8dbce] dark:border-[#3d2e1f] dark:bg-[#221910] focus:border-primary focus:ring-primary py-3 px-4 text-base transition-all"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-2">
                <label 
                  className="text-sm font-bold text-[#4a3a2a] dark:text-[#d1c2b5]" 
                  htmlFor="pesan"
                >
                  Pesan
                </label>
                <textarea
                  className="w-full rounded-xl border border-[#e8dbce] dark:border-[#3d2e1f] dark:bg-[#221910] focus:border-primary focus:ring-primary py-3 px-4 text-base transition-all resize-none"
                  id="pesan"
                  name="pesan"
                  rows={5}
                  placeholder="Tuliskan pesan Anda di sini..."
                  value={formData.pesan}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                className="mt-2 flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-xl shadow-primary/25 hover:translate-y-[-2px] hover:shadow-primary/35 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">
                      progress_activity
                    </span>
                    Mengirim...
                  </>
                ) : (
                  <>
                    Kirim Pesan
                    <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
                  <p className="text-green-700 dark:text-green-300 text-sm font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">check_circle</span>
                    Pesan berhasil dikirim! Saya akan membalas secepatnya.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
                  <p className="text-red-700 dark:text-red-300 text-sm font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">error</span>
                    Terjadi kesalahan. Silakan coba lagi.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ContactPage;