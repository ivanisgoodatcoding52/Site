"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { JetBrains_Mono, Roboto } from "next/font/google";

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
/* Icons — real Google Material Icons (not emoji). Next.js hoists this     */
/* <link> into <head> automatically wherever it renders.                   */
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

const MUT = "text-[#a9b7c6]";
const COM = "text-[#7a7e85] italic";
const HEADER = "text-[#5794d1] font-bold";
const LINK = "text-[#67d6ef]";
const URL = "text-[#a5c261]";
const INLINE = "rounded bg-[#2b2d30] px-1";

function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`${INLINE} ${className ?? "text-[#e2b273]"}`}>{children}</span>;
}

type ProjectId = "launcherx" | "infiniality" | "deluge" | "obscureyt" | "compressd";

const PROJECTS: Record<
  ProjectId,
  {
    file: string;
    title: string;
    tag: string;
    accent: string;
    description: string[];
    note?: string;
    links?: { label: string; href: string }[];
    /** Set this to a real file in /public (e.g. "/projects/launcherx.png") once you have one. */
    image?: string;
    imageAlt?: string;
  }
> = {
  launcherx: {
    file: "LauncherX.md",
    title: "LauncherX",
    tag: "Roblox / Client",
    accent: "text-[#4ade80]",
    description: [
      "LauncherX is a fork of a Roblox Revival called Project Mega. It basically turns all of the clients into one launcher that you can use to play any version you want!",
      "I'll also have a way to configure the clients to run on localhost, basically turning Roblox into a singleplayer client.",
    ],
  },
  infiniality: {
    file: "Infiniality.md",
    title: "Infiniality",
    tag: "Unity / Game",
    accent: "text-[#818cf8]",
    description: [
      "You wake up one day to the jingle of a large department store. This is SCP-3008-1, and as soon as you realize this, you have no escape from this store. How long can you survive?",
    ],
    note: "Made in Unity 2022.3",
  },
  deluge: {
    file: "Deluge.md",
    title: "Deluge",
    tag: "Unity / Game",
    accent: "text-[#818cf8]",
    description: [
      'Deluge is a platformer game mostly inspired by the Roblox game "Flood Escape 2". You escape floods made out of different fluids, push buttons, and survive.',
    ],
    note: "Made in Unity 2022.3",
  },
  obscureyt: {
    file: "ObscureYT.md",
    title: "ObscureYT",
    tag: "Web / API",
    accent: "text-[#22d3ee]",
    description: [
      "A website that is dedicated to finding old youtube videos! There is even a Tags section so that you can specify which videos you want to see! We also made another one that pulls Roblox Videos as well.",
    ],
    links: [
      { label: "RobloxYT", href: "https://github.io" },
      { label: "ObscureYT", href: "https://github.io" },
    ],
  },
  compressd: {
    file: "Compressd.md",
    title: "Compress'd",
    tag: "Tool / Video",
    accent: "text-[#fbbf24]",
    description: ["A video compressor for discord! Check it out:"],
    links: [{ label: "Video Bypasser", href: "https://github.io" }],
  },
};

const ORDER: ProjectId[] = ["launcherx", "infiniality", "deluge", "obscureyt", "compressd"];

/* ---------------------------------------------------------------------- */
/* Line data — rendered as real markdown source                            */
/* ---------------------------------------------------------------------- */

type LineData = { text: React.ReactNode };
const L = (text: React.ReactNode): LineData => ({ text });

function buildLines(id: ProjectId, p: (typeof PROJECTS)[ProjectId]): LineData[] {
  const lines: LineData[] = [
    L(
      <span>
        <span className={MUT}># </span>
        <span className={HEADER}>{p.title}</span>
      </span>
    ),
    L(""),
    L(<Code className={p.accent}>{p.tag}</Code>),
    L(""),
    L(
      <span>
        <span className={MUT}>![</span>
        <span className={LINK}>{p.imageAlt ?? `${p.title} screenshot`}</span>
        <span className={MUT}>](</span>
        <span className={URL}>{p.image ?? `[/public/projects/${id}.png]`}</span>
        <span className={MUT}>)</span>
      </span>
    ),
  ];

  p.description.forEach((para, i) => {
    lines.push(L(""));
    lines.push(L(<span className="text-[#c7ccd1]">{para}</span>));
  });

  if (p.note) {
    lines.push(L(""));
    lines.push(L(<span className={COM}>// {p.note}</span>));
  }

  if (p.links && p.links.length) {
    lines.push(L(""));
    lines.push(
      L(
        <span>
          <span className={MUT}>## </span>
          <span className={HEADER}>Links</span>
        </span>
      )
    );
    p.links.forEach((link) => {
      lines.push(
        L(
          <span>
            <span className={MUT}>- </span>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded ${focusRing} hover:underline`}
            >
              <span className={MUT}>[</span>
              <span className={LINK}>{link.label}</span>
              <span className={MUT}>](</span>
              <span className={URL}>{link.href}</span>
              <span className={MUT}>)</span>
            </a>
          </span>
        )
      );
    });
  }

  return lines;
}

const CODE: Record<ProjectId, LineData[]> = ORDER.reduce(
  (acc, id) => ({ ...acc, [id]: buildLines(id, PROJECTS[id]) }),
  {} as Record<ProjectId, LineData[]>
);

/* ---------------------------------------------------------------------- */
/* Preview column — includes real image support, with a clear placeholder  */
/* when a project doesn't have a screenshot yet.                           */
/* ---------------------------------------------------------------------- */

function Preview({ id }: { id: ProjectId }) {
  const p = PROJECTS[id];
  return (
    <div className="flex h-full flex-col bg-[#141416]">
      {p.image ? (
        <div className="relative aspect-video w-full overflow-hidden bg-[#0d0d0e]">
          <Image
            src={p.image}
            alt={p.imageAlt ?? `Screenshot of ${p.title}`}
            fill
            sizes="256px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-1 border-b border-[#393b40] bg-[#0d0d0e] text-[#5a5d63]">
          <Icon name="add_photo_alternate" size={22} />
          <span className="px-2 text-center text-[10px]">
            [Add /public/projects/{id}.png]
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span
          className={`self-start rounded-full border border-[#393b40] bg-[#2b2d30] px-2.5 py-1 text-[10px] ${p.accent}`}
        >
          {p.tag}
        </span>
        <p className="text-base font-bold text-white">{p.title}</p>
        <p className="text-xs leading-relaxed text-[#9aa0a6]">{p.description[0]}</p>
        {p.links && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {p.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 rounded-lg border border-[#393b40] bg-[#2b2d30] px-2.5 py-1 text-[10px] text-[#e2e4e9] hover:border-[#67d6ef] ${focusRing}`}
              >
                {link.label}
                <Icon name="open_in_new" size={12} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Small pieces                                                            */
/* ---------------------------------------------------------------------- */

function Line({ n, data }: { n: number; data: LineData }) {
  return (
    <div className="flex px-3 leading-6 hover:bg-white/[0.03]">
      <span className="w-8 shrink-0 select-none pr-4 text-right text-[#5a5d63]">{n}</span>
      <span className="whitespace-pre-wrap break-words">{data.text}</span>
    </div>
  );
}

function Crumb() {
  return <Icon name="chevron_right" size={14} className="text-[#5a5d63]" />;
}

const SITE_LINKS = [
  { icon: "home", label: "Home.tsx", href: "/" },
  { icon: "translate", label: "Languages.tsx", href: "/languages" },
  { icon: "article", label: "Blog.tsx", href: "/blog" },
  { icon: "folder_open", label: "Files.tsx", href: "/files" },
];

/* ---------------------------------------------------------------------- */
/* Page                                                                     */
/* ---------------------------------------------------------------------- */

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<ProjectId>("launcherx");
  const [openTabs, setOpenTabs] = useState<ProjectId[]>(ORDER);
  const [treeOpen, setTreeOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(true);
  const [bookmarksOpen, setBookmarksOpen] = useState(true);

  const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const openFile = (id: ProjectId) => {
    setOpenTabs((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setActiveTab(id);
    setTreeOpen(false);
  };

  const closeTab = (id: ProjectId, e: React.SyntheticEvent) => {
    e.stopPropagation();
    setOpenTabs((prev) => {
      const next = prev.filter((t) => t !== id);
      if (activeTab === id) setActiveTab(next.length ? next[next.length - 1] : ORDER[0]);
      return next.length ? next : [ORDER[0]];
    });
  };

  // Roving-tabindex keyboard navigation for the tablist (Left/Right/Home/End).
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
          projects <Icon name="arrow_drop_down" size={16} />
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
              className="absolute left-11 top-0 z-30 h-full w-60 border-r border-[#393b40] bg-[#1e1f22] p-2"
            >
              <p className="mb-1 px-1 text-[11px] uppercase tracking-wide text-[#6f737a]">
                portfolio
              </p>
              <Link
                href="/"
                className={`flex items-center gap-2 rounded px-2 py-1 text-xs text-[#cccccc] hover:bg-white/5 ${focusRing}`}
              >
                <Icon name="description" size={16} className="text-[#57965c]" />
                Home.tsx
              </Link>
              <p className="mt-1 flex items-center gap-1.5 px-2 py-1 text-xs font-semibold text-white">
                <Icon name="folder_open" size={16} /> projects/
              </p>
              {ORDER.map((id) => (
                <button
                  key={id}
                  onClick={() => openFile(id)}
                  className={`ml-3 flex w-[calc(100%-0.75rem)] items-center gap-2 rounded px-2 py-1 text-left text-xs ${focusRing} ${
                    activeTab === id ? "bg-[#3a3d41] text-white" : "text-[#cccccc] hover:bg-white/5"
                  }`}
                >
                  <Icon name="description" size={16} className="text-[#519aba]" />
                  {PROJECTS[id].file}
                </button>
              ))}
              <div className="mt-2 border-t border-[#393b40] pt-2">
                {SITE_LINKS.slice(1).map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`flex items-center gap-2 rounded px-2 py-1 text-xs text-[#cccccc] hover:bg-white/5 ${focusRing}`}
                  >
                    <Icon name="description" size={16} className="text-[#57965c]" />
                    {s.label}
                  </Link>
                ))}
              </div>
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
                <Icon name="description" size={16} className="text-[#519aba]" />
                {PROJECTS[id].file}
                <button
                  type="button"
                  aria-label={`Close ${PROJECTS[id].file}`}
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
              <span>{PROJECTS[activeTab].file.replace(".md", "Preview")}</span>
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
            <div className="flex-1 overflow-auto p-2">
              <nav aria-label="Jump to project">
                <p className="px-2 pb-1 pt-2 text-[10px] uppercase tracking-wide text-[#6f737a]">
                  Projects
                </p>
                {ORDER.map((id, i) => (
                  <button
                    key={id}
                    onClick={() => openFile(id)}
                    className={`flex w-full items-center gap-3 rounded-md px-2 py-2.5 text-left hover:bg-white/5 ${focusRing}`}
                  >
                    <span className="flex h-6 w-8 shrink-0 items-center justify-center rounded border border-[#393b40] bg-[#2b2d30] text-[10px] font-semibold text-[#9aa0a6]">
                      F{i + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-xs font-medium text-[#e2e4e9]">
                        {PROJECTS[id].title}
                      </span>
                      <span className={`block truncate text-[11px] ${PROJECTS[id].accent}`}>
                        {PROJECTS[id].tag}
                      </span>
                    </span>
                  </button>
                ))}
              </nav>
              <nav aria-label="Site navigation">
                <p className="px-2 pb-1 pt-3 text-[10px] uppercase tracking-wide text-[#6f737a]">
                  Site
                </p>
                {SITE_LINKS.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`flex items-center gap-3 rounded-md px-2 py-2.5 hover:bg-white/5 ${focusRing}`}
                  >
                    <span className="flex h-6 w-8 shrink-0 items-center justify-center rounded border border-[#393b40] bg-[#2b2d30]">
                      <Icon name={s.icon} size={15} />
                    </span>
                    <span className="text-xs font-medium text-[#e2e4e9]">{s.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* status bar */}
      <div className="flex shrink-0 items-center gap-1.5 border-t border-[#393b40] bg-[#2b2d30] px-3 py-1 text-[11px] text-[#9aa0a6]">
        <span>portfolio</span>
        <Crumb />
        <span>projects</span>
        <Crumb />
        <span className="text-[#e2e4e9]">{PROJECTS[activeTab].file}</span>
        <span className="ml-auto hidden sm:inline">MD</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span>Ln {CODE[activeTab].length}, Col 1</span>
      </div>
    </main>
  );
}
