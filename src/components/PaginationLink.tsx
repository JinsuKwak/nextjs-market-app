"use client";
import { PRODUCTS_PER_PAGE } from "@/constants";
import { useSearchParams } from "next/navigation";
import React from "react";
import qs from "query-string";
import Link from "next/link";

interface PaginationLinkProps {
  children: React.ReactNode;
  page?: number | string;
  isActive?: boolean;
  disabled?: boolean;
}

const PaginationLink = ({ page, isActive, children, disabled }: PaginationLinkProps) => {
  const params = useSearchParams();
  const limit = PRODUCTS_PER_PAGE;
  const skip = page ? (Number(page) - 1) * limit : 0;

  let currentQuery = {};

  if (params) {
    currentQuery = qs.parse(params?.toString());
  }

  const updatedQuery = {
    ...currentQuery,
    page: page,
    skip: skip,
  };

  return (
    <Link
      className={`p-2 text-2xl ${isActive ? "font-bold text-orange-500" : "text-gray-500 "} ${
        disabled ? "pointer-events-none text-gray-200" : ""
      }`}
      href={{ query: updatedQuery }}
    >
      {children}
    </Link>
  );
};

export default PaginationLink;
