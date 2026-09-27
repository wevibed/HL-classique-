// Boutique configuration — single source of truth for store details.
// Swap these values to rebrand the storefront for another boutique client.

export const BOUTIQUE = {
  name: "HL Classique",
  tagline: "Everything CLASSIQUE",
  whatsapp: "263719593876",
  whatsappDisplay: "+263 71 959 3876",
  phone: "+263 71 959 3876",
  altPhone: "",
  email: "info@hlclassique.com",
  instagram: "",
  instagramHandle: "",
  facebook: "https://www.facebook.com/hlclassique",
  tiktok: "",
  tiktokHandle: "",
  locations: [
    {
      name: "Fife Avenue Mall",
      line1: "135 Baines Ave",
      line2: "Fife Avenue Mall",
      line3: "Harare, Zimbabwe",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fife+Avenue+Mall+135+Baines+Ave+Harare",
    },
  ],
  hours: [
    { day: "Opening hours", time: "Contact us for current hours" },
  ],
};

export const CATEGORIES = [
  "All",
  "Dresses",
  "Sets",
  "Jeans",
  "Jumpsuits",
  "Shoes",
  "Swimwear",
  "Jewellery",
  "Lingerie",
  "Party Wear",
];

export const OCCASIONS = [
  "Everyday",
  "Party Wear",
  "Swimwear",
  "Lingerie",
];

// Build a pre-filled WhatsApp enquiry link for a product.
export function whatsappEnquiry(product, size = null) {
  const base = `https://wa.me/${BOUTIQUE.whatsapp}?text=`;
  const name = product?.name ?? "this piece";
  const sizePart = size ? ` size ${size}` : "";
  const msg = `Hi HL Classique, I'm interested in the ${name}${sizePart}. Is it still available?`;
  return base + encodeURIComponent(msg);
}

export function formatPrice(price) {
  if (price == null) return "Price on request";
  return `$${Number(price).toFixed(0)}`;
}

export function availabilityTone(status) {
  switch (status) {
    case "Available":
      return { dot: "bg-[#5E6B5E]", text: "text-[#5E6B5E]", label: "Available" };
    case "Low Stock":
      return { dot: "bg-[#BC5A45]", text: "text-[#BC5A45]", label: "Low Stock" };
    case "Sold Out":
      return { dot: "bg-foreground/40", text: "text-foreground/40", label: "Sold Out" };
    default:
      return { dot: "bg-[#5E6B5E]", text: "text-[#5E6B5E]", label: "Available" };
  }
}
