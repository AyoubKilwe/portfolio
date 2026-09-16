import { defineField, defineType } from "sanity";

export const skillGroup = defineType({
  name: "skillGroup",
  title: "Skill Group",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Group title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "accent",
      title: "Accent color",
      type: "string",
      options: {
        list: [
          { title: "Sky", value: "from-sky-400 to-cyan-300" },
          { title: "Violet", value: "from-violet-400 to-fuchsia-300" },
          { title: "Pink", value: "from-pink-400 to-rose-300" },
          { title: "Emerald", value: "from-emerald-400 to-teal-300" },
          { title: "Amber", value: "from-amber-400 to-orange-300" },
          { title: "Lime", value: "from-lime-400 to-green-300" },
        ],
      },
      initialValue: "from-sky-400 to-cyan-300",
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "icon",
              title: "Icon id",
              description: "skillicons.dev id (js, ts, react, nextjs, nodejs, mongodb, flutter, ...). Use 'ai' for the AI icon.",
              type: "string",
            }),
          ],
          preview: { select: { title: "name", subtitle: "icon" } },
        },
      ],
    }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 10 }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
});
