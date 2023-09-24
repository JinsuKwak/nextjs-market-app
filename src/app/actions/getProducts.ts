import { PRODUCTS_PER_PAGE } from "@/constants";
import prisma from "@/helpers/prismadb";

export interface ProductsParams {
  latitude?: number;
  longitude?: number;
  category?: string;
  page?: number;
  skip?: number;
}

export default async function getProducts(params: ProductsParams) {
  const SEARCH_RANGE: number = 0.01;
  try {
    const { latitude, longitude, category, skip } = params;
    let query: any = {};
    if (category) {
      query.category = category;
    }

    if (latitude) {
      query.latitude = {
        gte: Number(latitude) - SEARCH_RANGE,
        lte: Number(latitude) + SEARCH_RANGE,
      };
    }

    if (longitude) {
      query.latitude = {
        gte: Number(longitude) - SEARCH_RANGE,
        lte: Number(longitude) + SEARCH_RANGE,
      };
    }

    const totalItem = await prisma.product.count({ where: query });

    const products = await prisma.product.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
      skip: skip ? Number(skip) : 0,
      take: PRODUCTS_PER_PAGE,
    });

    console.log("res from DB", products);

    return {
      data: products,
      totalItems: totalItem,
    };
  } catch (e: any) {
    throw new Error(e);
  }
}
