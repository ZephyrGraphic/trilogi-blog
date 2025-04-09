"use client"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"

export default function Footer() {
  const { translations } = useLanguage()

  return (
    <motion.footer
      className="bg-maroon-900 text-white py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Image
                src="/images/logo-npu.png"
                alt="Logo Universitas Nusa Putra"
                width={40}
                height={40}
                className="h-10 w-auto mr-3"
              />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold">Trilogi Nusa Putra</h3>
              <p className="text-sm text-maroon-200">Amor Deus, Amor Parentium, Amor Concervis</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-maroon-200 mb-2">© {new Date().getFullYear()} M. Z. Haikal Hamdani</p>
            <div className="flex space-x-4 justify-center md:justify-end">
              <motion.a
                href="https://nusaputra.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-maroon-200 hover:ver:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {translations.footer.universityWebsite}
              </motion.a>
              <motion.a
                href="https://nusaputra.ac.id/id/tentang/nilai-nilai-luhur/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-maroon-200 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {translations.footer.nobleValues}
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
