import Link from "next/link";

/* ---------------------------------------------------------------------- */
/* Content — edit these arrays to update the page without touching markup */
/* ---------------------------------------------------------------------- */

const TICKER = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "NODE.JS",
  "SWIFT",
  "KOTLIN",
  "PYTHON",
  "REST APIS",
  "ALTIUM DESIGNER",
  "KICAD",
  "EMBEDDED C",
  "PCB LAYOUT",
  "POSTGRES",
  "TAILWIND",
];

const DISCIPLINES = [
  {
    pin: "01",
    title: "Software",
    copy: "Full-stack web apps and APIs, built for scale and built to last — from schema to deploy.",
    icon: ChipIcon,
  },
  {
    pin: "02",
    title: "Applications",
    copy: "Native and cross-platform apps that feel fast, stay out of the way, and ship on time.",
    icon: PhoneIcon,
  },
  {
    pin: "03",
    title: "Electrical Design",
    copy: "Schematic capture, PCB layout, and firmware — hardware prototypes taken from idea to board.",
    icon: CircuitIcon,
  },
];

// TODO: swap these for real projects (or pull from /projects).
const WORK = [
  {
    tag: "WEB APP",
    title: "Project name",
    copy: "One line on the problem this solves and the stack it runs on.",
    href: "/projects",
  },
  {
    tag: "MOBILE APP",
    title: "Project name",
    copy: "One line on the problem this solves and the stack it runs on.",
    href: "/projects",
  },
  {
    tag: "PCB / EMBEDDED",
    title: "Project name",
    copy: "One line on the problem this solves and the stack it runs on.",
    href: "/projects",
  },
];

const NAV_LINKS = [
  { href: "/blog", label: "Blog", icon: BlogIcon },
  { href: "/projects", label: "Projects", icon: ProjectsIcon },
  { href: "/languages", label: "Languages", icon: LanguagesIcon },
  { href: "/files", label: "Index", icon: IndexIcon },
];

const SOCIALS = [
  {
    href: "https://x.com/unnameduserplus",
    label: "Twitter",
    color: "#e6e8e4",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    href: "https://www.youtube.com/@rgcodesarray",
    label: "YouTube",
    color: "#e6644d",
    icon: (
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    ),
  },
  {
    href: "https://github.com/ivanisgoodatcoding52",
    label: "GitHub",
    color: "#e6e8e4",
    icon: (
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    ),
  },
];

/* ---------------------------------------------------------------------- */
/* Page                                                                    */
/* ---------------------------------------------------------------------- */

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0a0f0d] font-sans text-[#e6e8e4] selection:bg-[#c98a4b]/30 selection:text-white">
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes draw-trace { to { stroke-dashoffset: 0; } }
        @keyframes pulse-node { 0%, 100% { opacity: .9; r: 3.5; } 50% { opacity: .25; r: 6; } }
        @keyframes blink-dot { 0%, 100% { opacity: 1; } 50% { opacity: .25; } }
        .marquee-track { animation: marquee 34s linear infinite; }
        .trace-line { stroke-dasharray: 1600; stroke-dashoffset: 1600; animation: draw-trace 2.6s cubic-bezier(.4,0,.2,1) forwards .2s; }
        .trace-node { animation: pulse-node 2.6s ease-in-out infinite; }
        .status-dot { animation: blink-dot 2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track, .trace-line, .trace-node, .status-dot { animation: none !important; }
          .trace-line { stroke-dashoffset: 0 !important; }
        }
      `}</style>

      {/* ---------------------------------------------------------- background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_15%,#000_35%,transparent_100%)]"
          style={{
            backgroundImage:
              "linear-gradient(#16211b 1px, transparent 1px), linear-gradient(90deg, #16211b 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d] via-transparent to-[#0a0f0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(201,138,75,0.08),transparent_70%)]" />
      </div>

      {/* ---------------------------------------------------------- nav */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10">
        <span className="font-mono text-sm font-bold tracking-[0.15em] text-[#e6e8e4]">
          //array//
        </span>
        <div className="flex items-center gap-2 rounded-full border border-[#1c2622] bg-[#0f1613]/70 px-3 py-1.5 backdrop-blur-md">
          <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#6fcf97]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9aa39c]">
            Available for work
          </span>
        </div>
      </header>

      {/* ---------------------------------------------------------- hero */}
      <section className="relative z-10 flex flex-col items-center px-6 pb-20 pt-16 text-center sm:pb-28 sm:pt-20">
        <span className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-[#c98a4b]">
          System status — online
        </span>

        <h1 className="font-mono text-5xl font-black tracking-tighter text-[#f2f3f0] sm:text-7xl">
          //array//
        </h1>

        <p className="mt-5 max-w-xl text-sm font-medium uppercase tracking-[0.2em] text-[#9aa39c] sm:text-base">
          Full-Stack Developer <span className="text-[#3d4a42]">·</span> App
          Developer <span className="text-[#3d4a42]">·</span> Electrical
          Design
        </p>

        <p className="mt-6 max-w-md text-balance text-sm leading-relaxed text-[#828a83] sm:text-base">
          I design and ship software end to end, then trace the circuits
          underneath it — web apps, mobile builds, and the boards that
          sometimes run them.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-[#c98a4b] px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#0a0f0d] transition-colors hover:bg-[#e8c468]"
          >
            See the work
          </Link>
          <a
            href="mailto:hello@array.dev"
            className="rounded-full border border-[#2a3630] px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#e6e8e4] transition-colors hover:border-[#c98a4b] hover:text-[#c98a4b]"
          >
            Say hello
          </a>
        </div>
      </section>

      {/* ---------------------------------------------------------- circuit trace divider */}
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <svg
          viewBox="0 0 1000 60"
          fill="none"
          className="w-full text-[#c98a4b]/60"
          aria-hidden="true"
        >
          <path
            className="trace-line"
            d="M0 30 H180 L220 10 H420 L460 50 H620 L660 30 H820 L860 10 H1000"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          {[180, 420, 620, 820].map((cx, i) => (
            <circle
              key={cx}
              className="trace-node"
              cx={cx}
              cy={i % 2 === 0 ? 30 : 50}
              r="3.5"
              fill="#e8c468"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>
      </div>

      {/* ---------------------------------------------------------- ticker */}
      <section className="relative z-10 mt-6 overflow-hidden border-y border-[#151f1a] py-4">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-[0.2em] text-[#4c5750]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- disciplines */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <h2 className="mb-12 text-center font-mono text-xs uppercase tracking-[0.3em] text-[#6f7871]">
          Pinout — what I build
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {DISCIPLINES.map(({ pin, title, copy, icon: Icon }) => (
            <div
              key={pin}
              className="group relative rounded-2xl border border-[#1c2622] bg-[#0f1613]/50 p-6 backdrop-blur-sm transition-colors hover:border-[#c98a4b]/50"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#6f7871]">
                  PIN {pin}
                </span>
                <Icon className="h-5 w-5 text-[#c98a4b] transition-colors group-hover:text-[#e8c468]" />
              </div>
              <h3 className="mb-2 font-mono text-base font-bold text-[#e6e8e4]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[#828a83]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- selected work */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24 sm:pb-28">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[#6f7871]">
            Selected work
          </h2>
          <Link
            href="/projects"
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#c98a4b] transition-colors hover:text-[#e8c468]"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {WORK.map((project, i) => (
            <Link
              key={i}
              href={project.href}
              className="group flex flex-col justify-between rounded-2xl border border-[#1c2622] bg-[#0f1613]/50 p-6 backdrop-blur-sm transition-colors hover:border-[#c98a4b]/50"
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#c98a4b]">
                  {project.tag}
                </span>
                <h3 className="mt-3 font-mono text-base font-bold text-[#e6e8e4]">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#828a83]">
                  {project.copy}
                </p>
              </div>
              <span className="mt-6 font-mono text-xs tracking-[0.15em] text-[#6f7871] transition-colors group-hover:text-[#e8c468]">
                View project →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- contact / footer */}
      <footer className="relative z-10 border-t border-[#151f1a] px-6 py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-mono text-2xl font-bold text-[#e6e8e4] sm:text-3xl">
            Let&apos;s build something.
          </h2>
          <a
            href="mailto:hello@array.dev"
            className="mt-4 font-mono text-sm text-[#c98a4b] transition-colors hover:text-[#e8c468]"
          >
            hello@array.dev
          </a>

          <div className="mt-8 flex items-center gap-2 rounded-full border border-[#1c2622] bg-[#0f1613]/60 p-1.5 backdrop-blur-md">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-full p-2.5 transition-colors hover:bg-[#1c2622]"
              >
                <svg
                  className="h-4.5 w-4.5"
                  viewBox="0 0 24 24"
                  fill={s.color}
                >
                  {s.icon}
                </svg>
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 scale-95 whitespace-nowrap rounded-md border border-[#1c2622] bg-[#0f1613] px-2.5 py-1 font-mono text-[10px] text-[#e6e8e4] opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                  {s.label}
                </span>
              </a>
            ))}
          </div>

          <nav className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {NAV_LINKS.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-1.5 text-xs font-medium tracking-wider text-[#6f7871] transition-colors duration-200 hover:text-[#e6e8e4]"
              >
                <Icon className="h-3.5 w-3.5 stroke-[#6f7871] transition-colors group-hover:stroke-[#e6e8e4]" />
                {label}
              </Link>
            ))}
          </nav>

          <p className="mt-12 font-mono text-[10px] tracking-[0.2em] text-[#3d4a42]">
            © {new Date().getFullYear()} //array// — ALL SYSTEMS NOMINAL
          </p>
        </div>
      </footer>
    </main>
  );
}

/* ---------------------------------------------------------------------- */
/* Icons                                                                    */
/* ---------------------------------------------------------------------- */

function ChipIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="6" y="2.5" width="12" height="19" rx="2" />
      <path d="M10.5 18.5h3" strokeLinecap="round" />
    </svg>
  );
}

function CircuitIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 6h4a2 2 0 0 1 2 2v6a2 2 0 0 0 2 2h2M16 6h0" strokeLinecap="round" />
    </svg>
  );
}

function BlogIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function ProjectsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  );
}

function LanguagesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371c1.746 0 3.43.127 5.08.37l1 .148M3 5.621a48.44 48.44 0 0 0-.333 4.88c-.066 1.402.883 2.7 2.285 2.81 2.033.16 4.098.24 6.182.24m-8.134-7.93a48.243 48.243 0 0 0-1 4.542M5.134 13.33c.956.08 1.914.144 2.873.193m-2.873-.192A17.914 17.914 0 0 1 3 10.27M9 3.75V5.25" />
    </svg>
  );
}

function IndexIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-19.5 0A2.25 2.25 0 0 0 4.5 15h15a2.25 2.25 0 0 0 2.25-2.25m-19.5 0v3A2.25 2.25 0 0 0 4.5 20.25h15a2.25 2.25 0 0 0 2.25-2.25v-3m-16.5-6V6a2.25 2.25 0 0 1 2.25-2.25h3.375c.597 0 1.11.376 1.293.943L11.25 6h2.25c.597 0 1.11.376 1.293.943l.718 2.157m-9-3h9" />
    </svg>
  );
}
