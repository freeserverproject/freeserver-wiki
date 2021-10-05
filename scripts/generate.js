const path = require('path');
const fs = require('fs');
const showFiles = require('./showFiles.js');
const config = require('../config.js');

const docsPath = path.join(__dirname, '../docs');

const files = showFiles(docsPath, file => file.endsWith('.md'))
  .map(file => config.rootHref + path.relative(docsPath, file).replace(/\.md$/, '.html'));

const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${config.rootHref}</loc></url>${
  files.map(file => `<url><loc>${file}</loc></url>`).join('')
}</urlset>`

fs.writeFileSync(path.join(docsPath, 'public/sitemap.xml'), sitemap);