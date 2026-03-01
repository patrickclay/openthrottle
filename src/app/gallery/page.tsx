import SectionHeading from "@/components/SectionHeading";

const galleryImages = [
  { src: "/photos/CV7EA4TX3VJYWYQ5L6RALE3K.webp", alt: "Green BMW leading the pack at dusk" },
  { src: "/photos/63J4WQYZTJIWHTM3QTRVF6X5.webp", alt: "Pit stop — crew working the green BMW" },
  { src: "/photos/25G4BC5O6MIXUTBJK4W7KOA6.webp", alt: "Stars and stripes BMW on track at COTA" },
  { src: "/photos/GATJDSVKCUMZT2TU6TZZUXIS.webp", alt: "Green BMW M3 rear view on track" },
  { src: "/photos/DV6HQVQIU5FTEJBPWCINDSZH.webp", alt: "Green BMW M3 WRL GTO in the paddock" },
  { src: "/photos/high%20plains%202023_1771708236.webp", alt: "Team celebration at High Plains Raceway" },
  { src: "/photos/IM3GGJAHCWAZ333L5HF4FETF.webp", alt: "Green BMW leading at Road Atlanta" },
  { src: "/photos/JI7O2FFBZWI2SXNMUEATEO2I.webp", alt: "Green BMW speed blur at Sebring" },
  { src: "/photos/O4IMLLLX6O3XN3YOQXK67D36.webp", alt: "Pack racing at COTA from above" },
  { src: "/photos/PEI2VNB6LYH3GRM7HY6MHCYX.webp", alt: "Green BMW at speed — motion blur" },
  { src: "/photos/T7KZJVVTZ6RBMVB3DHYL4ZIE.webp", alt: "Two green BMWs chasing through turns" },
  { src: "/photos/WYPQUZ5LDNI6MHFTDB333MBJ.webp", alt: "Stars and stripes BMW head-on in pit lane" },
  { src: "/photos/X5CSKLNWIMFWZCJ35MBJSUJF.webp", alt: "Stars and stripes BMW side profile at speed" },
  { src: "/photos/H6YEXMCIXM5VLFL6NI42YBZQ.webp", alt: "Green BMW #59 at Sebring paddock" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="pb-6 pt-12 text-center">
        <SectionHeading
          title="Gallery"
          subtitle="Action from the track"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-white/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
