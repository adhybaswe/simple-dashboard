import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export default function Analytics() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6 pt-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Analytics 📈</h1>
        <p className="text-muted-foreground">Track your performance and insights.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="card-glass">
          <CardHeader>
            <CardTitle className="text-primary">Traffic Overview</CardTitle>
            <CardDescription>Website visitors this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary mb-2">124,500</div>
            <p className="text-sm text-muted-foreground">
              <span className="text-emerald-600 font-semibold">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardHeader>
            <CardTitle className="text-primary">Conversion Rate</CardTitle>
            <CardDescription>User conversion analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary mb-2">3.24%</div>
            <p className="text-sm text-muted-foreground">
              <span className="text-emerald-600 font-semibold">+0.8%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
