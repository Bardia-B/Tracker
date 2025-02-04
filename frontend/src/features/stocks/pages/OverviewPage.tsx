import { Card, CardContent } from "@/components/ui/card"

export default function OverviewPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left Panel - Company Info */}
      <div className="col-span-5">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Company Overview</h2>
            <p className="text-sm text-muted-foreground">
              Summary and information about the stock company name basic overview
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Right Panel - Stock Chart */}
      <div className="col-span-7">
        <Card>
          <CardContent className="p-6">
            <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Stock Chart</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 