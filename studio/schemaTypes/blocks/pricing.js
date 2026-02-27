import { defineField, defineType } from "sanity";

export default defineType({
  name: "pricing",
  title: "Pricing",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "subheading", title: "Subheading", type: "text", rows: 3 }),
    defineField({
      name: "plans",
      title: "Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: (rule) => rule.required()
            }),
            defineField({ name: "price", title: "Price", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text" }),
            defineField({
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }]
            }),
            defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
            defineField({ name: "ctaUrl", title: "CTA URL", type: "url" }),
            defineField({ name: "featured", title: "Featured", type: "boolean" })
          ],
          preview: {
            select: { title: "name", subtitle: "price" }
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
