import SidePanel from "@/components/custom/SidePanel";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <main className="sidepanel font-notoSans">
      <SidePanel />
      <div className="bg-slate-50 h-dvh overflow-scroll scroll-m-0 flex justify-center items-center ">
        <Outlet />
        <Toaster />
      </div>
    </main>
  );
}
