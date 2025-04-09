"use client"

import Link from "next/link"
import { Heart, Users, BookHeart } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"

export default function TrilogiValues() {
  const { translations } = useLanguage()

  const values = [
    {
      title: "Amor Deus",
      subtitle: translations.trilogiValues.amorDeus.subtitle,
      description: translations.trilogiValues.amorDeus.description,
      icon: <BookHeart className="h-12 w-12 text-maroon-600" />,
    },
    {
      title: "Amor Parentium",
      subtitle: translations.trilogiValues.amorParentium.subtitle,
      description: translations.trilogiValues.amorParentium.description,
      icon: <Heart className="h-12 w-12 text-maroon-600" />,
    },
    {
      title: "Amor Concervis",
      subtitle: translations.trilogiValues.amorConcervis.subtitle,
      description: translations.trilogiValues.amorConcervis.description,
      icon: <Users className="h-12 w-12 text-maroon-600" />,
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
        >
          <motion.div
            className="flex justify-center mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {value.icon}
          </motion.div>
          <h3 className="text-xl font-bold text-maroon-900 mb-2 text-center">{value.title}</h3>
          <h4 className="text-lg text-maroon-700 mb-4 text-center">{value.subtitle}</h4>
          <p className="text-gray-700 mb-6 text-center">{value.description}</p>
          <div className="text-center">
            <Link
              href="https://nusaputra.ac.id/id/tentang/nilai-nilai-luhur/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-maroon-600 text-white rounded-md hover:bg-maroon-700 transition-colors duration-300"
            >
              {translations.trilogiValues.learnMore}
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
