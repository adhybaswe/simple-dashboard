import * as React from "react";
import { Drone, Frame, PieChart, Settings2, SquareTerminal, Lock, User as UserIcon, Ghost } from "lucide-react";

import { NavMain } from "@/components/nav-main"
import { NavExample } from "@/components/nav-example"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils"
import { useSidebar } from "../contexts/sidebar-context";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Blue Ocean",
      logo: SquareTerminal,
      plan: "Enterprise",
    },
    {
      name: "Pixel Labs",
      logo: PieChart,
      plan: "Startup",
    },
    {
      name: "Nova Tech",
      logo: Settings2,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Projects",
      url: "", // parent tidak bisa langsung ke link
      icon: Frame,
      items: [
        { title: "Design Engineering", url: "/projects" },
        { title: "Sales & Marketing", url: "/projects" },
        { title: "Travel", url: "/projects" },
      ],
    },
    {
      title: "Analytics",
      url: "/invoice",
      icon: PieChart,
      items: [],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [],
    },
  ],

  example: [
    {
      name: "Sign In",
      url: "/signin",
      icon: Lock,
    },
    {
      name: "Sign Up",
      url: "/signup",
      icon: UserIcon,
    },
    {
      name: "Edit Profile",
      url: "/edit-profile",
      icon: UserIcon,
    },
    {
      name: "404",
      url: "/not-found",
      icon: Ghost,
    },
  ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const sidebar = useSidebar()
  return (
    <Sidebar collapsible="icon" className="sidebar-gradient" {...props}>
      <SidebarHeader className={cn("mb-5", sidebar.state === 'collapsed' && 'bg-primary justify-center items-center')}>
        <div className="flex items-center gap-2 p-2">
          <span className="inline-flex items-center justify-center rounded-md">
            <Drone className="w-5 h-5 text-white" />
          </span>
          {(sidebar.state === 'expanded') && (
            <span className="font-bold text-lg text-white">Simple Dashboard</span>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavExample projects={data.example} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
