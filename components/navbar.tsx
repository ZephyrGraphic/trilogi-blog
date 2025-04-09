"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, toggleLanguage, translations } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "bg-maroon-900 shadow-md py-2" : "bg-maroon-800/90 backdrop-blur-sm py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Image
                src="/images/logo-npu.png"
                alt="Logo Universitas Nusa Putra"
                width={40}
                height={40}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
            <span className="font-bold text-white text-lg hidden sm:inline-block transition-colors duration-300 group-hover:text-maroon-200">
              {translations.navbar.title}
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center text-white hover:text-maroon-200 transition-colors"
              aria-label={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">{language === "id" ? "EN" : "ID"}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
