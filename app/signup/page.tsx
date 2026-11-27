import { SignUpPage } from "@/components/sign-up";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up | Slotwise",
  description:
    "Create a Slotwise account to keep appointments, your schedule, and favorite providers together.",
};

export default function SignUpRoute() {
  return <SignUpPage />;
}
