"use client"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "@/components/Sidebar";
import { useEffect, useState } from "react";

enum SheetSide {
  Left = "left",
  Right = "right",
}

const MobileSidebar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={SheetSide.Left} className="p-0">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
