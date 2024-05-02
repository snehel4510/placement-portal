"use client";

import {
  Volume1Icon,
  Bookmark,
  LayoutDashboardIcon,
  Building2,
  CheckCheck,
  FileText,
  Users,
  LucideHome,
  ShieldCheckIcon,
  LogInIcon,
} from "lucide-react";
import { SidebarDesktop } from "./sidebar-desktop";
import { SidebarItems } from "@/types";
// import { SidebarButton } from "./sidebar-button";

const sidebarItems: SidebarItems = {
  links: [
    { label: "Home", href: "/", icon: LucideHome },
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboardIcon },
    { label: "Announcements", href: "/announcements", icon: Volume1Icon },
    {
      href: "/drives",
      icon: Building2,
      label: "Ongoing Drives",
    },
    {
      href: "/students",
      icon: Users,
      label: "Students",
    },
    { label: "Applied Drives", href: "/applied", icon: CheckCheck },
    {
      href: "/saved",
      icon: Bookmark,
      label: "Saved Drives",
    },
    {
      href: "/policy",
      icon: FileText,
      label: "Placement Policy",
    },
    {
      href: "/profile",
      icon: LogInIcon,
      label: "Student Login",
    },
    {
      href: "/admin",
      icon: ShieldCheckIcon,
      label: "Admin Login",
    },
  ],
  //   extras: (
  //     <div className="flex flex-col gap-2">
  //       <SidebarButton icon={MoreHorizontal} className="w-full">
  //         More
  //       </SidebarButton>
  //       <SidebarButton
  //         className="w-full justify-center text-white"
  //         variant="default"
  //       >
  //         Tweet
  //       </SidebarButton>
  //     </div>
  //   ),
};

export function Sidebar() {
  return <SidebarDesktop sidebarItems={sidebarItems} />;
}
