import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');

const app: express.Express = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.get('*', (req: express.Request, res: express.Response) => {
  res.send('Hello world!');
});

export default app;
