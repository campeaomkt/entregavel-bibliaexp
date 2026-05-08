/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User, Calendar, Globe, Crown, Zap } from 'lucide-react';

export default function PsalmIntro() {
  return (
    <div id="intro-page" className="page flex flex-col pt-8">
      {/* Header Section */}
      <div className="relative">
        <div className="bg-burgundy text-white p-6 rounded-xl flex items-start justify-between shadow-lg">
          <div>
            <h1 className="text-7xl font-black leading-none">01</h1>
            <h2 className="text-3xl font-bold tracking-tight mt-2 uppercase">Salmos</h2>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/10 p-3 rounded-lg text-center min-w-[100px]">
              <p className="text-[10px] uppercase font-bold text-white/70 mb-1">Categoria:</p>
              <p className="font-bold text-sm">Instrução / Sabedoria</p>
            </div>
            <div className="bg-white/10 p-3 rounded-lg text-center min-w-[80px]">
              <p className="text-[10px] uppercase font-bold text-white/70 mb-1">Versículos:</p>
              <p className="font-bold text-xl">06</p>
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
              <p className="text-base font-bold text-slate-800">Geralmente atribuído a Davi ou Esdras</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-burgundy p-3 rounded-md shadow-sm">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs uppercase font-black text-burgundy">Data de Escrita:</p>
              <p className="text-base font-bold text-slate-800">Pós-exílico (aprox. 450 a.C.)</p>
            </div>
          </div>
        </div>

        <div className="bg-burgundy/5 p-6 rounded-xl border border-burgundy/10">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-5 h-5 text-burgundy" />
            <p className="text-xs uppercase font-black text-burgundy">Contexto Histórico e Teológico:</p>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 font-medium">
            O Salmo 1 serve como o portal de entrada para todo o Saltério. Ele estabelece os dois caminhos da humanidade: o caminho dos justos e o caminho dos ímpios. No contexto judaico, resume a essência da Torá como delícia para o crente.
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
              "Bem-aventurado o homem que não anda segundo o conselho dos ímpios..."
            </p>
            <p className="text-base leading-relaxed text-slate-700">
              A ideia central é que a verdadeira felicidade e prosperidade não dependem de circunstâncias externas, mas de uma vida enraizada na meditação da Palavra de Deus e na separação do pecado.
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
              O Salmo 1 não possui título no original hebraico, diferente de muitos outros. Isso acontece porque os rabinos antigos consideravam os Salmos 1 e 2 como uma única introdução literária, conectando a sabedoria pessoal (Salmo 1) com a esperança messiânica (Salmo 2).
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8 border-t border-gold/20 text-center">
        <p className="text-[10px] uppercase tracking-widest text-burgundy font-bold">Página 02 - Intro Salmos</p>
      </div>
    </div>
  );
}
