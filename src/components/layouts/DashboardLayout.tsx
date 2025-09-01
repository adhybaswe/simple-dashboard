import type { ReactNode } from 'react';
import { useLocation, Link } from 'react-router';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { AppSidebar } from '../app-sidebar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';
import { Separator } from '../ui/separator';

export function DashboardLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  // Simple breadcrumb logic for demonstration
  const crumbs = [
    { name: 'Dashboard', path: '/' },
    ...(location.pathname !== '/' ? [
      { name: location.pathname.replace(/^\//, '').replace(/\/.*/, '').replace(/^[a-z]/, c => c.toUpperCase()), path: location.pathname }
    ] : [])
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex bg-white sticky top-0 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b border-border/50 bg-gradient-blue-subtle">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {crumbs.map((crumb, i) => (
                  <>
                    <BreadcrumbItem key={crumb.path} className={i === 0 ? 'hidden md:block' : ''}>
                      {i < crumbs.length - 1 ? (
                        <BreadcrumbLink asChild>
                          <Link to={crumb.path} className="text-primary hover:text-primary/80">
                            {crumb.name}
                          </Link>
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className="text-foreground/80">{crumb.name}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {i < crumbs.length - 1 && <BreadcrumbSeparator className="hidden md:block" />}
                  </>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 pt-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
