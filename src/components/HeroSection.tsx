import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cosmetics.jpg";

const stats = [
  { value: "500K+", label: "Clientes Heureuses" },
  { value: "98%", label: "Satisfaction" },
  { value: "Premium", label: "Qualité" },
];

const HeroSection = () => (
  <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-charcoal leading-tight">
              Sublimez votre
              <span className="block text-rose-gold">beauté naturelle</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal/80 font-inter max-w-lg mx-auto lg:mx-0">
              Découvrez des cosmétiques de luxe qui révèlent votre beauté naturelle avec notre collection premium de maquillage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="group">
              Découvrir la Collection
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button variant="beauty-outline" size="lg">
              En Savoir Plus
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start gap-8 pt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-playfair font-bold text-rose-gold">{s.value}</div>
                <div className="text-sm text-charcoal/70 font-inter">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={heroImage}
              alt="Collection de cosmétiques de luxe : rouges à lèvres roses et produits rose gold"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-powder/20 to-transparent" />
          </div>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-rose-gold/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-powder/30 rounded-full blur-2xl animate-pulse" />
        </div>
      </div>
    </div>

    <div className="absolute top-1/4 left-10 w-2 h-2 bg-rose-gold rounded-full opacity-60 animate-pulse" />
    <div className="absolute top-1/3 right-20 w-3 h-3 bg-rose-powder rounded-full opacity-40 animate-pulse" />
    <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-rose-gold rounded-full opacity-80 animate-pulse" />
  </section>
);

export default HeroSection;
