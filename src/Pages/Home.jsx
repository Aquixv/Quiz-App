import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-deep-purple text-lavender-light min-h-screen flex flex-col font-display">
      <div className="relative flex h-full w-full flex-col overflow-x-hidden">
        {/* Header */}
        <header className="flex items-center bg-deep-purple/80 backdrop-blur-md p-4 sticky top-0 z-10 border-b border-glass-border">
          <div className="text-electric-violet flex size-10 shrink-0 items-center justify-center rounded-lg bg-electric-violet/10">
            <span className="material-symbols-outlined">menu</span>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">QuizMaster</h2>
          <div className="size-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-electric-violet">notifications</span>
          </div>
        </header>

        <main className="flex-1 pb-24">
          {/* Hero Section */}
          <section className="px-6 pt-8 pb-6 text-center">
            <h1 className="text-white text-4xl font-extrabold leading-tight mb-4">
              Test Your <span className="text-electric-violet">Knowledge</span>
            </h1>
            <p className="text-lavender-light/70 text-sm mb-8">
              Challenge yourself with thousands of quizzes across various topics.
            </p>
            
            <div className="w-full aspect-square max-w-[280px] mx-auto mb-8 bg-gradient-to-br from-electric-violet/30 to-purple-900/40 rounded-3xl flex items-center justify-center relative overflow-hidden border border-white/10 shadow-2xl shadow-purple-950/50">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-electric-violet via-transparent to-transparent"></div>
              <span className="material-symbols-outlined text-[120px] text-lavender-light opacity-90">psychology</span>
              <div className="absolute top-4 right-8 text-neon-yellow/80">
                <span className="material-symbols-outlined text-4xl">lightbulb</span>
              </div>
              <div className="absolute bottom-6 left-8 text-electric-violet">
                <span className="material-symbols-outlined text-4xl">auto_stories</span>
              </div>
            </div>

            <div className="flex px-4">
              <button 
                onClick={() => navigate('/setup')}
                className="flex min-w-[84px] w-full cursor-pointer items-center justify-center rounded-xl h-14 px-5 bg-neon-yellow text-deep-purple text-lg font-bold shadow-lg shadow-neon-yellow/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Start Quiz
              </button>
            </div>
          </section>

          {/* Categories Section */}
          <section className="px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Categories</h3>
              <button className="text-electric-violet text-sm font-semibold">See All</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: 'science', label: 'Science' },
                { icon: 'history_edu', label: 'History' },
                { icon: 'movie_filter', label: 'Pop Culture' }
              ].map((cat, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="size-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-electric-violet">
                    <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                  </div>
                  <span className="text-xs font-semibold text-lavender-light/90">{cat.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Leaderboard Section */}
          <section className="px-6 py-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Top Scorers</h3>
                <span className="material-symbols-outlined text-neon-yellow">emoji_events</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-electric-violet/20 flex items-center justify-center overflow-hidden border border-white/10">
                    <img alt="User 1" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">Alex Rivera</p>
                    <p className="text-xs text-lavender-light/50">12,450 pts</p>
                  </div>
                  <div className="text-neon-yellow font-bold text-sm">#1</div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 bg-deep-purple/80 backdrop-blur-xl border-t border-glass-border px-4 pb-6 pt-2 z-20">
          <div className="flex justify-around">
            <Link to="/" className="flex flex-col items-center gap-1 text-neon-yellow">
              <span className="material-symbols-outlined">home</span>
              <p className="text-[10px] font-bold uppercase">Home</p>
            </Link>
            <Link to="/setup" className="flex flex-col items-center gap-1 text-lavender-light/40">
              <span className="material-symbols-outlined">grid_view</span>
              <p className="text-[10px] font-medium uppercase">Topics</p>
            </Link>
            <button className="flex flex-col items-center gap-1 text-lavender-light/40">
              <span className="material-symbols-outlined">leaderboard</span>
              <p className="text-[10px] font-medium uppercase">Stats</p>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;