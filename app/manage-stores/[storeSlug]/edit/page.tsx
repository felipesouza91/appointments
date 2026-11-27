import type { Metadata } from 'next'
import { StoreFormPage } from '@/components/create-store-page'

type EditStoreRouteProps = {
  params: Promise<{ storeSlug: string }>
}

function getStoreName(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ') || 'Store'
}

export async function generateMetadata({ params }: EditStoreRouteProps): Promise<Metadata> {
  const { storeSlug } = await params
  const storeName = getStoreName(storeSlug)

  return {
    title: `Edit ${storeName} | Slotwise`,
    description: `Edit the details and working hours for ${storeName}.`,
  }
}

export default async function EditStoreRoute({ params }: EditStoreRouteProps) {
  const { storeSlug } = await params
  const storeName = getStoreName(storeSlug)

  return <StoreFormPage mode="edit" initialStoreName={storeName} initialAppointmentDuration="45" />
}
