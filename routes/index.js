import express from 'express';
import User from '../controller/user';
import Car from '../controller/car';

const route = express.Router();
route.post('/users', User.Create);
route.post('/car', Car.Create);

export default route;