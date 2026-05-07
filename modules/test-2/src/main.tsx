import { ModuleContextProvider } from "@sand-enterpriseai/module-context/react";
import { createRoot } from "react-dom/client";
import Widget from "./components/Widget";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <ModuleContextProvider
      value={{
        app: null,
        permissions: [],
        preferences: null,
        status: "idle",
        error: null,
      }}
    >
      <Widget />
    </ModuleContextProvider>,
  );
}
