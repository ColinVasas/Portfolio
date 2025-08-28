export default function SurvivalHorrorProject() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        {/* Title */}
        <h1 className="text-3xl font-bold">Survival Horror (Unannounced)</h1>
        <p className="mt-3 text-neutral-300">
          A systems-driven survival horror title in active development. My focus is on
          **AI navigation/behavior**, **vehicle traversal mechanics** (player-steerable boat),
          and **player control/interaction physics**—building tension through believable systems
          rather than scripted moments.
        </p>

        {/* Contribution summary */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold">What I built</h2>
          <ul className="mt-3 list-disc list-inside space-y-2 text-neutral-300">
            <li>
              <span className="font-medium text-neutral-100">Enemy AI & Navigation:</span>{" "}
              grid/mesh–based pathfinding, patrol/seek/flare states, perception cones,
              hearing triggers, and dynamic re-pathing around moving obstacles.
            </li>
            <li>
              <span className="font-medium text-neutral-100">Boat Traversal Mechanics:</span>{" "}
              steer/accelerate/brake model with water drag, turn radius, drift and wake effects;
              environment reacts (buoys, docks, debris) via physics constraints and triggers.
            </li>
            <li>
              <span className="font-medium text-neutral-100">Player Controller & Interactions:</span>{" "}
              responsive ground/water locomotion, stamina & stumble responses, pickup/use systems,
              physics-driven doors, drawers, and valves with tuned damping.
            </li>
          </ul>
        </div>

        {/* Systems details */}
        <div className="mt-10 grid gap-8">
          <section>
            <h3 className="text-lg font-semibold">AI Design</h3>
            <p className="mt-2 text-neutral-300">
              Modular state machine (Idle, Patrol, Investigate, Chase, Search, Reset) with
              blackboard memory (last known position, threat score). Navigation volumes update
              when the world changes (moving platforms, closing gates), keeping enemies believable
              and pressure persistent.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Traversal & Environment</h3>
            <p className="mt-2 text-neutral-300">
              The boat uses a simple rigid-body model with thrust, rudder torque, and lateral
              resistance to simulate slide and under-steer. Environmental props respond to the
              hull via collision layers and joint limits, enabling tight puzzles and docking moments.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Interaction & Feel</h3>
            <p className="mt-2 text-neutral-300">
              Inputs feed a small “intent” buffer to smooth abrupt changes, while coyote-time and
              impulse caps keep interactions snappy but grounded. Most interactables are parameterized
              (mass, friction, spring, limits) so designers can tune scenes without code changes.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <ul className="mt-2 list-disc list-inside space-y-1 text-neutral-300">
              <li>Engine: Unity (C#) / (prototype-friendly physics & navmesh)</li>
              <li>AI: finite-state architecture with perception queries; debug overlays</li>
              <li>Tools: editor gizmos for patrol graphs, spawn tuning, encounter scripting</li>
              <li>Builds: profile-driven iteration to balance frame budget vs. tension beats</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Notes</h3>
            <p className="mt-2 text-neutral-300">
              Visuals and level content intentionally omitted pre-release. I’m happy to discuss
              systems design in more detail on request.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-10 flex gap-4">
          <a
            href="/contact"
            className="rounded-lg border border-emerald-500 px-6 py-3 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10 transition"
          >
            Contact Me
          </a>
          <a
            href="/experience"
            className="rounded-lg border border-white/15 px-6 py-3 text-neutral-200 hover:border-white/40 transition"
          >
            Related Experience
          </a>
        </div>
      </div>
    </main>
  );
}