import Feed from "@/components/layout/Feed";
import RightSidebar from "@/components/layout/RightSidebar";
import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-[260px_1fr_320px] px-6">
        <Sidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
}