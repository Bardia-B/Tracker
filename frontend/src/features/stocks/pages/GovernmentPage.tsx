import { Card, CardContent } from "@/components/ui/card"

export default function GovernmentPage() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4">Government Activity</h2>
        <p className="text-muted-foreground">
          Government-related trading activities and regulatory information will be displayed here
        </p>
      </CardContent>
    </Card>
  )
} 