import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="booking" className="bg-secondary py-24 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl md:flex">
          {/* Info Side */}
          <div className="bg-primary p-10 text-white md:w-1/3">
            <h2 className="mb-6 font-serif text-3xl font-bold">Konsultasi Gratis</h2>
            <p className="mb-8 text-sm font-light leading-relaxed opacity-80">
              Siap mewujudkan taman impian Anda? Isi form di samping dan tim kami akan segera menghubungi Anda untuk survey lokasi.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-white/10 p-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium">Survey Lokasi Gratis</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-white/10 p-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium">Desain Custom 3D</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-white/10 p-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium">Garansi Tanaman</span>
              </div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="relative p-10 md:flex-1">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center text-center"
              >
                <div className="mb-6 rounded-full bg-green-100 p-6 text-green-600">
                  <CheckCircle className="h-16 w-16" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-dark">Pesan Terkirim!</h3>
                <p className="text-dark/60">Terima kasih telah menghubungi Gardenia. Kami akan menghubungi Anda dalam 1x24 jam.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-dark/50">Nama Lengkap</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Contoh: Andi Wijaya"
                      className="w-full rounded-xl border border-gray-soft bg-secondary px-4 py-3 text-sm transition-all focus:border-primary focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-dark/50">Nomor WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="0812xxxx"
                      className="w-full rounded-xl border border-gray-soft bg-secondary px-4 py-3 text-sm transition-all focus:border-primary focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-dark/50">Alamat Survey</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Alamat lengkap lokasi taman"
                    className="w-full rounded-xl border border-gray-soft bg-secondary px-4 py-3 text-sm transition-all focus:border-primary focus:bg-white focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-dark/50">Jenis Taman</label>
                  <select className="w-full rounded-xl border border-gray-soft bg-secondary px-4 py-3 text-sm transition-all focus:border-primary focus:bg-white focus:outline-none">
                    <option>Taman Minimalis</option>
                    <option>Taman Tropis</option>
                    <option>Taman Kering</option>
                    <option>Vertical Garden</option>
                    <option>Kolam Ikan</option>
                  </select>
                </div>
                
                <div>
                  <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-dark/50">Pesan Tambahan</label>
                  <textarea 
                    rows={3}
                    placeholder="Ceritakan sedikit tentang taman impian Anda..."
                    className="w-full rounded-xl border border-gray-soft bg-secondary px-4 py-3 text-sm transition-all focus:border-primary focus:bg-white focus:outline-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-primary/90 disabled:opacity-70"
                >
                  {isLoading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      Booking Survey Sekarang
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
