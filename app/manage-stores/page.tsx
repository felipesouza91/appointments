import { ManageStoresPage } from "@/components/manager-store";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage stores | Slotwise",
  description: "Select a store to view its appointment schedule with Slotwise.",
};

export default function ManageStoresRoute() {
  return <ManageStoresPage />;
}
