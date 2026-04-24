export interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  category: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Le Bouclé Royal",
    subtitle: "Salon d'angle en boucle blanc",
    price: "1 850 000 FCFA",
    image: "/assets/products/sofa_white_boucle.jpg",
    category: "Salon",
    badge: "Bestseller"
  },
  {
    id: 2,
    title: "L'Ocre Modulaire",
    subtitle: "Canapé modulable jaune safran",
    price: "1 450 000 FCFA",
    image: "/assets/products/sofa_yellow_modular.jpg",
    category: "Salon",
    badge: "Nouveau"
  },
  {
    id: 3,
    title: "Courbe Anthracite",
    subtitle: "Design organique gris chiné",
    price: "2 200 000 FCFA",
    image: "/assets/products/sofa_gray_curved.jpg",
    category: "Salon"
  },
  {
    id: 4,
    title: "Duo Élégance",
    subtitle: "Ensemble beige & touches terre cuite",
    price: "1 650 000 FCFA",
    image: "/assets/products/sofa_beige_duo.jpg",
    category: "Salon"
  },
  {
    id: 5,
    title: "L'Angle Safran",
    subtitle: "Grand salon d'angle jaune",
    price: "1 950 000 FCFA",
    image: "/assets/products/sofa_yellow_corner.jpg",
    category: "Salon"
  },
  {
    id: 6,
    title: "Lit Sommeil Profond",
    subtitle: "Tête de lit capitonnée sur mesure",
    price: "850 000 FCFA",
    image: "https://images.unsplash.com/photo-1505693419148-403bb09938a1?q=80&w=2070&auto=format&fit=crop",
    category: "Lit"
  },
  {
    id: 7,
    title: "Fauteuil Signature",
    subtitle: "Velours vert forêt & pieds dorés",
    price: "350 000 FCFA",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop",
    category: "Fauteuil"
  },
  {
    id: 8,
    title: "Pouf Ottoman",
    subtitle: "Complément luxe pour salon",
    price: "120 000 FCFA",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop",
    category: "Pouf"
  }
];
