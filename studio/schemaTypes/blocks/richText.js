import { defineField, defineType } from "sanity";

export default defineType({
  name: "richText",
  title: "Rich Text",
  type: "object",
  fields: [
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required()
    })
  ],
  preview: {
    prepare() {
      return { title: "Rich Text Block" };
    }
  }
});
