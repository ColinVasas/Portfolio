import Link from "next/link";
export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <ul className="space-y-5">
        <li className="border border-white/10 rounded-xl p-5">
          <div className="font-semibold">Survival Horror Game Design(UI)</div>
          <div className="text-sm text-neutral-400">
            09/2022 – Current • Unity • AI / Navigation • Physics / Controls • UI
          </div>
          <p className="mt-2 text-neutral-300">
            Designed and built core systems for an unannounced survival horror game,
            focusing on AI navigation and behavior, player grid-based movement, and
            physics-driven player interactions. Balances atmosphere and mechanics to
            create tension through systemic design rather than scripted events.
          </p>
          <Link
            href="/projects/game-creation/"
            className="text-emerald-400 hover:underline mt-2 inline-block"
          >
            View Project →
          </Link>
        </li>
        <li className="border border-white/10 rounded-xl p-5">
          <div className="font-semibold">AV/IT Support (Academic Technologies / Oregon State University)</div>
          <div className="text-sm text-neutral-400">11/2023-06/2025 • Windows, Networking, Hardware Installation • Team collaboration • Customer Service</div>
          <p className="mt-2 text-neutral-300">At Oregon State University I worked as an AV/IT Technician, installing and maintaining classroom and conference room systems. I collaborated with multiple teams on complex hardware integrations, sat in on consultations to scope project needs, and supported departments through a ticketing system. The role strengthened my problem-solving, adaptability, and customer service skills while broadening my technical experience.</p>
        </li>
        <li className="border border-white/10 rounded-xl p-5">
          <div className="font-semibold">Embedded System Software Simulation Engineer Intern(Jaguar Land Rover)(UI)</div>
          <div className="text-sm text-neutral-400">06/2024-09/2025 • Unity/Unreal • C#/C++ • Simulink/Carmaker • Physics, input, tooling</div>
          <p className="mt-2 text-neutral-300">Developed a VR driving simulator in Unity, expanding on JLR existing environments with the goal to see vehicle UI in driving sims. Collaboration with UX/UI designers to implement UI in unity sims. Gained hands-on experience with vehicle system modeling and integration through Simulink, contributing to the advancement of their Driver-in-the-Loop simulation platform.</p>
          <Link
            href="/projects/JLR-sim/"
            className="text-emerald-400 hover:underline mt-2 inline-block"
          >
            View Project →
          </Link>
        </li>
        <li className="border border-white/10 rounded-xl p-5">
          <div className="font-semibold">Student / Research • Semiconductor Clean Room Training Simulation(Computer Science / Oregon State University)</div>
          <div className="text-sm text-neutral-400">09/2024-06/2025 • Unity/Unreal • C#/C++ • User Feedback</div>
          <p className="mt-2 text-neutral-300">Led development of physics-driven spincoating mechanics for a VR training simulator used to teach semiconductor clean room processes. Designed step-by-step tutorials and immersive environments with a strong focus on user experience and accessibility, enabling new technicians to safely practice complex workflows. Collaborated with a multidisciplinary team to balance technical accuracy with intuitive interaction design.</p>
          <Link
            href="/projects/clean-room-sim/"
            className="text-emerald-400 hover:underline mt-2 inline-block"
          >
            View Project →
          </Link>
        </li>
        <li className="border border-white/10 rounded-xl p-5">
          <div className="font-semibold">Hardware Simulation Engineer Intern(Jaguar Land Rover)</div>
          <div className="text-sm text-neutral-400">06/2025-09/2025 • Unity/Unreal • C#/C++ • Simulink/Carmaker • Physics, input, tooling</div>
          <p className="mt-2 text-neutral-300">Focused on hardware-to-software integration for JLRs full-scale Driver-in-the-Loop simulators. Researched and documented hardware interaction with simulation systems to ensure reliability and future scalability. Supported cross-functional teams by analyzing system performance and helping bridge hardware components with Unity- and Simulink-based models.</p>
          <Link
            href="/projects/JLR-sim/"
            className="text-emerald-400 hover:underline mt-2 inline-block"
          >
            View Project →
          </Link>
        </li>
        <li className="border border-white/10 rounded-xl p-5">
          <div className="font-semibold">Social Media / YouTube Editing (Freelance/Hobby)</div>
          <div className="text-sm text-neutral-400">6+ years • Premiere/AE/DaVinci/Photoshop • Thumbnails, motion bumpers</div>
          <p className="mt-2 text-neutral-300">I created and managed streaming and video content for gaming and fitness channels, producing tutorials, walkthroughs, gameplay highlights, and educational videos. This work exposed me to different editing styles and platforms while strengthening my ability to adapt quickly to new software. It also gave me a deeper understanding of social media engagement and digital content strategy.</p>
        </li>
      </ul>
    </main>
  );
}