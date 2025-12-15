import Image from "next/image";

export default function SurvivalHorrorProject() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        {/* Title */}
        <h1 className="text-3xl font-bold">Indie Horror</h1>
        <p className="mt-3 text-neutral-300">
          A systems-driven survival horror title in active development. My focus is on
          **AI navigation/behavior**, **vehicle traversal mechanics** (player-steerable boat),
          and **player control/interaction physics**—building tension through believable systems
          rather than scripted moments.
        </p>
        <div className="mt-6">
          <Image
            src="/Images/MainMenu.jpg"
            alt="Grid-based horror UI implementation"
            width={1600}
            height={900}
            className="rounded-xl border border-white/10 w-full h-auto"
            priority
          />
          <p className="mt-2 text-sm text-neutral-400">
            UI implementation prototype for grid-based navigation and threat awareness.
          </p>
        </div>
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
            <h3 className="text-lg font-semibold">UI Design</h3>
            <p className="mt-2 text-neutral-300">
              I designed and implemented all in-game UI systems, focusing on clarity/atmosphere, pacing, and tension in a grid-based survival experience. 
              The UI was built directly in-engine and iterated through playtesting to ensure information was readable, intentional, and never overwhelming.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-2 text-neutral-300">
            <li>
              <span className="font-medium text-neutral-100">Implemented in-game UI layouts and interactive elements directly in-engine and designed UI flow to support player navigation, awareness, and decision-making</span>
            </li>
            <li>
              <span className="font-medium text-neutral-100">Collaborated with gameplay systems to ensure UI clarity without breaking immersion</span>
            </li>
            <li>
              <span className="font-medium text-neutral-100">Iterated on UI layout and interactions based on playtesting and usability feedback</span>
            </li>
          </ul>
          </section>
          <section>
            <h3 className="text-lg font-semibold">AI Design</h3>
            <p className="mt-2 text-neutral-300">
              The enemy operates as a search-and-intercept threat on the same grid as the player.
              Each turn, it updates its intent based on what it last sensed (sound/line-of-sight),
              then commits to a route that pressures likely escape paths instead of beelining in a
              predictable way. This creates “near misses” and forces the player to plan several
              moves ahead.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-2 text-neutral-300">
              <li>
                <span className="font-medium text-neutral-100">Search behavior:</span>{" "}
                patrol → investigate → hunt states with memory of last known location and “suspicion” levels.
              </li>
              <li>
                <span className="font-medium text-neutral-100">Fair pressure:</span>{" "}
                the enemy commits per turn like the player, so it feels readable while still dangerous.
              </li>
              <li>
                <span className="font-medium text-neutral-100">Tension tuning:</span>{" "}
                adjustable senses, reaction delay, and route selection to control difficulty and pacing.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Traversal & Turn-Based Tension</h3>
            <p className="mt-2 text-neutral-300">
              Movement is grid-based and time-pressured: each turn has a short planning window, and
              your path must be committed before the timer expires. The core tension comes from
              making smart, strategic moves—choosing safe routes, avoiding dead ends, and not
              “greeding” for progress—because a single bad turn can put you directly in the
              enemy’s search pattern.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-2 text-neutral-300">
              <li>
                <span className="font-medium text-neutral-100">Route planning:</span>{" "}
                you plan moves to reach objectives and “finish the night” while managing risk per turn.
              </li>
              <li>
                <span className="font-medium text-neutral-100">Information & misdirection:</span>{" "}
                visibility and audio cues influence decisions—sometimes the safest move is to reposition,
                not advance.
              </li>
              <li>
                <span className="font-medium text-neutral-100">Systems-driven outcomes:</span>{" "}
                the environment supports meaningful choices (chokepoints, safe lanes, traps/obstacles),
                so survival feels earned.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Interaction & Feel</h3>
            <p className="mt-2 text-neutral-300">
              Goal is to have an older school look and feel with the ps1 style render, shaders, and low poly assests. 
              The interactions aim to be eerie and meaningful with clues that seem random aim to steer the character 
              in the direction of the underlying story.
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
              Most visuals and level content intentionally omitted pre-release. I’m happy to discuss
              game design in more detail on request.
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