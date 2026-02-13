import express from "express";
import cors from "cors";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// CORS - only needed in development, not in production since same origin
if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}

app.use(express.json());

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// API Routes
app.get("/api/notion/page/:id", async (req, res) => {
  try {
    const page = await notion.pages.retrieve({ page_id: req.params.id });
    res.json(page);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/notion/page/:id/blocks", async (req, res) => {
  try {
    const blocks = await notion.blocks.children.list({
      block_id: req.params.id,
    });
    res.json(blocks);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/notion/search", async (req, res) => {
  try {
    const response = await notion.search({
      query: req.body.query || "",
      filter: { property: "object", value: "page" },
    });
    res.json(response);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Serve static files from Vite build in production
if (process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, "../dist");
  app.use(express.static(distPath));

  // Handle client-side routing - use regex to match all non-API routes
  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
