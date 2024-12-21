// src/@types/canvas-confetti.d.ts
declare module 'canvas-confetti' {
    interface ConfettiOptions {
      particleCount?: number;
      spread?: number;
      origin?: { x: number; y: number };
      // Agrega otras opciones según sea necesario
    }
  
    export default function confetti(options?: ConfettiOptions): void;
  }