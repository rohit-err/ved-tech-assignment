import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import useStore from "./store/useStore";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";

function App() {
  const { isAuthenticated, isCheckingAuth, checkAuth } = useStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-sm text-on-surface-variant">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#ffffff",
            color: "#191c1e",
            border: "1px solid #c3c6d6",
            borderRadius: "8px",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#003d9b",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ba1a1a",
              secondary: "#ffffff",
            },
          },
        }}
      />
      <div className="min-h-screen">
        {!isAuthenticated ? <LoginPage /> : <Dashboard />}
      </div>
    </>
  );
}

export default App;
