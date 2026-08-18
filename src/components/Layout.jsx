import { ArrowUpRight, FlaskConical, GraduationCap, Menu, Newspaper, Users } from "lucide-react";

const gold = "#C6A84F";

export function Wordmark({ compact = false }) {
  return (
    <a href="#/" className="inline-flex items-center gap-3 group">
      <span className="relative grid h-8 w-8 place-items-center rounded-xl border border-[#C6A84F]/25 bg-[#C6A84F]/[0.06] shadow-[0_0_40px_rgba(198,168,79,.08)]">
        <span className="h-2 w-2 rotate-45 border border-[#E7CD78]" />
      </span>
      <span>
        <span className="block font-[Cinzel] text-sm sm:text-base tracking-[0.30em] text-[#D9BC63]">AXSENDA</span>
        {!compact && <span className="hidden sm:block mt-0.5 text-[9px] uppercase tracking-[0.28em] text-zinc-600">Freedom Engineered</span>}
      </span>
    </a>
  );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#070707] text-[#F7F5EE] selection:bg-[#C6A84F]/30 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080808]/85 backdrop-blur-2xl">
        <div className="mx-auto flex h-[74px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Wordmark />
          <nav className="hidden items-center gap-1 lg:flex">
            {[
              ["Home", "#/"],
              ["Labs", "#/labs"],
              ["Academy", "#/academy"],
              ["Society", "#/society"],
              ["Press", "#/press"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="rounded-full px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-white">{label}</a>
            ))}
            <a href="#/labs" className="ml-3 inline-flex items-center gap-2 rounded-full border border-[#C6A84F]/35 bg-[#C6A84F]/[0.07] px-4 py-2 text-sm text-[#E5C86F] transition hover:border-[#C6A84F]/60 hover:bg-[#C6A84F]/[0.11]">
              Explore Labs <ArrowUpRight size={15} />
            </a>
          </nav>
          <button className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.025] lg:hidden" aria-label="Open menu"><Menu size={18} /></button>
        </div>
      </header>

      <main className="relative overflow-hidden">{children}</main>

      <footer className="relative z-10 border-t border-white/[0.07] bg-[#080808]">
        <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10">
          <div><Wordmark compact /><p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500">AXSENDA builds systems, software, education, and infrastructure for people and businesses creating their own path forward.</p></div>
          <div className="flex flex-wrap items-start gap-x-8 gap-y-3 text-sm text-zinc-500 lg:justify-end">
            <a href="#/labs" className="hover:text-white">Labs</a><a href="#/academy" className="hover:text-white">Academy</a><a href="#/press" className="hover:text-white">Press</a><a href="#/privacy" className="hover:text-white">Privacy</a><a href="#/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
        <div className="border-t border-white/[0.05]"><div className="mx-auto flex max-w-[1480px] flex-col gap-2 px-5 py-5 text-[11px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><span>© {new Date().getFullYear()} AXSENDA. All rights reserved.</span><span>AXSENDA Labs · AXSENDA Capture</span></div></div>
      </footer>

      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(198,168,79,.12),transparent_34%),radial-gradient(circle_at_80%_35%,rgba(198,168,79,.045),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)",backgroundSize:"80px 80px"}} />
      </div>
    </div>
  );
}

export const divisionIcons = { Labs: FlaskConical, Academy: GraduationCap, Society: Users, Press: Newspaper };
export { gold };
