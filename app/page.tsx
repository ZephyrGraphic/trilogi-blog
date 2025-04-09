"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Outfit } from "next/font/google"
import Navbar from "@/components/navbar"
import TrilogiValues from "@/components/trilogi-values"
import ImageGallery from "@/components/image-gallery"
import AnimatedSection from "@/components/animated-section"
import Footer from "@/components/footer"
import { useLanguage } from "@/context/language-context"

const outfit = Outfit({ subsets: ["latin"] })

export default function Home() {
  const { language, translations } = useLanguage()

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className={`${outfit.className} min-h-screen bg-white`}>
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection direction="down" duration={0.7}>
        <div className="container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-maroon-900 mb-4">{translations.title}</h1>
          <p className="text-lg text-maroon-700 mb-8">{translations.author}</p>
          <div className="w-20 h-1 bg-maroon-600 mb-8"></div>
        </div>
      </AnimatedSection>

      {/* Introduction */}
      <AnimatedSection delay={0.1} duration={0.6}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-48 h-48 flex-shrink-0">
              <Image
                src="/images/haikal-circle.png"
                alt="M. Z. Haikal Hamdani"
                width={192}
                height={192}
                className="rounded-full border-4 border-maroon-600 shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-800 leading-relaxed mb-6">{translations.introduction.p1}</p>
              <p className="text-gray-800 leading-relaxed mb-6">{translations.introduction.p2}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Tragedy Section */}
      <AnimatedSection direction="right" delay={0.1}>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon-900 mb-6" id="tentang">
            {translations.turningPoint.title}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 leading-relaxed mb-6">{translations.turningPoint.p1}</p>
            <p className="text-gray-800 leading-relaxed mb-6">{translations.turningPoint.p2}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Bullying Section */}
      <AnimatedSection direction="left" delay={0.1}>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon-900 mb-6">{translations.disillusionment.title}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 leading-relaxed mb-6">{translations.disillusionment.p1}</p>
            <p className="text-gray-800 leading-relaxed mb-6">{translations.disillusionment.p2}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Reflection Section */}
      <AnimatedSection direction="right" delay={0.1}>
        <div className="container mx-auto px-4 py-8" id="trilogi">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon-900 mb-6">{translations.seekingPath.title}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 leading-relaxed mb-6">{translations.seekingPath.p1}</p>
            <p className="text-gray-800 leading-relaxed mb-6">{translations.seekingPath.p2}</p>
            <p className="text-gray-800 leading-relaxed mb-6">{translations.seekingPath.p3}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Trilogi Values Section */}
      <AnimatedSection direction="up" delay={0.2} duration={0.7}>
        <div className="bg-maroon-50 py-12" id="dokumentasi">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-maroon-900 mb-8 text-center">
              {translations.trilogiValues.title}
            </h2>
            <TrilogiValues />
          </div>
        </div>
      </AnimatedSection>

      {/* Mother's Work Section */}
      <AnimatedSection direction="left" delay={0.1}>
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon-900 mb-6" id="artikel">
            {translations.motherWork.title}
          </h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-800 leading-relaxed mb-6">{translations.motherWork.p1}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <AnimatedSection direction="up" delay={0.2} className="h-full">
              <div className="rounded-lg overflow-hidden shadow-lg h-full transition-transform duration-300 hover:shadow-xl">
                <Image
                  src="/images/mama-lelah.jpg"
                  alt={translations.motherWork.img1Alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-600 italic">{translations.motherWork.img1Caption}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3} className="h-full">
              <div className="rounded-lg overflow-hidden shadow-lg h-full transition-transform duration-300 hover:shadow-xl">
                <Image
                  src="/images/mama-kerja.jpg"
                  alt={translations.motherWork.img2Alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-600 italic">{translations.motherWork.img2Caption}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 leading-relaxed mb-6">{translations.motherWork.p2}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Freelance Work Section */}
      <AnimatedSection direction="right" delay={0.1}>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon-900 mb-6">{translations.freelanceWork.title}</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-800 leading-relaxed mb-6">{translations.freelanceWork.p1}</p>
            <p className="text-gray-800 leading-relaxed mb-6">{translations.freelanceWork.p2}</p>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <div className="rounded-lg overflow-hidden shadow-lg mb-8 max-w-2xl mx-auto transition-transform duration-300 hover:shadow-xl">
              <Image
                src="/images/jockey-game.jpg"
                alt={translations.freelanceWork.imgAlt}
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-600 italic">{translations.freelanceWork.imgCaption}</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 leading-relaxed mb-6">{translations.freelanceWork.p3}</p>
            <p className="text-gray-800 leading-relaxed mb-6">{translations.freelanceWork.p4}</p>
            <p className="text-gray-800 leading-relaxed mb-6">{translations.freelanceWork.p5}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Transformation Section */}
      <AnimatedSection direction="left" delay={0.1}>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon-900 mb-6">{translations.transformation.title}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 leading-relaxed mb-6">{translations.transformation.p1}</p>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="rounded-lg overflow-hidden shadow-lg mb-8 max-w-2xl mx-auto transition-transform duration-300 hover:shadow-xl">
                <Image
                  src="/images/haikal.jpg"
                  alt="M. Z. Haikal Hamdani"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-600 italic">{translations.transformation.imgCaption}</p>
                </div>
              </div>
            </AnimatedSection>

            <p className="text-gray-800 leading-relaxed mb-6">{translations.transformation.p2}</p>
            <p className="text-gray-800 leading-relaxed mb-6">{translations.transformation.p3}</p>
            <p className="text-gray-800 leading-relaxed mb-6">{translations.transformation.p4}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Image Gallery */}
      <AnimatedSection direction="up" delay={0.2} duration={0.7}>
        <div className="bg-maroon-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-maroon-900 mb-8 text-center">
              {translations.gallery.title}
            </h2>
            <ImageGallery />
          </div>
        </div>
      </AnimatedSection>

      {/* References Section */}
      <AnimatedSection direction="up" delay={0.1}>
        <div className="container mx-auto px-4 py-12" id="sumber">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon-900 mb-6">{translations.references.title}</h2>
          <div className="prose prose-lg max-w-none">
            <ul className="list-disc pl-5 text-gray-800">
              <li className="mb-2">
                <a
                  href="https://nusaputra.ac.id/id/tentang/nilai-nilai-luhur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-maroon-700 hover:text-maroon-900 underline transition-colors duration-300"
                >
                  {translations.references.link1}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://nusaputra.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-maroon-700 hover:text-maroon-900 underline transition-colors duration-300"
                >
                  {translations.references.link2}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}
