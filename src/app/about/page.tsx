import SectionHeading from "@/components/SectionHeading";
import { team } from "@/data/team";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-5xl font-bold uppercase tracking-wider text-white md:text-6xl">
            About <span className="text-brand-green">Us</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <SectionHeading title="Our Story" />
        <div className="space-y-6 text-lg text-gray-300">
          <p>
            Open Throttle Racing is a Jacksonville, FL-based arrive-and-drive endurance racing team. We make real wheel-to-wheel racing accessible to drivers who want the thrill of competition without the cost and complexity of owning and maintaining a race car.
          </p>
          <p>
            We race BMWs and Porsches in some of the best amateur endurance series in the country — ChampCar, World Racing League (WRL), and Historic Sportscar Racing (HSR). From 8-hour sprints to grueling 24-hour battles at Daytona and COTA, we bring fully prepared cars, experienced crew, and everything you need to compete.
          </p>
          <p>
            Whether you&rsquo;re a seasoned racer looking for seat time or an experienced track day driver ready to make the jump to wheel-to-wheel racing, we&rsquo;ll put you in a race-ready car and give you the support to compete with confidence.
          </p>
        </div>
      </section>

      {/* Cars */}
      <section className="border-t border-white/10 bg-brand-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Our Cars" subtitle="Race-prepared and ready to compete" />
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                name: "2003 BMW 325i",
                number: "#62",
                desc: "Our ChampCar and AER workhorse. Lightweight, reliable, and surprisingly fast for a 95-horsepower machine. Full roll cage, race suspension, and Bridgestone RE-71RS tires.",
              },
              {
                name: "2001 BMW 330Ci",
                number: "",
                desc: "More power for WRL competition. The 330Ci brings extra grunt for the faster GP classes while maintaining the BMW reliability we depend on for endurance racing.",
              },
            ].map((car) => (
              <div
                key={car.name}
                className="overflow-hidden rounded-lg border border-white/10 bg-brand-dark"
              >
                <div className="aspect-video bg-gray-800" />
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {car.name}{" "}
                    {car.number && (
                      <span className="text-brand-green">{car.number}</span>
                    )}
                  </h3>
                  <p className="mt-2 text-gray-400">{car.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading title="The Team" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.id}
              className="rounded-lg border border-white/10 bg-brand-card p-6 text-center"
            >
              <div className="mx-auto h-32 w-32 rounded-full bg-gray-700" />
              <h3 className="mt-4 font-heading text-lg font-bold text-white">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-brand-green">
                {member.role}
              </p>
              {member.laps && (
                <p className="mt-1 text-xs text-gray-500">
                  {member.laps.toLocaleString()} lifetime laps
                </p>
              )}
              <p className="mt-3 text-sm text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
