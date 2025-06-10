import { createContext, useState } from "react";


const NotificationContext = createContext({
  notification: null, // {title, message, status}
  showNotification: function (notificationData) { },
  hideNotification: function () { },
})

export function NotificationProvider({ children }) {
  const [activeNotification, setActiveNotification] = useState(null);


  const showNotificationHandler = ({ title, message, status }) => {
    setActiveNotification({
      title, message, status
    })
  }

  const hideNotificationHandler = () => {
    setActiveNotification(null)
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler
  }

  return <NotificationContext.Provider value={context}>{children}</NotificationContext.Provider>
}


export default NotificationContext