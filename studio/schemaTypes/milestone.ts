import { defineField, defineType } from "sanity";

export const milestone = defineType({
  name: "milestone",
  title: "Journey milestone",
  type: "document",
  fields: [
    defineField({ name: "period", title: "Period (e.g. 2026 or 2024 - 2025)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "org", title: "Organisation / context", type: "string" }),
    defineField({
      name: "points",
      title: "Bullet points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "order", title: "Order (lower shows first)", type: "number", initialValue: 10 }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "period" } },
});
