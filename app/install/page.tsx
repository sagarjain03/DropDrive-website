import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Download, Monitor, Smartphone, HardDrive, Shield, CheckCircle, AlertTriangle } from "lucide-react"

export default function InstallPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-balance mb-4">Download Drop Drive</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Get the latest version of Drop Drive for your platform
            </p>
            <Badge variant="secondary" className="mt-4">
              Version 3.2.1 - Released December 2024
            </Badge>
          </div>

          {/* Download Options */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Windows Download */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge>Recommended</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Monitor className="h-8 w-8 text-accent" />
                  Windows
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Full-featured desktop application with GUI interface and advanced features.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold">Drop Drive Installer</p>
                      <p className="text-sm text-muted-foreground">Windows 10/11 (64-bit) • 45.2 MB</p>
                    </div>
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold">Portable Version</p>
                      <p className="text-sm text-muted-foreground">No installation required • 52.1 MB</p>
                    </div>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold mb-2">System Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Windows 10 (64-bit) or later</li>
                    <li>• 4GB RAM minimum, 8GB recommended</li>
                    <li>• 500MB free disk space</li>
                    <li>• Administrator privileges required</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Linux Download */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <HardDrive className="h-8 w-8 text-accent" />
                  Linux
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Command-line and GUI versions available for major Linux distributions.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold">Ubuntu/Debian Package</p>
                      <p className="text-sm text-muted-foreground">.deb package • 38.7 MB</p>
                    </div>
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold">CentOS/RHEL Package</p>
                      <p className="text-sm text-muted-foreground">.rpm package • 39.1 MB</p>
                    </div>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold">Generic Binary</p>
                      <p className="text-sm text-muted-foreground">Tar.gz archive • 41.3 MB</p>
                    </div>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold mb-2">System Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ubuntu 18.04+ / CentOS 7+ / Debian 10+</li>
                    <li>• 4GB RAM minimum, 8GB recommended</li>
                    <li>• 500MB free disk space</li>
                    <li>• Root or sudo access required</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bootable ISO */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-accent" />
                Bootable ISO Image
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-4">
                    Create a bootable USB drive for standalone data wiping without an operating system. Perfect for
                    secure environments and system preparation.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline">ISO Image</Badge>
                    <span className="text-sm text-muted-foreground">Drop Drive Live • 1.2 GB</span>
                  </div>
                  <Button size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    Download ISO
                  </Button>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Boot from USB or DVD</li>
                    <li>• No installation required</li>
                    <li>• Works on any x86-64 system</li>
                    <li>• Includes all Drop Drive features</li>
                    <li>• Offline certificate generation</li>
                    <li>• UEFI and Legacy BIOS support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Version */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-accent" />
                Mobile Version
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-4">
                    Drop Drive for Android provides secure data wiping for mobile devices, SD cards, and USB storage
                    connected to your phone or tablet.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline">Android APK</Badge>
                    <span className="text-sm text-muted-foreground">Version 2.1.0 • 12.4 MB</span>
                  </div>
                  <div className="flex gap-3">
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Download APK
                    </Button>
                    <Button variant="outline">Google Play</Button>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Android 8.0 (API level 26) or later</li>
                    <li>• Root access for internal storage</li>
                    <li>• 100MB free storage space</li>
                    <li>• USB OTG support for external drives</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          {/* Installation Instructions */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Windows Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <span>Download the Drop Drive installer for Windows</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <span>Right-click the installer and select "Run as administrator"</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <span>Follow the installation wizard prompts</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <span>Launch Drop Drive from the Start menu or desktop shortcut</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Linux Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Ubuntu/Debian:</h4>
                    <code className="block bg-muted p-2 rounded text-xs">
                      sudo dpkg -i dropdrive_3.2.1_amd64.deb
                      <br />
                      sudo apt-get install -f
                    </code>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">CentOS/RHEL:</h4>
                    <code className="block bg-muted p-2 rounded text-xs">
                      sudo rpm -ivh dropdrive-3.2.1-1.x86_64.rpm
                    </code>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Generic Binary:</h4>
                    <code className="block bg-muted p-2 rounded text-xs">
                      tar -xzf dropdrive-3.2.1-linux.tar.gz
                      <br />
                      sudo ./install.sh
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Important Notes */}
          <Card className="bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Important Notes</h3>
                  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                    <li>• Administrator/root privileges are required for low-level disk access</li>
                    <li>• Antivirus software may flag Drop Drive due to its disk access capabilities</li>
                    <li>• Always verify checksums after downloading for security</li>
                    <li>• Back up important data before using Drop Drive</li>
                    <li>• Data wiping is irreversible - proceed with caution</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Checksums */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>File Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Verify file integrity using these SHA-256 checksums:</p>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold min-w-48">Windows Installer:</span>
                  <span className="text-muted-foreground break-all">
                    a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold min-w-48">Linux .deb:</span>
                  <span className="text-muted-foreground break-all">
                    b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456a1
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold min-w-48">Bootable ISO:</span>
                  <span className="text-muted-foreground break-all">
                    c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456a1b2
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
