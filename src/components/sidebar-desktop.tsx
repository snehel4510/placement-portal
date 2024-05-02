"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";
import { SidebarButton } from "./sidebar-button";
import { SidebarItems } from "@/types";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { LogOut, MoreHorizontal, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
}

export function SidebarDesktop(props: SidebarDesktopProps) {
  const pathname = usePathname();
  const { user, signOut } = useClerk();
  const router = useRouter();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[250px] max-w-xs border-r">
      <div className="h-full px-3 py-4">
        <Link href="/" className="mx-10">
          <Image
            src={logo}
            width={80}
            height={80}
            alt="Placement Portal logo"
          />
        </Link>
        <div className="mt-5">
          <div className="flex w-full flex-col gap-1">
            {props.sidebarItems.links.map((link, index) => (
              <Link key={index} href={link.href}>
                <SidebarButton
                  variant={pathname === link.href ? "secondary" : "ghost"}
                  icon={link.icon}
                  className="w-full"
                >
                  {link.label}
                </SidebarButton>
              </Link>
            ))}
            {/* {props.sidebarItems.extras} */}
          </div>
          <div className="absolute bottom-3 left-0 w-full px-3">
            <Separator className="absolute -top-3 left-0 w-full" />
            {user && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex gap-2">
                        <span>{(user && user.username) || "profile"}</span>
                      </div>
                      <MoreHorizontal size={20} />
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="mb-2 w-56 rounded-[1rem] p-3">
                  <div className="space-y-1">
                    <Link href="/profile">
                      <SidebarButton size="sm" icon={User} className="w-full">
                        Profile
                      </SidebarButton>
                    </Link>
                    <SidebarButton
                      size="sm"
                      icon={LogOut}
                      className="w-full"
                      onClick={async () => {
                        await signOut();
                        router.push("/");
                      }}
                    >
                      Log Out
                    </SidebarButton>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
