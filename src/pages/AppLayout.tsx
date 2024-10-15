import SidePanel from "@/components/ui/SidePanel";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <main className="sidepanel font-notoSans">
      <SidePanel />
      <div className="bg-slate-50 h-dvh overflow-scroll scroll-m-0 flex justify-center items-center ">
        <Outlet />
      </div>
    </main>
  );
}
