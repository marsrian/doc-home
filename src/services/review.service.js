import "server-only";
import DbConnect from "./DbConnect";

export const getReviewsFromDb = async () => {
  const db = await DbConnect();
  const reviewsCollection = db.collection("reviews");
  return reviewsCollection.find({}).toArray();
};