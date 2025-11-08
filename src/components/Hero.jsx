import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/60 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-600 shadow-sm">
              <Star className="text-yellow-500" size={14} />
              Trusted design & dev partner
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900">
              Build beautiful products, faster.
            </h1>
            <p className="mt-5 text-neutral-600 text-lg">
              We craft world‑class websites and SaaS experiences for startups and enterprises. From concept to launch, we handle design, development, and growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 font-medium hover:opacity-90">
                Start a project
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-medium border border-black/10 hover:border-black/20">
                Explore services
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-6 opacity-80">
              {['Notion','Vercel','Stripe','Framer','Figma','Linear'].map((brand) => (
                <div key={brand} className="text-sm text-neutral-500">{brand}</div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-indigo-200 via-fuchsia-200 to-amber-200 shadow-inner"></div>
            <div className="absolute inset-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
