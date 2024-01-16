import { getDoctorByIdFromDb } from "@/services/doctor.service";
import { cache } from "react";
import "server-only";

const getSingleDoctor = cache(getDoctorByIdFromDb);

export default getSingleDoctor;