/**
 * Centralized site content & company information for odinflow.fr.
 *
 * NOTE: Items marked with `TODO` are placeholders that must be filled with the
 * real NodeFlow / OdinFlow company data before going live.
 */

export const company = {
  brand: "Odin",
  product: "OdinFlow",
  domain: "odinflow.fr",
  url: "https://odinflow.fr",
  tagline: "AI Agents for Business",
  // TODO: confirm with NodeFlow legal details (same company that operates nodeflow.fr)
  legalEntity: "TODO: NOM SOCIÉTÉ / ENTITÉ LÉGALE (NodeFlow)",
  legalForm: "TODO: forme juridique (SAS, SARL, …)",
  siren: "TODO: SIREN / SIRET",
  capital: "TODO: capital social",
  address: "TODO: adresse postale complète",
  publisher: "TODO: directeur de la publication",
  contactEmail: "contact@odinflow.fr", // TODO: confirm address
  supportEmail: "support@odinflow.fr", // TODO: confirm address
  phone: "" as string, // TODO: numéro de téléphone si applicable
  appUrl: "https://app.odinflow.fr", // TODO: confirm app URL
  hosting: {
    // Hébergeurs / sous-traitants (RGPD)
    vercel: "Vercel Inc. — hébergement du site vitrine",
    render: "Render — hébergement de l'application",
    supabase: "Supabase — base de données & authentification",
    openai: "OpenAI / fournisseurs de modèles — traitement IA",
  },
} as const;

export const nav = {
  main: [
    { label: "Fonctionnalités", href: "/#fonctionnalites" },
    { label: "Comment ça marche", href: "/#fonctionnement" },
    { label: "Intégrations", href: "/integrations" },
    { label: "Tarifs", href: "/pricing" },
    { label: "FAQ", href: "/#faq" },
  ],
  footer: {
    produit: [
      { label: "Fonctionnalités", href: "/#fonctionnalites" },
      { label: "Intégrations", href: "/integrations" },
      { label: "Tarifs", href: "/pricing" },
      { label: "Cas d'usage", href: "/#cas-usage" },
    ],
    entreprise: [
      { label: "Comment ça marche", href: "/#fonctionnement" },
      { label: "FAQ", href: "/#faq" },
      { label: "Support", href: "/support" },
    ],
    legal: [
      { label: "Confidentialité", href: "/privacy" },
      { label: "Conditions d'utilisation", href: "/terms" },
      { label: "Support", href: "/support" },
    ],
  },
} as const;

export const hero = {
  eyebrow: "Agent IA pour entreprises",
  title: ["Votre agent IA,", "branché sur"],
  titleHighlight: "vos propres outils.",
  subtitle:
    "Odin est l'agent IA personnalisé de votre entreprise. Configurez-le, connectez vos outils, importez vos documents — il répond à vos clients et à vos équipes, sur tous vos canaux, 24h/24.",
  primaryCta: { label: "Créer mon agent", href: "https://app.odinflow.fr" },
  secondaryCta: { label: "Réserver une démo", href: "/support" },
  chatPrompt: "Relance les clients dont la facture est en retard et planifie un point lundi.",
  chatReply:
    "C'est fait. J'ai relancé 4 clients par e-mail depuis votre boîte connectée et créé un événement « Point facturation » lundi 9h.",
} as const;

export const trustBadges = [
  "Données chiffrées",
  "Hébergement européen",
  "Conforme RGPD",
  "OAuth sécurisé",
  "Sans engagement",
] as const;

export const stats = [
  { value: "24/7", label: "Disponible sans interruption" },
  { value: "3", label: "Canaux : Web, WhatsApp, Telegram" },
  { value: "10+", label: "Connecteurs natifs (et plus à venir)" },
  { value: "0", label: "Réglage technique requis" },
] as const;

export const problemSolution = {
  eyebrow: "Le constat",
  title: "Vos outils ne se parlent pas. Vos équipes perdent du temps.",
  problems: [
    {
      title: "Des données éparpillées",
      desc: "Vos infos vivent dans Airtable, Drive, vos boîtes mail, vos tableurs. Personne n'a une vue d'ensemble.",
    },
    {
      title: "Des tâches répétitives",
      desc: "Relances, réponses aux questions récurrentes, recherches dans les documents : autant d'heures perdues chaque semaine.",
    },
    {
      title: "Une IA générique inutile",
      desc: "Les assistants génériques ne connaissent ni votre entreprise, ni vos clients, ni vos outils. Résultat : des réponses à côté.",
    },
  ],
  solutionTitle: "Odin connaît votre entreprise — et agit pour elle.",
  solutionDesc:
    "Un agent entraîné sur vos documents, connecté à vos comptes, qui répond avec vos informations et exécute des actions concrètes dans vos outils.",
} as const;

export const features = [
  {
    title: "Agent 100 % personnalisé",
    desc: "Nom, personnalité, instructions, ton : vous façonnez un agent qui parle au nom de votre entreprise.",
    icon: "sparkles",
  },
  {
    title: "Mémoire & réponses sourcées",
    desc: "Importez vos documents. Odin s'appuie dessus (RAG) et cite ses sources pour des réponses fiables.",
    icon: "book",
  },
  {
    title: "Connecté à vos outils",
    desc: "Airtable, Google Drive, Gmail, Sheets, Outlook/Excel, plus API REST & webhooks. Chacun via vos propres comptes.",
    icon: "plug",
  },
  {
    title: "Multi-canal natif",
    desc: "Chat sur votre site, WhatsApp et Telegram. Une seule configuration, partout où sont vos interlocuteurs.",
    icon: "chat",
  },
  {
    title: "Le bon modèle, automatiquement",
    desc: "Odin choisit seul le modèle d'IA optimal pour chaque demande, équilibre coût et performance. Aucun réglage.",
    icon: "cpu",
  },
  {
    title: "Sécurité & contrôle",
    desc: "Connexions OAuth, données chiffrées, révocables à tout moment. Vos accès restent vos accès.",
    icon: "shield",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Créez votre compte",
    desc: "Inscription en quelques minutes, sans carte bancaire. Vous démarrez sur l'offre gratuite.",
  },
  {
    step: "02",
    title: "Configurez votre agent",
    desc: "Donnez-lui un nom, une personnalité, des instructions, et importez votre base de connaissances.",
  },
  {
    step: "03",
    title: "Connectez vos outils",
    desc: "Reliez vos comptes (Airtable, Drive, Gmail…) en OAuth. Odin accède uniquement à ce que vous autorisez.",
  },
  {
    step: "04",
    title: "Déployez sur vos canaux",
    desc: "Activez le chat web, WhatsApp ou Telegram. Votre agent est en ligne, prêt à répondre et à agir.",
  },
] as const;

export const integrations = {
  available: [
    { name: "Airtable", desc: "Bases & enregistrements" },
    { name: "Google Drive", desc: "Documents & fichiers" },
    { name: "Gmail", desc: "Lecture & envoi d'e-mails" },
    { name: "Google Sheets", desc: "Tableurs & données" },
    { name: "Outlook", desc: "E-mails Microsoft" },
    { name: "Excel", desc: "Classeurs Microsoft" },
    { name: "API REST", desc: "Vos endpoints internes" },
    { name: "Webhooks", desc: "Événements en temps réel" },
  ],
  comingSoon: ["Slack", "Notion", "HubSpot", "Stripe", "Salesforce", "Zendesk"],
} as const;

export const useCases = [
  {
    title: "Support client",
    desc: "Répond instantanément aux questions sur vos produits, commandes et documents — sur le web et WhatsApp.",
    tag: "Service client",
  },
  {
    title: "Assistant interne",
    desc: "Vos équipes interrogent vos process, contrats et bases en langage naturel, sans chercher partout.",
    tag: "Productivité",
  },
  {
    title: "Opérations & relances",
    desc: "Lit vos tableaux, envoie les e-mails de relance, met à jour vos enregistrements automatiquement.",
    tag: "Automatisation",
  },
  {
    title: "Avant-vente & qualification",
    desc: "Qualifie les demandes entrantes, oriente les prospects et collecte les bonnes informations.",
    tag: "Commercial",
  },
] as const;

export const pricing = {
  eyebrow: "Tarifs transparents",
  title: "Un agent à la hauteur de votre entreprise",
  subtitle:
    "Commencez gratuitement, passez à l'échelle quand vous êtes prêt. Sans engagement, résiliable à tout moment.",
  note: "Prix indicatifs hors taxes. TODO : confirmer les paliers et montants définitifs avec NodeFlow.",
  plans: [
    {
      name: "Free",
      price: "0 €",
      period: "/ mois",
      description: "Pour découvrir Odin et lancer un premier agent.",
      featured: false,
      cta: { label: "Commencer gratuitement", href: "https://app.odinflow.fr" },
      features: [
        "1 agent IA personnalisé",
        "Chat web",
        "Base de connaissances (limitée)",
        "1 connecteur",
        "Sélection automatique du modèle",
      ],
    },
    {
      name: "Pro",
      price: "TODO €", // TODO: prix Pro
      period: "/ mois",
      description: "Pour les entreprises qui veulent automatiser au quotidien.",
      featured: true,
      cta: { label: "Essayer Pro", href: "https://app.odinflow.fr" },
      features: [
        "Agents illimités",
        "Web, WhatsApp & Telegram",
        "Base de connaissances étendue",
        "Tous les connecteurs natifs",
        "API REST & webhooks",
        "Réponses sourcées (RAG)",
        "Support prioritaire",
      ],
    },
    {
      name: "Business",
      price: "Sur devis",
      period: "",
      description: "Pour les besoins avancés, volumes élevés et accompagnement.",
      featured: false,
      cta: { label: "Nous contacter", href: "/support" },
      features: [
        "Tout le plan Pro",
        "Volumes & quotas sur mesure",
        "Onboarding dédié",
        "Connecteurs sur demande",
        "SLA & support premium",
      ],
    },
  ],
} as const;

export const testimonials = [
  {
    quote:
      "Odin répond à nos clients sur WhatsApp avec nos vraies infos produit. On a divisé par deux le temps de traitement du support.",
    name: "TODO — Prénom N.",
    role: "TODO — Responsable support",
    initials: "AB",
  },
  {
    quote:
      "Configurer l'agent et le brancher sur notre Airtable a pris une après-midi. Aujourd'hui il gère nos relances tout seul.",
    name: "TODO — Prénom N.",
    role: "TODO — Dirigeant·e de PME",
    initials: "CD",
  },
  {
    quote:
      "Enfin une IA qui connaît notre documentation. Les réponses sont sourcées, on peut vérifier d'où vient l'information.",
    name: "TODO — Prénom N.",
    role: "TODO — Operations Manager",
    initials: "EF",
  },
  {
    quote:
      "Pas un réglage technique à faire. On décrit ce qu'on veut, Odin choisit le bon modèle et exécute. Bluffant.",
    name: "TODO — Prénom N.",
    role: "TODO — Fondateur·rice",
    initials: "GH",
  },
] as const;

export const faq = [
  {
    q: "Qu'est-ce qu'Odin, concrètement ?",
    a: "Odin est un agent IA personnalisé pour votre entreprise. Vous créez un compte, vous le configurez (nom, personnalité, instructions, base de connaissances), vous connectez vos propres outils, et il répond à vos clients et à vos équipes sur plusieurs canaux.",
  },
  {
    q: "Faut-il des compétences techniques ?",
    a: "Non. La configuration se fait sans code. Odin sélectionne automatiquement le modèle d'IA le plus adapté à chaque demande : vous n'avez aucun réglage technique à gérer.",
  },
  {
    q: "Quels outils puis-je connecter ?",
    a: "Aujourd'hui : Airtable, Google Drive, Gmail, Google Sheets, Outlook/Excel, ainsi que vos API REST et webhooks. D'autres connecteurs arrivent (Slack, Notion, HubSpot, Stripe, Salesforce…). Chaque connexion se fait via vos propres comptes, en OAuth.",
  },
  {
    q: "Sur quels canaux mon agent répond-il ?",
    a: "Sur le chat de votre site web, ainsi que sur WhatsApp et Telegram. Une seule configuration suffit pour être présent partout.",
  },
  {
    q: "Comment Odin connaît-il mon entreprise ?",
    a: "Vous importez vos documents dans sa base de connaissances. Odin s'appuie dessus (RAG) pour répondre, et cite ses sources afin que vous puissiez vérifier l'information.",
  },
  {
    q: "Mes données sont-elles en sécurité ?",
    a: "Oui. Les connexions à vos outils passent par OAuth et restent révocables à tout moment. Vos données servent uniquement à fournir le service : elles ne sont ni revendues, ni utilisées à des fins publicitaires. Voir notre politique de confidentialité.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Odin propose une offre gratuite pour démarrer, puis des paliers payants (Pro, Business) selon vos besoins. Voir la page Tarifs.",
  },
] as const;

export const finalCta = {
  title: "Donnez à votre entreprise l'agent IA qu'elle mérite",
  subtitle:
    "Créez votre compte, configurez votre agent et connectez vos outils en quelques minutes. C'est gratuit pour commencer.",
  primaryCta: { label: "Créer mon agent", href: "https://app.odinflow.fr" },
  secondaryCta: { label: "Parler à l'équipe", href: "/support" },
} as const;
