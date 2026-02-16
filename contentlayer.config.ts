import { defineDocumentType, makeSource } from 'contentlayer2/source-files';

export const calculateReadingTime = (text: string) => {
    // Step 2: Determine the average reading speed (words per minute)
    const wordsPerMinute = 200;
    // Step 3: Calculate the word count
    const noOfWords = text.split(/\s/g).length;
    // Step 4: Calculate the estimated reading time (in minutes)
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);

    // Step 5: Format the output
    return `${minutes < 1 ? '~' : ''}${readTime} min read`;
};

export const Note = defineDocumentType(() => ({
    name: 'Note',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (note) => `/${note._raw.flattenedPath}`,
        },
        readingTime: {
            type: 'string',
            resolve: (post) => calculateReadingTime(post.body.raw),
        },
    },
}));

export default makeSource({ contentDirPath: 'content', documentTypes: [Note] });
