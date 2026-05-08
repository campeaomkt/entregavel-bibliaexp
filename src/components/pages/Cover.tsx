/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function Cover() {
  return (
    <div id="cover-page" className="page flex flex-col items-center justify-center text-center relative overflow-hidden border-8 border-gold">
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-gold" />
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-gold" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-gold" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-gold" />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-gold/10 to-transparent" />

      <div className="relative z-10 space-y-8">
        <h2 className="text-2xl font-semibold tracking-[0.2em] text-burgundy uppercase">
          Digital Estudo
        </h2>
        
        <div className="w-full max-w-md mx-auto h-px bg-gold/50" />
        
        <div className="space-y-2">
          <h1 className="text-8xl font-black text-burgundy tracking-tighter leading-none">
            150
          </h1>
          <h1 className="text-6xl font-black text-burgundy tracking-tight">
            SALMOS
          </h1>
          <h3 className="text-3xl font-bold bg-burgundy text-white px-6 py-2 inline-block rounded-md mt-4">
            EXPLICADOS
          </h3>
        </div>

        <p className="text-xl italic text-gold font-medium mt-8">
          Versículo por Versículo
        </p>

        <div className="mt-16 text-slate-600 max-w-xs mx-auto text-sm leading-relaxed">
          <p>Um guia completo para entender a profundidade teológica e espiritual dos Salmos de uma forma clara e objetiva.</p>
        </div>

        <div className="mt-32">
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <p className="text-xs uppercase tracking-widest text-burgundy font-bold">2026 Edition</p>
        </div>
      </div>
      
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />
    </div>
  );
}
