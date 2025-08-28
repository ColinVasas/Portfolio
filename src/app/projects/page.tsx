import Link from "next/link";

const projects = [
  { slug: "clean-room-sim", title: "Clean Room Simulator", blurb: "Unity simulation: lighting systems, interactions, tooling." },
  { slug: "JLR-sim", title: "Embedded SW Systems and Hardware Simulation Internship", blurb: "Vehicle systems and simulation connections." },
  { slug: "game-creation", title: "Video Game Experience", blurb: "Physics, complex AI Navigation system, multi-system boat interaction." },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="block p-6 rounded-xl bg-neutral-900 border border-white/10 hover:border-emerald-400 transition">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-neutral-400 text-sm mt-2">{p.blurb}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
