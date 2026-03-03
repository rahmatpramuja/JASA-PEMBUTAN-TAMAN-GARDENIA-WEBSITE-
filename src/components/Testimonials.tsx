import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Bapak Andi',
    role: 'Pemilik Rumah di BSD',
    text: 'Sangat puas dengan hasil kerja Gardenia. Taman minimalis saya jadi sangat asri dan elegan. Pengerjaannya rapi dan tepat waktu.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Ibu Siska',
    role: 'Pemilik Villa di Puncak',
    text: 'Konsep taman tropis yang mereka buat benar-benar mengubah suasana villa kami. Timnya sangat profesional dan komunikatif.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Bapak Rahmat',
    role: 'Pemilik Restoran di Kemang',
    text: 'Vertical garden di restoran kami mendapat banyak pujian dari pelanggan. Terima kasih Gardenia atas solusinya yang kreatif.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-serif text-lg italic text-accent">Testimoni</span>
          <h2 className="font-serif text-4xl font-bold text-dark md:text-5xl">
            Apa Kata <span className="text-primary">Klien Kami</span>
          </h2>
        </div>
        
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="h-full rounded-3xl border border-gray-soft bg-secondary p-8 transition-all hover:border-primary/30 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                
                <p className="mb-8 font-light italic leading-relaxed text-dark/70">
                  "{t.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="h-12 w-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-dark">{t.name}</h4>
                    <p className="text-xs text-dark/40">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
