import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

const categories = ['Semua', 'Minimalis', 'Tropis', 'Kolam', 'Kering'];

const projects = [
  { id: 2, category: 'Minimalis', title: 'Urban Greenery', image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop', tall: true },
  { id: 3, category: 'Tropis', title: 'Tropical Paradise', image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=800&auto=format&fit=crop', tall: true },
  { id: 4, category: 'Tropis', title: 'Backyard Jungle', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop', tall: false },
  { id: 5, category: 'Kolam', title: 'Koi Pond Serenity', image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=800&auto=format&fit=crop', tall: false },
  { id: 6, category: 'Kolam', title: 'Modern Water Feature', image: 'https://images.unsplash.com/photo-1584479898061-15742e14f50d?q=80&w=800&auto=format&fit=crop', tall: true },
  { id: 7, category: 'Kering', title: 'Desert Oasis', image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop', tall: true },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'Semua' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="bg-white py-24 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <span className="mb-4 inline-block font-serif text-lg italic text-accent">Portfolio</span>
            <h2 className="font-serif text-4xl font-bold text-dark md:text-5xl">
              Karya <span className="text-primary">Terbaik Kami</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-gray-soft text-dark/60 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          layout
          className="masonry-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="masonry-item group relative cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className={project.tall ? "aspect-[3/4]" : "aspect-square"}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-6 left-6">
                    <p className="text-xs font-medium uppercase tracking-widest text-accent">{project.category}</p>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="absolute right-6 top-6 rounded-full bg-white/20 p-2 backdrop-blur-md">
                    <Maximize2 className="h-5 w-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-dark/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute right-6 top-6 z-[120] rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Project Detail"
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
