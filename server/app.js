require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const db = require('./modules/db');
const routes = require('./routes');

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(bodyParser.json({ strict: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(port, async () => {
  await db.client.authenticate();
  console.log(`Example app listening at http://localhost:${port}`);
});
