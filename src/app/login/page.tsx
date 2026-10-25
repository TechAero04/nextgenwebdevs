import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { AuthCard } from "@/components/AuthCard";
import { LoginForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your Flutter Studio account.",
};

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Log in to access your template library and account."
      footer={
        <>
          New to Flutter Studio?{" "}
          <Link href="/signup" className="font-semibold text-brand-600">
            Create an account
          </Link>
        </>
      }
    >
      <Suspense>
        <LoginForm />
      </Suspense>
    </AuthCard>
  );
}
