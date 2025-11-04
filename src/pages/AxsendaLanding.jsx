import { useState } from "react";
import { motion } from "framer-motion";
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

function Layout({ children }) {
  return (
    <div className={`min-h-screen ${T.bg} ${T.text} relative`}>
      {/* TOP NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Wordmark />
          <nav className="hidden md:flex items-center gap-8 text-sm">
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

      <main className="relative md:ml-16">{children}</main>

      {/* Vignette */}
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

function HubBubble({ title, subtitle, href, icon: Icon, delay = 0 }) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 70, damping: 12 }}
      className="relative group"
    >
      <div
        className={`size-28 sm:size-36 md:size-44 lg:size-56 rounded-full ${T.panel} ${T.ring} grid place-items-center relative overflow-hidden`}
        style={{ boxShadow: "0 0 0 1px #1a1a1a, 0 0 120px rgba(198,168,79,0.08) inset" }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 35%, rgba(198,168,79,0.18) 0%, rgba(0,0,0,0) 80%)",
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: `inset 0 0 0 2px rgba(198,168,79,0.12), 0 0 80px rgba(198,168,79,0.14)`,
          }}
        />
        <Icon className="relative sm:scale-100 scale-[0.9]" size={42} style={{ color: T.gold }} />
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-center">
          <div className="text-[11px] sm:text-xs tracking-widest font-medium" style={{ color: T.gold }}>
            {title}
          </div>
          <div className={`text-[10px] sm:text-[11px] ${T.sub}`}>{subtitle}</div>
        </div>
      </div>
    </motion.a>
  );
}

function HeroMotto() {
  return (
    <div className="text-center">
      <p className="uppercase tracking-[0.35em] text-[10px] sm:text-xs md:text-sm mb-2" style={{ color: T.gold }}>
        The Way Up. The Way Out.
      </p>
      <h1 className="font-[Cinzel] text-[clamp(1.75rem,6vw,3.75rem)] leading-tight">
        Freedom <span style={{ color: T.gold }}>Engineered</span>
      </h1>
      <p className={`mt-4 mx-auto ${T.sub} max-w-[68ch] px-2 sm:px-0`}>
        A modern education and systems company for builders. Escape the system, build your own,
        and scale with intelligence, execution, and design.
      </p>
      <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3">
        <a href="#/academy" className="rounded-full px-5 py-2.5 text-black text-sm" style={{ background: T.gold }}>
          Enter Academy
        </a>
        <a href="#/press" className="rounded-full px-5 py-2.5 text-sm border border-zinc-800 hover:border-zinc-700">
          Read Dispatch
        </a>
      </div>
    </div>
  );
}

function Orbits() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <g opacity="0.25" stroke="#2a2a2a" fill="none" strokeWidth="0.25">
        <circle cx="50" cy="50" r="28" />
        <circle cx="50" cy="50" r="38" />
        <circle cx="50" cy="50" r="48" />
      </g>
    </svg>
  );
}

export default function AxsendaLanding() {
  const [mounted] = useState(true);
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 md:pt-16 pb-16 md:pb-24">
          <HeroMotto />
          <div className="relative mt-16 md:mt-24">
            <div className="relative grid place-items-center">
              {/* Responsive hub width */}
              <div className="relative w-[min(92vw,680px)] aspect-square">
                <Orbits />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-28 sm:size-32 md:size-36 rounded-full ${T.panel} ${T.ring} grid place-items-center text-center`}
                  style={{ boxShadow: "0 0 0 1px #1a1a1a, inset 0 0 120px rgba(198,168,79,0.10)" }}
                >
                  <span className="font-[Cinzel] tracking-[0.25em] text-xs sm:text-sm" style={{ color: T.gold }}>
                    AXSENDA
                  </span>
                </motion.div>

                <div className="absolute left-1/2 -translate-x-1/2 -top-4">
                  <HubBubble title="Academy" subtitle="Education" href="#/academy" icon={GraduationCap} delay={0.12} />
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <HubBubble title="Labs" subtitle="Automation" href="#/labs" icon={FlaskConical} delay={0.18} />
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <HubBubble title="Society" subtitle="Community" href="#/society" icon={Users} delay={0.24} />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-4">
                  <HubBubble title="Press" subtitle="Essays & Posts" href="#/press" icon={Newspaper} delay={0.30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <Wordmark />
          <p className={`text-xs ${T.sub}`}>© {new Date().getFullYear()} AXSENDA™ — Freedom Engineered.</p>
        </div>
      </footer>
    </Layout>
  );
}
