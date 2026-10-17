# Solay Beauty

Site vitrine de cosmétiques (React + TypeScript + Vite + Tailwind CSS).

## Lancer en local (Windows / Mac / Linux)

Prérequis : Node.js 18+ (https://nodejs.org).
Ouvrir un terminal DANS le dossier qui contient `package.json`, puis :

    npm install
    npm run dev        -> http://localhost:8080

Autres commandes : `npm run build`, `npm run preview`, `npm run lint`.

## Héberger sur Vercel

Option A : depuis GitHub (recommandé)
1. Mettre le projet sur GitHub (le dossier qui contient package.json à la racine du dépôt).
2. Sur https://vercel.com : Add New > Project > importer le dépôt.
3. Vercel détecte Vite automatiquement (Build: `npm run build`, Output: `dist`). Cliquer sur Deploy.

Option B : en ligne de commande

    npm install -g vercel
    vercel login
    vercel --prod

Le fichier `vercel.json` gère déjà la redirection des routes vers `index.html`.
"# solay-beauty" 
