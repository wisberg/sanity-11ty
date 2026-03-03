import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "header", title: "Header" },
    { name: "footer", title: "Footer" },
    { name: "seo", title: "SEO" },
    { name: "global", title: "Global" }
  ],
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      initialValue: "Simple 11ty + Sanity",
      group: "global"
    }),
    defineField({
      name: "logo",
      title: "Site Logo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
      group: "header"
    }),
    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "url",
      description: "Used for canonical URLs, sitemap, and robots.txt",
      group: "seo"
    }),
    defineField({
      name: "navigation",
      title: "Header Navigation",
      type: "array",
      of: [{ type: "navItem" }],
      group: "header"
    }),
    defineField({
      name: "evergreenLinks",
      title: "Evergreen Links (Header Right)",
      type: "array",
      of: [{ type: "navItem" }],
      group: "header"
    }),
    defineField({
      name: "footerLinks",
      title: "Footer Links",
      type: "array",
      of: [{ type: "navItem" }],
      group: "footer"
    }),
    defineField({
      name: "footerBackground",
      title: "Footer Background Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
      group: "footer"
    }),
    defineField({
      name: "footerTagline",
      title: "Footer Tagline",
      type: "string",
      group: "footer"
    }),
    defineField({
      name: "footerLegal",
      title: "Footer Legal",
      type: "text",
      rows: 2,
      group: "footer"
    }),
    defineField({
      name: "homepage",
      title: "Homepage",
      type: "reference",
      to: [{ type: "page" }],
      description: "Select the page that should render at /",
      group: "global"
    }),
    defineField({
      name: "defaultDescription",
      title: "Default Meta Description",
      type: "text",
      rows: 3,
      group: "seo"
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default Open Graph Image",
      type: "image",
      options: { hotspot: true },
      group: "seo"
    }),
    defineField({
      name: "analyticsId",
      title: "Analytics ID",
      type: "string",
      description: "e.g. G-XXXXXXX",
      group: "seo"
    })
  ]
});
