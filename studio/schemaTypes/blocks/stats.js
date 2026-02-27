import { defineField, defineType } from "sanity";

export default defineType({
  name: "stats",
  title: "Stats",
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
              name: "value",
              title: "Value",
              type: "string",
              validation: (rule) => rule.required()
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (rule) => rule.required()
            })
          ],
          preview: {
            select: { title: "value", subtitle: "label" }
          }
        }
      ],
      validation: (rule) => rule.min(2)
    })
  ],
  preview: {
    select: { title: "heading" }
  }
});
