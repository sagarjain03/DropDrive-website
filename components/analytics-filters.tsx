"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import type { FilterState } from "./analytics-dashboard"

interface AnalyticsFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

export function AnalyticsFilters({ filters, onFiltersChange }: AnalyticsFiltersProps) {
  return (
    <Card className="w-full lg:w-auto">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="space-y-2">
            <Label htmlFor="date-range">Date Range</Label>
            <Select
              value={filters.dateRange}
              onValueChange={(value) => onFiltersChange({ ...filters, dateRange: value })}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-7-days">Last 7 days</SelectItem>
                <SelectItem value="last-30-days">Last 30 days</SelectItem>
                <SelectItem value="last-3-months">Last 3 months</SelectItem>
                <SelectItem value="last-6-months">Last 6 months</SelectItem>
                <SelectItem value="last-12-months">Last 12 months</SelectItem>
                <SelectItem value="all-time">All time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="wipe-method">Wipe Method</Label>
            <Select
              value={filters.wipeMethod}
              onValueChange={(value) => onFiltersChange({ ...filters, wipeMethod: value })}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Methods</SelectItem>
                <SelectItem value="single-pass">Single Pass</SelectItem>
                <SelectItem value="multi-pass">Multi-Pass</SelectItem>
                <SelectItem value="crypto-erase">Crypto Erase</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
