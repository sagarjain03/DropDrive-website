"use client"

import { Navigation } from "@/components/navigation"
import { FeatureSwiper } from "@/components/feature-swiper"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Download, FileText, Play, Award } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-6">
                NIST SP 800-88 Compliant
              </Badge>
            </motion.div>
            <motion.h1 className="text-4xl md:text-6xl font-bold text-balance mb-6" variants={itemVariants}>
              The Ultimate Cross-Platform Data Wiping Solution
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed"
              variants={itemVariants}
            >
              Securely wipe data from multiple operating systems and devices, including hidden sectors.
              Professional-grade data destruction with tamper-proof certificates for complete peace of mind.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild>
                  <Link href="/install">
                    <Download className="mr-2 h-5 w-5" />
                    Download Now
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/videos">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Swiper */}
      <FeatureSwiper />

      {/* Trust Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-balance mb-4">Trusted by IT Professionals Worldwide</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Meeting the highest standards for data security and compliance
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={cardVariants} whileHover="hover">
              <Card>
                <CardContent className="p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">NIST Compliant</h3>
                  <p className="text-muted-foreground">
                    Adheres to NIST SP 800-88 media sanitization standards for government and enterprise use.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover="hover">
              <Card>
                <CardContent className="p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  >
                    <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Secure by Design</h3>
                  <p className="text-muted-foreground">
                    Multi-pass algorithms and hardware-level access ensure complete data destruction.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover="hover">
              <Card>
                <CardContent className="p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  >
                    <FileText className="h-12 w-12 text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Legal Proof</h3>
                  <p className="text-muted-foreground">
                    Digitally signed certificates provide tamper-proof evidence for audits and compliance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-balance mb-4">Ready to Secure Your Data?</h2>
            <p className="text-lg mb-8 text-pretty max-w-2xl mx-auto opacity-90">
              Join thousands of IT professionals who trust Drop Drive for their data sanitization needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/install">
                    <Download className="mr-2 h-5 w-5" />
                    Download Free Trial
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
                  asChild
                >
                  <Link href="/docs">
                    <FileText className="mr-2 h-5 w-5" />
                    Read Documentation
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-accent" />
                <span className="font-bold text-lg">Drop Drive</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Professional data wiping solution for secure data destruction and compliance.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm">
                <motion.div whileHover={{ x: 5 }}>
                  <Link href="/docs" className="block text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 5 }}>
                  <Link href="/videos" className="block text-muted-foreground hover:text-foreground">
                    Demo Videos
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 5 }}>
                  <Link href="/install" className="block text-muted-foreground hover:text-foreground">
                    Download
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm">
                <motion.div whileHover={{ x: 5 }}>
                  <Link href="/support" className="block text-muted-foreground hover:text-foreground">
                    Help Center
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 5 }}>
                  <Link href="/contact" className="block text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <motion.div whileHover={{ x: 5 }}>
                  <Link href="/privacy" className="block text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 5 }}>
                  <Link href="/terms" className="block text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p>&copy; 2024 Drop Drive. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
