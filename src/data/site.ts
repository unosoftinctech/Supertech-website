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

import boilerManufacturing from "@/assets/images/blogs/boiler-manufacturing.jpg";
import hydroTestTesting from "@/assets/images/blogs/hydro-test-testing.jpg";
import boilerThermowells from "@/assets/images/blogs/boiler-thermowells.jpg";
import precisionMachiningPowerPlants from "@/assets/images/blogs/precision-machining-power-plants.jpg";
import materialQualityControl from "@/assets/images/blogs/material-quality-control.jpg";
import customPrecisionEngineering from "@/assets/images/blogs/custom-precision-engineering.jpg";

import isgec from "@/assets/images/clients/isgec.jpg";
import lloyds from "@/assets/images/clients/lloyds.jpg";
import thyssenkrupp from "@/assets/images/clients/thyssenkrupp.jpg";
import cheemaBoilers from "@/assets/images/clients/cheema-boilers.jpg";
import larsenToubro from "@/assets/images/clients/larsen-toubro.jpg";
import uttamGroup from "@/assets/images/clients/uttam-group.jpg";
import meEnergy from "@/assets/images/clients/me-energy.png";
import rakhoh from "@/assets/images/clients/rakhoh.png";
import sael from "@/assets/images/clients/sael.png";
import thermoFab from "@/assets/images/clients/thermo-fab.png";

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
  { name: "Larsen & Toubro", logo: larsenToubro },
  { name: "Uttam Group", logo: uttamGroup },
  { name: "ME Energy", logo: meEnergy },
  { name: "Rakhoh Industries (Pune)", logo: rakhoh },
  { name: "SAEL Engineering (Ferozepur)", logo: sael },
  { name: "Thermo Fab Engineers", logo: thermoFab },
];

/* ----------------------------- Testimonials ----------------------------- */

export type Testimonial = {
  company: string;
  quote: string;
  logo: StaticImageData;
};

export const testimonials: Testimonial[] = [
  {
    company: "ISGEC",
    quote:
      "SuperTech Engineering Corporation consistently delivers precision-engineered components with excellent machining quality, dimensional accuracy and reliable delivery.",
    logo: isgec,
  },
  {
    company: "LLOYDS ENGINEERING",
    quote:
      "We appreciate SuperTech Engineering Corporation for its fine precision components, superior finishing and commitment to quality standards.",
    logo: lloyds,
  },
  {
    company: "thyssenkrupp",
    quote:
      "SuperTech Engineering Corporation has demonstrated excellent manufacturing capabilities, precision workmanship and dependable component delivery.",
    logo: thyssenkrupp,
  },
  {
    company: "L&T (Larsen & Toubro)",
    quote:
      "We appreciate SuperTech Engineering Corporation for its superior machining precision, excellent component finishing and commitment to timely delivery.",
    logo: larsenToubro,
  },
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

export type BlogPost = {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  text: string;
  readTime: string;
  date: string;
  image: StaticImageData;
  primaryKeywords: string[];
  supportingKeywords: string[];
  bulletsTitle?: string;
  bullets: string[];
  contentParagraphs: string[];
  objective: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "importance-of-precision-engineered-components-in-boiler-manufacturing",
    tag: "Boiler Testing Components",
    title: "The Importance of Precision-Engineered Components in Boiler Manufacturing",
    summary:
      "Boiler manufacturing demands exceptional precision, reliability and quality at every stage. From pressure testing to temperature measurement, every component plays an important role in ensuring safe and efficient boiler operation.",
    text: "Boiler manufacturing demands exceptional precision, reliability and quality at every stage. From pressure testing to temperature measurement, every component plays an important role in ensuring safe and efficient boiler operation.",
    readTime: "4 min read",
    date: "November 2026",
    image: boilerManufacturing,
    primaryKeywords: [
      "Boiler testing components manufacturer",
      "Precision engineering manufacturer",
      "Boiler components manufacturer",
    ],
    supportingKeywords: [
      "Hydro test stoppers",
      "High-pressure fittings",
      "Alloy steel components",
    ],
    contentParagraphs: [
      "Boiler manufacturing demands exceptional precision, reliability and quality at every stage. From pressure testing to temperature measurement, every component plays an important role in ensuring safe and efficient boiler operation.",
      "Precision-engineered components such as hydro test stoppers, thermowells, couplings, manifolds and specialized testing fittings are essential for maintaining accuracy during inspection and testing processes.",
      "At SuperTech Engineering Corporation, we focus on manufacturing precision components designed to meet demanding industrial requirements.",
    ],
    bulletsTitle: "Our manufacturing approach emphasizes:",
    bullets: [
      "Accurate machining and dimensional tolerances.",
      "High-quality raw material selection.",
      "Consistent surface finishing.",
      "Application-specific engineering.",
      "Quality inspection and testing.",
    ],
    objective:
      "Our objective is to support boiler manufacturers with dependable, precision-engineered components that meet their technical requirements.",
  },
  {
    slug: "hydro-test-stoppers-essential-for-boiler-pressure-testing",
    tag: "Hydro Test Stoppers",
    title: "Hydro Test Stoppers – Essential Components for Boiler Pressure Testing",
    summary:
      "Hydrostatic testing is an important procedure in boiler manufacturing and pressure equipment inspection to verify equipment pressure integrity under controlled test conditions.",
    text: "Hydrostatic testing is an important procedure in boiler manufacturing and pressure equipment inspection to verify equipment pressure integrity under controlled test conditions.",
    readTime: "4 min read",
    date: "November 2026",
    image: hydroTestTesting,
    primaryKeywords: [
      "Boiler testing components manufacturer",
      "Industrial testing components",
      "Precision engineering manufacturer",
    ],
    supportingKeywords: [
      "Hydro test stoppers",
      "High-pressure fittings",
      "Precision machined components",
    ],
    contentParagraphs: [
      "Hydrostatic testing is an important procedure in boiler manufacturing and pressure equipment inspection. It helps verify the pressure integrity of equipment by using water under controlled test conditions.",
      "Hydro test stoppers are specialized components used to seal openings and connections during hydrostatic testing.",
    ],
    bulletsTitle: "Their manufacturing requires careful consideration of:",
    bullets: [
      "Material strength and compatibility.",
      "Accurate thread machining.",
      "Pressure-retaining design.",
      "Sealing surface quality.",
      "Dimensional accuracy.",
      "Applicable pressure-testing requirements.",
    ],
    objective:
      "SuperTech Engineering Corporation manufactures precision-engineered hydro test stoppers for industrial testing applications, with an emphasis on dimensional accuracy, machining quality and reliable construction.",
  },
  {
    slug: "thermowells-for-boilers-ensuring-accurate-temperature-measurement",
    tag: "Boiler Thermowells",
    title: "Thermowells for Boilers – Ensuring Accurate Temperature Measurement",
    summary:
      "Temperature monitoring is critical in boiler systems, particularly in high-pressure steam applications. Thermowells provide reliable sensor protection and measurement precision.",
    text: "Temperature monitoring is critical in boiler systems, particularly in high-pressure steam applications. Thermowells provide reliable sensor protection and measurement precision.",
    readTime: "4 min read",
    date: "November 2026",
    image: boilerThermowells,
    primaryKeywords: [
      "Boiler accessories manufacturer",
      "Boiler components manufacturer",
      "Precision engineering manufacturer",
    ],
    supportingKeywords: [
      "Boiler thermowells",
      "Precision machined components",
      "Alloy steel components",
    ],
    contentParagraphs: [
      "Temperature monitoring is critical in boiler systems, particularly in high-pressure and high-temperature steam applications.",
      "A thermowell provides a protective enclosure for temperature sensors such as RTDs and thermocouples. It allows temperature measurement while protecting the sensing element from process pressure, fluid flow and mechanical damage.",
    ],
    bulletsTitle: "A quality thermowell requires:",
    bullets: [
      "Appropriate material selection.",
      "Precision internal bore machining.",
      "Correct immersion length.",
      "Accurate mounting connections.",
      "Suitable pressure and temperature design.",
      "Vibration and mechanical stress evaluation.",
    ],
    objective:
      "At SuperTech Engineering Corporation, we manufacture precision-machined thermowells based on application requirements and approved engineering drawings. Our focus is to deliver components that support dependable temperature measurement in industrial boiler systems.",
  },
  {
    slug: "role-of-precision-machining-in-power-plant-and-boiler-industries",
    tag: "Precision Machining",
    title: "The Role of Precision Machining in Power Plant and Boiler Industries",
    summary:
      "The power generation and boiler industries require components manufactured with high levels of accuracy and consistency, where even minor variations can affect equipment assembly and performance.",
    text: "The power generation and boiler industries require components manufactured with high levels of accuracy and consistency, where even minor variations can affect equipment assembly and performance.",
    readTime: "4 min read",
    date: "November 2026",
    image: precisionMachiningPowerPlants,
    primaryKeywords: [
      "Precision machining company",
      "Precision engineering manufacturer",
      "Boiler components manufacturer",
    ],
    supportingKeywords: [
      "Industrial manifolds",
      "Hydraulic press components",
      "Precision machined components",
    ],
    contentParagraphs: [
      "The power generation and boiler industries require components manufactured with high levels of accuracy and consistency.",
      "Even minor dimensional variations can affect component assembly, performance and reliability.",
    ],
    bulletsTitle: "Precision machining plays an important role in manufacturing:",
    bullets: [
      "Boiler testing components.",
      "Industrial couplings.",
      "High-pressure manifolds.",
      "Hydro test stoppers.",
      "Thermowells.",
      "Hydraulic press components.",
      "Custom-engineered fittings.",
    ],
    objective:
      "SuperTech Engineering Corporation combines precision machining capabilities with engineering expertise to manufacture components according to customer drawings and technical specifications. We believe that manufacturing excellence begins with precision at every stage.",
  },
  {
    slug: "material-selection-and-quality-control-in-industrial-component-manufacturing",
    tag: "Material & Quality",
    title: "Material Selection and Quality Control in Industrial Component Manufacturing",
    summary:
      "Selecting suitable materials and maintaining strict quality inspection are paramount when manufacturing industrial components destined for high-pressure and high-temperature environments.",
    text: "Selecting suitable materials and maintaining strict quality inspection are paramount when manufacturing industrial components destined for high-pressure and high-temperature environments.",
    readTime: "4 min read",
    date: "November 2026",
    image: materialQualityControl,
    primaryKeywords: [
      "Custom engineering components",
      "Precision engineering manufacturer",
      "Industrial testing components",
    ],
    supportingKeywords: [
      "Alloy steel components",
      "High-pressure fittings",
      "Precision machined components",
    ],
    contentParagraphs: [
      "Material selection is one of the most important considerations in manufacturing industrial components, especially those used in high-pressure and high-temperature environments.",
      "Different applications require different material properties, including mechanical strength, corrosion resistance, temperature resistance and machinability.",
    ],
    bulletsTitle: "Depending on the application, engineering materials may include:",
    bullets: [
      "Carbon steel.",
      "Alloy steel.",
      "Stainless steel.",
      "Special-purpose engineering alloys.",
    ],
    objective:
      "Quality control should include material verification, dimensional inspection, surface inspection and applicable testing requirements. At SuperTech Engineering Corporation, we understand the importance of selecting suitable materials and maintaining manufacturing quality throughout the production process.",
  },
  {
    slug: "custom-precision-engineering-manufacturing-components-as-per-customer-drawings",
    tag: "Custom Engineering",
    title: "Custom Precision Engineering – Manufacturing Components as per Customer Drawings",
    summary:
      "Standard parts do not always fit specialized equipment. Custom precision engineering delivers components manufactured strictly to customer drawings, samples and application needs.",
    text: "Standard parts do not always fit specialized equipment. Custom precision engineering delivers components manufactured strictly to customer drawings, samples and application needs.",
    readTime: "4 min read",
    date: "November 2026",
    image: customPrecisionEngineering,
    primaryKeywords: [
      "Custom engineering components",
      "Precision engineering manufacturer",
      "Boiler testing components manufacturer",
    ],
    supportingKeywords: [
      "Hydro test stoppers",
      "Boiler thermowells",
      "Precision machined components",
    ],
    contentParagraphs: [
      "Every industrial application has unique engineering requirements. Standard components may not always meet the dimensional, structural or operational needs of specialized equipment.",
      "Custom precision engineering bridges this gap by manufacturing components according to customer drawings, samples and application-specific requirements.",
      "SuperTech Engineering Corporation specializes in custom manufacturing of precision-engineered industrial components.",
    ],
    bulletsTitle: "Our manufacturing focus includes:",
    bullets: [
      "Components developed from engineering drawings.",
      "Customized machining solutions.",
      "Precision turning and drilling.",
      "Specialized fittings and assemblies.",
      "Dimensional accuracy and finishing.",
      "Application-specific manufacturing.",
    ],
    objective:
      "We aim to build long-term industrial partnerships through engineering expertise, consistent quality and dependable manufacturing support.",
  },
];
