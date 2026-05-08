/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Printer, Download } from 'lucide-react';
import Cover from './components/pages/Cover.tsx';
import PsalmIntro from './components/pages/IntroPsalm.tsx';
import PsalmVerses from './components/pages/PsalmVerses.tsx';
import PsalmIntro2 from './components/pages/IntroPsalm2.tsx';
import PsalmVerses2 from './components/pages/PsalmVerses2.tsx';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center">
      {/* Interface Elements (Hidden on Print) */}
      <div className="no-print sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200 p-4 shadow-sm flex justify-between items-center px-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-burgundy rounded-lg flex items-center justify-center text-white shadow-md">
            <span className="font-bold">150</span>
          </div>
          <div>
            <h1 className="font-bold text-neutral-800 leading-none">Salmos Explicados</h1>
            <p className="text-xs text-neutral-500 font-medium">Formato Digital A4</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-burgundy hover:bg-burgundy/90 text-white px-6 py-2.5 rounded-full font-bold shadow-lg transition-all active:scale-95 group"
          >
            <Printer className="w-4 h-4 transition-transform group-hover:scale-110" />
            Imprimir Agora (A4)
          </button>
          
          <div className="flex items-center text-xs text-neutral-400 font-medium max-w-[150px] leading-tight">
            Use "Salvar como PDF" nas opções de impressão para gerar o arquivo.
          </div>
        </div>
      </div>

      {/* Main Document Content */}
      <main className="document-container py-8 flex flex-col items-center gap-8">
        <Cover />
        <PsalmIntro />
        <PsalmVerses />
        <PsalmIntro2 />
        <PsalmVerses2 />
      </main>

      {/* Floating Scroll to Top / Navigation if needed */}
      <div className="no-print py-12 text-center text-neutral-400 text-sm">
        <p>&copy; 2026 Estudo Bíblico Digital - Todos os direitos reservados.</p>
      </div>
    </div>
  );
}
