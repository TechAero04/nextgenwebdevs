"use client";

import Link from "next/link";
import { useState } from "react";
import { plans } from "@/lib/site";

export function PricingCards() {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <span className={`text-sm font-medium ${!yearly ? "text-slate-900" : "text-slate-500"}`}>Monthly</span>
        <button
          type="button"
          role="switch"
          aria-checked={yearly}
          aria-label="Toggle yearly billing"
          onClick={() => setYearly((v) => !v)}
          className={`relative h-7 w-12 rounded-full transition ${yearly ? "bg-brand-600" : "bg-slate-300"}`}
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${yearly ? "left-6" : "left-1"}`}
          />
        </button>
        <span className={`text-sm font-medium ${yearly ? "text-slate-900" : "text-slate-500"}`}>
          Yearly <span className="text-emerald-600">(2 months free)</span>
        </span>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm ${
              plan.highlighted ? "border-brand-500 ring-2 ring-brand-500" : "border-slate-200"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </span>
            )}
            <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
            <p className="mt-2 min-h-12 text-sm text-slate-600">{plan.tagline}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold tracking-tight text-slate-900">
                ${yearly ? plan.yearly : plan.monthly}
              </span>
              <span className="text-sm font-medium text-slate-500">USD / {yearly ? "year" : "month"}</span>
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {yearly
                ? `Billed $${plan.yearly} once per year`
                : `Billed $${plan.monthly} every month`}{" "}
              · {plan.seats}
            </p>
            <Link
              href={`/signup?plan=${plan.id}&billing=${yearly ? "yearly" : "monthly"}`}
              className={`mt-6 rounded-lg px-4 py-3 text-center text-sm font-semibold transition ${
                plan.highlighted
                  ? "bg-brand-600 text-white hover:bg-brand-700"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              Choose {plan.name}
            </Link>
            <ul className="mt-8 space-y-3 text-sm text-slate-700">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-brand-600" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-slate-500">
        All prices are in US dollars. Applicable sales tax or VAT may be added at checkout. Cancel anytime — see our{" "}
        <Link href="/refund-policy" className="text-brand-600 underline">
          Refund &amp; Cancellation Policy
        </Link>
        .
      </p>
    </div>
  );
}
