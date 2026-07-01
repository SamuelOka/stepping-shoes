import { useState } from "react";
import { ShoppingBag, Search, ArrowUpRight } from "lucide-react";

type Category = "All" | "Sneakers" | "Hiking" | "Classic";

interface Shoe {
  id: number;
  name: string;
  price: number;
  category: Category;
  image: string;
  tag?: string;
}

const shoes: Shoe[] = [
  {
    id: 1,
    name: "Air Volt Runner",
    price: 189,
    category: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=700&fit=crop&auto=format",
    tag: "New",
  },
  {
    id: 2,
    name: "Desert Trail Hiker",
    price: 215,
    category: "Hiking",
    image:
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&h=700&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Boulder Grip Pro",
    price: 179,
    category: "Hiking",
    image:
      "https://images.unsplash.com/photo-1603808033176-9d134e6f2c74?w=600&h=700&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "Rocky Path Elite",
    price: 199,
    category: "Hiking",
    image:
      "https://images.unsplash.com/photo-1603808033587-935942847de4?w=600&h=700&fit=crop&auto=format",
    tag: "Sale",
  },
  {
    id: 5,
    name: "Classic Court B&W",
    price: 145,
    category: "Classic",
    image:
      "https://images.unsplash.com/photo-1631087606988-a6be38fccaf6?w=600&h=700&fit=crop&auto=format",
  },
  {
    id: 6,
    name: "Pure Form Low",
    price: 165,
    category: "Classic",
    image:
      "https://images.unsplash.com/photo-1559050993-d4e4fbf11769?w=600&h=700&fit=crop&auto=format",
  },
  {
    id: 7,
    name: "Summit Force",
    price: 235,
    category: "Hiking",
    image:
      "https://images.unsplash.com/photo-1603808033596-5d1fa1629eae?w=600&h=700&fit=crop&auto=format",
    tag: "New",
  },
  {
    id: 8,
    name: "Clean Edge 1.0",
    price: 159,
    category: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1727061180303-d91cdeca6f9c?w=600&h=700&fit=crop&auto=format",
  },
  {
    id: 9,
    name: "Minimal Studio",
    price: 189,
    category: "Classic",
    image:
      "https://images.unsplash.com/photo-1634671494478-18ae96453241?w=600&h=700&fit=crop&auto=format",
  },
  {
    id: 10,
    name: "Flyknit Ultralite",
    price: 225,
    category: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1518656306295-aa28b28b2504?w=600&h=700&fit=crop&auto=format",
    tag: "Sold Out",
  },
  {
    id: 11,
    name: "Garden Court V2",
    price: 175,
    category: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1632993819240-7739e7b6959a?w=600&h=700&fit=crop&auto=format",
  },
  {
    id: 12,
    name: "Urban Drift Low",
    price: 149,
    category: "Classic",
    image:
      "https://images.unsplash.com/photo-1523191665038-d75548b1a52a?w=600&h=700&fit=crop&auto=format",
    tag: "Sale",
  },
];

const categories: Category[] = ["All", "Sneakers", "Hiking", "Classic"];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? shoes
      : shoes.filter((s) => s.category === activeCategory);

  function HandleChat(id: number) {
    const product = shoes.find((item) => item.id === id);
    const number = "2349027036495";
    let message = `ProductName : ${product?.name}`;
    message += `Price:  ${product?.price} Naria`;
    message += `${product?.image}`;
    const url = `https://wa.me/${number}?text=${message}`;
    window.open(url, "_blank");
  }
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      {/* Header */}

      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
          <span
            className="text-3xl font-black tracking-tighter text-foreground uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            STEPPINGS
          </span>

          <nav className="hidden md:flex items-center gap-8">
            {["Men", "Women", "Kids", "Sale"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Search size={20} />
            </button>
            <button className="relative text-muted-foreground hover:text-foreground transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              2026 Collection
            </p>
            <h1
              className="text-7xl md:text-9xl font-black uppercase leading-none text-foreground"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              Step
              <br />
              Forward.
            </h1>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground leading-relaxed md:pb-3">
            Curated footwear for every terrain and occasion. From the pavement
            to the peak — we&apos;ve got your next step covered.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-border" />
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-semibold uppercase tracking-wider rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">
            {filtered.length} styles
          </span>
        </div>
      </section>

      {/* Product Grid */}
      <main className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((shoe) => (
            <div
              key={shoe.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(shoe.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image container */}
              <div className="relative overflow-hidden rounded-lg bg-card aspect-[3/4] mb-4">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Tag */}
                {shoe.tag && (
                  <span
                    className={`absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded ${
                      shoe.tag === "New"
                        ? "bg-primary text-primary-foreground"
                        : shoe.tag === "Sale"
                          ? "bg-red-500 text-white"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {shoe.tag}
                  </span>
                )}

                {/* Quick action overlay */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
                    hoveredId === shoe.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  <button
                    onClick={() => HandleChat(shoe.id)}
                    className="w-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest py-2.5 rounded flex items-center justify-center gap-1.5 hover:bg-primary/90 transition-colors"
                  >
                    Add to Bag
                    <ShoppingBag size={12} />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                    {shoe.category}
                  </p>
                  <h3
                    className="text-base font-semibold text-foreground leading-tight truncate"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {shoe.name}
                  </h3>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="text-base font-bold text-foreground">
                    ${shoe.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="text-xl font-black uppercase tracking-tighter text-foreground"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            STEPPINGS
          </span>
          <p className="text-xs text-muted-foreground">
            © 2026 Steppings. All rights reserved.
          </p>
          <a
            href="#"
            className="flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-widest hover:gap-2.5 transition-all"
          >
            View all styles <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
}
