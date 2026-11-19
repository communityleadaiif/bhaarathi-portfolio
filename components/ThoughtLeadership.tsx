'use client';

import { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X, Sparkles, Share2 } from 'lucide-react';
import { Article } from '@/types';

interface ThoughtLeadershipProps {
  articles: Article[];
}

export default function ThoughtLeadership({ articles }: ThoughtLeadershipProps) {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section id="thought-leadership" className="py-20 sm:py-28 relative bg-[#0D1322]/50 border-t border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#171F2E] border border-gold/30 text-gold text-xs font-mono uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5 text-gold" />
            <span>Thought Leadership &amp; Publications</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
            Strategic Essays &amp; Frameworks
          </h2>
          <p className="text-base text-ivory/70 leading-relaxed">
            Rigorous analysis on university venture engines, non-grant institutional sustainability, AI in regional industrial corridors, and deeptech commercialization.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="p-8 rounded-3xl bg-gradient-to-b from-[#171C25] to-[#101827] border border-gold/20 hover:border-gold/45 transition duration-300 shadow-xl flex flex-col justify-between space-y-6 group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-gold/80">
                  <span className="px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/20 font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-1 text-ivory/50">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-ivory group-hover:text-gold-light transition leading-tight">
                  {article.title}
                </h3>

                <p className="text-xs text-ivory/70 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gold/15 flex items-center justify-between text-xs font-bold text-gold group-hover:text-gold-light">
                <span>Read Executive Essay</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#101827] border border-gold/40 rounded-3xl p-6 sm:p-10 space-y-6 text-ivory shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Controls */}
            <div className="flex items-center justify-between border-b border-gold/20 pb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono uppercase tracking-widest text-gold px-2.5 py-0.5 rounded bg-gold/10 border border-gold/25 font-bold">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-ivory/50 font-mono">
                  &bull; {activeArticle.readTime}
                </span>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-xl bg-[#171C25] hover:bg-[#232A37] text-ivory/70 hover:text-ivory transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Title & Metadata */}
            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory tracking-tight leading-tight">
                {activeArticle.title}
              </h2>
              <div className="flex items-center space-x-3 text-xs text-ivory/60 font-mono">
                <span>By Prof. Bhaarathi Ilango</span>
                <span>&bull;</span>
                <span>Published: {activeArticle.publishedDate}</span>
              </div>
            </div>

            {/* Excerpt Callout */}
            <div className="p-4 rounded-2xl bg-gold/10 border-l-4 border-gold text-xs sm:text-sm text-ivory/90 leading-relaxed font-serif italic">
              {activeArticle.excerpt}
            </div>

            {/* Full Markdown Article Content */}
            <div className="text-xs sm:text-sm text-ivory/80 space-y-4 leading-relaxed whitespace-pre-line border-t border-gold/15 pt-6">
              {activeArticle.content}
            </div>

            {/* Article Footer */}
            <div className="pt-6 border-t border-gold/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ivory/60">
              <span className="font-mono">Author: Prof. Bhaarathi Ilango &bull; Executive Dossier</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-gold text-[#0A0F1D] font-bold uppercase tracking-wider text-xs shadow-gold"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
