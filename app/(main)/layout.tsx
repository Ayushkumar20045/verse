import Sidebar from "@/components/layout/Sidebar";
import RightSidebar from "@/components/layout/RightSidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex max-w-[1440px]">
        {/* Sidebar */}
        <aside className="w-72 border-r border-neutral-800">
          <Sidebar />
        </aside>

        {/* Page Content */}
        <section className="w-[700px] border-r border-neutral-800">
          {children}
        </section>

        {/* Right Sidebar */}
        <aside className="w-[320px]">
          <RightSidebar />
        </aside>
      </div>
    </main>
  );
}