import { Rule } from "@sanity/types"; // Import Rule type

const categorySchema = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "additionalImages",
      title: "Additional Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule: Rule) => Rule.max(3),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};

export default categorySchema;
