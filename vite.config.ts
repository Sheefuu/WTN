import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "node:fs/promises";
import path from "path";
import { componentTagger } from "lovable-tagger";
import mammoth from "mammoth";

const legalDocumentPlugin = () => ({
  name: "legal-document-content",
  resolveId(id: string) {
    if (id === "virtual:privacy-policy" || id === "virtual:terms-and-conditions") {
      return `\0${id}`;
    }
  },
  async load(id: string) {
    const documents: Record<string, string> = {
      "\0virtual:privacy-policy": "privacy-policy.docx",
      "\0virtual:terms-and-conditions": "termsandconditions.docx",
    };
    const fileName = documents[id];

    if (!fileName) {
      return;
    }

    const filePath = path.resolve(__dirname, "public", fileName);
    const buffer = await fs.readFile(filePath);
    const result = await mammoth.convertToHtml({ buffer });

    return `export default ${JSON.stringify(result.value)};`;
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './',  // ✅ this makes asset paths relative
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    legalDocumentPlugin(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));