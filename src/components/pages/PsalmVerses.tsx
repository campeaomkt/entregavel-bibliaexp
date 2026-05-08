/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, CheckCircle2, Info } from 'lucide-react';

interface VerseBlockProps {
  verses: string;
  text: string;
  explanation: string;
}

const VerseBlock = ({ verses, text, explanation }: VerseBlockProps) => (
  <div className="space-y-4 mb-10 group">
    {/* Verse Header - Greenish Label */}
    <div className="inline-block bg-[#d9f2d0] px-4 py-1.5 rounded-lg">
      <h3 className="text-[#3a7c1b] font-black text-sm uppercase tracking-tight">Versículos {verses}</h3>
    </div>
    
    {/* Verse Text - Red/Italic */}
    <div className="flex gap-2">
      <span className="text-xl leading-none mt-1">✍️</span>
      <p className="text-[#d12c2c] italic font-bold text-sm leading-relaxed">
        {text}
      </p>
    </div>
    
    {/* Explanation - Green Checkmark style */}
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        <div className="bg-[#4CAF50] rounded-sm p-0.5 mt-0.5">
          <CheckCircle2 className="w-3 h-3 text-white" />
        </div>
        <div className="space-y-1">
          <p className="text-sm leading-relaxed text-slate-700">
            <span className="font-black text-[#3a7c1b]">Explicação:</span> {explanation}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function PsalmVerses() {
  return (
    <div id="content-page" className="page flex flex-col pt-12">
      {/* Header */}
      <div className="text-center mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gold/30 -z-10" />
        <h2 className="bg-parchment px-8 inline-block text-2xl font-black text-burgundy uppercase tracking-widest border-x-4 border-burgundy">
          Explicação Versículo por Versículo
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-4 flex-1 relative">
        {/* Vertical Separator Line */}
        <div className="absolute left-1/2 top-4 bottom-4 w-px bg-gold/30 -translate-x-1/2 hidden md:block" />
        
        <div className="flex flex-col">
          <VerseBlock 
            verses="1-2"
            text="Bem-aventurado o homem que não anda segundo o conselho dos ímpios, nem se detém no caminho dos pecadores, nem se assenta na roda dos escarnecedores. Antes tem o seu prazer na lei do Senhor, e na sua lei medita de dia e de noite."
            explanation="A felicidade bíblica começa com uma tríplice negação: não andar, não parar e não assentar. Isso mostra que o pecado é uma descida progressiva. Em contraste, o bem-aventurado encontra deleite ativo na instrução divina, dedicando sua mente a ela constantemente."
          />

          <VerseBlock 
            verses="3"
            text="Pois será como a árvore plantada junto a ribeiros de águas, a qual dá o seu fruto no seu tempo; as suas folhas não cairão, e tudo quanto fizer prosperará."
            explanation="O crente é comparado a uma árvore 'plantada' (ato intencional) e não silvestre. A proximidade com as águas (Espírito/Palavra) garante nutrição mesmo em tempos de seca, produzindo um caráter que não murcha e uma vida que floresce espiritualmente."
          />
        </div>

        <div className="flex flex-col">
          <VerseBlock 
            verses="4-5"
            text="Não são assim os ímpios; mas são como a moinha que o vento espalha. Por isso os ímpios não subsistirão no juízo, nem os pecadores na congregação dos justos."
            explanation="O ímpio é o oposto da árvore: é moinha, leve, sem raiz e sem substância. Ele não tem estabilidade moral. No julgamento final, sua falta de peso espiritual o tornará incapaz de permanecer na presença santa de Deus e dos remidos."
          />

          <VerseBlock 
            verses="6"
            text="Porque o Senhor conhece o caminho dos justos; porém o caminho dos ímpios perecerá."
            explanation="A palavra 'conhece' aqui implica relacionamento e cuidado íntimo. Deus observa e protege cada passo do justo. Já o caminho do ímpio, por ser autossuficiente e rebelde, leva inevitavelmente ao nada, desaparecendo como um rastro no deserto."
          />
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-auto bg-burgundy/5 p-4 rounded-xl border border-burgundy/10 flex items-center gap-4">
        <Info className="w-6 h-6 text-burgundy" />
        <p className="text-[12px] font-medium text-slate-700 leading-snug italic">
          Meditação Final: O Salmo 1 nos convida a uma escolha radical. Não existe meio-termo. Ou somos árvores frutíferas ou somos cinzas ao vento. Onde está o seu prazer hoje?
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-gold/20 text-center">
        <p className="text-[10px] uppercase tracking-widest text-burgundy font-bold">Página 03 - Salmo 01 v.v.</p>
      </div>

      {/* Decorative Stamp */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-burgundy text-white flex items-center justify-center rounded-full font-bold text-xs ring-4 ring-gold/20 shadow-md">
        Ps. 01
      </div>
    </div>
  );
}
