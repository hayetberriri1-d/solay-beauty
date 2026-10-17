import { Button } from "@/components/ui/button";
import lipstickImg from "@/assets/lipstick-category.jpg";
import foundationImg from "@/assets/foundation-category.jpg";
import skincareImg from "@/assets/skincare-category.jpg";

const categories = [
  { id: 1, name: "Rouge à Lèvres", description: "Couleurs audacieuses, textures luxueuses", image: lipstickImg, gradient: "from-rose-light to-rose-powder" },
  { id: 2, name: "Fond de Teint", description: "Couvrance parfaite, fini naturel", image: foundationImg, gradient: "from-rose-powder to-rose-gold" },
  { id: 3, name: "Fard à joue", description: "Illumine, colore, sublime", image: skincareImg, gradient: "from-rose-gold to-rose-light" },
];

const CategoriesSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">Nos Catégories</h2>
        <p className="text-lg text-charcoal/70 font-inter max-w-2xl mx-auto">
          Découvrez nos collections soigneusement sélectionnées pour sublimer votre beauté naturelle avec des produits de qualité premium.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((c) => (
          <div
            key={c.id}
            className="group relative bg-cream rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
            <div className="relative h-64 overflow-hidden">
              <img
                src={c.image}
                alt={`Collection ${c.name}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="relative p-6 text-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-playfair font-bold text-charcoal">{c.name}</h3>
                <p className="text-charcoal/70 font-inter">{c.description}</p>
              </div>
              <Button variant="beauty" className="group-hover:scale-105 transition-transform duration-300">
                Acheter
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
