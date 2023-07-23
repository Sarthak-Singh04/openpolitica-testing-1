"use client"

import { cn } from "@/lib/utils";
import { ImageIcon, LayoutDashboard, MessagesSquare, Settings, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface RouteItem {
  label: string;
  icon: React.ElementType;
  href: string;
  color: string;
}

const routes: RouteItem[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Government Representative",
    icon: MessagesSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Educational Resources",
    icon: ImageIcon,
    href: "/education",
    color: "text-purple-500",
  },
  {
    label: "User Profile",
    icon: User,
    href: "/profile",
    color: "text-yellow-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-red-500",
  },
];

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-black text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-2">
            <Image fill alt="logo" src="/make.webp" className="rounded-full" />
          </div>
          <h1 className="text-2xl font-bold">openPolitica</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link href={route.href} key={route.href}>
              <div
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white/50 hover:bg-white/10 rounded-lg transition",
                  pathname === route.href
                    ? "text-zinc-400 bg-white/10"
                    : " " // Corrected class names here
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
