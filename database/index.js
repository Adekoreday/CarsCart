import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(process.env.DB_URL, 
        {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('database connected successfully >>>')
        })
        .catch(e => {
            console.log('database connection error', e)
        });
    }
}

const connection = new Database();
export default connection;