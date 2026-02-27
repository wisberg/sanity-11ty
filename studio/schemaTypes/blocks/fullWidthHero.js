import { defineField, defineType } from "sanity";

export default defineType({
  name: "fullWidthHero",
  title: "Full Width Hero",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({ name: "subheading", title: "Subheading", type: "text", rows: 3 }),
    defineField({
      name: "primaryLabel",
      title: "Primary CTA Label",
      type: "string"
    }),
    defineField({
      name: "primaryLinkType",
      title: "Primary Link Type",
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
      name: "primaryInternalLink",
      title: "Primary Internal Link",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) => parent?.primaryLinkType !== "internal"
    }),
    defineField({
      name: "primaryExternalUrl",
      title: "Primary External URL",
      type: "url",
      hidden: ({ parent }) => parent?.primaryLinkType !== "external"
    }),
    defineField({
      name: "secondaryLabel",
      title: "Secondary CTA Label",
      type: "string"
    }),
    defineField({
      name: "secondaryLinkType",
      title: "Secondary Link Type",
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
      name: "secondaryInternalLink",
      title: "Secondary Internal Link",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) => parent?.secondaryLinkType !== "internal"
    }),
    defineField({
      name: "secondaryExternalUrl",
      title: "Secondary External URL",
      type: "url",
      hidden: ({ parent }) => parent?.secondaryLinkType !== "external"
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }]
    })
  ],
  preview: {
    select: { title: "heading", subtitle: "subheading" }
  }
});
