"use client";

import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <>
      <section className="pb-6 pt-12 text-center">
        <SectionHeading
          title="Contact"
          subtitle="Get in touch — we'd love to help you get on track"
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact form (visual only) */}
          <div className="rounded-lg border border-white/10 bg-brand-card p-8">
            <h3 className="font-heading text-xl font-bold uppercase text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded border border-white/10 bg-brand-dark px-4 py-3 text-white placeholder-gray-600 focus:border-brand-green focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded border border-white/10 bg-brand-dark px-4 py-3 text-white placeholder-gray-600 focus:border-brand-green focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded border border-white/10 bg-brand-dark px-4 py-3 text-white placeholder-gray-600 focus:border-brand-green focus:outline-none resize-none"
                  placeholder="Tell us about your racing experience and what you're interested in..."
                />
              </div>
              <button
                type="button"
                className="w-full rounded bg-brand-green px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-dark transition-colors hover:bg-brand-green/90"
              >
                Send Message
              </button>
              <p className="text-xs text-gray-500 text-center">
                Form is visual only — not connected to a backend yet.
              </p>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                Location
              </h3>
              <p className="mt-2 text-gray-400">Jacksonville, FL</p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                Follow Us
              </h3>
              <a
                href="https://www.instagram.com/openthrottletrackdays/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-brand-green hover:underline"
              >
                @openthrottletrackdays on Instagram
              </a>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                Race With Us
              </h3>
              <p className="mt-2 text-gray-400">
                Interested in booking a race seat or track day? Check out our{" "}
                <a href="/shop" className="text-brand-green hover:underline">
                  shop
                </a>{" "}
                or reach out with any questions. We welcome drivers of all experience levels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
