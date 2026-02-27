import { defineField, defineType } from "sanity";

export default defineType({
  name: "marketoSignup",
  title: "Marketo Signup (Mock)",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({ name: "subheading", title: "Subheading", type: "text", rows: 3 }),
    defineField({
      name: "buttonLabel",
      title: "Button Label",
      type: "string",
      initialValue: "Request access"
    }),
    defineField({
      name: "disclaimer",
      title: "Disclaimer",
      type: "text",
      rows: 2,
      initialValue: "This is a demo form. No data is submitted."
    })
  ],
  preview: {
    select: { title: "heading", subtitle: "subheading" }
  }
});
