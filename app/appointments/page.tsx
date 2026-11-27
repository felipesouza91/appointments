import { AppointmentsPage } from "@/components/appointments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your appointments | Slotwise",
  description:
    "Review your upcoming and past service appointments with Slotwise.",
};

export default function AppointmentsRoute() {
  return <AppointmentsPage />;
}
