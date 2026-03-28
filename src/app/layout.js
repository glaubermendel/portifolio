import Link from 'next/link'
import { Share_Tech_Mono } from "next/font/google"
import "./globals.css"

const mono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"]
})

export const metadata = {
  title: "Glauber Mendel",
  description: "Portfólio de Desenvolvedor Full Stack",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={mono.className}>

        <header className="relative border-b border-nier-line">
          
          {/* Linha decorativa superior */}
          <div className="w-full h-px bg-gradient-to-r from-nier-beige/60 via-nier-beige/20 to-transparent" />

          <div className="flex justify-between items-center px-8 py-4">

            {/* Bloco esquerdo — identidade */}
            <div className="flex flex-col gap-1">
            
              <Link
                href="/"
                className="text-nier-beige text-xl tracking-widest uppercase hover:text-nier-beige/70 transition-colors"
              >
                /// Glauber Mendel
              </Link>
              <span className="text-nier-beige/40 text-xs tracking-widest uppercase">
                Dev Full Stack
              </span>
            </div>

            {/* Nav direita */}
            <nav className="flex gap-8 items-center">
              {[
                { href: "/", label: "Início" },
                { href: "/sobre", label: "Sobre" },
                { href: "/projetos", label: "Projetos" },
                { href: "/contato", label: "Contato" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-nier-beige/60 hover:text-nier-beige text-xs tracking-widest uppercase transition-colors group"
                >
                  {item.label}
                  {/* Underline animado */}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-nier-beige group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

          </div>

          {/* Linha decorativa inferior */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-nier-beige/20 to-nier-beige/60" />

        </header>

        {children}

        <footer className="border-t border-nier-line px-8 py-6 mt-16">
          <div className="flex justify-between items-center">
            <span className="text-nier-beige/20 text-xs tracking-widest uppercase">
              /// SISTEMA ONLINE ///
            </span>
            <span className="text-nier-beige/30 text-xs tracking-widest uppercase">
              © {new Date().getFullYear()} Glauber Mendel
            </span>
           
          </div>
        </footer>

      </body>
    </html>
  )
}