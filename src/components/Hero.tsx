import { motion } from 'motion/react';
import { ArrowRight, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden scroll-mt-24">
      {/* Parallax Background */}
      <div 
        className="parallax absolute inset-0 z-0"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1920&auto=format&fit=crop')`,
          filter: 'brightness(0.6)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 backdrop-blur-md"
          >
            <Leaf className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium tracking-widest text-white uppercase">Premium Landscaping Service</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 font-serif text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Jasa Pembuatan Taman <br />
            <span className="italic text-accent">Profesional & Estetik</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mb-10 max-w-2xl text-lg font-light text-white/80 md:text-xl"
          >
            Kami menghadirkan taman modern, minimalis, dan asri untuk rumah impian Anda. 
            Sentuhan alam yang elegan untuk kenyamanan hunian Anda.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a 
              href="#booking"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              Konsultasi Sekarang
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#portfolio"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              Lihat Portfolio
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-6 justify-center rounded-full border-2 border-white/30 p-1">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-2 w-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
