import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const REMOTE_ORIGIN = process.env.DEV_STUDIO_MODULE_ORIGIN ?? "http://localhost:5175";
const REMOTE_ENTRY_FILENAME =
  process.env.DEV_STUDIO_MODULE_REMOTE_ENTRY_FILENAME ?? "test2Module/remoteEntry.js";

export default defineConfig({
  base: `${REMOTE_ORIGIN}/`,
  plugins: [
    react(),
    federation({
      name: "test2Module",
      filename: REMOTE_ENTRY_FILENAME,
      dts: false,
      exposes: {
        "./Widget": "./src/components/Widget.tsx",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^19.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
        "@sand-enterpriseai/module-context/react": {
          singleton: true,
          requiredVersion: "^0.1.0",
        },
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 5175,
    origin: REMOTE_ORIGIN,
    cors: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 5175,
  },
  build: {
    target: "chrome89",
  },
});
