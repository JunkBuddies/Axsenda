import { ArrowRight, FlaskConical, GraduationCap, Newspaper, Users } from "lucide-react";

const T = {
  bg: "bg-[#0A0A0A]",
  panel: "bg-[#0F0F0F]",
  gold: "#C6A84F",
  text: "text-[#F8F8F8]",
  sub: "text-zinc-400",
  ring: "ring-1 ring-zinc-800",
};

function Wordmark({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-3 w-3 rounded-full" style={{ background: T.gold }} />
      <span className="font-[Cinzel] tracking-[0.2em] text-xl" style={{ color: T.gold }}>
        AXSENDA
      </span>
    </div>
  );
}

function SideIcon({ href, label, children }) {
  return (
    <a href={href} className="group relative">
      <div
        className={`h-12 w-12 rounded-2xl ${T.panel} ${T.ring} grid place-items-center transition-transform group-hover:-translate-y-0.5`}
      >
        <div className="opacity-90 group-hover:opacity-100" style={{ color: T.gold }}>
          {children}
        </div>
      </div>
      <span className="absolute left-14 top-1/2 -translate-y-1/2 text-xs bg-black/70 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity border border-zinc-800">
        {label}
      </span>
    </a>
  );
}

export default function Layout({ children }) {
  return (
    <div className={`min-h-screen ${T.bg} ${T.text} relative`}>
      {/* TOP NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Wordmark />
          <nav className="hidden md:flex items-center gap-8 text-sm">
  <a href="#/" className="hover:opacity-80">Home</a>
  <a href="#/academy" className="hover:opacity-80">Academy</a>
  <a href="#/labs" className="hover:opacity-80">Labs</a>
  <a href="#/society" className="hover:opacity-80">Society</a>
  <a href="#/press" className="hover:opacity-80">Press</a>
            <a
              href="#/academy"
              className="ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-black"
              style={{ background: T.gold }}
            >
              Apply <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      {/* SIDE NAV */}
      <aside className="fixed left-0 top-16 bottom-0 w-16 hidden md:flex flex-col items-center gap-6 py-8 border-r border-zinc-900">
        <SideIcon href="#/academy" label="Academy"><GraduationCap size={20} /></SideIcon>
        <SideIcon href="#/labs" label="Labs"><FlaskConical size={20} /></SideIcon>
        <SideIcon href="#/society" label="Society"><Users size={20} /></SideIcon>
        <SideIcon href="#/press" label="Press"><Newspaper size={20} /></SideIcon>
      </aside>

      {/* MAIN CONTENT */}
      <main className="relative md:ml-16">{children}</main>

      {/* Glow & Vignette */}
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 40%, rgba(198,168,79,0.10) 0%, rgba(0,0,0,0.0) 60%)",
          }}
        />
        <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 180px rgba(0,0,0,0.75)" }} />
      </div>
    </div>
  );
}
