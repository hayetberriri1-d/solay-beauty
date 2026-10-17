import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
    <div className="text-center space-y-4">
      <h1 className="text-6xl font-playfair font-bold text-rose-gold">404</h1>
      <p className="text-xl text-charcoal/70 font-inter">Oups ! Page introuvable</p>
      <Link to="/" className="text-rose-gold hover:underline font-inter">
        Retour à l'accueil
      </Link>
    </div>
  </div>
);

export default NotFound;
