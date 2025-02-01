import { Rule } from "@sanity/types"; // Import Rule type

const blogPostSchema = {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule: Rule) => Rule.required().max(200),
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export default blogPostSchema;
