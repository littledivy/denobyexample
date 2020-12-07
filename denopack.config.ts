import {
  htmlTemplate,
  pluginCssBundle as css,
  pluginHtmlBundle as html,
  pluginServe as serve,
  pluginTerserTransform as terser,
  useCache,
} from "https://deno.land/x/denopack@0.10.0/mod.ts";

import type {
  RollupOptions,
  TemplateOpts,
} from "https://deno.land/x/denopack@0.10.0/mod.ts";

const isDev = !Deno.env.get("PROD");

import type { Plugin } from "https://deno.land/x/denopack@0.10.0/deps.ts";

function createHtmlTemplate(opts: TemplateOpts): Promise<string> {
  opts.path = "";
  opts.bodyEntry =
    `<noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>`;
  return htmlTemplate(opts);
}

function string(): Plugin {
  return {
    name: "denopack-plugin-string",
    async load(id) {
      if (id.startsWith("example:")) {
        let content = await Deno.readTextFile(
          id.replace("example:", "examples/") + ".md",
        );
        let code = await Deno.readTextFile(
          id.replace("example:", "examples/") + ".ts",
        );
        return `export default { code:\`${code}\` , body:\`${content}\` };`;
      }
    },
  } as Plugin;
}

const config: RollupOptions = {
  input: "./app.tsx",
  plugins: [
    css({ output: "mod.css" }),
    string(),
    html({
      template: createHtmlTemplate,
      title: "Deno by Example",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content: "Learn Deno by Examples.",
        },
      ],
    }),
    ...useCache({
      compilerOptions: {
        lib: ["dom"],
        jsx: "react",
      },
    }),
    terser({
      module: true,
      compress: true,
      mangle: true,
    }),
  ],
  output: {
    dir: "dist",
    sourcemap: true,
  },
};

export default config;
