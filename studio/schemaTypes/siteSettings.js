import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      initialValue: "Simple 11ty + Sanity"
    }),
    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "url",
      description: "Used for canonical URLs, sitemap, and robots.txt"
    }),
    defineField({
      name: "navigation",
      title: "Header Navigation",
      type: "array",
      of: [{ type: "navItem" }]
    }),
    defineField({
      name: "footerLinks",
      title: "Footer Links",
      type: "array",
      of: [{ type: "navItem" }]
    }),
    defineField({
      name: "homepage",
      title: "Homepage",
      type: "reference",
      to: [{ type: "page" }],
      description: "Select the page that should render at /"
    }),
    defineField({
      name: "defaultDescription",
      title: "Default Meta Description",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default Open Graph Image",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "analyticsId",
      title: "Analytics ID",
      type: "string",
      description: "e.g. G-XXXXXXX"
    })
  ]
});
