import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // 👈 Ensure jsdom is used for DOM-based tests
  },
});
