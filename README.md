# rollup-ts-simple-starter

This repo contains a simple boilerplate/starter to create a NPM library using Rollup, including importing a module from `node_modules` and converting it from CommonJS.

## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/raulmarindev/rollup-ts-simple-starter.git
cd rollup-ts-simple-starter
npm install
```

The name of your package needs to be updated in the `rollup.config.js` file.

```
const PACKAGE_NAME = 'your-package-name';
```

The source of your package should be located in the src folder with `index.ts` being the entry point of the module.

## Available Scripts

`npm run build` builds the library to `dist`, generating these files:

- `dist/your-package-name.js`
  A CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency. This corresponds to the `"main"` field in package.json
- `dist/your-package-name.mjs`
  an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. This corresponds to the `"module"` field in package.json
- `dist/your-package-name.umd.js`
  a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json
- `dist/your-package-name.d.ts`
  the type definitions for your package

`npm run dev` builds the library, then keeps rebuilding it whenever the source files change using [rollup-watch](https://github.com/rollup/rollup-watch).

## License

[Apache 2.0](LICENSE).
