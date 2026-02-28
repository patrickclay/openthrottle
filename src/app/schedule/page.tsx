import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { schedule } from "@/data/schedule";

function formatDateShort(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

const seriesColors: Record<string, string> = {
  ChampCar: "bg-brand-green text-brand-dark",
  WRL: "bg-blue-600 text-white",
  HSR: "bg-amber-500 text-brand-dark",
};

export default function SchedulePage() {
  return (
    <>
      <section className="pb-6 pt-12 text-center">
        <SectionHeading
          title="2026 Season"
          subtitle="Our full race calendar — endurance races, track days, and more"
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="space-y-4">
          {schedule.map((event) => (
            <div
              key={event.id}
              className="flex flex-col gap-4 rounded-lg border border-white/10 bg-brand-card p-6 transition-colors hover:bg-brand-card-hover md:flex-row md:items-center md:justify-between"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-block rounded px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${
                      seriesColors[event.series] || "bg-gray-600 text-white"
                    }`}
                  >
                    {event.series}
                  </span>
                  <span className="text-sm text-gray-500">{event.duration}</span>
                </div>
                <h3 className="mt-2 font-heading text-xl font-bold text-white">
                  {event.venue}
                </h3>
                <p className="text-sm text-gray-400">{event.location}</p>
              </div>
              <div className="text-right">
                <p className="font-heading text-lg font-semibold text-white">
                  {formatDateShort(event.date)}
                  {event.endDate && ` – ${formatDateShort(event.endDate)}`}
                </p>
                <div className="mt-2">
                  <Button href="/shop" variant="outline" className="text-xs px-4 py-2">
                    Book Seat
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
