import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./componenet/AppLayout";
import Home from "./componenet/Home";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: '/',
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;