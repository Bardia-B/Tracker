import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PoliticiansPage() {
  return (
    <div className="container mx-auto p-6 grid grid-cols-12 gap-6">
      {/* Left Panel - Politician Info */}
      <Card className="col-span-4">
        <CardHeader className="text-center">
          <div className="mx-auto">
            <Avatar className="w-32 h-32">
              <AvatarImage src="" />
              <AvatarFallback>PL</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="mt-4">Politician Name</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            Information about the politician's short current/select chair using this
          </p>
        </CardContent>
      </Card>

      {/* Right Top Panel - Current Portfolio */}
      <Card className="col-span-8">
        <CardHeader>
          <CardTitle>Current Portfolio and Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground">
            Portfolio information will be displayed here
          </div>
        </CardContent>
      </Card>

      {/* Right Bottom Panel - Past Trades */}
      <Card className="col-span-8">
        <CardHeader>
          <CardTitle>Past Trades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground">
            Past trades information will be displayed here
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 