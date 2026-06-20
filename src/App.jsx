import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Applayout from "./componenet/Applayout";
import Home from "./componenet/Home";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
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