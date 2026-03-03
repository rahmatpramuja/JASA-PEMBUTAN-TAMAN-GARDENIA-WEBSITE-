import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '6281387661528';
  const message = 'Halo Gardenia, saya tertarik untuk konsultasi pembuatan taman.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[90] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute -left-40 top-1/2 -translate-y-1/2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-dark shadow-xl opacity-0 transition-opacity group-hover:opacity-100 md:block hidden">
        Konsultasi via WhatsApp
      </span>
    </motion.a>
  );
}
