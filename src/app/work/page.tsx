import Link from "next/link";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      <h1 className="text-3xl font-bold mb-6">My Work</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 rounded-xl bg-neutral-900 border border-white/10">
          <h2 className="text-xl font-semibold">Project One</h2>
          <p className="text-neutral-400 text-sm mt-2">
            Short description of your project.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-neutral-900 border border-white/10">
          <h2 className="text-xl font-semibold">Project Two</h2>
          <p className="text-neutral-400 text-sm mt-2">
            Another description here.
          </p>
        </div>
      </div>
    </main>
  );
}
