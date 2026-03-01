import SectionHeading from "@/components/SectionHeading";
import { products, categoryLabels, type Product } from "@/data/products";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-lg border border-white/10 bg-brand-card transition-colors hover:bg-brand-card-hover">
      <img src={product.image} alt={product.name} className="aspect-video w-full object-cover" />
      <div className="p-6">
        <h3 className="font-heading text-lg font-bold text-white">
          {product.name}
        </h3>
        <p className="mt-1 text-2xl font-bold text-brand-green">
          ${product.price.toLocaleString()}
        </p>
        <p className="mt-2 text-sm text-gray-400">{product.description}</p>
        <ul className="mt-4 space-y-1">
          {product.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2 text-sm text-gray-400">
              <span className="mt-1 text-brand-green">&#10003;</span>
              {detail}
            </li>
          ))}
        </ul>
        <button
          className="mt-6 w-full rounded bg-brand-green px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-dark transition-colors hover:bg-brand-green/90"
          disabled
          title="Coming soon"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const categories = Object.keys(categoryLabels) as Product["category"][];

  return (
    <>
      <section className="pb-6 pt-12 text-center">
        <SectionHeading
          title="Shop"
          subtitle="Race seats, track day rentals, and merchandise"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        {categories.map((category) => {
          const items = products.filter((p) => p.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category} className="mb-16">
              <h3 className="mb-6 font-heading text-2xl font-bold uppercase tracking-wider text-brand-green">
                {categoryLabels[category]}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
