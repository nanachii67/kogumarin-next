import { Navigate, useParams } from "react-router-dom";
import NotesLayout from "@/layouts/NotesLayout";
import { formatDate } from "@/lib/formatDate";
import { allPosts, Post } from "@/contentlayer/generated";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";

export default function MDXTesting() {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the post by slug
  const post = allPosts.find((post: Post) => post.slug === slug || post._raw.flattenedPath === slug);

  // Get the MDX component (must be before any returns)
  const MDXContent = useMemo(() => {
    if (!post) return null;
    return getMDXComponent(post.body.code);
  }, [post]);

  // If no post found, redirect or show 404
  if (!post) {
    return <Navigate to="/notes" replace />;
  }

  return (
    <NotesLayout pageTitle="notes">
      <div className="relative z-0">
        <div className="relative z-1 flex flex-col mx-auto pb-10 md:pt-0 md:px-10 lg:px-0 text-koguma-text-light max-w-5xl font-inter text-center justify-center">
          <div className="flex flex-col gap-8 w-full mx-auto md:py-5 md:text-xl text-left">
            <header>
              <h1>{post.title}</h1>
              <time>{formatDate(post.date)}</time>
            </header>
            <article className="prose prose-lg max-w-none">
              {MDXContent && <MDXContent />}
            </article>
          </div>
        </div>
      </div>
    </NotesLayout>
  );
}