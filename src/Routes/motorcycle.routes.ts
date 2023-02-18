import { Router } from 'express';
import MotorcycleController from '../Controllers/Motorcicle.controller';

const motorcycleRoutes = Router();

const motorcycleController = new MotorcycleController();

motorcycleRoutes.post('/', motorcycleController.create);
motorcycleRoutes.get('/', motorcycleController.findAll);
motorcycleRoutes.get('/:id', motorcycleController.findByid);
motorcycleRoutes.put('/:id', motorcycleController.update);
motorcycleRoutes.delete('/:id', motorcycleController.delete);

export default motorcycleRoutes;