import * as esbuild from 'esbuild-wasm';
import fs from 'fs';
import path from 'path';

async function build() {
  console.log('⚡ Initializing esbuild-wasm for frontend build...');
  await esbuild.initialize({});

  const distDir = path.resolve('dist');
  const rootDistDir = path.resolve('../dist');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  if (!fs.existsSync(rootDistDir)) {
    fs.mkdirSync(rootDistDir, { recursive: true });
  }

  console.log('📦 Bundling React application...');
  await esbuild.build({
    entryPoints: ['src/main.jsx'],
    bundle: true,
    outfile: 'dist/bundle.js',
    minify: true,
    sourcemap: true,
    loader: {
      '.js': 'jsx',
      '.jsx': 'jsx',
      '.css': 'css',
      '.png': 'dataurl',
      '.jpg': 'dataurl',
      '.jpeg': 'dataurl',
      '.svg': 'dataurl'
    },
    define: {
      'process.env.NODE_ENV': '"production"'
    }
  });

  // Copy bundle.js to root dist as well
  fs.copyFileSync('dist/bundle.js', '../dist/bundle.js');
  if (fs.existsSync('dist/bundle.css')) {
    fs.copyFileSync('dist/bundle.css', '../dist/bundle.css');
  }

  // Copy all public static assets to dist and root dist
  const copyPublicAssets = (srcDir) => {
    if (!fs.existsSync(srcDir)) return;
    const files = fs.readdirSync(srcDir);
    for (const file of files) {
      const srcFile = path.join(srcDir, file);
      if (fs.statSync(srcFile).isFile()) {
        fs.copyFileSync(srcFile, path.join('dist', file));
        fs.copyFileSync(srcFile, path.join('../dist', file));
      }
    }
  };
  copyPublicAssets('public');
  copyPublicAssets('../public');

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Jaynarayan Panda | AI/ML Engineer & Intelligent Systems Specialist</title>
    <meta name="description" content="Portfolio of Jaynarayan Panda - AI/ML Engineer & Intelligent Systems Specialist." />
    <!-- Tailwind CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['"Plus Jakarta Sans"', 'sans-serif'],
              heading: ['Syne', '"Space Grotesk"', 'sans-serif'],
              display: ['Syne', '"Space Grotesk"', 'sans-serif'],
              mono: ['"JetBrains Mono"', 'monospace']
            }
          }
        }
      }
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Space+Grotesk:wght@500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/bundle.css">
  </head>
  <body class="bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white antialiased overflow-x-hidden">
    <div id="root"></div>
    <script src="/bundle.js"></script>
  </body>
</html>`;

  fs.writeFileSync('dist/index.html', htmlContent, 'utf-8');
  fs.writeFileSync('../dist/index.html', htmlContent, 'utf-8');
  console.log('✅ Frontend build completed successfully into dist/');
}

build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
