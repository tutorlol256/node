import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';

import models from './models';

const app = express();
app.use(cors());
app.use(compression());
app.use(helmet());

app.get('/', (req, res) => {
    return res.send(Object.values(models.traficLines));
});

app.listen(process.env.PORT, () =>
    console.log(`Example app listening`),
);