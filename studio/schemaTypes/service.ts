import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Globe (web)", value: "Globe" },
          { title: "Smartphone (mobile)", value: "Smartphone" },
          { title: "Server (backend)", value: "Server" },
          { title: "Sparkles (AI)", value: "Sparkles" },
          { title: "Database", value: "Database" },
          { title: "Palette (design)", value: "Palette" },
          { title: "Shield (security)", value: "Shield" },
          { title: "Cloud", value: "Cloud" },
        ],
      },
      initialValue: "Globe",
    }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 10 }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
});
