"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Download, FileText, Printer } from "lucide-react"
import { motion } from "framer-motion"

interface ExportData {
  summary: any
  monthlyData: any[]
  wipeMethodData: any[]
  insights: any
}

interface AnalyticsExportProps {
  data: ExportData
}

export function AnalyticsExport({ data }: AnalyticsExportProps) {
  const exportToCSV = () => {
    const csvContent = [
      // Summary data
      "Summary Data",
      "Metric,Value",
      `Devices This Month,${data.summary.devicesThisMonth}`,
      `Total Devices,${data.summary.totalDevices}`,
      `Carbon Reduction (kg CO₂),${data.summary.carbonReduction}`,
      `Cost Savings (₹),${data.summary.costSavings}`,
      "",
      // Monthly data
      "Monthly Data",
      "Month,Devices,Cumulative",
      ...data.monthlyData.map((item) => `${item.month},${item.devices},${item.cumulative}`),
      "",
      // Wipe method data
      "Wipe Method Distribution",
      "Method,Count",
      ...data.wipeMethodData.map((item) => `${item.method},${item.count}`),
      "",
      // Insights
      "Additional Insights",
      "Metric,Value",
      `E-waste Diverted (kg),${data.insights.eWasteDiverted}`,
      `Average Wipe Time (min),${data.insights.avgWipeTime}`,
      "",
      "Top Operators",
      "Name,Count",
      ...data.insights.topOperators.map((op: any) => `${op.name},${op.count}`),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `drop-drive-analytics-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const printReport = () => {
    window.print()
  }

  return (
    <motion.div
      className="flex gap-2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={exportToCSV}>
            <FileText className="mr-2 h-4 w-4" />
            Export as CSV
          </DropdownMenuItem>
          <DropdownMenuItem onClick={printReport}>
            <Printer className="mr-2 h-4 w-4" />
            Print Report
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  )
}
