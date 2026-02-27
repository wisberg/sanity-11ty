import { defineField, defineType } from "sanity";

export default defineType({
  name: "navItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required()
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
      title: "Internal Page",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) => parent?.linkType !== "internal"
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      hidden: ({ parent }) => parent?.linkType !== "external"
    }),
    defineField({
      name: "children",
      title: "Subpages",
      type: "array",
      of: [{ type: "navItem" }]
    })
  ],
  preview: {
    select: { title: "label" }
  }
});
