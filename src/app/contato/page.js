export default function Contato() {
  return (
    <main className="min-h-screen px-8 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl text-nier-beige tracking-widest uppercase mb-4">
        Contato
      </h1>
      <div className="w-16 h-px bg-nier-beige mb-8"></div>
      <ul className="space-y-4">
        <li>
          <a href="https://github.com/glaubermendel" target="_blank" className="text-nier-beige/70 hover:text-nier-beige tracking-widest text-sm uppercase">
            — GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/glaubermendel" target="_blank" className="text-nier-beige/70 hover:text-nier-beige tracking-widest text-sm uppercase">
            — LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:glaubermendel@gmail.com" className="text-nier-beige/70 hover:text-nier-beige tracking-widest text-sm uppercase">
            — Email
          </a>
        </li>
      </ul>
    </main>
  )
}