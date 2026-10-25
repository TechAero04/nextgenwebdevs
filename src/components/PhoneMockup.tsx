const variants = {
  shop: { accent: "from-orange-400 to-pink-500", title: "ShopKit", rows: ["Sneakers", "Headphones", "Backpack"] },
  finance: { accent: "from-emerald-400 to-teal-500", title: "Budgetly", rows: ["Groceries", "Transport", "Rent"] },
  fitness: { accent: "from-violet-500 to-fuchsia-500", title: "FitTrack", rows: ["Morning run", "HIIT", "Yoga"] },
} as const;

export function PhoneMockup({
  variant = "shop",
  className = "",
}: {
  variant?: keyof typeof variants;
  className?: string;
}) {
  const v = variants[variant];
  return (
    <div
      className={`w-48 rounded-[2rem] border-[6px] border-slate-800 bg-slate-800 shadow-2xl sm:w-52 ${className}`}
      aria-hidden="true"
    >
      <div className="overflow-hidden rounded-[1.5rem] bg-white">
        <div className={`bg-gradient-to-br ${v.accent} px-4 pb-6 pt-5 text-white`}>
          <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-white/40" />
          <p className="text-xs opacity-80">Welcome back</p>
          <p className="text-lg font-bold">{v.title}</p>
          <div className="mt-3 h-7 rounded-lg bg-white/25" />
        </div>
        <div className="space-y-2.5 p-3">
          {v.rows.map((row) => (
            <div key={row} className="flex items-center gap-2.5 rounded-xl bg-slate-50 p-2.5">
              <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${v.accent} opacity-80`} />
              <div className="flex-1">
                <p className="text-[11px] font-semibold text-slate-800">{row}</p>
                <div className="mt-1 h-1.5 w-2/3 rounded bg-slate-200" />
              </div>
            </div>
          ))}
          <div className={`h-8 rounded-lg bg-gradient-to-r ${v.accent}`} />
        </div>
      </div>
    </div>
  );
}
