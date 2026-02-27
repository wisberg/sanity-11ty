import { defineField, defineType } from "sanity";

export default defineType({
  name: "mediaMosaic",
  title: "Media Mosaic",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "subheading", title: "Subheading", type: "text", rows: 3 }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Alt text", type: "string" },
            { name: "caption", title: "Caption", type: "string" }
          ]
        }
      ],
      validation: (rule) => rule.min(3)
    })
  ],
  preview: {
    select: { title: "heading", subtitle: "subheading" }
  }
});
