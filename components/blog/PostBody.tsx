import type { Block } from "@/lib/blog";
import { Rich } from "./Rich";

export default function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5 text-[1.05rem] leading-relaxed text-navy-900/85">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i}>
                <Rich text={b.text} />
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="pt-6 text-2xl font-extrabold leading-tight text-navy-900 sm:text-[1.75rem]"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="pt-2 text-xl font-bold text-navy-900">
                {b.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-6 marker:text-sky">
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Rich text={it} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-2 pl-6 marker:font-bold marker:text-sky">
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Rich text={it} />
                  </li>
                ))}
              </ol>
            );
          case "checklist":
            return (
              <div key={i} className="rounded-2xl border border-navy-900/10 bg-sky-light p-6">
                <h3 className="text-lg font-extrabold text-navy-900">{b.title}</h3>
                <ul className="mt-4 space-y-3">
                  {b.items.map((it, j) => (
                    <li key={j} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-navy-700 text-xs font-bold text-lima"
                      >
                        ✓
                      </span>
                      <span>
                        <Rich text={it} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case "callout":
            return (
              <aside key={i} className="rounded-2xl border-l-4 border-lima bg-navy-900 p-6 text-white">
                {b.title && <p className="text-lg font-extrabold text-lima">{b.title}</p>}
                <p className="mt-2 text-white/90">
                  <Rich text={b.text} />
                </p>
              </aside>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-navy-900/10">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-navy-700 text-white">
                    <tr>
                      {b.head.map((h) => (
                        <th key={h} className="px-4 py-3 font-bold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="border-t border-navy-900/10 even:bg-sky-light/60">
                        {r.map((c, k) => (
                          <td
                            key={k}
                            className={`px-4 py-3 align-top ${k === 0 ? "font-semibold text-navy-900" : ""}`}
                          >
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
