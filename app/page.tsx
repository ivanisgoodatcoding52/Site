import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center h-screen overflow-hidden bg-black text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat filter grayscale brightness-[0.35] contrast-[1.1]"
        style={{ 
          backgroundImage: "url('https://img.goodfon.com/original/1920x1080/0/6b/cityscapes-black-and-white.jpg')" 
        }}
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/40 to-black/80" />

      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      <div className="z-10 flex flex-col items-center text-center max-w-xl mx-4 px-8 py-12 rounded-2xl border border-zinc-800/40 bg-zinc-950/40 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.7)]">
        
        <header className="space-y-3 mb-8">
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent select-none font-mono">
            //array//
          </h1>
          <p className="text-[10px] sm:text-xs tracking-[0.25em] font-medium text-zinc-400 uppercase">
            Full Stack Developer <span className="text-zinc-600">•</span> App Developer <span className="text-zinc-600">•</span> Electrical Design
          </p>
        </header>

        <div className="flex items-center gap-2 p-1.5 rounded-full border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md shadow-lg">
          
          <a href="https://x.com/unnameduserplus" target="_blank" rel="noopener noreferrer" 
             className="group relative p-2.5 rounded-full hover:bg-zinc-800/60 transition-all duration-200">
            <svg className="w-5 h-5 text-white! fill-white!" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-95 opacity-0 pointer-events-none bg-zinc-900 border border-zinc-800 text-zinc-200 text-[11px] px-2.5 py-1 rounded-md whitespace-nowrap transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">Twitter</span>
          </a>

          <a href="https://www.youtube.com/@rgcodesarray" target="_blank" rel="noopener noreferrer" 
             className="group relative p-2.5 rounded-full hover:bg-zinc-800/60 transition-all duration-200">
            <svg className="w-5 h-5 text-[#FF0000]! fill-[#FF0000]!" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-95 opacity-0 pointer-events-none bg-zinc-900 border border-zinc-800 text-zinc-200 text-[11px] px-2.5 py-1 rounded-md whitespace-nowrap transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">YouTube</span>
          </a>

          <a href="https://github.com/ivanisgoodatcoding52" target="_blank" rel="noopener noreferrer" 
             className="group relative p-2.5 rounded-full hover:bg-zinc-800/60 transition-all duration-200">
            <svg className="w-5 h-5 text-[#e6edf3]! fill-[#e6edf3]!" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-95 opacity-0 pointer-events-none bg-zinc-900 border border-zinc-800 text-zinc-200 text-[11px] px-2.5 py-1 rounded-md whitespace-nowrap transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">GitHub</span>
          </a>
        </div>
      </div>

      {/* Balanced Footer Navigation with Forced Gray Colors */}
      <footer className="absolute bottom-12 z-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs tracking-wider font-medium">
        
        {/* Blog Link */}
        <Link href="/blog" className="group flex items-center gap-1.5 text-zinc-500! hover:text-zinc-200! transition-colors duration-200">
          <svg className="w-3.5 h-3.5 stroke-zinc-500! group-hover:stroke-zinc-200! fill-none stroke-2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
          <span className="text-zinc-500! group-hover:text-zinc-200!">Blog</span>
        </Link>

        {/* Projects Link */}
        <Link href="/projects" className="group flex items-center gap-1.5 text-zinc-500! hover:text-zinc-200! transition-colors duration-200">
          <svg className="w-3.5 h-3.5 stroke-zinc-500! group-hover:stroke-zinc-200! fill-none stroke-2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
          <span className="text-zinc-500! group-hover:text-zinc-200!">Projects</span>
        </Link>

        {/* Languages Link */}
        <Link href="/languages" className="group flex items-center gap-1.5 text-zinc-500! hover:text-zinc-200! transition-colors duration-200">
          <svg className="w-3.5 h-3.5 stroke-zinc-500! group-hover:stroke-zinc-200! fill-none stroke-2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371c1.746 0 3.43.127 5.08.37l1 .148M3 5.621a48.44 48.44 0 0 0-.333 4.88c-.066 1.402.883 2.7 2.285 2.81 2.033.16 4.098.24 6.182.24m-8.134-7.93a48.243 48.243 0 0 0-1 4.542M5.134 13.33c.956.08 1.914.144 2.873.193m-2.873-.192A17.914 17.914 0 0 1 3 10.27M9 3.75V5.25" /></svg>
          <span className="text-zinc-500! group-hover:text-zinc-200!">Languages</span>
        </Link>

        {/* Index / Files Link */}
        <Link href="/files" className="group flex items-center gap-1.5 text-zinc-500! hover:text-zinc-200! transition-colors duration-200">
          <svg className="w-3.5 h-3.5 stroke-zinc-500! group-hover:stroke-zinc-200! fill-none stroke-2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-19.5 0A2.25 2.25 0 0 0 4.5 15h15a2.25 2.25 0 0 0 2.25-2.25m-19.5 0v3A2.25 2.25 0 0 0 4.5 20.25h15a2.25 2.25 0 0 0 2.25-2.25v-3m-16.5-6V6a2.25 2.25 0 0 1 2.25-2.25h3.375c.597 0 1.11.376 1.293.943L11.25 6h2.25c.597 0 1.11.376 1.293.943l.718 2.157m-9-3h9" /></svg>
          <span className="text-zinc-500! group-hover:text-zinc-200!">Index</span>
        </Link>
      </footer>

    </main>
  );
}
