"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Shield, HardDrive, FileCheck, Monitor, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const features = [
  {
    icon: Shield,
    title: "Secure & Compliant",
    description:
      "Adheres to NIST SP 800-88 media sanitization standards with multi-pass secure wipe algorithms ensuring complete data destruction.",
  },
  {
    icon: HardDrive,
    title: "Beyond the Surface",
    description:
      "Using C++ native addon, interacts directly with hardware via ATA/SATA/SCSI commands to detect and remove data from hidden areas like HPA and DCO.",
  },
  {
    icon: FileCheck,
    title: "Proof of Wipe",
    description:
      "Generates tamper-proof certificates in PDF and JSON formats, digitally signed with X.509 and PKCS#7/PKCS#12 standards for legal compliance.",
  },
  {
    icon: Monitor,
    title: "Cross-Platform Power",
    description:
      "Compatible with Windows and Linux systems, built using Electron and Node.js. Includes Android support for mobile devices.",
  },
  {
    icon: Zap,
    title: "Simple & Intuitive",
    description:
      "User-friendly interface with one-click operation and real-time status display. No technical expertise required.",
  },
]

const slideVariants = {
  enter: {
    opacity: 0,
    scale: 0.95,
  },
  center: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
  },
}

export function FeatureSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-balance mb-4">Why Choose Drop Drive?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Professional-grade data wiping with enterprise features and compliance standards
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="w-full"
              >
                {(() => {
                  const feature = features[currentSlide]
                  const Icon = feature.icon
                  return (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <div className="flex justify-center mb-6">
                          <div className="p-4 bg-accent/10 rounded-full">
                            <Icon className="h-12 w-12 text-accent" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur hover:bg-background/90 transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur hover:bg-background/90 transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-110 ${
                  index === currentSlide ? "bg-accent scale-110" : "bg-muted-foreground/30"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
