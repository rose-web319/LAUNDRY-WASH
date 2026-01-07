import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./store/AuthProvider";
// import AuthProvider from "./store/AuthProvider";

const queryClient = new QueryClient();
function App() {
  return (
    <>
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
