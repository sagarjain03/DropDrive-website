"use client"

import { useState } from "react"
import { AnalyticsFilters } from "./analytics-filters"
import { AnalyticsSummaryCards } from "./analytics-summary-cards"
import { AnalyticsCharts } from "./analytics-charts"
import { AnalyticsInsights } from "./analytics-insights"
import { AnalyticsExport } from "./analytics-export"
import { motion } from "framer-motion"

export interface FilterState {
  dateRange: string
  wipeMethod: string
}

// Mock data generator
export const generateMockData = (filters: FilterState) => {
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()

  // Summary metrics
  const devicesThisMonth = Math.floor(Math.random() * 500) + 150
  const totalDevices = Math.floor(Math.random() * 5000) + 2500
  const carbonReduction = Math.floor(devicesThisMonth * 2.3) // kg CO₂ per device
  const costSavings = Math.floor(devicesThisMonth * 450) // ₹ per device

  // Monthly data for charts
  const monthlyData = Array.from({ length: 12 }, (_, i) => ({
    month: new Date(currentYear, i).toLocaleDateString("en-US", { month: "short" }),
    devices: Math.floor(Math.random() * 400) + 100,
    cumulative: 0, // Will be calculated
  }))

  // Calculate cumulative
  let cumulative = 0
  monthlyData.forEach((item) => {
    cumulative += item.devices
    item.cumulative = cumulative
  })

  // Wipe method distribution
  const wipeMethodData = [
    { method: "Single Pass", count: Math.floor(totalDevices * 0.4), color: "var(--chart-1)" },
    { method: "Multi-Pass", count: Math.floor(totalDevices * 0.45), color: "var(--chart-2)" },
    { method: "Crypto Erase", count: Math.floor(totalDevices * 0.15), color: "var(--chart-3)" },
  ]

  // Top operators
  const topOperators = [
    { name: "Sagar Jain", count: Math.floor(Math.random() * 200) + 50 },
    { name: "Yogesh", count: Math.floor(Math.random() * 180) + 40 },
    { name: "Har Agam Deep Singh", count: Math.floor(Math.random() * 160) + 30 },
    // { name: "Harasis Singh", count: Math.floor(Math.random() * 140) + 25 },
    // { name: "Shankar", count: Math.floor(Math.random() * 120) + 20 },
  ].sort((a, b) => b.count - a.count)

  return {
    summary: {
      devicesThisMonth,
      totalDevices,
      carbonReduction,
      costSavings,
    },
    monthlyData,
    wipeMethodData,
    insights: {
      eWasteDiverted: Math.floor(totalDevices * 0.8), // kg
      avgWipeTime: Math.floor(Math.random() * 45) + 15, // minutes
      topOperators,
    },
  }
}

export function AnalyticsDashboard() {
  const [filters, setFilters] = useState<FilterState>({
    dateRange: "last-12-months",
    wipeMethod: "all",
  })

  const data = generateMockData(filters)

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

  return (
    <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
      {/* Filters and Export */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4"
        variants={itemVariants}
      >
        <AnalyticsFilters filters={filters} onFiltersChange={setFilters} />
        <AnalyticsExport data={data} />
      </motion.div>

      {/* Summary Cards */}
      <motion.div variants={itemVariants}>
        <AnalyticsSummaryCards data={data.summary} />
      </motion.div>

      {/* Charts */}
      <motion.div variants={itemVariants}>
        <AnalyticsCharts monthlyData={data.monthlyData} wipeMethodData={data.wipeMethodData} />
      </motion.div>

      {/* Insights */}
      <motion.div variants={itemVariants}>
        <AnalyticsInsights data={data.insights} />
      </motion.div>
    </motion.div>
  )
}
