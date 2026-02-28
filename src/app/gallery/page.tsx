import SectionHeading from "@/components/SectionHeading";

const placeholderImages = [
  { id: 1, alt: "Race car on track", aspect: "aspect-video" },
  { id: 2, alt: "Pit stop action", aspect: "aspect-square" },
  { id: 3, alt: "Driver in cockpit", aspect: "aspect-square" },
  { id: 4, alt: "Team photo", aspect: "aspect-video" },
  { id: 5, alt: "Night racing", aspect: "aspect-video" },
  { id: 6, alt: "Podium celebration", aspect: "aspect-square" },
  { id: 7, alt: "Car detail shot", aspect: "aspect-square" },
  { id: 8, alt: "Track aerial view", aspect: "aspect-video" },
  { id: 9, alt: "Pre-race grid", aspect: "aspect-video" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="pb-6 pt-12 text-center">
        <SectionHeading
          title="Gallery"
          subtitle="Action from the track — placeholder images shown below"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {placeholderImages.map((img) => (
            <div
              key={img.id}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-white/10"
            >
              <div
                className={`${img.aspect} w-full bg-gray-800 flex items-center justify-center`}
              >
                <span className="text-sm text-gray-600">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-gray-500">
          Client photos and videos will replace these placeholders.
        </p>
      </section>
    </>
  );
}
