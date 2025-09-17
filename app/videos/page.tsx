"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Monitor, Usb, Clock, Users, Download } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
}

export default function VideosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
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
              Demo Videos
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Watch Drop Drive in action with our comprehensive video tutorials
            </motion.p>
          </motion.div>

          {/* Video Grid */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Video 1: App Walkthrough */}
            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden" {...scaleOnHover}>
                <motion.div
                  className="relative aspect-video bg-muted"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <video
                    src="/dataWipe.mp4"
                    controls
               
                    poster="/bootable-usb-creation-tutorial-with-rufus-and-bale.png"
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Badge className="absolute top-4 left-4">
                      <Clock className="mr-1 h-3 w-3" />
                      8:42
                    </Badge>
                  </motion.div>
                </motion.div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      <Monitor className="h-5 w-5 text-accent" />
                    </motion.div>
                    App Walkthrough
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete screen recording demonstrating the Drop Drive user interface, from device selection to
                    certificate generation. See the one-click wipe process in action.
                  </p>
                  <motion.div
                    className="space-y-2 text-sm"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                      <Badge variant="outline" className="text-xs">
                        Interface Tour
                      </Badge>
                      <span className="text-muted-foreground">Main application features</span>
                    </motion.div>
                    <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                      <Badge variant="outline" className="text-xs">
                        Live Demo
                      </Badge>
                      <span className="text-muted-foreground">Real-time wiping process</span>
                    </motion.div>
                    <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                      <Badge variant="outline" className="text-xs">
                        Certificate
                      </Badge>
                      <span className="text-muted-foreground">PDF and JSON generation</span>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Video 2: Creating Bootable USB */}
            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden" {...scaleOnHover}>
                <motion.div
                  className="relative aspect-video bg-muted"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <video
                    src="/drive.mp4"
                    controls
                         poster="/securewipe-application-interface-showing-data-wipi.png"
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Badge className="absolute top-4 left-4">
                      <Clock className="mr-1 h-3 w-3" />
                      12:15
                    </Badge>
                  </motion.div>
                </motion.div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      <Usb className="h-5 w-5 text-accent" />
                    </motion.div>
                    Creating a Bootable USB
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Step-by-step tutorial on creating a bootable live environment from Drop Drive's ISO image using
                    popular tools like Rufus and Balena Etcher.
                  </p>
                  <motion.div
                    className="space-y-2 text-sm"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                      <Badge variant="outline" className="text-xs">
                        Rufus
                      </Badge>
                      <span className="text-muted-foreground">Windows USB creation tool</span>
                    </motion.div>
                    <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                      <Badge variant="outline" className="text-xs">
                        Balena Etcher
                      </Badge>
                      <span className="text-muted-foreground">Cross-platform USB writer</span>
                    </motion.div>
                    <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                      <Badge variant="outline" className="text-xs">
                        Live Boot
                      </Badge>
                      <span className="text-muted-foreground">Standalone environment setup</span>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Additional Resources */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <Card {...scaleOnHover}>
                <CardContent className="p-6 text-center">
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                    <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">Training Materials</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Additional training resources for IT teams and administrators
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="sm">
                      View Resources
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card {...scaleOnHover}>
                <CardContent className="p-6 text-center">
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                    <Download className="h-12 w-12 text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">ISO Downloads</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Download bootable ISO images for offline data wiping
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="sm">
                      Download ISO
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card {...scaleOnHover}>
                <CardContent className="p-6 text-center">
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                    <Monitor className="h-12 w-12 text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">Webinar Series</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Live demonstrations and Q&A sessions with our experts
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="sm">
                      Register Now
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Video Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-muted/50" {...scaleOnHover}>
              <CardHeader>
                <CardTitle>What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="font-semibold mb-3">App Walkthrough Video</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Navigate the Drop Drive interface</li>
                      <li>• Select and analyze storage devices</li>
                      <li>• Configure wiping parameters</li>
                      <li>• Monitor real-time progress</li>
                      <li>• Generate and download certificates</li>
                      <li>• Verify wipe completion</li>
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h4 className="font-semibold mb-3">Bootable USB Tutorial</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Download the Drop Drive ISO</li>
                      <li>• Install Rufus or Balena Etcher</li>
                      <li>• Create bootable USB drives</li>
                      <li>• Configure BIOS/UEFI settings</li>
                      <li>• Boot from USB successfully</li>
                      <li>• Troubleshoot common issues</li>
                    </ul>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-muted-foreground mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Download Drop Drive today and experience professional-grade data wiping with complete documentation and
              support.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Drop Drive
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
