import { Shield, Users, Eye, Zap, Search, Home, UtensilsCrossed, Car } from 'lucide-react';

export const services = [
  {
    title: 'Aides Ménagères',
    description: 'Du personnel sérieux et expérimenté pour l\'entretien de votre foyer.',
    icon: Home,
    slug: 'aides-menageres',
    image: '/images/781525823_1471975301621646_3581372018167280653_n.jpg',
  },
  {
    title: 'Nounous & Garde d\'enfants',
    description: 'Des nounous qualifiées pour veiller sur vos enfants en toute confiance.',
    icon: Users,
    slug: 'nounous',
    image: '/images/783948699_1470115358474307_924674279728262957_n.jpg',
  },
  {
    title: 'Cuisinières',
    description: 'Des professionnelles de la cuisine pour vos repas quotidiens ou événements.',
    icon: UtensilsCrossed,
    slug: 'cuisinieres',
    image: '/images/784428535_1472848434867666_4095911101956036479_n.jpg',
  },
  {
    title: 'Chauffeurs & Gardiens',
    description: 'Sécurité et mobilité assurées par des chauffeurs et gardiens rigoureux.',
    icon: Car,
    slug: 'chauffeurs-gardiens',
    image: '/images/786266528_1475360754616434_4577274913970703757_n.jpg',
  },
];

export const detailedServices = [
  {
    title: 'Aides Ménagères',
    icon: Home,
    description: 'Un service professionnel d\'entretien ménager adapté à vos besoins quotidiens. Nos aides ménagères sont rigoureusement sélectionnées pour garantir la propreté et l\'ordre de votre foyer.',
    longDescription: `Notre service d'aides ménagères est conçu pour vous offrir un cadre de vie impeccable. Chaque professionnel est sélectionné après un processus de recrutement strict incluant vérification des antécédents, entretien personnel et formation pratique.

Nous adaptons nos services à votre emploi du temps : ménage régulier, nettoyage en profondeur, repassage, organisation d'espace. Notre objectif est de vous libérer du temps tout en vous garantissant un service de qualité supérieure.`,
    benefits: [
      'Personnel vérifié et formé',
      'Horaires flexibles et adaptés',
      'Produits d\'entretien inclus',
      'Suivi de qualité régulier',
      'Remplacement garanti en cas d\'absence',
    ],
    slug: 'aides-menageres',
    image: '/images/781525823_1471975301621646_3581372018167280653_n.jpg',
  },
  {
    title: 'Nounous & Garde d\'enfants',
    icon: Users,
    description: 'Des nounous dévouées et qualifiées pour veiller sur vos enfants en toute confiance, dans le confort de votre foyer.',
    longDescription: `La garde d'enfants est un acte de confiance. Chez GBC Bénin, nous prenons cette responsabilité très au sérieux. Nos nounous ne sont pas seulement des gardeuses d'enfants, elles sont des éducatrices attentionnées qui favorisent le développement de votre enfant.

Chaque nounou possède une formation en petite enfance, des références vérifiées et une expérience avérée. Nous organisons des ateliers ludiques, éducatifs et des activités créatives adaptées à l'âge de votre enfant.`,
    benefits: [
      'Formation en petite enfance',
      'Références et antécédents vérifiés',
      'Activités éducatives et ludiques',
      'Flexibilité horaire',
      'Communication quotidienne avec les parents',
    ],
    slug: 'nounous',
    image: '/images/783948699_1470115358474307_924674279728262957_n.jpg',
  },
  {
    title: 'Cuisinières',
    icon: UtensilsCrossed,
    description: 'Des professionnelles de la cuisine pour vos repas quotidiens, événements familiaux ou prestations professionnelles.',
    longDescription: `Nos cuisinières maîtrisent une variété de cuisines : béninoise, ouest-africaine, française et internationale. Que ce soit pour vos repas quotidiens, un dîner de fête ou un événement professionnel, elles sauront satisfaire toutes les palais.

Chaque cuisinière est formée à l'hygiène alimentaire et peut adapter ses prestations à vos régimes alimentaires spécifiques. Nous gérons également les courses et l'organisation culinaire de A à Z.`,
    benefits: [
      'Cuisine béninoise, ouest-africaine et internationale',
      'Hygiène alimentaire certifiée',
      'Adaptation aux régimes spécifiques',
      'Gestion des courses et approvisionnement',
      'Service pour événements et réceptions',
    ],
    slug: 'cuisinieres',
    image: '/images/784428535_1472848434867666_4095911101956036479_n.jpg',
  },
  {
    title: 'Chauffeurs & Gardiens',
    icon: Car,
    description: 'Sécurité et mobilité assurées par des chauffeurs et gardiens rigoureusement sélectionnés.',
    longDescription: `La sécurité de votre famille et de vos biens est primordiale. Nos chauffeurs et gardiens sont recrutés pour leur fiabilité, leur discrétion et leur sens du devoir. Chaque professionnel est formé aux protocoles de sécurité et aux bonnes pratiques de surveillance.

Nos chauffeurs maîtrisent les itinéraires de Cotonou, Abomey-Calavi et toutes les villes du Bénin. Nos gardiens assurent une surveillance efficace de vos propriétés jour et nuit.`,
    benefits: [
      'Vérification des antécédents obligatoire',
      'Formation aux protocoles de sécurité',
      'Service 24h/24 disponible',
      'Discretion et professionnalisme',
      'Couverture nationale',
    ],
    slug: 'chauffeurs-gardiens',
    image: '/images/786266528_1475360754616434_4577274913970703757_n.jpg',
  },
];

export const whyChooseUs = [
  {
    title: 'Expertise',
    description: 'Une connaissance approfondie des réalités du marché béninois et des besoins de nos clients.',
    icon: 'TrendingUp',
  },
  {
    title: 'Proximité',
    description: 'Un accompagnement humain et personnalisé, au plus près de vos besoins.',
    icon: 'Users',
  },
  {
    title: 'Transparence',
    description: 'Une communication claire, honnête et accessible à chaque étape du processus.',
    icon: 'Eye',
  },
  {
    title: 'Excellence',
    description: 'Une exigence constante de qualité dans la sélection de chaque professionnel.',
    icon: 'Zap',
  },
];

export const steps = [
  { step: '01', title: 'Contactez-nous', description: 'Prenez contact via notre site, par téléphone ou WhatsApp.' },
  { step: '02', title: 'Décrivez vos besoins', description: 'Nous discutons de vos attentes et de votre situation.' },
  { step: '03', title: 'Sélection', description: 'Nous identifions le personnel le plus adapté à vos besoins.' },
  { step: '04', title: 'Placement', description: 'Le professionnel est placé et un suivi régulier est assuré.' },
];

export const testimonials = [
  {
    name: 'Adéola M.',
    role: 'Mère de famille',
    company: 'Cotonou',
    content: 'GBC Bénin nous a trouvé une aide ménagère formidable. Elle est ponctuelle, soigneuse et vraiment professionnelle. Je recommande vivement leurs services.',
    rating: 5,
    photo: '/images/781525823_1471975301621646_3581372018167280653_n.jpg',
  },
  {
    name: 'Patrick K.',
    role: 'Entrepreneur',
    company: 'Abomey-Calavi',
    content: 'Le chauffeur que nous avons obtenu via GBC est d\'une grande fiabilité. Le processus de recrutement est transparent et le suivi est excellent.',
    rating: 5,
    photo: '/images/786266528_1475360754616434_4577274913970703757_n.jpg',
  },
  {
    name: 'Sènanou G.',
    role: 'Directrice d\'entreprise',
    company: 'Cotonou',
    content: 'Nous avons recruté notre nounou via GBC Bénin. Les enfants l\'adorent et nous avons enfin l\'esprit tranquillé. Un service de qualité rare au Bénin.',
    rating: 5,
    photo: '/images/783948699_1470115358474307_924674279728262957_n.jpg',
  },
  {
    name: 'Olivier D.',
    role: 'Chef d\'entreprise',
    company: 'Porto-Novo',
    content: 'Un partenaire de confiance. GBC comprend nos besoins et propose toujours des candidats qui correspondent parfaitement à nos attentes.',
    rating: 5,
    photo: '/images/787159823_1474460841373092_3605669980762108495_n.jpg',
  },
];

export const opportunities = [
  {
    title: 'Aide Ménagère Premium',
    category: 'Placement',
    location: 'Cotonou',
    status: 'Ouvert',
    slug: 'aide-menagere-premium',
  },
  {
    title: 'Nounou Qualifiée Bilingue',
    category: 'Recrutement',
    location: 'Abomey-Calavi',
    status: 'Ouvert',
    slug: 'nounou-qualifiee-bilingue',
  },
];
