import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const carsRoutes = Router();

const carController = new CarController();

carsRoutes.post('/', carController.create);
carsRoutes.get('/', carController.findAll);
carsRoutes.get('/:id', carController.findByid);

export default carsRoutes;