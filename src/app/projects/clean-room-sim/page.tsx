import Image from "next/image";

export default function CleanRoomSim() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Clean Room Simulator</h1>
      <ul className="list-disc list-inside space-y-2 text-neutral-300 mb-6">
        <li>Developed real-time lighting and environmental control loops</li>
        <li>Built modular simulation architecture for scalable environments</li>
        <li>Experience applicable to HiL/SiL test system development</li>
      </ul>
      <div className="flex flex-col gap-6 mt-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Images/Architecture.jpg"
          alt="System Architecture"
          className="rounded-xl border border-white/10 w-full h-auto"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Images/Description.jpg"
          alt="Clean Room Description"
          className="rounded-xl border border-white/10 w-full h-auto"
        />
      </div>
    </main>
  );
}
