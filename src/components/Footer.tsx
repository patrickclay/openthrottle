import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold uppercase text-brand-green">
              Open Throttle Racing
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Jacksonville, FL based arrive and drive team. Racing BMWs and Porsches in WRL, ChampCar, HSR, and track days.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/schedule", label: "2026 Schedule" },
                { href: "/shop", label: "Book a Seat" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-brand-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / contact */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Connect
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://www.instagram.com/openthrottletrackdays/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-green"
                >
                  Instagram
                </a>
              </li>
              <li>Jacksonville, FL</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Open Throttle Racing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
