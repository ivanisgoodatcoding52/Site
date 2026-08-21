"use client";

import { useState } from "react";
import { JetBrains_Mono, Roboto } from "next/font/google";

/* ---------------------------------------------------------------------- */
/* Fonts — JetBrains Mono is Android Studio's actual default editor font;  */
/* Roboto is Google's own UI face, used for anything meant to read as      */
/* rendered content rather than source.                                    */
/* ---------------------------------------------------------------------- */

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans",
});

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
const HEADER = "text-[#5794d1] font-bold"; // markdown headings
const INLINE = "rounded bg-[#2b2d30] px-1 text-[#e2b273]"; // inline `code`

function Code({ children }: { children: React.ReactNode }) {
  return <span className={INLINE}>{children}</span>;
}

type FileId = "home" | "about" | "skills" | "work" | "contact";

const FILE_META: Record<FileId, { label: string; dot: string; ext: string }> = {
  home: { label: "Home.tsx", dot: "#57965c", ext: "TSX" },
  about: { label: "About.tsx", dot: "#57965c", ext: "TSX" },
  skills: { label: "SKILLS.md", dot: "#519aba", ext: "MD" },
  work: { label: "WORK.md", dot: "#519aba", ext: "MD" },
  contact: { label: "Contact.tsx", dot: "#57965c", ext: "TSX" },
};

/* ---------------------------------------------------------------------- */
/* Line data — { text, block } where block=true marks a fenced code line   */
/* so it gets an inset background like a real markdown code-fence render.  */
/* ---------------------------------------------------------------------- */

type LineData = { text: React.ReactNode; block?: boolean };
const L = (text: React.ReactNode, block = false): LineData => ({ text, block });

const CODE: Record<FileId, LineData[]> = {
  home: [
    L(
      <span>
        <span className={KW}>export default function</span> <span className={FN}>Hero</span>
        <span className={MUT}>() {"{"}</span>
      </span>
    ),
    L(
      <span>
        {"  "}
        <span className={KW}>return</span> <span className={MUT}>{"{"}</span>
      </span>
    ),
    L(
      <span>
        {"    "}
        <span className={PARAM}>name</span>
        <span className={MUT}>: </span>
        <span className={STR}>'[Your Name]'</span>
        <span className={MUT}>,</span>
      </span>
    ),
    L(
      <span>
        {"    "}
        <span className={PARAM}>tagline</span>
        <span className={MUT}>: </span>
        <span className={STR}>'[Add your one-line tagline here]'</span>
        <span className={MUT}>,</span>
      </span>
    ),
    L(
      <span>
        {"    "}
        <span className={PARAM}>status</span>
        <span className={MUT}>: </span>
        <span className={STR}>'[Add your availability status]'</span>
        <span className={MUT}>,</span>
      </span>
    ),
    L(
      <span>
        {"  "}
        <span className={MUT}>{"};"}</span>
      </span>
    ),
    L(<span className={MUT}>{"}"}</span>),
  ],

  about: [
    L(<span className={COM}>// TODO: write this</span>),
    L(
      <span>
        <span className={KW}>export const</span> <span className={PARAM}>about</span>{" "}
        <span className={MUT}>= {"{"}</span>
      </span>
    ),
    L(
      <span>
        {"  "}
        <span className={PARAM}>roles</span>
        <span className={MUT}>: [</span>
      </span>
    ),
    L(
      <span>
        {"    "}
        <span className={STR}>'Full-Stack Developer'</span>
        <span className={MUT}>,</span>
      </span>
    ),
    L(
      <span>
        {"    "}
        <span className={STR}>'App Developer'</span>
        <span className={MUT}>,</span>
      </span>
    ),
    L(
      <span>
        {"    "}
        <span className={STR}>'Electrical Design'</span>
        <span className={MUT}>,</span>
      </span>
    ),
    L(
      <span>
        {"  "}
        <span className={MUT}>],</span>
      </span>
    ),
    L(
      <span>
        {"  "}
        <span className={PARAM}>bio</span>
        <span className={MUT}>: </span>
        <span className={STR}>`[Write a short bio here — what you build,</span>
      </span>
    ),
    L(
      <span>
        <span className={STR}>{"    how you think, what you're into.]`"}</span>
        <span className={MUT}>,</span>
      </span>
    ),
    L(<span className={MUT}>{"};"}</span>),
  ],

  // ---- SKILLS.md — real markdown source, with a genuine working snippet ----
  skills: [
    L(
      <span>
        <span className={MUT}># </span>
        <span className={HEADER}>Skills</span>
      </span>
    ),
    L(""),
    L(
      <span className="text-[#a9b7c6]">
        Pin-mapped by discipline. Swap the placeholders below for what you
        actually use.
      </span>
    ),
    L(""),
    L(
      <span>
        <span className={MUT}>## </span>
        <span className={HEADER}>01 · Software</span>
      </span>
    ),
    L(
      <span>
        <Code>[Tool]</Code> <Code>[Tool]</Code> <Code>[Tool]</Code>
      </span>
    ),
    L(""),
    L(
      <span>
        <span className={MUT}>## </span>
        <span className={HEADER}>02 · Applications</span>
      </span>
    ),
    L(
      <span>
        <Code>[Tool]</Code> <Code>[Tool]</Code>
      </span>
    ),
    L(""),
    L(
      <span>
        <span className={MUT}>## </span>
        <span className={HEADER}>03 · Electrical Design</span>
      </span>
    ),
    L(
      <span>
        <Code>[Tool]</Code> <Code>[Tool]</Code>
      </span>
    ),
    L(""),
    L(
      <span className="text-[#a9b7c6]">
        A quick taste of how I actually write code, not just a buzzword list:
      </span>
    ),
    L(""),
    L(<span className="text-[#5a5d63]">```ts</span>, true),
    L(<span className={COM}>{"// debounce any callback — I reach for this constantly"}</span>, true),
    L(
      <span>
        <span className={KW}>export function</span> <span className={FN}>debounce</span>
        <span className={MUT}>{"<T extends (...args: any[]) => void>("}</span>
      </span>,
      true
    ),
    L(
      <span>
        {"  "}
        <span className={PARAM}>fn</span>
        <span className={MUT}>: </span>
        <span className={TYPE}>T</span>
        <span className={MUT}>,</span>
      </span>,
      true
    ),
    L(
      <span>
        {"  "}
        <span className={PARAM}>delay</span>
        <span className={MUT}> = </span>
        <span className="text-[#6897bb]">300</span>
      </span>,
      true
    ),
    L(<span className={MUT}>{") {"}</span>, true),
    L(
      <span>
        {"  "}
        <span className={KW}>let</span> <span className={PARAM}>timer</span>
        <span className={MUT}>: </span>
        <span className={TYPE}>ReturnType</span>
        <span className={MUT}>{"<typeof setTimeout>;"}</span>
      </span>,
      true
    ),
    L(
      <span>
        {"  "}
        <span className={KW}>return</span> <span className={MUT}>{"(...args: Parameters<T>) => {"}</span>
      </span>,
      true
    ),
    L(
      <span>
        {"    "}
        <span className={FN}>clearTimeout</span>
        <span className={MUT}>(timer);</span>
      </span>,
      true
    ),
    L(
      <span>
        {"    "}
        <span className={PARAM}>timer</span> <span className={MUT}>= </span>
        <span className={FN}>setTimeout</span>
        <span className={MUT}>{"(() => fn(...args), delay);"}</span>
      </span>,
      true
    ),
    L(
      <span>
        {"  "}
        <span className={MUT}>{"};"}</span>
      </span>,
      true
    ),
    L(<span className={MUT}>{"}"}</span>, true),
    L(<span className="text-[#5a5d63]">```</span>, true),
  ],

  // ---- WORK.md — real markdown source, with a genuine working snippet ----
  work: [
    L(
      <span>
        <span className={MUT}># </span>
        <span className={HEADER}>Selected Work</span>
      </span>
    ),
    L(""),
    L(
      <span className={COM}>
        {"> [Add 2–3 real projects here — case studies, not just links.]"}
      </span>
    ),
    L(""),
    L(
      <span>
        <span className={MUT}>## </span>
        <span className={HEADER}>[Project name]</span>
      </span>
    ),
    L(
      <span>
        <Code>[Type]</Code> <span className="text-[#a9b7c6]">— [one-line description]</span>
      </span>
    ),
    L(""),
    L(<span className="text-[#5a5d63]">```tsx</span>, true),
    L(<span className={COM}>{"// example: the core hook behind [Project name]"}</span>, true),
    L(
      <span>
        <span className={KW}>function</span> <span className={FN}>useLiveData</span>
        <span className={MUT}>(</span>
        <span className={PARAM}>url</span>
        <span className={MUT}>: </span>
        <span className={TYPE}>string</span>
        <span className={MUT}>) {"{"}</span>
      </span>,
      true
    ),
    L(
      <span>
        {"  "}
        <span className={KW}>const</span> <span className={MUT}>[</span>
        <span className={PARAM}>data</span>
        <span className={MUT}>, </span>
        <span className={PARAM}>setData</span>
        <span className={MUT}>] = </span>
        <span className={FN}>useState</span>
        <span className={MUT}>(</span>
        <span className={KW}>null</span>
        <span className={MUT}>);</span>
      </span>,
      true
    ),
    L(
      <span>
        {"  "}
        <span className={FN}>useEffect</span>
        <span className={MUT}>(() {"=> {"}</span>
      </span>,
      true
    ),
    L(
      <span>
        {"    "}
        <span className={KW}>const</span> <span className={PARAM}>es</span>
        <span className={MUT}> = </span>
        <span className={KW}>new</span> <span className={TYPE}>EventSource</span>
        <span className={MUT}>(url);</span>
      </span>,
      true
    ),
    L(
      <span>
        {"    "}
        <span className={PARAM}>es</span>
        <span className={MUT}>.onmessage = </span>
        <span className={MUT}>(</span>
        <span className={PARAM}>e</span>
        <span className={MUT}>) {"=> "}</span>
        <span className={FN}>setData</span>
        <span className={MUT}>(</span>
        <span className={TYPE}>JSON</span>
        <span className={MUT}>.</span>
        <span className={FN}>parse</span>
        <span className={MUT}>(e.data));</span>
      </span>,
      true
    ),
    L(
      <span>
        {"    "}
        <span className={KW}>return</span> <span className={MUT}>() {"=> "}</span>
        <span className={PARAM}>es</span>
        <span className={MUT}>.</span>
        <span className={FN}>close</span>
        <span className={MUT}>();</span>
      </span>,
      true
    ),
    L(
      <span>
        {"  "}
        <span className={MUT}>{"}, [url]);"}</span>
      </span>,
      true
    ),
    L(
      <span>
        {"  "}
        <span className={KW}>return</span> <span className={PARAM}>data</span>
        <span className={MUT}>;</span>
      </span>,
      true
    ),
    L(<span className={MUT}>{"}"}</span>, true),
    L(<span className="text-[#5a5d63]">```</span>, true),
    L(""),
    L(
      <span>
        <span className={MUT}>## </span>
        <span className={HEADER}>[Project name]</span>
      </span>
    ),
    L(
      <span>
        <Code>[Type]</Code> <span className="text-[#a9b7c6]">— [one-line description]</span>
      </span>
    ),
    L(""),
    L(
      <span>
        <span className={MUT}>## </span>
        <span className={HEADER}>[Project name]</span>
      </span>
    ),
    L(
      <span>
        <Code>[Type]</Code> <span className="text-[#a9b7c6]">— [one-line description]</span>
      </span>
    ),
  ],

  contact: [
    L(
      <span>
        <span className={KW}>export const</span> <span className={PARAM}>contact</span>{" "}
        <span className={MUT}>= {"{"}</span>
      </span>
    ),
    L(
      <span>
        {"  "}
        <span className={PARAM}>email</span>
        <span className={MUT}>: </span>
        <span className={STR}>'[you@example.com]'</span>
        <span className={MUT}>,</span>
      </span>
    ),
    L(
      <span>
        {"  "}
        <span className={PARAM}>github</span>
        <span className={MUT}>: </span>
        <span className={STR}>'https://github.com/ivanisgoodatcoding52'</span>
        <span className={MUT}>,</span>
      </span>
    ),
    L(
      <span>
        {"  "}
        <span className={PARAM}>twitter</span>
        <span className={MUT}>: </span>
        <span className={STR}>'https://x.com/unnameduserplus'</span>
        <span className={MUT}>,</span>
      </span>
    ),
    L(
      <span>
        {"  "}
        <span className={PARAM}>youtube</span>
        <span className={MUT}>: </span>
        <span className={STR}>'https://www.youtube.com/@rgcodesarray'</span>
        <span className={MUT}>,</span>
      </span>
    ),
    L(<span className={MUT}>{"};"}</span>),
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
          <p className="text-lg font-black tracking-tight text-white">[Your Name]</p>
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
              <p className="mb-1 text-[10px] text-[#67d6ef]">PIN {pin}</p>
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
              <p className="mb-1 text-[10px] text-[#67d6ef]">[Type]</p>
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

function Line({ n, data }: { n: number; data: LineData }) {
  return (
    <div
      className={`flex px-3 leading-6 ${
        data.block ? "bg-[#1a1b1d]" : "hover:bg-white/[0.03]"
      }`}
    >
      <span className="w-8 shrink-0 select-none pr-4 text-right text-[#5a5d63]">{n}</span>
      <span className="whitespace-pre-wrap break-words">{data.text}</span>
    </div>
  );
}

const BOOKMARKS: { key: string; sub: string; target: FileId }[] = [
  { key: "F1", sub: "[who you are, in a sentence]", target: "about" },
  { key: "F2", sub: "[the tools you reach for]", target: "skills" },
  { key: "F3", sub: "[projects worth showing]", target: "work" },
  { key: "F4", sub: "[the fastest way to reach you]", target: "contact" },
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
  const [bookmarksOpen, setBookmarksOpen] = useState(true);

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
    <main
      className={`${jetbrainsMono.variable} ${roboto.variable} flex h-screen flex-col overflow-hidden bg-[#1e1f22] text-[13px] text-[#a9b7c6]`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
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
          {"</>"} <span className="font-semibold">portfolio</span> ▾
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
            onClick={() => setBookmarksOpen((v) => !v)}
            className="rounded px-2 py-0.5 text-[11px] text-[#9aa0a6] hover:bg-white/10"
          >
            🔖 Bookmarks
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
                portfolio
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
            {CODE[activeTab].map((data, i) => (
              <Line key={i} n={i + 1} data={data} />
            ))}
          </div>
        </div>

        {/* preview column */}
        {previewOpen && (
          <div
            className="hidden w-64 shrink-0 flex-col border-l border-[#393b40] bg-[#232426] lg:flex"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <div className="flex items-center justify-between border-b border-[#393b40] px-3 py-2 text-[11px] text-[#9aa0a6]">
              <span>{FILE_META[activeTab].label.replace(/\.(tsx|md)/, "Preview")}</span>
              <span className="text-[#57965c]">✓ Up-to-date</span>
            </div>
            <div className="flex-1 overflow-auto p-3">
              <div className="mx-auto w-full max-w-[13rem] overflow-hidden rounded-2xl border border-[#393b40]">
                <Preview id={activeTab} />
              </div>
            </div>
          </div>
        )}

        {/* bookmarks panel — a real IDE tool window, not a chat assistant */}
        {bookmarksOpen && (
          <div
            className="absolute right-0 z-10 flex h-full w-full flex-col border-l border-[#393b40] bg-[#1e1f22] sm:w-72 md:static md:w-72"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <div className="flex items-center border-b border-[#393b40] px-4 py-2 text-xs">
              <span className="font-semibold text-white">Bookmarks</span>
              <button
                onClick={() => setBookmarksOpen(false)}
                className="ml-auto text-[#9aa0a6] hover:text-white md:hidden"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-auto p-2">
              {BOOKMARKS.map((b) => (
                <button
                  key={b.target}
                  onClick={() => openFile(b.target)}
                  className="flex w-full items-center gap-3 rounded-md px-2 py-2.5 text-left hover:bg-white/5"
                >
                  <span className="flex h-6 w-8 shrink-0 items-center justify-center rounded border border-[#393b40] bg-[#2b2d30] text-[10px] font-semibold text-[#9aa0a6]">
                    {b.key}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-xs font-medium text-[#e2e4e9]">
                      {FILE_META[b.target].label}
                    </span>
                    <span className="block truncate text-[11px] text-[#8a8f96]">{b.sub}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* status bar */}
      <div className="flex shrink-0 items-center gap-1.5 border-t border-[#393b40] bg-[#2b2d30] px-3 py-1 text-[11px] text-[#9aa0a6]">
        <span>portfolio</span>
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
