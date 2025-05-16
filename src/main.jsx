import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Phonic from "./Component/Phonic.jsx";
import Body from "./Component/Body.jsx";
import PronunciationPractice from "./Component/PronunciationPractice.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/phonics",
        element: <Phonic />,
      },
      {
        path: "/pronunciation",
        element: <PronunciationPractice />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
