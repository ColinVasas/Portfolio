export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <p className="text-neutral-300 mb-4 max-w-5xl">
        I’m a strong advocate for <span className="text-emerald-400">constant improvement</span>—whether it’s in 
        engineering, fitness, or personal growth. I love the process of pushing myself, 
        learning something new, and getting a little better every day.
      </p>

      <p className="text-neutral-300 mb-4 max-w-5xl">
        Outside of work, I’m passionate about <span className="text-emerald-400">working out</span>, 
        <span className="text-emerald-400"> hiking</span>, and finding new ways to challenge myself physically. 
        I also spend a lot of time <span className="text-emerald-400">developing and playing video games</span>, 
        which has shaped both my creativity and technical mindset.
      </p>

      <p className="text-neutral-300 mb-4 max-w-5xl">
        I’m a massive nerd at heart—I love playing <span className="text-emerald-400">Dungeons & Dragons</span>, 
        reading <span className="text-emerald-400">comic books</span>, and going to 
        <span className="text-emerald-400"> Renaissance fairs</span> with my girlfriend. 
        These hobbies keep me curious, creative, and inspired to bring imagination into the 
        things I build.
      </p>

      {/* Photo gallery */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <img
          src="/about/Hike.jpg"
          alt="On a hike"
          className="rounded-xl border border-white/10 w-full h-auto"
        />
        <img
          src="/about/RenFaire.jpg"
          alt="At the Renaissance Fair"
          className="rounded-xl border border-white/10 w-full h-auto"
        />
        <img
          src="/about/Gym.jpg"
          alt="At the gym"
          className="rounded-xl border border-white/10 w-full h-auto"
        />
      </div>

      <p className="text-neutral-400 italic">
        Always learning. Always building. Always improving.
      </p>
    </main>
  );
}