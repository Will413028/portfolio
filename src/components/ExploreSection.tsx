"use client";

export default function ExploreSection() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">My Site</p>
        <h2 className="text-4xl md:text-5xl font-medium">
          Explore, experiment
          <br />
          <span className="font-serif italic gradient-text-pink">&& say hello</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Uses Card */}
        <div className="card-glow bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors group cursor-pointer">
          <div className="flex gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700 group-hover:border-zinc-600 transition-colors">
              <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-bold">*</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">Uses</p>
          <p className="text-lg text-zinc-200">Check out my favorite tools</p>
        </div>

        {/* Guestbook Card */}
        <div className="card-glow bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors overflow-hidden group cursor-pointer">
          <div className="relative h-32 mb-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-xl" />
            <div className="relative flex gap-3">
              <div className="w-20 h-28 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 transform -rotate-6 shadow-xl group-hover:rotate-0 transition-transform duration-300" />
              <div className="w-20 h-28 rounded-xl bg-gradient-to-br from-pink-400 to-cyan-400 transform rotate-6 shadow-xl group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">Guestbook</p>
          <p className="text-lg text-zinc-200">Let me know you were here</p>
        </div>

        {/* Spotify Card */}
        <div className="card-glow bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors group cursor-pointer">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <span className="text-sm text-green-500 font-medium">Last Played</span>
          </div>

          <p className="text-sm text-zinc-400 mb-4">
            Last Played <span className="text-white font-medium">back to friends</span> by{" "}
            <span className="text-cyan-400">sombr</span> from{" "}
            <span className="text-white italic">I Barely Know Her</span>
          </p>

          <div className="relative w-32 h-32 mx-auto">
            {/* Vinyl record style */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 shadow-xl">
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-600" />
                </div>
                {/* Grooves */}
                <div className="absolute inset-2 rounded-full border border-zinc-500/20" />
                <div className="absolute inset-4 rounded-full border border-zinc-500/20" />
                <div className="absolute inset-6 rounded-full border border-zinc-500/20" />
              </div>
            </div>
            {/* Spinning animation ring */}
            <div className="absolute inset-0 rounded-full border-2 border-zinc-600/30 animate-spin-slow" />
          </div>
        </div>
      </div>
    </section>
  );
}
