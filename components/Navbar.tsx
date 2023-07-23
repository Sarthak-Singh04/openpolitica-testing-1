
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MobileSidebar from "@/components/Mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar/>
    
      <div className="flex w-full justify-end">
        <Avatar>
          <AvatarImage src="https://icons8.com/icon/IxdPYRfUHxQR/user-secured" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
