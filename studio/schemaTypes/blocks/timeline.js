import { defineField, defineType } from "sanity";

export default defineType({
  name: "timeline",
  title: "Timeline",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (rule) => rule.required()
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required()
            }),
            defineField({ name: "body", title: "Body", type: "text", rows: 3 })
          ],
          preview: {
            select: { title: "title", subtitle: "label" }
          }
        }
      ],
      validation: (rule) => rule.min(3)
    })
  ],
  preview: {
    select: { title: "heading" }
  }
});
