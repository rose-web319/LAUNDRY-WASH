import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./store/AuthProvider";
import { detectCookiesBlocked } from "./utils/cookieCheck";
import CookieBanner from "./components/cookieBanner";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [showCookieBanner, setShowCookiesBanner] = useState(false);

  useEffect(() => {
    const checkCookies = () => {
      const blocked = detectCookiesBlocked();
      setShowCookiesBanner(blocked);
    };
    // check immediately
    checkCookies();
    //check periodically (every 30 seconds) in case user enables cookies
    const interval = setInterval(checkCookies, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showCookieBanner && (
        <CookieBanner onDismiss={() => setShowCookiesBanner(false)} />
      )}
      {showCookieBanner}
      <ToastContainer position="bottom-center" />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
