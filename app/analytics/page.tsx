"use client"

import { Navigation } from "@/components/navigation"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { motion } from "framer-motion"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Wipe Analytics & Insights</h1>
            <p className="text-muted-foreground">Monitor your data wiping operations and track compliance metrics</p>
          </div>

          <AnalyticsDashboard />
        </motion.div>
      </div>
    </div>
  )
}
