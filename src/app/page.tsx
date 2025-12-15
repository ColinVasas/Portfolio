import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-neutral-950 text-neutral-100">
      <div>
        {/* Name + Role */}
        <h1 className="font-bold tracking-tight leading-tight">
          <span className="block text-5xl md:text-7xl">Colin Vasas</span>
          <span className="block text-3xl md:text-5xl mt-2 text-emerald-400">
            Game Designer
          </span>
        </h1>

        {/* Short description */}
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-neutral-300 leading-relaxed">
          Computer Science graduate and Game Designer with hands-on experience in Driver-in-the-Loop simulators(focus in UI), VR training environments, and game development. Designing and engineering complex systems with creativity, intention, and player-focused execution.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <Link
            href="/experience"
            className="rounded-lg border border-emerald-500 px-6 py-3 text-base font-medium text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 transition"
          >
            Experience
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-emerald-500 px-6 py-3 text-base font-medium text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
