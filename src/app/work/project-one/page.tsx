export default function ProjectOnePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Project One</h1>
      <p className="text-neutral-400 mb-6">
        This is where you describe Project One in detail. You can add images,
        explain your process, and show the final results.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="h-48 bg-neutral-800 rounded-xl flex items-center justify-center">
          Image/Mockup 1
        </div>
        <div className="h-48 bg-neutral-800 rounded-xl flex items-center justify-center">
          Image/Mockup 2
        </div>
      </div>
    </main>
  );
}