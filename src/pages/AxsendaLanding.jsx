import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BarChart3, Bot, Cpu, FlaskConical, GraduationCap, Layers3, Newspaper, PhoneCall, Users } from "lucide-react";
import Layout from "../components/Layout";

const divisions=[
{name:"Labs",label:"Software & Intelligence",href:"#/labs",icon:FlaskConical,position:"axs-orbit-top"},
{name:"Society",label:"Build with others",href:"#/society",icon:Users,position:"axs-orbit-right"},
{name:"Press",label:"Ideas & insight",href:"#/press",icon:Newspaper,position:"axs-orbit-bottom"},
{name:"Academy",label:"Learn & execute",href:"#/academy",icon:GraduationCap,position:"axs-orbit-left"},
];

function Orbit(){return <div className="relative mx-auto aspect-square w-full max-w-[610px]">
<div className="absolute inset-[5%] rounded-full border border-[#c8a64a]/20"/><div className="absolute inset-[18%] rounded-full border border-[#c8a64a]/10"/><div className="absolute inset-[31%] rounded-full border border-white/[.08]"/>
<div className="axs-orbit-spinner absolute inset-[5%]">{divisions.map(item=>{const Icon=item.icon;return <a key={item.name} href={item.href} className={`axs-orbit-node ${item.position}`}><span className="axs-orbit-counter block"><span className="group flex h-28 w-28 flex-col items-center justify-center rounded-full border border-[#c8a64a]/25 bg-[#11110f]/95 text-center shadow-[0_15px_55px_rgba(0,0,0,.45)] backdrop-blur-xl transition hover:border-[#e0bd5c]/65 hover:shadow-[0_0_45px_rgba(198,168,79,.15)] sm:h-32 sm:w-32"><Icon size={22} className="text-[#d4b34f]"/><span className="mt-2 text-[10px] font-semibold uppercase tracking-[.17em] text-zinc-100">{item.name}</span><span className="mt-1 max-w-[90px] text-[8px] leading-3 text-zinc-500">{item.label}</span></span></span></a>})}</div>
<div className="absolute left-1/2 top-1/2 z-30 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#d0ad4e]/45 bg-[radial-gradient(circle_at_50%_35%,rgba(198,168,79,.13),rgba(11,11,10,.97)_58%)] text-center shadow-[0_0_85px_rgba(198,168,79,.12)] sm:h-48 sm:w-48"><div className="text-3xl font-semibold tracking-[.18em] text-[#d4b25a]">AX</div><span className="mt-3 text-[9px] uppercase tracking-[.32em] text-[#d9bb67]">AXSENDA</span><span className="mt-2 text-[9px] uppercase tracking-[.18em] text-zinc-500">The ecosystem</span></div></div>}

function RevenueMetric(){return <div className="mt-10 border-t border-white/[.08] pt-6"><p className="text-[9px] uppercase tracking-[.28em] text-[#a98c43]">Ecosystem impact</p><div className="mt-3 flex items-end gap-3"><span className="pb-1 text-xl text-[#d4b258]">$</span><span className="font-mono text-3xl tracking-[.08em] text-zinc-100 sm:text-4xl">0</span></div><p className="mt-2 text-[9px] uppercase tracking-[.24em] text-zinc-600">Revenue generated through AXSENDA</p><p className="mt-2 max-w-sm text-[11px] leading-5 text-zinc-600">This becomes the live total from connected AXSENDA products as revenue events are created.</p></div>}
function Product({icon:Icon,name,status,text,href}){return <a href={href||"#/labs"} className="group rounded-[1.5rem] border border-white/[.08] bg-white/[.025] p-6 transition hover:border-[#c8a64a]/30 hover:bg-[#c8a64a]/[.035]"><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-full border border-[#c8a64a]/25 text-[#d1ae50]"><Icon size={20}/></span><span className="text-[8px] uppercase tracking-[.2em] text-zinc-600">{status}</span></div><h3 className="mt-8 font-[Cinzel] text-xl text-zinc-100">{name}</h3><p className="mt-3 text-xs leading-5 text-zinc-500">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.16em] text-[#d4b45b]">Explore <ArrowRight size={12}/></span></a>}

function AcademySequence(){
 const ref=useRef(null);
 const {scrollYProgress:p}=useScroll({target:ref,offset:["start end","end end"]});

 // Keep the lettering treatment exactly as established.
 const introOpacity=useTransform(p,[0,.014,.20,.34,.41],[0,1,1,1,0]);
 const introY=useTransform(p,[0,.09,.23,.34,.41],["0px","16vh","30vh","30vh","25vh"]);
 const introScale=useTransform(p,[0,.11,.25,.36,.41],[.72,.84,1,1.10,1.15]);
 const wordSpacing=useTransform(p,[0,.12,.30,.41],[".00em",".025em",".075em",".13em"]);

 // Give the headline room to clear first. The atom appears lower, stays centered
 // in the active viewport for a long beat, then shifts right only for the card handoff.
 const atomOpacity=useTransform(p,[0,.41,.46,.72,.82,.96,1],[0,0,1,1,.78,.78,.55]);
 const atomScale=useTransform(p,[0,.43,.50,.60,.72,.82,1],[.54,.54,.72,1.03,.92,.68,.68]);
 const atomRotate=useTransform(p,[0,.46,.72,.82,1],[0,0,112,152,152]);
 const atomX=useTransform(p,[0,.71,.75,.79,.82,1],["0%","0%","0%","18%","43%","43%"]);

 // Card waits until after the centered atom follow, then rises into the handoff.
 const cardOpacity=useTransform(p,[0,.70,.74,.78,.82,1],[0,0,.28,.76,1,1]);
 const cardY=useTransform(p,[0,.70,.74,.78,.82,1],["50vh","50vh","31vh","14vh","0vh","0vh"]);
 const cardScale=useTransform(p,[0,.74,.78,.82,1],[.97,.97,.99,1,1]);

 return <section ref={ref} className="relative h-[285vh] border-t border-white/[.06] bg-[#090908]">
  <div className="sticky top-[74px] h-[calc(100vh-74px)] overflow-hidden">
   <div className="axs-circuit-field absolute inset-0 opacity-25"/>
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(198,168,79,.10),transparent_40%)]"/>

   <motion.div style={{opacity:introOpacity,y:introY,scale:introScale,letterSpacing:wordSpacing,willChange:"transform, opacity"}} className="pointer-events-none absolute left-0 right-0 top-[18px] z-30 px-6 text-center">
    <p className="text-[10px] uppercase tracking-[.34em] text-[#b99845]">AXSENDA Academy</p>
    <h2 className="mt-7 font-[Cinzel] text-[clamp(2.8rem,7.2vw,7.8rem)] leading-[.93] text-[#f3eee1]">YOU WERE NEVER<br/><span className="text-[#d1ad51]">SUPPOSED TO STAY THERE.</span></h2>
    <p className="mt-8 text-[10px] uppercase tracking-[.42em] text-zinc-500">The way out is built.</p>
   </motion.div>

   <div className="pointer-events-none absolute left-1/2 top-[61%] z-10 h-[min(58vw,520px)] w-[min(58vw,520px)] -translate-x-1/2 -translate-y-1/2">
    <motion.div style={{opacity:atomOpacity,scale:atomScale,rotate:atomRotate,x:atomX,willChange:"transform, opacity"}} className="relative h-full w-full">
     <div className="absolute inset-[3%] rounded-full border border-[#d8b758]/30"/>
     <div className="absolute inset-[17%] rounded-full border border-white/[.09]"/>
     <div className="absolute inset-[31%] rounded-full border border-[#c8a64a]/18"/>
     <div className="absolute left-1/2 top-1/2 h-[92%] w-[34%] -translate-x-1/2 -translate-y-1/2 rotate-[26deg] rounded-[50%] border border-[#d0ae51]/26"/>
     <div className="absolute left-1/2 top-1/2 h-[92%] w-[34%] -translate-x-1/2 -translate-y-1/2 -rotate-[34deg] rounded-[50%] border border-white/[.09]"/>
     <div className="absolute left-1/2 top-1/2 h-[34%] w-[92%] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] rounded-[50%] border border-[#c8a64a]/22"/>
     <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#d6b653]/45 bg-[#11110f] shadow-[0_0_75px_rgba(198,168,79,.14)]"><GraduationCap className="text-[#ddb958]" size={31}/></div>
    </motion.div>
   </div>

   <motion.div style={{opacity:cardOpacity,y:cardY,scale:cardScale,willChange:"transform, opacity"}} className="absolute inset-0 z-20 flex items-center justify-center px-5 py-5 sm:px-8 lg:px-10">
    <div className="grid w-full max-w-[1380px] items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
     <div className="mx-auto w-full max-w-[660px] rounded-[1.8rem] border border-[#c8a64a]/18 bg-[linear-gradient(145deg,rgba(20,20,17,.97),rgba(10,10,9,.96))] p-6 shadow-[0_30px_110px_rgba(0,0,0,.48)] backdrop-blur-xl sm:p-7 lg:p-8">
      <div className="flex items-center justify-between border-b border-white/[.07] pb-4"><div><p className="text-[9px] uppercase tracking-[.31em] text-[#c7a447]">AXSENDA Academy</p><p className="mt-1 text-[9px] uppercase tracking-[.18em] text-zinc-600">Education · systems · execution</p></div><div className="grid h-10 w-10 place-items-center rounded-full border border-[#c8a64a]/25 bg-[#c8a64a]/[.05]"><GraduationCap size={18} className="text-[#d5b354]"/></div></div>
      <h2 className="mt-5 font-[Cinzel] text-[clamp(2rem,3.45vw,3.95rem)] leading-[.98] text-[#f1ede2]">Learn to build what can<br/><span className="text-[#d4ae4e]">change your life.</span></h2>
      <p className="mt-4 max-w-xl text-[13px] leading-[1.5rem] text-zinc-300">Most people are taught how to work inside systems someone else built. Academy teaches you how to create leverage of your own — through skills, products, distribution, sales, software, and execution.</p>
      <p className="mt-3 max-w-xl text-[11px] leading-5 text-zinc-500">Learn from experienced coaches. Turn skills and ideas into digital products. Position them, sell them, automate what can be automated, and build with the same AXSENDA software ecosystem designed for the businesses you are learning to create.</p>
      <div className="mt-5 grid gap-2 sm:grid-cols-2"><AcademyPoint title="LEARN" text="Coaching and practical instruction built around execution."/><AcademyPoint title="BUILD" text="Create products, offers, systems, and real assets."/><AcademyPoint title="LAUNCH" text="Position, distribute, sell, and reach real customers."/><AcademyPoint title="LEVERAGE" text="AXSENDA Labs tools and Society access included."/></div>
      <p className="mt-5 border-l border-[#c8a64a]/45 pl-4 text-[13px] leading-5 text-zinc-300">You do not come here to consume more content. <span className="text-[#dec36c]">You come here to leave capable of building something that pays.</span></p>
      <div className="mt-5 flex flex-wrap items-center gap-3"><a href="#/academy" className="inline-flex items-center gap-2 rounded-full border border-[#c8a64a]/50 bg-[#c8a64a]/[.08] px-5 py-2.5 text-[11px] uppercase tracking-[.13em] text-[#e0c36d]">Enter AXSENDA Academy <ArrowRight size={13}/></a><span className="text-[8px] uppercase tracking-[.18em] text-zinc-600">Academy · Labs Access · Society Included</span></div>
     </div>
     <div className="hidden lg:block"/>
    </div>
   </motion.div>
  </div>
 </section>
}

function AcademyPoint({title,text}){return <div className="rounded-xl border border-white/[.07] bg-white/[.025] px-3.5 py-2.5"><p className="text-[8px] font-semibold tracking-[.18em] text-[#c6a64e]">{title}</p><p className="mt-1 text-[10px] leading-4 text-zinc-500">{text}</p></div>}

export default function AxsendaLanding(){
 const {scrollYProgress}=useScroll();
 const scale=useTransform(scrollYProgress,[0,.42],[.94,1.06]);
 const rotate=useTransform(scrollYProgress,[0,.42],[-2,1.5]);
 const opacity=useTransform(scrollYProgress,[0,.16,.42],[.72,1,.82]);
 return <Layout>
  <section className="relative isolate min-h-[calc(100vh-74px)] overflow-hidden border-b border-white/[.06]">
   <div className="axs-circuit-field absolute inset-0"/><div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(198,168,79,.07),transparent_32%)]"/>
   <div className="relative z-10 mx-auto grid min-h-[calc(100vh-74px)] max-w-[1480px] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:px-10">
    <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="max-w-xl">
     <p className="text-[10px] uppercase tracking-[.32em] text-[#c7a447]">AXSENDA</p>
     <h1 className="mt-5 font-[Cinzel] text-[clamp(3rem,6vw,6.2rem)] leading-[.94] tracking-[-.045em] text-[#f3efe4]">The way up.<br/><span className="text-[#d0aa4c]">The way out.</span></h1>
     <p className="mt-7 max-w-lg text-base leading-8 text-zinc-400">One ecosystem for software, education, community, and tools designed to help people build income, businesses, and leverage.</p>
     <div className="mt-8 flex flex-wrap gap-3"><a href="#ecosystem" className="inline-flex items-center gap-2 rounded-full border border-[#c8a64a]/45 bg-[#c8a64a]/[.07] px-5 py-3 text-xs uppercase tracking-[.12em] text-[#e0c36d]">Explore ecosystem <ArrowRight size={14}/></a><a href="#/labs" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.025] px-5 py-3 text-xs uppercase tracking-[.12em] text-zinc-300">Explore Labs</a></div>
     <RevenueMetric/>
    </motion.div><Orbit/>
   </div>
  </section>

  <section id="ecosystem" className="relative overflow-hidden border-b border-white/[.06] py-28">
   <div className="axs-circuit-field absolute inset-0 opacity-40"/>
   <div className="relative z-10 mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10">
    <div className="grid items-center gap-16 lg:grid-cols-[.72fr_1.28fr]">
     <div><p className="text-[10px] uppercase tracking-[.3em] text-[#c7a447]">One ecosystem</p><h2 className="mt-5 font-[Cinzel] text-4xl leading-tight sm:text-6xl">Build something<br/><span className="text-[#d1ad52]">that pays.</span></h2><p className="mt-6 max-w-lg text-sm leading-7 text-zinc-400">AXSENDA connects the systems you use to build and operate. As the ecosystem grows, results from products like Capture roll upward into one account, one identity, and one measurable picture of what you are creating.</p></div>
     <motion.div style={{scale,rotate,opacity}} className="rounded-[2rem] border border-[#c8a64a]/25 bg-[#10100e]/95 p-3 shadow-[0_40px_120px_rgba(0,0,0,.55)]"><div className="rounded-[1.55rem] border border-white/[.07] bg-[#0d0d0c] p-6 sm:p-8"><div className="flex items-center justify-between border-b border-white/[.07] pb-5"><div><p className="text-[9px] uppercase tracking-[.25em] text-[#b89642]">AXSENDA</p><h3 className="mt-1 text-xl font-semibold">Ecosystem Overview</h3></div><BarChart3 className="text-[#c7a447]" size={20}/></div><div className="mt-6 grid gap-3 sm:grid-cols-3"><Stat label="Revenue generated" value="$0"/><Stat label="Opportunities" value="0"/><Stat label="Active systems" value="1"/></div><div className="mt-4 h-44 rounded-2xl border border-white/[.06] bg-[linear-gradient(180deg,rgba(198,168,79,.035),transparent)] p-5"><p className="text-[9px] uppercase tracking-[.2em] text-zinc-600">Revenue over time</p><div className="relative mt-8 h-20 border-b border-l border-white/[.06]"><div className="absolute bottom-[24%] left-[6%] right-[4%] h-px rotate-[-4deg] bg-gradient-to-r from-[#7c682e] via-[#d0ad4e] to-[#e1c66d] shadow-[0_0_12px_rgba(198,168,79,.18)]"/></div></div></div></motion.div>
    </div>
   </div>
  </section>

  <section className="relative z-10 py-24"><div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10"><div className="text-center"><p className="text-[10px] uppercase tracking-[.3em] text-[#b99743]">AXSENDA Labs</p><h2 className="mt-4 font-[Cinzel] text-4xl sm:text-5xl">Software that creates leverage.</h2></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><Product icon={PhoneCall} name="Capture" status="Live build" text="AI call handling, lead capture, scheduling, quoting, and business intelligence."/><Product icon={Bot} name="Automate" status="Coming later" text="Automations that move work forward without requiring constant attention."/><Product icon={Layers3} name="Operate" status="Coming later" text="Customers, workflows, data, and operations connected into one system."/><Product icon={Cpu} name="Build" status="AXSENDA Labs" text="New tools engineered around real business problems and measurable outcomes."/></div></div></section>

  <AcademySequence/>

  <section className="relative overflow-hidden border-t border-white/[.06] py-28"><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_100%,rgba(198,168,79,.10),transparent_35%)]"/><div className="relative z-10 mx-auto grid max-w-[1480px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-10"><div className="flex min-h-[390px] items-center justify-center"><div className="relative h-80 w-80 rounded-full border border-[#c8a64a]/18 shadow-[0_0_100px_rgba(198,168,79,.06)]"><div className="absolute inset-[15%] rounded-full border border-white/[.07]"/><div className="absolute inset-[30%] grid place-items-center rounded-full border border-[#c8a64a]/25 bg-[#11110f]"><Users className="text-[#d0ad4e]" size={30}/></div></div></div><div className="flex flex-col justify-center"><p className="text-[10px] uppercase tracking-[.3em] text-[#c7a447]">AXSENDA Society</p><h2 className="mt-5 font-[Cinzel] text-4xl leading-tight sm:text-5xl">Build alone when you need to.<br/><span className="text-[#d0ad4e]">Not because you have to.</span></h2><p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400">Membership brings the software ecosystem together with people building businesses, projects, skills, and income of their own.</p><a href="#/society" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#c8a64a]/35 px-5 py-3 text-xs uppercase tracking-[.14em] text-[#d9ba62]">Explore Society <ArrowRight size={13}/></a></div></div></section>
 </Layout>
}
function Stat({label,value}){return <div className="rounded-xl border border-white/[.06] bg-white/[.025] p-4"><p className="text-[9px] uppercase tracking-[.16em] text-zinc-600">{label}</p><p className="mt-3 font-mono text-xl text-zinc-200">{value}</p></div>}
