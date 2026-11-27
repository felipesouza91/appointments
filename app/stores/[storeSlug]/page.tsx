import { StoreAppointmentPage } from "@/components/store-appointments";
import type { Metadata } from "next";

type StorePageProps = {
  params: Promise<{ storeSlug: string }>;
};

function getStoreName(slug: string) {
  return (
    slug
      .split("-")
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ") || "Local service provider"
  );
}

export async function generateMetadata({
  params,
}: StorePageProps): Promise<Metadata> {
  const { storeSlug } = await params;
  const storeName = getStoreName(storeSlug);
  return {
    title: `Book an appointment at ${storeName} | Slotwise`,
    description: `Choose an appointment date and time at ${storeName}.`,
  };
}

export default async function StorePage({ params }: StorePageProps) {
  const { storeSlug } = await params;
  return (
    <StoreAppointmentPage
      storeName={getStoreName(storeSlug)}
      storeSlug={storeSlug}
    />
  );
}
