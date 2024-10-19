import { useRef } from "react";
import { toast } from "react-toastify";

const Notify = () => {
  const shownNotifications = useRef(new Set()); // Track shown notifications

  const showNotification = (message, timout = 4000, options = {}) => {
    if (!shownNotifications.current.has(message)) {
      toast(message, options); // Show toast
      shownNotifications.current.add(message); // Mark as shown

      // Remove the notification from the set after 5 seconds
      setTimeout(() => {
        shownNotifications.current.delete(message); // Remove from the set
      }, timout); // 5000 milliseconds = 5 seconds
    }
  };

  return { showNotification };
};

export default Notify;
