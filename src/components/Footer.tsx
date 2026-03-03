import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark pt-24 pb-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h2 className="font-serif text-2xl font-bold tracking-widest text-white">GARDENIA</h2>
            </div>
            <p className="mb-8 text-sm font-light leading-relaxed text-white/60">
              Layanan profesional pembuatan taman modern, minimalis, dan elegan untuk hunian mewah Anda. Mewujudkan keindahan alam di halaman rumah Anda.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="rounded-full bg-white/5 p-3 transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="mb-8 font-serif text-xl font-bold">Layanan</h3>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><a href="#services" className="transition-colors hover:text-accent">Taman Minimalis</a></li>
              <li><a href="#services" className="transition-colors hover:text-accent">Taman Tropis</a></li>
              <li><a href="#services" className="transition-colors hover:text-accent">Vertical Garden</a></li>
              <li><a href="#services" className="transition-colors hover:text-accent">Kolam Ikan</a></li>
              <li><a href="#services" className="transition-colors hover:text-accent">Perawatan Taman</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="mb-8 font-serif text-xl font-bold">Kontak Kami</h3>
            <ul className="space-y-6 text-sm font-light text-white/60">
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Jl. sukabirus ,sukamahi ,Bogor Jawa Barat</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>+62 813 8766 1528</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>info@gardenia.id</span>
              </li>
            </ul>
          </div>
          
          {/* Map Embed */}
          <div>
            <h3 className="mb-8 font-serif text-xl font-bold">Lokasi Kami</h3>
            <div className="h-48 overflow-hidden rounded-2xl bg-white/5 grayscale transition-all hover:grayscale-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.257484433299!2d106.65022131476916!3d-6.22974649549045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f96300000001%3A0x627389895697d020!2sAlam%20Sutera!5e0!3m2!1sen!2sid!4v1651234567890!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24 border-t border-white/10 pt-12 text-center text-xs font-light text-white/40">
          <p>© 2026 Gardenia Landscaping. All rights reserved. Designed for Premium Living.</p>
        </div>
      </div>
    </footer>
  );
}
