/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User, Calendar, Globe, Crown, Zap } from 'lucide-react';

export default function PsalmIntro2() {
  return (
    <div id="intro-psalm-2" className="page flex flex-col pt-12">
      {/* Header Section */}
      <div className="relative">
        <div className="bg-burgundy text-white p-6 rounded-xl flex items-start justify-between shadow-lg">
          <div>
            <h1 className="text-8xl font-black leading-none">02</h1>
            <h2 className="text-4xl font-bold tracking-tight mt-2 uppercase">Salmos</h2>
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
      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-burgundy p-2 rounded-md shadow-sm">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-burgundy">Autor:</p>
              <p className="text-sm font-semibold">Atribuído a Davi (Confirmado em Atos 4:25)</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-burgundy p-2 rounded-md shadow-sm">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-burgundy">Data de Escrita:</p>
              <p className="text-sm font-semibold">Período da Monarquia (aprox. 1000 a.C.)</p>
            </div>
          </div>
        </div>

        <div className="bg-burgundy/5 p-4 rounded-xl border border-burgundy/10">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-4 h-4 text-burgundy" />
            <p className="text-[10px] uppercase font-bold text-burgundy">Contexto Histórico e Teológico:</p>
          </div>
          <p className="text-xs leading-relaxed text-slate-700">
            Enquanto o Salmo 1 foca na lei e na vida individual, o Salmo 2 foca no Rei e no destino das nações. Ele descreve a rebelião dos reis da terra contra o Ungido (Messias) de Deus e proclama o reinado soberano do Filho.
          </p>
        </div>
      </div>

      {/* Main Content Areas */}
      <div className="mt-12 grid grid-cols-2 gap-8 flex-1">
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <Crown className="w-5 h-5 text-gold" />
            <h3 className="font-bold text-burgundy uppercase tracking-wider">Ideia Principal</h3>
          </div>
          <div className="border-l-4 border-burgundy pl-4 py-2 bg-burgundy/5 rounded-r-lg min-h-[200px]">
            <p className="text-sm leading-relaxed text-slate-800 italic">
              "Proclamarei o decreto do Senhor: Ele me disse: 'Tu és meu Filho; eu hoje te gerei.'"
            </p>
            <p className="text-sm leading-relaxed text-slate-700 mt-4">
              A ideia central é o triunfo final do Ungido de Deus sobre toda oposição. Deus estabeleceu Seu Rei em Sião e convida os líderes da terra a se submeterem a Ele para encontrar refúgio, em vez de julgamento.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-gold" />
            <h3 className="font-bold text-burgundy uppercase tracking-wider">Curiosidade</h3>
          </div>
          <div className="bg-white p-6 rounded-xl border-2 border-dashed border-gold/30 min-h-[200px]">
            <p className="text-sm leading-relaxed text-slate-700">
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
