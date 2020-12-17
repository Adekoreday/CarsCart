import express, { json, urlencoded } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import routes from '../routes'
import '../database'

config();

const PORT = process.env.PORT || 6000;

const app = express();
app.use(cors())
app.use(json());
app.use(urlencoded({ extended: false, }));

app.use('/api/v1', routes);

app.get('*', (req, res) => res.status(200).json({message: 'welcome to user app'}))
app.listen(PORT, async () => {
    console.log('app listening on the following PORT', PORT)
})