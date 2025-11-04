import Layout from "../components/Layout";

export default function Academy() {
  return (
    <Layout>
      <section className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 max-w-4xl mx-auto text-center">
        <h1 className="font-[Cinzel] text-[clamp(1.75rem,5vw,2.5rem)] mb-4 text-[#C6A84F]">
          AXSENDA Academy
        </h1>
        <p className="text-zinc-400 leading-relaxed text-sm sm:text-base px-2 sm:px-0">
          Education and transformation for the serious individual.{" "}
          Every module, every system — designed for independence.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="#/labs"
            className="rounded-full px-5 py-2.5 text-black text-sm sm:text-base"
            style={{ background: "#C6A84F" }}
          >
            Explore Labs
          </a>
          <a
            href="#/society"
            className="rounded-full px-5 py-2.5 text-sm sm:text-base border border-zinc-800 hover:border-zinc-700"
          >
            Join the Society
          </a>
        </div>
      </section>
    </Layout>
  );
}
