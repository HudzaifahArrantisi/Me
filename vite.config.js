import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'img/**/*',
          dest: 'img'
        },
        {
          src: 'sertif/**/*',
          dest: 'sertif'
        },
        {
          src: 'mysong/**/*',
          dest: 'mysong'
        },
        {
          src: 'projekUTS/**/*',
          dest: 'projekUTS'
        },
        {
          src: 'cv/**/*',
          dest: 'cv'
        }
      ]
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['@tailwindcss/typography']
        },
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    cssCodeSplit: true,
    target: 'es2015',
    reportCompressedSize: true
  },
  server: {
    port: 3000,
    open: true
  },
  css: {
    postcss: {
      plugins: [
        require('@tailwindcss/postcss'),
        require('autoprefixer'),
        require('cssnano')({
          preset: 'default'
        })
      ]
    }
  }
});