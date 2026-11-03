import type { StaticImageData } from "next/image";

import couplings from "@/assets/images/products/couplings.jpg";
import industrialValves from "@/assets/images/products/industrial-valves.jpg";
import hydroTestStoppers from "@/assets/images/products/hydro-test-stoppers.jpg";
import tubeBendingDies from "@/assets/images/products/tube-bending-dies.jpg";
import manifolds from "@/assets/images/products/manifolds.jpg";
import hydraulicPressComponents from "@/assets/images/products/hydraulic-press-components.jpg";
import hydraulicAssemblies from "@/assets/images/products/hydraulic-assemblies.jpg";
import customPrecisionComponents from "@/assets/images/products/custom-precision-components.jpg";
import thermowell from "@/assets/images/products/thermowell.jpg";

import isgec from "@/assets/images/clients/isgec.jpg";
import lloyds from "@/assets/images/clients/lloyds.jpg";
import thyssenkrupp from "@/assets/images/clients/thyssenkrupp.jpg";
import cheemaBoilers from "@/assets/images/clients/cheema-boilers.jpg";
import bhel from "@/assets/images/clients/bhel.jpg";
import larsenToubro from "@/assets/images/clients/larsen-toubro.jpg";
import uttamGroup from "@/assets/images/clients/uttam-group.jpg";

/* ----------------------------- Company info ----------------------------- */

export const company = {
  name: "SuperTech Engineering Corporation",
  shortName: "SUPERTECH",
  tagline: "Precision Engineering. Trusted Performance.",
  since: 1975,
  phone: "+91-90500-00074",
  phoneHref: "tel:+919050000074",
  email: "supertech074@gmail.com",
  website: "www.supertechengg.in",
  address:
    "Plot B6/1802, Vishnu Nagar, Jagadhri Workshop, Yamuna Nagar, Haryana - 135001",
  whatsappNumber: "919050000074",
  whatsappDefaultText:
    "Hello SuperTech, I would like to discuss an enquiry.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Team" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

/* -------------------------------- Products ------------------------------- */

export type Product = {
  name: string;
  description: string;
  image: StaticImageData;
};

export const products: Product[] = [
  {
    name: "Couplings",
    description:
      "Precision-engineered couplings manufactured to customer specifications for suitable industrial connection and power-transmission applications.",
    image: couplings,
  },
  {
    name: "Industrial Valves",
    description:
      "Engineered valve components manufactured to meet specified dimensional, material, and application requirements.",
    image: industrialValves,
  },
  {
    name: "Hydro Test Stoppers",
    description:
      "Specialised hydrostatic testing stoppers designed and manufactured to the required drawings, dimensions, and application specifications.",
    image: hydroTestStoppers,
  },
  {
    name: "Tube Bending Dies",
    description:
      "Precision tube bending dies developed for accurate forming operations, repeatable results, and application-specific tooling requirements.",
    image: tubeBendingDies,
  },
  {
    name: "Manifolds",
    description:
      "Precision-manufactured manifolds designed to suit specified fluid-flow arrangements, port configurations, and hydraulic system requirements.",
    image: manifolds,
  },
  {
    name: "Hydraulic Press Components",
    description:
      "High-precision components for hydraulic presses, manufactured to customer drawings and technical specifications.",
    image: hydraulicPressComponents,
  },
  {
    name: "Hydraulic Assemblies",
    description:
      "Hydraulic assemblies built to customer drawings and system requirements, ready to fit your equipment.",
    image: hydraulicAssemblies,
  },
  {
    name: "Custom Precision Components",
    description:
      "Specialised components manufactured against customer-provided drawings, samples, dimensional specifications, and application requirements.",
    image: customPrecisionComponents,
  },
  {
    name: "Thermowell",
    description:
      "Precision-machined thermowells manufactured to customer drawings, dimensions, and material requirements.",
    image: thermowell,
  },
];

/* ------------------------------ Home content ----------------------------- */

export const featureCards = [
  {
    title: "Built to Your Drawings",
    text: "From customer drawings, samples and specifications to finished precision components.",
    border: "border-t-brand",
  },
  {
    title: "50+ Years of Trusted Experience",
    text: "Practical engineering knowledge combined with a commitment to precision and consistency.",
    border: "border-t-steel",
  },
  {
    title: "Quality Verification",
    text: "Finished components can be checked against agreed inspection criteria and dimensional requirements.",
    border: "border-t-accent",
  },
];

export const aboutChecklist = [
  "50+ years of industrial expertise",
  "Custom components made to your drawings",
  "Precision-focused manufacturing",
  "Diverse product expertise across seven product families",
  "Customer-centric, dependable relationships",
];

export const processSteps = [
  {
    title: "Share Your Drawing",
    text: "Send customer drawings, specifications, dimensions and application requirements.",
    icon: "drawing",
  },
  {
    title: "Engineering Review",
    text: "We assess the requirements to determine the appropriate manufacturing approach and verify against agreed criteria.",
    icon: "review",
  },
  {
    title: "Manufacturing & Delivery",
    text: "Components are made to the agreed specifications and dispatched per the agreed delivery terms.",
    icon: "delivery",
  },
] as const;

export const services = [
  {
    title: "Manufacturing to Customer Drawings",
    text: "We manufacture components exactly as per your engineering drawings, samples and dimensional details.",
    image: customPrecisionComponents,
  },
  {
    title: "Custom Machining",
    text: "Custom machining of precision engineering parts to your specified dimensions and materials.",
    image: tubeBendingDies,
  },
  {
    title: "Hydraulic Press Components",
    text: "Specialised hydraulic press component manufacturing for demanding industrial applications.",
    image: hydraulicPressComponents,
  },
  {
    title: "Heavy Pressure Components",
    text: "Production of heavy pressure components made to agreed technical specifications.",
    image: hydroTestStoppers,
  },
  {
    title: "Custom Tooling & Dies",
    text: "Custom tooling, dies and industrial components for application-specific requirements.",
    image: tubeBendingDies,
  },
  {
    title: "Application-Specific Support",
    text: "Support for specialised engineering requirements, from fluid-flow arrangements to port configurations.",
    image: manifolds,
  },
];

export const industries = [
  "Hydraulic equipment manufacturing",
  "Industrial machinery manufacturing",
  "Pressure testing equipment",
  "Tube processing and forming",
  "Fluid power systems",
  "Special-purpose machinery",
  "Industrial tooling and equipment",
];

export const clients: { name: string; logo: StaticImageData }[] = [
  { name: "ISGEC", logo: isgec },
  { name: "Lloyds Engineering Works", logo: lloyds },
  { name: "ThyssenKrupp", logo: thyssenkrupp },
  { name: "Cheema Boilers", logo: cheemaBoilers },
  { name: "BHEL", logo: bhel },
  { name: "Larsen & Toubro", logo: larsenToubro },
  { name: "Uttam Group", logo: uttamGroup },
];

/* ------------------------------ About content ---------------------------- */

export const whyChooseUs = [
  {
    title: "50+ Years of Expertise",
    text: "Over five decades in precision engineering and specialised industrial component manufacturing.",
  },
  {
    title: "Precision-Focused",
    text: "Attention to dimensional accuracy, technical specifications, and component requirements.",
  },
  {
    title: "Custom Solutions",
    text: "Components developed according to customer drawings and application-specific needs.",
  },
  {
    title: "Diverse Range",
    text: "Couplings, valves, hydro test stoppers, tube bending dies, manifolds, hydraulic press components and assemblies.",
  },
  {
    title: "Customer-Centric",
    text: "A focus on understanding technical requirements and building dependable relationships.",
  },
  {
    title: "Industrial Know-How",
    text: "Practical understanding of the demands of specialised engineering components.",
  },
];

/* -------------------------------- Blog posts ----------------------------- */

export const blogPosts = [
  {
    tag: "Product update",
    title: "Hydraulic Assemblies added to our range",
    text: "We now manufacture hydraulic assemblies to customer drawings and system requirements, alongside our hydraulic press components and manifolds.",
  },
  {
    tag: "Custom engineering",
    title: "Send your drawing, get a quotation",
    text: "Share your technical drawing with quantity, material and application details, and our team will assess it and prepare a suitable quotation.",
  },
  {
    tag: "Company",
    title: "Our new website is live",
    text: "Browse our product range and gallery, learn about our engineering process and contact our Jagadhri workshop directly.",
  },
];
