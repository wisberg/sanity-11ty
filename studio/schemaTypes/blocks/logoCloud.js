import { defineField, defineType } from "sanity";

export default defineType({
  name: "logoCloud",
  title: "Logo Cloud",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "logos",
      title: "Logos",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt text", type: "string" }]
        }
      ],
      validation: (rule) => rule.min(3)
    })
  ],
  preview: {
    select: { title: "heading" }
  }
});
