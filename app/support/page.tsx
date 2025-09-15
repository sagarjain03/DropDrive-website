import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle, Book, Download, Shield, Monitor, Usb } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-balance mb-4">Support Center</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Find answers to common questions and get help with Drop Drive
            </p>
          </div>

          {/* Quick Help Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Book className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground text-sm mb-4">Complete guides and technical specifications</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/docs">View Docs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Download className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Downloads</h3>
                <p className="text-muted-foreground text-sm mb-4">Get the latest version and updates</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/install">Download</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <p className="text-muted-foreground text-sm mb-4">Get personalized help from our team</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-accent" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {/* Installation & Setup */}
                <AccordionItem value="installation">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Installation</Badge>
                      How do I install Drop Drive on my system?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        Drop Drive supports Windows 10/11 and Linux distributions. Download the appropriate installer
                        from our downloads page:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>
                          <strong>Windows:</strong> Run the .exe installer as administrator and follow the setup wizard
                        </li>
                        <li>
                          <strong>Linux:</strong> Install the .deb or .rpm package using your package manager
                        </li>
                        <li>
                          <strong>Portable:</strong> Extract the ZIP file and run the executable directly
                        </li>
                      </ul>
                      <p>
                        For detailed installation instructions, see our{" "}
                        <Link href="/docs" className="text-accent hover:underline">
                          documentation
                        </Link>
                        .
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="compatibility">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Compatibility</Badge>
                      What devices and storage types are supported?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-muted-foreground">
                      <p>Drop Drive supports a wide range of storage devices:</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Supported Devices:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>SATA/IDE hard drives</li>
                            <li>SSD drives (SATA, NVMe, M.2)</li>
                            <li>USB external drives</li>
                            <li>SD cards and flash drives</li>
                            <li>SCSI drives</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">File Systems:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>NTFS, FAT32, exFAT</li>
                            <li>ext2, ext3, ext4</li>
                            <li>HFS+, APFS</li>
                            <li>Raw/unformatted drives</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="wiping-time">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Performance</Badge>
                      How long does it take to wipe a drive?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-muted-foreground">
                      <p>Wiping time depends on several factors:</p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-muted rounded">
                          <span>500GB HDD (3-pass)</span>
                          <span className="font-semibold">2-4 hours</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-muted rounded">
                          <span>1TB SSD (3-pass)</span>
                          <span className="font-semibold">1-2 hours</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-muted rounded">
                          <span>32GB USB Drive (1-pass)</span>
                          <span className="font-semibold">10-20 minutes</span>
                        </div>
                      </div>
                      <p className="text-sm">
                        Times are approximate and vary based on drive speed, interface type, and system performance.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="certificates">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Certificates</Badge>
                      Are the wipe certificates legally valid?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-muted-foreground">
                      <p>Yes, Drop Drive certificates are designed to meet legal and compliance requirements:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Digitally signed with X.509 certificates</li>
                        <li>Tamper-proof with cryptographic verification</li>
                        <li>Include complete audit trail and metadata</li>
                        <li>Compliant with NIST SP 800-88 standards</li>
                        <li>Accepted by major compliance frameworks (GDPR, HIPAA, SOX)</li>
                      </ul>
                      <p>
                        The certificates include device serial numbers, timestamps, wipe methods, and verification
                        hashes that provide legally admissible proof of data destruction.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="bootable-usb">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Bootable</Badge>
                      How do I create a bootable Drop Drive USB?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-muted-foreground">
                      <p>Creating a bootable USB allows you to wipe drives without an operating system:</p>
                      <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>Download the Drop Drive ISO from our downloads page</li>
                        <li>
                          Install a USB creation tool:
                          <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                            <li>
                              <strong>Rufus</strong> (Windows) - Recommended for UEFI/BIOS compatibility
                            </li>
                            <li>
                              <strong>Balena Etcher</strong> (Cross-platform) - Simple and reliable
                            </li>
                          </ul>
                        </li>
                        <li>Select the ISO file and target USB drive</li>
                        <li>Create the bootable USB (this will erase the USB contents)</li>
                        <li>Boot from USB and run Drop Drive in standalone mode</li>
                      </ol>
                      <p>
                        Watch our{" "}
                        <Link href="/videos" className="text-accent hover:underline">
                          video tutorial
                        </Link>{" "}
                        for step-by-step instructions.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="troubleshooting">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Troubleshooting</Badge>
                      What should I do if Drop Drive doesn't detect my drive?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-muted-foreground">
                      <p>If your drive isn't detected, try these troubleshooting steps:</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">1. Check Connections</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                            <li>Ensure SATA/power cables are securely connected</li>
                            <li>Try different USB ports for external drives</li>
                            <li>Test the drive in another system</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">2. Run as Administrator</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                            <li>Right-click Drop Drive and select "Run as administrator"</li>
                            <li>On Linux, run with sudo privileges</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">3. Check Drive Status</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                            <li>Verify the drive appears in Disk Management (Windows) or fdisk (Linux)</li>
                            <li>Ensure the drive isn't encrypted or locked</li>
                            <li>Check for hardware failures</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* System Requirements */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-6 w-6 text-accent" />
                System Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-accent" />
                    Windows
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Windows 10 (64-bit) or later</li>
                    <li>• 4GB RAM minimum, 8GB recommended</li>
                    <li>• 500MB free disk space</li>
                    <li>• Administrator privileges required</li>
                    <li>• .NET Framework 4.8 or later</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Usb className="h-5 w-5 text-accent" />
                    Linux
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Ubuntu 18.04+ / CentOS 7+ / Debian 10+</li>
                    <li>• 4GB RAM minimum, 8GB recommended</li>
                    <li>• 500MB free disk space</li>
                    <li>• Root or sudo access required</li>
                    <li>• glibc 2.17 or later</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Still Need Help */}
          <Card className="bg-accent text-accent-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
              <p className="mb-6 opacity-90">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Support
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
