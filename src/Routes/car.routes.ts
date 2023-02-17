import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const carsRoutes = Router();

const carController = new CarController();

carsRoutes.post('/', carController.create);

export default carsRoutes;