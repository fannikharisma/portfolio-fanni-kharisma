export default function ProjectCard() {
  return (
    <section id="projectcards">
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
        <img src="#" alt="" className="h-52 w-full object-cover" />
        <div className="p-5">
          <h3 className="font-semibold text-white">Sales Performance Analysis</h3>
          <p className="mt-3 text-sm text-gray-400">Analyzed sales data to identify trends and improve profitability</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-lg bg-blue-500/10 px-3 py-1 text-xs text-blue-400">Data Analysis</span>
          <span className="rounded-lg bg-blue-500/10 px-3 py-1 text-xs text-blue-400">Data Analysis</span>
        </div>
        <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
          <div className="flex gap-3">tools</div>
        </div>
      </article>
    </section>
  );
}
