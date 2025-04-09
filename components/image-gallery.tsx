"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { motion, AnimatePresence } from "framer-motion"

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { translations } = useLanguage()

  const images = [
    {
      src: "/images/mama-lelah.jpg",
      alt: translations.gallery.img1Alt,
    },
    {
      src: "/images/mama-kerja.jpg",
      alt: translations.gallery.img2Alt,
    },
    {
      src: "/images/logo-npu.png",
      alt: translations.gallery.img3Alt,
    },
    {
      src: "/images/jockey-game.jpg",
      alt: translations.gallery.img4Alt,
    },
    {
      src: "/images/haikal.jpg",
      alt: translations.gallery.img5Alt,
    },
  ]

  const openLightbox = (src: string) => {
    setSelectedImage(src)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={galleryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            onClick={() => openLightbox(image.src)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <motion.button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-6 w-6" />
            </motion.button>
            <motion.div
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={translations.gallery.lightboxAlt}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
