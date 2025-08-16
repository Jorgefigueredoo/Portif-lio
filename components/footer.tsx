import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Linkedin className="h-8 w-8 text-blue-400" />
              Jorge Antonio
            </Link>
            <p className="text-gray-400 mb-4">
              Um desenvolvedor dedicado com uma paixão por criar soluções inovadoras e eficientes.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/Jorgefigueredoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors hover:scale-110 transform duration-300"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jorge-antonio-282874303/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors hover:scale-110 transform duration-300"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:contatojorgeafigueredo@gmail.com"
                className="text-blue-200 hover:text-white transition-colors hover:scale-110 transform duration-300"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">© 2025 Jorge Antonio. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacidade
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Termos
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
