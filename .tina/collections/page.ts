import type { Collection } from "tinacms";

export const PageCollection: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/pages",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    },
  },
  fields: [
    {
      name: "title",
      type: "string",
      required: true
    },
    {
      name: "description",
      type: "string",
      required: true
    },
    {
      type: 'object',
      name: 'hero',
      label: 'Hero Section',
      fields: [
        { name: 'title', label: 'Title', type: 'string' },
        { name: 'description', label: 'Description', type: 'string' },
        { name: 'primary_button_label', label: 'Primary Button Label', type: 'string' },
        { name: 'secondary_button_label', label: 'Secondary Button Label', type: 'string' },
      ]
    },
    {
      type: 'object',
      name: 'features',
      label: 'Features Section',
      list: true,
      fields: [
        { name: 'title', label: 'Title', type: 'string' },
        { name: 'description', label: 'Description', type: 'string' },
      ]
    },
    {
      type: 'object',
      name: 'testimonial',
      label: 'Testimonial Section',
      fields: [
        { name: 'quote', label: 'Quote', type: 'string' },
        { name: 'author', label: 'Author', type: 'string' },
        { name: 'handle', label: 'Handle', type: 'string' },
      ]
    },
  ]
}
