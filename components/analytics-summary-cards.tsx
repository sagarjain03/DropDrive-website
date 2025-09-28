"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HardDrive, Shield, Leaf, IndianRupee } from "lucide-react"
import { motion } from "framer-motion"

interface SummaryData {
  devicesThisMonth: number
  totalDevices: number
  carbonReduction: number
  costSavings: number
}

interface AnalyticsSummaryCardsProps {
  data: SummaryData
}

export function AnalyticsSummaryCards({ data }: AnalyticsSummaryCardsProps) {
  const cards = [
    {
      title: "Devices Wiped This Month",
      value: data.devicesThisMonth.toLocaleString(),
      icon: HardDrive,
      color: "text-chart-1",
    },
    {
      title: "Total Devices Wiped",
      value: data.totalDevices.toLocaleString(),
      icon: Shield,
      color: "text-chart-2",
    },
    {
      title: "Carbon Reduction",
      value: `${data.carbonReduction.toLocaleString()} kg CO₂`,
      icon: Leaf,
      color: "text-green-600",
    },
    {
      title: "Cost Savings",
      value: `₹${data.costSavings.toLocaleString()}`,
      icon: IndianRupee,
      color: "text-chart-3",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeout",
      },
    },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cards.map((card, index) => (
        <motion.div key={card.title} variants={cardVariants} whileHover="hover">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
              <card.icon className={`h-4 w-4 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
