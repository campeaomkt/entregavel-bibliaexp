/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User, Calendar, Globe, Crown, Zap } from 'lucide-react';

export default function PsalmIntro() {
  return (
    <div id="intro-page" className="page flex flex-col pt-12">
      {/* Header Section */}
      <div className="relative">
        <div className="bg-burgundy text-white p-6 rounded-xl flex items-start justify-between shadow-lg">
          <div>
            <h1 className="text-8xl font-black leading-none">01</h1>
            <h2 className="text-4xl font-bold tracking-tight mt-2 uppercase">Salmos</h2>
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
      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-burgundy p-2 rounded-md shadow-sm">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-burgundy">Autor:</p>
              <p className="text-sm font-semibold">Geralmente atribuído a Davi ou Esdras</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-burgundy p-2 rounded-md shadow-sm">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-burgundy">Data de Escrita:</p>
              <p className="text-sm font-semibold">Pós-exílico (aprox. 450 a.C.)</p>
            </div>
          </div>
        </div>

        <div className="bg-burgundy/5 p-4 rounded-xl border border-burgundy/10">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-4 h-4 text-burgundy" />
            <p className="text-[10px] uppercase font-bold text-burgundy">Contexto Histórico e Teológico:</p>
          </div>
          <p className="text-xs leading-relaxed text-slate-700">
            O Salmo 1 serve como o portal de entrada para todo o Saltério. Ele estabelece os dois caminhos da humanidade: o caminho dos justos e o caminho dos ímpios. No contexto judaico, resume a essência da Torá como delícia para o crente.
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
              "Bem-aventurado o homem que não anda segundo o conselho dos ímpios..."
            </p>
            <p className="text-sm leading-relaxed text-slate-700 mt-4">
              A ideia central é que a verdadeira felicidade e prosperidade não dependem de circunstâncias externas, mas de uma vida enraizada na meditação da Palavra de Deus e na separação do pecado.
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
