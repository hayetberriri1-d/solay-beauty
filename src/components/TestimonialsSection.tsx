import { Star, Quote } from "lucide-react";

const testimonials = [
  { id: 1, name: "Sofia Martinez", location: "Lyon, France", rating: 5, text: "Je suis obsédée par leurs rouges à lèvres ! Les couleurs sont si riches et la formule tient toute la journée sans assécher mes lèvres.", product: "Rouge Velours Rosé", initials: "SM", bgColor: "bg-rose-gold" },
  { id: 2, name: "Aria Chen", location: "Nice, France", rating: 5, text: "Le fond de teint est révolutionnaire. Couvrance parfaite qui semble légère et naturelle. Je le recommande vivement !", product: "Fond de Teint Lumineux", initials: "AC", bgColor: "bg-rose-gold" },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">Ce que Disent nos Clientes</h2>
        <p className="text-lg text-charcoal/70 font-inter max-w-2xl mx-auto">
          Rejoignez des milliers de clientes satisfaites qui ont transformé leur routine beauté avec Solay Beauty.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="group relative bg-cream rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="absolute top-6 right-6 opacity-20">
              <Quote size={32} className="text-rose-gold" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-rose-gold text-rose-gold" />
                ))}
              </div>
              <blockquote className="text-charcoal/80 font-inter leading-relaxed italic">"{t.text}"</blockquote>
              <div className="text-sm text-rose-gold font-inter font-medium">✨ {t.product}</div>
              <div className="flex items-center gap-4 pt-4 border-t border-rose-powder/30">
                <div className={`w-12 h-12 ${t.bgColor} rounded-full flex items-center justify-center`}>
                  <span className="text-cream font-inter font-semibold text-sm">{t.initials}</span>
                </div>
                <div>
                  <div className="font-inter font-semibold text-charcoal">{t.name}</div>
                  <div className="text-sm text-charcoal/60 font-inter">{t.location}</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl" />
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-charcoal/60 font-inter">
          <div className="flex items-center gap-2">
            <Star size={16} className="fill-rose-gold text-rose-gold" />
            <span>4.9/5 Note Moyenne</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-charcoal/30 rounded-full" />
          <div className="flex items-center gap-2">
            <span>💕</span>
            <span>10 000+ Clientes Heureuses</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-charcoal/30 rounded-full" />
          <div className="flex items-center gap-2">
            <span>✨</span>
            <span>98% Recommandent</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
