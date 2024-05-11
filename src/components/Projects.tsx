import kopi from "../../public/kopi/kopi.png";
import abtesting from "../../public/main/ab_testing.png";
import beestar from "../../public/main/beestar2.png";
import gmcafe from "../../public/gmcafe/gmcafe.png";

export const projects = [
  {
    name: "Good Morning Café NFT",
    path: gmcafe,
    time: "May-June 2023",
    tags: ["Product Design", "Figma"],
    nav: "/gmcafe",
    featured: true,
  },
  {
    name: "Kopi Organic Roastery",
    path: kopi,
    time: "April 2024",
    tags: ["React", "TypeScript", "HTML", "CSS", "Web Design", "Branding"],
    nav: "/kopi-development",
    featured: true,
  },
  {
    name: "MEDx AB Testing",
    path: abtesting,
    time: "March 2024",
    tags: ["A/B Testing", "UX Research", "HTML", "CSS"],
    // nav: "/ab-testing",
    featured: false,
  },
  {
    name: "Beestar Learning",
    path: beestar,
    time: "March 2024",
    tags: ["Responsive Design", "HTML", "CSS", "JavaScript", "Figma"],
    nav: "/beestar-redesign",
    featured: true,
  },
];
