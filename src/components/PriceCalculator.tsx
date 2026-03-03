import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Calculator, Info } from 'lucide-react';

const gardenTypes = [
  { id: 'minimalis', name: 'Minimalis', price: 250000 },
  { id: 'tropis', name: 'Tropis', price: 450000 },
  { id: 'kering', name: 'Kering', price: 350000 },
  { id: 'vertical', name: 'Vertical Garden', price: 850000 },
];

export default function PriceCalculator() {
  const [area, setArea] = useState<number>(10);
  const [type, setType] = useState(gardenTypes[0]);
  const [hasPond, setHasPond] = useState(false);
  const [hasLights, setHasLights] = useState(false);
  const [total, setTotal] = useState(0);
  const [displayTotal, setDisplayTotal] = useState(0);

  useEffect(() => {
    let base = area * type.price;
    if (hasPond) base += 5000000;
    if (hasLights) base += 1500000;
    setTotal(base);
  }, [area, type, hasPond, hasLights]);

  useEffect(() => {
    const duration = 1000;
    const steps = 20;
    const increment = (total - displayTotal) / steps;
    let current = displayTotal;
    
    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= total) || (increment < 0 && current <= total)) {
        setDisplayTotal(total);
        clearInterval(timer);
      } else {
        setDisplayTotal(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [total]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="bg-secondary py-24 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl lg:flex">
          {/* Form Side */}
          <div className="flex-1 p-8 md:p-12">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <Calculator className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-dark">Estimasi Biaya</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-dark/70">Luas Area (m²)</label>
                <input 
                  type="range" 
                  min="5" 
                  max="200" 
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-soft accent-primary"
                />
                <div className="mt-2 flex justify-between text-xs font-medium text-dark/40">
                  <span>5 m²</span>
                  <span className="text-lg font-bold text-primary">{area} m²</span>
                  <span>200 m²</span>
                </div>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-semibold text-dark/70">Jenis Taman</label>
                <div className="grid grid-cols-2 gap-3">
                  {gardenTypes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setType(t)}
                      className={`rounded-xl border-2 p-4 text-left transition-all ${
                        type.id === t.id 
                          ? 'border-primary bg-primary/5 text-primary' 
                          : 'border-gray-soft hover:border-primary/30'
                      }`}
                    >
                      <p className="text-sm font-bold">{t.name}</p>
                      <p className="text-[10px] opacity-60">Mulai {formatCurrency(t.price)}/m²</p>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <label className="flex flex-1 cursor-pointer items-center gap-3 rounded-xl border-2 border-gray-soft p-4 transition-all hover:border-primary/30">
                  <input 
                    type="checkbox" 
                    checked={hasPond}
                    onChange={(e) => setHasPond(e.target.checked)}
                    className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm font-medium">Tambah Kolam</span>
                </label>
                <label className="flex flex-1 cursor-pointer items-center gap-3 rounded-xl border-2 border-gray-soft p-4 transition-all hover:border-primary/30">
                  <input 
                    type="checkbox" 
                    checked={hasLights}
                    onChange={(e) => setHasLights(e.target.checked)}
                    className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm font-medium">Lampu Taman</span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Result Side */}
          <div className="flex w-full flex-col justify-center bg-primary p-8 text-white md:p-12 lg:w-[40%]">
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest opacity-70">Estimasi Total Biaya</p>
              <motion.h3 
                key={displayTotal}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="font-serif text-4xl font-bold md:text-5xl"
              >
                {formatCurrency(displayTotal)}
              </motion.h3>
            </div>
            
            <div className="mb-10 space-y-4 rounded-2xl bg-white/10 p-6 backdrop-blur-md">
              <div className="flex justify-between text-sm">
                <span className="opacity-70">Biaya Dasar ({type.name})</span>
                <span className="font-semibold">{formatCurrency(area * type.price)}</span>
              </div>
              {hasPond && (
                <div className="flex justify-between text-sm">
                  <span className="opacity-70">Fitur Air/Kolam</span>
                  <span className="font-semibold">{formatCurrency(5000000)}</span>
                </div>
              )}
              {hasLights && (
                <div className="flex justify-between text-sm">
                  <span className="opacity-70">Pencahayaan</span>
                  <span className="font-semibold">{formatCurrency(1500000)}</span>
                </div>
              )}
            </div>
            
            <div className="flex items-start gap-3 rounded-xl bg-accent/20 p-4 text-xs italic text-accent">
              <Info className="h-4 w-4 shrink-0" />
              <p>Harga di atas adalah estimasi awal. Biaya akhir akan ditentukan setelah survey lokasi dan detail desain.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
