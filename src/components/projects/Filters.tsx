export default function Filters() {
  return (
    <section id="filter" className="bg-blue-950">
      <div className="flex flex-wrap items-center gap-3 mx-auto max-w-7xl p-5 ">
        <button className="rounded-xl px-5 py-3 text-sm transition bg-blue-600 text-white">All</button>
        <button className="rounded-xl px-5 py-3 text-sm transition bg-blue-600 text-white">Requirement Analysis</button>
        <input type="text" className="ml-auto rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none" />
      </div>
    </section>
  );
}
