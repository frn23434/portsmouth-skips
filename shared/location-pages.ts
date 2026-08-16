export const SITE_BASE_URL = "https://portsmouthskips.co.uk";

export interface LocationPageConfig {
  areaName: string;
  route: string;
  lastModified: string;
  nearbyAreas: string[];
  heroSubtitle: string;
  heroDescription: string;
  whyDescription: string;
}

export const locationPages: LocationPageConfig[] = [
  {
    areaName: "Southsea",
    route: "/skip-hire-in-southsea",
    lastModified: "2026-08-16",
    nearbyAreas: ["Old Portsmouth", "Fratton", "Eastney", "Milton", "Somers Town", "Portsmouth City Centre", "Gunwharf Quays"],
    heroSubtitle: "Fast, reliable skip hire services in Southsea with same day delivery and responsible waste disposal.",
    heroDescription: "Professional waste removal for domestic and commercial projects in Southsea and nearby Portsmouth areas.",
    whyDescription: "We are your trusted local skip hire provider serving Southsea with professional, straightforward waste disposal and dependable collection times.",
  },
  {
    areaName: "Cosham",
    route: "/skip-hire-in-cosham",
    lastModified: "2026-08-16",
    nearbyAreas: ["Hilsea", "Drayton", "Farlington", "Wymering", "North Harbour", "Port Solent", "Paulsgrove"],
    heroSubtitle: "Reliable skip hire in Cosham for home clearances, renovations, and trade waste with fast delivery options.",
    heroDescription: "Professional waste removal for domestic and commercial projects across Cosham and the surrounding Portsmouth area.",
    whyDescription: "We help customers in Cosham keep projects moving with prompt delivery, flexible hire periods, and responsible waste handling.",
  },
  {
    areaName: "Fratton",
    route: "/skip-hire-in-fratton",
    lastModified: "2026-08-16",
    nearbyAreas: ["Baffins", "Milton", "Somers Town", "Portsmouth City Centre", "Southsea", "Eastney", "North End"],
    heroSubtitle: "Affordable skip hire in Fratton with dependable collection and the right sizes for busy residential and trade jobs.",
    heroDescription: "Professional waste removal for property upgrades, clear-outs, and building work in Fratton and nearby Portsmouth districts.",
    whyDescription: "Customers in Fratton choose us for straightforward booking, reliable turnaround, and skip sizes that suit both domestic and commercial work.",
  },
  {
    areaName: "Hilsea",
    route: "/skip-hire-in-hilsea",
    lastModified: "2026-08-16",
    nearbyAreas: ["Cosham", "North End", "Copnor", "Drayton", "Farlington", "Portcreek", "Paulsgrove"],
    heroSubtitle: "Skip hire in Hilsea with flexible hire periods, same day availability, and compliant waste disposal.",
    heroDescription: "Professional waste removal for home projects, garden clearances, and commercial works across Hilsea and nearby Portsmouth areas.",
    whyDescription: "We support customers in Hilsea with quick delivery, clear pricing, and licensed waste handling that keeps jobs simple.",
  },
];
