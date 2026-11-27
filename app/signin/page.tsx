import { SignInPage } from "@/components/sign-in";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | Slotwise",
  description:
    "Sign in to Slotwise to manage your appointments and favorite providers.",
};

export default function SignInRoute() {
  return <SignInPage />;
}
