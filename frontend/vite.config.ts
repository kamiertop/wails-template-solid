import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    solid(),
    tanstackRouter({
      target: "solid",
      autoCodeSplitting: true,
    }),
  ],
});
