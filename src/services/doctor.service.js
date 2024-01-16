import "server-only";
import DbConnect from "./DbConnect";
import { ObjectId } from "mongodb";

export const getDoctorsFromDb = async () => {
  const db = await DbConnect();
  const doctorsCollection = db.collection("doctors");
  return doctorsCollection.find({}).toArray();
};

export const getDoctorByIdFromDb = async (id) => {
  const db = await DbConnect();
  const doctorsCollection = db.collection("doctors");
  const query = {
    _id: new ObjectId(id),
  };
  return doctorsCollection.findOne(query);
};