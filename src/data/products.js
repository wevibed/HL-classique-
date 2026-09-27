import { EDITORIAL_IMAGES } from "@/lib/images";

// Product catalogue based on products recently posted by HL Classique.
// Prices were not provided in the source material, so products show "Price on request".
const W = EDITORIAL_IMAGES.wornByYou;

export const PRODUCTS = [
  {
    id: "hl-mom-jeans",
    name: "Mom Jeans",
    slug: "mom-jeans",
    price: null,
    sale_price: null,
    category: "Jeans",
    occasions: ["Everyday"],
    description: "Mom jeans available in UK sizes 18, 20 and 22.",
    sizes: ["UK 18", "UK 20", "UK 22"],
    colours: [],
    images: [W[0], W[1]],
    availability: "Available",
    featured: true,
    new_arrival: true,
  },
  {
    id: "hl-dress",
    name: "Dress",
    slug: "dress-instore",
    price: null,
    sale_price: null,
    category: "Dresses",
    occasions: ["Everyday", "Party Wear"],
    description: "Dress available in store. Size 2XL.",
    sizes: ["2XL"],
    colours: [],
    images: [W[2], W[3]],
    availability: "Available",
    featured: true,
    new_arrival: true,
  },
  {
    id: "hl-linen-set",
    name: "2pc Linen Set",
    slug: "2pc-linen-set",
    price: null,
    sale_price: null,
    category: "Sets",
    occasions: ["Everyday"],
    description: "Two-piece linen set. Sizes 2XL and 3XL have recently been posted.",
    sizes: ["2XL", "3XL"],
    colours: [],
    images: [W[4], W[5]],
    availability: "Available",
    featured: true,
    new_arrival: true,
  },
  {
    id: "hl-adidas-set",
    name: "Adidas Set",
    slug: "adidas-set",
    price: null,
    sale_price: null,
    category: "Sets",
    occasions: ["Everyday"],
    description: "Adidas set available in store.",
    sizes: [],
    colours: [],
    images: [W[1], W[4]],
    availability: "Available",
    featured: false,
    new_arrival: true,
  },
  {
    id: "hl-adidas-jumpsuit",
    name: "Adidas Jumpsuit",
    slug: "adidas-jumpsuit",
    price: null,
    sale_price: null,
    category: "Jumpsuits",
    occasions: ["Everyday"],
    description: "Adidas jumpsuit available.",
    sizes: [],
    colours: [],
    images: [W[3], W[0]],
    availability: "Available",
    featured: false,
    new_arrival: true,
  },
  {
    id: "hl-designer-dress",
    name: "Designer Dress",
    slug: "designer-dress",
    price: null,
    sale_price: null,
    category: "Dresses",
    occasions: ["Party Wear"],
    description: "Designer dress available in Large.",
    sizes: ["L"],
    colours: [],
    images: [W[5], W[2]],
    availability: "Available",
    featured: true,
    new_arrival: false,
  },
];

export const Product = {
  async list(_sort, limit) {
    let items = PRODUCTS;
    if (limit) items = items.slice(0, limit);
    return items;
  },
  async filter(query = {}, _sort, limit) {
    let items = PRODUCTS.filter((p) =>
      Object.entries(query).every(([key, value]) => p[key] === value)
    );
    if (limit) items = items.slice(0, limit);
    return items;
  },
};
