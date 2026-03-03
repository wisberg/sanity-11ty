import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "pageBuilder",
      title: "Page Builder",
      type: "array",
      of: [
        { type: "fullWidthHero" },
        { type: "hero" },
        { type: "richText" },
        { type: "featureGrid" },
        { type: "imageWithText" },
        { type: "testimonial" },
        { type: "stats" },
        { type: "logoCloud" },
        { type: "pricing" },
        { type: "faq" },
        { type: "sandBand" },
        { type: "darkBand" },
        { type: "marketoSignup" },
        { type: "showcase" },
        { type: "mediaMosaic" },
        { type: "timeline" },
        { type: "fullScreenHero" },
        { type: "cta" }
      ],
      validation: (rule) => rule.min(1)
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Overrides the page title for search engines.",
      fieldset: "seo"
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      fieldset: "seo"
    }),
    defineField({
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      fieldset: "seo"
    }),
    defineField({
      name: "seoImage",
      title: "SEO Image",
      type: "image",
      options: { hotspot: true },
      fieldset: "seo"
    }),
    defineField({
      name: "noIndex",
      title: "Hide from search engines",
      type: "boolean",
      initialValue: false,
      fieldset: "seo"
    })
  ],
  fieldsets: [
    {
      name: "seo",
      title: "SEO",
      options: { collapsible: true, collapsed: true }
    }
  ]
});
