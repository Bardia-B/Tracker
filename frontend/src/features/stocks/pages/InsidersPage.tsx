import { Card, CardContent } from "@/components/ui/card"

export default function InsidersPage() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4">Insider Trading Activity</h2>
        <p className="text-muted-foreground">
          Information about insider trading activities and transactions will be displayed here
        </p>
      </CardContent>
    </Card>
  )
} 