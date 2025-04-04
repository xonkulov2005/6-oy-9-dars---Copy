import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./layout/MainLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";

//pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Create from "./pages/Create";
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

function App() {
  const { user, dispatch, isAuthReady } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <Mainlayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.displayName && user?.photoURL) {
        dispatch({ type: "LOGIN", payload: user });
      }
      dispatch({ type: "AUTH_READY" });
    });
  }, []);
  return <>{isAuthReady && <RouterProvider router={routes} />}</>;
}

export default App;
