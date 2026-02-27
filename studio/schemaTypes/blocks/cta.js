import { defineField, defineType } from "sanity";

export default defineType({
  name: "cta",
  title: "Call To Action",
  type: "object",
  fields: [
    defineField({ name: "text", title: "Text", type: "string" }),
    defineField({
      name: "buttonLabel",
      title: "Button Label",
      type: "string",
      initialValue: "Learn more"
    }),
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
    select: { title: "buttonLabel", subtitle: "text" }
  }
});
