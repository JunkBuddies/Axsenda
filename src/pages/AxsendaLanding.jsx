import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BookOpen, Cpu, FlaskConical, GraduationCap, Home, Layers3, Newspaper, PhoneCall, Users } from "lucide-react";
import Layout from "../components/Layout";

const ecosystem = {
  axsenda: {
    key: "axsenda",
    name: "AXSENDA",
    eyebrow: "The ecosystem",
    short: "Freedom Engineered",
    text: "A place to learn, build, create, and move with people who refuse to stay where they started.",
    href: "#divisions",
    cta: "Explore the ecosystem",
    icon: Cpu,
  },
  labs: {
    key: "labs",
    name: "Labs",
    eyebrow: "Software & Intelligence",
    short: "Build with leverage",
    text: "Software, AI, and operational systems built to turn ideas and businesses into something that can actually scale.",
    href: "#/labs",
    cta: "Enter AXSENDA Labs",
    icon: FlaskConical,
  },
  academy: {
    key: "academy",
    name: "Academy",
    eyebrow: "Education",
    short: "Learn what moves you forward",
    text: "Practical education for builders who are done consuming motivation and ready to convert it into skill, ownership, and execution.",
    href: "#/academy",
    cta: "Enter Academy",
    icon: GraduationCap,
  },
  society: {
    key: "society",
    name: "Society",
    eyebrow: "Community",
    short: "Find your people",
    text: "A place to meet the people who are awake when you are, building when you are, and trying to become more than their current environment expects.",
    href: "#/society",
    cta: "Enter Society",
    icon: Users,
  },
  press: {
    key: "press",
    name: "Press",
    eyebrow: "Ideas & Dispatches",
    short: "Read what sharpens you",
    text: "Essays, ideas, frameworks, and dispatches on ownership, systems, business, technology, and building a life with more control.",
    href: "#/press",
    cta: "Read AXSENDA Press",
    icon: Newspaper,
  },
};

const divisionKeys = ["labs", "academy", "society", "press"];

function CircuitField() {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
    <div className="absolute left-1/2 top-[44%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A84F]/12" />
    <div className="absolute left-1/2 top-[44%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.075]" />
    <div className="absolute left-1/2 top-[44%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A84F]/12" />
    <div className="absolute left-1/2 top-[44%] h-px w-[min(94vw,1180px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C6A84F]/20 to-transparent" />
    <div className="absolute left-1/2 top-[44%] h-[680px] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#C6A84F]/16 to-transparent" />
  </div>
}

function EcosystemOrbit() {
  const [activeKey, setActiveKey] = useState("axsenda");
  const active = ecosystem[activeKey];
  const orbitItems = useMemo(() => Object.values(ecosystem).filter((item) => item.key !== activeKey), [activeKey]);
  const ActiveIcon = active.icon;

  return <div className="relative mx-auto w-full max-w-[660px]">
    <div className="relative aspect-square">
      <div className="absolute inset-[5%] rounded-full border border-[#C6A84F]/15 shadow-[inset_0_0_90px_rgba(198,168,79,.025)]" />
      <div className="absolute inset-[19%] rounded-full border border-white/[.08]" />
      <div className="absolute inset-[33%] rounded-full border border-[#C6A84F]/12" />

      <div className="axs-orbit-spinner absolute inset-[5%]">
        {orbitItems.map((item, index) => {
          const Icon = item.icon;
          const angle = index * 90;
          return <button
            key={item.key}
            type="button"
            onClick={() => setActiveKey(item.key)}
            className="axs-orbit-node absolute left-1/2 top-1/2 z-20"
            style={{ "--orbit-angle": `${angle}deg` }}
            aria-label={`Bring ${item.name} to center`}
          >
            <span className="axs-orbit-counter block">
              <span className="group grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[1.65rem] border border-white/[.11] bg-[#151513]/90 shadow-[0_16px_55px_rgba(0,0,0,.32)] backdrop-blur-xl transition duration-300 hover:border-[#C6A84F]/45 hover:bg-[#C6A84F]/[.08] sm:h-28 sm:w-28">
                <span className="text-center">
                  <Icon className="mx-auto text-[#D0AD50] transition group-hover:text-[#E9D083]" size={23} />
                  <span className="mt-2 block text-[9px] uppercase tracking-[.18em] text-zinc-400 group-hover:text-[#E1C66F]">{item.name}</span>
                </span>
              </span>
            </span>
          </button>;
        })}
      </div>

      <motion.div
        key={active.key}
        initial={{ opacity: 0, scale: .88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .42, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 z-30 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2.4rem] border border-[#C6A84F]/35 bg-[#151512]/95 p-6 text-center shadow-[0_0_110px_rgba(198,168,79,.13)] backdrop-blur-2xl sm:h-60 sm:w-60"
      >
        <ActiveIcon className="text-[#E0C46C]" size={28} />
        <p className="mt-4 text-[9px] uppercase tracking-[.26em] text-[#A98C43]">{active.eyebrow}</p>
        <h3 className="mt-2 font-[Cinzel] text-xl tracking-wide text-[#F7F1DF] sm:text-2xl">{active.name}</h3>
        <p className="mt-2 text-xs leading-5 text-zinc-400">{active.short}</p>
        <a href={active.href} className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#E4C971] hover:text-[#F0D986]">{active.cta}<ArrowRight size={12}/></a>
      </motion.div>

      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 rounded-full border border-white/[.08] bg-black/20 px-3 py-1.5 text-[9px] uppercase tracking-[.18em] text-zinc-500 backdrop-blur">Tap a division to bring it forward</div>
    </div>
  </div>;
}

export default function AxsendaLanding() {
  return <Layout>
    <section className="relative isolate min-h-[calc(100vh-74px)] overflow-hidden">
      <CircuitField />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-74px)] max-w-[1480px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:px-10 lg:py-20">
        <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65}} className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C6A84F]/30 bg-[#C6A84F]/[0.075] px-3 py-1.5 text-[10px] uppercase tracking-[.28em] text-[#D9BC63]"><span className="h-1.5 w-1.5 rounded-full bg-[#E2C76D] shadow-[0_0_12px_#C6A84F]"/>The way up. The way out.</div>
          <h1 className="font-[Cinzel] text-[clamp(3.2rem,7.5vw,7.5rem)] font-medium leading-[.88] tracking-[-.055em] text-[#F7F2E5]">Freedom<br/><span className="bg-gradient-to-r from-[#B59135] via-[#F0D986] to-[#B59135] bg-clip-text text-transparent">Engineered.</span></h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">For the person who gets hit with that late-night certainty that life can be bigger — and wants somewhere to turn that feeling into skill, software, people, and progress.</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">AXSENDA is not just content about becoming more. It is an ecosystem built to help you learn, build, connect, and create something of your own.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#/academy" className="inline-flex items-center gap-2 rounded-full border border-[#C6A84F]/50 bg-[#C6A84F]/12 px-5 py-3 text-sm font-medium text-[#ECD37D] transition hover:bg-[#C6A84F]/18">Start learning <ArrowRight size={16}/></a><a href="#/society" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[.035] px-5 py-3 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/[.06]">Find your people <Users size={15}/></a></div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.08}}><EcosystemOrbit /></motion.div>
      </div>
    </section>

    <section id="divisions" className="relative z-10 border-y border-white/[.075] bg-[#11110f]/88"><div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 lg:px-10"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-[10px] uppercase tracking-[.3em] text-[#C6A84F]">One company. Multiple engines.</p><h2 className="mt-4 font-[Cinzel] text-4xl leading-tight sm:text-5xl">You do not need more motivation.<br/><span className="text-[#D7B85F]">You need somewhere to put it.</span></h2></div><div className="max-w-2xl lg:pt-8"><p className="text-base leading-8 text-zinc-400">AXSENDA is designed for the burst of ambition that usually disappears by morning. Instead of another saved video or open tab, you land somewhere that can teach you, give you tools, connect you with other builders, and keep the momentum moving.</p></div></div>
      <div className="mt-14 grid gap-3 lg:grid-cols-4">{divisionKeys.map((key)=>{const item=ecosystem[key];const Icon=item.icon;return <a key={key} href={item.href} className="group relative min-h-[300px] overflow-hidden rounded-[1.75rem] border border-white/[.09] bg-white/[.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C6A84F]/30 hover:bg-[#C6A84F]/[.05]"><div className="flex items-start justify-between"><div className="grid h-11 w-11 place-items-center rounded-xl border border-[#C6A84F]/20 bg-[#C6A84F]/[.06] text-[#D4B358]"><Icon size={20}/></div><ArrowUpRight size={17} className="text-zinc-600 transition group-hover:text-[#D3B259]"/></div><div className="mt-20"><p className="text-[9px] uppercase tracking-[.24em] text-zinc-500">{item.eyebrow}</p><h3 className="mt-2 font-[Cinzel] text-2xl text-[#F4EFE2]">{item.name}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p></div></a>})}</div>
    </div></section>

    <section className="relative z-10"><div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 lg:px-10"><div className="overflow-hidden rounded-[2rem] border border-[#C6A84F]/24 bg-gradient-to-br from-[#C6A84F]/[.09] via-white/[.035] to-transparent"><div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_.85fr] lg:p-14"><div><div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.28em] text-[#C6A84F]"><FlaskConical size={14}/>From AXSENDA Labs</div><h2 className="mt-5 font-[Cinzel] text-4xl sm:text-6xl">Capture every opportunity.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300">AXSENDA Capture is an AI-powered customer communication system built to answer calls, capture leads, assist with scheduling, and help businesses stop losing opportunities when nobody can pick up.</p><a href="#/labs" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#C6A84F]/40 bg-[#C6A84F]/[.055] px-5 py-3 text-sm text-[#E6CB73] hover:bg-[#C6A84F]/[.09]">View AXSENDA Labs <ArrowRight size={15}/></a></div><div className="grid gap-3 sm:grid-cols-2"><Feature icon={PhoneCall} title="AI Call Handling" text="Business-aware conversations designed around real customer intent."/><Feature icon={BookOpen} title="Business Knowledge" text="Services, policies, pricing logic, FAQs, and operating context."/><Feature icon={Layers3} title="Lead Capture" text="Turn calls and inquiries into structured opportunities for follow-up."/><Feature icon={Cpu} title="Operational AI" text="A system that becomes more useful as the business connects its data."/></div></div></div></div></section>
  </Layout>;
}

function Feature({icon:Icon,title,text}){return <div className="rounded-2xl border border-white/[.085] bg-[#121210]/70 p-5"><Icon size={18} className="text-[#C6A84F]"/><h3 className="mt-5 text-sm font-semibold text-zinc-100">{title}</h3><p className="mt-2 text-xs leading-5 text-zinc-400">{text}</p></div>}
