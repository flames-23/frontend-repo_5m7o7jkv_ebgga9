import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will get back to you shortly.');
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Let’s build something great</h2>
            <p className="mt-3 text-neutral-600">Tell us about your project and we’ll reach out within 24 hours.</p>
            <ul className="mt-6 space-y-2 text-neutral-600 text-sm">
              <li>• Response within 1 business day</li>
              <li>• Flexible engagement: fixed scope or monthly</li>
              <li>• NDA available upon request</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700">Name</label>
                <input required className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-neutral-700">Project details</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us about goals, timelines, and budget"></textarea>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-full bg-black text-white px-5 py-3 font-medium hover:opacity-90">Request proposal</button>
            {status && <p className="mt-3 text-sm text-green-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
