import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

interface RTF {
  plain_text: string;
  href?: string;
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    code?: boolean;
    color?: string;
  };
}

interface Block {
  id: string;
  type: string;
  [key: string]: any;
}

interface NotionNoteProps {
  pageId: string;
}

function RichTextRenderer({ text }: { text: RTF }) {
  let content: React.ReactNode = text.plain_text;

  if (text.annotations?.bold) {
    content = <strong>{content}</strong>;
  }
  if (text.annotations?.italic) {
    content = <em>{content}</em>;
  }
  if (text.annotations?.strikethrough) {
    content = <s>{content}</s>;
  }
  if (text.annotations?.underline) {
    content = <u>{content}</u>;
  }
  if (text.annotations?.code) {
    content = (
      <code className="bg-gray-100 px-1 rounded text-sm">{content}</code>
    );
  }

  if (text.href) {
    return (
      <a
        href={text.href}
        className="hover:underline underline-offset-2 decoration-0 font-inter-display"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <>{content}</>;
}

export function NotionNote({ pageId }: NotionNoteProps) {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPage() {
      try {
        const response = await fetch(
          `http://localhost:3001/api/notion/page/${pageId}/blocks`,
        );
        const data = await response.json();
        setBlocks(data.results);
      } catch (error) {
        console.error("Error fetching page:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPage();
  }, [pageId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="notion-page">
      {blocks.map((block) => (
        <BlockRenderer key={block.id} block={block} />
      ))}
    </div>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  const { type } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p className="font-inter my-8 opacity-90">
          {value.rich_text.map((text: RTF, index: number) => {
            return <RichTextRenderer key={index} text={text} />;
          })}
        </p>
      );

    case "heading_1":
      return (
        <h1 className="font-notes font-bold text-6xl my-4 tracking-tighter">
          {value.rich_text.map((text: RTF, index: number) => {
            return <RichTextRenderer key={index} text={text} />;
          })}
        </h1>
      );

    case "heading_2":
      return (
        <h2 className="font-inter-display">
          {value.rich_text.map((text: RTF, index: number) => {
            return <RichTextRenderer key={index} text={text} />;
          })}
        </h2>
      );

    case "heading_3": {
      const hasLink = value.rich_text.some((text: RTF) => text.href);

      return (
        <h3 className="flex flex-row items-center gap-1 font-inter-display opacity-80 text-sm">
          {value.rich_text.map((text: RTF, index: number) => {
            return <RichTextRenderer key={index} text={text} />;
          })}
          {hasLink && (
            <span>
              <ArrowUpRightIcon />
            </span>
          )}
        </h3>
      );
    }

    case "bulleted_list_item":
      return (
        <li className="font-inter">
          {value.rich_text.map((text: RTF, index: number) => {
            return <RichTextRenderer key={index} text={text} />;
          })}
        </li>
      );

    case "numbered_list_item":
      return (
        <li className="font-inter">
          {value.rich_text.map((text: RTF, index: number) => {
            return <RichTextRenderer key={index} text={text} />;
          })}
        </li>
      );

    case "image": {
      const imageUrl =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption
        ?.map((text: RTF) => text.plain_text)
        .join("");

      return (
        <figure className="my-4">
          <img
            src={imageUrl}
            alt={caption || "Image"}
            className="mx-auto rounded-2xl md:max-w-[500px]"
          />
          {caption && (
            <figcaption className="text-sm text-gray-600 mt-2 text-center">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case "code":
      return (
        <pre className="my-4 p-4 bg-gray-100 rounded overflow-x-auto">
          <code>
            {value.rich_text.map((text: RTF) => text.plain_text).join("")}
          </code>
        </pre>
      );

    default:
      return <div>Unsupported block type: {type}</div>;
  }
}
