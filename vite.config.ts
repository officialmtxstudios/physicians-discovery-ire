import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8081,
    fs: {
      allow: ["."], // Allow serving files from the project root
    },
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve",
    configureServer(server) {
      console.log("Setting up Express middleware...");
      server.middlewares.use((req, res, next) => {
        if (req.url === '/test-ping') {
          res.end('test-pong');
          return;
        }
        next();
      });
      const app = createServer();
      server.middlewares.use(app);
    },
  };
}
