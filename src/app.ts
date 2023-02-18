import express from 'express';
import carsRoutes from './Routes/car.routes';
import motorcycleRoutes from './Routes/motorcycle.routes';

const app = express();
app.use(express.json());
app.use('/cars', carsRoutes);
app.use('/motorcycles', motorcycleRoutes);

export default app;
