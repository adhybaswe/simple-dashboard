import { Link } from "react-router";
import { Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 text-center">
      <div className="relative">
        <Ghost className="w-24 h-24 text-blue-500/80 animate-bounce drop-shadow-lg" />
        <span className="absolute -top-4 -right-4 bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-xs font-bold shadow">404</span>
      </div>
      <h1 className="text-3xl font-bold text-foreground">Oops! Page Not Found</h1>
      <p className="text-muted-foreground max-w-lg">
        The page you are looking for doesn&apos;t exist or has been moved.<br />
        But don&apos;t worry, you can always go back to the dashboard!
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
