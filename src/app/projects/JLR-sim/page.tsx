import Image from "next/image";

export default function JLRSim() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Jaguar Land Rover — Driver-in-the-Loop Simulator</h1>
      <p className="text-neutral-300 mb-4 max-w-5xl">
        Contributed to JLR’s simulator by developing Unity-based environments, 
        integrating driving physics in VR environment, and supporting hardware-to-software testing 
        workflows. Focused on vehicle UI in simulated environment, and controls validation in 
        real-time systems.
      </p>

      {/* Highlights */}
      <ul className="list-disc list-inside space-y-2 text-neutral-300 mb-8">
        <li>Unity/Unreal development for immersive simulation environments</li>
        <li>Integrated Simulink & CarMaker models for powertrain and dynamics testing</li>
        <li>Hardware-to-software interfacing with steering, pedals, and CAN systems</li>
        <li>Supported UI/UX Design mockups integration with Unity and Unreal environments</li>
      </ul>

      {/* Images */}
      <div className="flex flex-col gap-6 mt-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Images/Sim.jpg"
          alt="JLR Driver-in-the-Loop Simulator Rig"
          className="rounded-xl border border-white/10 w-full h-auto"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Images/Powertrain.jpg"
          alt="Carmaker Powertrain System controls"
          className="rounded-xl border border-white/10 w-full h-auto"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Images/CANScript.jpg"
          alt="Arduino Script to capture CAN Signals"
          className="rounded-xl border border-white/10 w-full h-auto"
        />
      </div>
    </main>
  );
}
