import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { schedule } from "@/data/schedule";

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function Home() {
  const upcomingEvents = schedule.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/photos/CV7EA4TX3VJYWYQ5L6RALE3K.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/50 to-brand-dark" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-5xl font-bold uppercase leading-tight tracking-wider text-white md:text-7xl">
            Arrive. Drive.{" "}
            <span className="text-brand-green">Race.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
            Jacksonville, FL based endurance racing team. Get behind the wheel of a race-prepared BMW or Porsche and compete in real endurance races — no car ownership required.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/shop">Book a Race Seat</Button>
            <Button href="/schedule" variant="outline">
              View 2026 Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          title="What We Do"
          subtitle="Real endurance racing, made accessible"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Arrive & Drive",
              desc: "We handle the car, prep, tires, fuel, and crew. You show up and race.",
            },
            {
              title: "Endurance Racing",
              desc: "8-hour, 14-hour, and 24-hour races in ChampCar, WRL, and HSR series.",
            },
            {
              title: "Track Days",
              desc: "Not ready to race? Rent a car for a track day and build your skills.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-white/10 bg-brand-card p-8 transition-colors hover:bg-brand-card-hover"
            >
              <h3 className="font-heading text-xl font-bold uppercase text-brand-green">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="border-t border-white/10 bg-brand-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Upcoming Events"
            subtitle="2026 season highlights"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-lg border border-white/10 bg-brand-dark p-6"
              >
                <div className="font-heading text-sm font-semibold uppercase tracking-wider text-brand-green">
                  {event.series} — {event.duration}
                </div>
                <h3 className="mt-2 font-heading text-xl font-bold text-white">
                  {event.venue}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{event.location}</p>
                <p className="mt-1 text-sm text-gray-500">
                  {formatDate(event.date)}
                  {event.endDate && ` – ${formatDate(event.endDate)}`}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/schedule" variant="outline">
              Full Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <blockquote className="text-2xl font-light italic text-gray-300 md:text-3xl">
          &ldquo;Open Throttle really made the dream possible and I&rsquo;m giving them full kudos.&rdquo;
        </blockquote>
        <cite className="mt-6 block text-sm uppercase tracking-wider text-gray-500">
          — The Drive
        </cite>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-brand-card py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-heading text-3xl font-bold uppercase text-white md:text-4xl">
            Ready to Race?
          </h2>
          <p className="mt-4 text-gray-400">
            Browse available race seats for the 2026 season. No car, no crew, no problem.
          </p>
          <div className="mt-8">
            <Button href="/shop">Browse Race Seats</Button>
          </div>
        </div>
      </section>
    </>
  );
}
