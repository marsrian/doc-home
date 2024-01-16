import { getReviewsFromDb } from "@/services/review.service";
import { cache } from "react";
import "server-only";

const getReviews = cache(() => {
  return getReviewsFromDb();
});

export default getReviews;