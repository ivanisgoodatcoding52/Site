"use client";

import { useState } from "react";

/* ---------------------------------------------------------------------- */
/* Darcula-ish syntax colors, matched to the Android Studio screenshot     */
/* ---------------------------------------------------------------------- */

const KW = "text-[#cf8e6d]"; // keyword: export, const, function, return
const FN = "text-[#57965c]"; // function / component calls
const TYPE = "text-[#5794d1]"; // types
const PARAM = "text-[#67d6ef]"; // object keys / params
const STR = "text-[#a5c261]"; // strings
const COM = "text-[#7a7e85] italic"; // comments
const MUT = "text-[#a9b7c6]"; // punctuation

type FileId = "home" | "about" | "skills" | "work" | "contact";

const FILE_META: Record<FileId, { label: string; dot: string; ext: string }> = {
  home: { label: "Home.tsx", dot: "#57965c", ext: "TSX" },
  about: { label: "About.tsx", dot: "#57965c", ext: "TSX" },
  skills: { label: "Skills.tsx", dot: "#57965c", ext: "TSX" },
  work: { label: "Work.tsx", dot: "#57965c", ext: "TSX" },
  contact: { label: "Contact.tsx", dot: "#57965c", ext: "TSX" },
};

/* ---------------------------------------------------------------------- */
/* Code — placeholder content, replace with real copy later                */
/* ---------------------------------------------------------------------- */

const CODE: Record<FileId, React.ReactNode[]> = {
  home: [
    <span key="0">
      <span className={KW}>export default function</span> <span className={FN}>Hero</span>
      <span className={MUT}>() {"{"}</span>
    </span>,
    <span key="1">
      {"  "}
      <span className={KW}>return</span> <span className={MUT}>{"{"}</span>
    </span>,
    <span key="2">
      {"    "}
      <span className={PARAM}>name</span>
      <span className={MUT}>: </span>
      <span className={STR}>'//array//'</span>
      <span className={MUT}>,</span>
    </span>,
    <span key="3">
      {"    "}
      <span className={PARAM}>tagline</span>
      <span className={MUT}>: </span>
      <span className={STR}>'[Add your one-line tagline here]'</span>
      <span className={MUT}>,</span>
    </span>,
    <span key="4">
      {"    "}
      <span className={PARAM}>status</span>
      <span className={MUT}>: </span>
      <span className={STR}>'[Add your availability status]'</span>
      <span className={MUT}>,</span>
    </span>,
    <span key="5">
      {"  "}
      <span className={MUT}>{"};"}</span>
    </span>,
    <span key="6">
      <span className={MUT}>{"}"}</span>
    </span>,
  ],

  about: [
    <span key="0" className={COM}>
      // TODO: write this
    </span>,
    <span key="1">
      <span className={KW}>export const</span> <span className={PARAM}>about</span>{" "}
      <span className={MUT}>= {"{"}</span>
    </span>,
    <span key="2">
      {"  "}
      <span className={PARAM}>roles</span>
      <span className={MUT}>: [</span>
    </span>,
    <span key="3">
      {"    "}
      <span className={STR}>'Full-Stack Developer'</span>
      <span className={MUT}>,</span>
    </span>,
    <span key="4">
      {"    "}
      <span className={STR}>'App Developer'</span>
      <span className={MUT}>,</span>
    </span>,
    <span key="5">
      {"    "}
      <span className={STR}>'Electrical Design'</span>
      <span className={MUT}>,</span>
    </span>,
    <span key="6">
      {"  "}
      <span className={MUT}>],</span>
    </span>,
    <span key="7">
      {"  "}
      <span className={PARAM}>bio</span>
      <span className={MUT}>: </span>
      <span className={STR}>`[Write a short bio here — what you build,</span>
    </span>,
    <span key="8">
      <span className={STR}>{"    how you think, what you're into.]`"}</span>
      <span className={MUT}>,</span>
    </span>,
    <span key="9">
      <span className={MUT}>{"};"}</span>
    </span>,
  ],

  skills: [
    <span key="0" className={COM}>
      // pinout — what I build
    </span>,
    <span key="1">
      <span className={KW}>export const</span> <span className={PARAM}>skills</span>{" "}
      <span className={MUT}>= [</span>
    </span>,
    ...["01", "02", "03"].flatMap((pin, i, arr) => [
      <span key={`o-${i}`}>
        {"  "}
        <span className={MUT}>{"{"}</span>
      </span>,
      <span key={`p-${i}`}>
        {"    "}
        <span className={PARAM}>pin</span>
        <span className={MUT}>: </span>
        <span className={STR}>'{pin}'</span>
        <span className={MUT}>,</span>
      </span>,
      <span key={`t-${i}`}>
        {"    "}
        <span className={PARAM}>title</span>
        <span className={MUT}>: </span>
        <span className={STR}>'[Category]'</span>
        <span className={MUT}>,</span>
      </span>,
      <span key={`s-${i}`}>
        {"    "}
        <span className={PARAM}>tools</span>
        <span className={MUT}>: [</span>
        <span className={STR}>'[Tool]'</span>
        <span className={MUT}>, </span>
        <span className={STR}>'[Tool]'</span>
        <span className={MUT}>],</span>
      </span>,
      <span key={`c-${i}`}>
        {"  "}
        <span className={MUT}>{i === arr.length - 1 ? "}" : "},"}</span>
      </span>,
    ]),
    <span key="end">
      <span className={MUT}>];</span>
    </span>,
  ],

  work: [
    <span key="0" className={COM}>
      // TODO: add real projects
    </span>,
    <span key="1">
      <span className={KW}>export const</span> <span className={PARAM}>work</span>{" "}
      <span className={MUT}>= [</span>
    </span>,
    ...[0, 1, 2].flatMap((i, _, arr) => [
      <span key={`o-${i}`}>
        {"  "}
        <span className={MUT}>{"{"}</span>
      </span>,
      <span key={`n-${i}`}>
        {"    "}
        <span className={PARAM}>name</span>
        <span className={MUT}>: </span>
        <span className={STR}>'[Project name]'</span>
        <span className={MUT}>,</span>
      </span>,
      <span key={`tag-${i}`}>
        {"    "}
        <span className={PARAM}>tag</span>
        <span className={MUT}>: </span>
        <span className={STR}>'[Type]'</span>
        <span className={MUT}>,</span>
      </span>,
      <span key={`d-${i}`}>
        {"    "}
        <span className={PARAM}>desc</span>
        <span className={MUT}>: </span>
        <span className={STR}>'[One-line description]'</span>
        <span className={MUT}>,</span>
      </span>,
      <span key={`c-${i}`}>
        {"  "}
        <span className={MUT}>{i === arr.length - 1 ? "}" : "},"}</span>
      </span>,
    ]),
    <span key="end">
      <span className={MUT}>];</span>
    </span>,
  ],

  contact: [
    <span key="0">
      <span className={KW}>export const</span> <span className={PARAM}>contact</span>{" "}
      <span className={MUT}>= {"{"}</span>
    </span>,
    <span key="1">
      {"  "}
      <span className={PARAM}>email</span>
      <span className={MUT}>: </span>
      <span className={STR}>'[you@example.com]'</span>
      <span className={MUT}>,</span>
    </span>,
    <span key="2">
      {"  "}
      <span className={PARAM}>github</span>
      <span className={MUT}>: </span>
      <span className={STR}>'https://github.com/ivanisgoodatcoding52'</span>
      <span className={MUT}>,</span>
    </span>,
    <span key="3">
      {"  "}
      <span className={PARAM}>twitter</span>
      <span className={MUT}>: </span>
      <span className={STR}>'https://x.com/unnameduserplus'</span>
      <span className={MUT}>,</span>
    </span>,
    <span key="4">
      {"  "}
      <span className={PARAM}>youtube</span>
      <span className={MUT}>: </span>
      <span className={STR}>'https://www.youtube.com/@rgcodesarray'</span>
      <span className={MUT}>,</span>
    </span>,
    <span key="5">
      <span className={MUT}>{"};"}</span>
    </span>,
  ],
};

/* ---------------------------------------------------------------------- */
/* Preview column — a Compose-preview-style rendering of the active file   */
/* ---------------------------------------------------------------------- */

function Preview({ id }: { id: FileId }) {
  const chip = (text: string) => (
    <span className="rounded-full border border-[#393b40] bg-[#2b2d30] px-2.5 py-1 text-[10px] text-[#a9b7c6]">
      {text}
    </span>
  );

  switch (id) {
    case "home":
      return (
        <div className="flex h-full flex-col items-center justify-center gap-3 bg-[#141416] p-6 text-center">
          <p className="font-mono text-2xl font-black tracking-tighter text-white">//array//</p>
          <p className="max-w-[14rem] text-xs text-[#9aa0a6]">
            [Add your one-line tagline here]
          </p>
          {chip("[availability status]")}
          <span className="mt-2 rounded-full bg-[#57965c] px-5 py-1.5 text-[11px] font-bold text-[#141416]">
            Let&apos;s go
          </span>
        </div>
      );
    case "about":
      return (
        <div className="flex h-full flex-col justify-center gap-4 bg-[#141416] p-6">
          <div className="flex flex-wrap gap-1.5">
            {["Full-Stack Developer", "App Developer", "Electrical Design"].map((r) => (
              <span key={r}>{chip(r)}</span>
            ))}
          </div>
          <p className="text-xs leading-relaxed text-[#9aa0a6]">
            [Write a short bio here — what you build, how you think, what
            you&apos;re into.]
          </p>
        </div>
      );
    case "skills":
      return (
        <div className="flex h-full flex-col justify-center gap-3 bg-[#141416] p-6">
          {["01", "02", "03"].map((pin) => (
            <div key={pin} className="rounded-lg border border-[#393b40] p-3">
              <p className="mb-1 font-mono text-[10px] text-[#67d6ef]">PIN {pin}</p>
              <p className="mb-1 text-xs font-bold text-white">[Category]</p>
              <div className="flex gap-1.5">
                {chip("[Tool]")}
                {chip("[Tool]")}
              </div>
            </div>
          ))}
        </div>
      );
    case "work":
      return (
        <div className="flex h-full flex-col justify-center gap-3 bg-[#141416] p-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg border border-[#393b40] p-3">
              <p className="mb-1 font-mono text-[10px] text-[#67d6ef]">[Type]</p>
              <p className="mb-1 text-xs font-bold text-white">[Project name]</p>
              <p className="text-[11px] text-[#9aa0a6]">[One-line description]</p>
            </div>
          ))}
        </div>
      );
    case "contact":
      return (
        <div className="flex h-full flex-col items-center justify-center gap-4 bg-[#141416] p-6 text-center">
          <p className="text-sm font-bold text-white">Let&apos;s build something.</p>
          <span className="text-xs text-[#67d6ef]">[you@example.com]</span>
          <div className="flex gap-2">
            {chip("GitHub")}
            {chip("Twitter")}
            {chip("YouTube")}
          </div>
        </div>
      );
  }
}

/* ---------------------------------------------------------------------- */
/* Small pieces                                                            */
/* ---------------------------------------------------------------------- */

function Line({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex px-3 leading-6 hover:bg-white/[0.03]">
      <span className="w-8 shrink-0 select-none pr-4 text-right text-[#5a5d63]">{n}</span>
      <span className="whitespace-pre-wrap break-words">{children}</span>
    </div>
  );
}

const CHIPS: { label: string; sub: string; target: FileId }[] = [
  { label: "About me", sub: "[who you are, in a sentence]", target: "about" },
  { label: "My skills", sub: "[the tools you reach for]", target: "skills" },
  { label: "Selected work", sub: "[projects worth showing]", target: "work" },
  { label: "Get in touch", sub: "[the fastest way to reach you]", target: "contact" },
];

/* ---------------------------------------------------------------------- */
/* Page                                                                     */
/* ---------------------------------------------------------------------- */

export default function Home() {
  const [activeTab, setActiveTab] = useState<FileId>("home");
  const [openTabs, setOpenTabs] = useState<FileId[]>([
    "home",
    "about",
    "skills",
    "work",
    "contact",
  ]);
  const [treeOpen, setTreeOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(true);
  const [assistantOpen, setAssistantOpen] = useState(true);

  const openFile = (id: FileId) => {
    setOpenTabs((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setActiveTab(id);
    setTreeOpen(false);
  };

  const closeTab = (id: FileId, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenTabs((prev) => {
      const next = prev.filter((t) => t !== id);
      if (activeTab === id) setActiveTab(next.length ? next[next.length - 1] : "home");
      return next.length ? next : ["home"];
    });
  };

  const railIcon = (label: string, glyph: string) => (
    <span
      title={label}
      className="flex h-8 w-8 items-center justify-center rounded text-[#a9b7c6]/60 hover:bg-white/10 hover:text-[#a9b7c6]"
    >
      {glyph}
    </span>
  );

  return (
    <main className="flex h-screen flex-col overflow-hidden bg-[#1e1f22] font-mono text-[13px] text-[#a9b7c6]">
      {/* toolbar */}
      <div className="flex shrink-0 items-center gap-4 border-b border-[#393b40] bg-[#2b2d30] px-3 py-1.5">
        <button
          onClick={() => setTreeOpen((v) => !v)}
          className="rounded p-1 text-[#a9b7c6] hover:bg-white/10"
          title="Project files"
        >
          ☰
        </button>
        <span className="flex items-center gap-1.5 text-xs text-[#e2e4e9]">
          🤖 <span className="font-semibold">array</span> ▾
        </span>
        <span className="hidden items-center gap-1.5 text-xs text-[#9aa0a6] sm:flex">
          🌿 main ▾
        </span>
        <span className="hidden items-center gap-1.5 text-xs text-[#9aa0a6] md:flex">
          site ▾
        </span>
        <span className="text-[#57965c]">▶</span>
        <span className="text-[#9aa0a6]">🐞</span>
        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={() => setPreviewOpen((v) => !v)}
            className="hidden rounded px-2 py-0.5 text-[11px] text-[#9aa0a6] hover:bg-white/10 lg:block"
          >
            ▥ Preview
          </button>
          <button
            onClick={() => setAssistantOpen((v) => !v)}
            className="rounded px-2 py-0.5 text-[11px] text-[#9aa0a6] hover:bg-white/10"
          >
            ✦ Assistant
          </button>
          <span className="h-6 w-6 rounded-full bg-[#57965c]" />
        </div>
      </div>

      <div className="relative flex flex-1 overflow-hidden">
        {/* left icon rail */}
        <div className="flex w-11 shrink-0 flex-col items-center gap-1 border-r border-[#393b40] bg-[#1e1f22] py-2">
          {railIcon("Files", "📁")}
          {railIcon("Search", "🔍")}
          {railIcon("Structure", "≡")}
          {railIcon("Run", "▶")}
          {railIcon("Debug", "🐞")}
          {railIcon("Git", "⎇")}
        </div>

        {/* file tree drawer */}
        {treeOpen && (
          <>
            <div
              className="fixed inset-0 z-20 bg-black/50"
              onClick={() => setTreeOpen(false)}
            />
            <div className="absolute left-11 top-0 z-30 h-full w-56 border-r border-[#393b40] bg-[#1e1f22] p-2">
              <p className="mb-1 px-1 text-[11px] uppercase tracking-wide text-[#6f737a]">
                array-portfolio
              </p>
              {(Object.keys(FILE_META) as FileId[]).map((id) => (
                <button
                  key={id}
                  onClick={() => openFile(id)}
                  className={`flex w-full items-center gap-2 rounded px-2 py-1 text-left text-xs ${
                    activeTab === id ? "bg-[#3a3d41] text-white" : "hover:bg-white/5"
                  }`}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: FILE_META[id].dot }}
                  />
                  {FILE_META[id].label}
                </button>
              ))}
            </div>
          </>
        )}

        {/* editor column */}
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="flex shrink-0 overflow-x-auto border-b border-[#393b40] bg-[#2b2d30]">
            {openTabs.map((id) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`group flex shrink-0 items-center gap-2 border-r border-[#393b40] px-3 py-2 text-xs ${
                  activeTab === id
                    ? "border-t-2 border-t-[#3574f0] bg-[#1e1f22] text-white"
                    : "border-t-2 border-t-transparent text-[#9aa0a6] hover:bg-white/5"
                }`}
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: FILE_META[id].dot }}
                />
                {FILE_META[id].label}
                <span
                  onClick={(e) => closeTab(id, e)}
                  className="ml-1 rounded px-1 text-[#9aa0a6] hover:bg-white/20 hover:text-white"
                >
                  ×
                </span>
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-auto py-3">
            {CODE[activeTab].map((line, i) => (
              <Line key={i} n={i + 1}>
                {line}
              </Line>
            ))}
          </div>
        </div>

        {/* preview column */}
        {previewOpen && (
          <div className="hidden w-64 shrink-0 flex-col border-l border-[#393b40] bg-[#232426] lg:flex">
            <div className="flex items-center justify-between border-b border-[#393b40] px-3 py-2 text-[11px] text-[#9aa0a6]">
              <span>{FILE_META[activeTab].label.replace(".tsx", "Preview")}</span>
              <span className="text-[#57965c]">✓ Up-to-date</span>
            </div>
            <div className="flex-1 overflow-auto p-3">
              <div className="mx-auto w-full max-w-[13rem] overflow-hidden rounded-2xl border border-[#393b40]">
                <Preview id={activeTab} />
              </div>
            </div>
          </div>
        )}

        {/* assistant panel */}
        {assistantOpen && (
          <div className="absolute right-0 z-10 flex h-full w-full flex-col border-l border-[#393b40] bg-[#1e1f22] sm:w-80 md:static md:w-80">
            <div className="flex items-center gap-4 border-b border-[#393b40] px-4 py-2 text-xs">
              <span className="border-b-2 border-[#3574f0] pb-1.5 font-semibold text-white">
                Guide
              </span>
              <span className="pb-1.5 text-[#9aa0a6]">Chat</span>
              <button
                onClick={() => setAssistantOpen(false)}
                className="ml-auto text-[#9aa0a6] hover:text-white md:hidden"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-auto p-5">
              <p className="bg-gradient-to-r from-[#3574f0] to-[#8a7ffb] bg-clip-text text-2xl font-bold leading-tight text-transparent">
                Hey, welcome.
              </p>
              <p className="mt-2 text-sm text-[#9aa0a6]">What do you want to see?</p>
              <div className="mt-5 grid grid-cols-1 gap-2.5">
                {CHIPS.map((c) => (
                  <button
                    key={c.target}
                    onClick={() => openFile(c.target)}
                    className="rounded-lg border border-[#5c4dd6]/50 bg-[#2b2d30] px-3 py-2.5 text-left hover:border-[#8a7ffb] hover:bg-[#2f3236]"
                  >
                    <p className="text-xs font-semibold text-[#c9c2ff]">{c.label}</p>
                    <p className="mt-0.5 text-[11px] text-[#8a8f96]">{c.sub}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="shrink-0 border-t border-[#393b40] p-3">
              <div className="rounded-lg border border-[#393b40] bg-[#2b2d30] px-3 py-2 text-[11px] text-[#6f737a]">
                Ask about this portfolio…
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[10px] text-[#6f737a]">
                <span>array v1.0</span>
                <span>▷</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* status bar */}
      <div className="flex shrink-0 items-center gap-1.5 border-t border-[#393b40] bg-[#2b2d30] px-3 py-1 text-[11px] text-[#9aa0a6]">
        <span>array-portfolio</span>
        <span>›</span>
        <span>src</span>
        <span>›</span>
        <span className="text-[#e2e4e9]">{FILE_META[activeTab].label}</span>
        <span className="ml-auto hidden sm:inline">{FILE_META[activeTab].ext}</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span>Ln {CODE[activeTab].length}, Col 1</span>
      </div>
    </main>
  );
}
