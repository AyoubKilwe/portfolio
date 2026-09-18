import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "tagline", title: "Tagline (one line)", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({
      name: "image",
      title: "Cover image / screenshot",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
    }),
    defineField({
      name: "gallery",
      title: "More screenshots",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "emoji", title: "Emoji (fallback when no image)", type: "string", initialValue: "🚀" }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "stack",
      title: "Tech stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "github", title: "GitHub URL", type: "url" }),
    defineField({ name: "live", title: "Live demo URL", type: "url" }),
    defineField({ name: "playStore", title: "Google Play URL", type: "url" }),
    defineField({ name: "featured", title: "Featured (large card)", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Order (lower shows first)", type: "number", initialValue: 10 }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "tagline", media: "image", featured: "featured" },
    prepare: ({ title, subtitle, media, featured }) => ({
      title: featured ? `★ ${title}` : title,
      subtitle,
      media,
    }),
  },
});
