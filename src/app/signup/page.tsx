import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { AuthCard } from "@/components/AuthCard";
import { SignUpForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create your Flutter Studio account.",
};

export default function SignUpPage() {
  return (
    <AuthCard
      title="Create your account"
      subtitle="Choose a plan and get access to the Flutter Studio template library."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-brand-600">
            Log in
          </Link>
        </>
      }
    >
      <Suspense>
        <SignUpForm />
      </Suspense>
    </AuthCard>
  );
}
