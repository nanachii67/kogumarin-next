import notes from "@/utils/notes.json";
import { Navigate, useParams } from "react-router-dom";
import NotesLayout from "@/layouts/NotesLayout";
import { formatDate } from "@/lib/formatDate";

interface EntryContent {
  content_index: number;
  paragraph_content?: string;
  image_content?: string;
  link_content?: string;
}

interface BlogsSlugs {
  entry_index: number;
  entry_date: string;
  entry_title: string;
  entry_contents: EntryContent[];
}

export default function BLOGS_Slug() {
  const { blogId } = useParams();

  const blogs: BlogsSlugs | undefined = blogId
    ? (notes[blogId as keyof typeof notes] as BlogsSlugs | undefined)
    : undefined;

  if (!blogs) {
    return <Navigate to="/notes" replace />;
  }

  return (
    <NotesLayout
      pageTitle="notes"
      noteIndex={`Entry #${blogs.entry_index}`}
      noteTitle={blogs.entry_title}
      noteDescription={`Written ${formatDate(blogs.entry_date)}`}
    >
      <div className="relative z-0">
        <div className="relative z-1 flex flex-col mx-auto pt-5 pb-10 md:pt-0 md:px-10 lg:px-0 text-koguma-text-light max-w-5xl font-inter text-center justify-center">
          <div className="flex flex-col gap-8 w-full mx-auto my-10 md:text-xl text-left">
            {blogs.entry_contents.map((item) => (
              <div key={item.content_index}>
                {item.paragraph_content && (
                  <p className="container">{item.paragraph_content}</p>
                )}
                {item.image_content && (
                  <img
                    className="mx-auto rounded-2xl max-w-[500px]"
                    src={item.image_content}
                    alt={blogs.entry_title}
                  />
                )}
                {item.link_content && (
                  <a href={item.link_content}>{item.link_content}</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </NotesLayout>
  );
}
