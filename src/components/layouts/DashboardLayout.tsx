import type { ReactNode } from 'react';
import { useLocation, Link } from 'react-router';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { AppSidebar } from '../app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { Separator } from '../ui/separator';
import { Bell } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';
import { Badge } from '../ui/badge';
import { NotificationItem } from '../notification/NotificationItem';

export function DashboardLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  // Simple breadcrumb logic for demonstration
  const crumbs = [
    { name: 'Dashboard', path: '/' },
    ...(location.pathname !== '/'
      ? [
          {
            name: location.pathname
              .replace(/^\//, '')
              .replace(/\/.*/, '')
              .replace(/^[a-z]/, (c) => c.toUpperCase()),
            path: location.pathname,
          },
        ]
      : []),
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex bg-white justify-between sticky top-0 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b border-border/50 bg-gradient-blue-subtle'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator
              orientation='vertical'
              className='mr-2 data-[orientation=vertical]:h-4'
            />
            <Breadcrumb>
              <BreadcrumbList>
                {crumbs.map((crumb, i) => (
                  <>
                    <BreadcrumbItem
                      key={crumb.path}
                      className={i === 0 ? 'hidden md:block' : ''}
                    >
                      {i < crumbs.length - 1 ? (
                        <BreadcrumbLink asChild>
                          <Link
                            to={crumb.path}
                            className='text-primary hover:text-primary/80'
                          >
                            {crumb.name}
                          </Link>
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className='text-foreground/80'>
                          {crumb.name}
                        </BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {i < crumbs.length - 1 && (
                      <BreadcrumbSeparator className='hidden md:block' />
                    )}
                  </>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className='flex justify-center items-center px-4'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button aria-label='Notifications' className='relative cursor-pointer'>
                  <Bell size={20} />
                  <Badge className='absolute -top-2 -right-2 text-white px-1.5 py-0.5 text-[10px] h-4 min-w-[16px] flex items-center justify-center' variant='destructive'>3</Badge>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='w-72'>
                <DropdownMenuLabel>Notifikasi</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <NotificationItem initial='A' color='bg-primary/10 text-primary' title='Ada tugas baru di proyek A' time='2 menit lalu' unread />
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NotificationItem initial='P' color='bg-success/10 text-success' title='Profil Anda telah diperbarui' time='10 menit lalu' />
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NotificationItem initial='I' color='bg-warning/10 text-warning' title='Invoice #123 telah dibayar' time='1 jam lalu' unread />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='justify-center text-primary' asChild>
                  <Link to='/notifications'>Lihat semua notifikasi</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-6 pt-4'>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
