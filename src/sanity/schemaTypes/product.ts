import { Rule } from "@sanity/types"; // Import Rule type

const productSchema = {
  name: "product",
  title: "Product",
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
      options: { source: "name", maxLength: 96 },
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
      validation: (Rule: Rule) => Rule.max(4),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: Rule) => Rule.required().positive(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: Rule) => Rule.min(0).max(5).precision(1),
      initialValue: 0,
    },
    {
      name: "reviews",
      title: "Number of Reviews",
      type: "number",
      validation: (Rule: Rule) => Rule.min(0).integer(),
      initialValue: 0,
    },
  ],
};

export default productSchema;
