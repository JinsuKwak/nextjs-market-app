import { User } from "@prisma/client";
import { useMemo } from "react";
import axios from "axios";
import { request } from "http";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface UseFavorite {
  productId: string;
  currentUser?: User | null;
}

const useFavorite = ({ productId, currentUser }: UseFavorite) => {
  const router = useRouter();
  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(productId);
  }, [currentUser, productId]);

  const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!currentUser) {
      toast.warning("Log in before adding favorites");
      return;
    }

    try {
      let req;
      if (hasFavorite) {
        req = () => axios.delete(`/api/favorites/${productId}`);
      } else {
        req = () => axios.post(`/api/favorites/${productId}`);
      }
      await req();
      router.refresh();
      if (hasFavorite) {
        toast.success("Favorite Removed");
      } else {
        toast.success("Favorite Added");
      }
    } catch (err) {
      console.error(err);
      toast.error("error occurred");
    }
  };
  return {
    hasFavorite,
    toggleFavorite,
  };
};

export default useFavorite;
