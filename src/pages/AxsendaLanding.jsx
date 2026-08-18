import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BookOpen, Cpu, FlaskConical, GraduationCap, Layers3, Newspaper, PhoneCall, Users } from "lucide-react";
import Layout from "../components/Layout";

const divisions = [
  { name: "Labs", eyebrow: "Software & Intelligence", text: "AI systems and operational software built to remove friction from real businesses.", href: "#/labs", icon: FlaskConical, featured: true },
  { name: "Academy", eyebrow: "Education", text: "Practical knowledge for builders learning to create, operate, and own more of their future.", href: "#/academy", icon: GraduationCap },
  { name: "Society", eyebrow: "Community", text: "A network for people building companies, skills, systems, and independent paths forward.", href: "#/society", icon: Users },
  { name: "Press", eyebrow: "Ideas & Dispatches", text: "Writing on technology, business, ownership, systems, and the ideas behind AXSENDA.", href: "#/press", icon: Newspaper },
];

function CircuitField() {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
    <div className="absolute left-1/2 top-[45%] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A84F]/10" />
    <div className="absolute left-1/2 top-[45%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.055]" />
    <div className="absolute left-1/2 top-[45%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A84F]/10" />
    <div className="absolute left-1/2 top-[45%] h-px w-[min(92vw,1100px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C6A84F]/15 to-transparent" />
    <div className="absolute left-1/2 top-[45%] h-[600px] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#C6A84F]/12 to-transparent" />
  </div>
}

export default function AxsendaLanding() {
  return <Layout>
    <section className="relative isolate min-h-[calc(100vh-74px)] overflow-hidden">
      <CircuitField />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-74px)] max-w-[1480px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-24">
        <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65}} className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C6A84F]/25 bg-[#C6A84F]/[0.055] px-3 py-1.5 text-[10px] uppercase tracking-[.28em] text-[#D9BC63]"><span className="h-1.5 w-1.5 rounded-full bg-[#D9BC63] shadow-[0_0_12px_#C6A84F]"/>The way up. The way out.</div>
          <h1 className="font-[Cinzel] text-[clamp(3.1rem,7.5vw,7.6rem)] font-medium leading-[.88] tracking-[-.055em] text-[#F3F0E7]">Freedom<br/><span className="bg-gradient-to-r from-[#A8842C] via-[#E7CD78] to-[#A8842C] bg-clip-text text-transparent">Engineered.</span></h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">AXSENDA builds software, systems, education, and infrastructure for people and businesses creating their own path forward.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#/labs" className="inline-flex items-center gap-2 rounded-full border border-[#C6A84F]/45 bg-[#C6A84F]/10 px-5 py-3 text-sm font-medium text-[#E7CD78] transition hover:bg-[#C6A84F]/15">Explore AXSENDA Labs <ArrowRight size={16}/></a><a href="#divisions" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.025] px-5 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[.045]">Explore the company <ArrowUpRight size={15}/></a></div>
        </motion.div>

        <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.1}} className="relative mx-auto w-full max-w-[610px]">
          <div className="relative aspect-square">
            <div className="absolute inset-[8%] rounded-full border border-white/[.06]"/><div className="absolute inset-[21%] rounded-full border border-[#C6A84F]/10"/><div className="absolute inset-[34%] rounded-full border border-white/[.07]"/>
            <div className="absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-[#C6A84F]/30 bg-[#0B0B0B]/90 shadow-[0_0_90px_rgba(198,168,79,.09)] backdrop-blur-xl"><div className="text-center"><Cpu className="mx-auto mb-3 text-[#D9BC63]" size={28}/><span className="font-[Cinzel] text-xs tracking-[.32em] text-[#D9BC63]">AXSENDA</span></div></div>
            {[
              ["Labs",FlaskConical,"left-1/2 top-[2%] -translate-x-1/2"],["Academy",GraduationCap,"right-[2%] top-1/2 -translate-y-1/2"],["Society",Users,"left-1/2 bottom-[2%] -translate-x-1/2"],["Press",Newspaper,"left-[2%] top-1/2 -translate-y-1/2"]
            ].map(([name,Icon,pos])=><a key={name} href={`#/${name.toLowerCase()}`} className={`group absolute ${pos}`}><div className="grid h-24 w-24 place-items-center rounded-3xl border border-white/[.09] bg-[#0B0B0B]/80 backdrop-blur-xl transition duration-300 group-hover:-translate-y-1 group-hover:border-[#C6A84F]/35 group-hover:bg-[#C6A84F]/[.055]"><div className="text-center"><Icon className="mx-auto text-[#C6A84F]" size={22}/><span className="mt-2 block text-[9px] uppercase tracking-[.18em] text-zinc-500 group-hover:text-[#D9BC63]">{name}</span></div></div></a>)}
          </div>
        </motion.div>
      </div>
    </section>

    <section id="divisions" className="relative z-10 border-y border-white/[.06] bg-[#090909]/80"><div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 lg:px-10"><div className="mb-12 max-w-2xl"><p className="text-[10px] uppercase tracking-[.3em] text-[#C6A84F]">One company. Multiple engines.</p><h2 className="mt-4 font-[Cinzel] text-3xl tracking-tight sm:text-5xl">Built as an ecosystem.</h2><p className="mt-5 leading-7 text-zinc-500">Each AXSENDA division attacks a different constraint—technology, knowledge, network, or ideas—while sharing one direction.</p></div><div className="grid gap-3 lg:grid-cols-4">{divisions.map(({name,eyebrow,text,href,icon:Icon,featured})=><a key={name} href={href} className={`group relative min-h-[300px] overflow-hidden rounded-[1.75rem] border p-6 transition duration-300 hover:-translate-y-1 ${featured?"border-[#C6A84F]/30 bg-[#C6A84F]/[.055]":"border-white/[.08] bg-white/[.025] hover:border-white/[.15]"}`}><div className="flex items-start justify-between"><div className={`grid h-11 w-11 place-items-center rounded-xl border ${featured?"border-[#C6A84F]/30 bg-[#C6A84F]/10 text-[#D9BC63]":"border-white/10 bg-black/20 text-zinc-400"}`}><Icon size={20}/></div><ArrowUpRight size={17} className="text-zinc-700 transition group-hover:text-[#C6A84F]"/></div><div className="mt-20"><p className="text-[9px] uppercase tracking-[.24em] text-zinc-600">{eyebrow}</p><h3 className="mt-2 font-[Cinzel] text-2xl text-[#F2EFE6]">{name}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{text}</p></div></a>)}</div></div></section>

    <section className="relative z-10"><div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 lg:px-10"><div className="overflow-hidden rounded-[2rem] border border-[#C6A84F]/20 bg-gradient-to-br from-[#C6A84F]/[.075] via-white/[.025] to-transparent"><div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_.85fr] lg:p-14"><div><div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.28em] text-[#C6A84F]"><FlaskConical size={14}/>From AXSENDA Labs</div><h2 className="mt-5 font-[Cinzel] text-4xl sm:text-6xl">Capture every opportunity.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">AXSENDA Capture is an AI-powered customer communication system built to answer calls, capture leads, assist with scheduling, and help businesses stop losing opportunities when nobody can pick up.</p><a href="#/labs" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#C6A84F]/35 px-5 py-3 text-sm text-[#E0C46C] hover:bg-[#C6A84F]/[.07]">View AXSENDA Labs <ArrowRight size={15}/></a></div><div className="grid gap-3 sm:grid-cols-2"><Feature icon={PhoneCall} title="AI Call Handling" text="Business-aware conversations designed around real customer intent."/><Feature icon={BookOpen} title="Business Knowledge" text="Services, policies, pricing logic, FAQs, and operating context."/><Feature icon={Layers3} title="Lead Capture" text="Turn calls and inquiries into structured opportunities for follow-up."/><Feature icon={Cpu} title="Operational AI" text="A system that becomes more useful as the business connects its data."/></div></div></div></div></section>
  </Layout>;
}

function Feature({icon:Icon,title,text}){return <div className="rounded-2xl border border-white/[.075] bg-black/20 p-5"><Icon size={18} className="text-[#C6A84F]"/><h3 className="mt-5 text-sm font-semibold text-zinc-200">{title}</h3><p className="mt-2 text-xs leading-5 text-zinc-550 text-zinc-500">{text}</p></div>}
