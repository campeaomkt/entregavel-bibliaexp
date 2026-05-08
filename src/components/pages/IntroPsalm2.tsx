/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User, Calendar, Globe, Crown, Zap } from 'lucide-react';

export default function PsalmIntro2() {
  return (
    <div id="intro-psalm-2" className="page flex flex-col pt-8">
      {/* Header Section */}
      <div className="relative">
        <div className="bg-burgundy text-white p-6 rounded-xl flex items-start justify-between shadow-lg">
          <div>
            <h1 className="text-7xl font-black leading-none">02</h1>
            <h2 className="text-3xl font-bold tracking-tight mt-2 uppercase">Salmos</h2>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/10 p-3 rounded-lg text-center min-w-[100px]">
              <p className="text-[10px] uppercase font-bold text-white/70 mb-1">Categoria:</p>
              <p className="font-bold text-sm">Real / Messânico</p>
            </div>
            <div className="bg-white/10 p-3 rounded-lg text-center min-w-[80px]">
              <p className="text-[10px] uppercase font-bold text-white/70 mb-1">Versículos:</p>
              <p className="font-bold text-xl">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="grid grid-cols-2 gap-8 mt-10">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-burgundy p-3 rounded-md shadow-sm">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs uppercase font-black text-burgundy">Autor:</p>
              <p className="text-base font-bold text-slate-800">Atribuído a Davi (Confirmado em Atos 4:25)</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-burgundy p-3 rounded-md shadow-sm">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs uppercase font-black text-burgundy">Data de Escrita:</p>
              <p className="text-base font-bold text-slate-800">Período da Monarquia (aprox. 1000 a.C.)</p>
            </div>
          </div>
        </div>

        <div className="bg-burgundy/5 p-6 rounded-xl border border-burgundy/10">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-5 h-5 text-burgundy" />
            <p className="text-xs uppercase font-black text-burgundy">Contexto Histórico e Teológico:</p>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 font-medium">
            Enquanto o Salmo 1 foca na lei e na vida individual, o Salmo 2 foca no Rei e no destino das nações. Ele descreve a rebelião dos reis da terra contra o Ungido (Messias) de Deus e proclama o reinado soberano do Filho.
          </p>
        </div>
      </div>

      {/* Main Content Areas */}
      <div className="mt-12 grid grid-cols-1 gap-10 flex-1">
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <Crown className="w-6 h-6 text-gold" />
            <h3 className="font-extrabold text-burgundy uppercase tracking-widest text-lg">Ideia Principal</h3>
          </div>
          <div className="border-l-8 border-burgundy pl-6 py-6 bg-burgundy/5 rounded-r-2xl">
            <p className="text-lg leading-relaxed text-slate-800 italic font-bold mb-4">
              "Proclamarei o decreto do Senhor: Ele me disse: 'Tu és meu Filho; eu hoje te gerei.'"
            </p>
            <p className="text-base leading-relaxed text-slate-700">
              A ideia central é o triunfo final do Ungido de Deus sobre toda oposição. Deus estabeleceu Seu Rei em Sião e convida os líderes da terra a se submeterem a Ele para encontrar refúgio, em vez de julgamento.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-gold" />
            <h3 className="font-extrabold text-burgundy uppercase tracking-widest text-lg">Curiosidade</h3>
          </div>
          <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-gold/40 shadow-sm">
            <p className="text-base leading-relaxed text-slate-700 font-medium">
              Este é o Salmo mais citado no Novo Testamento. Ele é usado para validar a ressurreição de Cristo (Atos 13:33), Sua superioridade aos anjos (Hebreus 1:5) e Sua autoridade eterna sobre todas as nações (Apocalipse 2:27).
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8 border-t border-gold/20 text-center">
        <p className="text-[10px] uppercase tracking-widest text-burgundy font-bold">Página 04 - Intro Salmo 02</p>
      </div>
    </div>
  );
}
