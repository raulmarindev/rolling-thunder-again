import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

const PACKAGE_NAME = 'your-package-name';
const DIST_FOLDER_FILENAME = `dist/${PACKAGE_NAME}`;

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: `${DIST_FOLDER_FILENAME}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${DIST_FOLDER_FILENAME}.mjs`,
        format: 'es',
        sourcemap: true,
      },
      {
        file: `${DIST_FOLDER_FILENAME}.umd.js`,
        format: 'umd',
        name: PACKAGE_NAME,
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${DIST_FOLDER_FILENAME}.d.ts`,
      format: 'es',
    },
  }),
];
