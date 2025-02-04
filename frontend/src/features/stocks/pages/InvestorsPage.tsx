import { Card, CardContent } from "@/components/ui/card"

export default function InvestorsPage() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4">Investor Relations</h2>
        <p className="text-muted-foreground">
          Institutional investors, major shareholders, and investment-related information will be displayed here
        </p>
      </CardContent>
    </Card>
  )
} 