'use client'

import { motion } from 'framer-motion'

export default function CorazonAnimado() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        <span className="text-9xl">❤️</span>
      </motion.div>
    </motion.div>
  )
}

