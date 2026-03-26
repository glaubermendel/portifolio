import { Share_Tech_Mono } from "next/font/google"
import "./globals.css"

const mono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"]
})

export const metadata = {
  title: "Glauber Mendel",
  description: "Portfólio de Desenvolvedor Web Full Stack",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={mono.className}>
        <header className="flex justify-between items-center px-8 py-4 border-b border-nier-line">
  <div>
    <div className="text-nier-beige text-xl tracking-widest uppercase">Glauber Mendel</div>
    <div className="text-nier-beige/50 text-sm tracking-widest">Programador Web Full Stack</div>
  </div>
  <nav className="flex gap-8">
    <a href="/" className="text-nier-beige/70 hover:text-nier-beige tracking-widest text-sm uppercase">Início</a>
    <a href="/sobre" className="text-nier-beige/70 hover:text-nier-beige tracking-widest text-sm uppercase">Sobre Mim</a>
    <a href="/contato" className="text-nier-beige/70 hover:text-nier-beige tracking-widest text-sm uppercase">Contato</a>
  </nav>
</header>
        {children}
        
      <footer className="border-t border-nier-line px-8 py-4 mt-16">
  <p className="text-nier-beige/30 text-xs tracking-widest uppercase text-center">
    © {new Date().getFullYear()} Glauber Mendel — Todos os direitos reservados
  </p>
</footer>
</body>
    
    </html>
  )
}