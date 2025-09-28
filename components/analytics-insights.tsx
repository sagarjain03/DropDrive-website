"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trash2, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"

interface TopOperator {
  name: string
  count: number
}

interface InsightsData {
  eWasteDiverted: number
  avgWipeTime: number
  topOperators: TopOperator[]
}

interface AnalyticsInsightsProps {
  data: InsightsData
}

export function AnalyticsInsights({ data }: AnalyticsInsightsProps) {
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
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* E-waste Diverted */}
      <motion.div variants={cardVariants}>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">E-waste Diverted</CardTitle>
            <Trash2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.eWasteDiverted.toLocaleString()} kg</div>
            <p className="text-xs text-muted-foreground mt-1">
              Equivalent to {(data.eWasteDiverted / 1000).toFixed(1)} tonnes
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Average Wipe Time */}
      <motion.div variants={cardVariants}>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Wipe Time</CardTitle>
            <Clock className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.avgWipeTime} min</div>
            <p className="text-xs text-muted-foreground mt-1">Per device across all methods</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Top Operators */}
      <motion.div variants={cardVariants}>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Operators</CardTitle>
            <Users className="h-4 w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {data.topOperators.slice(0, 3).map((operator, index) => (
                <div key={operator.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={index === 0 ? "default" : "secondary"}
                      className="w-6 h-6 p-0 flex items-center justify-center text-xs"
                    >
                      {index + 1}
                    </Badge>
                    <span className="text-sm font-medium">{operator.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{operator.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
