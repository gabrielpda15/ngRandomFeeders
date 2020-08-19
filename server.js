import express, { static } from 'express';
import { join } from 'path';
const nomeApp = process.env.npm_package_name;
const app = express();

app.use(static(`${__dirname}/dist/${nomeApp}`));

app.get('/*', (req, res) => {
  res.sendFile(join(`${__dirname}/dist/${nomeApp}/index.html`));
});

app.listen(process.env.PORT || 8080);
