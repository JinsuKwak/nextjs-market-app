"use client";
import React from "react";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiWindmill, GiIsland, GiBoatFishing } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import CategoryBox from "./CategoryBox";

export const categories = [
  {
    label: "Electronics",
    path: "digital",
    icon: TbBeach,
    description: "Explore the Electronics category.",
  },
  {
    label: "Appliances",
    path: "appliances",
    icon: GiWindmill,
    description: "Discover Home Appliances.",
  },
  {
    label: "Furniture",
    path: "Furniture",
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
    label: "Men's Fashion",
    path: "men-fashion",
    icon: TbPool,
    description: "Explore Men's Fashion and Accessories.",
  },
  {
    label: "Beauty",
    path: "beauty",
    icon: GiIsland,
    description: "Discover Beauty and Cosmetics products.",
  },
  {
    label: "Sports",
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
  const params = useSearchParams();
  const category = params?.get("category");

  return (
    <div className="flex flex-row items-center justify-between pt-4 overflow-x-auto">
      {categories.map((item) => (
        <CategoryBox
          key={item.label}
          label={item.label}
          path={item.path}
          icon={item.icon}
          selected={category === item.path}
        />
      ))}
    </div>
  );
};

export default Categories;
