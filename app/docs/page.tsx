"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield, HardDrive, FileCheck, Cpu, Hash, Award, Layers, Zap, Lock, Database } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
}

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl font-bold text-balance mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Documentation
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Complete guide to secure data wiping with Drop Drive
            </motion.p>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-12" {...scaleOnHover}>
              <CardHeader>
                <CardTitle>Table of Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[
                    { href: "#what-is-secure-wiping", text: "1. What is Secure Data Wiping?" },
                    { href: "#wiping-process", text: "2. The Wiping Process" },
                    { href: "#wiping-techniques", text: "3. Wiping Techniques & Standards" },
                    { href: "#certificates", text: "4. Certificates of Completion" },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="block text-accent hover:underline transition-colors"
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {item.text}
                    </motion.a>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 1: What is Secure Data Wiping? */}
          <motion.section
            id="what-is-secure-wiping"
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                <Shield className="h-8 w-8 text-accent" />
              </motion.div>
              <h2 className="text-3xl font-bold">What is Secure Data Wiping?</h2>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={fadeInUp}>
                <Card {...scaleOnHover}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Simple Deletion vs. Secure Wiping</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <h4 className="font-semibold text-destructive mb-2">❌ Simple Deletion</h4>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>• Only removes file system references</li>
                          <li>• Data remains physically on the drive</li>
                          <li>• Easily recoverable with forensic tools</li>
                          <li>• Not suitable for sensitive data</li>
                        </ul>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <h4 className="font-semibold text-green-600 mb-2">✅ Secure Wiping</h4>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>• Overwrites data multiple times</li>
                          <li>• Uses cryptographic patterns</li>
                          <li>• Targets hidden areas (HPA, DCO)</li>
                          <li>• Meets compliance standards</li>
                        </ul>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card {...scaleOnHover}>
                  <CardContent className="p-6">
                    <motion.div
                      className="flex items-center gap-2 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <Award className="h-6 w-6 text-accent" />
                      </motion.div>
                      <h3 className="text-xl font-semibold">NIST SP 800-88 Compliance</h3>
                    </motion.div>
                    <p className="text-muted-foreground mb-4">
                      The National Institute of Standards and Technology (NIST) Special Publication 800-88 provides
                      guidelines for media sanitization. Drop Drive implements these standards to ensure:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <Badge variant="secondary">Clear</Badge>
                        <p className="text-sm text-muted-foreground">
                          Logical techniques to sanitize data in all user-addressable storage locations
                        </p>
                      </motion.div>
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Badge variant="secondary">Purge</Badge>
                        <p className="text-sm text-muted-foreground">
                          Physical or logical techniques that render data recovery infeasible
                        </p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Separator className="my-12" />
          </motion.div>

          {/* Section 2: The Wiping Process */}
          <motion.section
            id="wiping-process"
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                <HardDrive className="h-8 w-8 text-accent" />
              </motion.div>
              <h2 className="text-3xl font-bold">The Wiping Process</h2>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={fadeInUp}>
                <Card {...scaleOnHover}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Step-by-Step Breakdown</h3>
                    <div className="space-y-4">
                      <motion.div className="flex gap-4">
                        <motion.div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </motion.div>
                        <motion.div>
                          <h4 className="font-semibold">User Clicks "Start Wipe"</h4>
                          <p className="text-muted-foreground text-sm">
                            The application begins by scanning connected storage devices and presenting them for
                            selection.
                          </p>
                        </motion.div>
                      </motion.div>

                      <motion.div className="flex gap-4">
                        <motion.div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </motion.div>
                        <motion.div>
                          <h4 className="font-semibold">Device Analysis</h4>
                          <p className="text-muted-foreground text-sm">
                            The C++ native addon performs low-level hardware detection, identifying hidden areas like
                            HPA (Host Protected Area) and DCO (Device Configuration Overlay).
                          </p>
                        </motion.div>
                      </motion.div>

                      <motion.div className="flex gap-4">
                        <motion.div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </motion.div>
                        <motion.div>
                          <h4 className="font-semibold">Multi-Pass Overwrite</h4>
                          <p className="text-muted-foreground text-sm">
                            Data is overwritten using NIST-approved patterns across multiple passes, ensuring complete
                            destruction of residual magnetic traces.
                          </p>
                        </motion.div>
                      </motion.div>

                      <motion.div className="flex gap-4">
                        <motion.div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          4
                        </motion.div>
                        <motion.div>
                          <h4 className="font-semibold">Verification & Hashing</h4>
                          <p className="text-muted-foreground text-sm">
                            SHA-256 cryptographic hashes verify the integrity of the wipe process at the sector level.
                          </p>
                        </motion.div>
                      </motion.div>

                      <motion.div className="flex gap-4">
                        <motion.div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          5
                        </motion.div>
                        <motion.div>
                          <h4 className="font-semibold">Certificate Generation</h4>
                          <p className="text-muted-foreground text-sm">
                            Tamper-proof certificates are generated and digitally signed, ready for download and
                            archival.
                          </p>
                        </motion.div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div>
                    <Card {...scaleOnHover}>
                      <CardContent className="p-6">
                        <motion.div
                          className="flex items-center gap-2 mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                        >
                          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                            <Cpu className="h-6 w-6 text-accent" />
                          </motion.div>
                          <h3 className="text-lg font-semibold">C++ Native Addon</h3>
                        </motion.div>
                        <p className="text-muted-foreground text-sm mb-3">
                          Our C++ native addon provides direct hardware access through:
                        </p>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• ATA/SATA command interface</li>
                          <li>• SCSI command set support</li>
                          <li>• Low-level sector addressing</li>
                          <li>• Hardware feature detection</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div>
                    <Card {...scaleOnHover}>
                      <CardContent className="p-6">
                        <motion.div
                          className="flex items-center gap-2 mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                        >
                          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                            <Hash className="h-6 w-6 text-accent" />
                          </motion.div>
                          <h3 className="text-lg font-semibold">SHA-256 Verification</h3>
                        </motion.div>
                        <p className="text-muted-foreground text-sm mb-3">
                          Cryptographic verification ensures wipe integrity:
                        </p>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• Sector-level hash calculation</li>
                          <li>• Pattern verification</li>
                          <li>• Tamper detection</li>
                          <li>• Audit trail generation</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Separator className="my-12" />
          </motion.div>

          {/* Section 3: Wiping Techniques & Standards */}
          <motion.section
            id="wiping-techniques"
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                <Layers className="h-8 w-8 text-accent" />
              </motion.div>
              <h2 className="text-3xl font-bold">Wiping Techniques & Standards</h2>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={fadeInUp}>
                <Card {...scaleOnHover}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Overview of Sanitization Methods</h3>
                    <p className="text-muted-foreground mb-4">
                      Drop Drive supports multiple data sanitization techniques, each designed for specific security
                      requirements and storage technologies.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <motion.div className="text-center p-4 border rounded-lg">
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                          <Zap className="h-8 w-8 text-accent mx-auto mb-2" />
                        </motion.div>
                        <h4 className="font-semibold">Quick Wipe</h4>
                        <p className="text-sm text-muted-foreground">Single-pass overwrite</p>
                      </motion.div>
                      <motion.div className="text-center p-4 border rounded-lg">
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                          <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                        </motion.div>
                        <h4 className="font-semibold">Secure Wipe</h4>
                        <p className="text-sm text-muted-foreground">Multi-pass algorithms</p>
                      </motion.div>
                      <motion.div className="text-center p-4 border rounded-lg">
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                          <Lock className="h-8 w-8 text-accent mx-auto mb-2" />
                        </motion.div>
                        <h4 className="font-semibold">Military Grade</h4>
                        <p className="text-sm text-muted-foreground">Government standards</p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* DoD Standards */}
              <motion.div variants={fadeInUp}>
                <Card {...scaleOnHover}>
                  <CardContent className="p-6">
                    <motion.div
                      className="flex items-center gap-2 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <Award className="h-6 w-6 text-accent" />
                      </motion.div>
                      <h3 className="text-xl font-semibold">DoD 5220.22-M (3-Pass)</h3>
                      <Badge variant="secondary">Military Standard</Badge>
                    </motion.div>
                    <p className="text-muted-foreground mb-4">
                      The Department of Defense standard for classified data destruction, featuring three verification
                      passes:
                    </p>
                    <div className="space-y-3">
                      <motion.div className="flex gap-4">
                        <motion.div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </motion.div>
                        <motion.div>
                          <h4 className="font-semibold">Pass 1: Binary Zeros</h4>
                          <p className="text-muted-foreground text-sm">Overwrites all sectors with 0x00 pattern</p>
                        </motion.div>
                      </motion.div>
                      <motion.div className="flex gap-4">
                        <motion.div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </motion.div>
                        <motion.div>
                          <h4 className="font-semibold">Pass 2: Binary Ones</h4>
                          <p className="text-muted-foreground text-sm">Overwrites all sectors with 0xFF pattern</p>
                        </motion.div>
                      </motion.div>
                      <motion.div className="flex gap-4">
                        <motion.div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </motion.div>
                        <motion.div>
                          <h4 className="font-semibold">Pass 3: Random Data</h4>
                          <p className="text-muted-foreground text-sm">
                            Cryptographically secure random pattern with verification
                          </p>
                        </motion.div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* NIST Standards */}
              <motion.div variants={fadeInUp}>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div>
                    <Card {...scaleOnHover}>
                      <CardContent className="p-6">
                        <motion.div
                          className="flex items-center gap-2 mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                        >
                          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                            <Database className="h-6 w-6 text-accent" />
                          </motion.div>
                          <h3 className="text-lg font-semibold">NIST SP 800-88 Clear</h3>
                          <Badge variant="outline">Standard</Badge>
                        </motion.div>
                        <p className="text-muted-foreground text-sm mb-3">
                          Logical sanitization for user-addressable storage:
                        </p>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• Single-pass overwrite with zeros</li>
                          <li>• File system metadata clearing</li>
                          <li>• Suitable for non-sensitive data</li>
                          <li>• Fast execution time</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div>
                    <Card {...scaleOnHover}>
                      <CardContent className="p-6">
                        <motion.div
                          className="flex items-center gap-2 mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                        >
                          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                            <Shield className="h-6 w-6 text-accent" />
                          </motion.div>
                          <h3 className="text-lg font-semibold">NIST SP 800-88 Purge</h3>
                          <Badge variant="outline">Enhanced</Badge>
                        </motion.div>
                        <p className="text-muted-foreground text-sm mb-3">
                          Physical/logical techniques for sensitive data:
                        </p>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• Multi-pass cryptographic overwrite</li>
                          <li>• Hidden area sanitization (HPA/DCO)</li>
                          <li>• Wear-leveling consideration</li>
                          <li>• Forensic-level security</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>

              {/* Gutmann Method */}
              <motion.div variants={fadeInUp}>
                <Card {...scaleOnHover}>
                  <CardContent className="p-6">
                    <motion.div
                      className="flex items-center gap-2 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <Layers className="h-6 w-6 text-accent" />
                      </motion.div>
                      <h3 className="text-xl font-semibold">Gutmann Method (35-Pass)</h3>
                      <Badge variant="secondary">Legacy HDDs</Badge>
                    </motion.div>
                    <p className="text-muted-foreground mb-4">
                      Developed for older magnetic storage, this method uses 35 passes with specific patterns designed
                      to defeat magnetic force microscopy recovery attempts.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div>
                        <h4 className="font-semibold mb-2">Pattern Categories</h4>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• Random data (4 passes)</li>
                          <li>• Specific bit patterns (27 passes)</li>
                          <li>• Final random passes (4 passes)</li>
                        </ul>
                      </motion.div>
                      <motion.div>
                        <h4 className="font-semibold mb-2">Modern Relevance</h4>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• Overkill for modern drives</li>
                          <li>• Extremely time-consuming</li>
                          <li>• Historical significance</li>
                          <li>• Available for compliance</li>
                        </ul>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* SSD-Specific Techniques */}
              <motion.div variants={fadeInUp}>
                <Card {...scaleOnHover}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">SSD-Specific Sanitization</h3>
                    <p className="text-muted-foreground mb-4">
                      Solid State Drives require specialized approaches due to wear leveling, over-provisioning, and
                      TRIM commands.
                    </p>
                    <div className="space-y-4">
                      <motion.div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold">ATA Secure Erase</h4>
                        <p className="text-muted-foreground text-sm">
                          Hardware-level command that instructs the SSD controller to erase all data, including
                          over-provisioned areas and wear-leveled sectors.
                        </p>
                      </motion.div>
                      <motion.div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold">Enhanced Secure Erase</h4>
                        <p className="text-muted-foreground text-sm">
                          Advanced version that performs cryptographic erase by changing the internal encryption key,
                          making all data unrecoverable.
                        </p>
                      </motion.div>
                      <motion.div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold">TRIM + Overwrite</h4>
                        <p className="text-muted-foreground text-sm">
                          Combines TRIM commands with traditional overwrite patterns to address both logical and
                          physical data remnants.
                        </p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Custom Patterns */}
              <motion.div variants={fadeInUp}>
                <Card {...scaleOnHover}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Custom Pattern Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Drop Drive allows custom wiping patterns for specific organizational requirements:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div>
                        <h4 className="font-semibold mb-2">Pattern Types</h4>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• Fixed byte patterns (0x00, 0xFF, 0xAA)</li>
                          <li>• Alternating patterns (0x55, 0xAA)</li>
                          <li>• Cryptographic random data</li>
                          <li>• User-defined hex sequences</li>
                        </ul>
                      </motion.div>
                      <motion.div>
                        <h4 className="font-semibold mb-2">Configuration Options</h4>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• Number of passes (1-35)</li>
                          <li>• Verification after each pass</li>
                          <li>• Pattern randomization</li>
                          <li>• Sector-level targeting</li>
                        </ul>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Compliance Matrix */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-muted/50" {...scaleOnHover}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Compliance Standards Matrix</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Standard</th>
                            <th className="text-left py-2">Passes</th>
                            <th className="text-left py-2">Pattern</th>
                            <th className="text-left py-2">Use Case</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b">
                            <td className="py-2">NIST Clear</td>
                            <td className="py-2">1</td>
                            <td className="py-2">Zeros</td>
                            <td className="py-2">General business data</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">NIST Purge</td>
                            <td className="py-2">3</td>
                            <td className="py-2">Cryptographic</td>
                            <td className="py-2">Sensitive information</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">DoD 5220.22-M</td>
                            <td className="py-2">3</td>
                            <td className="py-2">0x00, 0xFF, Random</td>
                            <td className="py-2">Classified data</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">Gutmann</td>
                            <td className="py-2">35</td>
                            <td className="py-2">Specialized patterns</td>
                            <td className="py-2">Legacy magnetic media</td>
                          </tr>
                          <tr>
                            <td className="py-2">ATA Secure Erase</td>
                            <td className="py-2">1</td>
                            <td className="py-2">Hardware-level</td>
                            <td className="py-2">Modern SSDs</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Separator className="my-12" />
          </motion.div>

          {/* Section 4: Certificates of Completion */}
          <motion.section
            id="certificates"
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                <FileCheck className="h-8 w-8 text-accent" />
              </motion.div>
              <h2 className="text-3xl font-bold">Certificates of Completion</h2>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={fadeInUp}>
                <Card {...scaleOnHover}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Why Signed Certificates Matter</h3>
                    <p className="text-muted-foreground mb-4">
                      Digitally signed certificates provide legally admissible proof of data destruction, essential for:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div>
                        <h4 className="font-semibold mb-2">Legal Compliance</h4>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• GDPR data protection requirements</li>
                          <li>• HIPAA healthcare data security</li>
                          <li>• SOX financial record destruction</li>
                          <li>• Government security clearances</li>
                        </ul>
                      </motion.div>
                      <motion.div>
                        <h4 className="font-semibold mb-2">Audit Requirements</h4>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• Third-party security assessments</li>
                          <li>• Internal compliance reviews</li>
                          <li>• Insurance claim documentation</li>
                          <li>• Legal discovery processes</li>
                        </ul>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card {...scaleOnHover}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Certificate Contents</h3>
                    <p className="text-muted-foreground mb-4">
                      Each certificate includes comprehensive data destruction details:
                    </p>
                    <div className="space-y-4">
                      <motion.div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold">Device Information</h4>
                        <p className="text-muted-foreground text-sm">
                          Serial number, model, capacity, and hardware identifiers
                        </p>
                      </motion.div>
                      <motion.div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold">Wipe Methodology</h4>
                        <p className="text-muted-foreground text-sm">
                          Algorithm used, number of passes, and pattern specifications
                        </p>
                      </motion.div>
                      <motion.div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold">Timestamps</h4>
                        <p className="text-muted-foreground text-sm">
                          Start time, completion time, and duration of the wipe process
                        </p>
                      </motion.div>
                      <motion.div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold">Verification Data</h4>
                        <p className="text-muted-foreground text-sm">
                          SHA-256 hashes, sector verification results, and integrity checks
                        </p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div>
                    <Card {...scaleOnHover}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3">PDF Format</h3>
                        <p className="text-muted-foreground text-sm mb-3">Human-readable certificate with:</p>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• Professional formatting</li>
                          <li>• Company branding support</li>
                          <li>• Digital signature overlay</li>
                          <li>• Print-ready layout</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div>
                    <Card {...scaleOnHover}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3">JSON Format</h3>
                        <p className="text-muted-foreground text-sm mb-3">Machine-readable data for:</p>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• Automated compliance systems</li>
                          <li>• Database integration</li>
                          <li>• API consumption</li>
                          <li>• Bulk processing</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-muted/50" {...scaleOnHover}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Digital Signature Standards</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Certificates are signed using industry-standard cryptographic protocols:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <motion.div className="text-center">
                        <Badge variant="outline" className="mb-2">
                          X.509
                        </Badge>
                        <p className="text-xs text-muted-foreground">Public key infrastructure standard</p>
                      </motion.div>
                      <motion.div className="text-center">
                        <Badge variant="outline" className="mb-2">
                          PKCS#7
                        </Badge>
                        <p className="text-xs text-muted-foreground">Cryptographic message syntax</p>
                      </motion.div>
                      <motion.div className="text-center">
                        <Badge variant="outline" className="mb-2">
                          PKCS#12
                        </Badge>
                        <p className="text-xs text-muted-foreground">Personal information exchange</p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
