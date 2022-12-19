const express = require('express');
const path = require('path');

const app = express();
const app_name = 'mfe';
const app_host = '0.0.0.0';
const app_port = '9000';

const buildPath = `${__dirname}/dist/shell/latest`;
const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.jpge',
  '.svg',
  '.woff2',
  '.woff',
  '.ttf',
  '.mp4',
  '.glb',
  '.gltf',
  '.bin',
];

app.use(express.static('/dist/shell/latest'));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));

app.get('/*', (req, res) => {
  if (allowedExt.filter((ext) => req.url.indexOf(ext) > 0).length > 0) {
    res.sendFile(path.resolve(`${buildPath}/${req.url}`));
  } else {
    res.sendFile(path.resolve(`${buildPath}/index.html`));
  }
});

app.listen(app_port, app_host, () => {
  console.log('Running ' + app_name + ', Port ' + app_port);
});
