import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export default function Projects() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6 pt-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Projects 📊</h1>
        <p className="text-muted-foreground">Manage and overview your active projects.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="card-primary hover-lift">
          <CardHeader>
            <CardTitle className="text-primary">Dashboard v2.0</CardTitle>
            <CardDescription>Modern dashboard with React and TypeScript</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm font-medium text-primary">85%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 mt-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-primary hover-lift">
          <CardHeader>
            <CardTitle className="text-primary">E-commerce App</CardTitle>
            <CardDescription>Mobile shopping application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm font-medium text-primary">60%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 mt-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-primary hover-lift">
          <CardHeader>
            <CardTitle className="text-primary">API Gateway</CardTitle>
            <CardDescription>Microservices API management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm font-medium text-primary">95%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 mt-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
