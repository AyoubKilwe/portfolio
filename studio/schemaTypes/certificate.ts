import { defineField, defineType } from "sanity";

export const certificate = defineType({
  name: "certificate",
  title: "Certificate",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "issuer", title: "Issuer (e.g. Meta)", type: "string" }),
    defineField({ name: "platform", title: "Platform (e.g. Coursera)", type: "string" }),
    defineField({ name: "date", title: "Completion date", type: "date" }),
    defineField({ name: "description", title: "Short description", type: "text", rows: 3 }),
    defineField({
      name: "image",
      title: "Certificate image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "pdf", title: "Certificate PDF", type: "file", options: { accept: ".pdf" } }),
    defineField({ name: "verifyUrl", title: "Verification URL", type: "url" }),
    defineField({
      name: "skills",
      title: "Skills / courses",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "featured", title: "Featured (large card)", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 10 }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "issuer", media: "image" } },
});
