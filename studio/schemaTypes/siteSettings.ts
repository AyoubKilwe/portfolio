import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "profile", title: "Profile", default: true },
    { name: "about", title: "About" },
    { name: "links", title: "Links & Files" },
  ],
  fields: [
    defineField({ name: "name", title: "Full name", type: "string", group: "profile", validation: (r) => r.required() }),
    defineField({ name: "shortName", title: "Short name (shown in hero)", type: "string", group: "profile" }),
    defineField({ name: "title", title: "Job title", type: "string", group: "profile" }),
    defineField({
      name: "roles",
      title: "Typewriter roles",
      description: "Rotating titles shown under your name in the hero",
      type: "array",
      of: [{ type: "string" }],
      group: "profile",
    }),
    defineField({ name: "tagline", title: "Tagline", type: "text", rows: 2, group: "profile" }),
    defineField({ name: "location", title: "Location", type: "string", group: "profile" }),
    defineField({ name: "available", title: "Available for new projects", type: "boolean", initialValue: true, group: "profile" }),
    defineField({
      name: "photo",
      title: "Profile photo",
      type: "image",
      options: { hotspot: true },
      group: "profile",
    }),
    defineField({
      name: "about",
      title: "About paragraphs",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      group: "about",
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      group: "about",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", title: "Label" }),
            defineField({ name: "value", type: "number", title: "Value" }),
            defineField({ name: "suffix", type: "string", title: "Suffix (e.g. +)" }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        },
      ],
    }),
    defineField({ name: "email", title: "Email", type: "string", group: "links" }),
    defineField({ name: "github", title: "GitHub URL", type: "url", group: "links" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url", group: "links" }),
    defineField({ name: "twitter", title: "X / Twitter URL", type: "url", group: "links" }),
    defineField({
      name: "resume",
      title: "CV / Resume (PDF)",
      type: "file",
      options: { accept: ".pdf" },
      group: "links",
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
