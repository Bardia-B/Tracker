import { Card, CardContent } from "@/components/ui/card"

export default function FinancialsPage() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4">Financial Information</h2>
        <p className="text-muted-foreground">
          Financial metrics and data will be displayed here
        </p>
      </CardContent>
    </Card>
  )
} 