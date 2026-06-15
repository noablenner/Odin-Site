# OdinFlow — Site vitrine (odinflow.fr)

Site marketing de **Odin**, l'agent IA personnalisé pour les entreprises.
Marque Odin / OdinFlow, couleurs issues de la charte **NodeFlow** (violet),
structure inspirée de Limova — contenu intégralement réécrit pour Odin.

> ⚠️ Ce dépôt contient **uniquement le site vitrine**. Il ne contient pas
> l'application Odin (backend + app).

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) (design tokens en variables CSS)
- [Framer Motion](https://www.framer.com/motion/) (animations au scroll, micro-interactions)
- Polices via `next/font` : Space Grotesk (display) + Inter (texte)

## Démarrer en local

```bash
npm install
npm run dev      # http://localhost:3000
```

Autres commandes :

```bash
npm run build    # build de production
npm run lint     # ESLint (next/core-web-vitals)
npm run start    # servir le build
```

## Structure des pages

| Route           | Description                                          |
| --------------- | ---------------------------------------------------- |
| `/`             | Accueil (hero, fonctionnalités, étapes, intégrations, cas d'usage, tarifs, témoignages, FAQ, CTA) |
| `/pricing`      | Offres & tarifs (Free / Pro / Business)              |
| `/integrations` | Vitrine des connecteurs (OAuth)                      |
| `/privacy`      | Politique de confidentialité (RGPD)                  |
| `/terms`        | Conditions d'utilisation                             |
| `/support`      | Support / contact                                    |

## Design tokens

Les tokens sont définis dans :

- `src/app/globals.css` — variables CSS (`--background`, `--primary`, etc.) pour
  les thèmes sombre (défaut) et clair.
- `tailwind.config.ts` — mapping Tailwind (couleurs, ombres, dégradés, animations).

Violet de marque : `hsl(281 84% 56%)` (NodeFlow).

## Contenu & configuration

Tout le contenu éditorial et les informations société sont centralisés dans
`src/content/site.ts`. Les champs marqués `TODO` doivent être complétés avec les
informations légales réelles de NodeFlow (entité, adresse, e-mails, prix).

## Assets de marque

- `public/odin-mark-light.png` — « mark » Odin (clair, pour fond sombre)
- `public/odin-mark.png` — mark original (favicon)
- `public/odin-logo-light.png` / `odin-logo-dark.png` — logo complet
- `src/app/icon.png` — favicon (mark Odin)
- `references/` — fichiers de référence fournis (captures NodeFlow / Limova, logos, analyse de contenu)
