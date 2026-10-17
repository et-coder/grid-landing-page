import menu from "../assets/icon-menu.svg";
import hero from "../assets/hero.png";
import arrow from "../assets/icon-arrow-right.svg";
import close from "../assets/icon-close.svg";
import plus from "../assets/icon-plus.svg";
import sparkles from "../assets/icon-sparkle.svg";
import trending from "../assets/icon-trending-up.svg";

const navLinks = ["About", "Our Work", "Partners", "Annual Report", "Donate"];

const cards = [
  {
    id: 1,
    image: sparkles,
    stat: "2.4M",
    title: "Students reached",
    desc: "Acrosss 31 countries since 2011.",
  },
  {
    id: 2,
    image: plus,
    stat: "1,284",
    title: "Schools partnered",
    desc: "In 14 countries, from kenya to Guatermala.",
  },
  {
    id: 3,
    image: arrow,
    stat: "38K",
    title: "Teachers trained",
    desc: "Equipped with modern tools and methodology.",
  },
  {
    id: 4,
    image: trending,
    stat: "3.1\u00D7",
    title: "Graduation lift",
    desc: "Partner schools outperform national averages 3x.",
  },
];

export { menu, hero, arrow, close, plus, sparkles, trending, navLinks, cards };
