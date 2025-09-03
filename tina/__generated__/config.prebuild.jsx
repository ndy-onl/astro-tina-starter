// .tina/config.ts
import { defineConfig } from "tinacms";

// .tina/collections/page.ts
var PageCollection = {
  name: "page",
  label: "Pages",
  path: "src/content/pages",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    }
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
      type: "object",
      name: "hero",
      label: "Hero Section",
      fields: [
        { name: "title", label: "Title", type: "string" },
        { name: "description", label: "Description", type: "string" },
        { name: "primary_button_label", label: "Primary Button Label", type: "string" },
        { name: "secondary_button_label", label: "Secondary Button Label", type: "string" }
      ]
    },
    {
      type: "object",
      name: "features",
      label: "Features Section",
      list: true,
      fields: [
        { name: "title", label: "Title", type: "string" },
        { name: "description", label: "Description", type: "string" }
      ]
    },
    {
      type: "object",
      name: "testimonial",
      label: "Testimonial Section",
      fields: [
        { name: "quote", label: "Quote", type: "string" },
        { name: "author", label: "Author", type: "string" },
        { name: "handle", label: "Handle", type: "string" }
      ]
    }
  ]
};

// .tina/config.ts
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      PageCollection
    ]
  }
});
export {
  config_default as default
};
