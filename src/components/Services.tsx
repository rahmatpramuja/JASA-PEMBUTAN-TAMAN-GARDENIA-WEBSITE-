import { motion } from 'motion/react';
import { TreePine, Sun, Droplets, LayoutGrid, Waves, Scissors } from 'lucide-react';

const services = [
  {
    title: 'Taman Minimalis',
    description: 'Desain taman bersih dan modern yang memaksimalkan lahan terbatas dengan estetika tinggi.',
    icon: LayoutGrid,
  },
  {
    title: 'Taman Tropis',
    description: 'Hadirkan nuansa hutan tropis yang rimbun dan menyegarkan di pekarangan rumah Anda.',
    icon: TreePine,
  },
  {
    title: 'Taman Kering',
    description: 'Solusi taman rendah perawatan dengan perpaduan batu alam dan tanaman xerofit yang elegan.',
    icon: Sun,
  },
  {
    title: 'Vertical Garden',
    description: 'Manfaatkan dinding kosong menjadi taman vertikal yang indah untuk sirkulasi udara lebih baik.',
    icon: Droplets,
  },
  {
    title: 'Kolam & Water Feature',
    description: 'Suara gemericik air dari kolam koi atau water feature untuk suasana yang lebih menenangkan.',
    icon: Waves,
  },
  {
    title: 'Perawatan Taman',
    description: 'Layanan pemeliharaan rutin agar taman Anda tetap sehat, rapi, dan indah sepanjang tahun.',
    icon: Scissors,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-secondary py-24 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="mb-4 inline-block font-serif text-lg italic text-accent">Layanan Kami</span>
          <h2 className="font-serif text-4xl font-bold text-dark md:text-5xl">
            Solusi Lanskap <span className="text-primary">Menyeluruh</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-sm transition-all hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark">{service.title}</h3>
              <p className="font-light leading-relaxed text-dark/60">
                {service.description}
              </p>
              
              {/* Decorative background element */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
