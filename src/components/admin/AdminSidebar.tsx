import { LayoutDashboard, Trophy, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r bg-white p-6 dark:bg-slate-900 lg:flex">
      <div className="flex items-center gap-2 px-2 mb-10">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9A218] text-white">
          <Trophy size={18} fill="currentColor" />
        </div>
        <span className="text-xl font-black tracking-tighter">COMPETEHUB</span>
      </div>

      <nav className="flex-1 space-y-1">
        <Button
          variant="secondary"
          className="w-full justify-start gap-3 bg-[#E9A218] font-bold text-white hover:bg-[#E9A218]/90"
        >
          <LayoutDashboard size={18} /> Dashboard
        </Button>
      </nav>

      <div className="mt-auto flex items-center gap-3 border-t pt-6 px-2">
        <a href="/">
          <Button
            variant="ghost"
            className="w-full cursor-pointer justify-start gap-3 text-slate-500 font-bold hover:bg-slate-100"
          >
            <LogOut size={18} /> Logout
          </Button>
        </a>
      </div>
    </aside>
  );
};

export default AdminSidebar;
