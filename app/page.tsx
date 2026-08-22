"use client";

import { useRef, useState } from "react";
import { JetBrains_Mono, Roboto } from "next/font/google";
import Image from "next/image";

/* ---------------------------------------------------------------------- */
/* Fonts                                                                    */
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
/* Icons — real Google Material Icons (not emoji)                          */
/* ---------------------------------------------------------------------- */

function MaterialIconsFont() {
  return (
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  );
}

function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`material-icons select-none leading-none ${className}`}
      style={{ fontSize: size }}
      aria-hidden="true"
      translate="no"
    >
      {name}
    </span>
  );
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3574f0] focus-visible:ring-offset-1 focus-visible:ring-offset-[#1e1f22]";

/* ---------------------------------------------------------------------- */
/* Darcula-ish syntax colors                                               */
/* ---------------------------------------------------------------------- */

const KW = "text-[#cf8e6d]";
const FN = "text-[#57965c]";
const TYPE = "text-[#5794d1]";
const PARAM = "text-[#67d6ef]";
const STR = "text-[#a5c261]";
const COM = "text-[#7a7e85] italic";
const MUT = "text-[#a9b7c6]";
const HEADER = "text-[#5794d1] font-bold";
const INLINE = "rounded bg-[#2b2d30] px-1 text-[#e2b273]";

function Code({ children }: { children: React.ReactNode }) {
  return <span className={INLINE}>{children}</span>;
}

type FileId = "home" | "about" | "skills" | "work" | "contact";

const FILE_META: Record<FileId, { label: string; ext: string }> = {
  home: { label: "Home.tsx", ext: "TSX" },
  about: { label: "About.tsx", ext: "TSX" },
  skills: { label: "SKILLS.md", ext: "MD" },
  work: { label: "WORK.md", ext: "MD" },
  contact: { label: "Contact.tsx", ext: "TSX" },
};

/** Set this to a real file in /public (e.g. "/profile.jpg") once you have one. */
const PROFILE_IMAGE: { src: string; alt: string } | null = null;

/* ---------------------------------------------------------------------- */
/* Line data                                                                */
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
        <span className={PARAM}>photo</span>
        <span className={MUT}>: </span>
        <span className={STR}>'{PROFILE_IMAGE?.src ?? "[/public/profile.jpg]"}'</span>
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

  skills: [
    L(<span className={COM}>{"// pinout — what I build"}</span>),
    L(
      <span>
        <span className={KW}>export const</span> <span className={PARAM}>skills</span>{" "}
        <span className={MUT}>= [</span>
      </span>
    ),
    ...["01", "02", "03"].flatMap((pin, i, arr) => [
      L(
        <span>
          {"  "}
          <span className={MUT}>{"{"}</span>
        </span>
      ),
      L(
        <span>
          {"    "}
          <span className={PARAM}>pin</span>
          <span className={MUT}>: </span>
          <span className={STR}>'{pin}'</span>
          <span className={MUT}>,</span>
        </span>
      ),
      L(
        <span>
          {"    "}
          <span className={PARAM}>title</span>
          <span className={MUT}>: </span>
          <span className={STR}>'[Category]'</span>
          <span className={MUT}>,</span>
        </span>
      ),
      L(
        <span>
          {"    "}
          <span className={PARAM}>tools</span>
          <span className={MUT}>: [</span>
          <span className={STR}>'[Tool]'</span>
          <span className={MUT}>, </span>
          <span className={STR}>'[Tool]'</span>
          <span className={MUT}>],</span>
        </span>
      ),
      L(
        <span>
          {"  "}
          <span className={MUT}>{i === arr.length - 1 ? "}" : "},"}</span>
        </span>
      ),
    ]),
    L(<span className={MUT}>];</span>),
  ],

  work: [
    L(<span className={COM}>{"// TODO: add real projects — see /projects"}</span>),
    L(
      <span>
        <span className={KW}>export const</span> <span className={PARAM}>work</span>{" "}
        <span className={MUT}>= [</span>
      </span>
    ),
    ...[0, 1, 2].flatMap((i, _, arr) => [
      L(
        <span>
          {"  "}
          <span className={MUT}>{"{"}</span>
        </span>
      ),
      L(
        <span>
          {"    "}
          <span className={PARAM}>name</span>
          <span className={MUT}>: </span>
          <span className={STR}>'[Project name]'</span>
          <span className={MUT}>,</span>
        </span>
      ),
      L(
        <span>
          {"    "}
          <span className={PARAM}>tag</span>
          <span className={MUT}>: </span>
          <span className={STR}>'[Type]'</span>
          <span className={MUT}>,</span>
        </span>
      ),
      L(
        <span>
          {"    "}
          <span className={PARAM}>desc</span>
          <span className={MUT}>: </span>
          <span className={STR}>'[One-line description]'</span>
          <span className={MUT}>,</span>
        </span>
      ),
      L(
        <span>
          {"  "}
          <span className={MUT}>{i === arr.length - 1 ? "}" : "},"}</span>
        </span>
      ),
    ]),
    L(<span className={MUT}>];</span>),
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
/* Preview column                                                           */
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
        <div className="flex h-full flex-col bg-[#141416]">
          {PROFILE_IMAGE ? (
            <div className="relative aspect-square w-full overflow-hidden bg-[#0d0d0e]">
              <Image
                src={PROFILE_IMAGE.src}
                alt={PROFILE_IMAGE.alt}
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-square w-full flex-col items-center justify-center gap-1 border-b border-[#393b40] bg-[#0d0d0e] text-[#5a5d63]">
              <Icon name="add_a_photo" size={22} />
              <span className="px-2 text-center text-[10px]">[Add /public/profile.jpg]</span>
            </div>
          )}
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="text-lg font-black tracking-tight text-white">[Your Name]</p>
            <p className="max-w-[14rem] text-xs text-[#9aa0a6]">
              [Add your one-line tagline here]
            </p>
            {chip("[availability status]")}
            <span className="mt-2 rounded-full bg-[#57965c] px-5 py-1.5 text-[11px] font-bold text-[#141416]">
              Let&apos;s go
            </span>
          </div>
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

function Crumb() {
  return <Icon name="chevron_right" size={14} className="text-[#5a5d63]" />;
}

const BOOKMARKS: { sub: string; target: FileId }[] = [
  { sub: "[who you are, in a sentence]", target: "about" },
  { sub: "[the tools you reach for]", target: "skills" },
  { sub: "[projects worth showing]", target: "work" },
  { sub: "[the fastest way to reach you]", target: "contact" },
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

  const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const openFile = (id: FileId) => {
    setOpenTabs((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setActiveTab(id);
    setTreeOpen(false);
  };

  const closeTab = (id: FileId, e: React.SyntheticEvent) => {
    e.stopPropagation();
    setOpenTabs((prev) => {
      const next = prev.filter((t) => t !== id);
      if (activeTab === id) setActiveTab(next.length ? next[next.length - 1] : "home");
      return next.length ? next : ["home"];
    });
  };

  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;
    if (e.key === "ArrowRight") nextIndex = (index + 1) % openTabs.length;
    else if (e.key === "ArrowLeft") nextIndex = (index - 1 + openTabs.length) % openTabs.length;
    else if (e.key === "Home") nextIndex = 0;
    else if (e.key === "End") nextIndex = openTabs.length - 1;
    else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveTab(openTabs[index]);
      return;
    }
    if (nextIndex !== null) {
      e.preventDefault();
      const nextId = openTabs[nextIndex];
      setActiveTab(nextId);
      tabRefs.current[nextId]?.focus();
    }
  };

  const railIcon = (label: string, iconName: string) => (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`flex h-8 w-8 items-center justify-center rounded text-[#a9b7c6]/60 hover:bg-white/10 hover:text-[#a9b7c6] ${focusRing}`}
    >
      <Icon name={iconName} size={19} />
    </button>
  );

  return (
    <main
      className={`${jetbrainsMono.variable} ${roboto.variable} flex h-screen flex-col overflow-hidden bg-[#1e1f22] text-[13px] text-[#a9b7c6]`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <MaterialIconsFont />

      {/* toolbar */}
      <div className="flex shrink-0 items-center gap-4 border-b border-[#393b40] bg-[#2b2d30] px-3 py-1.5">
        <button
          onClick={() => setTreeOpen((v) => !v)}
          className={`rounded p-1 text-[#a9b7c6] hover:bg-white/10 ${focusRing}`}
          aria-label={treeOpen ? "Close project files" : "Open project files"}
          aria-expanded={treeOpen}
        >
          <Icon name="menu" size={20} />
        </button>
        <span className="flex items-center gap-1.5 text-xs text-[#e2e4e9]">
          <Icon name="code" size={16} />
          <span className="font-semibold">portfolio</span>
          <Icon name="arrow_drop_down" size={16} className="text-[#9aa0a6]" />
        </span>
        <span className="hidden items-center gap-1.5 text-xs text-[#9aa0a6] sm:flex">
          <Icon name="call_split" size={16} /> main
          <Icon name="arrow_drop_down" size={16} />
        </span>
        <span className="hidden items-center gap-1.5 text-xs text-[#9aa0a6] md:flex">
          site <Icon name="arrow_drop_down" size={16} />
        </span>
        <Icon name="play_arrow" size={18} className="text-[#57965c]" />
        <Icon name="bug_report" size={18} className="text-[#9aa0a6]" />
        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={() => setPreviewOpen((v) => !v)}
            aria-pressed={previewOpen}
            className={`hidden items-center gap-1 rounded px-2 py-0.5 text-[11px] text-[#9aa0a6] hover:bg-white/10 lg:flex ${focusRing}`}
          >
            <Icon name="smartphone" size={16} /> Preview
          </button>
          <button
            onClick={() => setBookmarksOpen((v) => !v)}
            aria-pressed={bookmarksOpen}
            className={`flex items-center gap-1 rounded px-2 py-0.5 text-[11px] text-[#9aa0a6] hover:bg-white/10 ${focusRing}`}
          >
            <Icon name="bookmark" size={16} /> Bookmarks
          </button>
          <span
            aria-hidden="true"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[#57965c] text-[#141416]"
          >
            <Icon name="account_circle" size={18} />
          </span>
        </div>
      </div>

      <div className="relative flex flex-1 overflow-hidden">
        {/* left icon rail */}
        <nav
          aria-label="Editor tools"
          className="flex w-11 shrink-0 flex-col items-center gap-1 border-r border-[#393b40] bg-[#1e1f22] py-2"
        >
          {railIcon("Files", "folder")}
          {railIcon("Search", "search")}
          {railIcon("Structure", "account_tree")}
          {railIcon("Run", "play_arrow")}
          {railIcon("Debug", "bug_report")}
          {railIcon("Git", "call_split")}
        </nav>

        {/* file tree drawer */}
        {treeOpen && (
          <>
            <div
              className="fixed inset-0 z-20 bg-black/50"
              onClick={() => setTreeOpen(false)}
              aria-hidden="true"
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Project files"
              onKeyDown={(e) => e.key === "Escape" && setTreeOpen(false)}
              className="absolute left-11 top-0 z-30 h-full w-56 border-r border-[#393b40] bg-[#1e1f22] p-2"
            >
              <p className="mb-1 px-1 text-[11px] uppercase tracking-wide text-[#6f737a]">
                portfolio
              </p>
              <p className="mb-1 px-1 text-xs font-bold text-white">▾ portfolio</p>
              <button
                onClick={() => openFile("home")}
                className={`flex w-full items-center gap-2 rounded px-2 py-1 text-left text-xs ${focusRing} ${
                  activeTab === "home" ? "bg-[#3a3d41] text-white" : "text-[#cccccc] hover:bg-white/5"
                }`}
              >
                <Icon name="description" size={16} className="text-[#57965c]" />
                Home.tsx
              </button>
              <p className="ml-2 mt-1 flex items-center gap-1.5 px-2 py-1 text-xs text-[#cccccc]">
                <Icon name="folder_open" size={16} /> src
              </p>
              {(["about", "skills", "work", "contact"] as FileId[]).map((id) => (
                <button
                  key={id}
                  onClick={() => openFile(id)}
                  className={`ml-5 flex w-[calc(100%-1.25rem)] items-center gap-2 rounded px-2 py-1 text-left text-xs ${focusRing} ${
                    activeTab === id ? "bg-[#3a3d41] text-white" : "text-[#cccccc] hover:bg-white/5"
                  }`}
                >
                  <Icon
                    name="description"
                    size={16}
                    className={FILE_META[id].ext === "MD" ? "text-[#519aba]" : "text-[#57965c]"}
                  />
                  {FILE_META[id].label}
                </button>
              ))}
            </div>
          </>
        )}

        {/* editor column */}
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div
            role="tablist"
            aria-label="Open project files"
            className="flex shrink-0 overflow-x-auto border-b border-[#393b40] bg-[#2b2d30]"
          >
            {openTabs.map((id, i) => (
              <div
                key={id}
                ref={(el) => {
                  tabRefs.current[id] = el;
                }}
                role="tab"
                aria-selected={activeTab === id}
                aria-controls={`panel-${id}`}
                id={`tab-${id}`}
                tabIndex={activeTab === id ? 0 : -1}
                onClick={() => setActiveTab(id)}
                onKeyDown={(e) => handleTabKeyDown(e, i)}
                className={`group flex shrink-0 cursor-pointer items-center gap-2 border-r border-[#393b40] px-3 py-2 text-xs ${focusRing} ${
                  activeTab === id
                    ? "border-t-2 border-t-[#3574f0] bg-[#1e1f22] text-white"
                    : "border-t-2 border-t-transparent text-[#9aa0a6] hover:bg-white/5"
                }`}
              >
                <Icon
                  name="description"
                  size={16}
                  className={FILE_META[id].ext === "MD" ? "text-[#519aba]" : "text-[#57965c]"}
                />
                {FILE_META[id].label}
                <button
                  type="button"
                  aria-label={`Close ${FILE_META[id].label}`}
                  onClick={(e) => closeTab(id, e)}
                  className={`ml-1 rounded p-0.5 text-[#9aa0a6] hover:bg-white/20 hover:text-white ${focusRing}`}
                >
                  <Icon name="close" size={14} />
                </button>
              </div>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            tabIndex={0}
            className={`flex-1 overflow-auto py-3 ${focusRing}`}
          >
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
              <span className="flex items-center gap-1 text-[#57965c]">
                <Icon name="check_circle" size={14} /> Up-to-date
              </span>
            </div>
            <div className="flex-1 overflow-auto p-3">
              <div className="mx-auto w-full max-w-[13rem] overflow-hidden rounded-2xl border border-[#393b40]">
                <Preview id={activeTab} />
              </div>
            </div>
          </div>
        )}

        {/* bookmarks panel */}
        {bookmarksOpen && (
          <div
            className="absolute right-0 z-10 flex h-full w-full flex-col border-l border-[#393b40] bg-[#1e1f22] sm:w-72 md:static md:w-72"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <div className="flex items-center border-b border-[#393b40] px-4 py-2 text-xs">
              <span className="font-semibold text-white">Bookmarks</span>
              <button
                onClick={() => setBookmarksOpen(false)}
                aria-label="Close bookmarks panel"
                className={`ml-auto rounded p-0.5 text-[#9aa0a6] hover:text-white md:hidden ${focusRing}`}
              >
                <Icon name="close" size={16} />
              </button>
            </div>
            <nav aria-label="Jump to section" className="flex-1 overflow-auto p-2">
              {BOOKMARKS.map((b, i) => (
                <button
                  key={b.target}
                  onClick={() => openFile(b.target)}
                  className={`flex w-full items-center gap-3 rounded-md px-2 py-2.5 text-left hover:bg-white/5 ${focusRing}`}
                >
                  <span className="flex h-6 w-8 shrink-0 items-center justify-center rounded border border-[#393b40] bg-[#2b2d30] text-[10px] font-semibold text-[#9aa0a6]">
                    F{i + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-xs font-medium text-[#e2e4e9]">
                      {FILE_META[b.target].label}
                    </span>
                    <span className="block truncate text-[11px] text-[#8a8f96]">{b.sub}</span>
                  </span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* status bar */}
      <div className="flex shrink-0 items-center gap-1.5 border-t border-[#393b40] bg-[#2b2d30] px-3 py-1 text-[11px] text-[#9aa0a6]">
        <span>portfolio</span>
        <Crumb />
        <span>src</span>
        <Crumb />
        <span className="text-[#e2e4e9]">{FILE_META[activeTab].label}</span>
        <span className="ml-auto hidden sm:inline">{FILE_META[activeTab].ext}</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span>Ln {CODE[activeTab].length}, Col 1</span>
      </div>
    </main>
  );
}
