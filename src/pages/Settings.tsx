import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export default function Settings() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6 pt-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Settings ⚙️</h1>
        <p className="text-muted-foreground">Manage your account and application preferences.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <Card className="card-accent">
          <CardHeader>
            <CardTitle className="text-primary">Profile Settings</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                defaultValue="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                defaultValue="john@example.com"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="card-accent">
          <CardHeader>
            <CardTitle className="text-primary">Preferences</CardTitle>
            <CardDescription>Customize your dashboard experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Dark Mode</span>
              <button className="w-12 h-6 bg-primary rounded-full relative">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 transition-all"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Notifications</span>
              <button className="w-12 h-6 bg-primary rounded-full relative">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 transition-all"></div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
