import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import { AliasOptions, defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

//@ts-ignore
import path from "path";

//@ts-ignore
const root = path.resolve(__dirname, "src");

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd())

  // const BASE = env.VITE_BASE || "/"


  return {
    plugins: [react(), tsconfigPaths(), mdx()],
    resolve: {
      alias: {
        "@": root,
      } as AliasOptions,
    },
    define: {
      // __BASE__: JSON.stringify(BASE),
    },
    server: {
      open: false,
      host: '0.0.0.0',
      port: 5173,
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
    optimizeDeps: {
      entries: [],
      include: ["recharts"],
    },
  }
});
