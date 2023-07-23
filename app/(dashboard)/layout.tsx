import Navbar from "@/components/Navbar";
import SideBar from "@/components/Sidebar";



const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <aside className="hidden md:w-72 h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
       <SideBar/>
      </aside>
      <main className="md:w-[calc(100%-18rem)] ml-auto">

        <Navbar/>
        <div className="2xl:container mx-auto">
        {children}
        </div>

      
      </main>
    </div>
  );
};

export default DashBoardLayout;
