import { defineField, defineType } from "sanity";

export default defineType({
  name: "sandBand",
  title: "Sand Band",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({
      name: "linkType",
      title: "Link Type",
      type: "string",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" }
        ],
        layout: "radio"
      },
      initialValue: "internal",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "internalLink",
      title: "Internal Link",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) => parent?.linkType !== "internal"
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      hidden: ({ parent }) => parent?.linkType !== "external"
    })
  ],
  preview: {
    select: { title: "heading", subtitle: "body" }
  }
});
