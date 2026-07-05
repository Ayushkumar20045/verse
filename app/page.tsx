import Feed from "@/components/layout/Feed";
import RightSidebar from "@/components/layout/RightSidebar";
import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex max-w-[1440px]">
        {/* Sidebar */}
        <aside className="w-72 border-r border-neutral-800">
          <Sidebar />
        </aside>

        {/* Feed */}
        <section className="w-[700px] border-r border-neutral-800">
          <Feed />
        </section>

        {/* Right Sidebar */}
        <aside className="w-[320px]">
          <RightSidebar />
        </aside>
      </div>
    </main>
  );
}