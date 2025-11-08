import { Code2, PenTool, BadgeCheck } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Product Design',
    desc: 'UX research, wireframes, visual design, and design systems tailored to your brand.'
  },
  {
    icon: Code2,
    title: 'Web & App Development',
    desc: 'High-performance websites and full-stack apps using modern frameworks and best practices.'
  },
  {
    icon: BadgeCheck,
    title: 'Growth & Optimization',
    desc: 'SEO, analytics, A/B testing, and performance tuning to scale your product.'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Services</h2>
          <p className="mt-3 text-neutral-600">Everything you need to go from idea to launch — and beyond.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white flex items-center justify-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-neutral-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
