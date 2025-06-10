import { NotificationProvider } from "@/store/notification-context";
import MainHeader from "./main-header";
import { useContext } from "react";
import Notification from "../ui/notification";

export default function Layout({ children }) {
  const { notification } = useContext(NotificationProvider);
  const activeNotification = notification;

  return (
    <>
      <NotificationProvider>
        <MainHeader />
        <main>{children}</main>
        {activeNotification && (
          <Notification
            title={activeNotification.title}
            message={activeNotification.message}
            status={activeNotification.status}
          />
        )}
      </NotificationProvider>
    </>
  );
}
