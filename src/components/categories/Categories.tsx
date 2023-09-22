import React from "react";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiWindmill, GiIsland, GiBoatFishing } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";

export const categories = [
  {
    label: "Electronics",
    path: "digital",
    icon: TbBeach,
    description: "Explore the Electronics category.",
  },
  {
    label: "Home Appliances",
    path: "appliances",
    icon: GiWindmill,
    description: "Discover Home Appliances.",
  },
  {
    label: "Furniture/Interior",
    path: "interior",
    icon: MdOutlineVilla,
    description: "Browse Furniture and Interior items.",
  },
  {
    label: "Women's Clothing",
    path: "women-clothing",
    icon: TbMountain,
    description: "Shop Women's Clothing.",
  },
  {
    label: "Men's Fashion/Accessories",
    path: "men-fashion",
    icon: TbPool,
    description: "Explore Men's Fashion and Accessories.",
  },
  {
    label: "Beauty/Cosmetics",
    path: "beauty",
    icon: GiIsland,
    description: "Discover Beauty and Cosmetics products.",
  },
  {
    label: "Sports/Leisure",
    path: "sports",
    icon: GiBoatFishing,
    description: "Find Sports and Leisure items.",
  },
  {
    label: "Used Cars",
    path: "used-car",
    icon: FaSkiing,
    description: "Browse Used Cars for sale.",
  },
];

const Categories = () => {
  return <div>Categories</div>;
};

export default Categories;
