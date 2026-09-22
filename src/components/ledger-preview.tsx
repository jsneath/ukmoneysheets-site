const ROWS = [
  { label: "Take-home pay", plan: "£3,240", actual: "£3,240" },
  { label: "Rent / mortgage", plan: "£1,150", actual: "£1,150" },
  { label: "Council tax", plan: "£162", actual: "£162" },
  { label: "Energy", plan: "£145", actual: "£138" },
  { label: "Groceries", plan: "£380", actual: "£296" },
  { label: "ISA transfer", plan: "£200", actual: "£200" },
];

export function LedgerPreview() {
  return (
    <div className="rounded-xl bg-paper p-2 hairline">
      <div className="overflow-hidden rounded-lg">
        <div className="flex items-center justify-between gap-3 bg-navy px-4 py-3">
          <p className="font-display text-lg font-semibold text-ivory">
            Household · 2026/27
          </p>
          <p className="shrink-0 text-[0.65rem] tracking-[0.12em] text-mint uppercase sm:text-xs">
            Sheets
          </p>
        </div>
        <table className="w-full table-fixed border-collapse bg-paper text-sm">
          <thead>
            <tr className="bg-mint text-left text-[0.65rem] font-semibold tracking-[0.12em] text-navy uppercase sm:text-[0.7rem]">
              <th className="px-3 py-2 font-semibold sm:px-4">Category</th>
              <th className="w-[4.75rem] px-2 py-2 text-right font-semibold sm:w-24">
                Planned
              </th>
              <th className="w-[4.75rem] px-2 py-2 text-right font-semibold sm:w-24 sm:pr-4">
                Actual
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label} className="border-t border-line">
                <td className="truncate px-3 py-2.5 text-navy sm:px-4">
                  {row.label}
                </td>
                <td className="px-2 py-2.5 text-right tabular-nums text-muted">
                  {row.plan}
                </td>
                <td className="px-2 py-2.5 text-right tabular-nums text-navy sm:pr-4">
                  {row.actual}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between gap-3 bg-mint px-4 py-3">
          <span className="text-sm font-semibold text-navy">Left to plan</span>
          <span className="font-display text-2xl font-semibold tabular-nums text-teal">
            £1,294
          </span>
        </div>
      </div>
    </div>
  );
}
