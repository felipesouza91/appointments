import { StoreFormPage } from "@/components/create-store";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create a store | Slotwise",
  description: "Add store details and weekly working hours to Slotwise.",
};

export default function CreateStoreRoute() {
  return <StoreFormPage />;
}
