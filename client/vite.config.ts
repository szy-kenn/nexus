import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    plugins: [react(), tsconfigPaths()],
    server: {
        host: true,
        proxy: {
            "/api": {
                target: "http://127.0.0.1:3000",
                secure: false,
                configure: (proxy, _options) => {
                    proxy.on("error", (err, _req, _res) => {
                        console.log("proxy error: ", err);
                    });
                    proxy.on("proxyReq", (proxyReq, req, _res) => {
                        console.log(
                            "Sending Request to the target: ",
                            req.method,
                            req.url
                        );
                    });
                    proxy.on("proxyRes", (proxyRes, req, _res) => {
                        console.log(
                            "Received Response from the Target: ",
                            proxyRes.statusCode,
                            req.url
                        );
                    });
                },
            },
        },
    },
});
