import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = [
  "soluções criativas",
  "projetos de impacto",
  "produtos inteligentes",
  "resultados reais",
];

export function Typewriter() {
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < words[index].length) {
        timeout = setTimeout(() => {
          setDisplayed(words[index].slice(0, displayed.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 50);
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, index]);

  return (
    <motion.span
      key={displayed}
      exit={{ opacity: 0 }}
    >
      {displayed}
    </motion.span>
  );
}
