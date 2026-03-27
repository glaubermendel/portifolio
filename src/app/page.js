export default function Home() {
  return (
    <main className="min-h-screen px-8 py-16 max-w-4xl mx-auto">
      <section className="mb-16">
        <h1 className="text-5xl md:text-6xl font-nier uppercase tracking-widest cursor-pointer hover:text-nier-beige/80 transition-colors">
          <Link href="/" rel="prefetch" className="no-underline">
            Glauber Mendel
          </Link>
        </h1>
        <div className="w-16 h-px bg-nier-beige mb-6"></div>
        <p className="text-nier-beige/60 tracking-widest text-sm uppercase mb-8">
          Desenvolvedor Full Stack
        </p>
        <div className="flex gap-4">
          <a
            href="/sobre"
            className="border border-nier-beige text-nier-beige px-6 py-2 text-sm tracking-widest uppercase hover:bg-nier-beige hover:text-nier-black transition-colors"
          >
            Saiba Mais
          </a>
          <a
            href="/contato"
            className="border border-nier-line text-nier-beige/70 px-6 py-2 text-sm tracking-widest uppercase hover:border-nier-beige hover:text-nier-beige transition-colors"
          >
            Entre em Contato
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-nier-beige/50 text-xs tracking-widest uppercase mb-6 border-b border-nier-line pb-2">
          Habilidades
        </h2>
        <ul className="space-y-2">
          <li className="text-nier-beige/80 text-sm tracking-wider">
            — HTML, CSS e JavaScript
          </li>
          <li className="text-nier-beige/80 text-sm tracking-wider">
            — React e Next.js
          </li>
          <li className="text-nier-beige/80 text-sm tracking-wider">
            — Ruby on Rails
          </li>
          <li className="text-nier-beige/80 text-sm tracking-wider">
            — Versionamento de código com Git
          </li>
          <li className="text-nier-beige/80 text-sm tracking-wider">
            — Experiência em desenvolvimento ágil (Scrum)
          </li>
        </ul>
      </section>
    </main>
  );
}
