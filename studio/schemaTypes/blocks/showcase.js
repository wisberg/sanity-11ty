import { defineField, defineType } from "sanity";

export default defineType({
  name: "showcase",
  title: "Showcase",
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
    defineField({
      name: "image",
      title: "Feature Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }]
    }),
    defineField({
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      options: {
        list: [
          { title: "Right", value: "right" },
          { title: "Left", value: "left" }
        ],
        layout: "radio"
      },
      initialValue: "right"
    }),
    defineField({ name: "primaryLabel", title: "Primary CTA Label", type: "string" }),
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
    defineField({ name: "secondaryLabel", title: "Secondary CTA Label", type: "string" }),
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
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }]
    })
  ],
  preview: {
    select: { title: "heading", subtitle: "body" }
  }
});
