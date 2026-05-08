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

export default function PsalmVerses2() {
  return (
    <div id="content-psalm-2" className="page flex flex-col pt-12">
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
            verses="1-3"
            text="Por que se amotinam os gentios, e os povos imaginam coisas vazias? Os reis da terra se levantam e os governos consultam juntamente contra o Senhor e contra o seu Ungido, dizendo: Rompamos as suas ataduras, e sacudamos de nós as suas cordas."
            explanation="A rebelião humana é descrita como 'coisas vazias' ou fúteis. O homem tenta se libertar da autoridade de Deus como se as Suas leis fossem correntes, sem perceber que essa autoridade é o que sustenta a própria vida e ordem do universo."
          />

          <VerseBlock 
            verses="4-6"
            text="Aquele que habita nos céus se rirá; o Senhor zombará deles. Então lhes falará na sua ira, e no seu furor os turbará. Eu, porém, ungi o meu Rei sobre o meu santo monte de Sião."
            explanation="O riso de Deus não é de crueldade, mas de soberania absoluta. Enquanto a terra está em caos, Deus está sentado em Seu trono. Sua resposta à rebelião não é um debate, mas uma ação consumada: Ele já estabeleceu Seu Ungido."
          />
        </div>

        <div className="flex flex-col">
          <VerseBlock 
            verses="7-9"
            text="Proclamarei o decreto: o Senhor me disse: Tu és meu Filho, eu hoje te gerei. Pede-me, e eu te darei os gentios por herança... Tu os quebrarás com uma vara de ferro."
            explanation="Aqui o Rei Messias fala o decreto eterno. A filiação divina garante ao Rei autoridade universal. Ele possui o direito de julgar as nações que o rejeitam e governar com justiça inflexível (vara de ferro)."
          />

          <VerseBlock 
            verses="10-12"
            text="Agora, pois, ó reis, sede prudentes; deixai-vos instruir... Beijai o Filho, para que se não ire, e pereçais no caminho... Bem-aventurados todos aqueles que nele confiam."
            explanation="O Salmo termina com um apelo de graça. Beijar o Filho é um ato de lealdade e submissão amorosa. O Salmo fecha em harmonia com o Salmo 1: a verdadeira bem-aventurança está em confiar no Rei estabelecido por Deus."
          />
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-auto bg-burgundy/5 p-4 rounded-xl border border-burgundy/10 flex items-center gap-4">
        <Info className="w-6 h-6 text-burgundy" />
        <p className="text-[12px] font-medium text-slate-700 leading-snug italic">
          Pontos para Reflexão: A rebelião do mundo contra os valores cristãos não é novidade; é a natureza humana. Mas a vitória de Cristo é um decreto imutável de Deus. Você está lutando contra o Rei ou em refúgio nele?
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-gold/20 text-center">
        <p className="text-[10px] uppercase tracking-widest text-burgundy font-bold">Página 05 - Salmo 02 v.v.</p>
      </div>

      {/* Decorative Stamp */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-burgundy text-white flex items-center justify-center rounded-full font-bold text-xs ring-4 ring-gold/20 shadow-md">
        Ps. 02
      </div>
    </div>
  );
}
