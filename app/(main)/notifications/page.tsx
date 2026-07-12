import NotificationHeader from "@/components/notifications/NotificationHeader";
import NotificationList from "@/components/notifications/NotificationList";

export default function NotificationsPage() {
  return (
    <main className="min-h-screen">
      <NotificationHeader />

      <section className="px-6 py-6">
        <NotificationList />
      </section>
    </main>
  );
}