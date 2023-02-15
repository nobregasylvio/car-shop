import { Router } from 'express';
import CarsController from '../Controllers/Car.controller';

const carsRoutes = Router();

carsRoutes.post('/', (req, res, next) => new CarsController(req, res, next).create());

export default carsRoutes;