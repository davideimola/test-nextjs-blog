// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrismPlus from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    cover: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    id: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath,
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.replace("posts/", ""),
    },
    dateLocale: {
      type: "string",
      resolve: (post) => new Date(post.date).toLocaleDateString(),
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content/posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrismPlus, { ignoreMissing: true }]],
    remarkPlugins: [remarkGfm],
  },
});
