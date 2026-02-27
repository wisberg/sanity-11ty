import { defineField, defineType } from "sanity";

export default defineType({
  name: "featureGrid",
  title: "Feature Grid",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "subheading", title: "Subheading", type: "text", rows: 3 }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon", type: "string" }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required()
            }),
            defineField({ name: "description", title: "Description", type: "text" })
          ],
          preview: {
            select: { title: "title", subtitle: "description" }
          }
        }
      ],
      validation: (rule) => rule.min(2)
    })
  ],
  preview: {
    select: { title: "heading", subtitle: "subheading" }
  }
});
