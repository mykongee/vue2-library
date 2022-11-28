import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const libraries = [
  {
    entry: path.resolve(__dirname, '../lib/pages/One/one.entry.js'),
    fileName: 'One/one',
  },
  {
    entry: path.resolve(__dirname, '../lib/pages/Two/two.entry.js'),
    fileName: 'Two/two',
  },
  {
    entry: path.resolve(__dirname, '../lib/pages/Three/three.entry.js'),
    fileName: 'Three/three',
  },
];

libraries.forEach(async (lib) => {
  await build({
    build: {
      outDir: './dist',
      lib: {
        ...lib,
        formats: ['es', 'umd'],
      },
      emptyOutDir: false,
    },
  });
});