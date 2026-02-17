import Image from "next/image";

export default function JLRSim() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      {/* Title */}
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-4">Jaguar Land Rover — Driver-in-the-Loop Simulator</h1>
        <section className="mb-8 max-w-5xl">
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p className="text-neutral-300">
            Contributed to Jaguar Land Rover’s simulation engineering efforts by developing
            immersive driving environments, integrating vehicle and control models, and
            supporting hardware-to-software validation workflows. Work focused on improving
            simulator versatility, reliability, and real-time performance for vehicle testing
            and controls validation in Driver-in-the-Loop and HiL-style environments.
          </p>
        </section>
        {/* Highlights */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Role and Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 max-w-5xl">
            <li>
              Integrated hardware-to-software interfaces for steering wheels, pedals, and
              drivetrain components using CAN-based communication.
            </li>
            <li>
              Developed Python tooling to analyze HiL rig CPU load, identify performance
              bottlenecks, and support optimization efforts with systems engineers.
            </li>
            <li>
              Implemented packet-capture and parsing scripts to isolate and identify specific
              CAN signals (e.g., steering wheel button states) from live data streams.
            </li>
            <li>
              Mapped wheel and button inputs into Simulink models to support control logic
              validation and driver interaction testing.
            </li>
            <li>
              Built and iterated on VR-based driving simulators using Unity/Unreal, adapting
              video templates into interactive simulation environments.
            </li>
            <li>
              Performed full teardown, relocation, and rebuild of simulator hardware and
              supporting systems, restoring functionality and validating end-to-end operation.
            </li>
          </ul>
        </section>
        <section className="mb-8 max-w-5xl">
          <h2 className="text-xl font-semibold mb-2">Requirements and Constraints</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>
              Required to rapidly understand and operate a complex simulator stack with
              limited on-site engineering support during the initial internship period.
            </li>
            <li>
              Systems needed to be restored, validated, and documented to ensure reliable
              operation for future testing and development.
            </li>
            <li>
              Hardware and software changes had to maintain real-time responsiveness and
              deterministic behavior for accurate driver-in-the-loop testing.
            </li>
            <li>
              Tooling and scripts were designed to be reusable, maintainable, and understandable
              by future engineers.
            </li>
          </ul>
        </section>
        <section className="mb-10 max-w-6xl">
          <h2 className="text-xl font-semibold mb-3">System Architecture &amp; Integration</h2>

          <p className="text-neutral-300 mb-4">
            The simulator stack was built around a real-time loop where hardware inputs and
            model outputs were synchronized to support repeatable Driver-in-the-Loop and
            HiL-style testing. I focused on bridging hardware signals into the software and
            model layers, and building tooling to observe, validate, and debug the end-to-end
            data flow.
          </p>

          <div className="rounded-xl border border-white/10 bg-neutral-900 p-5">
            <h3 className="text-base font-semibold mb-2 text-neutral-100">High-level data flow</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>
                <span className="font-medium text-neutral-100">Hardware Inputs:</span>{" "}
                steering wheel, pedals, and button states generate signals (including CAN).
              </li>
              <li>
                <span className="font-medium text-neutral-100">Signal Capture &amp; Parsing:</span>{" "}
                packet capture/parsing scripts isolate target messages and extract usable states.
              </li>
              <li>
                <span className="font-medium text-neutral-100">Model Integration:</span>{" "}
                normalized inputs are routed into Simulink models for control logic validation.
              </li>
              <li>
                <span className="font-medium text-neutral-100">Simulation Runtime:</span>{" "}
                Unity/Unreal consumes model outputs to drive vehicle behavior and VR interaction.
              </li>
              <li>
                <span className="font-medium text-neutral-100">Logging &amp; Telemetry:</span>{" "}
                tooling captures performance and runtime signals for debugging and repeatability.
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-10 max-w-6xl">
          <h2 className="text-xl font-semibold mb-3">Testing, Debugging &amp; Performance</h2>

          <p className="text-neutral-300 mb-4">
            A key focus was ensuring the simulator was stable and responsive under real-time
            constraints. I supported validation by building repeatable checks for hardware
            inputs and by analyzing system performance to identify bottlenecks that impacted
            latency and reliability.
          </p>

          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>
              Built Python tooling to profile CPU load, isolate high-usage processes, and
              support performance tuning with systems engineers.
            </li>
            <li>
              Debugged signal pipelines by capturing packets, validating message structure, and
              confirming expected state changes (e.g., button and switch transitions).
            </li>
            <li>
              Verified end-to-end behavior by checking that hardware inputs propagated correctly
              into models and into the simulator runtime.
            </li>
            <li>
              Emphasized reliability: repeatable steps, clear logging, and documentation to reduce
              “tribal knowledge” and improve maintainability.
            </li>
          </ul>
        </section>
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
      </div>
    </main>
  );
}
