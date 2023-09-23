import prisma from "@/helpers/prismadb";

export interface ProductsParams {
  latitude?: number;
  longitude?: number;
  category?: string;
}

export default async function getProducts(params: ProductsParams) {
  const SEARCH_RANGE: number = 0.01;
  try {
    const { latitude, longitude, category } = params;
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

    const products = await prisma.product.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      data: products,
    };
  } catch (e: any) {
    throw new Error(e);
  }
}
