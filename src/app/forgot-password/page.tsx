import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/AuthCard";
import { ForgotPasswordForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Reset password",
  robots: { index: false },
};

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      title="Reset your password"
      subtitle="Enter your account email and we will send you a reset link."
      footer={
        <Link href="/login" className="font-semibold text-brand-600">
          ← Back to log in
        </Link>
      }
    >
      <ForgotPasswordForm />
    </AuthCard>
  );
}
