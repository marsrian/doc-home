import { getDoctorsFromDb } from "@/services/doctor.service";
import { cache } from "react";
import "server-only";

const getDoctors = cache(() => {
  return getDoctorsFromDb();
});

export default getDoctors;