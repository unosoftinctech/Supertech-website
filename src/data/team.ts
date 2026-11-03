import type { StaticImageData } from "next/image";

import amanpreet from "@/assets/images/team/amanpreet-singh-lall.jpg";
import rajinder from "@/assets/images/team/rajinder-singh-lall.jpg";

export const team: { name: string; role: string; photo: StaticImageData }[] = [
  { name: "Rajinder Singh Lall", role: "Managing Director", photo: rajinder },
  { name: "Amanpreet Singh Lall", role: "CEO", photo: amanpreet },
];
