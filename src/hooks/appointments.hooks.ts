import { AppointmentContext } from "@/context/appointment-context";
import { useContext } from "react";

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  return context;
};
