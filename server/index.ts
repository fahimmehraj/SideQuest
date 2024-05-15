import 'dotenv/config'
import express, { Application, Request, Response } from 'express'
import webhook from './webhook';

const app = express()

const port = process.env.PORT || 3000;

app.get('/toto', (req, res) => {
    res.send('Hello toto')
});

app.use('/api', webhook)

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
});

export default app;