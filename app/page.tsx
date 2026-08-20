"use client";

import Link from "next/link";
import { useState } from "react";

/* ---------------------------------------------------------------------- */
/* Syntax color tokens — VS Code Dark+ palette                             */
/* ---------------------------------------------------------------------- */

const KW = "text-[#c586c0]"; // keywords: import, export, const, function
const STR = "text-[#ce9178]"; // strings
const TYPE = "text-[#4ec9b0]"; // types / interfaces
const PROP = "text-[#9cdcfe]"; // object keys / props
const COM = "text-[#6a9955] italic"; // comments
const TAG = "text-[#569cd6]"; // headings / markdown
const MUT = "text-[#7f848e]"; // punctuation

type FileId = "readme" | "about" | "skills" | "projects" | "contact";

/* ---------------------------------------------------------------------- */
/* File contents — each line is pre-rendered JSX, gutter numbers are auto  */
/* ---------------------------------------------------------------------- */

function FileLink({
  id,
  children,
  onOpen,
}: {
  id: FileId;
  children: React.ReactNode;
  onOpen: (id: FileId) => void;
}) {
  return (
    <button
      onClick={() => onOpen(id)}
      className="rounded bg-[#3a3d41] px-1 text-[#ce9178] hover:bg-[#4a4d51]"
    >
      {children}
    </button>
  );
}

function buildFiles(
  onOpen: (id: FileId) => void
): Record<FileId, { label: string; ext: string; dot: string; lines: React.ReactNode[] }> {
  return {
    readme: {
      label: "README.md",
      ext: "MD",
      dot: "#519aba",
      lines: [
        <span key="l0" className={`${TAG} font-bold`}>
          # //array//
        </span>,
        "",
        <span key="l2">
          Full-stack developer, app developer, and electrical designer.
        </span>,
        "",
        <span key="l4">
          <span className="font-bold text-[#d4d4d4]">Status:</span>{" "}
          <span className="text-[#6a9955]">● available for new work</span>
        </span>,
        "",
        <span key="l6">
          I design and ship software end to end, then trace the circuits
        </span>,
        <span key="l7">underneath it — web apps, mobile builds, and the boards</span>,
        <span key="l8">that sometimes run them.</span>,
        "",
        <span key="l10" className={MUT}>
          {"> "}Open{" "}
          <FileLink id="skills" onOpen={onOpen}>
            Skills.tsx
          </FileLink>
          ,{" "}
          <FileLink id="projects" onOpen={onOpen}>
            Projects.tsx
          </FileLink>
          , or{" "}
          <FileLink id="contact" onOpen={onOpen}>
            Contact.ts
          </FileLink>{" "}
          in the sidebar to explore.
        </span>,
        "",
        <span key="l12">
          <span className="text-[#d4d4d4]">$</span>{" "}
          <FileLink id="projects" onOpen={onOpen}>
            npm run view-projects
          </FileLink>
        </span>,
        <span key="l13">
          <span className="text-[#d4d4d4]">$</span>{" "}
          <a
            href="mailto:hello@array.dev"
            className="rounded bg-[#3a3d41] px-1 text-[#ce9178] hover:bg-[#4a4d51]"
          >
            npm run say-hello
          </a>
        </span>,
      ],
    },

    about: {
      label: "About.tsx",
      ext: "TSX",
      dot: "#519aba",
      lines: [
        <span key="a0">
          <span className={KW}>import</span> {"{ "}
          <span className={TYPE}>Engineer</span>
          {" } "}
          <span className={KW}>from</span> <span className={STR}>'./core'</span>
          <span className={MUT}>;</span>
        </span>,
        "",
        <span key="a2">
          <span className={KW}>export const</span> <span className={PROP}>profile</span>
          <span className={MUT}>: </span>
          <span className={TYPE}>Engineer</span> <span className={MUT}>= {"{"}</span>
        </span>,
        <span key="a3">
          {"  "}
          <span className={PROP}>name</span>
          <span className={MUT}>: </span>
          <span className={STR}>'//array//'</span>
          <span className={MUT}>,</span>
        </span>,
        <span key="a4">
          {"  "}
          <span className={PROP}>roles</span>
          <span className={MUT}>: [</span>
        </span>,
        <span key="a5">
          {"    "}
          <span className={STR}>'Full-Stack Developer'</span>
          <span className={MUT}>,</span>
        </span>,
        <span key="a6">
          {"    "}
          <span className={STR}>'App Developer'</span>
          <span className={MUT}>,</span>
        </span>,
        <span key="a7">
          {"    "}
          <span className={STR}>'Electrical Design'</span>
          <span className={MUT}>,</span>
        </span>,
        <span key="a8">
          {"  "}
          <span className={MUT}>],</span>
        </span>,
        <span key="a9">
          {"  "}
          <span className={PROP}>bio</span>
          <span className={MUT}>: </span>
          <span className={STR}>`I design and ship software end to end, then trace</span>
        </span>,
        <span key="a10">
          <span className={STR}>{"  the circuits underneath it — web apps, mobile"}</span>
        </span>,
        <span key="a11">
          <span className={STR}>{"  builds, and the boards that sometimes run them.`"}</span>
          <span className={MUT}>,</span>
        </span>,
        <span key="a12">
          {"  "}
          <span className={PROP}>status</span>
          <span className={MUT}>: </span>
          <span className={STR}>'available for new work'</span>
          <span className={MUT}>,</span>
        </span>,
        <span key="a13">
          <span className={MUT}>{"};"}</span>
        </span>,
      ],
    },

    skills: {
      label: "Skills.tsx",
      ext: "TSX",
      dot: "#519aba",
      lines: [
        <span key="s0" className={COM}>
          // pinout — what I build
        </span>,
        <span key="s1">
          <span className={KW}>export const</span> <span className={PROP}>disciplines</span>{" "}
          <span className={MUT}>= [</span>
        </span>,
        ...[
          ["01", "Software", ["React", "Next.js", "Node.js", "Postgres"]],
          ["02", "Applications", ["Swift", "Kotlin", "React Native"]],
          ["03", "Electrical Design", ["Altium", "KiCad", "Embedded C"]],
        ].flatMap(([pin, title, stack], i, arr) => {
          const s = stack as string[];
          return [
            <span key={`s-open-${i}`}>
              {"  "}
              <span className={MUT}>{"{"}</span>
            </span>,
            <span key={`s-pin-${i}`}>
              {"    "}
              <span className={PROP}>pin</span>
              <span className={MUT}>: </span>
              <span className={STR}>'{pin as string}'</span>
              <span className={MUT}>,</span>
            </span>,
            <span key={`s-title-${i}`}>
              {"    "}
              <span className={PROP}>title</span>
              <span className={MUT}>: </span>
              <span className={STR}>'{title as string}'</span>
              <span className={MUT}>,</span>
            </span>,
            <span key={`s-stack-${i}`}>
              {"    "}
              <span className={PROP}>stack</span>
              <span className={MUT}>: [</span>
              {s.map((item, j) => (
                <span key={j}>
                  <span className={STR}>'{item}'</span>
                  {j < s.length - 1 && <span className={MUT}>, </span>}
                </span>
              ))}
              <span className={MUT}>],</span>
            </span>,
            <span key={`s-close-${i}`}>
              {"  "}
              <span className={MUT}>{i === arr.length - 1 ? "}" : "},"}</span>
            </span>,
          ];
        }),
        <span key="s-end">
          <span className={MUT}>];</span>
        </span>,
      ],
    },

    projects: {
      label: "Projects.tsx",
      ext: "TSX",
      dot: "#519aba",
      lines: [
        <span key="p0" className={COM}>
          {"// TODO: replace with real projects"}
        </span>,
        <span key="p1">
          <span className={KW}>export const</span> <span className={PROP}>projects</span>{" "}
          <span className={MUT}>= [</span>
        </span>,
        ...[
          ["WEB APP", "Project name", "One line on the problem this solves."],
          ["MOBILE APP", "Project name", "One line on the problem this solves."],
          ["PCB / EMBEDDED", "Project name", "One line on the problem this solves."],
        ].flatMap(([tag, name, desc], i, arr) => [
          <span key={`t-${i}`}>
            {"  "}
            <span className={MUT}>{"{"}</span>
          </span>,
          <span key={`tag-${i}`}>
            {"    "}
            <span className={PROP}>tag</span>
            <span className={MUT}>: </span>
            <span className={STR}>'{tag}'</span>
            <span className={MUT}>,</span>
          </span>,
          <span key={`name-${i}`}>
            {"    "}
            <span className={PROP}>name</span>
            <span className={MUT}>: </span>
            <span className={STR}>'{name}'</span>
            <span className={MUT}>,</span>
          </span>,
          <span key={`desc-${i}`}>
            {"    "}
            <span className={PROP}>desc</span>
            <span className={MUT}>: </span>
            <span className={STR}>'{desc}'</span>
            <span className={MUT}>,</span>
          </span>,
          <span key={`href-${i}`}>
            {"    "}
            <span className={PROP}>href</span>
            <span className={MUT}>: </span>
            <Link
              href="/projects"
              className="rounded bg-[#3a3d41] px-1 text-[#ce9178] hover:bg-[#4a4d51]"
            >
              '/projects'
            </Link>
            <span className={MUT}>,</span>
          </span>,
          <span key={`close-${i}`}>
            {"  "}
            <span className={MUT}>{i === arr.length - 1 ? "}" : "},"}</span>
          </span>,
        ]),
        <span key="p-end">
          <span className={MUT}>];</span>
        </span>,
      ],
    },

    contact: {
      label: "Contact.ts",
      ext: "TS",
      dot: "#3178c6",
      lines: [
        <span key="c0">
          <span className={KW}>export const</span> <span className={PROP}>contact</span>{" "}
          <span className={MUT}>= {"{"}</span>
        </span>,
        <span key="c1">
          {"  "}
          <span className={PROP}>email</span>
          <span className={MUT}>: </span>
          <a
            href="mailto:hello@array.dev"
            className="rounded bg-[#3a3d41] px-1 text-[#ce9178] hover:bg-[#4a4d51]"
          >
            'hello@array.dev'
          </a>
          <span className={MUT}>,</span>
        </span>,
        <span key="c2">
          {"  "}
          <span className={PROP}>github</span>
          <span className={MUT}>: </span>
          <a
            href="https://github.com/ivanisgoodatcoding52"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-[#3a3d41] px-1 text-[#ce9178] hover:bg-[#4a4d51]"
          >
            'github.com/ivanisgoodatcoding52'
          </a>
          <span className={MUT}>,</span>
        </span>,
        <span key="c3">
          {"  "}
          <span className={PROP}>twitter</span>
          <span className={MUT}>: </span>
          <a
            href="https://x.com/unnameduserplus"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-[#3a3d41] px-1 text-[#ce9178] hover:bg-[#4a4d51]"
          >
            'x.com/unnameduserplus'
          </a>
          <span className={MUT}>,</span>
        </span>,
        <span key="c4">
          {"  "}
          <span className={PROP}>youtube</span>
          <span className={MUT}>: </span>
          <a
            href="https://www.youtube.com/@rgcodesarray"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-[#3a3d41] px-1 text-[#ce9178] hover:bg-[#4a4d51]"
          >
            'youtube.com/@rgcodesarray'
          </a>
          <span className={MUT}>,</span>
        </span>,
        <span key="c5">
          <span className={MUT}>{"};"}</span>
        </span>,
      ],
    },
  };
}

/* ---------------------------------------------------------------------- */
/* Small components                                                        */
/* ---------------------------------------------------------------------- */

function Line({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex px-2 leading-6 hover:bg-white/[0.03]">
      <span className="w-9 shrink-0 select-none pr-4 text-right text-[#6e7681]">{n}</span>
      <span className="whitespace-pre-wrap break-words">{children}</span>
    </div>
  );
}

function TrafficDot({ color }: { color: string }) {
  return <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />;
}

/* ---------------------------------------------------------------------- */
/* Page                                                                     */
/* ---------------------------------------------------------------------- */

export default function Home() {
  const [activeTab, setActiveTab] = useState<FileId>("readme");
  const [openTabs, setOpenTabs] = useState<FileId[]>(["readme"]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(true);

  const openFile = (id: FileId) => {
    setOpenTabs((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setActiveTab(id);
    setSidebarOpen(false);
  };

  const closeTab = (id: FileId, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenTabs((prev) => {
      const next = prev.filter((t) => t !== id);
      if (activeTab === id) {
        setActiveTab(next.length ? next[next.length - 1] : "readme");
      }
      return next.length ? next : ["readme"];
    });
  };

  const FILES = buildFiles(openFile);
  const TREE: { section: string; files: FileId[] }[] = [
    { section: "", files: ["readme"] },
    { section: "src", files: ["about", "skills", "projects", "contact"] },
  ];

  const file = FILES[activeTab];

  return (
    <main className="flex h-screen flex-col overflow-hidden bg-[#1e1e1e] font-mono text-[13px] text-[#d4d4d4]">
      {/* title bar */}
      <div className="flex shrink-0 items-center gap-3 border-b border-black/40 bg-[#323233] px-4 py-2">
        <div className="flex gap-1.5">
          <TrafficDot color="#ff5f56" />
          <TrafficDot color="#ffbd2e" />
          <TrafficDot color="#27c93f" />
        </div>
        <span className="ml-2 select-none truncate text-xs text-[#9d9d9d]">
          array — portfolio.code-workspace
        </span>
        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="rounded px-2 py-0.5 text-xs text-[#9d9d9d] hover:bg-white/10 md:hidden"
          >
            ▤ files
          </button>
          <button
            onClick={() => setTerminalOpen((v) => !v)}
            className="rounded px-2 py-0.5 text-xs text-[#9d9d9d] hover:bg-white/10"
          >
            ▁ terminal
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 overflow-hidden">
        {/* sidebar */}
        <aside
          className={`absolute z-20 h-full w-64 shrink-0 border-r border-black/40 bg-[#252526] p-2 md:static md:block ${
            sidebarOpen ? "block" : "hidden"
          }`}
        >
          <p className="mb-2 select-none px-1 text-[11px] uppercase tracking-wider text-[#9d9d9d]">
            Explorer
          </p>
          <p className="mb-1 select-none px-1 text-xs font-bold text-[#d4d4d4]">▾ portfolio</p>
          {TREE.map((group) => (
            <div key={group.section || "root"} className={group.section ? "ml-2" : ""}>
              {group.section && (
                <p className="mb-1 select-none px-1 text-xs text-[#cccccc]">▾ {group.section}</p>
              )}
              {group.files.map((id) => (
                <button
                  key={id}
                  onClick={() => openFile(id)}
                  className={`ml-2 flex w-[calc(100%-0.5rem)] items-center gap-2 rounded px-2 py-1 text-left text-xs ${
                    activeTab === id
                      ? "bg-[#37373d] text-white"
                      : "text-[#cccccc] hover:bg-[#2a2d2e]"
                  }`}
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: FILES[id].dot }}
                  />
                  {FILES[id].label}
                </button>
              ))}
            </div>
          ))}
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-10 bg-black/50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* editor column */}
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          {/* tab bar */}
          <div className="flex shrink-0 overflow-x-auto border-b border-black/40 bg-[#2d2d2d]">
            {openTabs.map((id) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`group flex shrink-0 items-center gap-2 border-r border-black/40 px-3 py-2 text-xs ${
                  activeTab === id
                    ? "border-t-2 border-t-[#007acc] bg-[#1e1e1e] text-white"
                    : "border-t-2 border-t-transparent text-[#9d9d9d] hover:bg-[#2a2d2e]"
                }`}
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: FILES[id].dot }}
                />
                {FILES[id].label}
                <span
                  onClick={(e) => closeTab(id, e)}
                  className="ml-1 rounded px-1 text-[#9d9d9d] hover:bg-white/20 hover:text-white"
                >
                  ×
                </span>
              </button>
            ))}
          </div>

          {/* editor content */}
          <div className="flex min-h-0 flex-1 overflow-hidden">
            <div className="flex-1 overflow-auto py-3">
              {file.lines.map((line, i) => (
                <Line key={i} n={i + 1}>
                  {line}
                </Line>
              ))}
            </div>
            {/* minimap */}
            <div className="hidden w-16 shrink-0 border-l border-black/40 bg-[#1e1e1e] p-2 opacity-40 lg:block">
              {file.lines.map((_, i) => (
                <div
                  key={i}
                  className="mb-[3px] h-[2px] rounded bg-[#6a6a6a]"
                  style={{ width: `${20 + ((i * 37) % 70)}%` }}
                />
              ))}
            </div>
          </div>

          {/* terminal panel */}
          {terminalOpen && (
            <div className="h-44 shrink-0 overflow-auto border-t border-black/40 bg-[#181818] p-3 text-xs">
              <p className="mb-2 text-[#9d9d9d]">PROBLEMS  OUTPUT  TERMINAL</p>
              <p>
                <span className="text-[#6a9955]">user@array</span>
                <span className="text-[#d4d4d4]">:~$ </span>whoami
              </p>
              <p className="text-[#d4d4d4]">
                full-stack developer / app developer / electrical engineer
              </p>
              <p className="mt-2">
                <span className="text-[#6a9955]">user@array</span>
                <span className="text-[#d4d4d4]">:~$ </span>cat status.txt
              </p>
              <p className="text-[#6a9955]">available for new work ●</p>
              <p className="mt-2">
                <span className="text-[#6a9955]">user@array</span>
                <span className="text-[#d4d4d4]">:~$ </span>open ./socials
              </p>
              <p>
                →{" "}
                <a
                  href="https://github.com/ivanisgoodatcoding52"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3794ff] hover:underline"
                >
                  github.com/ivanisgoodatcoding52
                </a>
              </p>
              <p>
                →{" "}
                <a
                  href="https://x.com/unnameduserplus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3794ff] hover:underline"
                >
                  x.com/unnameduserplus
                </a>
              </p>
              <p>
                →{" "}
                <a
                  href="https://www.youtube.com/@rgcodesarray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3794ff] hover:underline"
                >
                  youtube.com/@rgcodesarray
                </a>
              </p>
              <p className="mt-2">
                <span className="text-[#6a9955]">user@array</span>
                <span className="text-[#d4d4d4]">:~$ </span>
                <span className="animate-pulse">▍</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* status bar */}
      <div className="flex shrink-0 items-center gap-4 bg-[#007acc] px-3 py-1 text-[11px] text-white">
        <span>⎇ main</span>
        <span>⚠ 0</span>
        <span>✕ 0</span>
        <span className="ml-auto hidden sm:inline">{file.ext}</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span className="hidden sm:inline">LF</span>
        <span>Ln {file.lines.length}, Col 1</span>
      </div>
    </main>
  );
}
