import { Card, CardContent } from "@/components/ui/card"

export default function NewsPage() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4">Latest News</h2>
        <p className="text-muted-foreground">
          Recent news, press releases, and media coverage will be displayed here
        </p>
      </CardContent>
    </Card>
  )
} 