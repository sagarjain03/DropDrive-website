"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-accent" />
            <span className="font-bold text-xl">Drop Drive</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/docs" className="text-foreground hover:text-accent transition-colors">
              Documentation
            </Link>
            <Link href="/videos" className="text-foreground hover:text-accent transition-colors">
              Demo Videos
            </Link>
            <Link href="/support" className="text-foreground hover:text-accent transition-colors">
              Support
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
            <ThemeToggle />
            <Button asChild>
              <Link href="/install">Download</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/docs" className="text-foreground hover:text-accent transition-colors">
                Documentation
              </Link>
              <Link href="/videos" className="text-foreground hover:text-accent transition-colors">
                Demo Videos
              </Link>
              <Link href="/support" className="text-foreground hover:text-accent transition-colors">
                Support
              </Link>
              <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </Link>
              <Button asChild className="w-fit">
                <Link href="/install">Download</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
