import { useEffect, useState } from "react";

const OfflineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOnlineMessage, setShowOnlineMessage] = useState(false)

  useEffect(() => {
  const goOnline = () => {

    setIsOnline(true);
    setShowOnlineMessage(true);

    setTimeout(() => {
      setShowOnlineMessage(false);
    }, 3000);
  };

  const goOffline = () => {
    setIsOnline(false);
  };

  window.addEventListener("online", goOnline);
  window.addEventListener("offline", goOffline);

  return () => {
    window.removeEventListener("online", goOnline);
    window.removeEventListener("offline", goOffline);
  };
}, []);


  return (
  <>
    {!isOnline && (
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
        You are offline. Please connect to the internet.
      </div>
    )}

    {showOnlineMessage && (
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
        You're back online!
      </div>
    )}
  </>
);

};

export default OfflineStatus;