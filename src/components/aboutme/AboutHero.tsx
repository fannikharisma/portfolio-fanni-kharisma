export default function AboutHero() {
  return (
    <section id="abouthero">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#020817_70%)]" /> */}
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="h-56 w-56 rounded-full border-2 border-blue-500 overflow-hidden">
                <img src="/profile.jpg" alt="Profile" className="h-full w-full object-cover" />
              </div>

              <div className="absolute bottom-5 right-4 h-5 w-5 rounded-full bg-green-500 border-2 border-white" />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-blue-500 font-medium mb-2">About Me</p>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Data-Driven Problem Solver</h1>

            <h2 className="text-2xl font-semibold text-blue-400 mb-5">Business • Technology • Impact</h2>

            <p className="max-w-2xl text-slate-300 leading-8">I combine analytical thinking, business understanding, and engineering skills to build data-driven solutions that create real business value.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
