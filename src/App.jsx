import "./App.css";
import Home from "./components/home/Home";
import TopNav from "./components/top-nav/TopNav";
import ScrollDown from "./components/animation/scrollDown/ScrollDown";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SideNav from "./components/dashboard/SideNav/SideNav";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/login/LoginPage";
// import PrivateRoute from "./route/PrivateRoute";
import { AuthProvider } from "./auth/AuthProvider";
import { useAuth } from "./auth/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { checkAuth } from "./api/auth";

import "react-toastify/dist/ReactToastify.css";

import Notify from "./components/notification/Notify";

// const { isAuthenticated } = useAuth();
let hasNotified = false;
function HandleNotLogIn() {
  const { showNotification } = Notify();

  if (!hasNotified) {
    showNotification("User Not Logged In, Redirecting to Login Page", {
      type: "warning",
      autoClose: 2000,
    });
    hasNotified = true;
  }

  return <Navigate to='/login' />;
}
function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // If the user is not authenticated, navigate to the login page.
  // Check if the user is authenticated
  if (!isAuthenticated) {
    return <HandleNotLogIn />;
  }

  return children;
}

function App() {
  const { showNotification } = Notify(); // Use the custom hook

  const navItemsList = [
    { displayName: "Dashboard", link: "ef3rf3", className: "" },
    { displayName: "History", link: "ef3rf3", className: "sml-scrn-only" },
    { displayName: "Payout", link: "ef3rf3", className: "sml-scrn-only" },
    { displayName: "Dashboard", link: "ef3rf3", className: "sml-scrn-only" },
  ];
  const notify = () => {
    showNotification("This is a warning notification!", { type: "warning" });
    // toast("Wow! This is a notification!");
    // toast.success("This is a success notification!", {
    //   autoClose: 10000, // 5 seconds
    // });
    // toast.error("This is an error notification!");
    // toast.warn("This is a warning notification!");
    // toast.info("This is an info notification!");
    // toast.dismiss();
  };

  return (
    <BrowserRouter>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <button onClick={() => checkAuth()}>Show Toast</button>
      <AuthProvider>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <TopNav navItemsList={navItemsList} />
                <ScrollDown />
                <Home />
              </>
            }
          />

          <Route
            path='/dashboard/*'
            element={
              <PrivateRoute path='/dashboard'>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
