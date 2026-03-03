import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'Proyek Selesai', value: 150, suffix: '+' },
  { label: 'Klien Puas', value: 120, suffix: '+' },
  { label: 'Tahun Pengalaman', value: 5, suffix: '' },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=1920&auto=format&fit=crop" 
                alt="Tim Gardenia sedang bekerja" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative box */}
            <div className="absolute -bottom-10 -right-10 -z-10 h-64 w-64 rounded-2xl bg-primary/10" />
            <div className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-2xl border-2 border-accent/30" />
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-primary p-6 text-white shadow-xl">
              <p className="text-4xl font-bold">5+</p>
              <p className="text-xs font-medium uppercase tracking-widest opacity-80">Years Experience</p>
            </div>
          </motion.div>
          
          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block font-serif text-lg italic text-accent">Tentang Kami</span>
            <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-dark md:text-5xl">
              Mewujudkan Keindahan <br />
              <span className="text-primary">Alam di Halaman Anda</span>
            </h2>
            <p className="mb-8 text-lg font-light leading-relaxed text-dark/70">
              Gardenia adalah tim profesional yang berdedikasi untuk menciptakan ruang luar yang menakjubkan. 
              Kami percaya bahwa setiap rumah berhak memiliki taman yang tidak hanya indah dipandang, 
              tetapi juga memberikan ketenangan jiwa.
            </p>
            
            <ul className="mb-10 space-y-4">
              {[
                'Pengalaman bertahun-tahun di industri lanskap',
                'Desain custom sesuai dengan karakter hunian',
                'Pengerjaan rapi, profesional, dan tepat waktu',
                'Material tanaman berkualitas tinggi'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-dark/80">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="grid grid-cols-3 gap-8 border-t border-gray-soft pt-10">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="text-3xl font-bold text-primary"
                  >
                    {stat.value}{stat.suffix}
                  </motion.p>
                  <p className="text-xs font-medium uppercase tracking-wider text-dark/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
