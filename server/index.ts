import express from "express";
import cors from "cors";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Get a specific page
app.get("/api/notion/page/:id", async (req, res) => {
  try {
    const page = await notion.pages.retrieve({ page_id: req.params.id });
    res.json(page);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Get page content (blocks)
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

// Search for pages
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

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
